import {
    Search,
    FileText,
    ClipboardCheck,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";

import { visaProcessSteps } from "../../../data/visa/visaData";

const stepIcons = {
    1: Search,
    2: FileText,
    3: ClipboardCheck,
    4: BadgeCheck,
};

const VisaProcess = () => {
    return (
        <section
            className="
                relative
                z-20
                w-full
                bg-transparent
            "
        >
            <div
                className="
                    mx-auto
                    max-w-[1440px]
                    px-6
                    xl:px-10
                "
            >
                {/* 
                  নেগেটিভ মার্জিন mt-[-48px] ব্যবহার করে এটিকে উপরে তোলা হয়েছে।
                  ইমেজের মতো হুবহু লুক আনার জন্য শ্যাডো, বর্ডার এবং rounded-xl দেওয়া হয়েছে।
                */}
                <div
                    className="
                        flex
                        min-h-[96px]
                        items-center
                        justify-between
                        gap-8
                        rounded-xl
                        border
                        border-[#edf2f7]
                        bg-white
                        p-6
                        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                        mt-[-48px]
                    "
                >
                    {/* =========================
                        PROCESS STEPS
                    ========================== */}
                    <div
                        className="
                            grid
                            flex-1
                            grid-cols-4
                            items-center
                        "
                    >
                        {visaProcessSteps.map((step, index) => {
                            const Icon = stepIcons[step.id];

                            return (
                                <div
                                    key={step.id}
                                    className="
                                        relative
                                        flex
                                        items-center
                                    "
                                >
                                    {/* Step Content */}
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                        "
                                    >
                                        {/* Icon */}
                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#eaf3ff]
                                                text-[#0866ff]
                                            "
                                        >
                                            <Icon
                                                size={19}
                                                strokeWidth={2.2}
                                            />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-1
                                                "
                                            >
                                                <span
                                                    className="
                                                        text-[13px]
                                                        font-bold
                                                        text-[#0866ff]
                                                    "
                                                >
                                                    {step.number}
                                                </span>

                                                <h3
                                                    className="
                                                        text-[13px]
                                                        font-bold
                                                        text-[#101f3d]
                                                    "
                                                >
                                                    {step.title}
                                                </h3>
                                            </div>

                                            <p
                                                className="
                                                    mt-1
                                                    whitespace-nowrap
                                                    text-[11px]
                                                    font-medium
                                                    text-[#7b879d]
                                                "
                                            >
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connector Line */}
                                    {index <
                                        visaProcessSteps.length - 1 && (
                                        <div
                                            className="
                                                mx-5
                                                h-px
                                                flex-1
                                                bg-[#dfe5ee]
                                            "
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* =========================
                        CTA BUTTON
                    ========================== */}
                    <button
                        type="button"
                        className="
                            group
                            flex
                            h-[42px]
                            shrink-0
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            bg-[#0866ff]
                            px-5
                            text-[12px]
                            font-bold
                            text-white
                            shadow-[0_7px_18px_rgba(8,102,255,0.22)]
                            transition-all
                            duration-300
                            hover:bg-[#0057e7]
                            hover:shadow-[0_9px_22px_rgba(8,102,255,0.30)]
                        "
                    >
                        <span>
                            Check Visa Requirements
                        </span>

                        <ArrowRight
                            size={15}
                            strokeWidth={2.3}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VisaProcess;