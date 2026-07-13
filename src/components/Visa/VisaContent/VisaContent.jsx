import {
    useEffect,
    useMemo,
    useState,
} from "react";

import VisaFilters from "../VisaFilters/VisaFilters";
import VisaToolbar from "../VisaToolbar/VisaToolbar";
import VisaGrid from "../VisaGrid/VisaGrid";
import VisaSidebar from "../VisaSidebar/VisaSidebar";
import VisaPagination from "../VisaPagination/VisaPagination";

import {
    processingTimes,
} from "../../../data/visa/visaData";

const initialFilters = {
    destination: "All Destinations",
    visaTypes: [],
    processingTimes: [],
};

const ITEMS_PER_PAGE = 6;

const VisaContent = ({
    visaServices = [],
}) => {
    const [filters, setFilters] =
        useState(initialFilters);

    const [appliedFilters, setAppliedFilters] =
        useState(initialFilters);

    const [sortBy, setSortBy] =
        useState("recommended");

    const [viewMode, setViewMode] =
        useState("grid");

    const [currentPage, setCurrentPage] =
        useState(1);

    // ==========================================
    // UNIQUE DESTINATION COUNTRIES
    // ==========================================

    const countries = useMemo(() => {
        return [
            ...new Set(
                visaServices.map(
                    (visa) => visa.country
                )
            ),
        ].sort();
    }, [visaServices]);

    // ==========================================
    // GET FIRST PROCESSING DAY NUMBER
    // "3 - 5 Days" => 3
    // ==========================================

    const getProcessingDays = (
        value = ""
    ) => {
        const match =
            String(value).match(/\d+/);

        return match
            ? Number(match[0])
            : 0;
    };

    // ==========================================
    // ACTIVE FILTERING
    // ==========================================

    const filteredVisaServices =
        useMemo(() => {
            return visaServices.filter(
                (visa) => {
                    // DESTINATION
                    const destinationMatch =
                        appliedFilters.destination ===
                            "All Destinations" ||
                        visa.country ===
                            appliedFilters.destination;

                    // VISA TYPE
                    const visaTypeMatch =
                        appliedFilters.visaTypes
                            .length === 0 ||
                        appliedFilters.visaTypes.includes(
                            visa.visaType
                        );

                    // PROCESSING TIME
                    const processingDays =
                        getProcessingDays(
                            visa.processingTime
                        );

                    const processingMatch =
                        appliedFilters
                            .processingTimes
                            .length === 0 ||
                        appliedFilters
                            .processingTimes
                            .some(
                                (
                                    selectedValue
                                ) => {
                                    const range =
                                        processingTimes.find(
                                            (
                                                item
                                            ) =>
                                                item.value ===
                                                selectedValue
                                        );

                                    if (!range) {
                                        return false;
                                    }

                                    return (
                                        processingDays >=
                                            range.min &&
                                        processingDays <=
                                            range.max
                                    );
                                }
                            );

                    return (
                        destinationMatch &&
                        visaTypeMatch &&
                        processingMatch
                    );
                }
            );
        }, [
            visaServices,
            appliedFilters,
        ]);

    // ==========================================
    // ACTIVE SORTING
    // ==========================================

    const sortedVisaServices =
        useMemo(() => {
            const visas = [
                ...filteredVisaServices,
            ];

            switch (sortBy) {
                case "price-low":
                    return visas.sort(
                        (a, b) =>
                            Number(a.price) -
                            Number(b.price)
                    );

                case "price-high":
                    return visas.sort(
                        (a, b) =>
                            Number(b.price) -
                            Number(a.price)
                    );

                case "processing-fast":
                    return visas.sort(
                        (a, b) =>
                            getProcessingDays(
                                a.processingTime
                            ) -
                            getProcessingDays(
                                b.processingTime
                            )
                    );

                default:
                    return visas;
            }
        }, [
            filteredVisaServices,
            sortBy,
        ]);

    // ==========================================
    // PAGINATION CALCULATION
    // ==========================================

    const totalPages = Math.ceil(
        sortedVisaServices.length /
            ITEMS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) *
        ITEMS_PER_PAGE;

    const endIndex =
        startIndex +
        ITEMS_PER_PAGE;

    const paginatedVisaServices =
        useMemo(() => {
            return sortedVisaServices.slice(
                startIndex,
                endIndex
            );
        }, [
            sortedVisaServices,
            startIndex,
            endIndex,
        ]);

    // ==========================================
    // SAFETY:
    // IF FILTER RESULT REDUCES TOTAL PAGES
    // ==========================================

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

    // ==========================================
    // APPLY FILTERS
    // ==========================================

    const handleApplyFilters = () => {
        setAppliedFilters({
            destination:
                filters.destination,

            visaTypes: [
                ...filters.visaTypes,
            ],

            processingTimes: [
                ...filters.processingTimes,
            ],
        });

        // FILTER CHANGE => PAGE 1
        setCurrentPage(1);
    };

    // ==========================================
    // RESET FILTERS
    // ==========================================

    const handleResetFilters = () => {
        setFilters({
            ...initialFilters,
        });

        setAppliedFilters({
            ...initialFilters,
        });

        setCurrentPage(1);
    };

    // ==========================================
    // SORT CHANGE
    // ==========================================

    const handleSortChange = (
        value
    ) => {
        setSortBy(value);
        setCurrentPage(1);
    };

    // ==========================================
    // VIEW MODE CHANGE
    // ==========================================

    const handleViewModeChange = (
        mode
    ) => {
        setViewMode(mode);
        setCurrentPage(1);
    };

    // ==========================================
    // PAGE CHANGE
    // ==========================================

    const handlePageChange = (
        page
    ) => {
        if (
            page < 1 ||
            page > totalPages
        ) {
            return;
        }

        setCurrentPage(page);

        // Scroll to listing area
        window.scrollTo({
            top: 620,
            behavior: "smooth",
        });
    };

    return (
        <section
            className="
                bg-[#f7f9fc]
                py-8
                lg:py-10
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1440px]
                    px-4
                    sm:px-6
                    lg:px-8
                    xl:px-10
                "
            >
                {/* =================================
                    FINAL DESKTOP 3-COLUMN LAYOUT

                    LEFT FILTER  = 270px
                    CENTER       = Flexible
                    RIGHT        = 270px
                ================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        items-start
                        gap-5
                        xl:grid-cols-[270px_minmax(0,1fr)_270px]
                        2xl:gap-6
                    "
                >
                    {/* =========================
                        LEFT FILTER SIDEBAR
                    ========================== */}

                    <div
                        className="
                            xl:sticky
                            xl:top-[105px]
                        "
                    >
                        <VisaFilters
                            countries={
                                countries
                            }
                            filters={
                                filters
                            }
                            onFilterChange={
                                setFilters
                            }
                            onApplyFilters={
                                handleApplyFilters
                            }
                            onResetFilters={
                                handleResetFilters
                            }
                        />
                    </div>

                    {/* =========================
                        CENTER VISA CONTENT
                    ========================== */}

                    <main
                        className="
                            min-w-0
                        "
                    >
                        <VisaToolbar
                            resultCount={
                                sortedVisaServices.length
                            }
                            sortBy={
                                sortBy
                            }
                            onSortChange={
                                handleSortChange
                            }
                            viewMode={
                                viewMode
                            }
                            onViewModeChange={
                                handleViewModeChange
                            }
                        />

                        <VisaGrid
                            visas={
                                paginatedVisaServices
                            }
                            viewMode={
                                viewMode
                            }
                        />

                        <VisaPagination
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
                    </main>

                    {/* =========================
                        RIGHT SIDEBAR
                    ========================== */}

                    <div
                        className="
                            xl:sticky
                            xl:top-[105px]
                        "
                    >
                        <VisaSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaContent;