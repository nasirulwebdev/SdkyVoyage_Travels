import { Link } from "react-router-dom";

import {
    ArrowLeft,
    BadgeCheck,
    BookOpen,
    CheckCircle2,
    FileText,
    HeartHandshake,
    Luggage,
    Plane,
    ShieldCheck,
} from "lucide-react";


const guideSections = [
    {
        id: 1,
        icon: FileText,
        title: "Required Documents",
        description:
            "Prepare all necessary documents before starting your Hajj or Umrah journey.",
        items: [
            "Valid passport with sufficient validity",
            "Saudi visa and required travel documents",
            "Recent passport-size photographs",
            "Flight tickets and hotel confirmation",
        ],
    },
    {
        id: 2,
        icon: Luggage,
        title: "Packing Essentials",
        description:
            "Pack light and carry the essential items required for a comfortable journey.",
        items: [
            "Ihram clothing and comfortable footwear",
            "Personal medicines and toiletries",
            "Small prayer mat and essential religious items",
            "Travel adapter and portable charger",
        ],
    },
    {
        id: 3,
        icon: BookOpen,
        title: "Spiritual Preparation",
        description:
            "Learn the important rituals and prepare yourself spiritually before departure.",
        items: [
            "Learn the steps of Hajj or Umrah",
            "Memorize important duas",
            "Understand Ihram rules and restrictions",
            "Prepare yourself with patience and sincerity",
        ],
    },
    {
        id: 4,
        icon: ShieldCheck,
        title: "Health & Safety",
        description:
            "Take necessary precautions to stay healthy and safe throughout your journey.",
        items: [
            "Complete required vaccinations",
            "Carry prescribed medicines",
            "Stay hydrated during the journey",
            "Always follow your group guide",
        ],
    },
];


const HajjUmrahGuide = () => {
    return (
        <main className="min-h-screen bg-[#f7f8f8]">

            {/* HERO */}
            <section
                className="
                    relative
                    overflow-hidden
                    bg-[#073f38]
                    px-4
                    py-20
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        absolute
                        -right-20
                        -top-20
                        h-72
                        w-72
                        rounded-full
                        bg-white/5
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-[1240px]
                    "
                >
                    <Link
                        to="/hajj-umrah"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-white/80
                            transition
                            hover:text-white
                        "
                    >
                        <ArrowLeft size={18} />
                        Back to Packages
                    </Link>

                    <div className="mt-10 max-w-3xl">

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white/10
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-white
                            "
                        >
                            <HeartHandshake size={18} />
                            Complete Travel Guide
                        </div>

                        <h1
                            className="
                                mt-5
                                text-4xl
                                font-bold
                                leading-tight
                                text-white
                                sm:text-5xl
                            "
                        >
                            Preparing for Hajj or Umrah?
                        </h1>

                        <p
                            className="
                                mt-5
                                max-w-2xl
                                text-base
                                leading-8
                                text-white/75
                                sm:text-lg
                            "
                        >
                            Everything you need to know before beginning your
                            spiritual journey to the holy cities of Makkah and
                            Madinah.
                        </p>

                    </div>
                </div>
            </section>


            {/* GUIDE SECTIONS */}
            <section className="px-4 py-16 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-[1240px]">

                    <div className="mb-10 text-center">
                        <span
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-wider
                                text-orange-500
                            "
                        >
                            Journey Preparation
                        </span>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-bold
                                text-gray-900
                            "
                        >
                            Your Complete Preparation Guide
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-3
                                max-w-2xl
                                text-gray-500
                            "
                        >
                            Follow these important guidelines to make your
                            spiritual journey comfortable and well prepared.
                        </p>
                    </div>


                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-6
                            md:grid-cols-2
                        "
                    >
                        {guideSections.map((section) => {

                            const Icon = section.icon;

                            return (
                                <article
                                    key={section.id}
                                    className="
                                        rounded-2xl
                                        border
                                        border-gray-100
                                        bg-white
                                        p-6
                                        shadow-sm
                                        transition
                                        duration-300
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-13
                                            w-13
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[#e8f4f1]
                                            text-[#0b4f46]
                                        "
                                    >
                                        <Icon size={25} />
                                    </div>

                                    <h3
                                        className="
                                            mt-5
                                            text-xl
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        {section.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            leading-7
                                            text-gray-500
                                        "
                                    >
                                        {section.description}
                                    </p>

                                    <div className="mt-5 space-y-3">

                                        {section.items.map((item) => (
                                            <div
                                                key={item}
                                                className="
                                                    flex
                                                    items-start
                                                    gap-3
                                                "
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    className="
                                                        mt-0.5
                                                        shrink-0
                                                        text-orange-500
                                                    "
                                                />

                                                <span
                                                    className="
                                                        text-sm
                                                        leading-6
                                                        text-gray-700
                                                    "
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}

                                    </div>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>


            {/* IMPORTANT NOTICE */}
            <section className="px-4 pb-16 sm:px-6 lg:px-8">

                <div
                    className="
                        mx-auto
                        max-w-[1240px]
                        overflow-hidden
                        rounded-3xl
                        bg-[#073f38]
                        p-8
                        sm:p-10
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-7
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >
                        <div className="max-w-2xl">

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-white/10
                                    text-orange-400
                                "
                            >
                                <BadgeCheck size={26} />
                            </div>

                            <h2
                                className="
                                    mt-5
                                    text-2xl
                                    font-bold
                                    text-white
                                    sm:text-3xl
                                "
                            >
                                Ready for Your Spiritual Journey?
                            </h2>

                            <p
                                className="
                                    mt-3
                                    leading-7
                                    text-white/70
                                "
                            >
                                Explore our Hajj and Umrah packages and choose
                                the package that best matches your travel needs.
                            </p>

                        </div>

                        <Link
                            to="/hajj-umrah"
                            className="
                                inline-flex
                                shrink-0
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-orange-500
                                px-7
                                py-3.5
                                font-bold
                                text-white
                                transition
                                hover:bg-orange-600
                            "
                        >
                            <Plane size={26} />
                            Explore Packages
                        </Link>

                    </div>
                </div>
            </section>

        </main>
    );
};


export default HajjUmrahGuide;