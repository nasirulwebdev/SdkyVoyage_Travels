import {
    ArrowRight,
    BriefcaseBusiness,
    CalendarDays,
    Clock3,
} from "lucide-react";


const WorkVisaCard = ({ visa }) => {

    const handleApply = () => {
        const informationSection =
            document.getElementById("work-visa-information");

        informationSection?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


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
                hover:border-blue-200
                hover:shadow-xl
            "
        >
            {/* ========================= */}
            {/* COUNTRY IMAGE */}
            {/* ========================= */}
            <div className="relative h-[190px] overflow-hidden">
                <img
                    src={visa.countryImage}
                    alt={visa.country}
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
                        from-slate-950/55
                        via-transparent
                        to-transparent
                    "
                />


                {/* FLAG */}
                <div
                    className="
                        absolute
                        left-4
                        top-4
                        flex
                        h-11
                        w-16
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-lg
                        border-2
                        border-white
                        bg-white
                        shadow-lg
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


                {/* PASSPORT */}
                <div
                    className="
                        absolute
                        bottom-4
                        right-4
                        h-[92px]
                        w-[66px]
                        overflow-hidden
                        rounded-lg
                        border-2
                        border-white
                        bg-white
                        shadow-xl
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                    "
                >
                    <img
                        src={visa.passportImage}
                        alt={`${visa.country} passport`}
                        className="
                            h-full
                            w-full
                            object-cover
                        "
                    />
                </div>


                {/* COUNTRY NAME */}
                <div className="absolute bottom-4 left-4">
                    <p
                        className="
                            text-lg
                            font-extrabold
                            text-white
                            drop-shadow
                        "
                    >
                        {visa.country}
                    </p>
                </div>
            </div>


            {/* ========================= */}
            {/* CARD CONTENT */}
            {/* ========================= */}
            <div className="p-5">

                <h3
                    className="
                        text-lg
                        font-extrabold
                        text-slate-900
                    "
                >
                    {visa.title}
                </h3>


                {/* INFORMATION */}
                <div className="mt-4 space-y-3">

                    <div
                        className="
                            flex
                            items-start
                            gap-2.5
                            text-xs
                            text-slate-600
                        "
                    >
                        <CalendarDays
                            size={16}
                            className="
                                mt-0.5
                                shrink-0
                                text-blue-600
                            "
                        />

                        <span>
                            Validity: {visa.validity}
                        </span>
                    </div>


                    <div
                        className="
                            flex
                            items-start
                            gap-2.5
                            text-xs
                            text-slate-600
                        "
                    >
                        <Clock3
                            size={16}
                            className="
                                mt-0.5
                                shrink-0
                                text-blue-600
                            "
                        />

                        <span>
                            {visa.processingTime}
                        </span>
                    </div>


                    <div
                        className="
                            flex
                            items-start
                            gap-2.5
                            text-xs
                            text-slate-600
                        "
                    >
                        <BriefcaseBusiness
                            size={16}
                            className="
                                mt-0.5
                                shrink-0
                                text-blue-600
                            "
                        />

                        <span>
                            {visa.workPermission}
                        </span>
                    </div>
                </div>


                {/* PRICE + BUTTON */}
                <div
                    className="
                        mt-5
                        flex
                        items-end
                        justify-between
                        gap-3
                        border-t
                        border-slate-100
                        pt-4
                    "
                >
                    <div>
                        <p
                            className="
                                text-[11px]
                                font-medium
                                text-slate-400
                            "
                        >
                            Starting From
                        </p>

                        <p
                            className="
                                mt-0.5
                                text-xl
                                font-extrabold
                                text-blue-600
                            "
                        >
                            ${visa.price}
                        </p>
                    </div>


                    <button
                        type="button"
                        onClick={handleApply}
                        className="
                            group/button
                            flex
                            cursor-pointer
                            items-center
                            gap-2
                            rounded-lg
                            bg-blue-600
                            px-4
                            py-2.5
                            text-xs
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-blue-700
                        "
                    >
                        Apply Now

                        <ArrowRight
                            size={14}
                            className="
                                transition-transform
                                duration-300
                                group-hover/button:translate-x-1
                            "
                        />
                    </button>
                </div>
            </div>
        </article>
    );
};


export default WorkVisaCard;