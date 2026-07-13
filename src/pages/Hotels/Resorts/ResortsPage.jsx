import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    resortsData,
} from "../../../data/hotels/resortsData";

// Components will be added in next parts
import ResortHero from "../../../components/Hotels/Resorts/ResortHero/ResortHero";
import ResortSearchBar from "../../../components/Hotels/Resorts/ResortSearchBar/ResortSearchBar";
import ResortFilters from "../../../components/Hotels/Resorts/ResortFilters/ResortFilters";
import ResortListing from "../../../components/Hotels/Resorts/ResortListing/ResortListing";
import ResortSidebar from "../../../components/Hotels/Resorts/ResortSidebar/ResortSidebar";
import ResortPagination from "../../../components/Hotels/Resorts/ResortPagination/ResortPagination";

const ResortsPage = () => {
    // ==========================================
    // SEARCH FORM STATE
    // ==========================================

    const [searchData, setSearchData] = useState({
        destination: "",
        checkIn: "",
        checkOut: "",
        adults: 2,
        children: 0,
        rooms: 1,
    });

    // Applied only when Search Resorts is clicked
    const [appliedDestination, setAppliedDestination] =
        useState("");

    // ==========================================
    // FILTER STATE
    // ==========================================

    const [filters, setFilters] = useState({
        resortName: "",
        maxPrice: 1000,
        stars: [],
        guestRatings: [],
        facilities: [],
    });

    // ==========================================
    // SORT + VIEW STATE
    // ==========================================

    const [sortBy, setSortBy] =
        useState("recommended");

    const [viewMode, setViewMode] =
        useState("list");

    // ==========================================
    // PAGINATION STATE
    // ==========================================

    const [currentPage, setCurrentPage] =
        useState(1);

    const resortsPerPage = 4;

    // ==========================================
    // SEARCH HANDLER
    // ==========================================

    const handleSearch = () => {
        setAppliedDestination(
            searchData.destination.trim()
        );

        setCurrentPage(1);
    };

    // ==========================================
    // FILTER CHANGE
    // ==========================================

    const handleFilterChange = (
        filterName,
        value
    ) => {
        setFilters((previousFilters) => ({
            ...previousFilters,
            [filterName]: value,
        }));

        setCurrentPage(1);
    };

    // ==========================================
    // RESET FILTERS
    // ==========================================

    const handleResetFilters = () => {
        setFilters({
            resortName: "",
            maxPrice: 1000,
            stars: [],
            guestRatings: [],
            facilities: [],
        });

        setCurrentPage(1);
    };

    // ==========================================
    // FILTER + SEARCH + SORT
    // ==========================================

    const filteredAndSortedResorts = useMemo(
        () => {
            let result = [...resortsData];

            // ----------------------------------
            // DESTINATION SEARCH
            // ----------------------------------

            if (appliedDestination) {
                const searchValue =
                    appliedDestination.toLowerCase();

                result = result.filter((resort) =>
                    [
                        resort.name,
                        resort.location,
                        resort.city,
                        resort.country,
                    ].some((value) =>
                        String(value || "")
                            .toLowerCase()
                            .includes(searchValue)
                    )
                );
            }

            // ----------------------------------
            // RESORT NAME
            // ----------------------------------

            if (filters.resortName.trim()) {
                const resortName =
                    filters.resortName
                        .trim()
                        .toLowerCase();

                result = result.filter((resort) =>
                    resort.name
                        .toLowerCase()
                        .includes(resortName)
                );
            }

            // ----------------------------------
            // PRICE RANGE
            // ----------------------------------

            result = result.filter(
                (resort) =>
                    Number(resort.pricePerNight) <=
                    Number(filters.maxPrice)
            );

            // ----------------------------------
            // STAR RATING
            // ----------------------------------

            if (filters.stars.length > 0) {
                result = result.filter((resort) =>
                    filters.stars.includes(
                        Number(resort.stars)
                    )
                );
            }

            // ----------------------------------
            // GUEST RATING
            // At least one selected threshold
            // ----------------------------------

            if (
                filters.guestRatings.length > 0
            ) {
                const lowestSelectedRating =
                    Math.min(
                        ...filters.guestRatings.map(
                            Number
                        )
                    );

                result = result.filter(
                    (resort) =>
                        Number(resort.rating) >=
                        lowestSelectedRating
                );
            }

            // ----------------------------------
            // FACILITIES
            // Resort must contain ALL selected
            // ----------------------------------

            if (
                filters.facilities.length > 0
            ) {
                result = result.filter(
                    (resort) =>
                        filters.facilities.every(
                            (facility) =>
                                resort.facilities.includes(
                                    facility
                                )
                        )
                );
            }

            // ----------------------------------
            // SORTING
            // ----------------------------------

            switch (sortBy) {
                case "price-low":
                    result.sort(
                        (a, b) =>
                            a.pricePerNight -
                            b.pricePerNight
                    );
                    break;

                case "price-high":
                    result.sort(
                        (a, b) =>
                            b.pricePerNight -
                            a.pricePerNight
                    );
                    break;

                case "rating":
                    result.sort(
                        (a, b) =>
                            b.rating - a.rating
                    );
                    break;

                case "stars":
                    result.sort(
                        (a, b) =>
                            b.stars - a.stars
                    );
                    break;

                case "recommended":
                default:
                    // Original resortsData order
                    break;
            }

            return result;
        },
        [
            appliedDestination,
            filters,
            sortBy,
        ]
    );

    // ==========================================
    // PAGINATION CALCULATION
    // ==========================================

    const totalResorts =
        filteredAndSortedResorts.length;

    const totalPages = Math.ceil(
        totalResorts / resortsPerPage
    );

    const startIndex =
        (currentPage - 1) * resortsPerPage;

    const endIndex =
        startIndex + resortsPerPage;

    const currentResorts =
        filteredAndSortedResorts.slice(
            startIndex,
            endIndex
        );

    // ==========================================
    // KEEP CURRENT PAGE VALID
    // ==========================================

    useEffect(() => {
        if (
            totalPages > 0 &&
            currentPage > totalPages
        ) {
            setCurrentPage(totalPages);
        }

        if (
            totalPages === 0 &&
            currentPage !== 1
        ) {
            setCurrentPage(1);
        }
    }, [
        totalPages,
        currentPage,
    ]);

    // ==========================================
    // PAGE CHANGE
    // ==========================================

    const handlePageChange = (page) => {
        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        setCurrentPage(page);

        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };

    // ==========================================
    // TEMPORARY PAGE
    // Components will be connected Part 2–6
    // ==========================================

    return (
    <main className="min-h-screen bg-slate-50">
        <ResortHero />

        {/* পরবর্তী sections */}

            {
                <ResortSearchBar
                searchData={searchData}
                setSearchData={setSearchData}
                onSearch={handleSearch}
             />
            }

            <section
                className="
                    mx-auto
                    w-full
                    max-w-[1280px]
                    px-4
                    py-12
                    sm:px-6
                    lg:px-8
                "
            >
                
                {/* TEMPORARY TEST */}
                <div className="rounded-xl bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Resorts Page
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        {totalResorts} resorts available
                    </p>

                    <div className="mt-6 grid gap-3">
                        {currentResorts.map(
                            (resort) => (
                                <div
                                    key={resort.id}
                                    className="
                                        rounded-lg
                                        border
                                        border-slate-200
                                        p-4
                                    "
                                >
                                    <h2 className="font-bold">
                                        {resort.name}
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        {resort.location}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>


                {
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-5
                            lg:grid-cols-[220px_minmax(0,1fr)]
                            xl:grid-cols-[220px_minmax(0,1fr)_230px]
                        "
                    >
                        <ResortFilters
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onResetFilters={handleResetFilters}
                        />

                        <div>
                            
                            <ResortListing
                                resorts={currentResorts}
                                totalResorts={totalResorts}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                viewMode={viewMode}
                                setViewMode={setViewMode}
                            />
                            <ResortPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                totalResorts={totalResorts}
                                resortsPerPage={resortsPerPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                        <div className="lg:col-span-2 xl:col-span-1">
                            <ResortSidebar />
                    </div>
                </div>
                }
            </section>
        </main>
    );
};

export default ResortsPage;