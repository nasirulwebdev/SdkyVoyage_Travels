import {
    Grid2X2,
    List,
} from "lucide-react";

import { hajjUmrahToolbarData } from "../../data/HajjAndUmrah/HajjAndUmrahData";


const HajjUmrahToolbar = ({
    totalResults,
    sortBy,
    onSortChange,
    viewMode,
    onViewModeChange,
}) => {
    const { resultsText, sortOptions } = hajjUmrahToolbarData;

    return (
        <div className="
            mb-5
            flex
            flex-col
            gap-4
            rounded-xl
            border
            border-gray-100
            bg-white
            px-5
            py-4
            shadow-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
        ">
            <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-bold text-gray-900">
                    {totalResults}
                </span>{" "}
                {resultsText}
            </p>

            <div className="flex items-center gap-3">
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="
                        h-10
                        rounded-lg
                        border
                        border-gray-200
                        bg-white
                        px-3
                        text-sm
                        text-gray-700
                        outline-none
                        focus:border-orange-500
                    "
                >
                    {sortOptions.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <div className="flex rounded-lg border border-gray-200 p-1">
                    <button
                        type="button"
                        onClick={() => onViewModeChange("grid")}
                        className={`
                            flex h-8 w-8 items-center justify-center rounded-md
                            transition
                            ${
                                viewMode === "grid"
                                    ? "bg-orange-500 text-white"
                                    : "text-gray-500 hover:bg-gray-100"
                            }
                        `}
                    >
                        <Grid2X2 size={16} />
                    </button>

                    <button
                        type="button"
                        onClick={() => onViewModeChange("list")}
                        className={`
                            flex h-8 w-8 items-center justify-center rounded-md
                            transition
                            ${
                                viewMode === "list"
                                    ? "bg-orange-500 text-white"
                                    : "text-gray-500 hover:bg-gray-100"
                            }
                        `}
                    >
                        <List size={17} />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default HajjUmrahToolbar;