import { useEffect, useMemo, useState } from "react";

import TourHero from "../../components/tourPackages/TourHero";
import TourCategoryNav from "../../components/tourPackages/TourCategoryNav";
import TourFilters from "../../components/tourPackages/TourFilters";
import TourMobileFilter from "../../components/tourPackages/TourMobileFilter";
import TourToolbar from "../../components/tourPackages/TourToolbar";
import TourPackageGrid from "../../components/tourPackages/TourPackageGrid";
import TourPagination from "../../components/tourPackages/TourPagination";

import { tourPackages } from "../../data/tourPackagesData.js";

const ITEMS_PER_PAGE = 6;

const initialFilters = {
    destination: [],
    tourType: [],
    duration: [],
    maxBudget: 200000,
    rating: null,
};

const TourPackages = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [filters, setFilters] = useState(initialFilters);
    const [sortBy, setSortBy] = useState("popular");
    const [viewMode, setViewMode] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    /* =========================================
       FILTER + CATEGORY + SORTING
    ========================================= */

    const filteredPackages = useMemo(() => {
        let result = [...tourPackages];

        /* Category Navigation */
        if (activeCategory !== "all") {
            result = result.filter(
                (tour) =>
                    tour.category === activeCategory ||
                    tour.tourTypes.includes(activeCategory)
            );
        }

        /* Destination */
        if (filters.destination.length > 0) {
            result = result.filter((tour) =>
                filters.destination.includes(tour.destinationId)
            );
        }

        /* Tour Type */
        if (filters.tourType.length > 0) {
            result = result.filter((tour) =>
                filters.tourType.some((type) =>
                    tour.tourTypes.includes(type)
                )
            );
        }

        /* Duration */
        if (filters.duration.length > 0) {
            result = result.filter((tour) =>
                filters.duration.includes(tour.durationId)
            );
        }

        /* Budget */
        result = result.filter(
            (tour) => tour.price <= filters.maxBudget
        );

        /* Rating */
        if (filters.rating) {
            result = result.filter(
                (tour) => tour.rating >= filters.rating
            );
        }

        /* Sorting */
        switch (sortBy) {
            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;

            case "price-low":
                result.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                result.sort((a, b) => b.price - a.price);
                break;

            case "newest":
                result.sort((a, b) => b.id - a.id);
                break;

            case "popular":
            default:
                result.sort((a, b) => b.reviews - a.reviews);
                break;
        }

        return result;
    }, [activeCategory, filters, sortBy]);

    /* =========================================
       PAGINATION
    ========================================= */

    const totalPages = Math.ceil(
        filteredPackages.length / ITEMS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) * ITEMS_PER_PAGE;

    const currentPackages = filteredPackages.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const startItem =
        filteredPackages.length > 0
            ? startIndex + 1
            : 0;

    const endItem = Math.min(
        startIndex + ITEMS_PER_PAGE,
        filteredPackages.length
    );

    /* =========================================
       RESET PAGE
    ========================================= */

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, filters, sortBy]);

    /* =========================================
       MOBILE FILTER BODY LOCK
    ========================================= */

    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isFilterOpen]);

    /* =========================================
       ACTIONS
    ========================================= */

    const handleClearFilters = () => {
        setFilters({
            ...initialFilters,
        });
    };

    const handleApplyFilters = () => {
        setCurrentPage(1);
        setIsFilterOpen(false);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);

        window.scrollTo({
            top: 430,
            behavior: "smooth",
        });
    };

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#f7f9fc]">

            {/* =====================================
                HERO SECTION
            ===================================== */}
            <TourHero />

            {/* =====================================
                FLOATING CATEGORY NAVIGATION
            ===================================== */}
            <TourCategoryNav
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            {/* =====================================
                TOUR PACKAGES MAIN CONTENT
            ===================================== */}
            <section className="pb-20 pt-8">
                <div
                    className="
                        mx-auto
                        w-full
                        max-w-[1280px]
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >
                    <div
                        className="
                            flex
                            items-start
                            gap-6
                        "
                    >
                        {/* =================================
                            DESKTOP LEFT FILTER SIDEBAR
                        ================================= */}
                        <div
                            className="
                                hidden
                                lg:block
                                lg:w-[260px]
                                lg:min-w-[260px]
                                lg:shrink-0
                            "
                        >
                            <TourFilters
                                filters={filters}
                                setFilters={setFilters}
                                onApplyFilters={
                                    handleApplyFilters
                                }
                                onClearFilters={
                                    handleClearFilters
                                }
                            />
                        </div>

                        {/* =================================
                            RIGHT PACKAGES CONTENT
                        ================================= */}
                        <div className="min-w-0 flex-1">

                            {/* Toolbar */}
                            <TourToolbar
                                totalPackages={
                                    filteredPackages.length
                                }
                                startItem={startItem}
                                endItem={endItem}
                                sortBy={sortBy}
                                onSortChange={setSortBy}
                                viewMode={viewMode}
                                onViewModeChange={
                                    setViewMode
                                }
                                onOpenFilters={() =>
                                    setIsFilterOpen(true)
                                }
                            />

                            {/* Package Cards */}
                            <TourPackageGrid
                                packages={currentPackages}
                                viewMode={viewMode}
                            />

                            {/* Pagination */}
                            <TourPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={
                                    handlePageChange
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================
                MOBILE FILTER DRAWER
            ===================================== */}
            <TourMobileFilter
                isOpen={isFilterOpen}
                onClose={() =>
                    setIsFilterOpen(false)
                }
                filters={filters}
                setFilters={setFilters}
                onApplyFilters={
                    handleApplyFilters
                }
                onClearFilters={
                    handleClearFilters
                }
            />
        </main>
    );
};

export default TourPackages;