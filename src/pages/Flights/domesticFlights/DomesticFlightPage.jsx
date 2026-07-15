import { useMemo, useState } from "react";

import DomesticFlightHero from "../../../components/Flights/DomesticFlights/DomesticHero/DomesticHero.jsx";

import DomesticFlightSearch from "../../../components/Flights/DomesticFlights/DomesticFlightSearch/DomesticFlightSearch.jsx";

import DomesticFlightFilters from "../../../components/Flights/DomesticFlights/DomesticFlightFilters/DomesticFlightFilters.jsx";

import DomesticFlightResults from "../../../components/Flights/DomesticFlights/DomesticFlightResults/DomesticFlightResults.jsx";

import DomesticRightSidebar from "../../../components/Flights/DomesticFlights/DomesticRightSidebar/DomesticRightSidebar.jsx";

import DomesticPagination from "../../../components/Flights/DomesticFlights/DomesticPagination/DomesticPagination.jsx";

import DomesticTrustFeatures from "../../../components/Flights/DomesticFlights/DomesticTrustFeatures/DomesticTrustFeatures.jsx";

import { domesticFlightsData } from "../../../data/flights/domesticflights/DomesticFlight.js";


const FLIGHTS_PER_PAGE = 8;

const initialSearchData = {
    from: "",
    fromCode: "",
    to: "",
    toCode: "",
    departureDate: "",
    returnDate: "",
    travelers: 1,
    cabinClass: "",
    tripType: "one-way",
};

const initialFilters = {
    maxPrice: 10000,
    airlines: [],
    departureTimes: [],
    stops: [],
};


