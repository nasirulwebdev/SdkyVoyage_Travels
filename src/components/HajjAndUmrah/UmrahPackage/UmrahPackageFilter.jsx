import {
    Check,
    ChevronDown,
    RotateCcw,
    SlidersHorizontal,
} from "lucide-react";

import {
    umrahPackageFilterData,
} from "../../../data/HajjAndUmrah/UmrahPackageData";


const UmrahPackageFilter = ({
    filters,
    onFilterChange,
    onReset,
}) => {

    // ================================
    // SAFE FILTER VALUES
    // ================================

    const packageTypes = filters?.packageTypes || [];
    const durations = filters?.durations || [];
    const hotelRatings = filters?.hotelRatings || [];
    const services = filters?.services || [];

    const minPrice =
        filters?.minPrice ??
        umrahPackageFilterData.priceRange.min;

    const maxPrice =
        filters?.maxPrice ??
        umrahPackageFilterData.priceRange.max;


    // ================================
    // ACTIVE FILTER COUNT
    // ================================

    const activeFilterCount =
        packageTypes.length +
        durations.length +
        hotelRatings.length +
        services.length;


    // ================================
    // TOGGLE ARRAY FILTER
    // ================================

    const toggleArrayFilter = (key, value) => {

        const currentValues = filters?.[key] || [];

        const updatedValues = currentValues.includes(value)
            ? currentValues.filter(
                (item) => item !== value
            )
            : [
                ...currentValues,
                value,
            ];


        onFilterChange?.({
            ...filters,
            [key]: updatedValues,
        });

    };


    // ================================
    // PRICE CHANGE
    // ================================

    const handleMinPriceChange = (event) => {

        const value = Number(event.target.value);

        onFilterChange?.({
            ...filters,
            minPrice: Math.min(
                value,
                maxPrice - 50
            ),
        });

    };


    const handleMaxPriceChange = (event) => {

        const value = Number(event.target.value);

        onFilterChange?.({
            ...filters,
            maxPrice: Math.max(
                value,
                minPrice + 50
            ),
        });

    };


    // ================================
    // APPLY FILTER
    // ================================

    const handleApplyFilters = () => {

        onFilterChange?.({
            ...filters,
        });

    };


    return (

        <aside
            className="
                sticky
                top-24
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_10px_35px_rgba(15,23,42,0.06)]
            "
        >

            {/* =========================
                FILTER HEADER
            ========================= */}

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

                <div
                    className="
                        flex
                        items-center
                        gap-2.5
                    "
                >

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-emerald-50
                            text-emerald-700
                        "
                    >
                        <SlidersHorizontal size={18} />
                    </div>


                    <div>

                        <h2
                            className="
                                text-base
                                font-bold
                                text-slate-900
                            "
                        >
                            Filter Packages
                        </h2>


                        {activeFilterCount > 0 && (

                            <p
                                className="
                                    mt-0.5
                                    text-[11px]
                                    font-medium
                                    text-emerald-700
                                "
                            >
                                {activeFilterCount} active filters
                            </p>

                        )}

                    </div>

                </div>


                <button
                    type="button"
                    onClick={onReset}
                    disabled={activeFilterCount === 0}
                    className="
                        group
                        flex
                        items-center
                        gap-1.5
                        rounded-md
                        px-2
                        py-1.5
                        text-xs
                        font-semibold
                        text-emerald-700
                        transition-all
                        duration-300
                        hover:bg-emerald-50
                        hover:text-emerald-800
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >

                    <RotateCcw
                        size={13}
                        className="
                            transition-transform
                            duration-300
                            group-hover:-rotate-45
                        "
                    />

                    Clear All

                </button>

            </div>


            {/* =========================
                PACKAGE TYPE
            ========================= */}

            <FilterSection title="Package Type">

                {umrahPackageFilterData.packageTypes.map(
                    (type) => (

                        <CheckboxItem
                            key={type}
                            label={type}
                            checked={
                                packageTypes.includes(type)
                            }
                            onChange={() =>
                                toggleArrayFilter(
                                    "packageTypes",
                                    type
                                )
                            }
                        />

                    )
                )}

            </FilterSection>


            {/* =========================
                DURATION
            ========================= */}

            <FilterSection title="Duration">

                {umrahPackageFilterData.durations.map(
                    (duration) => (

                        <CheckboxItem
                            key={duration}
                            label={duration}
                            checked={
                                durations.includes(duration)
                            }
                            onChange={() =>
                                toggleArrayFilter(
                                    "durations",
                                    duration
                                )
                            }
                        />

                    )
                )}

            </FilterSection>


            {/* =========================
                HOTEL RATING
            ========================= */}

            <FilterSection title="Hotel Rating">

                {umrahPackageFilterData.hotelRatings.map(
                    (rating) => (

                        <CheckboxItem
                            key={rating}
                            label={`${rating} Star Hotel`}
                            checked={
                                hotelRatings.includes(rating)
                            }
                            onChange={() =>
                                toggleArrayFilter(
                                    "hotelRatings",
                                    rating
                                )
                            }
                        />

                    )
                )}

            </FilterSection>


            {/* =========================
                SERVICES
            ========================= */}

            <FilterSection title="Included Services">

                {umrahPackageFilterData.services.map(
                    (service) => (

                        <CheckboxItem
                            key={service}
                            label={service}
                            checked={
                                services.includes(service)
                            }
                            onChange={() =>
                                toggleArrayFilter(
                                    "services",
                                    service
                                )
                            }
                        />

                    )
                )}

            </FilterSection>


            {/* =========================
                PRICE RANGE
            ========================= */}

            <div className="px-5 py-5">

                <div
                    className="
                        mb-5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <h3
                        className="
                            text-sm
                            font-bold
                            text-slate-900
                        "
                    >
                        Price Range (USD)
                    </h3>


                    <span
                        className="
                            rounded-full
                            bg-emerald-50
                            px-2.5
                            py-1
                            text-[11px]
                            font-bold
                            text-emerald-700
                        "
                    >
                        ${minPrice} – ${maxPrice}
                    </span>

                </div>


                {/* Price Boxes */}

                <div
                    className="
                        mb-5
                        grid
                        grid-cols-2
                        gap-3
                    "
                >

                    <div>

                        <span
                            className="
                                mb-1.5
                                block
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-wide
                                text-slate-400
                            "
                        >
                            Minimum
                        </span>

                        <div
                            className="
                                rounded-lg
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-2.5
                                text-sm
                                font-bold
                                text-slate-700
                            "
                        >
                            ${minPrice}
                        </div>

                    </div>


                    <div>

                        <span
                            className="
                                mb-1.5
                                block
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-wide
                                text-slate-400
                            "
                        >
                            Maximum
                        </span>

                        <div
                            className="
                                rounded-lg
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-2.5
                                text-sm
                                font-bold
                                text-slate-700
                            "
                        >
                            ${maxPrice}
                        </div>

                    </div>

                </div>


                {/* Minimum Range */}

                <div className="mb-4">

                    <input
                        type="range"
                        min={
                            umrahPackageFilterData
                                .priceRange.min
                        }
                        max={
                            umrahPackageFilterData
                                .priceRange.max
                        }
                        step="50"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="
                            h-1.5
                            w-full
                            cursor-pointer
                            accent-emerald-700
                        "
                        aria-label="Minimum price"
                    />

                </div>


                {/* Maximum Range */}

                <div>

                    <input
                        type="range"
                        min={
                            umrahPackageFilterData
                                .priceRange.min
                        }
                        max={
                            umrahPackageFilterData
                                .priceRange.max
                        }
                        step="50"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="
                            h-1.5
                            w-full
                            cursor-pointer
                            accent-emerald-700
                        "
                        aria-label="Maximum price"
                    />

                </div>


                {/* Apply Button */}

                <button
                    type="button"
                    onClick={handleApplyFilters}
                    className="
                        group
                        mt-6
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-emerald-700
                        px-4
                        py-3
                        text-sm
                        font-bold
                        text-white
                        shadow-lg
                        shadow-emerald-700/15
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-emerald-800
                        hover:shadow-xl
                        hover:shadow-emerald-700/20
                        active:translate-y-0
                    "
                >

                    <SlidersHorizontal
                        size={16}
                        className="
                            transition-transform
                            duration-300
                            group-hover:rotate-12
                        "
                    />

                    Apply Filters

                </button>

            </div>

        </aside>

    );

};


