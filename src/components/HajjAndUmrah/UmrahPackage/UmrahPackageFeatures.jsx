import {
    BadgeCheck,
    Headphones,
    ShieldCheck,
    WalletCards,
} from "lucide-react";

import {
    umrahPackageFeaturesData,
} from "../../../data/HajjAndUmrah/UmrahPackageData";


const iconMap = {
    ShieldCheck,
    BadgeCheck,
    Headphones,
    WalletCards,
};


const UmrahPackageFeatures = () => {

    return (

        <section className="bg-white py-14 lg:py-16">

            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1440px]
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                {/* SECTION HEADER */}

                <div className="mx-auto max-w-2xl text-center">

                    <span
                        className="
                            text-sm
                            font-extrabold
                            uppercase
                            tracking-[0.2em]
                            text-emerald-700
                        "
                    >
                        Why Travel With Us
                    </span>

                    <h2
                        className="
                            mt-3
                            text-3xl
                            font-extrabold
                            text-slate-900
                            sm:text-4xl
                        "
                    >
                        A Trusted Umrah Journey
                    </h2>

                    <p
                        className="
                            mt-4
                            text-base
                            leading-7
                            text-slate-500
                        "
                    >
                        We provide complete support and reliable
                        services to make your sacred journey
                        comfortable and stress-free.
                    </p>

                </div>


                {/* FEATURES */}

                <div
                    className="
                        mt-10
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {umrahPackageFeaturesData.map(
                        (item, index) => {

                            const Icon = iconMap[item.icon];

                            return (

                                <article
                                    key={
                                        item.id ||
                                        `${item.title}-${index}`
                                    }
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-6
                                        text-center
                                        shadow-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-emerald-200
                                        hover:shadow-xl
                                    "
                                >

                                    {/* ICON */}

                                    <div
                                        className="
                                            mx-auto
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-emerald-50
                                            text-emerald-700
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:bg-emerald-700
                                            group-hover:text-white
                                            group-hover:rotate-3
                                        "
                                    >
                                        {Icon && (
                                            <Icon
                                                size={30}
                                                strokeWidth={1.8}
                                            />
                                        )}
                                    </div>


                                    {/* TITLE */}

                                    <h3
                                        className="
                                            mt-5
                                            text-lg
                                            font-extrabold
                                            text-slate-900
                                            transition-colors
                                            duration-300
                                            group-hover:text-emerald-700
                                        "
                                    >
                                        {item.title}
                                    </h3>


                                    {/* DESCRIPTION */}

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-6
                                            text-slate-500
                                        "
                                    >
                                        {item.description}
                                    </p>

                                </article>

                            );

                        }
                    )}

                </div>

            </div>

        </section>

    );

};


export default UmrahPackageFeatures;