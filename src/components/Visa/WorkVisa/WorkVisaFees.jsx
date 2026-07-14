import {
    ArrowRight,
    LockKeyhole,
} from "lucide-react";

import { workVisaInformationData } from "../../../data/Visa/WorkVisaData";


const WorkVisaFees = () => {
    const { visaFees } = workVisaInformationData;


    const handleApplyNow = () => {
        const countriesSection =
            document.getElementById("work-visa-countries");

        if (countriesSection) {
            countriesSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    return (
        <div
            className="
                min-h-[340px]
                h-full
                flex
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                sm:p-7
            "
        >
            <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                    {visaFees.title}
                </h2>

                <p className="mt-1 text-xs font-medium text-slate-500">
                    {visaFees.subtitle}
                </p>
            </div>


            <div className="mt-6">
                <p
                    className="
                        text-3xl
                        font-extrabold
                        tracking-tight
                        text-blue-600
                    "
                >
                    {visaFees.price}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                    {visaFees.description}
                </p>
            </div>


            <button
                type="button"
                onClick={handleApplyNow}
                className="
                    group
                    mt-auto
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-700
                "
            >
                {visaFees.buttonText}

                <ArrowRight
                    size={17}
                    className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
            </button>


            <div
                className="
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    text-[11px]
                    font-medium
                    text-slate-500
                "
            >
                <LockKeyhole
                    size={13}
                    className="text-emerald-600"
                />

                <span>{visaFees.secureText}</span>
            </div>
        </div>
    );
};


export default WorkVisaFees;