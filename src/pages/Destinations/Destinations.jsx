import { Link, useParams } from "react-router-dom";

import {
    ArrowRight,
    CalendarDays,
    MapPin,
    Star,
    Users,
} from "lucide-react";

import destinationsData from "../../data/destinationsData";


const Destinations = () => {

    // URL example:
    // /destinations/asia
    // /destinations/europe

    const { region } = useParams();

    // Get current region data
    const regionData = destinationsData[region];


    // If region does not exist
    if (!regionData) {
        return (
            <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4">

                <div className="text-center">

                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Destination Region Not Found
                    </h1>

                    <p className="mt-4 text-slate-500">
                        The destination region you are looking for does not exist.
                    </p>

                    <Link
                        to="/"
                        className="
                            mt-8
                            inline-flex
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-bold
                            text-white
                            transition
                            hover:bg-blue-700
                        "
                    >
                        Back to Home
                    </Link>

                </div>

            </section>
        );
    }


    return (
        <main>

            {/* =========================================
                REGION HERO SECTION
            ========================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-slate-950
                    py-20
                    sm:py-24
                    lg:py-32
                "
            >

                {/* BACKGROUND DECORATION */}

                <div
                    className="
                        absolute
                        -left-24
                        top-10
                        h-72
                        w-72
                        rounded-full
                        bg-blue-600/20
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -right-24
                        bottom-0
                        h-80
                        w-80
                        rounded-full
                        bg-cyan-500/10
                        blur-3xl
                    "
                />


                <div
                    className="
                        container
                        relative
                        z-10
                        mx-auto
                        px-4
                        text-center
                        sm:px-6
                        lg:px-8
                    "
                >

                    <p
                        className="
                            mb-4
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-blue-400
                        "
                    >
                        Explore {regionData.name}
                    </p>


                    <h1
                        className="
                            mx-auto
                            max-w-4xl
                            text-4xl
                            font-extrabold
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {regionData.title}
                    </h1>


                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-base
                            leading-8
                            text-slate-300
                            sm:text-lg
                        "
                    >
                        {regionData.subtitle}
                    </p>

                </div>

            </section>



            {/* =========================================
                DESTINATIONS SECTION
            ========================================== */}

            <section
                className="
                    bg-slate-50
                    py-16
                    sm:py-20
                    lg:py-24
                "
            >

                <div
                    className="
                        container
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >


                    {/* SECTION HEADER */}

                    <div
                        className="
                            mb-12
                            flex
                            flex-col
                            gap-5
                            lg:flex-row
                            lg:items-end
                            lg:justify-between
                        "
                    >

                        <div className="max-w-2xl">

                            <p
                                className="
                                    mb-3
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-blue-600
                                "
                            >
                                Popular Destinations
                            </p>


                            <h2
                                className="
                                    text-3xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-950
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                Explore The Best Of{" "}

                                <span className="text-blue-600">
                                    {regionData.name}
                                </span>

                            </h2>


                            <p
                                className="
                                    mt-4
                                    max-w-xl
                                    leading-7
                                    text-slate-500
                                "
                            >
                                {regionData.description}
                            </p>

                        </div>


                        <div
                            className="
                                inline-flex
                                w-fit
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-blue-100
                                bg-blue-50
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-blue-700
                            "
                        >
                            {regionData.destinations.length} Destinations
                        </div>

                    </div>



                    {/* =========================================
                        DESTINATION CARDS GRID
                    ========================================== */}

                    <div
                        className="
                            grid
                            gap-7
                            md:grid-cols-2
                            xl:grid-cols-4
                        "
                    >

                        {regionData.destinations.map((destination) => (

                            <article
                                key={destination.id}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-white
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                                "
                            >


                                {/* =================================
                                    IMAGE INTEGRATION
                                ================================== */}

                                <div
                                    className="
                                        relative
                                        h-64
                                        overflow-hidden
                                    "
                                >

                                    <img
                                        src={destination.image}
                                        alt={`${destination.name}, ${destination.country}`}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-110
                                        "
                                    />


                                    {/* DARK GRADIENT */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-slate-950/70
                                            via-slate-950/10
                                            to-transparent
                                        "
                                    />


                                    {/* BADGE */}

                                    <span
                                        className="
                                            absolute
                                            left-5
                                            top-5
                                            rounded-full
                                            bg-blue-600
                                            px-4
                                            py-2
                                            text-xs
                                            font-bold
                                            text-white
                                            shadow-lg
                                        "
                                    >
                                        {destination.badge}
                                    </span>


                                    {/* IMAGE LOCATION */}

                                    <div
                                        className="
                                            absolute
                                            bottom-5
                                            left-5
                                            right-5
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                text-sm
                                                font-medium
                                                text-white/90
                                            "
                                        >

                                            <MapPin size={17} />

                                            <span>
                                                {destination.city}
                                            </span>

                                        </div>


                                        <h3
                                            className="
                                                mt-2
                                                text-2xl
                                                font-extrabold
                                                text-white
                                            "
                                        >
                                            {destination.name}
                                        </h3>

                                    </div>

                                </div>



                                {/* =================================
                                    CARD CONTENT
                                ================================== */}

                                <div className="p-6">


                                    {/* DESCRIPTION */}

                                    <p
                                        className="
                                            line-clamp-3
                                            min-h-[72px]
                                            text-sm
                                            leading-6
                                            text-slate-500
                                        "
                                    >
                                        {destination.shortDescription}
                                    </p>



                                    {/* TRAVEL INFO */}

                                    <div
                                        className="
                                            mt-5
                                            space-y-3
                                            border-b
                                            border-slate-100
                                            pb-5
                                        "
                                    >


                                        {/* DURATION */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                text-sm
                                                text-slate-600
                                            "
                                        >

                                            <CalendarDays
                                                size={18}
                                                className="text-blue-600"
                                            />

                                            <span>
                                                {destination.duration}
                                            </span>

                                        </div>



                                        {/* PERFECT FOR */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                text-sm
                                                text-slate-600
                                            "
                                        >

                                            <Users
                                                size={18}
                                                className="text-blue-600"
                                            />

                                            <span>
                                                {destination.perfectFor}
                                            </span>

                                        </div>

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
                                            size={18}
                                            className="
                                                fill-amber-400
                                                text-amber-400
                                            "
                                        />

                                        <span
                                            className="
                                                font-bold
                                                text-slate-900
                                            "
                                        >
                                            {destination.rating}
                                        </span>

                                        <span
                                            className="
                                                text-sm
                                                text-slate-400
                                            "
                                        >
                                            ({destination.reviews} reviews)
                                        </span>

                                    </div>



                                    {/* PRICE */}

                                    <div
                                        className="
                                            mt-6
                                            flex
                                            items-end
                                            justify-between
                                            gap-4
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


                                            <p
                                                className="
                                                    mt-1
                                                    text-2xl
                                                    font-extrabold
                                                    text-blue-600
                                                "
                                            >
                                                ${destination.startingPrice}
                                            </p>

                                        </div>



                                        {/* DETAILS BUTTON */}

                                        <Link
                                            to={`/destinations/${regionData.slug}/${destination.slug}`}
                                            className="
                                                group/button
                                                inline-flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-slate-900
                                                text-white
                                                transition-all
                                                duration-300
                                                hover:bg-blue-600
                                            "
                                            aria-label={`View ${destination.name} details`}
                                        >

                                            <ArrowRight
                                                size={20}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover/button:translate-x-1
                                                "
                                            />

                                        </Link>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
};


export default Destinations;