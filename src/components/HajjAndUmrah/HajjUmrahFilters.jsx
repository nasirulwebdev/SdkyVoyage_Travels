import { RotateCcw } from "lucide-react";

import {
    hajjUmrahFilterData,
} from "../../data/HajjAndUmrah/HajjAndUmrahData";


const HajjUmrahFilters = ({
    filters,
    onFilterChange,
    onPriceChange,
    onClearFilters,
}) => {
    const {
        title,
        packageType,
        departureCity,
        duration,
        priceRange,
        clearButtonText,
    } = hajjUmrahFilterData;


    return (
        <aside
            className="
                w-full
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-5
                shadow-sm
            "
        >
            {/* Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-100
                    pb-4
                "
            >
                <h2 className="text-lg font-bold text-gray-900">
                    {title}
                </h2>

                <button
                    type="button"
                    onClick={onClearFilters}
                    className="
                        flex
                        items-center
                        gap-1.5
                        text-xs
                        font-semibold
                        text-orange-500
                        transition
                        hover:text-orange-600
                    "
                >
                    <RotateCcw size={14} />
                    {clearButtonText}
                </button>
            </div>


            {/* Package Type */}
            <div className="border-b border-gray-100 py-5">
                <h3 className="mb-4 text-sm font-bold text-gray-900">
                    {packageType.title}
                </h3>

                <div className="space-y-3">
                    {packageType.options.map((option) => (
                        <label
                            key={option.id}
                            className="
                                flex
                                cursor-pointer
                                items-center
                                gap-3
                                text-sm
                                text-gray-600
                            "
                        >
                            <input
                                type="radio"
                                name="packageType"
                                value={option.value}
                                checked={
                                    filters.packageType === option.value
                                }
                                onChange={(e) =>
                                    onFilterChange(
                                        "packageType",
                                        e.target.value
                                    )
                                }
                                className="
                                    h-4
                                    w-4
                                    accent-orange-500
                                "
                            />

                            <span
                                className={
                                    filters.packageType === option.value
                                        ? "font-semibold text-gray-900"
                                        : ""
                                }
                            >
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>


            {/* Departure City */}
            <div className="border-b border-gray-100 py-5">
                <h3 className="mb-4 text-sm font-bold text-gray-900">
                    {departureCity.title}
                </h3>

                <div className="space-y-3">
                    {departureCity.options.map((option) => (
                        <label
                            key={option.id}
                            className="
                                flex
                                cursor-pointer
                                items-center
                                gap-3
                                text-sm
                                text-gray-600
                            "
                        >
                            <input
                                type="radio"
                                name="departureCity"
                                value={option.value}
                                checked={
                                    filters.departureCity === option.value
                                }
                                onChange={(e) =>
                                    onFilterChange(
                                        "departureCity",
                                        e.target.value
                                    )
                                }
                                className="
                                    h-4
                                    w-4
                                    accent-orange-500
                                "
                            />

                            <span
                                className={
                                    filters.departureCity === option.value
                                        ? "font-semibold text-gray-900"
                                        : ""
                                }
                            >
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>


            {/* Duration */}
            <div className="border-b border-gray-100 py-5">
                <h3 className="mb-4 text-sm font-bold text-gray-900">
                    {duration.title}
                </h3>

                <div className="space-y-3">
                    {duration.options.map((option) => (
                        <label
                            key={option.id}
                            className="
                                flex
                                cursor-pointer
                                items-center
                                gap-3
                                text-sm
                                text-gray-600
                            "
                        >
                            <input
                                type="radio"
                                name="duration"
                                value={option.value}
                                checked={
                                    filters.duration === option.value
                                }
                                onChange={(e) =>
                                    onFilterChange(
                                        "duration",
                                        e.target.value
                                    )
                                }
                                className="
                                    h-4
                                    w-4
                                    accent-orange-500
                                "
                            />

                            <span
                                className={
                                    filters.duration === option.value
                                        ? "font-semibold text-gray-900"
                                        : ""
                                }
                            >
                                {option.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>


            {/* Price Range */}
            <div className="pt-5">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900">
                        {priceRange.title}
                    </h3>

                    <span className="text-sm font-bold text-orange-500">
                        {priceRange.currencySymbol}
                        {filters.priceRange.max.toLocaleString()}
                    </span>
                </div>

                <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    step={priceRange.step}
                    value={filters.priceRange.max}
                    onChange={(e) =>
                        onPriceChange(Number(e.target.value))
                    }
                    className="
                        h-2
                        w-full
                        cursor-pointer
                        accent-orange-500
                    "
                />

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        justify-between
                        text-xs
                        font-medium
                        text-gray-500
                    "
                >
                    <span>
                        {priceRange.currencySymbol}
                        {priceRange.min.toLocaleString()}
                    </span>

                    <span>
                        {priceRange.currencySymbol}
                        {priceRange.max.toLocaleString()}
                    </span>
                </div>
            </div>
        </aside>
    );
};


export default HajjUmrahFilters;