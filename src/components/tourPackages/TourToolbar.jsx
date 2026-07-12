
import {
    ChevronDown,
    Grid2X2,
    List,
    SlidersHorizontal,
} from "lucide-react";

const TourToolbar = ({
    totalPackages = 0,
    startItem = 0,
    endItem = 0,
    sortBy = "popular",
    onSortChange,
    viewMode = "grid",
    onViewModeChange,
    onOpenFilters,
}) => {
    return (
        <div
            className="
                mb-5
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
        >
            {/* Results Count */}
            <p className="text-[12px] font-medium text-[#7b8494]">
                Showing{" "}
                <span className="font-bold text-[#111c3f]">
                    {startItem}–{endItem}
                </span>{" "}
                of{" "}
                <span className="font-bold text-[#111c3f]">
                    {totalPackages}+
                </span>{" "}
                Packages
            </p>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
                <button
                type="button"
                onClick={onOpenFilters}
                className="
                    flex
                    h-[38px]
                    items-center
                    gap-2
                    rounded-[6px]
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-3
                    text-[11px]
                    font-semibold
                    text-[#172348]
                    lg:hidden
                "
            >
                <SlidersHorizontal size={15} />
                Filters
            </button>
                {/* Sort */}
                <div
                    className="
                        flex
                        h-[38px]
                        items-center
                        rounded-[6px]
                        border
                        border-[#dfe5ee]
                        bg-white
                        px-3
                    "
                >
                    <span
                        className="
                            mr-2
                            whitespace-nowrap
                            text-[11px]
                            text-[#8a94a3]
                        "
                    >
                        Sort By:
                    </span>

                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(event) =>
                                onSortChange?.(
                                    event.target.value
                                )
                            }
                            className="
                                cursor-pointer
                                appearance-none
                                bg-transparent
                                py-1
                                pr-6
                                text-[11px]
                                font-semibold
                                text-[#172348]
                                outline-none
                            "
                        >
                            <option value="popular">
                                Popular First
                            </option>

                            <option value="rating">
                                Top Rated
                            </option>

                            <option value="price-low">
                                Price: Low to High
                            </option>

                            <option value="price-high">
                                Price: High to Low
                            </option>

                            <option value="newest">
                                Newest First
                            </option>
                        </select>

                        <ChevronDown
                            size={13}
                            className="
                                pointer-events-none
                                absolute
                                right-0
                                top-1/2
                                -translate-y-1/2
                                text-[#667085]
                            "
                        />
                    </div>
                </div>

                {/* Grid Button */}
                <button
                    type="button"
                    aria-label="Grid view"
                    onClick={() =>
                        onViewModeChange?.("grid")
                    }
                    className={`
                        flex
                        h-[38px]
                        w-[38px]
                        items-center
                        justify-center
                        rounded-[6px]
                        border
                        transition

                        ${
                            viewMode === "grid"
                                ? `
                                    border-[#1769e0]
                                    bg-[#1769e0]
                                    text-white
                                `
                                : `
                                    border-[#dfe5ee]
                                    bg-white
                                    text-[#6f7988]
                                    hover:text-[#1769e0]
                                `
                        }
                    `}
                >
                    <Grid2X2 size={15} />
                </button>

                {/* List Button */}
                <button
                    type="button"
                    aria-label="List view"
                    onClick={() =>
                        onViewModeChange?.("list")
                    }
                    className={`
                        flex
                        h-[38px]
                        w-[38px]
                        items-center
                        justify-center
                        rounded-[6px]
                        border
                        transition

                        ${
                            viewMode === "list"
                                ? `
                                    border-[#1769e0]
                                    bg-[#1769e0]
                                    text-white
                                `
                                : `
                                    border-[#dfe5ee]
                                    bg-white
                                    text-[#6f7988]
                                    hover:text-[#1769e0]
                                `
                        }
                    `}
                >
                    <List size={17} />
                </button>
            </div>
        </div>
    );
};

export default TourToolbar;