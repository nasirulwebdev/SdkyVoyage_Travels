import {
    BadgeCheck,
    BedDouble,
    CalendarCheck,
    ChevronRight,
    Headphones,
    Home,
} from "lucide-react";

import {
    umrahPackageHeroData,
} from "../../../data/HajjAndUmrah/UmrahPackageData";


const iconMap = {
    BadgeCheck,
    BedDouble,
    CalendarCheck,
    Headphones,
};


const UmrahPackageHero = () => {

    const {
        title,
        subtitle,
        description,
        image,
        breadcrumb,
        highlights = [],
    } = umrahPackageHeroData;


    return (

        <section
            className="
                group
                relative
                min-h-[450px]
                overflow-hidden
                bg-cover
                bg-center
                text-white
            "
            style={{
                backgroundImage: `url(${image})`,
            }}
        >

            {/* Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/85
                    via-black/65
                    to-black/40
                    transition-all
                    duration-700
                    group-hover:from-black/80
                    group-hover:via-black/60
                    group-hover:to-black/35
                "
            />


            {/* Content */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[450px]
                    max-w-[1440px]
                    flex-col
                    items-start
                    justify-center
                    px-4
                    py-14
                    text-left
                    sm:px-6
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
                        justify-start
                        gap-2
                        text-sm
                        font-medium
                        text-white/80
                    "
                >

                    {breadcrumb?.map((item, index) => (

                        <div
                            key={`${item}-${index}`}
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            {index === 0 && (

                                <Home
                                    size={16}
                                    className="
                                        transition
                                        duration-300
                                        hover:scale-110
                                        hover:text-amber-400
                                    "
                                />

                            )}


                            <span
                                className="
                                    cursor-default
                                    transition
                                    duration-300
                                    hover:text-amber-400
                                "
                            >
                                {item}
                            </span>


                            {index < breadcrumb.length - 1 && (

                                <ChevronRight
                                    size={15}
                                    className="text-white/50"
                                />

                            )}

                        </div>

                    ))}

                </div>


                {/* Title */}

                <h1
                    className="
                        max-w-4xl
                        text-4xl
                        font-extrabold
                        leading-tight
                        tracking-tight
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        sm:text-5xl
                        lg:text-[58px]
                    "
                >
                    {title}
                </h1>


                {/* Subtitle */}

                {subtitle && (

                    <p
                        className="
                            mt-5
                            max-w-3xl
                            text-base
                            font-medium
                            leading-7
                            text-white/90
                            sm:text-lg
                            lg:text-xl
                        "
                    >
                        {subtitle}
                    </p>

                )}


                {/* Description */}

                {description && (

                    <p
                        className="
                            mt-2
                            max-w-3xl
                            text-sm
                            leading-6
                            text-white/70
                            sm:text-base
                        "
                    >
                        {description}
                    </p>

                )}


                {/* Hero Feature Icons */}

                {highlights.length > 0 && (

                    <div
                        className="
                            mt-9
                            flex
                            w-full
                            flex-wrap
                            items-center
                            justify-start
                            gap-x-5
                            gap-y-4
                            lg:gap-x-8
                        "
                    >

                        {highlights.map((item, index) => {

                            const Icon = iconMap[item.icon];

                            return (

                                <div
                                    key={`${item.title}-${index}`}
                                    className="
                                        group/item
                                        flex
                                        cursor-default
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-3
                                        py-2
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-white/10
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/15
                                            text-white
                                            backdrop-blur-sm
                                            transition-all
                                            duration-300
                                            group-hover/item:scale-110
                                            group-hover/item:bg-amber-500
                                            group-hover/item:shadow-lg
                                        "
                                    >

                                        {Icon && (

                                            <Icon
                                                size={22}
                                                strokeWidth={2}
                                            />

                                        )}

                                    </div>


                                    <span
                                        className="
                                            whitespace-nowrap
                                            text-sm
                                            font-semibold
                                            text-white/90
                                            transition-colors
                                            duration-300
                                            group-hover/item:text-amber-300
                                            sm:text-base
                                        "
                                    >
                                        {item.title}
                                    </span>

                                </div>

                            );

                        })}

                    </div>

                )}

            </div>

        </section>

    );

};


export default UmrahPackageHero;