import {
    ChevronRight,
    ShieldCheck,
    BadgeCheck,
    Headphones,
} from "lucide-react";

import { Link } from "react-router-dom";
import resortHero from "../../../../assets/images/hotels/resorts/resortHero.jpg";

const ResortHero = () => {
    return (
        <section
            className="
                relative
                min-h-[390px]
                overflow-hidden
                bg-gradient-to-r
                bg-cover
                bg-center
                bg-no-repeat
            "
        >
             {/* HERO BACKGROUND IMAGE */}
            <img
                src={resortHero}
                alt="Luxury resort"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r
            "/>

            {/* তোমার existing Hero content */}
            <div className="relative z-10">
                ...
            </div>
            {/* DECORATIVE BACKGROUND */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-32
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-emerald-500/10
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    left-[30%]
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-teal-400/10
                    blur-3xl
                "
            />

            {/* CONTENT */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1280px]
                    px-4
                    pb-20
                    pt-10
                    sm:px-6
                    lg:px-8
                    lg:pb-24
                    lg:pt-12
                "
            >
                {/* BREADCRUMB */}
                <nav
                    aria-label="Breadcrumb"
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-1.5
                        text-[11px]
                    "
                >
                    <Link
                        to="/"
                        className="
                            text-white/65
                            transition
                            hover:text-white
                        "
                    >
                        Home
                    </Link>

                    <ChevronRight
                        size={12}
                        className="text-white/40"
                    />

                    <Link
                        to="/hotels"
                        className="
                            text-white/65
                            transition
                            hover:text-white
                        "
                    >
                        Hotels
                    </Link>

                    <ChevronRight
                        size={12}
                        className="text-white/40"
                    />

                    <span className="font-semibold text-emerald-300">
                        Resorts
                    </span>
                </nav>

                {/* MAIN HERO CONTENT */}
                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-8
                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                    "
                >
                    {/* LEFT */}
                    <div className="max-w-2xl">
                        <span
                            className="
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-emerald-300/20
                                bg-white/10
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-emerald-200
                                backdrop-blur-sm
                            "
                        >
                            Luxury Resort Collection
                        </span>

                        <h1
                            className="
                                mt-4
                                text-3xl
                                font-extrabold
                                leading-tight
                                tracking-tight
                                text-white
                                sm:text-4xl
                                lg:text-[46px]
                            "
                        >
                            Find Your Perfect
                            <span className="text-emerald-300">
                                {" "}Resort Escape
                            </span>
                        </h1>

                        <p
                            className="
                                mt-4
                                max-w-xl
                                text-[12px]
                                leading-6
                                text-white/70
                                sm:text-[13px]
                            "
                        >
                            Discover handpicked luxury resorts,
                            beachfront retreats, and unforgettable
                            stays in the world's most beautiful
                            destinations.
                        </p>
                    </div>

                    {/* TRUST FEATURES */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-3
                            sm:grid-cols-3
                            lg:min-w-[470px]
                        "
                    >
                        <TrustItem
                            icon={BadgeCheck}
                            title="Best Price"
                            text="Guaranteed rates"
                        />

                        <TrustItem
                            icon={ShieldCheck}
                            title="Secure Booking"
                            text="Safe & protected"
                        />

                        <TrustItem
                            icon={Headphones}
                            title="24/7 Support"
                            text="Always here for you"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ==============================================
// TRUST ITEM
// ==============================================

const TrustItem = ({
    icon: Icon,
    title,
    text,
}) => {
    return (
        <div
            className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.07]
                px-4
                py-3
                backdrop-blur-sm
            "
        >
            <div
                className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-400/15
                    text-emerald-300
                "
            >
                <Icon size={17} />
            </div>

            <div>
                <h3 className="text-[10px] font-bold text-white">
                    {title}
                </h3>

                <p className="mt-0.5 text-[8px] text-white/55">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ResortHero;