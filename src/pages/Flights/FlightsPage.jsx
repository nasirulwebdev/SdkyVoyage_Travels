import {
    useEffect,
    useMemo,
    useState,
} from "react";

import FlightHero from "../../components/Flights/FlightHero/FlightHero";
import FlightSearch from "../../components/Flights/FlightSearch/FlightSearch";
import FlightFilters from "../../components/Flights/FlightFilters/FlightFilters";
import FlightResultsHeader from "../../components/Flights/FlightResults/FlightResultsHeader";
import FlightCard from "../../components/Flights/FlightResults/FlightCard";
import FlightRightSidebar from "../../components/Flights/FlightSidebar/FlightRightSidebar";
import FlightPagination from "../../components/Flights/FlightPagination/FlightPagination";
import FlightTrustBar from "../../components/Flights/FlightTrustBar/FlightTrustBar";

import { flightsData } from "../../data/flights/flightsData.js";

const initialFilters = {
    stops: [],
    airlines: [],
    departureTime: "",
    maxPrice: 3000,
};

const ITEMS_PER_PAGE = 4;

const FlightsPage = () => {
    const [filters, setFilters] =
        useState(initialFilters);

    const [sortBy, setSortBy] =
        useState("recommended");

    const [currentPage, setCurrentPage] =
        useState(1);

    // =========================
    // FILTER + SORT
    // =========================
    const filteredFlights = useMemo(() => {
        const results = flightsData.filter(
            (flight) => {
                // STOPS
                const stopId =
                    flight.stops === 0
                        ? "non-stop"
                        : flight.stops === 1
                        ? "1-stop"
                        : "2-stops";

                const matchesStops =
                    filters.stops.length === 0 ||
                    filters.stops.includes(stopId);

                // AIRLINES
                const airlineId =
                    flight.airline
                        .toLowerCase()
                        .replace(/\s+/g, "-");

                const matchesAirline =
                    filters.airlines.length === 0 ||
                    filters.airlines.includes(
                        airlineId
                    );

                // DEPARTURE TIME
                const matchesDepartureTime =
                    !filters.departureTime ||
                    flight.departurePeriod ===
                        filters.departureTime;

                // PRICE
                const matchesPrice =
                    flight.price <=
                    filters.maxPrice;

                return (
                    matchesStops &&
                    matchesAirline &&
                    matchesDepartureTime &&
                    matchesPrice
                );
            }
        );

        return [...results].sort((a, b) => {
            // LOWEST PRICE
            if (sortBy === "price-low") {
                return a.price - b.price;
            }

            // HIGHEST PRICE
            if (sortBy === "price-high") {
                return b.price - a.price;
            }

            // SHORTEST DURATION
            if (sortBy === "duration") {
                const convertDuration = (
                    duration
                ) => {
                    const hourMatch =
                        duration.match(/(\d+)h/);

                    const minuteMatch =
                        duration.match(/(\d+)m/);

                    const hours = hourMatch
                        ? Number(hourMatch[1])
                        : 0;

                    const minutes = minuteMatch
                        ? Number(minuteMatch[1])
                        : 0;

                    return (
                        hours * 60 +
                        minutes
                    );
                };

                return (
                    convertDuration(a.duration) -
                    convertDuration(b.duration)
                );
            }

            // RECOMMENDED
            return (
                Number(b.featured) -
                Number(a.featured)
            );
        });
    }, [filters, sortBy]);

    // =========================
    // RESET PAGE AFTER
    // FILTER OR SORT CHANGE
    // =========================
    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortBy]);

    // =========================
    // PAGINATION
    // =========================
    const totalPages = Math.ceil(
        filteredFlights.length /
            ITEMS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) *
        ITEMS_PER_PAGE;

    const paginatedFlights =
        filteredFlights.slice(
            startIndex,
            startIndex +
                ITEMS_PER_PAGE
        );

    // =========================
    // RESET FILTERS
    // =========================
    const handleResetFilters = () => {
        setFilters(initialFilters);
        setCurrentPage(1);
    };

    // =========================
    // PAGE CHANGE
    // =========================
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
        <>
            {/* HERO */}
            <FlightHero />

            {/* SEARCH */}
            <FlightSearch />

            {/* MAIN FLIGHT AREA */}
            <section
                className="
                    bg-[#f7f9fc]
                    py-10
                "
            >
                <div
                    className="
                        mx-auto
                        max-w-[1240px]
                        px-4
                    "
                >
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-8
                            xl:grid-cols-[350px_minmax(0,1fr)_240px]
                        "
                    >
                        {/* LEFT FILTER */}
                        <div>
                            <FlightFilters
                                filters={filters}
                                onFiltersChange={
                                    setFilters
                                }
                                onReset={
                                    handleResetFilters
                                }
                            />
                        </div>

                        {/* CENTER RESULTS */}
                        <main className="min-w-0">
                            <FlightResultsHeader
                                resultCount={
                                    filteredFlights.length
                                }
                                sortBy={sortBy}
                                onSortChange={
                                    setSortBy
                                }
                            />

                            {paginatedFlights.length >
                            0 ? (
                                <>
                                    <div className="space-y-5">
                                        {paginatedFlights.map(
                                            (
                                                flight
                                            ) => (
                                                <FlightCard
                                                    key={
                                                        flight.id
                                                    }
                                                    flight={
                                                        flight
                                                    }
                                                />
                                            )
                                        )}
                                    </div>

                                    <FlightPagination
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
                                </>
                            ) : (
                                <div
                                    className="
                                        rounded-[10px]
                                        border
                                        border-[#e6ebf2]
                                        bg-white
                                        px-6
                                        py-16
                                        text-center
                                    "
                                >
                                    <h3
                                        className="
                                            text-[17px]
                                            font-bold
                                            text-[#10264a]
                                        "
                                    >
                                        No flights found
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-[13px]
                                            text-[#7b8ba3]
                                        "
                                    >
                                        Try changing or
                                        resetting your
                                        filters.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={
                                            handleResetFilters
                                        }
                                        className="
                                            mt-5
                                            rounded-[7px]
                                            bg-[#0866f5]
                                            px-5
                                            py-2.5
                                            text-[12px]
                                            font-semibold
                                            text-white
                                            transition
                                            hover:bg-[#0059e8]
                                        "
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </main>

                        {/* RIGHT SIDEBAR */}
                        <div className="hidden xl:block">
                            <FlightRightSidebar />
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM TRUST BAR */}
            <FlightTrustBar />
        </>
    );
};

export default FlightsPage;