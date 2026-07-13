import {
    List,
    Grid2X2,
    Hotel,
} from "lucide-react";

import HotelCard from "../HotelCard/HotelCard";

const HotelListing = ({
    hotels = [],
    totalHotels = 0,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
}) => {
    return (
        <div>
            {/* =====================================
                RESULTS HEADER
            ====================================== */}
            <div
                className="
                    mb-3
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >
                {/* RESULT COUNT */}
                <div>
                    <h2 className="text-[16px] font-bold text-slate-900">
                        {totalHotels.toLocaleString()} Hotels Found
                    </h2>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                        Showing the best available properties for your stay
                    </p>
                </div>

                {/* SORT + VIEW */}
                <div className="flex items-center gap-2">
                    <span className="hidden text-[10px] text-slate-500 sm:block">
                        Sort by:
                    </span>

                    <select
                        value={sortBy}
                        onChange={(event) =>
                            setSortBy(event.target.value)
                        }
                        className="
                            h-9
                            rounded-md
                            border
                            border-slate-200
                            bg-white
                            px-3
                            text-[10px]
                            font-medium
                            text-slate-700
                            outline-none
                            transition
                            focus:border-emerald-500
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
                    </select>

                    {/* LIST VIEW */}
                    <button
                        type="button"
                        onClick={() => setViewMode("list")}
                        aria-label="List view"
                        className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-md
                            border
                            transition
                            ${
                                viewMode === "list"
                                    ? "border-emerald-600 bg-emerald-600 text-white"
                                    : "border-slate-200 bg-white text-slate-500 hover:border-emerald-500 hover:text-emerald-600"
                            }
                        `}
                    >
                        <List size={16} />
                    </button>

                    {/* GRID VIEW */}
                    <button
                        type="button"
                        onClick={() => setViewMode("grid")}
                        aria-label="Grid view"
                        className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-md
                            border
                            transition
                            ${
                                viewMode === "grid"
                                    ? "border-emerald-600 bg-emerald-600 text-white"
                                    : "border-slate-200 bg-white text-slate-500 hover:border-emerald-500 hover:text-emerald-600"
                            }
                        `}
                    >
                        <Grid2X2 size={15} />
                    </button>
                </div>
            </div>

            {/* =====================================
                EMPTY RESULT
            ====================================== */}
            {hotels.length === 0 ? (
                <div
                    className="
                        flex
                        min-h-[350px]
                        flex-col
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-6
                        text-center
                    "
                >
                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-50
                            text-emerald-600
                        "
                    >
                        <Hotel size={25} />
                    </div>

                    <h3 className="mt-4 text-[16px] font-bold text-slate-900">
                        No Hotels Found
                    </h3>

                    <p className="mt-2 max-w-sm text-[11px] leading-5 text-slate-500">
                        Try changing your destination, price range,
                        rating, or facilities filters.
                    </p>
                </div>
            ) : (
                <div
                    className={
                        viewMode === "grid"
                            ? "grid grid-cols-1 gap-4 md:grid-cols-2"
                            : "space-y-3"
                    }
                >
                    {hotels.map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                            viewMode={viewMode}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HotelListing;