// =====================================
// FILTER SECTION COMPONENT
// =====================================

const FilterSection = ({
    title,
    children,
}) => {

    return (

        <div
            className="
                border-b
                border-slate-100
                px-5
                py-5
            "
        >

            <div
                className="
                    mb-4
                    flex
                    items-center
                    justify-between
                "
            >

                <h3
                    className="
                        text-sm
                        font-bold
                        text-slate-900
                    "
                >
                    {title}
                </h3>


                <ChevronDown
                    size={16}
                    className="text-slate-400"
                />

            </div>


            <div className="space-y-2.5">

                {children}

            </div>

        </div>

    );

};


// =====================================
// CUSTOM CHECKBOX COMPONENT
// =====================================

const CheckboxItem = ({
    label,
    checked,
    onChange,
}) => {

    return (

        <label
            className="
                group
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-lg
                px-2
                py-2
                transition-all
                duration-300
                hover:bg-emerald-50/70
            "
        >

            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="peer sr-only"
            />


            {/* Custom Checkbox */}

            <span
                className={`
                    flex
                    h-[18px]
                    w-[18px]
                    shrink-0
                    items-center
                    justify-center
                    rounded
                    border
                    transition-all
                    duration-300

                    ${
                        checked
                            ? `
                                border-emerald-700
                                bg-emerald-700
                                text-white
                                shadow-sm
                              `
                            : `
                                border-slate-300
                                bg-white
                                text-transparent
                                group-hover:border-emerald-500
                              `
                    }
                `}
            >

                <Check
                    size={12}
                    strokeWidth={3}
                />

            </span>


            <span
                className={`
                    text-sm
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5

                    ${
                        checked
                            ? "font-semibold text-emerald-800"
                            : "font-medium text-slate-600"
                    }
                `}
            >
                {label}
            </span>

        </label>

    );

};


export default UmrahPackageFilter;