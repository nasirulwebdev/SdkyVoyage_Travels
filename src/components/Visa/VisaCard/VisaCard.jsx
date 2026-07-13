import {
    ArrowRight,
    CalendarDays,
    Clock3,
    MapPin,
} from "lucide-react";

const VisaCard = ({
    visa,
    viewMode = "grid",
}) => {
    const {
        title,
        country,
        cityImage,
        countryFlag,
        applicantCountry,
        applicantCountryImage,
        visaType,
        validity,
        processingTime,
        price,
        badge,
    } = visa;

    if (viewMode === "list") {
        return (
            <article
                className="
                    group
                    flex
                    min-h-[205px]
                    overflow-hidden
                    rounded-[10px]
                    border
                    border-[#e2e7ef]
                    bg-white
                    shadow-[0_4px_16px_rgba(15,23,42,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_10px_28px_rgba(15,23,42,0.09)]
                "
            >
                <div className="relative w-[260px] shrink-0 overflow-hidden">
                    <img
                        src={cityImage}
                        alt={country}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                        "
                    />

                    {badge && (
                        <span
                            className="
                                absolute
                                left-3
                                top-3
                                rounded-[4px]
                                bg-[#0866ff]
                                px-2.5
                                py-1
                                text-[10px]
                                font-bold
                                text-white
                            "
                        >
                            {badge}
                        </span>
                    )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                        {/* VISA COUNTRY + FLAG */}
                        <div className="flex items-center gap-2">
                            <img
                                src={countryFlag}
                                alt={`${country} flag`}
                                className="
                                    h-[22px]
                                    w-[30px]
                                    rounded-[3px]
                                    border
                                    border-[#e1e5eb]
                                    object-cover
                                "
                            />

                            <span className="text-[11px] font-semibold text-[#69768b]">
                                {country}
                            </span>
                        </div>

                        <h3 className="mt-2 text-[18px] font-bold text-[#102143]">
                            {title}
                        </h3>

                        {/* APPLICANT COUNTRY */}
                        <div className="mt-3 flex items-center gap-2">
                            <div
                                className="
                                    h-[28px]
                                    w-[38px]
                                    overflow-hidden
                                    rounded-[4px]
                                    border
                                    border-[#dfe5ed]
                                    bg-[#f5f7fa]
                                "
                            >
                                <img
                                    src={applicantCountryImage}
                                    alt={applicantCountry}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <span className="text-[11px] font-medium text-[#6f7b8f]">
                                Applying from{" "}
                                <strong className="text-[#263653]">
                                    {applicantCountry}
                                </strong>
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                        <div className="flex gap-6">
                            <div>
                                <span className="text-[10px] text-[#929bad]">
                                    Visa Type
                                </span>

                                <p className="mt-1 text-[12px] font-bold text-[#263653]">
                                    {visaType}
                                </p>
                            </div>

                            <div>
                                <span className="text-[10px] text-[#929bad]">
                                    Validity
                                </span>

                                <p className="mt-1 text-[12px] font-bold text-[#263653]">
                                    {validity}
                                </p>
                            </div>

                            <div>
                                <span className="text-[10px] text-[#929bad]">
                                    Processing
                                </span>

                                <p className="mt-1 text-[12px] font-bold text-[#263653]">
                                    {processingTime}
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <span className="text-[10px] text-[#929bad]">
                                Starting from
                            </span>

                            <p className="text-[20px] font-extrabold text-[#0866ff]">
                                ${price}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article
            className="
                group
                overflow-hidden
                rounded-[10px]
                border
                border-[#e2e7ef]
                bg-white
                shadow-[0_4px_16px_rgba(15,23,42,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#cfdcf0]
                hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]
            "
        >
            {/* =========================
                COUNTRY / CITY IMAGE
            ========================== */}
            {/* এখানে overflow-hidden বাদ দিয়ে শুধু relative রাখা হয়েছে যেন ফ্ল্যাগ বাইরে বের হতে পারে */}
            <div className="relative h-[142px]">
                {/* মেইন সিটির ইমেজে আলাদা করে overflow-hidden ও rounded টপ দেওয়া হয়েছে */}
                <div className="w-full h-full overflow-hidden rounded-t-[9px]">
                    <img
                        src={cityImage}
                        alt={country}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                        "
                    />
                </div>

                <div
                    className="
                        absolute
                        inset-0
                        rounded-t-[9px]
                        bg-gradient-to-t
                        from-black/35
                        via-transparent
                        to-transparent
                        pointer-events-none
                    "
                />

                {badge && (
                    <span
                        className="
                            absolute
                            left-3
                            top-3
                            rounded-[4px]
                            bg-[#0866ff]
                            px-2.5
                            py-1
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.3px]
                            text-white
                            shadow-sm
                        "
                    >
                        {badge}
                    </span>
                )}

                {/* NATIONAL FLAG */}
                <div
                    className="
                        absolute
                        bottom-[-18px]
                        left-4
                        z-10
                        flex
                        h-[36px]
                        w-[48px]
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[5px]
                        border-[3px]
                        border-white
                        bg-white
                        shadow-[0_4px_12px_rgba(15,23,42,0.18)]
                    "
                >
                    <img
                        src={countryFlag}
                        alt={`${country} flag`}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            {/* =========================
                CARD CONTENT
            ========================== */}
            <div className="px-4 pb-4 pt-7">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="flex items-center gap-1.5">
                            <MapPin
                                size={11}
                                className="text-[#0866ff]"
                            />

                            <span
                                className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.35px]
                                    text-[#7d899c]
                                "
                            >
                                {country}
                            </span>
                        </div>

                        <h3
                            className="
                                mt-1.5
                                line-clamp-1
                                text-[14px]
                                font-extrabold
                                leading-[1.3]
                                text-[#102143]
                            "
                        >
                            {title}
                        </h3>
                    </div>
                </div>

                {/* =========================
                    APPLYING FROM
                ========================== */}
                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-2.5
                        rounded-[6px]
                        border
                        border-[#edf0f4]
                        bg-[#f8fafc]
                        px-2.5
                        py-2
                    "
                >
                    <div
                        className="
                            h-[30px]
                            w-[40px]
                            shrink-0
                            overflow-hidden
                            rounded-[4px]
                            border
                            border-[#dde3eb]
                            bg-white
                        "
                    >
                        <img
                            src={applicantCountryImage}
                            alt={`${applicantCountry} applicant`}
                            className="
                                h-full
                                w-full
                                object-cover
                            "
                        />
                    </div>

                    <div>
                        <p className="text-[9px] font-medium text-[#929bad]">
                            Applying from
                        </p>

                        <p className="mt-0.5 text-[11px] font-bold text-[#263653]">
                            {applicantCountry}
                        </p>
                    </div>
                </div>

                {/* DETAILS */}
                <div
                    className="
                        mt-3
                        grid
                        grid-cols-2
                        gap-x-3
                        gap-y-3
                    "
                >
                    <div className="flex items-start gap-2">
                        <CalendarDays
                            size={14}
                            className="mt-0.5 shrink-0 text-[#0866ff]"
                        />

                        <div>
                            <p className="text-[9px] font-medium text-[#929bad]">
                                Validity
                            </p>

                            <p className="mt-0.5 text-[11px] font-bold text-[#354158]">
                                {validity}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <Clock3
                            size={14}
                            className="mt-0.5 shrink-0 text-[#0866ff]"
                        />

                        <div>
                            <p className="text-[9px] font-medium text-[#929bad]">
                                Processing
                            </p>

                            <p className="mt-0.5 text-[11px] font-bold text-[#354158]">
                                {processingTime}
                            </p>
                        </div>
                    </div>
                </div>

                {/* VISA TYPE */}
                <div
                    className="
                        mt-3
                        border-t
                        border-[#edf0f4]
                        pt-3
                    "
                >
                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-[#edf5ff]
                            px-2.5
                            py-1
                            text-[9px]
                            font-bold
                            text-[#0866ff]
                        "
                    >
                        {visaType}
                    </span>
                </div>

                {/* PRICE + BUTTON */}
                <div
                    className="
                        mt-3
                        flex
                        items-end
                        justify-between
                        gap-3
                    "
                >
                    <div>
                        <p className="text-[9px] font-medium text-[#929bad]">
                            Starting from
                        </p>

                        <div className="mt-0.5 flex items-end gap-1">
                            <span
                                className="
                                    text-[20px]
                                    font-extrabold
                                    leading-none
                                    text-[#0866ff]
                                "
                            >
                                ${price}
                            </span>

                            <span className="text-[9px] font-medium text-[#929bad]">
                                / person
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="
                            group/button
                            flex
                            h-[34px]
                            items-center
                            justify-center
                            gap-1.5
                            rounded-[5px]
                            bg-[#0866ff]
                            px-3.5
                            text-[10px]
                            font-bold
                            text-white
                            transition
                            hover:bg-[#0057e7]
                        "
                    >
                        Apply Now

                        <ArrowRight
                            size={13}
                            className="
                                transition-transform
                                group-hover/button:translate-x-0.5
                            "
                        />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default VisaCard;