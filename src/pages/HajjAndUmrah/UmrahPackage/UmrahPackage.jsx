import {
    useEffect,
    useMemo,
    useState,
} from "react";

import UmrahPackageHero from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageHero";
import UmrahPackageSearch from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageSearch";
import UmrahPackageFilter from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageFilter";
import UmrahPackageToolbar from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageToolbar";
import UmrahPackageGrid from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageGrid";
import UmrahPackagePagination from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackagePagination";

import WhyChooseUmrah from "../../../components/HajjAndUmrah/UmrahPackage/WhyChooseUmrah";
import UmrahHelpCard from "../../../components/HajjAndUmrah/UmrahPackage/UmrahHelpCard";
import UmrahResources from "../../../components/HajjAndUmrah/UmrahPackage/UmrahResources";
import UmrahPackageFeatures from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageFeatures";
import {
    umrahPackageFilterData,
    umrahPackagesData,
} from "../../../data/HajjAndUmrah/UmrahPackageData";


const PACKAGES_PER_PAGE = 6;


const getInitialSearchFilters = () => ({
    destination: "",
    duration: "",
    packageType: "",
    travelMonth: "",
});


const getInitialFilters = () => ({
    packageTypes: [],
    durations: [],
    hotelRatings: [],
    services: [],
    minPrice: umrahPackageFilterData.priceRange.min,
    maxPrice: umrahPackageFilterData.priceRange.max,
});


const UmrahPackage = () => {

    const [searchFilters, setSearchFilters] = useState(
        getInitialSearchFilters
    );

    const [filters, setFilters] = useState(
        getInitialFilters
    );

    const [sortBy, setSortBy] = useState("Popularity");

    const [viewMode, setViewMode] = useState("grid");

    const [currentPage, setCurrentPage] = useState(1);


    // =====================================
    // SEARCH
    // =====================================

    const handleSearch = (values) => {

        setSearchFilters({
            ...getInitialSearchFilters(),
            ...values,
        });

        setCurrentPage(1);

    };


    // =====================================
    // FILTER CHANGE
    // =====================================

    const handleFilterChange = (newFilters) => {

        setFilters(newFilters);

        setCurrentPage(1);

    };


    // =====================================
    // SORT CHANGE
    // =====================================

    const handleSortChange = (value) => {

        setSortBy(value);

        setCurrentPage(1);

    };


    // =====================================
    // RESET ALL
    // =====================================

    const handleResetFilters = () => {

        setFilters(
            getInitialFilters()
        );

        setSearchFilters(
            getInitialSearchFilters()
        );

        setSortBy("Popularity");

        setCurrentPage(1);

    };


    // =====================================
    // FILTER + SEARCH + SORT
    // =====================================

    const filteredPackages = useMemo(() => {

        let result = [...umrahPackagesData];


        // DESTINATION SEARCH

        if (searchFilters.destination) {

            const destination =
                searchFilters.destination
                    .toLowerCase()
                    .trim();

            result = result.filter((item) => {

                const searchableText = [
                    item.title,
                    item.location,
                    item.destination,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(
                    destination
                );

            });

        }


        // DURATION SEARCH

        if (searchFilters.duration) {

            result = result.filter(
                (item) =>
                    item.duration ===
                    searchFilters.duration
            );

        }


        // PACKAGE TYPE SEARCH

        if (searchFilters.packageType) {

            result = result.filter(
                (item) =>
                    item.packageType ===
                    searchFilters.packageType
            );

        }


        // TRAVEL MONTH SEARCH

        if (searchFilters.travelMonth) {

            result = result.filter((item) => {

                if (Array.isArray(item.travelMonths)) {

                    return item.travelMonths.includes(
                        searchFilters.travelMonth
                    );

                }

                return (
                    item.travelMonth ===
                    searchFilters.travelMonth
                );

            });

        }


        // PACKAGE TYPE FILTER

        if (filters.packageTypes?.length > 0) {

            result = result.filter(
                (item) =>
                    filters.packageTypes.includes(
                        item.packageType
                    )
            );

        }


        // DURATION FILTER

        if (filters.durations?.length > 0) {

            result = result.filter(
                (item) =>
                    filters.durations.includes(
                        item.duration
                    )
            );

        }


        // HOTEL RATING FILTER

        if (filters.hotelRatings?.length > 0) {

            result = result.filter((item) => {

                const hotelRating =
                    typeof item.hotel === "object"
                        ? item.hotel?.rating
                        : item.hotelRating;

                return filters.hotelRatings.includes(
                    Number(hotelRating)
                );

            });

        }


        // SERVICES FILTER

        if (filters.services?.length > 0) {

            result = result.filter((item) => {

                const services = item.services || [];

                return filters.services.every(
                    (service) =>
                        services.includes(service)
                );

            });

        }


        // PRICE FILTER

        result = result.filter((item) => {

            const price = Number(item.price) || 0;

            return (
                price >= Number(filters.minPrice) &&
                price <= Number(filters.maxPrice)
            );

        });


        // SORTING

        switch (sortBy) {

            case "Price: Low to High":

                result.sort(
                    (a, b) =>
                        Number(a.price) -
                        Number(b.price)
                );

                break;


            case "Price: High to Low":

                result.sort(
                    (a, b) =>
                        Number(b.price) -
                        Number(a.price)
                );

                break;


            case "Highest Rated":

                result.sort(
                    (a, b) =>
                        Number(b.rating) -
                        Number(a.rating)
                );

                break;


            case "Newest":

                result.sort(
                    (a, b) =>
                        Number(b.id) -
                        Number(a.id)
                );

                break;


            case "Popularity":
            default:

                result.sort(
                    (a, b) =>
                        Number(
                            b.popularity ||
                            b.reviews ||
                            0
                        ) -
                        Number(
                            a.popularity ||
                            a.reviews ||
                            0
                        )
                );

                break;

        }


        return result;

    }, [
        searchFilters,
        filters,
        sortBy,
    ]);


    // =====================================
    // PAGINATION
    // =====================================

    const totalPages = Math.ceil(
        filteredPackages.length /
        PACKAGES_PER_PAGE
    );


    const paginatedPackages = useMemo(() => {

        const startIndex =
            (currentPage - 1) *
            PACKAGES_PER_PAGE;

        return filteredPackages.slice(
            startIndex,
            startIndex + PACKAGES_PER_PAGE
        );

    }, [
        filteredPackages,
        currentPage,
    ]);


    useEffect(() => {

        if (
            totalPages > 0 &&
            currentPage > totalPages
        ) {

            setCurrentPage(totalPages);

        }

    }, [
        currentPage,
        totalPages,
    ]);


    const handlePageChange = (page) => {

        if (
            page < 1 ||
            page > totalPages
        ) {
            return;
        }

        setCurrentPage(page);

        window.scrollTo({
            top: 600,
            behavior: "smooth",
        });

    };


    return (

        <main
            className="
                min-h-screen
                overflow-x-hidden
                bg-[#f7f8fa]
            "
        >


            {/* HERO */}

            <UmrahPackageHero />


            {/* SEARCH */}

            <UmrahPackageSearch
                searchFilters={searchFilters}
                onSearch={handleSearch}
            />


            {/* MAIN CONTENT */}

            <section className="py-8 lg:py-10">

                <div
                    className="
                        mx-auto
                        w-full
                        max-w-[1700px]
                        px-4
                        sm:px-5
                        lg:px-6
                        xl:px-6
                    "
                >


                    {/* =====================================
                        RESPONSIVE 3 COLUMN LAYOUT
                    ===================================== */}

                    <div
                        className="
                            grid
                            w-full
                            min-w-0
                            grid-cols-1
                            gap-5

                            lg:grid-cols-[240px_minmax(0,1fr)]

                            xl:grid-cols-[240px_minmax(0,1fr)_240px]

                            2xl:grid-cols-[270px_minmax(0,1fr)_270px]
                            2xl:gap-6
                        "
                    >


                        {/* =====================================
                            LEFT FILTER
                        ===================================== */}

                        <aside
                            className="
                                min-w-0
                                self-start
                            "
                        >

                            <div
                                className="
                                    lg:sticky
                                    lg:top-24
                                "
                            >

                                <UmrahPackageFilter
                                    filters={filters}
                                    onFilterChange={
                                        handleFilterChange
                                    }
                                    onReset={
                                        handleResetFilters
                                    }
                                />

                            </div>

                        </aside>


                        {/* =====================================
                            CENTER CONTENT
                        ===================================== */}

                        <div
                            className="
                                min-w-0
                                w-full
                            "
                        >


                            {/* TOOLBAR */}

                            <UmrahPackageToolbar
                                totalPackages={
                                    filteredPackages.length
                                }
                                sortBy={sortBy}
                                onSortChange={
                                    handleSortChange
                                }
                                viewMode={viewMode}
                                onViewModeChange={
                                    setViewMode
                                }
                            />


                            {/* PACKAGE GRID */}

                            <UmrahPackageGrid
                                packages={
                                    paginatedPackages
                                }
                                viewMode={viewMode}
                                onResetFilters={
                                    handleResetFilters
                                }
                            />


                            {/* PAGINATION */}

                            {totalPages > 1 && (

                                <div
                                    className="
                                        mt-8
                                        w-full
                                    "
                                >

                                    <UmrahPackagePagination
                                        currentPage={
                                            currentPage
                                        }
                                        totalPages={
                                            totalPages
                                        }
                                        onPageChange={
                                            handlePageChange
                                        }
                                    />

                                </div>

                            )}

                        </div>


                        {/* =====================================
                            RIGHT SIDEBAR
                        ===================================== */}

                        <aside
                            className="
                                min-w-0
                                self-start

                                lg:col-span-2

                                xl:col-span-1
                            "
                        >

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-5

                                    md:grid-cols-3

                                    xl:sticky
                                    xl:top-24
                                    xl:grid-cols-1
                                "
                            >

                                <WhyChooseUmrah />

                                <UmrahHelpCard />

                                <UmrahResources />

                            </div>

                        </aside>


                    </div>

                </div>

            </section>
            <UmrahPackageFeatures />
        </main>

    );

};


export default UmrahPackage;