import {
    RotateCcw,
    Search,
    Star,
} from "lucide-react";

// ==============================================
// FILTER OPTIONS
// ==============================================

const starOptions = [5, 4, 3, 2, 1];

const guestRatingOptions = [
    {
        value: 9,
        label: "Exceptional",
        score: "9+",
    },
    {
        value: 8,
        label: "Excellent",
        score: "8+",
    },
    {
        value: 7,
        label: "Very Good",
        score: "7+",
    },
    {
        value: 6,
        label: "Good",
        score: "6+",
    },
];

const facilityOptions = [
    "Private Beach",
    "Swimming Pool",
    "Free WiFi",
    "Spa",
    "Restaurant",
    "Fitness Center",
    "Airport Shuttle",
    "Free Parking",
];

const ResortFilters = ({
    filters,
    onFilterChange,
    onResetFilters,
}) => {
    // ==========================================
    // CHECKBOX TOGGLE
    // ==========================================

    const toggleArrayFilter = (
        filterName,
        value
    ) => {
        const currentValues =
            filters[filterName] || [];

        const exists =
            currentValues.includes(value);

        const updatedValues = exists
            ? currentValues.filter(
                  (item) => item !== value
              )
            : [...currentValues, value];

        onFilterChange(
            filterName,
            updatedValues
        );
    };

    return (
        <aside className="w-full">
            <div
                className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                "
            >
                {/* ==================================
                    FILTER HEADER
                =================================== */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        px-5
                        py-4
                    "
                >
                    <h2
                        className="
                            text-[15px]
                            font-bold
                            text-slate-900
                        "
                    >
                        Filters
                    </h2>

                    <button
                        type="button"
                        onClick={onResetFilters}
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-[11px]
                            font-semibold
                            text-blue-600
                            transition
                            hover:text-blue-700
                        "
                    >
                        <RotateCcw size={13} />
                        Reset All
                    </button>
                </div>

                {/* ==================================
                    RESORT NAME
                =================================== */}
                <FilterSection title="Resort Name">
                    <div className="relative">
                        <Search
                            size={15}
                            className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <input
                            type="text"
                            value={filters.resortName}
                            onChange={(event) =>
                                onFilterChange(
                                    "resortName",
                                    event.target.value
                                )
                            }
                            placeholder="Search resort"
                            className="
                                h-10
                                w-full
                                rounded-lg
                                border
                                border-slate-200
                                bg-slate-50
                                pl-9
                                pr-3
                                text-[12px]
                                text-slate-700
                                outline-none
                                transition
                                placeholder:text-slate-400
                                focus:border-blue-500
                                focus:bg-white
                                focus:ring-2
                                focus:ring-blue-500/10
                            "
                        />
                    </div>
                </FilterSection>

                {/* ==================================
                    PRICE RANGE
                =================================== */}
                <FilterSection title="Price Range">
                    <div
                        className="
                            mb-3
                            flex
                            items-center
                            justify-between
                            text-[11px]
                            font-semibold
                            text-slate-500
                        "
                    >
                        <span>$0</span>

                        <span
                            className="
                                rounded-md
                                bg-blue-50
                                px-2
                                py-1
                                font-bold
                                text-blue-600
                            "
                        >
                            Up to ${filters.maxPrice}
                        </span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="25"
                        value={filters.maxPrice}
                        onChange={(event) =>
                            onFilterChange(
                                "maxPrice",
                                Number(
                                    event.target.value
                                )
                            )
                        }
                        className="
                            resort-price-range
                            w-full
                            cursor-pointer
                            accent-blue-600
                        "
                    />

                    <div
                        className="
                            mt-2
                            flex
                            items-center
                            justify-between
                            text-[10px]
                            text-slate-400
                        "
                    >
                        <span>$0</span>
                        <span>$1,000+</span>
                    </div>
                </FilterSection>

                {/* ==================================
                    STAR RATING
                =================================== */}
                <FilterSection title="Star Rating">
                    <div className="space-y-3">
                        {starOptions.map((star) => (
                            <FilterCheckbox
                                key={star}
                                checked={filters.stars.includes(
                                    star
                                )}
                                onChange={() =>
                                    toggleArrayFilter(
                                        "stars",
                                        star
                                    )
                                }
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                    "
                                >
                                    {Array.from({
                                        length: star,
                                    }).map(
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                size={13}
                                                className="
                                                    fill-amber-400
                                                    text-amber-400
                                                "
                                            />
                                        )
                                    )}
                                </div>
                            </FilterCheckbox>
                        ))}
                    </div>
                </FilterSection>

                {/* ==================================
                    GUEST RATING
                =================================== */}
                <FilterSection title="Guest Rating">
                    <div className="space-y-3">
                        {guestRatingOptions.map(
                            (option) => (
                                <FilterCheckbox
                                    key={option.value}
                                    checked={filters.guestRatings.includes(
                                        option.value
                                    )}
                                    onChange={() =>
                                        toggleArrayFilter(
                                            "guestRatings",
                                            option.value
                                        )
                                    }
                                >
                                    <div
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            gap-2
                                        "
                                    >
                                        <span
                                            className="
                                                text-[12px]
                                                text-slate-600
                                            "
                                        >
                                            {option.label}
                                        </span>

                                        <span
                                            className="
                                                rounded
                                                bg-blue-50
                                                px-1.5
                                                py-0.5
                                                text-[10px]
                                                font-bold
                                                text-blue-600
                                            "
                                        >
                                            {option.score}
                                        </span>
                                    </div>
                                </FilterCheckbox>
                            )
                        )}
                    </div>
                </FilterSection>

                {/* ==================================
                    FACILITIES
                =================================== */}
                <FilterSection
                    title="Facilities"
                    last
                >
                    <div className="space-y-3">
                        {facilityOptions.map(
                            (facility) => (
                                <FilterCheckbox
                                    key={facility}
                                    checked={filters.facilities.includes(
                                        facility
                                    )}
                                    onChange={() =>
                                        toggleArrayFilter(
                                            "facilities",
                                            facility
                                        )
                                    }
                                >
                                    <span
                                        className="
                                            text-[12px]
                                            text-slate-600
                                        "
                                    >
                                        {facility}
                                    </span>
                                </FilterCheckbox>
                            )
                        )}
                    </div>
                </FilterSection>
            </div>
        </aside>
    );
};

// ==============================================
// FILTER SECTION
// ==============================================

const FilterSection = ({
    title,
    children,
    last = false,
}) => {
    return (
        <div
            className={`
                px-5
                py-5
                ${
                    !last
                        ? "border-b border-slate-200"
                        : ""
                }
            `}
        >
            <h3
                className="
                    mb-4
                    text-[12px]
                    font-bold
                    text-slate-900
                "
            >
                {title}
            </h3>

            {children}
        </div>
    );
};

// ==============================================
// CUSTOM CHECKBOX ROW
// ==============================================

const FilterCheckbox = ({
    checked,
    onChange,
    children,
}) => {
    return (
        <label
            className="
                flex
                cursor-pointer
                items-center
                gap-3
                select-none
            "
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="
                    h-4
                    w-4
                    shrink-0
                    cursor-pointer
                    rounded
                    border-slate-300
                    accent-blue-600
                "
            />

            <div className="min-w-0 flex-1">
                {children}
            </div>
        </label>
    );
};

export default ResortFilters;