import { useMemo, useState } from "react";

import HotelHero from "../../components/Hotels/HotelHero/HotelHero";
import HotelSearchBar from "../../components/Hotels/HotelSearchBar/HotelSearchBar";
import HotelFilters from "../../components/Hotels/HotelFilters/HotelFilters";
import HotelListing from "../../components/Hotels/HotelListing/HotelListing";
import HotelSidebar from "../../components/Hotels/HotelSidebar/HotelSidebar";
import HotelPagination from "../../components/Hotels/HotelPagination/HotelPagination";

import { hotelsData } from "../../data/hotels/hotelsData";

const HotelsPage = () => {
    // ==========================================
    // SEARCH STATE
    // ==========================================

    const [searchData, setSearchData] = useState({
        destination: "",
        checkIn: "",
        checkOut: "",
        adults: 2,
        children: 0,
        rooms: 1,
    });

    // Search button click করার পর এই state update হবে
    const [appliedDestination, setAppliedDestination] = useState("");

    // ==========================================
    // FILTER STATE
    // ==========================================

    const [filters, setFilters] = useState({
        hotelName: "",
        maxPrice: 1000,
        stars: [],
        guestRatings: [],
        facilities: [],
    });

    // ==========================================
    // SORT STATE
    // ==========================================

    const [sortBy, setSortBy] = useState("recommended");

    // ==========================================
    // VIEW MODE
    // ==========================================

    const [viewMode, setViewMode] = useState("list");

    // ==========================================
    // PAGINATION STATE
    // ==========================================

    const [currentPage, setCurrentPage] = useState(1);

    const hotelsPerPage = 4;

    // ==========================================
    // SEARCH HANDLER
    // ==========================================

    const handleSearch = () => {
        setAppliedDestination(
            searchData.destination.trim().toLowerCase()
        );

        setCurrentPage(1);
    };

    // ==========================================
    // FILTER CHANGE HANDLER
    // ==========================================

    const handleFilterChange = (filterName, value) => {
        setFilters((previousFilters) => ({
            ...previousFilters,
            [filterName]: value,
        }));

        setCurrentPage(1);
    };

    // ==========================================
    // RESET ALL FILTERS
    // ==========================================

    const handleResetFilters = () => {
        setFilters({
            hotelName: "",
            maxPrice: 1000,
            stars: [],
            guestRatings: [],
            facilities: [],
        });

        setCurrentPage(1);
    };

    // ==========================================
    // COMPLETE FILTERING + SORTING LOGIC
    // ==========================================

    const filteredHotels = useMemo(() => {
        let result = [...hotelsData];

        // --------------------------------------
        // DESTINATION SEARCH
        // --------------------------------------

        if (appliedDestination) {
            result = result.filter((hotel) => {
                const searchableText = `
                    ${hotel.name || ""}
                    ${hotel.location || ""}
                    ${hotel.city || ""}
                    ${hotel.country || ""}
                `.toLowerCase();

                return searchableText.includes(appliedDestination);
            });
        }

        // --------------------------------------
        // HOTEL NAME FILTER
        // --------------------------------------

        if (filters.hotelName.trim()) {
            const hotelNameQuery =
                filters.hotelName.trim().toLowerCase();

            result = result.filter((hotel) =>
                hotel.name
                    ?.toLowerCase()
                    .includes(hotelNameQuery)
            );
        }

        // --------------------------------------
        // PRICE FILTER
        // --------------------------------------

        result = result.filter(
            (hotel) =>
                Number(hotel.pricePerNight) <=
                Number(filters.maxPrice)
        );

        // --------------------------------------
        // STAR RATING FILTER
        // --------------------------------------

        if (filters.stars.length > 0) {
            result = result.filter((hotel) =>
                filters.stars.includes(Number(hotel.stars))
            );
        }

        // --------------------------------------
        // GUEST RATING FILTER
        // Example:
        // 4.5 & Above
        // 4.0 & Above
        // --------------------------------------

        if (filters.guestRatings.length > 0) {
            result = result.filter((hotel) =>
                filters.guestRatings.some(
                    (minimumRating) =>
                        Number(hotel.rating) >=
                        Number(minimumRating)
                )
            );
        }

        // --------------------------------------
        // FACILITIES FILTER
        // Selected সব facilities hotel-এ থাকতে হবে
        // --------------------------------------

        if (filters.facilities.length > 0) {
            result = result.filter((hotel) => {
                const hotelFacilities =
                    hotel.facilities?.map((facility) =>
                        facility.toLowerCase()
                    ) || [];

                return filters.facilities.every(
                    (selectedFacility) =>
                        hotelFacilities.includes(
                            selectedFacility.toLowerCase()
                        )
                );
            });
        }

        // ======================================
        // SORTING
        // ======================================

        switch (sortBy) {
            case "price-low":
                result.sort(
                    (a, b) =>
                        Number(a.pricePerNight) -
                        Number(b.pricePerNight)
                );
                break;

            case "price-high":
                result.sort(
                    (a, b) =>
                        Number(b.pricePerNight) -
                        Number(a.pricePerNight)
                );
                break;

            case "rating":
                result.sort(
                    (a, b) =>
                        Number(b.rating) -
                        Number(a.rating)
                );
                break;

            default:
                // Original hotelsData order
                break;
        }

        return result;
    }, [
        appliedDestination,
        filters,
        sortBy,
    ]);

    // ==========================================
    // PAGINATION CALCULATION
    // ==========================================

    const totalHotels = filteredHotels.length;

    const totalPages = Math.max(
        1,
        Math.ceil(totalHotels / hotelsPerPage)
    );

    const safeCurrentPage = Math.min(
        currentPage,
        totalPages
    );

    const startIndex =
        (safeCurrentPage - 1) * hotelsPerPage;

    const endIndex =
        startIndex + hotelsPerPage;

    const paginatedHotels = filteredHotels.slice(
        startIndex,
        endIndex
    );

    // ==========================================
    // PAGE CHANGE
    // ==========================================

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;

        setCurrentPage(page);

        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };

    return (
        <main className="min-h-screen bg-[#f7f9fc]">

            {/* ==================================
                HERO SECTION
            =================================== */}
            <HotelHero />

            {/* ==================================
                HOTEL SEARCH BAR
            =================================== */}
            <HotelSearchBar
                searchData={searchData}
                setSearchData={setSearchData}
                onSearch={handleSearch}
            />

            {/* ==================================
                MAIN HOTEL CONTENT
            =================================== */}
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
                            grid
                            grid-cols-1
                            gap-5
                            lg:grid-cols-[210px_minmax(0,1fr)]
                            xl:grid-cols-[210px_minmax(0,1fr)_220px]
                        "
                    >
                        {/* ======================
                            LEFT FILTER SIDEBAR
                        ======================= */}
                        <aside className="min-w-0">
                            <HotelFilters
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onResetFilters={handleResetFilters}
                            />
                        </aside>

                        {/* ======================
                            HOTEL RESULTS
                        ======================= */}
                        <div className="min-w-0">
                            <HotelListing
                                hotels={paginatedHotels}
                                totalHotels={totalHotels}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                viewMode={viewMode}
                                setViewMode={setViewMode}
                            />

                            {/* PAGINATION */}
                            {totalHotels > 0 && (
                                <HotelPagination
                                    currentPage={safeCurrentPage}
                                    totalPages={totalPages}
                                    totalHotels={totalHotels}
                                    hotelsPerPage={hotelsPerPage}
                                    onPageChange={handlePageChange}
                                />
                            )}
                        </div>

                        {/* ======================
                            RIGHT SIDEBAR
                        ======================= */}
                        <aside
                            className="
                                min-w-0
                                lg:col-span-2
                                xl:col-span-1
                            "
                        >
                            <HotelSidebar />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HotelsPage;