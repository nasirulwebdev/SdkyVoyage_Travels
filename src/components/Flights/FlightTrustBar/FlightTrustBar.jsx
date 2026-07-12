import {
    BadgeCheck,
    Headphones,
    ShieldCheck,
    WalletCards,
} from "lucide-react";

const trustItems = [
    {
        id: 1,
        icon: BadgeCheck,
        title: "Best Price Guarantee",
        description: "Competitive fares",
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: "Secure Booking",
        description: "Protected payments",
    },
    {
        id: 3,
        icon: Headphones,
        title: "24/7 Support",
        description: "We're here to help",
    },
    {
        id: 4,
        icon: WalletCards,
        title: "Easy Payment",
        description: "Multiple payment options",
    },
];

const FlightTrustBar = () => {
    return (
        <section
            className="
                border-y
                border-[#e6ebf2]
                bg-white
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    max-w-[1240px]
                    grid-cols-1
                    px-6
                    sm:grid-cols-2
                    lg:grid-cols-4
                "
            >
                {trustItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className={`
                                flex
                                items-center
                                gap-3
                                px-6
                                py-8

                                ${
                                    index !== 0
                                        ? "lg:border-l lg:border-[#edf1f6]"
                                        : ""
                                }
                            `}
                        >
                            <div
                                className="
                                    flex
                                    h-18
                                    w-18
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#dfe3ec]
                                    text-[#075ee0]
                                "
                            >
                                <Icon size={20} />
                            </div>

                            <div>
                                <h3
                                    className="
                                        text-[16px]
                                        font-bold
                                        text-[#10264a]
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-[15px]
                                        text-[#010101]
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FlightTrustBar;