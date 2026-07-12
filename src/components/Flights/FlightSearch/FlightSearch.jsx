import { useState } from "react";
import {
    ArrowLeftRight,
    CalendarDays,
    Search,
    Users,
    ChevronDown,
    Minus,
    Plus,
} from "lucide-react";

import AirportSearchField from "./AirportSearchField";
import { flightAirportsData } from "../../../data/flights/flightAirportsData";



const TravelerCounter = ({
    title,
    subtitle,
    value,
    onDecrease,
    onIncrease,
    disableDecrease,
}) => {
    return (
        <div className="flex items-center justify-between border-b border-slate-100 py-3">
            <div>
                <p className="text-sm font-semibold text-[#10264a]">
                    {title}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                    {subtitle}
                </p>
            </div>

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    disabled={disableDecrease}
                    onClick={onDecrease}
                    className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        text-[#17335d]
                        transition
                        hover:border-[#0866f5]
                        hover:text-[#0866f5]
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    <Minus size={15} />
                </button>

                <span className="w-5 text-center text-sm font-bold text-[#10264a]">
                    {value}
                </span>

                <button
                    type="button"
                    onClick={onIncrease}
                    className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0866f5]
                        text-[#0866f5]
                        transition
                        hover:bg-[#0866f5]
                        hover:text-white
                    "
                >
                    <Plus size={15} />
                </button>
            </div>
        </div>
    );
};
const FlightSearch = () => {
    const [tripType, setTripType] = useState("round-trip");

    const [fromAirport, setFromAirport] = useState(
        flightAirportsData.find(
            (airport) => airport.code === "DAC"
        )
    );

    const [toAirport, setToAirport] = useState(
        flightAirportsData.find(
            (airport) => airport.code === "DXB"
        )
    );

    const tabs = [
        {
            id: "round-trip",
            label: "Round Trip",
        },
        {
            id: "one-way",
            label: "One Way",
        },
        {
            id: "multi-city",
            label: "Multi City",
        },
    ];

    const handleSwapAirports = () => {
        setFromAirport(toAirport);
        setToAirport(fromAirport);
    };

    const getToday = () => {
        return new Date().toISOString().split("T")[0];
    };

    const [departDate, setDepartDate] = useState(getToday());
    const [returnDate, setReturnDate] = useState("");

    const formatDate = (dateString) => {
        if (!dateString) return "Select Date";

        return new Date(`${dateString}T00:00:00`).toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };

    const [isTravelerOpen, setIsTravelerOpen] = useState(false);

    const [travelers, setTravelers] = useState({
        adults: 1,
        children: 0,
        infants: 0,
    });

    const [travelClass, setTravelClass] = useState("Economy");
     const [searchError, setSearchError] = useState("");
    const totalTravelers =
        travelers.adults +
        travelers.children +
        travelers.infants;

    const updateTraveler = (type, action) => {
        setTravelers((prev) => {
            const minimum = type === "adults" ? 1 : 0;

            if (
                action === "decrease" &&
                prev[type] <= minimum
            ) {
                return prev;
            }

            return {
                ...prev,
                [type]:
                    action === "increase"
                        ? prev[type] + 1
                        : prev[type] - 1,
            };
        });
    };

        const handleSearchFlights = () => {
        setSearchError("");

        if (!fromAirport || !toAirport) {
            setSearchError(
                "Please select both departure and destination airports."
            );
            return;
        }

        if (fromAirport.code === toAirport.code) {
            setSearchError(
                "Departure and destination airports cannot be the same."
            );
            return;
        }

        if (!departDate) {
            setSearchError("Please select a departure date.");
            return;
        }

        if (
            tripType === "round-trip" &&
            !returnDate
        ) {
            setSearchError(
                "Please select a return date for your round trip."
            );
            return;
        }

        const searchData = {
            tripType,

            from: {
                code: fromAirport.code,
                city: fromAirport.city,
                country: fromAirport.country,
                airport: fromAirport.airport,
            },

            to: {
                code: toAirport.code,
                city: toAirport.city,
                country: toAirport.country,
                airport: toAirport.airport,
            },

            departDate,

            returnDate:
                tripType === "one-way"
                    ? null
                    : returnDate,

            travelers,

            totalTravelers,

            travelClass,
        };

        console.log("Flight Search Data:", searchData);

        // Later:
        // API request / Context / Redux / URL query params
    };




    return (
        <section
            className="
                relative
                z-20
                mx-auto
                -mt-[70px]
                w-full
                max-w-[1240px]
                px-4
            "
        >
            <div
                className="
                    rounded-[10px]
                    bg-white
                    shadow-[0_10px_35px_rgba(15,35,70,0.15)]
                "
            >
                {/* =========================
                    TRIP TYPE TABS
                ========================== */}
                <div
                    className="
                        flex
                        items-center
                        border-b
                        border-[#e7edf5]
                        px-3
                        sm:px-6
                    "
                >
                    {tabs.map((tab) => {
                        const isActive =
                            tripType === tab.id;

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => {
                                    setTripType(tab.id);

                                    if (tab.id === "one-way") {
                                        setReturnDate("");
                                    }
                                }}
                                className={`
                                    relative
                                    min-w-[105px]
                                    px-4
                                    py-[17px]
                                    text-[13px]
                                    font-semibold
                                    transition-colors
                                    duration-200

                                    ${
                                        isActive
                                            ? "text-[#0866f5]"
                                            : "text-[#172b4d] hover:text-[#0866f5]"
                                    }
                                `}
                            >
                                {tab.label}

                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            bottom-0
                                            left-1/2
                                            h-[2px]
                                            w-[72px]
                                            -translate-x-1/2
                                            rounded-full
                                            bg-[#0866f5]
                                        "
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* =========================
                    SEARCH FIELDS
                ========================== */}
                <div
                    className="
                        grid
                        grid-cols-1
                        items-stretch
                        px-3
                        py-4
                        sm:px-5
                        lg:grid-cols-[1.15fr_1.15fr_1fr_1fr_1.35fr_1.25fr]
                    "
                >
                    {/* FROM */}
                    <AirportSearchField
                        label="From"
                        value={fromAirport}
                        onChange={setFromAirport}
                        className="
                            border-b
                            border-[#e8edf5]
                            lg:border-b-0
                            lg:border-r
                        "
                    />

                    {/* TO */}
                    <div
                        className="
                            relative
                            flex
                            min-h-[70px]
                            items-center
                        "
                    >
                        {/* Swap Button */}
                        <button
                            type="button"
                            onClick={handleSwapAirports}
                            aria-label="Swap departure and destination"
                            className="
                                absolute
                                -left-[17px]
                                top-1/2
                                z-30
                                hidden
                                h-[34px]
                                w-[34px]
                                -translate-y-1/2
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#dce5f1]
                                bg-white
                                text-[#355070]
                                shadow-sm
                                transition
                                hover:border-[#0866f5]
                                hover:text-[#0866f5]
                                lg:flex
                            "
                        >
                            <ArrowLeftRight size={15} />
                        </button>

                        <AirportSearchField
                            label="To"
                            value={toAirport}
                            onChange={setToAirport}
                            className="
                                w-full
                                border-b
                                border-[#e8edf5]
                                lg:border-b-0
                                lg:border-r
                            "
                        />
                    </div>

{/* DEPART */}
<div className="flex min-h-[70px] items-center gap-3 border-b border-[#e8edf5] px-4 lg:border-b-0 lg:border-r">
    <CalendarDays
        size={19}
        className="shrink-0 text-[#0866f5]"
    />

    <div className="min-w-0">
        <p className="text-[11px] font-semibold text-[#52627a]">
            Depart
        </p>

        <input
            type="date"
            value={departDate}
            min={getToday()}
            onChange={(e) => {
                const newDate = e.target.value;
                setDepartDate(newDate);

                if (returnDate && returnDate < newDate) {
                    setReturnDate("");
                }
            }}
            className="mt-1 w-full bg-transparent text-[12px] font-semibold text-[#10264a] outline-none"
        />
    </div>
</div>

{/* RETURN */}
<div
    className={`
        flex
        min-h-[70px]
        items-center
        gap-3
        border-b
        border-[#e8edf5]
        px-4
        lg:border-b-0
        lg:border-r
        ${tripType === "one-way" ? "opacity-40" : ""}
    `}
>
    <CalendarDays
        size={19}
        className="shrink-0 text-[#0866f5]"
    />

    <div className="min-w-0">
        <p className="text-[11px] font-semibold text-[#52627a]">
            Return
        </p>

        <input
            type="date"
            value={returnDate}
            min={departDate || getToday()}
            disabled={tripType === "one-way"}
            onChange={(e) => setReturnDate(e.target.value)}
            className="mt-1 w-full bg-transparent text-[12px] font-semibold text-[#10264a] outline-none disabled:cursor-not-allowed"
        />
    </div>
</div>
                    {/* TRAVELERS & CLASS */}
                    <div className="relative border-b border-[#e8edf5] lg:border-b-0 lg:border-r">
                        <button
                            type="button"
                            onClick={() =>
                                setIsTravelerOpen((prev) => !prev)
                            }
                            className="
                                flex
                                min-h-[70px]
                                w-full
                                items-center
                                gap-3
                                px-4
                                text-left
                                transition
                                hover:bg-[#f8fbff]
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#f2f6ff]
                                "
                            >
                                <Users
                                    size={20}
                                    className="text-[#17335d]"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-[11px] font-semibold text-[#52627a]">
                                    Travelers & Class
                                </p>

                                <p className="mt-1 truncate text-[12px] font-semibold text-[#10264a]">
                                    {totalTravelers}{" "}
                                    {totalTravelers === 1
                                        ? "Passenger"
                                        : "Passengers"}
                                    , {travelClass}
                                </p>
                            </div>

                            <ChevronDown
                                size={15}
                                className={`
                                    shrink-0
                                    text-[#17335d]
                                    transition-transform
                                    duration-200
                                    ${isTravelerOpen ? "rotate-180" : ""}
                                `}
                            />
                        </button>

                        {/* DROPDOWN */}
                        {isTravelerOpen && (
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-[calc(100%+8px)]
                                    z-50
                                    w-[340px]
                                    max-w-[90vw]
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-xl
                                "
                            >
                                <h3 className="mb-4 text-sm font-bold text-[#10264a]">
                                    Travelers
                                </h3>

                                {/* ADULTS */}
                                <TravelerCounter
                                    title="Adults"
                                    subtitle="12 years and above"
                                    value={travelers.adults}
                                    onDecrease={() =>
                                        updateTraveler("adults", "decrease")
                                    }
                                    onIncrease={() =>
                                        updateTraveler("adults", "increase")
                                    }
                                    disableDecrease={travelers.adults <= 1}
                                />

                                {/* CHILDREN */}
                                <TravelerCounter
                                    title="Children"
                                    subtitle="2 - 11 years"
                                    value={travelers.children}
                                    onDecrease={() =>
                                        updateTraveler("children", "decrease")
                                    }
                                    onIncrease={() =>
                                        updateTraveler("children", "increase")
                                    }
                                    disableDecrease={travelers.children <= 0}
                                />

                                {/* INFANTS */}
                                <TravelerCounter
                                    title="Infants"
                                    subtitle="Under 2 years"
                                    value={travelers.infants}
                                    onDecrease={() =>
                                        updateTraveler("infants", "decrease")
                                    }
                                    onIncrease={() =>
                                        updateTraveler("infants", "increase")
                                    }
                                    disableDecrease={travelers.infants <= 0}
                                />

                                {/* TRAVEL CLASS */}
                                <div className="mt-5 border-t border-slate-100 pt-5">
                                    <p className="mb-3 text-sm font-bold text-[#10264a]">
                                        Travel Class
                                    </p>

                                    <div className="space-y-2">
                                        {[
                                            "Economy",
                                            "Premium Economy",
                                            "Business",
                                            "First Class",
                                        ].map((item) => (
                                            <label
                                                key={item}
                                                className="
                                                    flex
                                                    cursor-pointer
                                                    items-center
                                                    gap-3
                                                    rounded-lg
                                                    px-3
                                                    py-2
                                                    transition
                                                    hover:bg-[#f6f9ff]
                                                "
                                            >
                                                <input
                                                    type="radio"
                                                    name="travelClass"
                                                    value={item}
                                                    checked={
                                                        travelClass === item
                                                    }
                                                    onChange={() =>
                                                        setTravelClass(item)
                                                    }
                                                    className="accent-[#0866f5]"
                                                />

                                                <span className="text-sm font-medium text-[#243b5a]">
                                                    {item}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* DONE BUTTON */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsTravelerOpen(false)
                                    }
                                    className="
                                        mt-5
                                        h-11
                                        w-full
                                        rounded-lg
                                        bg-[#0866f5]
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition
                                        hover:bg-[#0059e8]
                                    "
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>

                                        {/* SEARCH BUTTON */}
                    <div
                        className="
                            flex
                            min-h-[70px]
                            items-center
                            justify-center
                            px-4
                        "
                    >
                        <button
                            type="button"
                            onClick={handleSearchFlights}
                            className="
                                flex
                                h-[48px]
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-[7px]
                                bg-[#0866f5]
                                px-5
                                text-[13px]
                                font-semibold
                                text-white
                                shadow-[0_8px_20px_rgba(8,102,245,0.22)]
                                transition
                                duration-200
                                hover:bg-[#0059e8]
                                active:scale-[0.98]
                            "
                        >
                            <Search size={18} />
                            <span>Search Flights</span>
                        </button>
                    </div>

                </div>
                {/* ↑ SEARCH FIELDS GRID এখানে শেষ */}

                {/* VALIDATION ERROR */}
                {searchError && (
                    <div className="px-5 pb-4">
                        <p
                            role="alert"
                            className="
                                rounded-lg
                                border
                                border-red-200
                                bg-red-50
                                px-4
                                py-3
                                text-[13px]
                                font-medium
                                text-red-600
                            "
                        >
                            {searchError}
                        </p>
                    </div>
                )}

            </div>
            {/* ↑ MAIN WHITE SEARCH BOX এখানে শেষ */}
        </section>
    );
};

export default FlightSearch;