import {
    BadgeCheck,
    Headphones,
    ShieldCheck,
    Star,
} from "lucide-react";


// =====================================
// ICON MAP
// =====================================

const iconMap = {
    ShieldCheck,
    BadgeCheck,
    Headphones,
    Star,
};


// =====================================
// DEFAULT DATA
// =====================================

const defaultFeatures = [
    {
        id: 1,
        title: "Trusted Umrah Service",
        description: "Reliable and professional Umrah travel assistance.",
        icon: "ShieldCheck",
    },
    {
        id: 2,
        title: "Verified Packages",
        description: "Carefully selected hotels and quality services.",
        icon: "BadgeCheck",
    },
    {
        id: 3,
        title: "24/7 Support",
        description: "Dedicated assistance throughout your Umrah journey.",
        icon: "Headphones",
    },
    {
        id: 4,
        title: "Best Value",
        description: "Quality Umrah packages at competitive prices.",
        icon: "Star",
    },
];


// =====================================
// COMPONENT
// =====================================

const WhyChooseUmrah = ({
    title = "Why Choose Us?",
    features = defaultFeatures,
}) => {

    return (

        <div
            className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >

            {/* HEADER */}

            <div
                className="
                    border-b
                    border-slate-100
                    px-5
                    py-4
                "
            >

                <h3
                    className="
                        text-lg
                        font-extrabold
                        text-slate-900
                    "
                >
                    {title}
                </h3>

            </div>


            {/* FEATURES */}

            <div className="divide-y divide-slate-100">

                {features.map((item, index) => {

                    const Icon =
                        iconMap[item.icon] ||
                        ShieldCheck;

                    return (

                        <div
                            key={item.id || index}
                            className="
                                group
                                flex
                                gap-3
                                px-5
                                py-4
                                transition-all
                                duration-300
                                hover:bg-emerald-50/70
                            "
                        >

                            {/* ICON */}

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-emerald-50
                                    text-emerald-700
                                    transition-all
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:scale-105
                                    group-hover:bg-emerald-700
                                    group-hover:text-white
                                    group-hover:shadow-md
                                "
                            >

                                <Icon
                                    size={21}
                                    strokeWidth={2}
                                />

                            </div>


                            {/* CONTENT */}

                            <div className="min-w-0">

                                <h4
                                    className="
                                        text-sm
                                        font-bold
                                        text-slate-900
                                        transition-colors
                                        duration-300
                                        group-hover:text-emerald-700
                                    "
                                >
                                    {item.title}
                                </h4>


                                {item.description && (

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        {item.description}
                                    </p>

                                )}

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

};


export default WhyChooseUmrah;