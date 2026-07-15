import { useState } from "react";

import {
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    Clock3,
    RefreshCw,
} from "lucide-react";

import {
    workVisaInformationData,
} from "../../../data/Visa/WorkVisaData.js";


const iconMap = {
    CalendarDays,
    BriefcaseBusiness,
    Clock3,
    RefreshCw,
};


const WorkVisaInformation = () => {
    const {
        title,
        description,
        informationCards,
    } = workVisaInformationData;


    // Default first card active
    const [activeCard, setActiveCard] = useState(
        informationCards[0]?.id || null
    );


    const handleCardClick = (id) => {
        setActiveCard(id);
    };


    return (
        <div
            id="work-visa-information"
            className="
                min-h-[200px]
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                sm:p-7
            "
        >
            {/* Heading */}
            <div>
                <h2
                    className="
                        text-2xl
                        font-extrabold
                        text-slate-900
                    "
                >
                    {title}
                </h2>

                <p
                    className="
                        mt-3
                        max-w-3xl
                        text-sm
                        leading-7
                        text-slate-600
                    "
                >
                    {description}
                </p>
            </div>


            {/* Information Cards */}
            <div
                className="
                    mt-7
                    grid
                    gap-4
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >
                {informationCards.map((item) => {
                    const Icon =
                        iconMap[item.icon] ||
                        BriefcaseBusiness;

                    const isActive =
                        activeCard === item.id;


                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() =>
                                handleCardClick(item.id)
                            }
                            className={`
                                group
                                relative
                                cursor-pointer
                                rounded-xl
                                border
                                p-4
                                text-left
                                transition-all
                                duration-300

                                ${
                                    isActive
                                        ? `
                                            -translate-y-1
                                            border-blue-500
                                            bg-blue-50/70
                                            shadow-lg
                                            shadow-blue-100/70
                                        `
                                        : `
                                            border-slate-200
                                            bg-white
                                            hover:-translate-y-1
                                            hover:border-blue-200
                                            hover:shadow-lg
                                            hover:shadow-blue-100/60
                                        `
                                }
                            `}
                        >
                            {/* Active Check */}
                            {isActive && (
                                <CheckCircle2
                                    size={18}
                                    className="
                                        absolute
                                        right-3
                                        top-3
                                        text-blue-600
                                    "
                                />
                            )}


                            {/* Icon */}
                            <div
                                className={`
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    transition
                                    duration-300

                                    ${
                                        isActive
                                            ? `
                                                bg-blue-600
                                                text-white
                                            `
                                            : `
                                                bg-blue-50
                                                text-blue-600
                                                group-hover:bg-blue-600
                                                group-hover:text-white
                                            `
                                    }
                                `}
                            >
                                <Icon
                                    size={20}
                                    strokeWidth={2}
                                />
                            </div>


                            <h3
                                className={`
                                    mt-4
                                    text-sm
                                    font-bold
                                    transition-colors

                                    ${
                                        isActive
                                            ? "text-blue-700"
                                            : "text-slate-900"
                                    }
                                `}
                            >
                                {item.title}
                            </h3>


                            <p
                                className="
                                    mt-1.5
                                    text-xs
                                    leading-5
                                    text-slate-500
                                "
                            >
                                {item.description}
                            </p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};


export default WorkVisaInformation;