import {
    BadgeCheck,
    Luggage,
    Plane,
    Users,
    WalletCards,
} from "lucide-react";

import {
    hajjUmrahFeaturesData,
} from "../../data/HajjAndUmrah/HajjAndUmrahData";


const iconMap = {
    Luggage,
    Plane,
    Users,
    WalletCards,
    BadgeCheck,
};


const HajjUmrahFeatures = () => {
    const { items } = hajjUmrahFeaturesData;


    return (
        <section
            className="
                border-t
                border-gray-200
                bg-white
                px-4
                py-10
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    max-w-[1400px]
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-5
                "
            >
                {items.map((item) => {
                    const Icon =
                        iconMap[item.icon] ||
                        BadgeCheck;

                    return (
                        <div
                            key={item.id}
                            className="
                                group
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                p-3
                                transition
                                duration-300
                                hover:-translate-y-1
                            "
                        >
                            {/* ICON */}
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-orange-50
                                    text-orange-500
                                    transition
                                    duration-300
                                    group-hover:bg-orange-500
                                    group-hover:text-white
                                "
                            >
                                <Icon size={23} />
                            </div>


                            {/* CONTENT */}
                            <div>
                                <h3
                                    className="
                                        text-sm
                                        font-bold
                                        leading-5
                                        text-gray-900
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        leading-5
                                        text-gray-500
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


export default HajjUmrahFeatures;