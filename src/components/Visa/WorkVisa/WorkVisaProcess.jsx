import {
    BriefcaseBusiness,
    FilePenLine,
    FileCheck2,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";

import { workVisaProcessData } from "../../../data/Visa/WorkVisaData";


const iconMap = {
    BriefcaseBusiness,
    FilePenLine,
    FileCheck2,
    BadgeCheck,
};


const WorkVisaProcess = () => {
    return (
        <section
            className="
                relative
                z-20
                bg-[#f8faff]
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                    -translate-y-7
                "
            >
                <div
                    className="
                        grid
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-100
                        bg-white
                        shadow-[0_12px_40px_rgba(15,23,42,0.08)]
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {workVisaProcessData.map((item, index) => {
                        const Icon =
                            iconMap[item.icon] ||
                            BriefcaseBusiness;

                        const isLast =
                            index === workVisaProcessData.length - 1;

                        return (
                            <div
                                key={item.id}
                                className="
                                    group
                                    relative
                                    flex
                                    min-h-[125px]
                                    items-center
                                    justify-center
                                    px-5
                                    py-6
                                "
                            >
                                {/* Divider */}
                                {!isLast && (
                                    <div
                                        className="
                                            absolute
                                            right-0
                                            top-1/2
                                            hidden
                                            h-14
                                            w-px
                                            -translate-y-1/2
                                            bg-slate-200
                                            lg:block
                                        "
                                    />
                                )}


                                {/* Process Content */}
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
                                    {/* Icon */}
                                    <div
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-50
                                            text-blue-600
                                            transition-all
                                            duration-300
                                            group-hover:bg-blue-600
                                            group-hover:text-white
                                            group-hover:shadow-lg
                                            group-hover:shadow-blue-500/25
                                        "
                                    >
                                        <Icon
                                            size={25}
                                            strokeWidth={1.8}
                                        />
                                    </div>


                                    {/* Text */}
                                    <div>
                                        <p
                                            className="
                                                mb-1
                                                text-[11px]
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                                text-blue-600
                                            "
                                        >
                                            Step {item.step}
                                        </p>

                                        <h3
                                            className="
                                                text-sm
                                                font-bold
                                                text-slate-900
                                                sm:text-[15px]
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                leading-5
                                                text-slate-500
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>


                                {/* Arrow */}
                                {!isLast && (
                                    <div
                                        className="
                                            absolute
                                            -right-3
                                            top-1/2
                                            z-10
                                            hidden
                                            h-7
                                            w-7
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-slate-200
                                            bg-white
                                            text-slate-400
                                            shadow-sm
                                            lg:flex
                                        "
                                    >
                                        <ArrowRight
                                            size={13}
                                            strokeWidth={2}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


export default WorkVisaProcess;