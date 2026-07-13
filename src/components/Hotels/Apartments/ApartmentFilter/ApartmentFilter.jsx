import {
    ChevronDown,
    SlidersHorizontal,
} from "lucide-react";

import {
    propertyTypes,
    amenities,
    neighborhoods,
} from "../../../../data/hotels/apartmentsData";

const ApartmentFilter = ({
    filters,
    setFilters,
}) => {

    const handleCheckboxChange = (
        filterKey,
        value
    ) => {
        setFilters((prev) => {
            const currentValues = prev[filterKey];

            const updatedValues =
                currentValues.includes(value)
                    ? currentValues.filter(
                          (item) => item !== value
                      )
                    : [...currentValues, value];

            return {
                ...prev,
                [filterKey]: updatedValues,
            };
        });
    };

    const handlePriceChange = (e) => {
        setFilters((prev) => ({
            ...prev,
            maxPrice: Number(e.target.value),
        }));
    };

    return (
        <aside className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4">
                <SlidersHorizontal
                    size={18}
                    className="text-slate-700"
                />

                <h2 className="text-base font-bold text-slate-900">
                    Filter By
                </h2>
            </div>

            {/* Price */}
            <div className="border-b border-slate-200 px-5 py-5">
                <h3 className="text-sm font-bold text-slate-900">
                    Price Range
                </h3>

                <input
                    type="range"
                    min="20"
                    max="500"
                    value={filters.maxPrice}
                    onChange={handlePriceChange}
                    className="mt-4 h-1.5 w-full cursor-pointer accent-blue-600"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-500">
                    <span>$20</span>
                    <span>${filters.maxPrice}</span>
                </div>
            </div>

            {/* Property Types */}
            <FilterSection title="Property Type">
                {propertyTypes.map((item) => (
                    <FilterCheckbox
                        key={item.id}
                        item={item}
                        checked={filters.propertyTypes.includes(
                            item.name
                        )}
                        onChange={() =>
                            handleCheckboxChange(
                                "propertyTypes",
                                item.name
                            )
                        }
                    />
                ))}
            </FilterSection>

            {/* Amenities */}
            <FilterSection title="Amenities">
                {amenities.map((item) => (
                    <FilterCheckbox
                        key={item.id}
                        item={item}
                        checked={filters.amenities.includes(
                            item.name
                        )}
                        onChange={() =>
                            handleCheckboxChange(
                                "amenities",
                                item.name
                            )
                        }
                    />
                ))}
            </FilterSection>

            {/* Neighborhood */}
            <FilterSection
                title="Neighborhood"
                border={false}
            >
                {neighborhoods.map((item) => (
                    <FilterCheckbox
                        key={item.id}
                        item={item}
                        checked={filters.neighborhoods.includes(
                            item.name
                        )}
                        onChange={() =>
                            handleCheckboxChange(
                                "neighborhoods",
                                item.name
                            )
                        }
                    />
                ))}
            </FilterSection>

            <div className="px-5 pb-5">
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                    Show More Filters
                    <ChevronDown size={16} />
                </button>
            </div>
        </aside>
    );
};


const FilterSection = ({
    title,
    children,
    border = true,
}) => {
    return (
        <div
            className={`px-5 py-5 ${
                border
                    ? "border-b border-slate-200"
                    : ""
            }`}
        >
            <h3 className="mb-4 text-sm font-bold text-slate-900">
                {title}
            </h3>

            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
};


const FilterCheckbox = ({
    item,
    checked,
    onChange,
}) => {
    return (
        <label className="flex cursor-pointer items-center justify-between gap-3">

            <div className="flex items-center gap-2.5">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="h-4 w-4 cursor-pointer accent-blue-600"
                />

                <span className="text-sm text-slate-600">
                    {item.name}
                </span>
            </div>

            <span className="text-xs text-slate-400">
                {item.count}
            </span>
        </label>
    );
};

export default ApartmentFilter;