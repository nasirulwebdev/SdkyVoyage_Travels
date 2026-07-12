import { RotateCcw } from "lucide-react";

const FlightFilters = ({
    filters,
    onFiltersChange,
    onReset,
}) => {
    const {
        stops = [],
        airlines = [],
        departureTime = "",
        maxPrice = 3000,
    } = filters;

    const stopOptions = [
        {
            id: "non-stop",
            label: "Non Stop",
            price: "$320",
        },
        {
            id: "1-stop",
            label: "1 Stop",
            price: "$210",
        },
        {
            id: "2-stops",
            label: "2+ Stops",
            price: "$180",
        },
    ];

    const airlineOptions = [
        {
            id: "emirates",
            label: "Emirates",
            price: "$320",
        },
        {
            id: "qatar-airways",
            label: "Qatar Airways",
            price: "$305",
        },
        {
            id: "turkish-airlines",
            label: "Turkish Airlines",
            price: "$290",
        },
        {
            id: "saudia",
            label: "Saudia",
            price: "$272",
        },
        {
            id: "biman-bangladesh-airlines",
            label: "Biman Bangladesh",
            price: "$210",
        },
    ];

    const timeOptions = [
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
            time: "18:00 - 00:00",
        },
    ];

    const handleCheckbox = (value, key) => {
        const currentValues = filters[key] || [];

        onFiltersChange({
            ...filters,
            [key]: currentValues.includes(value)
                ? currentValues.filter(
                      (item) => item !== value
                  )
                : [...currentValues, value],
        });
    };

    return (
            <aside
                className="
                    w-full
                    border
                    border-[#e6ebf2]
                    bg-white
                    p-5
                    px-6
                    py-5
                    shadow-[0_5px_20px_rgba(15,35,70,0.05)]
                "
            >
            {/* HEADER */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#edf1f5]
                    px-4
                    py-[14px]
                "
            >
                <h2
                    className="
                        text-[18px]
                        font-bold
                        text-[#10264a]
                    "
                >
                    Filter Flights
                </h2>

                <button
                    type="button"
                    onClick={onReset}
                    className="
                        flex
                        items-center
                        gap-1
                        text-[14px]
                        font-semibold
                        text-[#0866f5]
                        transition
                        hover:text-[#0059e8]
                    "
                >
                    <RotateCcw size={15} />
                    Reset
                </button>
            </div>

            <div className="px-4">
                {/* STOPS */}
                <div
                    className="
                        border-b
                        border-[#edf1f5]
                        py-4
                    "
                >
                    <h3
                        className="
                            mb-5
                            text-[14px]
                            font-bold
                            text-[#10264a]
                        "
                    >
                        Stops
                    </h3>

                    <div className="space-y-2.5">
                        {stopOptions.map((item) => (
                            <label
                                key={item.id}
                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    justify-between
                                    gap-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-8
                                    "
                                >
                                    <input
                                        type="checkbox"
                                        checked={stops.includes(
                                            item.id
                                        )}
                                        onChange={() =>
                                            handleCheckbox(
                                                item.id,
                                                "stops"
                                            )
                                        }
                                        className="
                                            h-[15px]
                                            w-[15px]
                                            cursor-pointer
                                            accent-[#0866f5]
                                        "
                                    />

                                    <span
                                        className="
                                            text-[14px]
                                            font-medium
                                            text-[#52627a]
                                        "
                                    >
                                        {item.label}
                                    </span>
                                </div>

                                <span
                                    className="
                                        text-[14px]
                                        font-medium
                                        text-[#7b8ba3]
                                    "
                                >
                                    {item.price}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* AIRLINES */}
                <div
                    className="
                        border-b
                        border-[#edf1f5]
                        py-4
                    "
                >
                    <h3
                        className="
                            mb-3
                            text-[14px]
                            font-bold
                            text-[#10264a]
                        "
                    >
                        Airlines
                    </h3>

                    <div className="space-y-3">
                        {airlineOptions.map((item) => (
                            <label
                                key={item.id}
                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    justify-between
                                    gap-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        min-w-150
                                        max-w-[150px]
                                        truncate
                                        items-center
                                        gap-5
                                    "
                                >
                                    <input
                                        type="checkbox"
                                        checked={airlines.includes(
                                            item.id
                                        )}
                                        onChange={() =>
                                            handleCheckbox(
                                                item.id,
                                                "airlines"
                                            )
                                        }
                                        className="
                                            h-[15px]
                                            w-[15px]
                                            shrink-0
                                            cursor-pointer
                                            accent-[#0866f5]
                                        "
                                    />

                                    <span
                                        className="
                                            truncate
                                            text-[14px]
                                            font-medium
                                            text-[#52627a]
                                        "
                                    >
                                        {item.label}
                                    </span>
                                </div>

                                <span
                                    className="
                                        shrink-1
                                        text-[14px]
                                        font-medium
                                        text-[#7b8ba3]
                                    "
                                >
                                    {item.price}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* DEPARTURE TIME */}
                <div
                    className="
                        border-b
                        border-[#edf1f5]
                        py-4
                    "
                >
                    <h3
                        className="
                            mb-5
                            text-[14px]
                            font-bold
                            text-[#10264a]
                        "
                    >
                        Departure Time
                    </h3>

                    <div
                        className="
                            grid
                            grid-cols-3
                            gap-2
                        "
                    >
                        {timeOptions.map((item) => {
                            const isActive =
                                departureTime === item.id;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() =>
                                        onFiltersChange({
                                            ...filters,
                                            departureTime:
                                                isActive
                                                    ? ""
                                                    : item.id,
                                        })
                                    }
                                    className={`
                                        rounded-[5px]
                                        border
                                        px-1
                                        py-2
                                        text-center
                                        transition

                                        ${
                                            isActive
                                                ? "border-[#0866f5] bg-[#eef5ff]"
                                                : "border-[#e5eaf1] bg-white hover:border-[#9ebff5]"
                                        }
                                    `}
                                >
                                    <p
                                        className={`
                                            text-[14px]
                                            font-semibold

                                            ${
                                                isActive
                                                    ? "text-[#0866f5]"
                                                    : "text-[#10264a]"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-[9px]
                                            text-[#8a98ac]
                                        "
                                    >
                                        {item.time}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* PRICE RANGE */}
                <div className="py-6">
                    <div
                        className="
                            mb-3
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <h3
                            className="
                                text-[14px]
                                font-bold
                                text-[#10264a]
                            "
                        >
                            Price Range
                        </h3>

                        <span
                            className="
                                text-[14px]
                                font-semibold
                                text-[#0866f5]
                            "
                        >
                            ${maxPrice}
                        </span>
                    </div>

                    <input
                        type="range"
                        min="100"
                        max="3000"
                        step="10"
                        value={maxPrice}
                        onChange={(event) =>
                            onFiltersChange({
                                ...filters,
                                maxPrice: Number(
                                    event.target.value
                                ),
                            })
                        }
                        className="
                            h-[6px]
                            w-full
                            cursor-pointer
                            accent-[#0866f5]
                        "
                    />

                    <div
                        className="
                            mt-2
                            flex
                            items-center
                            justify-between
                            text-[12px]
                            font-medium
                            text-[#8a98ac]
                        "
                    >
                        <span>$100</span>
                        <span>$3000</span>
                    </div>
                </div>
            </div>

            {/* APPLY FILTERS */}
            <div
                className="
                    border-t
                    border-[#edf1f5]
                    px-4
                    py-4
                "
            >
                <button
                    type="button"
                    className="
                        h-[38px]
                        w-full
                        rounded-[6px]
                        bg-[#0866f5]
                        text-[11px]
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#0059e8]
                        active:scale-[0.98]
                    "
                >
                    Apply Filters
                </button>
            </div>
        </aside>
    );
};

export default FlightFilters;