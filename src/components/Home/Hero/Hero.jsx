import { ArrowRight, Plane, Star } from "lucide-react";
import { Link } from "react-router-dom";

import heroBg from "../../../assets/images/hero/hero.jpg";
import dubaiImg from "../../../assets/images/hero/dubai.jpg";
import maldivesImg from "../../../assets/images/hero/maldives.jpg";

const Hero = () => {
    return (
        <section
            className="
                relative
                min-h-[580px]
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
            "
            style={{
                backgroundImage: `url(${heroBg})`,
            }}
        >
            {/* =========================
                BACKGROUND OVERLAY
            ========================== */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-white
                    via-white/75
                    to-white/5
                "
            />

            {/* =========================
                HERO CONTENT
            ========================== */}
            <div
                className="
                    container
                    relative
                    z-10
                    mx-auto
                    px-5
                    lg:px-8
                "
            >
                <div
                    className="
                        grid
                        min-h-[580px]
                        items-center
                        gap-10
                        lg:grid-cols-2
                    "
                >
                    {/* =========================
                        LEFT CONTENT
                    ========================== */}
                    <div className="max-w-2xl py-16 lg:py-20">

                        {/* Badge */}
                        <div
                            className="
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-blue-100/90
                                px-4
                                py-2
                                text-xs
                                font-bold
                                uppercase
                                tracking-wide
                                text-blue-700
                                backdrop-blur-md
                            "
                        >
                            <Plane size={15} />

                            Explore The World
                        </div>

                        {/* Heading */}
                        <h1
                            className="
                                text-4xl
                                font-extrabold
                                leading-[1.05]
                                tracking-tight
                                text-slate-950
                                sm:text-5xl
                                lg:text-6xl
                                xl:text-7xl
                            "
                        >
                            Travel Beyond

                            <span
                                className="
                                    mt-1
                                    block
                                    text-blue-600
                                "
                            >
                                Your Imagination
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className="
                                mt-6
                                max-w-lg
                                text-base
                                leading-7
                                text-slate-600
                                sm:text-lg
                            "
                        >
                            Discover amazing places at exclusive deals and
                            create memories that last a lifetime.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="
                                mt-8
                                flex
                                flex-col
                                gap-4
                                sm:flex-row
                            "
                        >
                            <Link
                                to="/packages"
                                className="
                                    group
                                    inline-flex
                                    min-h-14
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-xl
                                    bg-blue-600
                                    px-7
                                    font-semibold
                                    text-white
                                    shadow-xl
                                    shadow-blue-600/25
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-blue-700
                                "
                            >
                                Book Your Trip

                                <Plane
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />
                            </Link>

                            <Link
                                to="/packages"
                                className="
                                    group
                                    inline-flex
                                    min-h-14
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/70
                                    bg-white/90
                                    px-7
                                    font-semibold
                                    text-slate-900
                                    shadow-lg
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white
                                "
                            >
                                Explore Packages

                                <ArrowRight
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </Link>
                        </div>
                    </div>

                    {/* =========================
                        RIGHT FLOATING CARDS
                    ========================== */}
                    <div
                        className="
                            relative
                            hidden
                            min-h-[500px]
                            lg:block
                        "
                    >
                        {/* Dubai Card */}
                        <div
                            className="
                                absolute
                                right-12
                                top-16
                                w-[285px]
                                rounded-2xl
                                border
                                border-white/60
                                bg-white/95
                                p-3
                                shadow-2xl
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                xl:right-20
                            "
                        >
                            <div className="flex items-center gap-4">

                                <img
                                    src={dubaiImg}
                                    alt="Dubai"
                                    className="
                                        h-24
                                        w-24
                                        rounded-xl
                                        object-cover
                                    "
                                />

                                <div>
                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        Dubai
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-500
                                        "
                                    >
                                        From{" "}
                                        <span
                                            className="
                                                font-bold
                                                text-blue-600
                                            "
                                        >
                                            $520
                                        </span>
                                    </p>

                                    <div
                                        className="
                                            mt-2
                                            flex
                                            items-center
                                            gap-1
                                            text-sm
                                            font-semibold
                                            text-amber-500
                                        "
                                    >
                                        <Star
                                            size={16}
                                            fill="currentColor"
                                        />

                                        4.8
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Maldives Card */}
                        <div
                            className="
                                absolute
                                right-12
                                top-[205px]
                                w-[285px]
                                rounded-2xl
                                border
                                border-white/60
                                bg-white/95
                                p-3
                                shadow-2xl
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                xl:right-20
                            "
                        >
                            <div className="flex items-center gap-4">

                                <img
                                    src={maldivesImg}
                                    alt="Maldives"
                                    className="
                                        h-24
                                        w-24
                                        rounded-xl
                                        object-cover
                                    "
                                />

                                <div>
                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        Maldives
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-500
                                        "
                                    >
                                        From{" "}
                                        <span
                                            className="
                                                font-bold
                                                text-blue-600
                                            "
                                        >
                                            $650
                                        </span>
                                    </p>

                                    <div
                                        className="
                                            mt-2
                                            flex
                                            items-center
                                            gap-1
                                            text-sm
                                            font-semibold
                                            text-amber-500
                                        "
                                    >
                                        <Star
                                            size={16}
                                            fill="currentColor"
                                        />

                                        4.9
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Satisfied Customers Card */}
                        <div
                            className="
                                absolute
                                right-12
                                top-[350px]
                                w-[285px]
                                rounded-2xl
                                border
                                border-white/60
                                bg-white/95
                                px-5
                                py-4
                                shadow-2xl
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                xl:right-20
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-bold
                                    text-slate-900
                                "
                            >
                                Satisfied Customers
                            </p>

                            <div
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                {/* Customer Avatars */}
                                <div className="flex -space-x-3">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-2
                                            border-white
                                            bg-slate-200
                                            text-xs
                                            font-bold
                                            text-slate-700
                                        "
                                    >
                                        JD
                                    </div>

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-2
                                            border-white
                                            bg-blue-100
                                            text-xs
                                            font-bold
                                            text-blue-700
                                        "
                                    >
                                        AM
                                    </div>

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-2
                                            border-white
                                            bg-amber-100
                                            text-xs
                                            font-bold
                                            text-amber-700
                                        "
                                    >
                                        SR
                                    </div>

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-2
                                            border-white
                                            bg-emerald-100
                                            text-xs
                                            font-bold
                                            text-emerald-700
                                        "
                                    >
                                        MK
                                    </div>

                                </div>

                                {/* Customer Count */}
                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-blue-600
                                        text-sm
                                        font-bold
                                        text-white
                                        shadow-lg
                                        shadow-blue-600/30
                                    "
                                >
                                    2K+
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-24
                    bg-gradient-to-t
                    from-white/30
                    to-transparent
                "
            />
        </section>
    );
};

export default Hero;