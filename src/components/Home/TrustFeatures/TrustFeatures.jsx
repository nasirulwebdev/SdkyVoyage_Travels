import {
    ShieldCheck,
    Headphones,
    BadgeCheck,
    Star,
} from "lucide-react";

const features = [
    {
        id: 1,
        title: "Best Price Guarantee",
        description: "Get the best prices",
        icon: ShieldCheck,
    },
    {
        id: 2,
        title: "24/7 Customer Support",
        description: "We are here to help anytime",
        icon: Headphones,
    },
    {
        id: 3,
        title: "Secure Booking",
        description: "Book with confidence",
        icon: BadgeCheck,
    },
    {
        id: 4,
        title: "Trusted by Millions",
        description: "2M+ happy customers",
        icon: Star,
    },
];

const TrustFeatures = () => {
    return (
        <section className="border-y border-slate-200 bg-white">
            <div className="container mx-auto px-5">
                <div
                    className="
                        grid
                        grid-cols-1
                        divide-y
                        divide-slate-200
                        sm:grid-cols-2
                        sm:divide-y-0
                        lg:grid-cols-4
                        lg:divide-x
                    "
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-4
                                    px-4
                                    py-6
                                    transition-all
                                    duration-300
                                    hover:bg-blue-50/50
                                    lg:px-6
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-blue-50
                                        text-blue-600
                                        transition-all
                                        duration-300
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                        group-hover:shadow-lg
                                    "
                                >
                                    <Icon size={25} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3
                                        className="
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-500
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

export default TrustFeatures;