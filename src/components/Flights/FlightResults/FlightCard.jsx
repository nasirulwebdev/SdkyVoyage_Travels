import {
    ArrowRight,
    BriefcaseBusiness,
    CheckCircle2,
} from "lucide-react";

const FlightCard = ({ flight }) => {
    return (
        <article
            className="
                relative
                overflow-hidden
                rounded-[10px]
                border
                border-[#e4eaf2]
                bg-white
                shadow-[0_5px_20px_rgba(15,35,70,0.05)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:shadow-[0_12px_35px_rgba(15,35,70,0.10)]
            "
        >
            {/* RECOMMENDED BADGE */}
            {flight.featured && (
                <div
                    className="
                        absolute
                        left-0
                        top-0
                        z-6
                        rounded-br-[5px]
                        bg-[#0866f5]
                        px-6
                        py-[7px]
                        text-[14px]
                        font-bold
                        text-white
                    "
                >
                    Recommended
                </div>
            )}

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-[minmax(0,1fr)_190px]
                "
            >
                {/* =========================
                    LEFT FLIGHT INFORMATION
                ========================== */}
                <div className="min-w-0 p-5 sm:p-6">

                    {/* AIRLINE */}
                    <div
                        className={`
                            mb-6
                            flex
                            items-center
                            gap-3

                            ${
                                flight.featured
                                    ? "pt-3"
                                    : ""
                            }
                        `}
                    >
                        {/* AIRLINE LOGO */}
                        <div
                            className="
                                flex
                                h-[48px]
                                w-[48px]
                                shrink-0
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-full
                                border
                                border-[#edf1f6]
                                bg-white
                                p-[6px]
                                shadow-sm
                            "
                        >
                            {flight.image ? (
                                <img
                                    src={flight.image}
                                    alt={`${flight.airline} logo`}
                                    className="
                                        h-full
                                        w-full
                                        object-contain
                                    "
                                />
                            ) : (
                                <span
                                    className="
                                        text-[14px]
                                        font-bold
                                        text-[#0866f5]
                                    "
                                >
                                    {flight.airlineCode ||
                                        flight.airline?.slice(
                                            0,
                                            2
                                        )}
                                </span>
                            )}
                        </div>

                        {/* AIRLINE NAME */}
                        <div className="min-w-0">
                            <h3
                                className="
                                    truncate
                                    text-[18px]
                                    font-bold
                                    text-[#10264a]
                                "
                            >
                                {flight.airline}
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-[16px]
                                    font-medium
                                    text-[#7b8ba3]
                                "
                            >
                                {flight.flightNumber}
                            </p>
                        </div>
                    </div>

                    {/* =========================
                        FLIGHT ROUTE
                    ========================== */}
                    <div
                        className="
                            grid
                            grid-cols-[minmax(80px,1fr)_minmax(140px,1.6fr)_minmax(80px,1fr)]
                            items-center
                            gap-3
                        "
                    >
                        {/* FROM */}
                        <div>
                            <p
                                className="
                                    text-[24px]
                                    font-bold
                                    leading-none
                                    text-[#10264a]
                                "
                            >
                                {flight.from.time}
                            </p>

                            <p
                                className="
                                    mt-4
                                    text-[18px]
                                    font-bold
                                    text-[#52627a]
                                "
                            >
                                {flight.from.code}
                            </p>

                            <p
                                className="
                                    mt-2
                                    text-[16px]
                                    text-[#8a98ac]
                                "
                            >
                                {flight.from.city}
                            </p>
                        </div>

                        {/* DURATION + ROUTE LINE */}
                        <div className="min-w-0 text-center">
                            <p
                                className="
                                    mb-6
                                    text-[16px]
                                    font-medium
                                    text-[#7b8ba3]
                                "
                            >
                                {flight.duration}
                            </p>

                            <div
                                className="
                                    flex
                                    w-full
                                    items-center
                                "
                            >
                                {/* START DOT */}
                                <span
                                    className="
                                        h-[10px]
                                        w-[10px]
                                        shrink-0
                                        rounded-full
                                        border-2
                                        border-[#0866f5]
                                        bg-white
                                    "
                                />

                                {/* ROUTE LINE */}
                                <span
                                    className="
                                        h-px
                                        flex-2
                                        bg-[#d8e2ef]
                                    "
                                />

                                {/* ARROW */}
                                <ArrowRight
                                    size={16}
                                    strokeWidth={2}
                                    className="
                                        -ml-[2px]
                                        shrink-0
                                        text-[#0866f5]
                                    "
                                />
                            </div>

                            {/* STOP LABEL */}
                            <p
                                className={`
                                    mt-4
                                    text-[15px]
                                    font-semibold

                                    ${
                                        flight.stops === 0
                                            ? "text-[#16a36a]"
                                            : "text-[#52627a]"
                                    }
                                `}
                            >
                                {flight.stopLabel}
                            </p>
                        </div>

                        {/* TO */}
                        <div className="text-right">
                            <p
                                className="
                                    text-[24px]
                                    font-bold
                                    leading-none
                                    text-[#10264a]
                                "
                            >
                                {flight.to.time}
                            </p>

                            <p
                                className="
                                    mt-4
                                    text-[16px]
                                    font-bold
                                    text-[#52627a]
                                "
                            >
                                {flight.to.code}
                            </p>

                            <p
                                className="
                                    mt-2
                                    text-[15px]
                                    text-[#8a98ac]
                                "
                            >
                                {flight.to.city}
                            </p>
                        </div>
                    </div>

                    {/* =========================
                        BOTTOM INFORMATION
                    ========================== */}
                    <div
                        className="
                            mt-8
                            flex
                            flex-wrap
                            items-center
                            gap-x-8
                            gap-y-6
                            border-t
                            border-[#edf1f6]
                            pt-7
                        "
                    >
                        {/* BAGGAGE */}
                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                text-[14px]
                                font-medium
                                text-[#52627a]
                            "
                        >
                            <BriefcaseBusiness
                                size={16}
                                className="text-[#0866f5]"
                            />

                            <span>
                                {flight.baggage} Baggage
                            </span>
                        </div>

                        {/* CABIN CLASS */}
                        <div
                            className="
                                text-[15px]
                                font-medium
                                text-[#52627a]
                            "
                        >
                            {flight.cabinClass}
                        </div>

                        {/* REFUNDABLE */}
                        {flight.refundable && (
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-[15px]
                                    font-medium
                                    text-[#16a36a]
                                "
                            >
                                <CheckCircle2 size={16} />

                                <span>Refundable</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* =========================
                    RIGHT PRICE SECTION
                ========================== */}
                <div
                    className="
                        flex
                        flex-col
                        justify-center
                        border-t
                        border-[#edf1f6]
                        bg-[#fbfcfe]
                        p-7
                        lg:border-l
                        lg:border-t-0
                    "
                >
                    <p
                        className="
                            text-[16px]
                            font-medium
                            text-[#7b8ba3]
                        "
                    >
                        Starting from
                    </p>

                    {/* PRICE */}
                    <div
                        className="
                            mt-2
                            flex
                            flex-wrap
                            items-end
                            gap-2
                        "
                    >
                        <span
                            className="
                                text-[28px]
                                font-bold
                                leading-none
                                text-[#0866f5]
                            "
                        >
                            {flight.currency}
                            {flight.price}
                        </span>

                        <span
                            className="
                                mb-[4px]
                                text-[16px]
                                text-[#7b8ba3]
                            "
                        >
                            / person
                        </span>
                    </div>

                    {/* SELECT FLIGHT */}
                    <button
                        type="button"
                        className="
                            mt-7
                            flex
                            h-[46px]
                            w-full
                            items-center
                            justify-center
                            rounded-[7px]
                            bg-[#0866f5]
                            px-4
                            text-[18px]
                            font-semibold
                            text-white
                            shadow-[0_7px_18px_rgba(8,102,245,0.18)]
                            transition
                            duration-200
                            hover:bg-[#0059e8]
                            active:scale-[0.98]
                        "
                    >
                        Select Flight
                    </button>

                    {/* VIEW DETAILS */}
                    <button
                        type="button"
                        className="
                            mt-6
                            text-center
                            text-[16px]
                            font-semibold
                            text-[#0866f5]
                            transition
                            hover:text-[#0059e8]
                        "
                    >
                        View Details
                    </button>
                </div>
            </div>
        </article>
    );
};

export default FlightCard;