const DomesticFlightPage = () => {
    // ==========================================
    // STATES
    // ==========================================

    const [searchData, setSearchData] =
        useState(initialSearchData);

    const [filters, setFilters] =
        useState(initialFilters);

    const [sortBy, setSortBy] =
        useState("recommended");

    const [currentPage, setCurrentPage] =
        useState(1);


    // ==========================================
    // SEARCH
    // ==========================================

    const handleSearch = (newSearchData) => {
        setSearchData(newSearchData);

        // Search করলে প্রথম page থেকে result দেখাবে
        setCurrentPage(1);
    };


    // ==========================================
    // FILTER CHANGE
    // ==========================================

    const handleFilterChange = (category, value) => {
        setFilters((previousFilters) => ({
            ...previousFilters,
            [category]: value,
        }));

        setCurrentPage(1);
    };


    // ==========================================
    // RESET FILTER
    // ==========================================

    const handleResetFilters = () => {
        setFilters(initialFilters);
        setCurrentPage(1);
    };


    // ==========================================
    // SORT CHANGE
    // ==========================================

    const handleSortChange = (value) => {
        setSortBy(value);
        setCurrentPage(1);
    };


    // ==========================================
    // AIRLINE COUNTS
    // ==========================================

    const airlineCounts = useMemo(() => {
        return domesticFlightsData.reduce(
            (counts, flight) => {
                counts[flight.airline] =
                    (counts[flight.airline] || 0) + 1;

                return counts;
            },
            {}
        );
    }, []);


    // ==========================================
    // STOP COUNTS
    // ==========================================

    const stopCounts = useMemo(() => {
        return domesticFlightsData.reduce(
            (counts, flight) => {
                counts[flight.stopType] =
                    (counts[flight.stopType] || 0) + 1;

                return counts;
            },
            {}
        );
    }, []);


    // ==========================================
    // SEARCH + FILTER + SORT
    // ==========================================

    const filteredFlights = useMemo(() => {
        let results = [...domesticFlightsData];


        // ------------------------------------------
        // Route Search
        // ------------------------------------------

        if (searchData.fromCode) {
            results = results.filter(
                (flight) =>
                    flight.fromCode ===
                    searchData.fromCode
            );
        }

        if (searchData.toCode) {
            results = results.filter(
                (flight) =>
                    flight.toCode ===
                    searchData.toCode
            );
        }


        // ------------------------------------------
        // Cabin Class
        // ------------------------------------------

        if (searchData.cabinClass) {
            results = results.filter(
                (flight) =>
                    flight.cabinClass ===
                    searchData.cabinClass
            );
        }


        // ------------------------------------------
        // Maximum Price
        // ------------------------------------------

        results = results.filter(
            (flight) =>
                flight.price <= filters.maxPrice
        );


        // ------------------------------------------
        // Airlines
        // ------------------------------------------

        if (filters.airlines.length > 0) {
            results = results.filter((flight) =>
                filters.airlines.includes(
                    flight.airline
                )
            );
        }


        // ------------------------------------------
        // Departure Time
        // ------------------------------------------

        if (filters.departureTimes.length > 0) {
            results = results.filter((flight) =>
                filters.departureTimes.includes(
                    flight.departurePeriod
                )
            );
        }


        // ------------------------------------------
        // Stops
        // ------------------------------------------

        if (filters.stops.length > 0) {
            results = results.filter((flight) =>
                filters.stops.includes(
                    flight.stopType
                )
            );
        }


        // ------------------------------------------
        // Sorting
        // ------------------------------------------

        switch (sortBy) {
            case "price-low":
                results.sort(
                    (a, b) => a.price - b.price
                );
                break;

            case "price-high":
                results.sort(
                    (a, b) => b.price - a.price
                );
                break;

            case "departure-early":
                results.sort((a, b) =>
                    a.departure.localeCompare(
                        b.departure
                    )
                );
                break;

            case "departure-late":
                results.sort((a, b) =>
                    b.departure.localeCompare(
                        a.departure
                    )
                );
                break;

            case "rating":
                results.sort(
                    (a, b) => b.rating - a.rating
                );
                break;

            default:
                results.sort(
                    (a, b) => a.id - b.id
                );
        }

        return results;

    }, [searchData, filters, sortBy]);


    // ==========================================
    // PAGINATION
    // ==========================================

    const totalPages = Math.ceil(
        filteredFlights.length /
        FLIGHTS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) *
        FLIGHTS_PER_PAGE;

    const paginatedFlights =
        filteredFlights.slice(
            startIndex,
            startIndex + FLIGHTS_PER_PAGE
        );


    // ==========================================
    // SELECT FLIGHT
    // ==========================================

    const handleSelectFlight = (flight) => {
        console.log(
            "Selected Flight:",
            flight
        );

        /*
            Part E / Booking Page-এ এখানে:

            navigate(
                `/flights/booking/${flight.id}`
            );

            ব্যবহার করা যাবে।
        */
    };


    // ==========================================
    // RENDER
    // ==========================================

    return (
        <main className="min-h-screen bg-[#f5f7fa]">

            {/* Hero */}
            <DomesticFlightHero />


            {/* Functional Search */}
            <DomesticFlightSearch
                onSearch={handleSearch}
            />


            {/* Main Content */}
            <section
                className="
                    mx-auto
                    max-w-[1320px]
                    px-5
                    pb-12
                    lg:px-8
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        lg:grid-cols-[250px_minmax(0,1fr)]
                        xl:grid-cols-[250px_minmax(0,1fr)_270px]
                    "
                >

                    {/* Left Filters */}
                    <div className="min-w-0">
                        <DomesticFlightFilters
                            filters={filters}
                            onFilterChange={
                                handleFilterChange
                            }
                            onReset={
                                handleResetFilters
                            }
                            airlineCounts={
                                airlineCounts
                            }
                            stopCounts={
                                stopCounts
                            }
                        />
                    </div>


                    {/* Center Results */}
                    <div className="min-w-0">
                        <DomesticFlightResults
                            flights={
                                paginatedFlights
                            }
                            sortBy={sortBy}
                            onSortChange={
                                handleSortChange
                            }
                            onSelectFlight={
                                handleSelectFlight
                            }
                            searchData={
                                searchData
                            }
                        />


                        {/* Pagination */}
                        {totalPages > 1 && (
                            <DomesticPagination
                                currentPage={
                                    currentPage
                                }
                                totalPages={
                                    totalPages
                                }
                                onPageChange={
                                    setCurrentPage
                                }
                            />
                        )}
                    </div>


                    {/* Right Sidebar */}
                    <div
                        className="
                            min-w-0
                            lg:col-span-2
                            xl:col-span-1
                        "
                    >
                        <DomesticRightSidebar />
                    </div>

                </div>
            </section>


            {/* Bottom Trust Features */}
            <DomesticTrustFeatures />

        </main>
    );
};

export default DomesticFlightPage;