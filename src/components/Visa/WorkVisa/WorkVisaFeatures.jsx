import {
    BadgeCheck,
    FileCheck2,
    Headphones,
    ShieldCheck,
} from "lucide-react";

import { workVisaFeaturesData } from "../../../data/Visa/WorkVisaData";


const iconMap = {
    BadgeCheck,
    FileCheck2,
    ShieldCheck,
    Headphones,
};


const WorkVisaFeatures = () => {
    return (
        <section
            className="
                border-t
                border-slate-200
                bg-[#f8faff]
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
                    max-w-7xl
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-4
                "
            >
                {workVisaFeaturesData.map((feature, index) => {
                    const Icon =
                        iconMap[feature.icon] ||
                        BadgeCheck;

                    return (
                        <div
                            key={feature.id}
                            className="
                                group
                                relative
                                flex
                                items-center
                                justify-center
                                gap-4
                                px-5
                                py-4
                            "
                        >
                            {/* Right Divider */}
                            {index <
                                workVisaFeaturesData.length - 1 && (
                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-1/2
                                        hidden
                                        h-12
                                        w-px
                                        -translate-y-1/2
                                        bg-slate-200
                                        lg:block
                                    "
                                />
                            )}


                            {/* Icon */}
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue-100
                                    text-blue-600
                                    transition-all
                                    duration-300
                                    group-hover:bg-blue-600
                                    group-hover:text-white
                                    group-hover:shadow-lg
                                    group-hover:shadow-blue-600/20
                                "
                            >
                                <Icon
                                    size={22}
                                    strokeWidth={2}
                                />
                            </div>


                            {/* Content */}
                            <div>
                                <h3
                                    className="
                                        text-sm
                                        font-bold
                                        text-slate-900
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
        </section>
    );
};


export default WorkVisaFeatures;