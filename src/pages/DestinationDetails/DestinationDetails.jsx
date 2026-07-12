import { Link, Navigate, useParams } from "react-router-dom";

import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Clock3,
    Globe2,
    MapPin,
    ShieldCheck,
    Sparkles,
    Star,
    Users,
} from "lucide-react";

import destinationsData from "../../data/destinationsData";


const DestinationDetails = () => {

    const { region, destinationSlug } = useParams();


    // ========================================
    // GET REGION DATA
    // ========================================

    const regionData =
        destinationsData[region?.toLowerCase()];


    // ========================================
    // GET SINGLE DESTINATION
    // ========================================

    const destination =
        regionData?.destinations?.find(
            (item) =>
                item.slug === destinationSlug
        );


    // ========================================
    // INVALID URL
    // ========================================

    if (!regionData || !destination) {
        return (
            <Navigate
                to="/destinations/asia"
                replace
            />
        );
    }


    // ========================================
    // DEFAULT DATA
    // ========================================

    const highlights =
        destination.highlights || [
            "Carefully selected travel experience",
            "Professional travel support",
            "Comfortable accommodation options",
            "Flexible tour planning",
            "Memorable sightseeing experience",
            "Trusted travel assistance",
        ];


    const included =
        destination.included || [
            "Hotel accommodation",
            "Airport transfer",
            "Daily breakfast",
            "Professional tour assistance",
            "Selected sightseeing tours",
        ];


    return (

        <main className="bg-white">


            {/* ========================================
                HERO SECTION
            ======================================== */}

            <section
                className="
                    relative
                    min-h-[560px]
                    overflow-hidden
                    bg-slate-950
                "
            >

                {/* BACKGROUND IMAGE */}

                {destination.image && (

                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                        "
                    />

                )}


                {/* FALLBACK BACKGROUND */}

                {!destination.image && (

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-slate-950
                            via-blue-950
                            to-blue-700
                        "
                    />

                )}


                {/* OVERLAY */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-slate-950/95
                        via-slate-950/75
                        to-slate-950/30
                    "
                />


                {/* BOTTOM GRADIENT */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950
                        via-transparent
                        to-transparent
                    "
                />


                {/* HERO CONTENT */}

                <div
                    className="
                        container
                        relative
                        z-10
                        mx-auto
                        flex
                        min-h-[560px]
                        items-center
                        px-4
                        py-20
                        sm:px-6
                        lg:px-8
                    "
                >

                    <div className="max-w-4xl">


                        {/* BACK LINK */}

                        <Link
                            to={`/destinations/${region}`}
                            className="
                                mb-8
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-bold
                                text-white/80
                                transition
                                hover:text-white
                            "
                        >

                            <ArrowLeft size={18} />

                            Back to {regionData.name}

                        </Link>


                        {/* BADGE */}

                        <div>

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-white/10
                                    px-4
                                    py-2
                                    text-sm
                                    font-bold
                                    text-white
                                    backdrop-blur-md
                                "
                            >

                                <Sparkles
                                    size={16}
                                    className="text-amber-400 "
                                />

                                {destination.badge || "Popular Destination"}

                            </span>

                        </div>


                        {/* TITLE */}

                        <h1
                            className="
                                mt-6
                                text-4xl
                                font-extrabold
                                tracking-tight
                                text-white
                                sm:text-5xl
                                lg:text-7xl
                            "
                        >

                            {destination.name}

                        </h1>


                        {/* LOCATION */}

                        <div
                            className="
                                mt-5
                                flex
                                flex-wrap
                                items-center
                                gap-5
                                text-white/80
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <MapPin
                                    size={20}
                                    className="text-blue-400"
                                />

                                {destination.city},{" "}
                                {destination.country}

                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <Star
                                    size={19}
                                    className="
                                        fill-amber-400
                                        text-amber-400
                                    "
                                />

                                <span className="font-bold text-white">
                                    {destination.rating}
                                </span>

                                <span>
                                    ({destination.reviews} reviews)
                                </span>

                            </div>

                        </div>


                        {/* DESCRIPTION */}

                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-lg
                                leading-8
                                text-slate-300
                            "
                        >

                            {destination.shortDescription}

                        </p>

                    </div>

                </div>

            </section>



            {/* ========================================
                QUICK INFORMATION
            ======================================== */}

            <section
                className="
                    relative
                    z-20
                    -mt-10
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

                    <div
                        className="
                            grid
                            gap-4
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-[0_25px_70px_rgba(15,23,42,0.15)]
                            sm:grid-cols-2
                            lg:grid-cols-4
                            lg:p-8
                        "
                    >


                        {/* LOCATION */}

                        <InfoItem
                            icon={MapPin}
                            label="Destination"
                            value={destination.country}
                        />


                        {/* DURATION */}

                        <InfoItem
                            icon={CalendarDays}
                            label="Recommended Stay"
                            value={destination.duration}
                        />


                        {/* TRAVELERS */}

                        <InfoItem
                            icon={Users}
                            label="Perfect For"
                            value={
                                destination.perfectFor ||
                                "Couples & Families"
                            }
                        />


                        {/* PRICE */}

                        <div
                            className="
                                rounded-2xl
                                bg-blue-600
                                p-5
                                text-white
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-blue-100
                                "
                            >
                                Starting From
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-3xl
                                    font-extrabold
                                "
                            >
                                ${destination.startingPrice}
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-blue-100
                                "
                            >
                                per person
                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ========================================
                MAIN CONTENT
            ======================================== */}

            <section
                className="
                    py-16
                    sm:py-20
                    lg:py-24
                "
            >

                <div
                    className="
                        container
                        mx-auto
                        grid
                        gap-12
                        px-4
                        sm:px-6
                        lg:grid-cols-[1fr_380px]
                        lg:px-8
                    "
                >


                    {/* ========================================
                        LEFT CONTENT
                    ======================================== */}

                    <div>


                        {/* ABOUT */}

                        <div>

                            <p
                                className="
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-blue-600
                                "
                            >
                                Discover
                            </p>

                            <h2
                                className="
                                    mt-3
                                    text-3xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-950
                                    sm:text-4xl
                                "
                            >

                                About{" "}

                                <span className="text-blue-600">
                                    {destination.name}
                                </span>

                            </h2>

                            <p
                                className="
                                    mt-6
                                    text-lg
                                    leading-8
                                    text-slate-600
                                "
                            >

                                {destination.description ||
                                    destination.shortDescription}

                            </p>

                        </div>



                        {/* ========================================
                            HIGHLIGHTS
                        ======================================== */}

                        <div
                            className="
                                mt-14
                                rounded-3xl
                                bg-slate-50
                                p-6
                                sm:p-8
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-blue-100
                                        text-blue-600
                                    "
                                >

                                    <Sparkles size={23} />

                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-bold
                                            uppercase
                                            tracking-wider
                                            text-blue-600
                                        "
                                    >
                                        Experience
                                    </p>

                                    <h3
                                        className="
                                            text-2xl
                                            font-extrabold
                                            text-slate-950
                                        "
                                    >
                                        Destination Highlights
                                    </h3>

                                </div>

                            </div>


                            <div
                                className="
                                    mt-8
                                    grid
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {highlights.map(
                                    (highlight, index) => (

                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-start
                                                gap-3
                                                rounded-2xl
                                                bg-white
                                                p-4
                                            "
                                        >

                                            <CheckCircle2
                                                size={20}
                                                className="
                                                    mt-0.5
                                                    shrink-0
                                                    text-emerald-500
                                                "
                                            />

                                            <span
                                                className="
                                                    font-medium
                                                    leading-6
                                                    text-slate-700
                                                "
                                            >
                                                {highlight}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>



                        {/* ========================================
                            INCLUDED
                        ======================================== */}

                        <div className="mt-14">

                            <h2
                                className="
                                    text-3xl
                                    font-extrabold
                                    text-slate-950
                                "
                            >
                                What's Included
                            </h2>


                            <div
                                className="
                                    mt-7
                                    grid
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {included.map(
                                    (item, index) => (

                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                rounded-2xl
                                                border
                                                border-slate-200
                                                p-4
                                            "
                                        >

                                            <CheckCircle2
                                                size={20}
                                                className="
                                                    shrink-0
                                                    text-blue-600
                                                "
                                            />

                                            <span
                                                className="
                                                    font-semibold
                                                    text-slate-700
                                                "
                                            >
                                                {item}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>



                        {/* ========================================
                            TRAVEL INFORMATION
                        ======================================== */}

                        <div
                            className="
                                mt-14
                                grid
                                gap-5
                                sm:grid-cols-3
                            "
                        >

                            <FeatureCard
                                icon={Clock3}
                                title="Flexible Planning"
                                description="Choose travel dates that work best for your journey."
                            />

                            <FeatureCard
                                icon={ShieldCheck}
                                title="Trusted Support"
                                description="Professional assistance throughout your travel experience."
                            />

                            <FeatureCard
                                icon={Globe2}
                                title="Local Experience"
                                description="Discover authentic places and unforgettable experiences."
                            />

                        </div>

                    </div>



                    {/* ========================================
                        RIGHT BOOKING CARD
                    ======================================== */}

                    <aside>

                        <div
                            className="
                                sticky
                                top-36
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-blue-600
                                "
                            >
                                Plan Your Journey
                            </p>

                            <h3
                                className="
                                    mt-3
                                    text-2xl
                                    font-extrabold
                                    text-slate-950
                                "
                            >
                                Explore {destination.name}
                            </h3>

                            <p
                                className="
                                    mt-3
                                    leading-7
                                    text-slate-500
                                "
                            >
                                Start planning your dream journey
                                with SkyVoyage Travels.
                            </p>


                            {/* PRICE */}

                            <div
                                className="
                                    mt-6
                                    rounded-2xl
                                    bg-slate-50
                                    p-5
                                "
                            >

                                <p className="text-sm text-slate-500">
                                    Starting price
                                </p>

                                <div
                                    className="
                                        mt-1
                                        flex
                                        items-end
                                        gap-2
                                    "
                                >

                                    <span
                                        className="
                                            text-4xl
                                            font-extrabold
                                            text-blue-600
                                        "
                                    >
                                        ${destination.startingPrice}
                                    </span>

                                    <span
                                        className="
                                            pb-1
                                            text-sm
                                            text-slate-400
                                        "
                                    >
                                        / person
                                    </span>

                                </div>

                            </div>


                            {/* DETAILS */}

                            <div
                                className="
                                    mt-6
                                    space-y-4
                                "
                            >

                                <BookingInfo
                                    icon={MapPin}
                                    label="Location"
                                    value={`${destination.city}, ${destination.country}`}
                                />

                                <BookingInfo
                                    icon={CalendarDays}
                                    label="Duration"
                                    value={destination.duration}
                                />

                                <BookingInfo
                                    icon={Star}
                                    label="Rating"
                                    value={`${destination.rating} / 5`}
                                />

                            </div>


                            {/* BOOK BUTTON */}

                            <Link
                                to={`/packages?destination=${destination.slug}`}
                                className="
                                    group
                                    mt-7
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-blue-600
                                    px-6
                                    py-4
                                    font-bold
                                    text-white
                                    shadow-lg
                                    shadow-blue-600/20
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-blue-700
                                    hover:shadow-xl
                                "
                            >

                                Explore Packages

                                <ArrowRight
                                    size={19}
                                    className="
                                        transition-transform
                                        group-hover:translate-x-1
                                    "
                                />

                            </Link>


                            {/* CONTACT */}

                            <Link
                                to="/contact"
                                className="
                                    mt-3
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    px-6
                                    py-4
                                    font-bold
                                    text-slate-700
                                    transition
                                    hover:border-blue-600
                                    hover:text-blue-600
                                "
                            >
                                Contact Travel Expert
                            </Link>


                            {/* TRUST */}

                            <div
                                className="
                                    mt-6
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    text-sm
                                    text-slate-500
                                "
                            >

                                <ShieldCheck
                                    size={17}
                                    className="text-emerald-500"
                                />

                                Secure & trusted travel service

                            </div>

                        </div>

                    </aside>

                </div>

            </section>

        </main>

    );

};





// ========================================
// INFO ITEM COMPONENT
// ========================================

const InfoItem = ({
    icon: Icon,
    label,
    value,
}) => {

    return (

        <div
            className="
                flex
                items-center
                gap-4
                rounded-2xl
                p-3
            "
        >

            <div
                className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                "
            >

                <Icon size={22} />

            </div>


            <div>

                <p
                    className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-slate-400
                    "
                >
                    {label}
                </p>

                <p
                    className="
                        mt-1
                        font-bold
                        text-slate-900
                    "
                >
                    {value}
                </p>

            </div>

        </div>

    );

};





// ========================================
// FEATURE CARD COMPONENT
// ========================================

const FeatureCard = ({
    icon: Icon,
    title,
    description,
}) => {

    return (

        <div
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >

            <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                "
            >

                <Icon size={22} />

            </div>


            <h3
                className="
                    mt-5
                    text-lg
                    font-extrabold
                    text-slate-900
                "
            >
                {title}
            </h3>


            <p
                className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                "
            >
                {description}
            </p>

        </div>

    );

};





// ========================================
// BOOKING INFO COMPONENT
// ========================================

const BookingInfo = ({
    icon: Icon,
    label,
    value,
}) => {

    return (

        <div
            className="
                flex
                items-center
                gap-3
            "
        >

            <div
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                "
            >

                <Icon size={18} />

            </div>


            <div>

                <p
                    className="
                        text-xs
                        text-slate-400
                    "
                >
                    {label}
                </p>

                <p
                    className="
                        text-sm
                        font-bold
                        text-slate-800
                    "
                >
                    {value}
                </p>

            </div>

        </div>

    );

};


export default DestinationDetails;