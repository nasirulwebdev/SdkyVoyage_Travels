import {
    Grid2X2,
    List,
    SlidersHorizontal,
} from "lucide-react";

import ResortCard from "../ResortCard/ResortCard";

const ResortListing = ({
    resorts,
    totalResorts,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
}) => {
    return (
        <div className="min-w-0">
            {/* SORT BAR */}
            <div
                className="
                    mb-5
                    flex
                    flex-col
                    gap-4
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    shadow-sm
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >
                {/* RESULT COUNT */}
                <div>
                    <h2
                        className="
                            text-[15px]
                            font-extrabold
                            text-slate-900
                        "
                    >
                        {totalResorts} Resorts Found
                    </h2>

                    <p
                        className="
                            mt-1
                            text-[10px]
                            text-slate-500
                        "
                    >
                        Find the perfect resort for your stay
                    </p>
                </div>

                {/* CONTROLS */}
                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-3
                    "
                >
                    {/* SORT */}
                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-3
                        "
                    >
                        <SlidersHorizontal
                            size={14}
                            className="text-slate-400"
                        />

                        <select
                            value={sortBy}
                            onChange={(event) =>
                                setSortBy(
                                    event.target.value
                                )
                            }
                            className="
                                h-10
                                cursor-pointer
                                bg-transparent
                                pr-2
                                text-[11px]
                                font-semibold
                                text-slate-700
                                outline-none
                            "
                        >
                            <option value="recommended">
                                Recommended
                            </option>

                            <option value="price-low">
                                Price: Low to High
                            </option>

                            <option value="price-high">
                                Price: High to Low
                            </option>

                            <option value="rating">
                                Guest Rating
                            </option>

                            <option value="stars">
                                Star Rating
                            </option>
                        </select>
                    </div>

                    {/* VIEW TOGGLE */}
                    <div
                        className="
                            flex
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-50
                            p-1
                        "
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setViewMode("list")
                            }
                            aria-label="List view"
                            className={`
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-md
                                transition

                                ${
                                    viewMode === "list"
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-slate-500 hover:bg-white hover:text-blue-600"
                                }
                            `}
                        >
                            <List size={15} />
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setViewMode("grid")
                            }
                            aria-label="Grid view"
                            className={`
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-md
                                transition

                                ${
                                    viewMode === "grid"
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-slate-500 hover:bg-white hover:text-blue-600"
                                }
                            `}
                        >
                            <Grid2X2 size={15} />
                        </button>
                    </div>
                </div>
            </div>

            {/* EMPTY STATE */}
            {resorts.length === 0 ? (
                <div
                    className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-6
                        py-16
                        text-center
                        shadow-sm
                    "
                >
                    <h3
                        className="
                            text-lg
                            font-extrabold
                            text-slate-900
                        "
                    >
                        No resorts found
                    </h3>

                    <p
                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "
                    >
                        Try changing your search or filters.
                    </p>
                </div>
            ) : (
                <div
                    className={
                        viewMode === "grid"
                            ? "grid grid-cols-1 gap-5 md:grid-cols-2"
                            : "space-y-5"
                    }
                >
                    {resorts.map((resort) => (
                        <ResortCard
                            key={resort.id}
                            resort={resort}
                            viewMode={viewMode}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResortListing;