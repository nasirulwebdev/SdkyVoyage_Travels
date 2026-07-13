import {
    ChevronDown,
    RotateCcw,
} from "lucide-react";

const airlineOptions = [
    {
        id: "Biman Bangladesh Airlines",
        label: "Biman Bangladesh",
    },
    {
        id: "US-Bangla Airlines",
        label: "US-Bangla Airlines",
    },
    {
        id: "NOVOAIR",
        label: "NOVOAIR",
    },
    {
        id: "Air Astra",
        label: "Air Astra",
    },
];

const departureOptions = [
    {
        id: "early-morning",
        label: "Early Morning",
        time: "00:00 - 06:00",
    },
    {
        id: "morning",
        label: "Morning",
        time: "06:00 - 12:00",
    },
    {
        id: "afternoon",
        label: "Afternoon",
        time: "12:00 - 18:00",
    },
    {
        id: "evening",
        label: "Evening",
        time: "18:00 - 24:00",
    },
];

const stopOptions = [
    {
        id: "non-stop",
        label: "Non Stop",
    },
    {
        id: "one-stop",
        label: "1 Stop",
    },
];

const DomesticFlightFilters = ({
    filters,
    onFilterChange,
    onReset,
    airlineCounts = {},
    stopCounts = {},
}) => {
    const handleCheckbox = (category, value) => {
        const currentValues = filters[category] || [];

        const updatedValues = currentValues.includes(value)
            ? currentValues.filter((item) => item !== value)
            : [...currentValues, value];

        onFilterChange(category, updatedValues);
    };

    return (
        <aside
            className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
            "
        >
            {/* Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-200
                    px-5
                    py-5
                "
            >
                <h2 className="text-[17px] font-bold text-[#0b214a]">
                    Filter Your Search
                </h2>

                <button
                    type="button"
                    onClick={onReset}
                    className="
                        flex
                        items-center
                        gap-1.5
                        text-xs
                        font-bold
                        text-[#16b364]
                        transition
                        hover:text-[#0e9653]
                    "
                >
                    <RotateCcw size={14} />
                    Reset
                </button>
            </div>

            {/* Price */}
            <FilterSection title="Price Range">
                <input
                    type="range"
                    min="3000"
                    max="10000"
                    step="100"
                    value={filters.maxPrice}
                    onChange={(event) =>
                        onFilterChange(
                            "maxPrice",
                            Number(event.target.value)
                        )
                    }
                    className="
                        h-1.5
                        w-full
                        cursor-pointer
                        accent-[#16b364]
                    "
                />

                <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                        ৳3,000
                    </span>

                    <span
                        className="
                            rounded-md
                            bg-[#effaf4]
                            px-2
                            py-1
                            text-xs
                            font-bold
                            text-[#16b364]
                        "
                    >
                        ৳{filters.maxPrice.toLocaleString()}
                    </span>
                </div>
            </FilterSection>

            {/* Airlines */}
            <FilterSection title="Airlines">
                <div className="space-y-3.5">
                    {airlineOptions.map((airline) => (
                        <CheckboxRow
                            key={airline.id}
                            checked={filters.airlines.includes(
                                airline.id
                            )}
                            onChange={() =>
                                handleCheckbox(
                                    "airlines",
                                    airline.id
                                )
                            }
                            label={airline.label}
                            count={
                                airlineCounts[airline.id] || 0
                            }
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Departure */}
            <FilterSection title="Departure Time">
                <div className="space-y-4">
                    {departureOptions.map((item) => (
                        <label
                            key={item.id}
                            className="
                                flex
                                cursor-pointer
                                items-start
                                gap-3
                            "
                        >
                            <input
                                type="checkbox"
                                checked={filters.departureTimes.includes(
                                    item.id
                                )}
                                onChange={() =>
                                    handleCheckbox(
                                        "departureTimes",
                                        item.id
                                    )
                                }
                                className="
                                    mt-0.5
                                    h-4
                                    w-4
                                    cursor-pointer
                                    accent-[#16b364]
                                "
                            />

                            <div>
                                <p
                                    className="
                                        text-sm
                                        font-medium
                                        text-slate-700
                                    "
                                >
                                    {item.label}
                                </p>

                                <p className="mt-0.5 text-[11px] text-slate-400">
                                    {item.time}
                                </p>
                            </div>
                        </label>
                    ))}
                </div>
            </FilterSection>

            {/* Stops */}
            <FilterSection
                title="Stops"
                isLast
            >
                <div className="space-y-3.5">
                    {stopOptions.map((stop) => (
                        <CheckboxRow
                            key={stop.id}
                            checked={filters.stops.includes(
                                stop.id
                            )}
                            onChange={() =>
                                handleCheckbox(
                                    "stops",
                                    stop.id
                                )
                            }
                            label={stop.label}
                            count={stopCounts[stop.id] || 0}
                        />
                    ))}
                </div>
            </FilterSection>
        </aside>
    );
};

const FilterSection = ({
    title,
    children,
    isLast = false,
}) => (
    <div
        className={
            isLast
                ? ""
                : "border-b border-slate-200"
        }
    >
        <div
            className="
                flex
                items-center
                justify-between
                px-5
                pb-3
                pt-5
            "
        >
            <h3 className="text-sm font-bold text-[#0b214a]">
                {title}
            </h3>

            <ChevronDown
                size={16}
                className="text-slate-400"
            />
        </div>

        <div className="px-5 pb-5">
            {children}
        </div>
    </div>
);

const CheckboxRow = ({
    checked,
    onChange,
    label,
    count,
}) => (
    <label
        className="
            flex
            cursor-pointer
            items-center
            justify-between
            gap-3
        "
    >
        <div className="flex min-w-0 items-center gap-3">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="
                    h-4
                    w-4
                    shrink-0
                    cursor-pointer
                    accent-[#16b364]
                "
            />

            <span
                className="
                    truncate
                    text-sm
                    font-medium
                    text-slate-700
                "
            >
                {label}
            </span>
        </div>

        <span className="text-xs text-slate-400">
            ({count})
        </span>
    </label>
);

export default DomesticFlightFilters;