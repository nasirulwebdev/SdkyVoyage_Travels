import { ArrowRight } from "lucide-react";

import { studentVisaData } from "../../../data/Visa/StudentVisaData.js";

const PopularStudyDestinations = ({
    selectedCountry,
    onSelectCountry,
}) => {
    const popularCountries = studentVisaData
        .filter((visa) => visa.popular)
        .slice(0, 5);

    return (
        <div
            className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >
            {/* Header */}
            <div className="border-b border-slate-200 px-5 py-5">
                <h3 className="text-lg font-bold text-slate-900">
                    Popular Study Destinations
                </h3>
            </div>

            {/* Countries */}
            <div className="divide-y divide-slate-100">
                {popularCountries.map((visa) => {
                    const isActive =
                        selectedCountry?.id === visa.id;

                    return (
                        <button
                            key={visa.id}
                            type="button"
                            onClick={() => onSelectCountry(visa)}
                            className={`
                                group
                                flex
                                w-full
                                items-center
                                gap-3
                                px-5
                                py-4
                                text-left
                                transition-all
                                duration-300
                                ${
                                    isActive
                                        ? "bg-blue-50"
                                        : "hover:bg-slate-50"
                                }
                            `}
                        >
                            {/* Flag */}
                            <div
                                className="
                                    h-10
                                    w-10
                                    shrink-0
                                    overflow-hidden
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-white
                                "
                            >
                                <img
                                    src={visa.flagImage}
                                    alt={`${visa.country} flag`}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />
                            </div>

                            {/* Country */}
                            <div className="min-w-0 flex-1">
                                <h4
                                    className={`
                                        text-sm
                                        font-bold
                                        transition-colors
                                        ${
                                            isActive
                                                ? "text-blue-600"
                                                : "text-slate-900 group-hover:text-blue-600"
                                        }
                                    `}
                                >
                                    {visa.country}
                                </h4>

                                <p className="mt-0.5 text-xs text-slate-500">
                                    From ${visa.fee}
                                </p>
                            </div>

                            {/* Arrow */}
                            <ArrowRight
                                size={18}
                                className={`
                                    transition-all
                                    duration-300
                                    ${
                                        isActive
                                            ? "translate-x-1 text-blue-600"
                                            : "text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600"
                                    }
                                `}
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularStudyDestinations;