import {
    ArrowUpRight,
    BookOpen,
    FileCheck2,
    HeartHandshake,
    Map,
} from "lucide-react";


const iconMap = {
    BookOpen,
    FileCheck2,
    HeartHandshake,
    Map,
};


const defaultResources = [
    {
        id: 1,
        title: "Umrah Guide",
        description: "Complete step-by-step Umrah guide",
        icon: "BookOpen",
        link: "/hajj-umrah/umrah-guide",
    },
    {
        id: 2,
        title: "Visa Requirements",
        description: "Check required documents and visa details",
        icon: "FileCheck2",
        link: "/visa",
    },
    {
        id: 3,
        title: "Travel Preparation",
        description: "Important tips before your Umrah journey",
        icon: "HeartHandshake",
        link: "/hajj-umrah/travel-preparation",
    },
    {
        id: 4,
        title: "Makkah & Madinah Guide",
        description: "Explore important places and landmarks",
        icon: "Map",
        link: "/hajj-umrah/destination-guide",
    },
];


const UmrahResources = ({
    title = "Umrah Resources",
    resources = defaultResources,
}) => {


    // =====================================
    // RESOURCE CLICK
    // =====================================

    const handleResourceClick = (link) => {

        if (!link) {
            return;
        }

        window.location.href = link;

    };


    return (

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

            {/* HEADER */}

            <div
                className="
                    border-b
                    border-slate-100
                    px-5
                    py-4
                "
            >

                <h3
                    className="
                        text-lg
                        font-extrabold
                        text-slate-900
                    "
                >
                    {title}
                </h3>

            </div>


            {/* RESOURCE LIST */}

            <div className="p-3">

                {resources.map((item, index) => {

                    const Icon =
                        iconMap[item.icon] ||
                        BookOpen;


                    return (

                        <button
                            key={item.id || index}
                            type="button"
                            onClick={() =>
                                handleResourceClick(
                                    item.link
                                )
                            }
                            className="
                                group
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                px-3
                                py-3.5
                                text-left
                                transition-all
                                duration-300
                                hover:bg-emerald-50
                            "
                        >

                            {/* ICON */}

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-emerald-50
                                    text-emerald-700
                                    transition-all
                                    duration-300
                                    group-hover:scale-105
                                    group-hover:bg-emerald-700
                                    group-hover:text-white
                                    group-hover:shadow-md
                                "
                            >

                                <Icon
                                    size={20}
                                    strokeWidth={2}
                                />

                            </div>


                            {/* CONTENT */}

                            <div
                                className="
                                    min-w-0
                                    flex-1
                                "
                            >

                                <h4
                                    className="
                                        text-sm
                                        font-bold
                                        text-slate-800
                                        transition-colors
                                        duration-300
                                        group-hover:text-emerald-700
                                    "
                                >
                                    {item.title}
                                </h4>


                                {item.description && (

                                    <p
                                        className="
                                            mt-1
                                            line-clamp-2
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        {item.description}
                                    </p>

                                )}

                            </div>


                            {/* ARROW */}

                            <ArrowUpRight
                                size={17}
                                className="
                                    shrink-0
                                    text-slate-400
                                    transition-all
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    group-hover:text-emerald-700
                                "
                            />

                        </button>

                    );

                })}

            </div>

        </div>

    );

};


export default UmrahResources;