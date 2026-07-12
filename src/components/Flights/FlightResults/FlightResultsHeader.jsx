import { ChevronDown } from "lucide-react";

const FlightResultsHeader = ({
    resultCount,
    sortBy,
    onSortChange,
}) => {
    return (
        <div
            className="
                mb-7
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
        >
            {/* RESULT COUNT */}
            <div>
                <h2 className="text-[26px] font-bold text-[#10264a]">
                    Available Flights
                </h2>

                <p className="mt-2 text-[16px] text-[#0f1113]">
                    {resultCount}{" "}
                    {resultCount === 1
                        ? "flight"
                        : "flights"}{" "}
                    found
                </p>
            </div>

            {/* SORT BY */}
            <div className="flex items-center gap-3">
                <span className="text-[16px] font-medium text-[#0b0b0c]">
                    Sort by :
                </span>

                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(event) =>
                            onSortChange(
                                event.target.value
                            )
                        }
                        className="
                            h-[46px]
                            min-w-[170px]
                            cursor-pointer
                            appearance-none
                            rounded-[7px]
                            border
                            border-[#e1e7ef]
                            bg-white
                            pl-6
                            pr-15
                            text-[16px]
                            font-semibold
                            text-[#10264a]
                            outline-none
                            transition
                            focus:border-[#0866f5]
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

                        <option value="duration">
                            Shortest Duration
                        </option>
                    </select>

                    <ChevronDown
                        size={16}
                        className="
                            pointer-events-none
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            text-[#52627a]
                        "
                    />
                </div>
            </div>
        </div>
    );
};

export default FlightResultsHeader;