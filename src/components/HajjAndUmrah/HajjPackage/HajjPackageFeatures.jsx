import {
    CalendarCheck,
    CreditCard,
    Luggage,
    Plane,
    Users,
} from "lucide-react";

import { hajjPackageFeaturesData } from "../../../data/HajjAndUmrah/HajjPackageData";


const iconMap = {
    Luggage,
    Plane,
    Users,
    CreditCard,
    CalendarCheck,
};


const HajjPackageFeatures = () => {
    return (
        <section
            className="
                border-t
                border-[#e8e1d6]
                bg-white
            "
        >
            <div
                className="
                    mx-auto
                    max-w-[1440px]
                    px-4
                    py-10
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-5
                    "
                >
                    {hajjPackageFeaturesData.map(
                        (feature) => {
                            const Icon =
                                iconMap[feature.icon] ||
                                Luggage;

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
                                        border-[#eee8de]
                                        bg-[#faf8f3]
                                        p-4
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:border-[#d8bd86]
                                        hover:bg-white
                                        hover:shadow-[0_14px_35px_rgba(24,57,47,0.10)]
                                    "
                                >
                                    {/* Icon */}
                                    <div
                                        className="
                                            relative
                                            flex
                                            h-14
                                            w-14
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-2xl
                                            bg-[#f1e6d2]
                                            text-[#b68430]
                                            transition-all
                                            duration-500
                                            group-hover:-translate-y-1
                                            group-hover:rotate-6
                                            group-hover:scale-110
                                            group-hover:bg-[#0b4d3b]
                                            group-hover:text-white
                                            group-hover:shadow-[0_10px_25px_rgba(11,77,59,0.25)]
                                        "
                                    >
                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                scale-0
                                                rounded-2xl
                                                bg-white/10
                                                transition-transform
                                                duration-500
                                                group-hover:scale-100
                                            "
                                        />

                                        <Icon
                                            size={25}
                                            strokeWidth={1.8}
                                            className="
                                                relative
                                                z-10
                                                transition-transform
                                                duration-500
                                                group-hover:scale-110
                                            "
                                        />
                                    </div>


                                    {/* Content */}
                                    <div className="min-w-0">
                                        <h3
                                            className="
                                                text-sm
                                                font-bold
                                                leading-5
                                                text-[#173c30]
                                                transition-colors
                                                duration-300
                                                group-hover:text-[#b68430]
                                            "
                                        >
                                            {feature.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                leading-5
                                                text-[#75817d]
                                            "
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};


export default HajjPackageFeatures;