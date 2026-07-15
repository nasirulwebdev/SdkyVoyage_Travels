import { ArrowRight } from "lucide-react";

import { touristVisaData } from "../../../data/Visa/touristVisaData.js";


const PopularTouristDestinations = () => {
    const popularDestinations = touristVisaData
        .filter((visa) => visa.popular)
        .slice(0, 5);


    return (
        <div
            className="
                rounded-xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
            "
        >
            <h2
                className="
                    mb-4
                    text-base
                    font-bold
                    text-slate-900
                "
            >
                Popular Tourist Destinations
            </h2>

            <div className="space-y-1">
                {popularDestinations.map((visa) => (
                    <div
                        key={visa.id}
                        className="
                            group
                            flex
                            items-center
                            justify-between
                            gap-3
                            rounded-lg
                            px-2
                            py-2.5
                            transition
                            hover:bg-blue-50
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
                            <img
                                src={visa.flag}
                                alt={`${visa.country} flag`}
                                className="
                                    h-8
                                    w-10
                                    shrink-0
                                    rounded-md
                                    border
                                    border-slate-200
                                    object-cover
                                "
                            />

                            <div className="min-w-0">
                                <h3
                                    className="
                                        truncate
                                        text-sm
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    {visa.country}
                                </h3>

                                <p
                                    className="
                                        text-[11px]
                                        text-slate-400
                                    "
                                >
                                    From ${visa.price}
                                </p>
                            </div>
                        </div>

                        <span
                            className="
                                shrink-0
                                text-[11px]
                                font-semibold
                                text-slate-500
                            "
                        >
                            From ${visa.price}
                        </span>
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-blue-200
                    bg-blue-50
                    px-4
                    py-2.5
                    text-sm
                    font-bold
                    text-blue-600
                    transition
                    hover:border-blue-600
                    hover:bg-blue-600
                    hover:text-white
                "
            >
                View All Countries
                <ArrowRight size={15} />
            </button>
        </div>
    );
};


export default PopularTouristDestinations;