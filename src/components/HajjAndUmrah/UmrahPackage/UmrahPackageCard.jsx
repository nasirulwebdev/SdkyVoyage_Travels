import {
    BedDouble,
    Check,
    Clock3,
    Heart,
    MapPin,
    Star,
    Users,
} from "lucide-react";

import {
    useState,
} from "react";

import {
    Link,
} from "react-router-dom";


const UmrahPackageCard = ({
    packageData,
    viewMode = "grid",
}) => {

    const [isFavorite, setIsFavorite] = useState(false);


    if (!packageData) {
        return null;
    }


    const {
        id,
        title,
        image,
        location,
        destination,
        duration,
        packageType,
        hotelRating,
        rating = 5,
        reviews = 0,
        price = 0,
        oldPrice,
        badge,
        services = [],
        features = [],
    } = packageData;


    const displayFeatures =
        features.length > 0
            ? features
            : services;


    const handleFavorite = (event) => {

        event.preventDefault();

        event.stopPropagation();

        setIsFavorite((previous) => !previous);

    };


    // =====================================
    // LIST VIEW
    // =====================================

    if (viewMode === "list") {

        return (

            <article
                className="
                    group
                    grid
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-200
                    hover:shadow-xl
                    md:grid-cols-[280px_minmax(0,1fr)]
                "
            >

                {/* IMAGE */}

                <div
                    className="
                        relative
                        min-h-[240px]
                        overflow-hidden
                    "
                >

                    <img
                        src={image}
                        alt={title}
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                        "
                    />


                    {badge && (

                        <span
                            className="
                                absolute
                                left-4
                                top-4
                                rounded-full
                                bg-emerald-700
                                px-3
                                py-1.5
                                text-xs
                                font-extrabold
                                text-white
                                shadow-md
                            "
                        >
                            {badge}
                        </span>

                    )}


                    <button
                        type="button"
                        onClick={handleFavorite}
                        aria-label="Add to wishlist"
                        className={`
                            absolute
                            right-4
                            top-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:scale-110

                            ${
                                isFavorite
                                    ? "bg-red-500 text-white"
                                    : "bg-white/90 text-slate-700 hover:text-red-500"
                            }
                        `}
                    >
                        <Heart
                            size={19}
                            fill={
                                isFavorite
                                    ? "currentColor"
                                    : "none"
                            }
                        />
                    </button>

                </div>


                {/* CONTENT */}

                <div
                    className="
                        flex
                        min-w-0
                        flex-col
                        p-5
                        lg:p-6
                    "
                >

                    <div
                        className="
                            flex
                            flex-wrap
                            items-start
                            justify-between
                            gap-4
                        "
                    >

                        <div className="min-w-0">

                            <span
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-emerald-700
                                "
                            >
                                {packageType}
                            </span>

                            <h3
                                className="
                                    mt-1
                                    text-xl
                                    font-extrabold
                                    text-slate-900
                                    transition-colors
                                    duration-300
                                    group-hover:text-emerald-700
                                "
                            >
                                {title}
                            </h3>

                        </div>


                        <div className="text-right">

                            <p
                                className="
                                    text-xs
                                    text-slate-400
                                "
                            >
                                Starting from
                            </p>

                            <p
                                className="
                                    text-2xl
                                    font-extrabold
                                    text-emerald-700
                                "
                            >
                                ৳{Number(price).toLocaleString()}
                            </p>

                            {oldPrice && (

                                <p
                                    className="
                                        text-xs
                                        text-slate-400
                                        line-through
                                    "
                                >
                                    ৳{Number(oldPrice).toLocaleString()}
                                </p>

                            )}

                        </div>

                    </div>


                    {/* META */}

                    <div
                        className="
                            mt-4
                            flex
                            flex-wrap
                            gap-x-5
                            gap-y-3
                            text-sm
                            font-medium
                            text-slate-500
                        "
                    >

                        <span className="flex items-center gap-2">
                            <MapPin
                                size={16}
                                className="text-emerald-700"
                            />

                            {location || destination}
                        </span>

                        <span className="flex items-center gap-2">
                            <Clock3
                                size={16}
                                className="text-emerald-700"
                            />

                            {duration}
                        </span>

                        <span className="flex items-center gap-2">
                            <BedDouble
                                size={16}
                                className="text-emerald-700"
                            />

                            {hotelRating || "5"} Star Hotel
                        </span>

                    </div>


                    {/* FEATURES */}

                    <div
                        className="
                            mt-5
                            grid
                            grid-cols-1
                            gap-2
                            sm:grid-cols-2
                        "
                    >

                        {displayFeatures
                            .slice(0, 4)
                            .map((item, index) => (

                                <div
                                    key={`${index}-${typeof item === "string" ? item : item.title}`}
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-slate-600
                                    "
                                >
                                    <Check
                                        size={16}
                                        className="
                                            shrink-0
                                            text-emerald-600
                                        "
                                    />

                                    <span>
                                        {typeof item === "string"
                                            ? item
                                            : item.title}
                                    </span>
                                </div>

                            ))}

                    </div>


                    {/* BOTTOM */}

                    <div
                        className="
                            mt-auto
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-4
                            border-t
                            border-slate-100
                            pt-5
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Star
                                size={17}
                                fill="currentColor"
                                className="text-amber-400"
                            />

                            <span
                                className="
                                    font-bold
                                    text-slate-800
                                "
                            >
                                {rating}
                            </span>

                            <span
                                className="
                                    text-sm
                                    text-slate-400
                                "
                            >
                                ({reviews} reviews)
                            </span>
                        </div>


                        <Link
                            to={`/hajj-umrah/umrah-package/${id}`}
                            className="
                                rounded-xl
                                bg-emerald-700
                                px-5
                                py-3
                                text-sm
                                font-extrabold
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-emerald-800
                                hover:shadow-lg
                            "
                        >
                            View Details
                        </Link>

                    </div>

                </div>

            </article>

        );

    }


    // =====================================
    // GRID VIEW
    // =====================================

    return (

        <article
            className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-emerald-200
                hover:shadow-xl
            "
        >

            {/* IMAGE */}

            <div
                className="
                    relative
                    h-[220px]
                    overflow-hidden
                "
            >

                <img
                    src={image}
                    alt={title}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                />


                {/* OVERLAY */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/35
                        via-transparent
                        to-transparent
                    "
                />


                {/* BADGE */}

                {badge && (

                    <span
                        className="
                            absolute
                            left-4
                            top-4
                            rounded-full
                            bg-emerald-700
                            px-3
                            py-1.5
                            text-xs
                            font-extrabold
                            text-white
                            shadow-md
                        "
                    >
                        {badge}
                    </span>

                )}


                {/* FAVORITE */}

                <button
                    type="button"
                    onClick={handleFavorite}
                    aria-label="Add to wishlist"
                    className={`
                        absolute
                        right-4
                        top-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:scale-110

                        ${
                            isFavorite
                                ? "bg-red-500 text-white"
                                : "bg-white/90 text-slate-700 hover:text-red-500"
                        }
                    `}
                >
                    <Heart
                        size={19}
                        fill={
                            isFavorite
                                ? "currentColor"
                                : "none"
                        }
                    />
                </button>

            </div>


            {/* CARD CONTENT */}

            <div
                className="
                    flex
                    flex-1
                    flex-col
                    p-5
                "
            >

                {/* PACKAGE TYPE */}

                <span
                    className="
                        text-xs
                        font-extrabold
                        uppercase
                        tracking-wider
                        text-emerald-700
                    "
                >
                    {packageType}
                </span>


                {/* TITLE */}

                <h3
                    className="
                        mt-2
                        line-clamp-2
                        text-xl
                        font-extrabold
                        leading-7
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-emerald-700
                    "
                >
                    {title}
                </h3>


                {/* LOCATION */}

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-500
                    "
                >
                    <MapPin
                        size={16}
                        className="text-emerald-700"
                    />

                    <span>
                        {location || destination}
                    </span>
                </div>


                {/* META */}

                <div
                    className="
                        mt-4
                        grid
                        grid-cols-2
                        gap-3
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-slate-50
                            p-2.5
                            text-xs
                            font-semibold
                            text-slate-600
                        "
                    >
                        <Clock3
                            size={16}
                            className="text-emerald-700"
                        />

                        {duration}
                    </div>


                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-slate-50
                            p-2.5
                            text-xs
                            font-semibold
                            text-slate-600
                        "
                    >
                        <BedDouble
                            size={16}
                            className="text-emerald-700"
                        />

                        {hotelRating || "5"} Star Hotel
                    </div>

                </div>


                {/* FEATURES */}

                <div
                    className="
                        mt-5
                        space-y-2
                    "
                >

                    {displayFeatures
                        .slice(0, 3)
                        .map((item, index) => (

                            <div
                                key={`${index}-${typeof item === "string" ? item : item.title}`}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-slate-600
                                "
                            >
                                <Check
                                    size={16}
                                    className="
                                        shrink-0
                                        text-emerald-600
                                    "
                                />

                                <span className="line-clamp-1">
                                    {typeof item === "string"
                                        ? item
                                        : item.title}
                                </span>

                            </div>

                        ))}

                </div>


                {/* RATING */}

                <div
                    className="
                        mt-5
                        flex
                        items-center
                        gap-2
                    "
                >
                    <Star
                        size={17}
                        fill="currentColor"
                        className="text-amber-400"
                    />

                    <span
                        className="
                            font-bold
                            text-slate-800
                        "
                    >
                        {rating}
                    </span>

                    <span
                        className="
                            text-xs
                            text-slate-400
                        "
                    >
                        ({reviews} reviews)
                    </span>
                </div>


                {/* PRICE + BUTTON */}

                <div
                    className="
                        mt-auto
                        flex
                        items-end
                        justify-between
                        gap-3
                        border-t
                        border-slate-100
                        pt-5
                    "
                >

                    <div>

                        <p
                            className="
                                text-xs
                                text-slate-400
                            "
                        >
                            Starting from
                        </p>

                        <div
                            className="
                                flex
                                flex-wrap
                                items-end
                                gap-2
                            "
                        >

                            <span
                                className="
                                    text-xl
                                    font-extrabold
                                    text-emerald-700
                                "
                            >
                                ৳{Number(price).toLocaleString()}
                            </span>

                            {oldPrice && (

                                <span
                                    className="
                                        text-xs
                                        text-slate-400
                                        line-through
                                    "
                                >
                                    ৳{Number(oldPrice).toLocaleString()}
                                </span>

                            )}

                        </div>

                        <p
                            className="
                                mt-0.5
                                text-[11px]
                                text-slate-400
                            "
                        >
                            per person
                        </p>

                    </div>


                    <Link
                        to={`/hajj-umrah/umrah-package/${id}`}
                        className="
                            shrink-0
                            rounded-xl
                            bg-emerald-700
                            px-4
                            py-2.5
                            text-sm
                            font-extrabold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-emerald-800
                            hover:shadow-lg
                        "
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </article>

    );

};


export default UmrahPackageCard;