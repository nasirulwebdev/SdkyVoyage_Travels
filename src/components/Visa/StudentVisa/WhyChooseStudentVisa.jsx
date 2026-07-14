import {
    BadgeCheck,
    Clock3,
    Headphones,
    ShieldCheck,
} from "lucide-react";

const WhyChooseStudentVisa = () => {
    const features = [
        {
            id: 1,
            title: "Expert Guidance",
            description: "Professional visa support",
            icon: BadgeCheck,
        },
        {
            id: 2,
            title: "Fast Processing",
            description: "Quick application handling",
            icon: Clock3,
        },
        {
            id: 3,
            title: "Secure Process",
            description: "Your documents stay protected",
            icon: ShieldCheck,
        },
        {
            id: 4,
            title: "24/7 Support",
            description: "We're always here to help",
            icon: Headphones,
        },
    ];

    return (
        <div
            className="
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-blue-800
                p-6
                text-white
                shadow-lg
            "
        >
            <h3 className="text-xl font-bold">
                Why Choose Us?
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100">
                Complete support for your student visa journey.
            </p>

            <div className="mt-6 space-y-5">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.id}
                            className="flex items-start gap-3"
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
                                    bg-white/15
                                    backdrop-blur-sm
                                "
                            >
                                <Icon
                                    size={20}
                                    strokeWidth={2}
                                />
                            </div>

                            <div>
                                <h4 className="text-sm font-bold">
                                    {feature.title}
                                </h4>

                                <p className="mt-1 text-xs leading-5 text-blue-100">
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

export default WhyChooseStudentVisa;