import {
    useEffect,
    useMemo,
    useState,
} from "react";

import HajjUmrahHero from "../../components/HajjAndUmrah/HajjUmrahHero";
import HajjUmrahSearch from "../../components/HajjAndUmrah/HajjUmrahSearch";
import HajjUmrahContent from "../../components/HajjAndUmrah/HajjUmrahContent";
import HajjUmrahFeatures from "../../components/HajjAndUmrah/HajjUmrahFeatures";

import {
    hajjUmrahPackages,
    hajjUmrahFilterData,
    initialHajjUmrahFilters,
    initialHajjUmrahSearch,
    hajjUmrahPageConfig,
} from "../../data/HajjAndUmrah/HajjAndUmrahData";


const HajjAndUmrah = () => {

    const [searchData, setSearchData] = useState(
        initialHajjUmrahSearch
    );

    const [filters, setFilters] = useState(
        initialHajjUmrahFilters
    );

    const [sortBy, setSortBy] = useState(
        hajjUmrahPageConfig.defaultSort
    );

    const [viewMode, setViewMode] = useState("grid");

    const [currentPage, setCurrentPage] = useState(1);


    // ========================================
    // Search Change
    // ========================================

    const handleSearchChange = (name, value) => {
        setSearchData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // ========================================
    // Search Submit
    // ========================================

    const handleSearchSubmit = () => {
        setFilters((prev) => ({
            ...prev,
            packageType: searchData.packageType,
        }));

        setCurrentPage(1);
    };


    // ========================================
    // Filter Change
    // ========================================

    const handleFilterChange = (name, value) => {
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));

        setCurrentPage(1);
    };


    // ========================================
    // Price Change
    // ========================================

    const handlePriceChange = (value) => {
        setFilters((prev) => ({
            ...prev,

            priceRange: {
                ...prev.priceRange,
                max: Number(value),
            },
        }));

        setCurrentPage(1);
    };


    // ========================================
    // Clear Filters
    // ========================================

    const handleClearFilters = () => {
        setFilters({
            ...initialHajjUmrahFilters,

            priceRange: {
                ...initialHajjUmrahFilters.priceRange,
            },
        });

        setSearchData({
            ...initialHajjUmrahSearch,
        });

        setSortBy(
            hajjUmrahPageConfig.defaultSort
        );

        setCurrentPage(1);
    };


    // ========================================
    // Filter Packages
    // ========================================

    const filteredPackages = useMemo(() => {

        return hajjUmrahPackages.filter(
            (packageItem) => {

                // Package Type
                const matchesPackageType =
                    filters.packageType === "all" ||
                    packageItem.packageType ===
                        filters.packageType;


                // Departure City
                const matchesDepartureCity =
                    filters.departureCity === "all" ||
                    packageItem.departureCity ===
                        filters.departureCity;


                // Selected Duration
                const selectedDuration =
                    hajjUmrahFilterData.duration.options.find(
                        (option) =>
                            option.value === filters.duration
                    );


                // Duration
                const matchesDuration =
                    filters.duration === "all" ||
                    (
                        selectedDuration &&
                        packageItem.duration >=
                            selectedDuration.min &&
                        packageItem.duration <=
                            selectedDuration.max
                    );


                // Price
                const matchesPrice =
                    packageItem.price >=
                        filters.priceRange.min &&
                    packageItem.price <=
                        filters.priceRange.max;


                return (
                    matchesPackageType &&
                    matchesDepartureCity &&
                    matchesDuration &&
                    matchesPrice
                );
            }
        );

    }, [filters]);


    // ========================================
    // Sort Packages
    // ========================================

    const sortedPackages = useMemo(() => {

        const packages = [
            ...filteredPackages,
        ];


        switch (sortBy) {

            case "price-low-high":
                return packages.sort(
                    (a, b) => a.price - b.price
                );


            case "price-high-low":
                return packages.sort(
                    (a, b) => b.price - a.price
                );


            case "duration-short-long":
                return packages.sort(
                    (a, b) =>
                        a.duration - b.duration
                );


            case "duration-long-short":
                return packages.sort(
                    (a, b) =>
                        b.duration - a.duration
                );


            case "highest-rated":
                return packages.sort(
                    (a, b) =>
                        b.rating - a.rating
                );


            case "recommended":
            default:
                return packages.sort(
                    (a, b) =>
                        b.recommended -
                        a.recommended
                );
        }

    }, [
        filteredPackages,
        sortBy,
    ]);


    // ========================================
    // Pagination
    // ========================================

    const packagesPerPage =
        hajjUmrahPageConfig.packagesPerPage;

    const totalPages = Math.ceil(
        sortedPackages.length / packagesPerPage
    );

    const paginatedPackages = useMemo(() => {

        const startIndex =
            (currentPage - 1) *
            packagesPerPage;

        const endIndex =
            startIndex +
            packagesPerPage;

        return sortedPackages.slice(
            startIndex,
            endIndex
        );

    }, [
        sortedPackages,
        currentPage,
        packagesPerPage,
    ]);


    // ========================================
    // Keep Current Page Valid
    // ========================================

    useEffect(() => {
        if (
            totalPages > 0 &&
            currentPage > totalPages
        ) {
            setCurrentPage(totalPages);
        }
    }, [
        totalPages,
        currentPage,
    ]);


    // ========================================
    // Page Change
    // ========================================

    const handlePageChange = (page) => {

        if (
            page < 1 ||
            page > totalPages
        ) {
            return;
        }

        setCurrentPage(page);

        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };


    return (
        <main className="min-h-screen bg-[#f7f8f8]">

            {/* HERO */}
            <HajjUmrahHero />


            {/* FLOATING SEARCH */}
            <HajjUmrahSearch
                searchData={searchData}
                onSearchChange={handleSearchChange}
                onSearchSubmit={handleSearchSubmit}
            />


            {/* MAIN CONTENT */}
            <HajjUmrahContent
                filters={filters}
                onFilterChange={handleFilterChange}
                onPriceChange={handlePriceChange}
                onClearFilters={handleClearFilters}

                packages={paginatedPackages}
                totalResults={sortedPackages.length}

                sortBy={sortBy}
                onSortChange={setSortBy}

                viewMode={viewMode}
                onViewModeChange={setViewMode}

                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />


            {/* BOTTOM FEATURES */}
            <HajjUmrahFeatures />

        </main>
    );
};


export default HajjAndUmrah;