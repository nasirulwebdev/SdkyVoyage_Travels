import {
    BriefcaseBusiness,
    ChevronDown,
    CircleCheck,
    Clock3,
    Luggage,
    Plane,
    Star,
    Utensils,
} from "lucide-react";

const DomesticFlightCard = ({
    flight,
    onSelect,
}) => {
    const formatPrice = (price) =>
        new Intl.NumberFormat("en-BD").format(price);

    return (
        <article
            className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_8px_30px_rgba(15,23,42,0.055)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#16b364]/30
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]
            "
        >
            {/* Main */}
            <div className="p-5 lg:p-6">
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        xl:grid-cols-[180px_minmax(320px,1fr)_145px]
                        xl:items-center
                    "
                >
                    {/* Airline */}
                    <div className="flex items-center gap-3">
                        <div
                            className="
                                flex
                                h-14
                                w-14
                                shrink-0
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-xl
                                border
                                border-slate-100
                                bg-white
                                p-2
                                shadow-sm
                            "
                        >
                            <img
                                src={flight.airlineLogo}
                                alt={`${flight.airline} logo`}
                                className="
                                    h-full
                                    w-full
                                    object-contain
                                "
                            />
                        </div>

                        <div className="min-w-0">
                            <h3
                                className="
                                    line-clamp-2
                                    text-sm
                                    font-bold
                                    leading-5
                                    text-[#0b214a]
                                "
                            >
                                {flight.airline}
                            </h3>

                            <p className="mt-1 text-xs text-slate-500">
                                {flight.flightNo}
                            </p>

                            <div
                                className="
                                    mt-1.5
                                    flex
                                    items-center
                                    gap-1
                                "
                            >
                                <Star
                                    size={12}
                                    fill="currentColor"
                                    className="text-amber-400"
                                />

                                <span className="text-xs font-semibold text-slate-600">
                                    {flight.rating}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Route */}
                    <div
                        className="
                            grid
                            grid-cols-[1fr_minmax(120px,1.4fr)_1fr]
                            items-center
                            gap-3
                        "
                    >
                        {/* Departure */}
                        <div>
                            <p
                                className="
                                    text-xl
                                    font-extrabold
                                    tracking-tight
                                    text-[#0b214a]
                                    sm:text-2xl
                                "
                            >
                                {flight.departure}
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-700">
                                {flight.fromCode}
                            </p>

                            <p className="mt-0.5 text-xs text-slate-400">
                                {flight.from}
                            </p>
                        </div>

                        {/* Flight Line */}
                        <div className="text-center">
                            <div
                                className="
                                    mb-2
                                    flex
                                    items-center
                                    justify-center
                                    gap-1.5
                                    text-[11px]
                                    text-slate-500
                                "
                            >
                                <Clock3 size={12} />
                                {flight.duration}
                            </div>

                            <div className="flex items-center">
                                <span
                                    className="
                                        h-2
                                        w-2
                                        shrink-0
                                        rounded-full
                                        border-2
                                        border-[#16b364]
                                        bg-white
                                    "
                                />

                                <span className="h-px flex-1 bg-slate-300" />

                                <div
                                    className="
                                        flex
                                        h-7
                                        w-7
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#effaf4]
                                    "
                                >
                                    <Plane
                                        size={14}
                                        className="
                                            rotate-90
                                            text-[#16b364]
                                        "
                                    />
                                </div>

                                <span className="h-px flex-1 bg-slate-300" />

                                <span
                                    className="
                                        h-2
                                        w-2
                                        shrink-0
                                        rounded-full
                                        bg-[#16b364]
                                    "
                                />
                            </div>

                            <p
                                className="
                                    mt-2
                                    text-[11px]
                                    font-semibold
                                    text-[#16b364]
                                "
                            >
                                {flight.stop}
                            </p>
                        </div>

                        {/* Arrival */}
                        <div className="text-right">
                            <p
                                className="
                                    text-xl
                                    font-extrabold
                                    tracking-tight
                                    text-[#0b214a]
                                    sm:text-2xl
                                "
                            >
                                {flight.arrival}
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-700">
                                {flight.toCode}
                            </p>

                            <p className="mt-0.5 text-xs text-slate-400">
                                {flight.to}
                            </p>
                        </div>
                    </div>

                    {/* Price */}
                    <div
                        className="
                            border-t
                            border-slate-100
                            pt-5
                            xl:border-l
                            xl:border-t-0
                            xl:pl-5
                            xl:pt-0
                            xl:text-right
                        "
                    >
                        <p className="text-[11px] text-slate-400">
                            Starting from
                        </p>

                        {flight.oldPrice && (
                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-slate-400
                                    line-through
                                "
                            >
                                ৳{formatPrice(flight.oldPrice)}
                            </p>
                        )}

                        <p
                            className="
                                mt-0.5
                                text-2xl
                                font-extrabold
                                text-[#0b214a]
                            "
                        >
                            ৳{formatPrice(flight.price)}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400">
                            Per adult
                        </p>

                        <button
                            type="button"
                            onClick={() => onSelect?.(flight)}
                            className="
                                mt-3
                                w-full
                                rounded-lg
                                bg-[#16b364]
                                px-5
                                py-2.5
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_7px_18px_rgba(22,179,100,0.20)]
                                transition
                                hover:bg-[#119653]
                            "
                        >
                            Select Flight
                        </button>

                        {flight.seatsLeft <= 5 && (
                            <p
                                className="
                                    mt-2
                                    text-[10px]
                                    font-semibold
                                    text-orange-500
                                "
                            >
                                Only {flight.seatsLeft} seats left
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Facilities */}
            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-slate-100
                    bg-[#fbfcfd]
                    px-5
                    py-3.5
                    lg:px-6
                "
            >
                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-x-5
                        gap-y-2
                    "
                >
                    <Feature
                        icon={Luggage}
                        text={`${flight.baggage} Checked`}
                    />

                    <Feature
                        icon={BriefcaseBusiness}
                        text={`${flight.cabinBaggage} Cabin`}
                    />

                    {flight.refundable && (
                        <Feature
                            icon={CircleCheck}
                            text="Refundable"
                        />
                    )}

                    {flight.mealIncluded && (
                        <Feature
                            icon={Utensils}
                            text="Meal Included"
                        />
                    )}
                </div>

                <button
                    type="button"
                    className="
                        flex
                        items-center
                        gap-1
                        text-xs
                        font-bold
                        text-[#16b364]
                        transition
                        hover:text-[#119653]
                    "
                >
                    Flight Details
                    <ChevronDown size={14} />
                </button>
            </div>
        </article>
    );
};

const Feature = ({
    icon: Icon,
    text,
}) => (
    <div
        className="
            flex
            items-center
            gap-1.5
            text-[11px]
            font-medium
            text-slate-500
        "
    >
        <Icon
            size={14}
            className="text-[#16b364]"
        />
        {text}
    </div>
);

export default DomesticFlightCard;