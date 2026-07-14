import {
    ArrowRight,
    Clock3,
} from "lucide-react";


const TouristVisaCountryCard = ({
    visa,
}) => {
    return (
        <article
            className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-slate-200/70
            "
        >
            {/* Country Image */}
            <div
                className="
                    relative
                    h-[170px]
                    overflow-hidden
                "
            >
                <img
                    src={visa.image}
                    alt={visa.visaName}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950/50
                        via-transparent
                        to-transparent
                    "
                />

                {/* Flag */}
                <div
                    className="
                        absolute
                        bottom-3
                        left-3
                        flex
                        h-10
                        w-12
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-lg
                        border-2
                        border-white
                        bg-white
                        shadow-md
                    "
                >
                    <img
                        src={visa.flag}
                        alt={`${visa.country} flag`}
                        className="
                            h-full
                            w-full
                            object-cover
                        "
                    />
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3
                    className="
                        text-base
                        font-extrabold
                        text-slate-900
                    "
                >
                    {visa.visaName}
                </h3>

                <p
                    className="
                        mt-1
                        text-xs
                        font-medium
                        text-slate-500
                    "
                >
                    {visa.country}
                </p>

                <div
                    className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        gap-3
                        border-t
                        border-slate-100
                        pt-3
                    "
                >
                    <div>
                        <div
                            className="
                                flex
                                items-center
                                gap-1.5
                                text-[11px]
                                text-slate-500
                            "
                        >
                            <Clock3 size={13} />

                            {visa.processingTime}
                        </div>

                        <p
                            className="
                                mt-1
                                text-sm
                                font-extrabold
                                text-blue-600
                            "
                        >
                            From ${visa.price}
                        </p>
                    </div>

                    <button
                        type="button"
                        aria-label={`View ${visa.visaName}`}
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-50
                            text-blue-600
                            transition
                            group-hover:bg-blue-600
                            group-hover:text-white
                        "
                    >
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </article>
    );
};


export default TouristVisaCountryCard;