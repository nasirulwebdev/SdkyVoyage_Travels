// src/components/Visa/TouristVisa/TouristVisaHero.jsx

import {
    BadgeCheck,
    Clock3,
    Headphones,
    ShieldCheck,
} from "lucide-react";

import touristVisaHero from "../../../assets/images/visa/tourist/tourist-visa-hero.jpg";


const TouristVisaHero = () => {
    return (
        <section
            className="
                relative
                min-h-[450px]
                overflow-hidden
                bg-cover
                bg-center
            "
            style={{
                backgroundImage: `url(${touristVisaHero})`,
            }}
        >
            {/* Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-slate-950/70
                    via-slate-900/35
                    to-transparent
                "
            />

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[360px]
                    max-w-7xl
                    flex-col
                    justify-center
                    px-4
                    pb-16
                    pt-10
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Breadcrumb */}
                <div
                    className="
                        mb-5
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-white/80
                    "
                >
                    <span>Home</span>
                    <span>/</span>
                    <span>Visa</span>
                    <span>/</span>
                    <span className="text-white">
                        Tourist Visa
                    </span>
                </div>

                {/* Hero Content */}
                <div className="max-w-xl">
                    <p
                        className="
                            mb-3
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-blue-200
                        "
                    >
                        Explore The World
                    </p>

                    <h1
                        className="
                            text-4xl
                            font-extrabold
                            leading-tight
                            text-white
                            sm:text-5xl
                        "
                    >
                        Tourist Visa
                    </h1>

                    <p
                        className="
                            mt-4
                            max-w-lg
                            text-sm
                            leading-7
                            text-white/90
                            sm:text-base
                        "
                    >
                        Explore the world with ease. We help you get
                        your tourist visa quickly and hassle-free.
                    </p>
                </div>

                {/* Hero Trust Items */}
                <div
                    className="
                        mt-8
                        flex
                        flex-wrap
                        items-center
                        gap-x-6
                        gap-y-3
                        text-xs
                        font-semibold
                        text-white
                        sm:text-sm
                    "
                >
                    <div className="flex items-center gap-2">
                        <BadgeCheck
                            size={17}
                            className="text-blue-300"
                        />
                        <span>High Success Rate</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock3
                            size={17}
                            className="text-blue-300"
                        />
                        <span>Fast Processing</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Headphones
                            size={17}
                            className="text-blue-300"
                        />
                        <span>Expert Guidance</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <ShieldCheck
                            size={17}
                            className="text-blue-300"
                        />
                        <span>Secure & Reliable</span>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TouristVisaHero;