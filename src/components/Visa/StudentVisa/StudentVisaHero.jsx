import {
    BadgeCheck,
    ChevronRight,
    Gauge,
    GraduationCap,
    ShieldCheck,
} from "lucide-react";

import { studentVisaHeroData } from "../../../data/Visa/StudentVisaData.js";

const StudentVisaHero = () => {
    const {
        image,
        breadcrumb,
        title,
        description,
        subDescription,
    } = studentVisaHeroData;

    const features = [
        {
            id: 1,
            title: "High Success Rate",
            icon: BadgeCheck,
        },
        {
            id: 2,
            title: "Fast Processing",
            icon: Gauge,
        },
        {
            id: 3,
            title: "Expert Guidance",
            icon: GraduationCap,
        },
        {
            id: 4,
            title: "Secure & Reliable",
            icon: ShieldCheck,
        },
    ];

    return (
        <section
            className="
                relative
                min-h-[380px]
                overflow-hidden
                bg-slate-100
            "
        >
            {/* Hero Background */}
            <img
            src={image}
            alt="Student Visa"
            className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[center_30%]
            "
        />

            {/* Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-white/60
                    via-white/30
                    to-white/5
                "
            />

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[400px]
                    max-w-7xl
                    items-center
                    px-4
                    py-14
                    sm:px-6
                    lg:px-8
                "
            >
                <div className="max-w-2xl">

                    {/* Breadcrumb */}
                    <div
                        className="
                            mb-6
                            flex
                            flex-wrap
                            items-center
                            gap-1.5
                            text-sm
                            font-semibold
                            text-blue-600
                        "
                    >
                        {breadcrumb.map((item, index) => (
                            <div
                                key={item}
                                className="flex items-center gap-1.5"
                            >
                                <span>{item}</span>

                                {index < breadcrumb.length - 1 && (
                                    <ChevronRight
                                        size={14}
                                        strokeWidth={2.5}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Title */}
                    <h1
                        className="
                            text-4xl
                            font-extrabold
                            tracking-tight
                            text-slate-950
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {title}
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mt-5
                            text-lg
                            font-semibold
                            text-slate-700
                            sm:text-xl
                        "
                    >
                        {description}
                    </p>

                    <p
                        className="
                            mt-1.5
                            text-sm
                            font-medium
                            text-slate-600
                            sm:text-base
                        "
                    >
                        {subDescription}
                    </p>

                    {/* Hero Features */}
                    <div
                        className="
                            mt-10
                            flex
                            flex-wrap
                            items-center
                            gap-x-7
                            gap-y-4
                        "
                    >
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.id}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-600/10
                                            text-blue-600
                                            transition-all
                                            duration-300
                                            group-hover:bg-blue-600
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon
                                            size={17}
                                            strokeWidth={2.2}
                                        />
                                    </div>

                                    <span
                                        className="
                                            text-sm
                                            font-semibold
                                            text-slate-700
                                        "
                                    >
                                        {feature.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentVisaHero;