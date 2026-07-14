import {
    ClipboardCheck,
    FileCheck2,
    FileSearch,
    Send,
} from "lucide-react";


const steps = [
    {
        id: 1,
        title: "Choose Country",
        description: "Select your destination",
        icon: ClipboardCheck,
    },
    {
        id: 2,
        title: "Apply Online",
        description: "Fill application form",
        icon: Send,
    },
    {
        id: 3,
        title: "Document Check",
        description: "We verify your documents",
        icon: FileSearch,
    },
    {
        id: 4,
        title: "Get Your Visa",
        description: "Receive your visa",
        icon: FileCheck2,
    },
];


const TouristVisaSteps = () => {
    return (
        <section
            className="
                relative
                z-20
                mx-auto
                -mt-12
                max-w-7xl
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    grid
                    grid-cols-1
                    gap-3
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    shadow-xl
                    shadow-slate-200/60
                    sm:grid-cols-2
                    lg:grid-cols-4
                    lg:p-5
                "
            >
                {steps.map((step) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={step.id}
                            className="
                                flex
                                items-center
                                gap-4
                                rounded-xl
                                px-3
                                py-3
                                transition
                                hover:bg-blue-50/70
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-50
                                    text-blue-600
                                "
                            >
                                <Icon size={21} />
                            </div>

                            <div>
                                <h3
                                    className="
                                        text-sm
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    {step.id}. {step.title}
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-slate-500
                                    "
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


export default TouristVisaSteps;