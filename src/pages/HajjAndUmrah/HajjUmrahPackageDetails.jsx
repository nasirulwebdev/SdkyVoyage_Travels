import { Link, useParams } from "react-router-dom";

import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    Star,
    Clock3,
    CheckCircle2,
} from "lucide-react";

import {
    hajjUmrahPackages,
} from "../../data/HajjAndUmrah/HajjAndUmrahData";


const HajjUmrahPackageDetails = () => {
    const { slug } = useParams();


    // Find package by slug
    const packageItem = hajjUmrahPackages.find(
        (item) => item.slug === slug
    );


    // Package not found
    if (!packageItem) {
        return (
            <main
                className="
                    flex
                    min-h-[70vh]
                    items-center
                    justify-center
                    bg-gray-50
                    px-4
                "
            >
                <div className="text-center">

                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-gray-900
                        "
                    >
                        Package Not Found
                    </h1>

                    <p className="mt-3 text-gray-500">
                        The package you are looking for does not exist.
                    </p>

                    <Link
                        to="/hajj-umrah"
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-[#0b4f46]
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#083d37]
                        "
                    >
                        <ArrowLeft size={18} />
                        Back to Packages
                    </Link>

                </div>
            </main>
        );
    }


    return (
        <main className="min-h-screen bg-[#f7f8f8]">

            {/* =========================
                HERO IMAGE
            ========================== */}
            <section className="relative h-[420px] overflow-hidden">

                <img
                    src={packageItem.image}
                    alt={packageItem.title}
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/30
                        to-black/10
                    "
                />


                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-end
                    "
                >
                    <div
                        className="
                            mx-auto
                            w-full
                            max-w-[1240px]
                            px-4
                            pb-12
                            sm:px-6
                            lg:px-8
                        "
                    >

                        <Link
                            to="/hajj-umrah"
                            className="
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-white/90
                                transition
                                hover:text-white
                            "
                        >
                            <ArrowLeft size={18} />
                            Back to Packages
                        </Link>


                        {packageItem.badge && (
                            <div>
                                <span
                                    className="
                                        inline-flex
                                        rounded-full
                                        bg-orange-500
                                        px-4
                                        py-1.5
                                        text-xs
                                        font-bold
                                        text-white
                                    "
                                >
                                    {packageItem.badge.text}
                                </span>
                            </div>
                        )}


                        <h1
                            className="
                                mt-4
                                max-w-3xl
                                text-3xl
                                font-bold
                                text-white
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {packageItem.title}
                        </h1>


                        <div
                            className="
                                mt-5
                                flex
                                flex-wrap
                                items-center
                                gap-5
                                text-sm
                                text-white/90
                            "
                        >
                            <span className="flex items-center gap-2">
                                <Clock3 size={18} />
                                {packageItem.duration} Days
                            </span>

                            <span className="flex items-center gap-2">
                                <MapPin size={18} />
                                From {packageItem.departureCityLabel}
                            </span>

                            <span className="flex items-center gap-2">
                                <Star
                                    size={18}
                                    className="fill-orange-400 text-orange-400"
                                />

                                {packageItem.rating}

                                <span className="text-white/70">
                                    ({packageItem.reviews} Reviews)
                                </span>
                            </span>
                        </div>

                    </div>
                </div>

            </section>


            {/* =========================
                DETAILS CONTENT
            ========================== */}
            <section
                className="
                    px-4
                    py-12
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        mx-auto
                        grid
                        max-w-[1240px]
                        grid-cols-1
                        gap-8
                        lg:grid-cols-[minmax(0,1fr)_350px]
                    "
                >

                    {/* LEFT CONTENT */}
                    <div className="space-y-7">

                        {/* OVERVIEW */}
                        <div
                            className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-6
                                shadow-sm
                            "
                        >
                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                "
                            >
                                Package Overview
                            </h2>

                            <p
                                className="
                                    mt-4
                                    leading-7
                                    text-gray-600
                                "
                            >
                                Experience a comfortable and spiritually
                                fulfilling journey with our{" "}
                                {packageItem.title}. This package is carefully
                                designed to provide quality accommodation,
                                professional guidance and complete travel
                                assistance throughout your journey.
                            </p>
                        </div>


                        {/* STAY DETAILS */}
                        <div
                            className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-6
                                shadow-sm
                            "
                        >
                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                "
                            >
                                Stay Details
                            </h2>

                            <div
                                className="
                                    mt-6
                                    grid
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >
                                {packageItem.stays.map((stay) => (
                                    <div
                                        key={stay.id}
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            rounded-xl
                                            border
                                            border-gray-100
                                            bg-gray-50
                                            p-4
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-orange-50
                                                text-orange-500
                                            "
                                        >
                                            <MapPin size={20} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-gray-900">
                                                {stay.label}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {stay.nights} Nights
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* PACKAGE INCLUDES */}
                        <div
                            className="
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-6
                                shadow-sm
                            "
                        >
                            <h2 className="text-2xl font-bold text-gray-900">
                                Package Includes
                            </h2>

                            <div
                                className="
                                    mt-6
                                    grid
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >
                                {[
                                    "Visa Processing Assistance",
                                    "Return Air Ticket",
                                    "Hotel Accommodation",
                                    "Airport Transfers",
                                    "Experienced Tour Guide",
                                    "24/7 Customer Support",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            text-sm
                                            text-gray-700
                                        "
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="shrink-0 text-[#0b4f46]"
                                        />

                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>


                    {/* RIGHT BOOKING CARD */}
                    <aside>
                        <div
                            className="
                                sticky
                                top-24
                                rounded-2xl
                                border
                                border-gray-100
                                bg-white
                                p-6
                                shadow-lg
                            "
                        >
                            <p className="text-sm text-gray-500">
                                {packageItem.priceLabel}
                            </p>

                            <div className="mt-2 flex items-end gap-1">
                                <span
                                    className="
                                        text-4xl
                                        font-bold
                                        text-[#0b4f46]
                                    "
                                >
                                    {packageItem.currencySymbol}
                                    {packageItem.price}
                                </span>

                                <span className="pb-1 text-sm text-gray-500">
                                    {packageItem.priceSuffix}
                                </span>
                            </div>


                            <div
                                className="
                                    my-6
                                    space-y-4
                                    border-y
                                    border-gray-100
                                    py-5
                                "
                            >
                                <div className="flex justify-between gap-4">
                                    <span className="flex items-center gap-2 text-sm text-gray-500">
                                        <CalendarDays size={17} />
                                        Duration
                                    </span>

                                    <span className="text-sm font-semibold text-gray-900">
                                        {packageItem.duration} Days
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <span className="flex items-center gap-2 text-sm text-gray-500">
                                        <MapPin size={17} />
                                        Departure
                                    </span>

                                    <span className="text-sm font-semibold text-gray-900">
                                        {packageItem.departureCityLabel}
                                    </span>
                                </div>
                            </div>


                            <button
                                type="button"
                                className="
                                    w-full
                                    rounded-xl
                                    bg-orange-500
                                    px-5
                                    py-3.5
                                    font-bold
                                    text-white
                                    transition
                                    hover:bg-orange-600
                                "
                            >
                                Book This Package
                            </button>


                            <p
                                className="
                                    mt-4
                                    text-center
                                    text-xs
                                    text-gray-500
                                "
                            >
                                Contact our travel experts for booking assistance.
                            </p>

                        </div>
                    </aside>

                </div>
            </section>

        </main>
    );
};


export default HajjUmrahPackageDetails;