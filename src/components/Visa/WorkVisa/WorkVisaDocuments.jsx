import {
    Check,
    FileCheck2,
} from "lucide-react";

import { workVisaInformationData } from "../../../data/Visa/WorkVisaData";


const WorkVisaDocuments = () => {
    const {
        requiredDocuments,
    } = workVisaInformationData;


    return (
        <div
            className="
                min-h-[340px]
                h-full
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
            <div className="flex items-center gap-3">
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
                    <FileCheck2
                        size={22}
                        strokeWidth={2}
                    />
                </div>

                <h2
                    className="
                        text-xl
                        font-extrabold
                        text-slate-900
                    "
                >
                    {requiredDocuments.title}
                </h2>
            </div>


            {/* Documents */}
            <div
                className="
                    mt-6
                    grid
                    gap-x-6
                    gap-y-4
                    sm:grid-cols-2
                "
            >
                {requiredDocuments.items.map(
                    (document, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                items-start
                                gap-3
                            "
                        >
                            <span
                                className="
                                    mt-0.5
                                    flex
                                    h-5
                                    w-5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-emerald-100
                                    text-emerald-600
                                "
                            >
                                <Check
                                    size={12}
                                    strokeWidth={3}
                                />
                            </span>

                            <p
                                className="
                                    text-sm
                                    leading-6
                                    text-slate-600
                                "
                            >
                                {document}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};


export default WorkVisaDocuments;