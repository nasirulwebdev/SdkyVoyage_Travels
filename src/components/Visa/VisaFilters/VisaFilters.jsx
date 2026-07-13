import {
    ChevronDown,
    RotateCcw,
    SlidersHorizontal,
} from "lucide-react";

import {
    visaTypes,
    processingTimes,
} from "../../../data/visa/visaData";

const VisaFilters = ({
    countries = [],
    filters,
    onFilterChange,
    onApplyFilters,
    onResetFilters,
}) => {
    // ==========================================
    // VISA TYPE CHECKBOX
    // ==========================================

    const handleVisaTypeChange = (value) => {
        const alreadySelected =
            filters.visaTypes.includes(value);

        const updatedVisaTypes = alreadySelected
            ? filters.visaTypes.filter(
                  (item) => item !== value
              )
            : [...filters.visaTypes, value];

        onFilterChange({
            ...filters,
            visaTypes: updatedVisaTypes,
        });
    };

    // ==========================================
    // PROCESSING TIME CHECKBOX
    // ==========================================

    const handleProcessingTimeChange = (value) => {
        const alreadySelected =
            filters.processingTimes.includes(value);

        const updatedProcessingTimes =
            alreadySelected
                ? filters.processingTimes.filter(
                      (item) => item !== value
                  )
                : [
                      ...filters.processingTimes,
                      value,
                  ];

        onFilterChange({
            ...filters,
            processingTimes:
                updatedProcessingTimes,
        });
    };

    return (
        <aside
              className="
                w-full
                min-h-[620px]
                overflow-hidden
                rounded-xl
                border border-[#e2e8f0]
                bg-white
                shadow-[0_4px_18px_rgba(15,23,42,0.05)]
            "
        >
            {/* =====================================
                HEADER
            ====================================== */}
            <div
                className="
                    border-b border-[#e8edf4]
                    px-5
                    py-5
                "
            >
                <div className="flex items-center gap-2">
                    <SlidersHorizontal
                        size={18}
                        className="text-[#0866ff]"
                    />

                    <h2
                        className="
                            text-[17px]
                            font-extrabold
                            text-[#0b1739]
                        "
                    >
                        Find Your Visa
                    </h2>
                </div>
            </div>

            <div className="px-5 py-5">

                {/* =====================================
                    DESTINATION
                ====================================== */}
                <div>
                    <label
                        htmlFor="visa-destination"
                        className="
                            mb-3
                            block
                            text-[13px]
                            font-bold
                            text-[#17213f]
                        "
                    >
                        Destination
                    </label>

                    <div className="relative">
                        <select
                            id="visa-destination"
                            value={filters.destination}
                            onChange={(event) =>
                                onFilterChange({
                                    ...filters,
                                    destination:
                                        event.target.value,
                                })
                            }
                            className="
                                h-[46px]
                                w-full
                                appearance-none
                                rounded-lg
                                border border-[#dce3ec]
                                bg-white
                                px-4
                                pr-10
                                text-[12px]
                                font-medium
                                text-[#647086]
                                outline-none
                                transition
                                focus:border-[#0866ff]
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        >
                            <option value="All Destinations">
                                Select Country
                            </option>

                            {countries.map((country) => (
                                <option
                                    key={country}
                                    value={country}
                                >
                                    {country}
                                </option>
                            ))}
                        </select>

                        <ChevronDown
                            size={16}
                            className="
                                pointer-events-none
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                text-[#71809a]
                            "
                        />
                    </div>
                </div>

                {/* =====================================
                    VISA TYPE
                ====================================== */}
                <div className="mt-8 border-t border-[#edf0f5] pt-7">
                    <h3
                        className="
                            mb-4
                            text-[13px]
                            font-bold
                            text-[#17213f]
                        "
                    >
                        Visa Type
                    </h3>

                    <div className="space-y-[13px]">
                        {visaTypes.map((type) => (
                            <label
                                key={type.value}
                                className="
                                    group
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
                                        gap-3
                                    "
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.visaTypes.includes(
                                            type.value
                                        )}
                                        onChange={() =>
                                            handleVisaTypeChange(
                                                type.value
                                            )
                                        }
                                        className="
                                            h-[17px]
                                            w-[17px]
                                            shrink-0
                                            cursor-pointer
                                            rounded
                                            border-[#cbd5e1]
                                            accent-[#0866ff]
                                        "
                                    />

                                    <span
                                        className="
                                            text-[12px]
                                            font-medium
                                            text-[#536078]
                                            transition
                                            group-hover:text-[#0866ff]
                                        "
                                    >
                                        {type.label}
                                    </span>
                                </div>

                                {type.count !== undefined && (
                                    <span
                                        className="
                                            shrink-0
                                            text-[11px]
                                            font-semibold
                                            text-[#77839a]
                                        "
                                    >
                                        {type.count}
                                    </span>
                                )}
                            </label>
                        ))}
                    </div>
                </div>

                {/* =====================================
                    PROCESSING TIME
                ====================================== */}
                <div className="mt-8 border-t border-[#edf0f5] pt-7">
                    <h3
                        className="
                            mb-4
                            text-[13px]
                            font-bold
                            text-[#17213f]
                        "
                    >
                        Processing Time
                    </h3>

                    <div className="space-y-[13px]">
                        {processingTimes.map((time) => (
                            <label
                                key={time.value}
                                className="
                                    group
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
                                        gap-3
                                    "
                                >
                                    <input
                                        type="checkbox"
                                        checked={filters.processingTimes.includes(
                                            time.value
                                        )}
                                        onChange={() =>
                                            handleProcessingTimeChange(
                                                time.value
                                            )
                                        }
                                        className="
                                            h-[17px]
                                            w-[17px]
                                            shrink-0
                                            cursor-pointer
                                            rounded
                                            border-[#cbd5e1]
                                            accent-[#0866ff]
                                        "
                                    />

                                    <span
                                        className="
                                            text-[12px]
                                            font-medium
                                            text-[#536078]
                                            transition
                                            group-hover:text-[#0866ff]
                                        "
                                    >
                                        {time.label}
                                    </span>
                                </div>

                                {time.count !== undefined && (
                                    <span
                                        className="
                                            shrink-0
                                            text-[11px]
                                            font-semibold
                                            text-[#77839a]
                                        "
                                    >
                                        {time.count}
                                    </span>
                                )}
                            </label>
                        ))}
                    </div>
                </div>

                {/* =====================================
                    ACTION BUTTONS
                ====================================== */}
                <div
                    className="
                        mt-7
                        border-t border-[#edf0f5]
                        pt-6
                    "
                >
                    <button
                        type="button"
                        onClick={onApplyFilters}
                        className="
                            flex
                            h-[46px]
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-[#0866ff]
                            px-4
                            text-[13px]
                            font-bold
                            text-white
                            shadow-[0_7px_18px_rgba(8,102,255,0.20)]
                            transition
                            hover:bg-[#0057e7]
                        "
                    >
                        Apply Filters

                        <SlidersHorizontal
                            size={16}
                            strokeWidth={2}
                        />
                    </button>

                    <button
                        type="button"
                        onClick={onResetFilters}
                        className="
                            mt-3
                            flex
                            h-[42px]
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            border border-[#dce3ec]
                            bg-white
                            text-[12px]
                            font-semibold
                            text-[#667085]
                            transition
                            hover:border-[#0866ff]
                            hover:bg-[#f5f9ff]
                            hover:text-[#0866ff]
                        "
                    >
                        <RotateCcw size={14} />
                        Reset Filters
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default VisaFilters;