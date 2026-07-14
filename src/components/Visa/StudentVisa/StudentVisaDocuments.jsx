import {
    Check,
    FileText,
} from "lucide-react";

import {
    studentVisaDocuments,
} from "../../../data/visa/studentvisadata";

const StudentVisaDocuments = () => {
    return (
        <div
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
            "
        >
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <div
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                    "
                >
                    <FileText
                        size={22}
                        strokeWidth={2}
                    />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                    Required Documents
                </h3>
            </div>

            {/* Documents */}
            <div className="space-y-4">
                {studentVisaDocuments.map(
                    (document, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                items-start
                                gap-3
                            "
                        >
                            <div
                                className="
                                    mt-0.5
                                    flex
                                    h-5
                                    w-5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-green-100
                                    text-green-600
                                "
                            >
                                <Check
                                    size={13}
                                    strokeWidth={3}
                                />
                            </div>

                            <p
                                className="
                                    text-sm
                                    leading-5
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

export default StudentVisaDocuments;