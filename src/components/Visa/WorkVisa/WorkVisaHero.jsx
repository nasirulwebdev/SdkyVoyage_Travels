import {
    BadgeCheck,
    ChevronRight,
    CircleCheck,
    Gauge,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { workVisaHeroData } from "../../../data/Visa/WorkVisaData.js";


const highlightIcons = {
    "High Success Rate": BadgeCheck,
    "Fast Processing": Gauge,
    "Expert Guidance": Sparkles,
    "Secure & Reliable": ShieldCheck,
};


const WorkVisaHero = () => {
    const {
        breadcrumb,
        title,
        description,
        image,
        highlights,
    } = workVisaHeroData;


    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#eaf5ff]
            "
        >
            {/* ============================= */}
            {/* HERO BACKGROUND IMAGE */}
            {/* ============================= */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt="Work Visa"
                    className="
                        h-full
                        w-full
                        object-cover
                        object-center
                    "
                />

                {/* Left readability overlay */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-white/95
                        via-white/65
                        to-transparent
                    "
                />

                {/* Soft blue overlay */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-blue-100/10
                    "
                />
            </div>


            {/* ============================= */}
            {/* HERO CONTENT */}
            {/* ============================= */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[390px]
                    max-w-7xl
                    items-center
                    px-4
                    py-12
                    sm:px-6
                    lg:px-8
                    lg:py-16
                "
            >
                <div className="w-full max-w-2xl">

                    {/* ============================= */}
                    {/* BREADCRUMB */}
                    {/* ============================= */}
                    <nav
                        aria-label="Breadcrumb"
                        className="
                            mb-7
                            flex
                            flex-wrap
                            items-center
                            gap-1.5
                            text-xs
                            font-medium
                        "
                    >
                        {breadcrumb.map((item, index) => {
                            const isLast =
                                index === breadcrumb.length - 1;

                            return (
                                <div
                                    key={item.id}
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                    "
                                >
                                    {isLast ? (
                                        <span className="text-slate-500">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className="
                                                text-blue-600
                                                transition
                                                duration-200
                                                hover:text-blue-800
                                            "
                                        >
                                            {item.label}
                                        </Link>
                                    )}

                                    {!isLast && (
                                        <ChevronRight
                                            size={13}
                                            strokeWidth={2}
                                            className="text-slate-400"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </nav>


                    {/* ============================= */}
                    {/* TITLE */}
                    {/* ============================= */}
                    <h1
                        className="
                            text-4xl
                            font-extrabold
                            tracking-tight
                            text-slate-900
                            sm:text-5xl
                            lg:text-[56px]
                            lg:leading-[1.05]
                        "
                    >
                        {title}
                    </h1>


                    {/* ============================= */}
                    {/* DESCRIPTION */}
                    {/* ============================= */}
                    <p
                        className="
                            mt-5
                            max-w-xl
                            text-sm
                            font-medium
                            leading-7
                            text-slate-600
                            sm:text-base
                        "
                    >
                        {description}
                    </p>


                    {/* ============================= */}
                    {/* HIGHLIGHTS */}
                    {/* ============================= */}
                    <div
                        className="
                            mt-9
                            flex
                            flex-wrap
                            items-center
                            gap-x-5
                            gap-y-3
                        "
                    >
                        {highlights.map((item) => {
                            const Icon =
                                highlightIcons[item.label] ||
                                CircleCheck;

                            return (
                                <div
                                    key={item.id}
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                        text-xs
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    <span
                                        className="
                                            flex
                                            h-5
                                            w-5
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-600
                                            text-white
                                            shadow-sm
                                            shadow-blue-500/30
                                        "
                                    >
                                        <Icon
                                            size={11}
                                            strokeWidth={2.4}
                                        />
                                    </span>

                                    <span>
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>


            {/* ============================= */}
            {/* BOTTOM SOFT BORDER */}
            {/* ============================= */}
            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-blue-200
                    to-transparent
                "
            />
        </section>
    );
};


export default WorkVisaHero;