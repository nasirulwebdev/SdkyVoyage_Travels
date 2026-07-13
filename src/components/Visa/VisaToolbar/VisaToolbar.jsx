import {
    Grid2X2,
    List,
    SlidersHorizontal,
} from "lucide-react";

const VisaToolbar = ({
    resultCount = 0,
    sortBy,
    onSortChange,
    viewMode,
    onViewModeChange,
}) => {
    return (
        <div
            className="
                mb-5
                flex
                min-h-[54px]
                items-center
                justify-between
                gap-4
                rounded-[8px]
                border
                border-[#e4e9f1]
                bg-white
                px-4
                shadow-[0_2px_10px_rgba(15,23,42,0.03)]
            "
        >
            <div>
                <h2 className="text-[14px] font-bold text-[#102143]">
                    Visa Services
                </h2>

                <p className="mt-0.5 text-[11px] font-medium text-[#8994a7]">
                    {resultCount} visa services found
                </p>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal
                        size={14}
                        className="text-[#778398]"
                    />

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            onSortChange(e.target.value)
                        }
                        className="
                            h-[34px]
                            rounded-[5px]
                            border
                            border-[#dfe5ed]
                            bg-white
                            px-3
                            text-[11px]
                            font-semibold
                            text-[#4b5870]
                            outline-none
                            focus:border-[#0866ff]
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

                        <option value="processing-fast">
                            Fastest Processing
                        </option>
                    </select>
                </div>

                <div
                    className="
                        flex
                        overflow-hidden
                        rounded-[5px]
                        border
                        border-[#dfe5ed]
                    "
                >
                    <button
                        type="button"
                        onClick={() =>
                            onViewModeChange("grid")
                        }
                        className={`
                            flex
                            h-[34px]
                            w-[34px]
                            items-center
                            justify-center
                            transition
                            ${
                                viewMode === "grid"
                                    ? "bg-[#0866ff] text-white"
                                    : "bg-white text-[#7d899d] hover:bg-[#f4f7fb]"
                            }
                        `}
                    >
                        <Grid2X2 size={15} />
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            onViewModeChange("list")
                        }
                        className={`
                            flex
                            h-[34px]
                            w-[34px]
                            items-center
                            justify-center
                            border-l
                            border-[#dfe5ed]
                            transition
                            ${
                                viewMode === "list"
                                    ? "bg-[#0866ff] text-white"
                                    : "bg-white text-[#7d899d] hover:bg-[#f4f7fb]"
                            }
                        `}
                    >
                        <List size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VisaToolbar;