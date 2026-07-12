import {
    BadgeCheck,
    CalendarCheck2,
    Headphones,
    ShieldCheck,
} from "lucide-react";

// নিজের image path অনুযায়ী import ঠিক করবে
import flightDealImg from "../../../assets/images/flights/flight-deal.png";

const benefits = [
    {
        id: 1,
        icon: ShieldCheck,
        title: "Best Price Guarantee",
        description: "We offer the lowest prices",
    },
    {
        id: 2,
        icon: CalendarCheck2,
        title: "Secure Booking",
        description: "Your data is 100% safe",
    },
    {
        id: 3,
        icon: BadgeCheck,
        title: "Easy & Quick Booking",
        description: "Book in just a few clicks",
    },
    {
        id: 4,
        icon: Headphones,
        title: "24/7 Customer Support",
        description: "We are here to help you",
    },
];

const FlightRightSidebar = () => {
    return (
        <aside className="w-full space-y-3">
            {/* =========================
                FLIGHT DEALS CARD
            ========================== */}
            <div
                className="
                    relative
                    min-h-[250px]
                    overflow-hidden
                    rounded-[9px]
                    bg-gradient-to-br
                    from-[#eaf5ff]
                    to-[#cfe7ff]
                    p-4
                "
            >
                {/* TEXT */}
                <div className="relative z-10 max-w-[145px]">
                    <h3
                        className="
                            text-[16px]
                            
                            font-bold
                            right-2
                            leading-tight
                            text-[#10264a]
                        "
                    >
                        Get Best Flight Deals
                    </h3>

                    <p
                        className="
                            mt-4
                            
                            text-[15px]
                            right-2
                            leading-[1.6]
                            text-[#52627a]
                        "
                    >
                        Subscribe to get amazing offers
                        and flight deals
                    </p>
                </div>

                {/* AIRPLANE WINDOW IMAGE */}
                <img
                    src={flightDealImg}
                    alt="Flight deals"
                    className="
                        absolute
                        right-2
                        top-10
                        h-[115px]
                        w-[92px]
                        object-contain
                    "
                />

                {/* SUBSCRIBE FORM */}
                <form
                    onSubmit={(event) =>
                        event.preventDefault()
                    }
                    className="
                        absolute
                        bottom-4
                        left-4
                        right-4
                        z-20
                        flex
                        h-[38px]
                        overflow-hidden
                        rounded-[6px]
                        bg-white
                    "
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="
                            min-w-0
                            flex-2
                            bg-white
                            px-3
                            text-[12px]
                            text-[#10264a]
                            outline-none
                            placeholder:text-[#a8b4c5]
                        "
                    />

                    <button
                        type="submit"
                        className="
                            shrink-0
                            bg-[#0866f5]
                            px-4
                            text-[12px]
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#0059e8]
                        "
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* =========================
                WHY BOOK WITH US
            ========================== */}
            <div
                className="
                    rounded-[9px]
                    border
                    border-[#e2e8f0]
                    bg-white
                    p-4
                    shadow-[0_3px_12px_rgba(15,35,70,0.03)]
                "
            >
                <h3
                    className="
                        text-[16px]
                        font-bold
                        text-[#10264a]
                    "
                >
                    Why Book With Us?
                </h3>

                <div className="mt-4 space-y-4">
                    {benefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="
                                    flex
                                    items-center
                                    gap-4
                                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        flex
                                        h-[40px]
                                        w-[40px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#edf5ff]
                                        text-[#0866f5]
                                    "
                                >
                                    <Icon
                                        size={19}
                                        strokeWidth={2}
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="min-w-0">
                                    <h4
                                        className="
                                            text-[14px]
                                            font-bold
                                            leading-tight
                                            text-[#10264a]
                                        "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
                                            mt-2
                                            text-[14px]
                                            leading-tight
                                            text-[#090a0b]
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default FlightRightSidebar;