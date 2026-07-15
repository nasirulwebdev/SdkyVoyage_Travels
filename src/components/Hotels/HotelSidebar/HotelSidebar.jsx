import {
    BadgeCheck,
    Headphones,
    ShieldCheck,
    CreditCard,
    ArrowRight,
    MapPin,
} from "lucide-react";

import {
    hotelDestinations,
} from "../../../data/hotels/hotelsData.js";

import hotelPromoImage from "../../../assets/images/hotels/hotelPromo.jpg";

const HotelSidebar = () => {
    const bookingBenefits = [
        {
            id: 1,
            icon: BadgeCheck,
            title: "Best Price Guarantee",
            text: "Find it cheaper? We'll match it.",
        },
        {
            id: 2,
            icon: Headphones,
            title: "24/7 Customer Support",
            text: "We're here whenever you need us.",
        },
        {
            id: 3,
            icon: ShieldCheck,
            title: "Secure Booking",
            text: "Your information is protected.",
        },
        {
            id: 4,
            icon: CreditCard,
            title: "No Hidden Fees",
            text: "Know exactly what you'll pay.",
        },
    ];

    return (
        <div className="space-y-4">

            {/* =====================================
                WHY BOOK WITH US
            ====================================== */}
            <div
                className="
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    p-4
                "
            >
                <h2 className="text-[15px] font-bold text-slate-900">
                    Why Book With Us?
                </h2>

                <div className="mt-4 space-y-4">
                    {bookingBenefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.id}
                                className="flex items-start gap-3"
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
                                        bg-emerald-50
                                        text-emerald-600
                                    "
                                >
                                    <Icon size={17} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-[11px] font-bold text-slate-800">
                                        {benefit.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[9px]
                                            leading-[15px]
                                            text-slate-400
                                        "
                                    >
                                        {benefit.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* =====================================
                PROMOTIONAL IMAGE CARD
            ====================================== */}
            <div
                className="
                    group
                    relative
                    min-h-[285px]
                    overflow-hidden
                    rounded-lg
                    shadow-sm
                "
            >
                {/* BACKGROUND IMAGE */}
                <img
                    src={hotelPromoImage}
                    alt="Hotel special offer"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                    "
                />

                {/* DARK OVERLAY */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/15
                        via-black/35
                        to-black/80
                    "
                />

                {/* PROMO CONTENT */}
                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        p-5
                        text-white
                    "
                >
                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-emerald-500
                            px-2.5
                            py-1
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-white
                        "
                    >
                        Limited Time Offer
                    </span>

                    <h2
                        className="
                            mt-3
                            text-[29px]
                            font-extrabold
                            leading-none
                        "
                    >
                        30% OFF
                    </h2>

                    <h3 className="mt-2 text-[14px] font-bold">
                        Your Next Hotel Stay
                    </h3>

                    <p
                        className="
                            mt-2
                            text-[9px]
                            leading-4
                            text-white/80
                        "
                    >
                        Book your dream stay today and enjoy
                        exclusive savings on selected hotels.
                    </p>

                    <button
                        type="button"
                        className="
                            mt-4
                            flex
                            h-9
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            bg-white
                            px-4
                            text-[10px]
                            font-bold
                            text-emerald-700
                            transition
                            hover:bg-emerald-50
                        "
                    >
                        View Special Offers
                        <ArrowRight size={13} />
                    </button>
                </div>
            </div>

            {/* =====================================
                TOP DESTINATIONS
            ====================================== */}
            <div
                className="
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    p-4
                "
            >
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-[15px] font-bold text-slate-900">
                        Top Destinations
                    </h2>

                    <button
                        type="button"
                        className="
                            text-[9px]
                            font-semibold
                            text-emerald-600
                            transition
                            hover:text-emerald-700
                        "
                    >
                        View All
                    </button>
                </div>

                <div className="space-y-3">
                    {hotelDestinations.map((destination) => (
                        <button
                            key={destination.id}
                            type="button"
                            className="
                                group
                                flex
                                w-full
                                items-center
                                gap-3
                                text-left
                            "
                        >
                            {/* IMAGE */}
                            <div
                                className="
                                    h-[48px]
                                    w-[58px]
                                    shrink-0
                                    overflow-hidden
                                    rounded-md
                                "
                            >
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />
                            </div>

                            {/* INFO */}
                            <div className="min-w-0 flex-1">
                                <h3
                                    className="
                                        truncate
                                        text-[11px]
                                        font-bold
                                        text-slate-800
                                        transition
                                        group-hover:text-emerald-600
                                    "
                                >
                                    {destination.name}
                                </h3>

                                <div
                                    className="
                                        mt-1
                                        flex
                                        items-center
                                        gap-1
                                        text-[9px]
                                        text-slate-400
                                    "
                                >
                                    <MapPin
                                        size={10}
                                        className="text-emerald-600"
                                    />

                                    <span>
                                        {destination.hotels} Hotels
                                    </span>
                                </div>
                            </div>

                            <ArrowRight
                                size={13}
                                className="
                                    shrink-0
                                    text-slate-300
                                    transition
                                    group-hover:translate-x-1
                                    group-hover:text-emerald-600
                                "
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotelSidebar;