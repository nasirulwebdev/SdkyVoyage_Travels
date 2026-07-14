import {
    Plane,
    BadgeDollarSign,
    ShieldCheck,
    Headphones,
} from "lucide-react";


const trustItems = [
    {
        id: 1,
        title: "100+ Countries",
        description: "Visa support worldwide",
        icon: Plane,
    },
    {
        id: 2,
        title: "No Hidden Charges",
        description: "Transparent pricing",
        icon: BadgeDollarSign,
    },
    {
        id: 3,
        title: "Secure Payments",
        description: "100% safe & secure",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "24/7 Support",
        description: "We're here to help",
        icon: Headphones,
    },
];


const TouristVisaTrustBar = () => {
    return (
        <section
            className="
                mx-auto
                max-w-7xl
                px-4
                pb-8
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    grid
                    grid-cols-1
                    gap-4
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    shadow-sm
                    sm:grid-cols-2
                    lg:grid-cols-4
                "
            >
                {trustItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="
                                group
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
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
                                    size={19}
                                    strokeWidth={2}
                                />
                            </div>

                            <div>
                                <h3 className="text-[12px] font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-0.5 text-[10px] text-slate-500">
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


export default TouristVisaTrustBar;