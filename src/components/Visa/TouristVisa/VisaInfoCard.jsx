import {
    CalendarDays,
    Clock3,
    LogIn,
    Timer,
} from "lucide-react";


const iconMap = {
    validity: CalendarDays,
    stayDuration: Timer,
    processingTime: Clock3,
    entryType: LogIn,
};


const VisaInfoCard = ({
    type,
    title,
    description,
}) => {
    const Icon = iconMap[type] || CalendarDays;


    return (
        <div
            className="
                group
                flex
                min-h-[105px]
                cursor-pointer
                items-start
                gap-3
                rounded-lg
                border
                border-slate-200
                bg-white
                px-4
                py-4
                shadow-[0_2px_8px_rgba(15,23,42,0.04)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-[0_10px_25px_rgba(37,99,235,0.12)]
            "
        >
            {/* Icon */}
            <div
                className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-blue-50
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:shadow-md
                    group-hover:shadow-blue-600/20
                "
            >
                <Icon
                    size={16}
                    strokeWidth={2}
                />
            </div>


            {/* Content */}
            <div className="min-w-0 pt-0.5">
                <h3
                    className="
                        text-[13px]
                        font-bold
                        leading-5
                        text-slate-800
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-1
                        text-[11px]
                        leading-[18px]
                        text-slate-500
                    "
                >
                    {description}
                </p>
            </div>
        </div>
    );
};


export default VisaInfoCard;