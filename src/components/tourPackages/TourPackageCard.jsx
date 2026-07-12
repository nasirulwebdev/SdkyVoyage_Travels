import {
    Clock3,
    Heart,
    MapPin,
    Star,
} from "lucide-react";

const TourPackageCard = ({
    tour,
    viewMode = "grid",
}) => {
    const isListView = viewMode === "list";

    return (
        <article
            className={`
                group
                overflow-hidden
                rounded-[10px]
                border
                border-[#e7ebf1]
                bg-white
                shadow-[0_4px_18px_rgba(15,23,42,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]

                ${
                    isListView
                        ? `
                            md:flex
                            md:min-h-[220px]
                        `
                        : ""
                }
            `}
        >
            {/* ==============================
                IMAGE SECTION
            ============================== */}
            <div
                className={`
                    relative
                    overflow-hidden

                    ${
                        isListView
                            ? `
                                h-[210px]
                                md:h-auto
                                md:w-[300px]
                                md:min-w-[300px]
                            `
                            : `
                                h-[180px]
                            `
                    }
                `}
            >
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                {/* Badge */}
                {tour.badge && (
                    <span
                        className="
                            absolute
                            left-3
                            top-5
                            rounded-[5px]
                            bg-[#c609ca]
                            px-[14px]
                            py-[6px]
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[0.05em]
                            text-white
                            shadow-sm
                        "
                    >
                        {tour.badge}
                    </span>
                )}

                {/* Wishlist */}
                <button
                    type="button"
                    aria-label={`Add ${tour.title} to wishlist`}
                    className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-[32px]
                        w-[32px]
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#172348]
                        shadow-md
                        transition
                        hover:text-red-500
                    "
                >
                    <Heart
                        size={16}
                        strokeWidth={2}
                    />
                </button>
            </div>

            {/* ==============================
                CARD CONTENT
            ============================== */}
            <div
                className={`
                    flex
                    flex-1
                    flex-col
                    p-[16px]

                    ${
                        isListView
                            ? `
                                md:p-5
                            `
                            : ""
                    }
                `}
            >
                {/* Location */}
                <div
                    className="
                        mb-2
                        flex
                        items-center
                        gap-[5px]
                        text-[10px]
                        font-medium
                        text-[#7b8494]
                    "
                >
                    <MapPin
                        size={12}
                        className="text-[#1769e0]"
                    />

                    <span>{tour.location}</span>
                </div>

                {/* Title */}
                <h3
                    className={`
                        font-bold
                        text-[#111c3f]
                        transition
                        group-hover:text-[#1769e0]

                        ${
                            isListView
                                ? `
                                    text-[18px]
                                    leading-[25px]
                                `
                                : `
                                    line-clamp-2
                                    min-h-[42px]
                                    text-[15px]
                                    leading-[21px]
                                `
                        }
                    `}
                >
                    {tour.title}
                </h3>

                {/* Duration */}
                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-[6px]
                        text-[11px]
                        font-medium
                        text-[#737d8d]
                    "
                >
                    <Clock3
                        size={14}
                        className="text-[#1769e0]"
                    />

                    <span>{tour.duration}</span>
                </div>

                {/* Divider */}
                <div className="my-3 h-px bg-[#edf0f4]" />

                {/* Rating */}
                <div className="flex items-center gap-[5px]">
                    <Star
                        size={14}
                        className="
                            fill-[#f5b301]
                            text-[#f5b301]
                        "
                    />

                    <span
                        className="
                            text-[11px]
                            font-bold
                            text-[#172348]
                        "
                    >
                        {tour.rating}
                    </span>

                    <span
                        className="
                            text-[10px]
                            text-[#8b94a3]
                        "
                    >
                        ({tour.reviews} Reviews)
                    </span>
                </div>

                {/* Price */}
                <div
                    className="
                        mt-auto
                        flex
                        items-end
                        justify-between
                        pt-4
                    "
                >
                    <div>
                        <p
                            className="
                                mb-[2px]
                                text-[9px]
                                font-medium
                                text-[#939cab]
                            "
                        >
                            Starting from
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                            <span
                                className="
                                    text-[18px]
                                    font-extrabold
                                    text-[#1769e0]
                                "
                            >
                                ৳{tour.price.toLocaleString()}
                            </span>

                            {tour.oldPrice && (
                                <span
                                    className="
                                        text-[10px]
                                        text-[#9ca4b1]
                                        line-through
                                    "
                                >
                                    ৳{tour.oldPrice.toLocaleString()}
                                </span>
                            )}
                        </div>
                    </div>

                    <span
                        className="
                            text-[9px]
                            font-medium
                            text-[#939cab]
                        "
                    >
                        / person
                    </span>
                </div>
            </div>
        </article>
    );
};

export default TourPackageCard;