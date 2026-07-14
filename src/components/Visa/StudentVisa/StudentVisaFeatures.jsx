import {
    BadgeCheck,
    Clock3,
    Headphones,
    UserRoundCheck,
} from "lucide-react";

const StudentVisaFeatures = () => {
    const features = [
        {
            id: 1,
            title: "Expert Guidance",
            description: "Professional support from experienced visa experts",
            icon: UserRoundCheck,
        },
        {
            id: 2,
            title: "High Visa Success",
            description: "Trusted process with a strong visa success rate",
            icon: BadgeCheck,
        },
        {
            id: 3,
            title: "Quick Processing",
            description: "Fast and efficient application processing",
            icon: Clock3,
        },
        {
            id: 4,
            title: "24/7 Support",
            description: "Our support team is always ready to help you",
            icon: Headphones,
        },
    ];

    return (
        <section className="border-t border-slate-200 bg-slate-50 py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-blue-200
                                    hover:shadow-lg
                                "
                            >
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
                                        group-hover:scale-110
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                    "
                                >
                                    <Icon
                                        size={26}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-slate-900">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-1 text-sm leading-5 text-slate-500">
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

export default StudentVisaFeatures;