import {
    BadgeCheck,
    Headphones,
    Hotel,
    ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import { hajjPackageHeroData } from "../../../data/HajjAndUmrah/HajjPackageData.js";


const iconMap = {
    ShieldCheck,
    BadgeCheck,
    Hotel,
    Headphones,
};


const HajjPackageHero = () => {
    const {
        breadcrumb,
        title,
        description,
        image,
        trustItems,
    } = hajjPackageHeroData;


    return (
        <section
            className="
                relative
                min-h-[300px]
                overflow-hidden
                bg-[#073d2c]
                lg:min-h-[330px]
            "
        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                "
            />


            {/* Dark Gradient Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#052f23]/95
                    via-[#052f23]/65
                    to-black/10
                "
            />


            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[300px]
                    max-w-7xl
                    flex-col
                    justify-center
                    px-4
                    py-12
                    sm:px-6
                    lg:min-h-[330px]
                    lg:px-8
                "
            >
                {/* Breadcrumb */}
                <div
                    className="
                        mb-5
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-white/80
                    "
                >
                    {breadcrumb.map((item, index) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-2"
                        >
                            {index !== breadcrumb.length - 1 ? (
                                <Link
                                    to={item.path}
                                    className="
                                        transition-colors
                                        duration-300
                                        hover:text-[#f5b642]
                                    "
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-white">
                                    {item.label}
                                </span>
                            )}

                            {index < breadcrumb.length - 1 && (
                                <span className="text-white/50">
                                    ›
                                </span>
                            )}
                        </div>
                    ))}
                </div>


                {/* Title */}
                <h1
                    className="
                        text-4xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-5xl
                        lg:text-[56px]
                        lg:leading-[1.05]
                    "
                >
                    {title}
                </h1>


                {/* Description */}
                <p
                    className="
                        mt-5
                        max-w-2xl
                        text-sm
                        leading-7
                        text-white/90
                        sm:text-base
                    "
                >
                    {description}
                </p>


                {/* Trust Items */}
                <div
                    className="
                        mt-8
                        flex
                        flex-wrap
                        items-center
                        gap-x-8
                        gap-y-4
                    "
                >
                    {trustItems.map((item) => {
                        const Icon = iconMap[item.icon];

                        return (
                            <div
                                key={item.id}
                                className="
                                    flex
                                    items-center
                                    gap-2.5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#e8ad3b]/60
                                        bg-[#e8ad3b]/10
                                        text-[#f5b642]
                                    "
                                >
                                    {Icon && (
                                        <Icon
                                            size={16}
                                            strokeWidth={2}
                                        />
                                    )}
                                </div>

                                <span
                                    className="
                                        text-xs
                                        font-semibold
                                        text-white
                                        sm:text-sm
                                    "
                                >
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


export default HajjPackageHero;