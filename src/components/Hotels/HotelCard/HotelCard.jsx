import {
    Heart,
    MapPin,
    Wifi,
    Waves,
    Coffee,
    Car,
    Dumbbell,
    Utensils,
    ArrowRight,
} from "lucide-react";

const HotelCard = ({
    hotel,
    viewMode = "list",
}) => {
    const {
        name,
        location,
        image,
        stars = 0,
        rating = 0,
        ratingText = "Excellent",
        reviews = 0,
        pricePerNight = 0,
        totalPrice,
        nights = 7,
        badge,
        facilities = [],
    } = hotel;

    // ==========================================
    // FACILITY ICON
    // ==========================================

    const getFacilityIcon = (facility) => {
        const value = facility.toLowerCase();

        if (value.includes("wifi")) {
            return <Wifi size={13} />;
        }

        if (
            value.includes("pool") ||
            value.includes("swimming")
        ) {
            return <Waves size={13} />;
        }

        if (
            value.includes("breakfast") ||
            value.includes("coffee")
        ) {
            return <Coffee size={13} />;
        }

        if (
            value.includes("parking") ||
            value.includes("shuttle")
        ) {
            return <Car size={13} />;
        }

        if (
            value.includes("gym") ||
            value.includes("fitness")
        ) {
            return <Dumbbell size={13} />;
        }

        return <Utensils size={13} />;
    };

    // ==========================================
    // GRID VIEW
    // ==========================================

    if (viewMode === "grid") {
        return (
            <article
                className="
                    group
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                "
            >
                {/* IMAGE */}
                <div className="relative h-[210px] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition
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
                                rounded-full
                                bg-emerald-600
                                px-3
                                py-1
                                text-[9px]
                                font-bold
                                uppercase
                                text-white
                            "
                        >
                            {badge}
                        </span>
                    )}

                    <button
                        type="button"
                        className="
                            absolute
                            right-3
                            top-3
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-white/95
                            text-slate-500
                            shadow-sm
                            transition
                            hover:text-red-500
                        "
                    >
                        <Heart size={17} />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <div className="mb-1 flex text-[12px] text-amber-400">
                                {Array.from({
                                    length: Number(stars),
                                }).map((_, index) => (
                                    <span key={index}>★</span>
                                ))}
                            </div>

                            <h3 className="truncate text-[17px] font-bold text-slate-900">
                                {name}
                            </h3>

                            <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-500">
                                <MapPin
                                    size={12}
                                    className="text-emerald-600"
                                />
                                {location}
                            </div>
                        </div>

                        <div
                            className="
                                rounded-md
                                bg-emerald-600
                                px-2
                                py-1.5
                                text-[12px]
                                font-bold
                                text-white
                            "
                        >
                            {rating}
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                        {facilities.slice(0, 4).map((facility) => (
                            <span
                                key={facility}
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    text-[10px]
                                    text-slate-500
                                "
                            >
                                <span className="text-emerald-600">
                                    {getFacilityIcon(facility)}
                                </span>

                                {facility}
                            </span>
                        ))}
                    </div>

                    <div
                        className="
                            mt-4
                            flex
                            items-end
                            justify-between
                            border-t
                            border-slate-100
                            pt-4
                        "
                    >
                        <div>
                            <p className="text-[9px] text-slate-400">
                                Price per night
                            </p>

                            <p className="text-[22px] font-extrabold text-slate-900">
                                ${pricePerNight}
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                                flex
                                h-10
                                items-center
                                gap-2
                                rounded-md
                                bg-emerald-600
                                px-4
                                text-[10px]
                                font-bold
                                text-white
                                transition
                                hover:bg-emerald-700
                            "
                        >
                            View Rooms
                            <ArrowRight size={13} />
                        </button>
                    </div>
                </div>
            </article>
        );
    }

    // ==========================================
    // LIST VIEW
    // ==========================================

    return (
        <article
            className="
                group
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:border-emerald-200
                hover:shadow-md
            "
        >
            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-[220px_minmax(0,1fr)]
                    xl:grid-cols-[210px_minmax(0,1fr)_165px]
                "
            >
                {/* =================================
                    HOTEL IMAGE
                ================================== */}
                <div
                    className="
                        relative
                        h-[210px]
                        overflow-hidden
                        md:h-full
                        md:min-h-[190px]
                        xl:min-h-[185px]
                    "
                >
                    <img
                        src={image}
                        alt={name}
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition
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
                                rounded-full
                                bg-emerald-600
                                px-2.5
                                py-1
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-wide
                                text-white
                            "
                        >
                            {badge}
                        </span>
                    )}

                    <button
                        type="button"
                        aria-label="Add hotel to wishlist"
                        className="
                            absolute
                            right-3
                            top-3
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-white/95
                            text-slate-500
                            shadow-sm
                            transition
                            hover:text-red-500
                        "
                    >
                        <Heart size={17} />
                    </button>
                </div>

                {/* =================================
                    HOTEL DETAILS
                ================================== */}
                <div
                    className="
                        min-w-0
                        p-4
                        xl:py-3.5
                    "
                >
                    {/* STARS */}
                    <div
                        className="
                            flex
                            items-center
                            text-[13px]
                            leading-none
                            text-amber-400
                        "
                    >
                        {Array.from({
                            length: Number(stars),
                        }).map((_, index) => (
                            <span key={index}>★</span>
                        ))}
                    </div>

                    {/* NAME */}
                    <h3
                        className="
                            mt-1
                            text-[18px]
                            font-bold
                            leading-tight
                            text-slate-900
                        "
                    >
                        {name}
                    </h3>

                    {/* LOCATION */}
                    <div
                        className="
                            mt-1.5
                            flex
                            items-center
                            gap-1.5
                            text-[10px]
                            text-slate-500
                        "
                    >
                        <MapPin
                            size={13}
                            className="shrink-0 text-emerald-600"
                        />

                        <span>{location}</span>
                    </div>

                    {/* FACILITIES */}
                    <div
                        className="
                            mt-3
                            flex
                            flex-wrap
                            gap-x-4
                            gap-y-2
                        "
                    >
                        {facilities
                            .slice(0, 4)
                            .map((facility) => (
                                <span
                                    key={facility}
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                        text-[10px]
                                        text-slate-500
                                    "
                                >
                                    <span className="text-emerald-600">
                                        {getFacilityIcon(
                                            facility
                                        )}
                                    </span>

                                    {facility}
                                </span>
                            ))}
                    </div>

                    {/* CANCELLATION */}
                    <p
                        className="
                            mt-3
                            line-clamp-2
                            text-[10px]
                            leading-4
                            text-slate-400
                        "
                    >
                        Free cancellation available on selected
                        rooms. Reserve now and pay later.
                    </p>
                </div>

                {/* =================================
                    PRICE + RATING
                ================================== */}
                <div
                    className="
                        flex
                        flex-row
                        items-end
                        justify-between
                        gap-4
                        border-t
                        border-slate-100
                        p-4
                        md:col-span-2
                        xl:col-span-1
                        xl:flex-col
                        xl:items-stretch
                        xl:border-l
                        xl:border-t-0
                        xl:p-3.5
                    "
                >
                    {/* RATING */}
                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            xl:justify-end
                        "
                    >
                        <div className="text-right">
                            <p className="text-[11px] font-bold text-slate-800">
                                {ratingText}
                            </p>

                            <p className="mt-0.5 text-[9px] text-slate-400">
                                {reviews} reviews
                            </p>
                        </div>

                        <div
                            className="
                                flex
                                h-10
                                min-w-10
                                items-center
                                justify-center
                                rounded-md
                                bg-emerald-600
                                px-2
                                text-[12px]
                                font-bold
                                text-white
                            "
                        >
                            {rating}
                        </div>
                    </div>

                    {/* PRICE */}
                    <div className="text-right">
                        <p className="text-[9px] text-slate-400">
                            Price per night
                        </p>

                        <p
                            className="
                                mt-0.5
                                text-[25px]
                                font-extrabold
                                leading-none
                                text-slate-900
                            "
                        >
                            ${pricePerNight}
                        </p>

                        <p className="mt-2 text-[9px] text-slate-400">
                            $
                            {totalPrice ||
                                Number(pricePerNight) *
                                    Number(nights)}{" "}
                            total · {nights} nights
                        </p>

                        <p className="mt-1 text-[9px] font-medium text-emerald-600">
                            Includes taxes & fees
                        </p>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="button"
                        className="
                            flex
                            h-10
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            bg-emerald-600
                            px-4
                            text-[10px]
                            font-bold
                            text-white
                            transition
                            hover:bg-emerald-700
                        "
                    >
                        View Rooms
                        <ArrowRight size={13} />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default HotelCard;