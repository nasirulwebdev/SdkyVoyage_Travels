import {
    CheckCircle2,
    FileCheck2,
    Globe2,
    Send,
} from "lucide-react";

const StudentVisaProcess = () => {
    const processSteps = [
        {
            id: 1,
            step: "Step 1",
            title: "Choose Country",
            description: "Select your preferred study destination",
            icon: Globe2,
        },
        {
            id: 2,
            step: "Step 2",
            title: "Apply Online",
            description: "Complete your student visa application",
            icon: Send,
        },
        {
            id: 3,
            step: "Step 3",
            title: "Document Check",
            description: "Our experts verify your documents",
            icon: FileCheck2,
        },
        {
            id: 4,
            step: "Step 4",
            title: "Get Your Visa",
            description: "Receive your approved student visa",
            icon: CheckCircle2,
        },
    ];

    return (
        <section className="relative z-20 bg-slate-50 text-center">
            <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">

                {/* Process Card */}
                <div
                    className="
                        relative
                        -mt-10
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        shadow-[0_15px_45px_rgba(15,23,42,0.10)]
                    "
                >
                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {processSteps.map((item, index) => {
                            const Icon = item.icon;

                            return (
                               <div
                                    key={item.id}
                                    className="
                                        group
                                        relative
                                        flex
                                        min-h-[110px]
                                        flex-col
                                        items-center
                                        justify-center
                                        px-6
                                        py-7
                                        text-center
                                        transition-all
                                        duration-300
                                        hover:bg-blue-50/60
                                    "
                                >
                                    {/* Divider */}
                                    {index !== processSteps.length - 1 && (
                                        <div
                                            className="
                                                absolute
                                                right-0
                                                top-1/2
                                                hidden
                                                h-16
                                                w-px
                                                -translate-y-1/2
                                                bg-slate-200
                                                lg:block
                                            "
                                        />
                                    )}

                                    {/* Icon */}
                                    <div
                                        className="
                                            flex
                                            h-16
                                            w-16
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-50
                                            text-blue-600
                                            transition-all
                                            duration-300
                                            group-hover:scale-110
                                            group-hover:bg-blue-600
                                            group-hover:text-white
                                            group-hover:shadow-lg
                                        "
                                    >
                                        <Icon
                                            size={30}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <span
                                            className="
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-wide
                                                text-blue-600
                                            "
                                        >
                                            {item.step}
                                        </span>

                                        <h3
                                            className="
                                                mt-1
                                                text-[17px]
                                                font-bold
                                                text-slate-900
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                leading-5
                                                text-slate-500
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentVisaProcess;