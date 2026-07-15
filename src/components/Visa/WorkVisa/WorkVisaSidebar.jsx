import {
    BadgeCheck,
    Clock3,
    Headphones,
    ShieldCheck,
    Users,
} from "lucide-react";

import {
    popularWorkDestinations,
    workVisaWhyChooseUsData,
} from "../../../data/Visa/WorkVisaData.js";


const iconMap = {
    BadgeCheck,
    Clock3,
    Users,
    ShieldCheck,
    Headphones,
};


const WorkVisaSidebar = () => {

    // Popular destination click
    const handleDestinationClick = (country) => {

        // Selected country WorkVisaCountries component-এ পাঠাবে
        window.dispatchEvent(
            new CustomEvent(
                "workVisaDestinationSelect",
                {
                    detail: {
                        country,
                    },
                }
            )
        );

        // Countries section-এ scroll করবে
        setTimeout(() => {
            const section =
                document.getElementById(
                    "work-visa-countries"
                );

            section?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };


    // View All Countries
    const handleViewAllCountries = () => {

        // Search/filter reset করার event
        window.dispatchEvent(
            new CustomEvent(
                "workVisaViewAllCountries"
            )
        );

        setTimeout(() => {
            const section =
                document.getElementById(
                    "work-visa-countries"
                );

            section?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };


    return (
        <aside className="space-y-6">

            {/* Popular Work Destinations */}
            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                "
            >
                <div className="border-b border-slate-100 px-5 py-5">
                    <h3 className="text-lg font-bold text-slate-900">
                        Popular Work Destinations
                    </h3>
                </div>


                <div className="divide-y divide-slate-100">
                    {popularWorkDestinations.map((visa) => (
                        <button
                            key={visa.id}
                            type="button"
                            onClick={() =>
                                handleDestinationClick(
                                    visa.country
                                )
                            }
                            className="
                                group
                                flex
                                w-full
                                cursor-pointer
                                items-center
                                gap-3
                                px-5
                                py-3.5
                                text-left
                                transition
                                duration-200
                                hover:bg-blue-50/70
                            "
                        >
                            {/* Country Image */}
                            <img
                                src={visa.countryImage}
                                alt={visa.country}
                                className="
                                    h-9
                                    w-12
                                    rounded-md
                                    object-cover
                                "
                            />


                            {/* Flag */}
                            <img
                                src={visa.flagImage}
                                alt={`${visa.country} flag`}
                                className="
                                    h-5
                                    w-7
                                    rounded-sm
                                    object-cover
                                    shadow-sm
                                "
                            />


                            <span
                                className="
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    transition
                                    group-hover:text-blue-600
                                "
                            >
                                {visa.country}
                            </span>
                        </button>
                    ))}
                </div>


                {/* View All Countries */}
                <div className="p-4">
                    <button
                        type="button"
                        onClick={handleViewAllCountries}
                        className="
                            flex
                            w-full
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-blue-600
                            px-4
                            py-2.5
                            text-sm
                            font-bold
                            text-blue-600
                            transition
                            duration-200
                            hover:bg-blue-600
                            hover:text-white
                        "
                    >
                        View All Countries
                    </button>
                </div>
            </div>


            {/* Why Choose Us */}
            <div
                className="
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#0759d9]
                    to-[#0b42a4]
                    p-5
                    text-white
                    shadow-lg
                    shadow-blue-900/10
                "
            >
                <h3 className="text-lg font-bold">
                    {workVisaWhyChooseUsData.title}
                </h3>


                <div className="mt-5 space-y-5">
                    {workVisaWhyChooseUsData.items.map(
                        (item) => {

                            const Icon =
                                iconMap[item.icon] ||
                                BadgeCheck;

                            return (
                                <div
                                    key={item.id}
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white/15
                                        "
                                    >
                                        <Icon
                                            size={18}
                                            strokeWidth={2}
                                        />
                                    </div>


                                    <div>
                                        <h4 className="text-sm font-bold">
                                            {item.title}
                                        </h4>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                leading-5
                                                text-blue-100
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>

        </aside>
    );
};


export default WorkVisaSidebar;