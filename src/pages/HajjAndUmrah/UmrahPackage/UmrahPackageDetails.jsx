import {
    ArrowLeft,
    BadgeCheck,
    BedDouble,
    CalendarDays,
    Check,
    Clock3,
    Headphones,
    MapPin,
    Plane,
    ShieldCheck,
    Star,
    Users,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router-dom";

import {
    umrahPackagesData,
} from "../../../data/HajjAndUmrah/UmrahPackageData";


const UmrahPackageDetails = () => {

    const { id } = useParams();


    // =====================================
    // FIND PACKAGE BY ID
    // =====================================

    const packageData = umrahPackagesData.find(
        (item) => String(item.id) === String(id)
    );


    // =====================================
    // PACKAGE NOT FOUND
    // =====================================

    if (!packageData) {

        return (

            <main
                className="
                    flex
                    min-h-[70vh]
                    items-center
                    justify-center
                    bg-slate-50
                    px-4
                "
            >

                <div className="text-center">

                    <h1
                        className="
                            text-3xl
                            font-extrabold
                            text-slate-900
                        "
                    >
                        Package Not Found
                    </h1>

                    <p
                        className="
                            mt-3
                            text-slate-500
                        "
                    >
                        The Umrah package you are looking for does not exist.
                    </p>

                    <Link
                        to="/hajj-umrah/umrah-package"
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-emerald-700
                            px-5
                            py-3
                            font-bold
                            text-white
                            transition
                            hover:bg-emerald-800
                        "
                    >
                        <ArrowLeft size={18} />

                        Back to Packages
                    </Link>

                </div>

            </main>

        );

    }


    // =====================================
    // SAFE DATA
    // =====================================

    const {
        title,
        image,
        location,
        destination,
        duration,
        packageType,
        rating = 5,
        reviews = 0,
        price = 0,
        oldPrice,
        description,
        services = [],
        features = [],
        inclusions = [],
    } = packageData;


    const packageFeatures =
        features.length > 0
            ? features
            : services;


    return (

        <main className="min-h-screen bg-[#f7f8fa]">


            {/* =====================================
                HERO IMAGE
            ===================================== */}

            <section
                className="
                    relative
                    min-h-[430px]
                    overflow-hidden
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >

                {/* OVERLAY */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/85
                        via-black/60
                        to-black/35
                    "
                />


                {/* HERO CONTENT */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        min-h-[430px]
                        max-w-[1440px]
                        items-end
                        px-4
                        pb-14
                        pt-24
                        sm:px-6
                        lg:px-8
                    "
                >

                    <div className="max-w-4xl">


                        {/* BACK LINK */}

                        <Link
                            to="/hajj-umrah/umrah-package"
                            className="
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-white/80
                                transition
                                hover:text-amber-400
                            "
                        >
                            <ArrowLeft size={18} />

                            Back to Umrah Packages
                        </Link>


                        {/* TYPE */}

                        <div
                            className="
                                mb-4
                                inline-flex
                                rounded-full
                                bg-emerald-600
                                px-4
                                py-2
                                text-xs
                                font-extrabold
                                uppercase
                                tracking-wider
                                text-white
                            "
                        >
                            {packageType}
                        </div>


                        {/* TITLE */}

                        <h1
                            className="
                                text-4xl
                                font-extrabold
                                leading-tight
                                text-white
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            {title}
                        </h1>


                        {/* META */}

                        <div
                            className="
                                mt-6
                                flex
                                flex-wrap
                                items-center
                                gap-5
                                text-sm
                                font-semibold
                                text-white/90
                            "
                        >

                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <MapPin size={18} />

                                {location || destination}
                            </span>

                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <Clock3 size={18} />

                                {duration}
                            </span>

                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <Star
                                    size={18}
                                    fill="currentColor"
                                    className="text-amber-400"
                                />

                                {rating} ({reviews} Reviews)
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================
                DETAILS SECTION
            ===================================== */}

            <section className="py-10 lg:py-14">

                <div
                    className="
                        mx-auto
                        grid
                        max-w-[1440px]
                        grid-cols-1
                        gap-8
                        px-4
                        sm:px-6
                        lg:grid-cols-[minmax(0,1fr)_360px]
                        lg:px-8
                    "
                >


                    {/* =====================================
                        LEFT CONTENT
                    ===================================== */}

                    <div className="space-y-7">


                        {/* OVERVIEW */}

                        <div
                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                lg:p-8
                            "
                        >

                            <h2
                                className="
                                    text-2xl
                                    font-extrabold
                                    text-slate-900
                                "
                            >
                                Package Overview
                            </h2>

                            <p
                                className="
                                    mt-4
                                    leading-8
                                    text-slate-600
                                "
                            >
                                {description ||
                                    `Experience a comfortable and spiritually fulfilling Umrah journey with our ${title}. This package is carefully designed to provide quality accommodation, transportation and professional assistance throughout your journey.`}
                            </p>


                            {/* QUICK INFO */}

                            <div
                                className="
                                    mt-7
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                    xl:grid-cols-4
                                "
                            >

                                {[
                                    {
                                        icon: Clock3,
                                        label: "Duration",
                                        value: duration,
                                    },
                                    {
                                        icon: MapPin,
                                        label: "Destination",
                                        value:
                                            destination ||
                                            location,
                                    },
                                    {
                                        icon: BedDouble,
                                        label: "Package Type",
                                        value: packageType,
                                    },
                                    {
                                        icon: Users,
                                        label: "Support",
                                        value: "24/7 Assistance",
                                    },
                                ].map((item) => {

                                    const Icon = item.icon;

                                    return (

                                        <div
                                            key={item.label}
                                            className="
                                                group
                                                rounded-xl
                                                border
                                                border-slate-200
                                                p-4
                                                transition
                                                hover:border-emerald-300
                                                hover:bg-emerald-50
                                            "
                                        >

                                            <Icon
                                                size={23}
                                                className="
                                                    text-emerald-700
                                                "
                                            />

                                            <p
                                                className="
                                                    mt-3
                                                    text-xs
                                                    font-semibold
                                                    uppercase
                                                    text-slate-400
                                                "
                                            >
                                                {item.label}
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    font-bold
                                                    text-slate-800
                                                "
                                            >
                                                {item.value}
                                            </p>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>


                        {/* PACKAGE FEATURES */}

                        <div
                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                lg:p-8
                            "
                        >

                            <h2
                                className="
                                    text-2xl
                                    font-extrabold
                                    text-slate-900
                                "
                            >
                                Package Features
                            </h2>

                            <div
                                className="
                                    mt-6
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {packageFeatures.map(
                                    (item, index) => (

                                        <div
                                            key={`${item}-${index}`}
                                            className="
                                                flex
                                                items-start
                                                gap-3
                                                rounded-xl
                                                bg-slate-50
                                                p-4
                                            "
                                        >

                                            <div
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-emerald-100
                                                    text-emerald-700
                                                "
                                            >
                                                <Check size={17} />
                                            </div>

                                            <span
                                                className="
                                                    pt-1
                                                    text-sm
                                                    font-semibold
                                                    text-slate-700
                                                "
                                            >
                                                {typeof item === "string"
                                                    ? item
                                                    : item.title}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>


                        {/* INCLUDED */}

                        <div
                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                lg:p-8
                            "
                        >

                            <h2
                                className="
                                    text-2xl
                                    font-extrabold
                                    text-slate-900
                                "
                            >
                                What's Included
                            </h2>

                            <div
                                className="
                                    mt-6
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {(
                                    inclusions.length > 0
                                        ? inclusions
                                        : [
                                            "Umrah Visa Processing",
                                            "Hotel Accommodation",
                                            "Airport Transportation",
                                            "Makkah & Madinah Transfer",
                                            "Professional Guidance",
                                            "24/7 Customer Support",
                                        ]
                                ).map((item, index) => (

                                    <div
                                        key={`${item}-${index}`}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                        "
                                    >
                                        <BadgeCheck
                                            size={20}
                                            className="
                                                shrink-0
                                                text-emerald-600
                                            "
                                        />

                                        <span
                                            className="
                                                text-sm
                                                font-semibold
                                                text-slate-700
                                            "
                                        >
                                            {item}
                                        </span>
                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        RIGHT BOOKING CARD
                    ===================================== */}

                    <aside>

                        <div
                            className="
                                sticky
                                top-24
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                shadow-lg
                            "
                        >

                            {/* PRICE */}

                            <div
                                className="
                                    border-b
                                    border-slate-100
                                    p-6
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        font-semibold
                                        text-slate-500
                                    "
                                >
                                    Starting from
                                </p>

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
                                            text-3xl
                                            font-extrabold
                                            text-emerald-700
                                        "
                                    >
                                        ৳{Number(price).toLocaleString()}
                                    </span>

                                    {oldPrice && (

                                        <span
                                            className="
                                                pb-1
                                                text-sm
                                                font-semibold
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
                                        mt-1
                                        text-xs
                                        text-slate-400
                                    "
                                >
                                    per person
                                </p>

                            </div>


                            {/* BENEFITS */}

                            <div
                                className="
                                    space-y-4
                                    p-6
                                "
                            >

                                {[
                                    {
                                        icon: ShieldCheck,
                                        text: "Secure Booking",
                                    },
                                    {
                                        icon: Plane,
                                        text: "Complete Travel Support",
                                    },
                                    {
                                        icon: CalendarDays,
                                        text: "Flexible Travel Dates",
                                    },
                                    {
                                        icon: Headphones,
                                        text: "24/7 Customer Assistance",
                                    },
                                ].map((item) => {

                                    const Icon = item.icon;

                                    return (

                                        <div
                                            key={item.text}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <Icon
                                                size={19}
                                                className="
                                                    text-emerald-700
                                                "
                                            />

                                            <span
                                                className="
                                                    text-sm
                                                    font-semibold
                                                    text-slate-600
                                                "
                                            >
                                                {item.text}
                                            </span>

                                        </div>

                                    );

                                })}


                                {/* BOOK BUTTON */}

                                <Link
                                    to={`/contact?package=${encodeURIComponent(title)}`}
                                    className="
                                        mt-6
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-emerald-700
                                        px-5
                                        py-3.5
                                        text-sm
                                        font-extrabold
                                        text-white
                                        shadow-md
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-emerald-800
                                        hover:shadow-lg
                                    "
                                >
                                    Book This Package
                                </Link>


                                {/* CONTACT */}

                                <Link
                                    to="/contact"
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-emerald-700
                                        px-5
                                        py-3.5
                                        text-sm
                                        font-extrabold
                                        text-emerald-700
                                        transition
                                        hover:bg-emerald-50
                                    "
                                >
                                    Contact Our Expert
                                </Link>

                            </div>

                        </div>

                    </aside>

                </div>

            </section>

        </main>

    );

};


export default UmrahPackageDetails;