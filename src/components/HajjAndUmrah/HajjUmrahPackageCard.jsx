import {
    ArrowRight,
    CalendarDays,
    MapPin,
    Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const HajjUmrahPackageCard = ({
    packageItem,
    viewMode = "grid",
}) => {
    const {
        title,
        image,
        badge,
        duration,
        departureCityLabel,
        stays,
        price,
        currencySymbol,
        priceLabel,
        priceSuffix,
        rating,
        reviews,
        buttonText,
    } = packageItem;


    if (viewMode === "list") {
        return (
            <article className="
                group
                grid
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                md:grid-cols-[260px_1fr]
            ">
                <div className="relative min-h-[220px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            transition duration-500
                            group-hover:scale-105
                        "
                    />

                    {badge && (
                        <span className="
                            absolute left-4 top-4
                            rounded-full
                            bg-orange-500
                            px-3 py-1
                            text-xs font-bold
                            text-white
                        ">
                            {badge.text}
                        </span>
                    )}
                </div>

                <div className="flex flex-col justify-between p-5">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">
                            {title}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <CalendarDays size={16} />
                                {duration} Days
                            </span>

                            <span className="flex items-center gap-1.5">
                                <MapPin size={16} />
                                From {departureCityLabel}
                            </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {stays.map((stay) => (
                                <span
                                    key={stay.id}
                                    className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700"
                                >
                                    {stay.nights} Nights {stay.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-1">
                                <Star
                                    size={16}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                                <span className="text-sm font-bold">
                                    {rating}
                                </span>
                                <span className="text-xs text-gray-400">
                                    ({reviews} reviews)
                                </span>
                            </div>

                            <p className="mt-2 text-xs text-gray-400">
                                {priceLabel}
                            </p>

                            <p className="text-2xl font-extrabold text-orange-500">
                                {currencySymbol}{price.toLocaleString()}
                                <span className="ml-1 text-xs font-medium text-gray-400">
                                    {priceSuffix}
                                </span>
                            </p>
                        </div>

                        <button className="
                            flex items-center gap-2
                            rounded-lg
                            bg-[#0b4f46]
                            px-5 py-3
                            text-sm font-bold
                            text-white
                            transition
                            hover:bg-orange-500
                        ">
                            {buttonText}
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </article>
        );
    }


    return (
        <article className="
            group
            overflow-hidden
            rounded-2xl
            border
            border-gray-100
            bg-white
            shadow-sm
            transition
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
        ">
            <div className="relative h-[205px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="
                        h-full w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                    "
                />

                {badge && (
                    <span className="
                        absolute left-4 top-4
                        rounded-full
                        bg-orange-500
                        px-3 py-1
                        text-xs font-bold
                        text-white
                        shadow
                    ">
                        {badge.text}
                    </span>
                )}
            </div>

            <div className="p-5">
                <div className="mb-3 flex items-center gap-1">
                    <Star
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-sm font-bold text-gray-800">
                        {rating}
                    </span>
                    <span className="text-xs text-gray-400">
                        ({reviews} reviews)
                    </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                    {title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <CalendarDays size={20} />
                        {duration} Days
                    </span>

                    <span className="flex items-center gap-1.5">
                        <MapPin size={20} />
                        From {departureCityLabel}
                    </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {stays.map((stay) => (
                        <span
                            key={stay.id}
                            className="
                                rounded-md
                                bg-orange-50
                                px-2.5 py-1.5
                                text-xs
                                font-semibold
                                text-orange-700
                            "
                        >
                            {stay.nights} Nights {stay.label}
                        </span>
                    ))}
                </div>

                <div className="my-5 border-t border-gray-100" />

                <div className="flex items-end justify-between gap-3">
                    <div>
                        <p className="text-xs text-gray-400">
                            {priceLabel}
                        </p>

                        <p className="mt-1 text-xl font-extrabold text-orange-500">
                            {currencySymbol}{price.toLocaleString()}
                        </p>

                        <p className="text-[11px] text-gray-400">
                            {priceSuffix}
                        </p>
                    </div>

                    <Link
                        to={`/hajj-umrah/${packageItem.slug}`}
                        className="
                            flex
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#0b4f46]
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#083d37]
                        "
                    >
                        {packageItem.buttonText}
                    </Link>
                </div>
            </div>
        </article>
    );
};


export default HajjUmrahPackageCard;