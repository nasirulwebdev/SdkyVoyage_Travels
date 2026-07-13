import {
    Search,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

import {
    starRatingFilters,
    guestRatingFilters,
    facilitiesFilters,
} from "../../../data/hotels/hotelsData";

const HotelFilters = ({
    filters,
    onFilterChange,
    onResetFilters,
}) => {
    // ==========================================
    // CHECKBOX TOGGLE
    // ==========================================

    const toggleArrayFilter = (filterName, value) => {
        const currentValues = filters[filterName] || [];

        const updatedValues = currentValues.includes(value)
            ? currentValues.filter((item) => item !== value)
            : [...currentValues, value];

        onFilterChange(filterName, updatedValues);
    };

    return (
        <div
            className="
                overflow-hidden
                rounded-lg
                border
                border-slate-200
                bg-white
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
                    px-4
                    py-3
                "
            >
                <h2 className="text-[14px] font-bold text-slate-900">
                    Filter by
                </h2>

                <button
                    type="button"
                    onClick={onResetFilters}
                    className="
                        text-[10px]
                        font-semibold
                        text-emerald-600
                        transition
                        hover:text-emerald-700
                    "
                >
                    Reset All
                </button>
            </div>

            {/* ==================================
                SEARCH BY HOTEL NAME
            =================================== */}
            <FilterSection title="Search by Hotel Name">
                <div className="relative">
                    <Search
                        size={14}
                        className="
                            pointer-events-none
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                        "
                    />

                    <input
                        type="text"
                        value={filters.hotelName}
                        onChange={(event) =>
                            onFilterChange(
                                "hotelName",
                                event.target.value
                            )
                        }
                        placeholder="Hotel name"
                        className="
                            h-10
                            w-full
                            rounded-md
                            border
                            border-slate-200
                            bg-white
                            pl-9
                            pr-3
                            text-[11px]
                            text-slate-700
                            outline-none
                            transition
                            placeholder:text-slate-400
                            focus:border-emerald-500
                        "
                    />
                </div>
            </FilterSection>

            {/* ==================================
                PRICE RANGE
            =================================== */}
            <FilterSection title="Price Range">
                <p className="mb-3 text-[10px] text-slate-400">
                    Per night
                </p>

                <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
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
                        accent-emerald-600
                    "
                />

                <div
                    className="
                        mt-2
                        flex
                        items-center
                        justify-between
                        text-[10px]
                        font-semibold
                        text-slate-600
                    "
                >
                    <span>$50</span>
                    <span>${filters.maxPrice}+</span>
                </div>
            </FilterSection>

            {/* ==================================
                STAR RATING
            =================================== */}
            <FilterSection title="Star Rating">
                <div className="space-y-2">
                    {starRatingFilters.map((item) => {
                        const value = Number(
                            item.value ?? item.stars
                        );

                        return (
                            <label
                                key={item.id ?? value}
                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    justify-between
                                    gap-2
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filters.stars.includes(
                                            value
                                        )}
                                        onChange={() =>
                                            toggleArrayFilter(
                                                "stars",
                                                value
                                            )
                                        }
                                        className="
                                            h-3.5
                                            w-3.5
                                            cursor-pointer
                                            accent-emerald-600
                                        "
                                    />

                                    <div className="flex items-center">
                                        {Array.from({
                                            length: value,
                                        }).map((_, index) => (
                                            <span
                                                key={index}
                                                className="
                                                    text-[12px]
                                                    leading-none
                                                    text-amber-400
                                                "
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <span className="text-[9px] text-slate-400">
                                    {item.count}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </FilterSection>

            {/* ==================================
                GUEST RATING
            =================================== */}
            <FilterSection title="Guest Rating">
                <div className="space-y-2">
                    {guestRatingFilters.map((item) => {
                        const value = Number(
                            item.value ?? item.rating
                        );

                        return (
                            <label
                                key={item.id ?? value}
                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    justify-between
                                    gap-2
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filters.guestRatings.includes(
                                            value
                                        )}
                                        onChange={() =>
                                            toggleArrayFilter(
                                                "guestRatings",
                                                value
                                            )
                                        }
                                        className="
                                            h-3.5
                                            w-3.5
                                            cursor-pointer
                                            accent-emerald-600
                                        "
                                    />

                                    <span className="text-[10px] text-slate-600">
                                        {item.label ||
                                            `${value} & Above`}
                                    </span>
                                </div>

                                <span className="text-[9px] text-slate-400">
                                    {item.count}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </FilterSection>

            {/* ==================================
                FACILITIES
            =================================== */}
            <FilterSection title="Facilities" last>
                <div className="space-y-2">
                    {facilitiesFilters.map((item) => {
                        const value =
                            item.value ||
                            item.name ||
                            item.label;

                        return (
                            <label
                                key={item.id ?? value}
                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    justify-between
                                    gap-2
                                "
                            >
                                <div className="flex min-w-0 items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filters.facilities.includes(
                                            value
                                        )}
                                        onChange={() =>
                                            toggleArrayFilter(
                                                "facilities",
                                                value
                                            )
                                        }
                                        className="
                                            h-3.5
                                            w-3.5
                                            shrink-0
                                            cursor-pointer
                                            accent-emerald-600
                                        "
                                    />

                                    <span
                                        className="
                                            truncate
                                            text-[10px]
                                            text-slate-600
                                        "
                                    >
                                        {item.label ||
                                            item.name ||
                                            value}
                                    </span>
                                </div>

                                <span className="text-[9px] text-slate-400">
                                    {item.count}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </FilterSection>
        </div>
    );
};

// ==============================================
// REUSABLE FILTER SECTION
// ==============================================

const FilterSection = ({
    title,
    children,
    last = false,
}) => {
    return (
        <div
            className={`
                px-4
                py-4
                ${!last ? "border-b border-slate-200" : ""}
            `}
        >
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[11px] font-bold text-slate-800">
                    {title}
                </h3>
            </div>

            {children}
        </div>
    );
};

export default HotelFilters;