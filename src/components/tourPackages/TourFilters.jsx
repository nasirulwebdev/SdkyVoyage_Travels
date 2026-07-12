import {
    ChevronDown,
    MapPin,
    SlidersHorizontal,
    Star,
} from "lucide-react";

import {
    destinationOptions,
    tourTypeOptions,
    durationOptions,
    ratingOptions,
} from "../../data/tourPackagesData";

const TourFilters = ({
    filters,
    setFilters,
    onApplyFilters,
    onClearFilters,
}) => {
    const handleCheckboxChange = (group, value) => {
        const currentValues = filters[group] || [];

        const updatedValues = currentValues.includes(value)
            ? currentValues.filter((item) => item !== value)
            : [...currentValues, value];

        setFilters((previous) => ({
            ...previous,
            [group]: updatedValues,
        }));
    };

    const handleBudgetChange = (event) => {
        setFilters((previous) => ({
            ...previous,
            maxBudget: Number(event.target.value),
        }));
    };

    const handleRatingChange = (rating) => {
        setFilters((previous) => ({
            ...previous,
            rating:
                previous.rating === rating
                    ? null
                    : rating,
        }));
    };

    return (
        <aside
            className="
                w-full
                overflow-hidden
                rounded-[8px]
                border
                border-[#e5e9f0]
                bg-white
                shadow-[0_4px_18px_rgba(15,23,42,0.04)]
                lg:w-[250px]
                lg:min-w-[250px]
            "
        >
            {/* HEADER */}
            <div
                className="
                    flex
                    h-[58px]
                    items-center
                    justify-between
                    border-b
                    border-[#e9edf3]
                    px-[18px]
                "
            >
                <div className="flex items-center gap-[8px]">
                    <SlidersHorizontal
                        size={16}
                        strokeWidth={2}
                        className="text-[#14213d]"
                    />

                    <h2
                        className="
                            text-[12px]
                            font-bold
                            uppercase
                            tracking-[0.05em]
                            text-[#14213d]
                        "
                    >
                        Filters
                    </h2>
                </div>

                <button
                    type="button"
                    onClick={onClearFilters}
                    className="
                        text-[10px]
                        font-semibold
                        text-[#1769e0]
                        transition
                        hover:text-[#0d55bb]
                    "
                >
                    Clear All
                </button>
            </div>

            {/* DESTINATION */}
            <FilterSection title="Destination">
                <div
                    className="
                        mb-[15px]
                        flex
                        h-[36px]
                        items-center
                        gap-[8px]
                        rounded-[5px]
                        border
                        border-[#dfe4ec]
                        bg-white
                        px-[10px]
                    "
                >
                    <MapPin
                        size={14}
                        strokeWidth={1.8}
                        className="shrink-0 text-[#8b95a5]"
                    />

                    <input
                        type="text"
                        placeholder="Search destination"
                        className="
                            h-full
                            min-w-0
                            flex-1
                            bg-transparent
                            text-[11px]
                            text-[#172348]
                            outline-none
                            placeholder:text-[#9ca5b3]
                        "
                    />
                </div>

                <CheckboxGroup
                    items={destinationOptions}
                    selectedValues={
                        filters.destination || []
                    }
                    onChange={(value) =>
                        handleCheckboxChange(
                            "destination",
                            value
                        )
                    }
                />
            </FilterSection>

            {/* TOUR TYPE */}
            <FilterSection title="Tour Type">
                <CheckboxGroup
                    items={tourTypeOptions}
                    selectedValues={
                        filters.tourType || []
                    }
                    onChange={(value) =>
                        handleCheckboxChange(
                            "tourType",
                            value
                        )
                    }
                />
            </FilterSection>

            {/* DURATION */}
            <FilterSection title="Duration">
                <CheckboxGroup
                    items={durationOptions}
                    selectedValues={
                        filters.duration || []
                    }
                    onChange={(value) =>
                        handleCheckboxChange(
                            "duration",
                            value
                        )
                    }
                />
            </FilterSection>

            {/* BUDGET */}
            <FilterSection title="Budget Range">
                <div className="pt-[2px]">
                    <input
                        type="range"
                        min="5000"
                        max="200000"
                        step="5000"
                        value={
                            filters.maxBudget ?? 200000
                        }
                        onChange={handleBudgetChange}
                        className="
                            h-[4px]
                            w-full
                            cursor-pointer
                            accent-[#1769e0]
                        "
                    />

                    <div
                        className="
                            mt-[11px]
                            flex
                            items-center
                            justify-between
                            text-[10px]
                            font-medium
                            text-[#7d8796]
                        "
                    >
                        <span>৳5,000</span>

                        <span>
                            ৳
                            {(
                                filters.maxBudget ??
                                200000
                            ).toLocaleString()}
                        </span>
                    </div>
                </div>
            </FilterSection>

            {/* RATING */}
            <FilterSection title="Rating">
                <div className="space-y-[11px]">
                    {ratingOptions.map((rating) => (
                        <label
                            key={rating}
                            className="
                                flex
                                cursor-pointer
                                items-center
                                gap-[9px]
                            "
                        >
                            <input
                                type="radio"
                                name="rating"
                                checked={
                                    filters.rating ===
                                    rating
                                }
                                onChange={() =>
                                    handleRatingChange(
                                        rating
                                    )
                                }
                                className="
                                    h-[14px]
                                    w-[14px]
                                    shrink-0
                                    cursor-pointer
                                    accent-[#1769e0]
                                "
                            />

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-[1px]
                                "
                            >
                                {Array.from({
                                    length: 5,
                                }).map(
                                    (_, index) => (
                                        <Star
                                            key={index}
                                            size={12}
                                            strokeWidth={
                                                1.8
                                            }
                                            className={
                                                index <
                                                rating
                                                    ? "fill-[#f5b301] text-[#f5b301]"
                                                    : "text-[#d7dde6]"
                                            }
                                        />
                                    )
                                )}
                            </div>

                            <span
                                className="
                                    text-[10px]
                                    text-[#7d8796]
                                "
                            >
                                & up
                            </span>
                        </label>
                    ))}
                </div>
            </FilterSection>

            {/* APPLY BUTTON */}
            <div className="p-[18px]">
                <button
                    type="button"
                    onClick={onApplyFilters}
                    className="
                        flex
                        h-[40px]
                        w-full
                        items-center
                        justify-center
                        rounded-[5px]
                        bg-[#1769e0]
                        text-[11px]
                        font-bold
                        text-white
                        transition-colors
                        duration-200
                        hover:bg-[#1058c2]
                    "
                >
                    Apply Filters
                </button>
            </div>
        </aside>
    );
};

/* ==========================================
   FILTER SECTION
========================================== */

const FilterSection = ({
    title,
    children,
}) => {
    return (
        <div
            className="
                border-b
                border-[#edf0f4]
                px-[18px]
                py-[17px]
            "
        >
            <div
                className="
                    mb-[14px]
                    flex
                    items-center
                    justify-between
                "
            >
                <h3
                    className="
                        text-[11px]
                        font-bold
                        text-[#172348]
                    "
                >
                    {title}
                </h3>

                <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className="text-[#7d8796]"
                />
            </div>

            {children}
        </div>
    );
};

/* ==========================================
   CHECKBOX GROUP
========================================== */

const CheckboxGroup = ({
    items,
    selectedValues,
    onChange,
}) => {
    return (
        <div className="space-y-[11px]">
            {items.map((item) => (
                <label
                    key={item.id}
                    className="
                        flex
                        cursor-pointer
                        items-center
                        justify-between
                        gap-3
                    "
                >
                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            gap-[9px]
                        "
                    >
                        <input
                            type="checkbox"
                            checked={selectedValues.includes(
                                item.id
                            )}
                            onChange={() =>
                                onChange(item.id)
                            }
                            className="
                                h-[14px]
                                w-[14px]
                                shrink-0
                                cursor-pointer
                                rounded-[3px]
                                border-[#ccd4df]
                                accent-[#1769e0]
                            "
                        />

                        <span
                            className="
                                truncate
                                text-[11px]
                                font-medium
                                text-[#5f6978]
                            "
                        >
                            {item.label}
                        </span>
                    </div>

                    {item.count !== undefined && (
                        <span
                            className="
                                shrink-0
                                text-[9px]
                                text-[#9aa3b1]
                            "
                        >
                            {item.count}
                        </span>
                    )}
                </label>
            ))}
        </div>
    );
};

export default TourFilters;