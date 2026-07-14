import {
    ArrowRight,
    CheckCircle2,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";


const VisaFeesCard = () => {
    return (
        <section
            className="
                overflow-hidden
                rounded-2xl
                border
                border-blue-100
                bg-gradient-to-r
                from-blue-50
                via-white
                to-sky-50
                p-5
                shadow-sm
                sm:p-6
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-6
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >
                {/* Left Content */}
                <div>
                    <p
                        className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-blue-600
                        "
                    >
                        Visa Service Fee
                    </p>

                    <div
                        className="
                            mt-2
                            flex
                            flex-wrap
                            items-end
                            gap-2
                        "
                    >
                        <h2
                            className="
                                text-3xl
                                font-extrabold
                                text-slate-900
                            "
                        >
                            Starting from $120
                        </h2>

                        <span
                            className="
                                mb-1
                                text-xs
                                font-medium
                                text-slate-500
                            "
                        >
                            / applicant
                        </span>
                    </div>

                    <p
                        className="
                            mt-2
                            max-w-xl
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        Final visa fees may vary depending on the
                        destination, visa type, embassy charges,
                        and processing requirements.
                    </p>

                    <div
                        className="
                            mt-4
                            flex
                            flex-wrap
                            gap-x-5
                            gap-y-2
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-xs
                                font-semibold
                                text-slate-700
                            "
                        >
                            <CheckCircle2
                                size={15}
                                className="text-emerald-500"
                            />
                            No Hidden Charges
                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-xs
                                font-semibold
                                text-slate-700
                            "
                        >
                            <ShieldCheck
                                size={15}
                                className="text-emerald-500"
                            />
                            Expert Assistance
                        </div>
                    </div>
                </div>

                {/* Apply Area */}
                <div
                    className="
                        w-full
                        shrink-0
                        lg:w-[230px]
                    "
                >
                    <button
                        type="button"
                        className="
                            group
                            flex
                            w-full
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
                            transition
                            hover:bg-blue-700
                        "
                    >
                        Apply Now

                        <ArrowRight
                            size={17}
                            className="
                                transition-transform
                                group-hover:translate-x-1
                            "
                        />
                    </button>

                    <div
                        className="
                            mt-3
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-[11px]
                            font-medium
                            text-slate-500
                        "
                    >
                        <LockKeyhole size={13} />
                        Secure & Easy Application
                    </div>
                </div>
            </div>
        </section>
    );
};


export default VisaFeesCard;