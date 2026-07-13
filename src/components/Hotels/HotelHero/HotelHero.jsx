import {
    ChevronRight,
    BadgeCheck,
    Headphones,
    CreditCard,
} from "lucide-react";

import { Link } from "react-router-dom";

import hotelHero from "../../../assets/images/hotels/hotelHero.jpg";

const HotelHero = () => {
    const trustFeatures = [
        {
            id: 1,
            icon: BadgeCheck,
            title: "Best Price Guarantee",
            description: "Find it cheaper? We'll match it.",
        },
        {
            id: 2,
            icon: Headphones,
            title: "24/7 Customer Support",
            description: "We're here whenever you need us.",
        },
        {
            id: 3,
            icon: CreditCard,
            title: "Secure Booking",
            description: "Your payment is safe with us.",
        },
    ];

    return (
        <section
            className="
                relative
                min-h-[390px]
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
            "
            style={{
                backgroundImage: `url(${hotelHero})`,
            }}
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0" />

            {/* SOFT GRADIENT OVERLAY */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#061426]/75
                    via-[#07182a]/45
                    to-[#07182a]/30
                "
            />

            {/* HERO CONTENT */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[390px]
                    max-w-[1240px]
                    flex-col
                    justify-center
                    px-4
                    pb-10
                    pt-10
                    sm:px-6
                    lg:px-8
                "
            >
                {/* BREADCRUMB */}
                <div
                    className="
                        mb-6
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-white/80
                    "
                >
                    <Link
                        to="/"
                        className="
                            transition-colors
                            duration-200
                            hover:text-white
                        "
                    >
                        Home
                    </Link>

                    <ChevronRight
                        size={15}
                        strokeWidth={2}
                        className="text-white/60"
                    />

                    <span className="text-white">
                        Hotels
                    </span>
                </div>

                {/* TITLE */}
                <h1
                    className="
                        max-w-[850px]
                        text-[34px]
                        font-extrabold
                        leading-[1.15]
                        tracking-[-0.02em]
                        text-white
                        sm:text-[42px]
                        lg:text-[50px]
                    "
                >
                    Find Your Perfect Stay
                </h1>

                {/* SUBTITLE */}
                <p
                    className="
                        mt-4
                        max-w-[720px]
                        text-[15px]
                        font-normal
                        leading-7
                        text-white/85
                        sm:text-[16px]
                    "
                >
                    Search and compare the best hotels worldwide.
                    From luxury resorts to budget-friendly stays,
                    find the perfect accommodation for your journey.
                </p>

                {/* TRUST FEATURES */}
                <div
                    className="
                        mt-8
                        grid
                        max-w-[900px]
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-8
                    "
                >
                    {trustFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/15
                                        backdrop-blur-sm
                                    "
                                >
                                    <Icon
                                        size={20}
                                        strokeWidth={2}
                                        className="text-white"
                                    />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3
                                        className="
                                            text-[14px]
                                            font-bold
                                            leading-5
                                            text-white
                                        "
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-0.5
                                            text-[11px]
                                            leading-4
                                            text-white/70
                                        "
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HotelHero;