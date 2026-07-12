import { useEffect, useRef, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { flightAirportsData } from "../../../data/flights/flightAirportsData.js";

const AirportSearchField = ({
    label,
    value,
    onChange,
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef(null);

    const filteredAirports = flightAirportsData.filter((airport) => {
        const search = searchTerm.toLowerCase();

        return (
            airport.code.toLowerCase().includes(search) ||
            airport.city.toLowerCase().includes(search) ||
            airport.country.toLowerCase().includes(search) ||
            airport.airport.toLowerCase().includes(search)
        );
    });

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, []);

    const handleSelectAirport = (airport) => {
        onChange(airport);
        setSearchTerm("");
        setIsOpen(false);
    };

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
        >
            {/* Selected Airport */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
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
                    <MapPin
                        size={20}
                        className="text-[#0866f5]"
                    />
                </div>

                <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-[#52627a]">
                        {label}
                    </p>

                    <p className="mt-1 truncate text-[13px] font-semibold text-[#10264a]">
                        {value
                            ? `${value.code} - ${value.city}`
                            : `Select ${label}`}
                    </p>
                </div>
            </button>

            {/* Search Dropdown */}
            {isOpen && (
                <div
                    className="
                        absolute
                        left-0
                        top-[calc(100%+8px)]
                        z-50
                        w-[340px]
                        max-w-[90vw]
                        overflow-hidden
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        shadow-xl
                    "
                >
                    {/* Search Input */}
                    <div className="border-b border-slate-100 p-3">
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-slate-200
                                px-3
                            "
                        >
                            <Search
                                size={17}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                autoFocus
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                placeholder="Search city or airport"
                                className="
                                    h-11
                                    w-full
                                    bg-transparent
                                    text-sm
                                    text-slate-800
                                    outline-none
                                    placeholder:text-slate-400
                                "
                            />
                        </div>
                    </div>

                    {/* Airport Results */}
                    <div className="max-h-[280px] overflow-y-auto">
                        {filteredAirports.length > 0 ? (
                            filteredAirports.map((airport) => (
                                <button
                                    key={airport.id}
                                    type="button"
                                    onClick={() =>
                                        handleSelectAirport(airport)
                                    }
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        gap-4
                                        border-b
                                        border-slate-100
                                        px-4
                                        py-3
                                        text-left
                                        transition
                                        last:border-b-0
                                        hover:bg-[#f6f9ff]
                                    "
                                >
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-[#10264a]">
                                            {airport.city},{" "}
                                            {airport.country}
                                        </p>

                                        <p className="mt-1 truncate text-xs text-slate-500">
                                            {airport.airport}
                                        </p>
                                    </div>

                                    <span
                                        className="
                                            shrink-0
                                            rounded-md
                                            bg-[#eef4ff]
                                            px-2
                                            py-1
                                            text-xs
                                            font-bold
                                            text-[#0866f5]
                                        "
                                    >
                                        {airport.code}
                                    </span>
                                </button>
                            ))
                        ) : (
                            <div className="px-4 py-8 text-center text-sm text-slate-500">
                                No airports found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AirportSearchField;