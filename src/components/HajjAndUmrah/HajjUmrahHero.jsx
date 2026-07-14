import {
    BadgeCheck,
    BedDouble,
    Headphones,
    ShieldCheck,
} from "lucide-react";

import { hajjUmrahHeroData } from "../../data/HajjAndUmrah/HajjAndUmrahData.js";


const iconMap = {
    ShieldCheck,
    BadgeCheck,
    BedDouble,
    Headphones,
};


const HajjUmrahHero = () => {
    const {
        title,
        subtitle,
        description,
        image,
        benefits,
    } = hajjUmrahHeroData;


    return (
        <section
            className="
                relative
                min-h-[420px]
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
            "
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            {/* Dark Green Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[linear-gradient(90deg,rgba(5,54,48,0.96)_0%,
                    rgba(5,54,48,0.88)_42%,rgba(5,54,48,0.48)_72%,rgba
                    (5,54,48,0.25)_100%)]
                "
            />


            {/* Hero Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[420px]
                    w-full
                    max-w-[1280px]
                    items-center
                    px-4
                    pb-14
                    pt-14
                    sm:px-6
                    lg:px-8
                "
            >
                <div className="max-w-[700px]">

                    {/* Title */}
                    <h1
                        className="
                            text-[34px]
                            font-extrabold
                            leading-[1.12]
                            tracking-[-0.02em]
                            text-white
                            sm:text-[42px]
                            lg:text-[52px]
                        "
                    >
                        {title}
                    </h1>


                    {/* Subtitle */}
                    <p
                        className="
                            mt-3
                            text-[19px]
                            font-semibold
                            text-orange-400
                            sm:text-[22px]
                        "
                    >
                        {subtitle}
                    </p>


                    {/* Description */}
                    <p
                        className="
                            mt-4
                            max-w-[610px]
                            text-[14px]
                            leading-7
                            text-white/90
                            sm:text-[15px]
                        "
                    >
                        {description}
                    </p>


                    {/* Benefits */}
                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-2
                            gap-x-5
                            gap-y-5
                            sm:grid-cols-4
                            sm:gap-x-7
                        "
                    >
                        {benefits.map((benefit) => {
                            const Icon = iconMap[benefit.icon];

                            return (
                                <div
                                    key={benefit.id}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    {/* Icon */}
                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-orange-500
                                            text-white
                                            shadow-md
                                        "
                                    >
                                        {Icon && (
                                            <Icon
                                                size={20}
                                                strokeWidth={2}
                                            />
                                        )}
                                    </div>


                                    {/* Text */}
                                    <div>
                                        <p
                                            className="
                                                text-[12px]
                                                font-semibold
                                                leading-[17px]
                                                text-white
                                            "
                                        >
                                            {benefit.title}
                                        </p>

                                        <p
                                            className="
                                                text-[12px]
                                                font-semibold
                                                leading-[17px]
                                                text-white
                                            "
                                        >
                                            {benefit.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};


export default HajjUmrahHero;