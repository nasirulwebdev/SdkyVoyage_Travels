import {
    MapPin,
    Star,
    BedDouble,
    Bath,
    CookingPot,
    ArrowRight,
} from "lucide-react";

const ApartmentCard = ({ apartment }) => {
    const {
        name,
        location,
        image,
        badge,
        badgeColor,
        rating,
        score,
        reviewText,
        reviews,
        propertyType,
        beds,
        baths,
        kitchen,
        pricePerNight,
        nights,
        totalPrice,
    } = apartment;

    const badgeStyles = {
        blue: "bg-blue-600 text-white",
        green: "bg-emerald-600 text-white",
        purple: "bg-violet-600 text-white",
        orange: "bg-orange-500 text-white",
    };

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
                hover:-translate-y-0.5
                hover:shadow-lg
            "
        >
            <div className="flex flex-col md:flex-row">

                {/* Apartment Image */}
                <div
                    className="
                        relative
                        h-[220px]
                        shrink-0
                        overflow-hidden
                        md:h-auto
                        md:w-[220px]
                    "
                >
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

                    {/* Badge */}
                    <span
                        className={`
                            absolute
                            left-3
                            top-3
                            rounded-md
                            px-2.5
                            py-1
                            text-[11px]
                            font-semibold
                            shadow-sm
                            ${badgeStyles[badgeColor] || badgeStyles.blue}
                        `}
                    >
                        {badge}
                    </span>
                </div>

                {/* Card Content */}
                <div className="flex min-w-0 flex-1 flex-col p-5">

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">

                        {/* Left Information */}
                        <div className="min-w-0 flex-1">
                            <p
                                className="
                                    mb-1.5
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-blue-600
                                "
                            >
                                {propertyType}
                            </p>

                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    leading-snug
                                    text-slate-900
                                    transition
                                    group-hover:text-blue-600
                                "
                            >
                                {name}
                            </h3>

                            {/* Location */}
                            <div className="mt-2 flex items-center gap-1.5">
                                <MapPin
                                    size={14}
                                    className="shrink-0 text-slate-400"
                                />

                                <span className="text-xs text-slate-500">
                                    {location}
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="mt-3 flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={14}
                                        className={
                                            index < Math.round(rating)
                                                ? "fill-amber-400 text-amber-400"
                                                : "text-slate-300"
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Review Score */}
                        <div className="flex items-start gap-2 sm:text-right">
                            <div>
                                <p className="text-xs font-bold text-slate-800">
                                    {reviewText}
                                </p>

                                <p className="mt-0.5 text-[11px] text-slate-400">
                                    {reviews} reviews
                                </p>
                            </div>

                            <div
                                className="
                                    flex
                                    h-9
                                    min-w-9
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-blue-600
                                    px-2
                                    text-xs
                                    font-bold
                                    text-white
                                "
                            >
                                {score}
                            </div>
                        </div>
                    </div>

                    {/* Apartment Facilities */}
                    <div
                        className="
                            mt-4
                            flex
                            flex-wrap
                            items-center
                            gap-x-4
                            gap-y-2
                            border-y
                            border-slate-100
                            py-3
                        "
                    >
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <BedDouble
                                size={15}
                                className="text-blue-600"
                            />
                            <span>
                                {beds} {beds === 1 ? "Bed" : "Beds"}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <Bath
                                size={15}
                                className="text-blue-600"
                            />
                            <span>
                                {baths} {baths === 1 ? "Bath" : "Baths"}
                            </span>
                        </div>

                        {kitchen && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                <CookingPot
                                    size={15}
                                    className="text-blue-600"
                                />
                                <span>Kitchen</span>
                            </div>
                        )}
                    </div>

                    {/* Price & Button */}
                    <div
                        className="
                            mt-auto
                            flex
                            flex-col
                            gap-4
                            pt-4
                            sm:flex-row
                            sm:items-end
                            sm:justify-between
                        "
                    >
                        <div>
                            <div className="flex items-end gap-1">
                                <span className="text-2xl font-bold text-slate-900">
                                    ${pricePerNight}
                                </span>

                                <span className="pb-1 text-xs text-slate-500">
                                    / night
                                </span>
                            </div>

                            <p className="mt-1 text-[11px] text-slate-400">
                                ${totalPrice} total for {nights} nights
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-blue-600
                                px-4
                                py-2.5
                                text-xs
                                font-semibold
                                text-white
                                transition
                                hover:bg-blue-700
                            "
                        >
                            View Details
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ApartmentCard;