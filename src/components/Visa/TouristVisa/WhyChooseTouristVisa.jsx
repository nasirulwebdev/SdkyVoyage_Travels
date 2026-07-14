import {
    BadgeCheck,
    Clock3,
    Headphones,
    ShieldCheck,
} from "lucide-react";


const features = [
    {
        id: 1,
        title: "98% Visa Success Rate",
        description: "High success rate with expert support",
        icon: BadgeCheck,
    },
    {
        id: 2,
        title: "Fast Processing",
        description: "Quick processing and updates",
        icon: Clock3,
    },
    {
        id: 3,
        title: "Expert Visa Consultants",
        description: "Experienced professionals",
        icon: Headphones,
    },
    {
        id: 4,
        title: "Secure & Reliable",
        description: "Your data is 100% safe with us",
        icon: ShieldCheck,
    },
];


const WhyChooseTouristVisa = () => {
    return (
        <div
            className="
                rounded-xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
            "
        >
            <h2
                className="
                    mb-4
                    text-base
                    font-bold
                    text-slate-900
                "
            >
                Why Choose Us?
            </h2>

            <div className="space-y-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.id}
                            className="
                                flex
                                items-start
                                gap-3
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
                                    rounded-lg
                                    bg-blue-50
                                    text-blue-600
                                "
                            >
                                <Icon size={18} />
                            </div>

                            <div>
                                <h3
                                    className="
                                        text-sm
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    {feature.title}
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        leading-5
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
    );
};


export default WhyChooseTouristVisa;