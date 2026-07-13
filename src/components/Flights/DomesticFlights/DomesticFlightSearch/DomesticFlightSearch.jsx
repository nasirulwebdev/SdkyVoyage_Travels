import { useState } from "react";
import {
    ArrowRightLeft,
    CalendarDays,
    ChevronDown,
    MapPin,
    Search,
    Users,
} from "lucide-react";

const airports = [
    { city: "Dhaka", code: "DAC", airport: "Hazrat Shahjalal International Airport" },
    { city: "Chattogram", code: "CGP", airport: "Shah Amanat International Airport" },
    { city: "Cox's Bazar", code: "CXB", airport: "Cox's Bazar Airport" },
    { city: "Sylhet", code: "ZYL", airport: "Osmani International Airport" },
    { city: "Saidpur", code: "SPD", airport: "Saidpur Airport" },
    { city: "Rajshahi", code: "RJH", airport: "Shah Makhdum Airport" },
    { city: "Jashore", code: "JSR", airport: "Jashore Airport" },
];

const DomesticFlightSearch = ({ onSearch }) => {
    const [tripType, setTripType] = useState("one-way");

    const [searchData, setSearchData] = useState({
        from: "",
        fromCode: "",
        to: "",
        toCode: "",
        departureDate: "",
        returnDate: "",
        travelers: 1,
        cabinClass: "",
        tripType: "one-way"
    });

    const [openDropdown, setOpenDropdown] = useState(null);

    const handleAirportSelect = (type, airport) => {
        setSearchData((prev) => ({
            ...prev,
            [type]: airport.city,
            [`${type}Code`]: airport.code,
        }));

        setOpenDropdown(null);
    };

    const handleSwap = () => {
        setSearchData((prev) => ({
            ...prev,
            from: prev.to,
            fromCode: prev.toCode,
            to: prev.from,
            toCode: prev.fromCode,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const finalSearchData = {
            ...searchData,
            tripType,
            returnDate:
                tripType === "round-trip"
                    ? searchData.returnDate
                    : "",
        };

        if (onSearch) {
            onSearch(finalSearchData);
        }
    };

    return (
        <section className="relative z-20">
            <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
                <form
                    onSubmit={handleSubmit}
                    className="
                        relative
                        -mt-7
                        mb-8
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-5
                        shadow-[0_15px_45px_rgba(15,23,42,0.10)]
                        md:p-6
                    "
                >
                    {/* Trip Type */}
                    <div className="mb-5 flex flex-wrap items-center gap-6">
                        <TripTypeButton
                            label="One Way"
                            active={tripType === "one-way"}
                            onClick={() => setTripType("one-way")}
                        />

                        <TripTypeButton
                            label="Round Trip"
                            active={tripType === "round-trip"}
                            onClick={() => setTripType("round-trip")}
                        />
                    </div>

                    {/* Search Fields */}
                    <div
                        className={`
                            grid
                            grid-cols-1
                            gap-3
                            md:grid-cols-2
                            ${
                                tripType === "round-trip"
                                    ? "xl:grid-cols-[1fr_1fr_0.9fr_0.9fr_1fr_auto]"
                                    : "xl:grid-cols-[1fr_1fr_0.9fr_1fr_auto]"
                            }
                        `}
                    >
                        {/* From */}
                        <AirportField
                            label="From"
                            value={searchData.from}
                            code={searchData.fromCode}
                            isOpen={openDropdown === "from"}
                            onToggle={() =>
                                setOpenDropdown(
                                    openDropdown === "from" ? null : "from"
                                )
                            }
                            onSelect={(airport) =>
                                handleAirportSelect("from", airport)
                            }
                        />

                        {/* To + Swap */}
                        <div className="relative">
                            <AirportField
                                label="To"
                                value={searchData.to}
                                code={searchData.toCode}
                                isOpen={openDropdown === "to"}
                                onToggle={() =>
                                    setOpenDropdown(
                                        openDropdown === "to" ? null : "to"
                                    )
                                }
                                onSelect={(airport) =>
                                    handleAirportSelect("to", airport)
                                }
                            />

                            <button
                                type="button"
                                onClick={handleSwap}
                                aria-label="Swap airports"
                                className="
                                    absolute
                                    -left-[25px]
                                    top-1/2
                                    z-20
                                    hidden
                                    h-9
                                    w-9
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-white
                                    text-[#16b364]
                                    shadow-md
                                    transition
                                    hover:bg-[#16b364]
                                    hover:text-white
                                    xl:flex
                                "
                            >
                                <ArrowRightLeft size={16} />
                            </button>
                        </div>

                        {/* Departure */}
                        <div className="rounded-xl border border-slate-200 px-4 py-3">
                            <p className="mb-1 text-xs font-medium text-slate-500">
                                Departure
                            </p>

                            <div className="flex items-center gap-2">
                                <CalendarDays
                                    size={18}
                                    className="shrink-0 text-[#16b364]"
                                />

                                <input
                                    type="date"
                                    value={searchData.departureDate}
                                    onChange={(event) =>
                                        setSearchData((prev) => ({
                                            ...prev,
                                            departureDate: event.target.value,
                                        }))
                                    }
                                    className="
                                        min-w-0
                                        w-full
                                        bg-transparent
                                        text-sm
                                        font-semibold
                                        text-[#0b214a]
                                        outline-none
                                    "
                                />
                            </div>
                        </div>

                        {/* Return */}
                        {tripType === "round-trip" && (
                            <div className="rounded-xl border border-slate-200 px-4 py-3">
                                <p className="mb-1 text-xs font-medium text-slate-500">
                                    Return
                                </p>

                                <div className="flex items-center gap-2">
                                    <CalendarDays
                                        size={18}
                                        className="shrink-0 text-[#16b364]"
                                    />

                                    <input
                                        type="date"
                                        value={searchData.returnDate}
                                        min={searchData.departureDate}
                                        onChange={(event) =>
                                            setSearchData((prev) => ({
                                                ...prev,
                                                returnDate: event.target.value,
                                            }))
                                        }
                                        className="
                                            min-w-0
                                            w-full
                                            bg-transparent
                                            text-sm
                                            font-semibold
                                            text-[#0b214a]
                                            outline-none
                                        "
                                    />
                                </div>
                            </div>
                        )}

                        {/* Travelers & Class */}
                        <div className="rounded-xl border border-slate-200 px-4 py-3">
                            <p className="mb-1 text-xs font-medium text-slate-500">
                                Travelers & Class
                            </p>

                            <div className="flex items-center gap-2">
                                <Users
                                    size={18}
                                    className="shrink-0 text-[#16b364]"
                                />

                                <select
                                    value={`${searchData.travelers}-${searchData.cabinClass}`}
                                    onChange={(event) => {
                                        const [travelers, cabinClass] =
                                            event.target.value.split("-");

                                        setSearchData((prev) => ({
                                            ...prev,
                                            travelers: Number(travelers),
                                            cabinClass,
                                        }));
                                    }}
                                    className="
                                        w-full
                                        cursor-pointer
                                        bg-transparent
                                        text-sm
                                        font-semibold
                                        text-[#0b214a]
                                        outline-none
                                    "
                                >
                                    <option value="1-Economy">
                                        1 Traveler, Economy
                                    </option>
                                    <option value="2-Economy">
                                        2 Travelers, Economy
                                    </option>
                                    <option value="3-Economy">
                                        3 Travelers, Economy
                                    </option>
                                    <option value="1-Business">
                                        1 Traveler, Business
                                    </option>
                                    <option value="2-Business">
                                        2 Travelers, Business
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Search Button */}
                        <button
                            type="submit"
                            className="
                                flex
                                min-h-[66px]
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-[#16b364]
                                px-7
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_8px_20px_rgba(22,179,100,0.25)]
                                transition
                                hover:bg-[#119653]
                            "
                        >
                            <Search size={19} />
                            Search Flights
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

const TripTypeButton = ({ label, active, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#0b214a]
        "
    >
        <span
            className={`
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                border
                ${
                    active
                        ? "border-[#16b364]"
                        : "border-slate-300"
                }
            `}
        >
            {active && (
                <span className="h-2 w-2 rounded-full bg-[#16b364]" />
            )}
        </span>

        {label}
    </button>
);

const AirportField = ({
    label,
    value,
    code,
    isOpen,
    onToggle,
    onSelect,
}) => (
    <div className="relative">
        <button
            type="button"
            onClick={onToggle}
            className="
                flex
                min-h-[66px]
                w-full
                items-center
                justify-between
                rounded-xl
                border
                border-slate-200
                px-4
                text-left
                transition
                hover:border-[#16b364]
            "
        >
            <div className="flex min-w-0 items-center gap-3">
                <MapPin
                    size={19}
                    className="shrink-0 text-[#16b364]"
                />

                <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                        {label}
                    </p>

                    <p className="truncate text-sm font-bold text-[#0b214a]">
                        {value} ({code})
                    </p>
                </div>
            </div>

            <ChevronDown
                size={16}
                className={`
                    shrink-0
                    text-slate-400
                    transition-transform
                    ${isOpen ? "rotate-180" : ""}
                `}
            />
        </button>

        {isOpen && (
            <div
                className="
                    absolute
                    left-0
                    top-[calc(100%+8px)]
                    z-50
                    max-h-[300px]
                    w-full
                    min-w-[270px]
                    overflow-y-auto
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-xl
                "
            >
                {airports.map((airport) => (
                    <button
                        key={airport.code}
                        type="button"
                        onClick={() => onSelect(airport)}
                        className="
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-4
                            rounded-lg
                            px-3
                            py-3
                            text-left
                            transition
                            hover:bg-[#effaf4]
                        "
                    >
                        <div>
                            <p className="text-sm font-bold text-[#0b214a]">
                                {airport.city}
                            </p>

                            <p className="mt-0.5 text-[11px] text-slate-500">
                                {airport.airport}
                            </p>
                        </div>

                        <span className="text-xs font-bold text-[#16b364]">
                            {airport.code}
                        </span>
                    </button>
                ))}
            </div>
        )}
    </div>
);

export default DomesticFlightSearch;