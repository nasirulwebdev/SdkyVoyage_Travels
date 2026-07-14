import {
    ArrowRight,
    ShieldCheck,
    WalletCards,
} from "lucide-react";

const StudentVisaFees = ({
    selectedCountry,
    onApply,
}) => {
    if (!selectedCountry) return null;

    return (
        <div
            className="
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
            "
        >
            <div className="flex items-center gap-3">
                <div
                    className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                    "
                >
                    <WalletCards size={22} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                    Visa Fees
                </h3>
            </div>

            <div className="mt-7">
                <p className="text-sm text-slate-500">
                    Starting from
                </p>

                <h4 className="mt-1 text-3xl font-extrabold text-blue-600">
                    {selectedCountry.feeRange}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                    Visa fees may vary depending on application
                    type and embassy charges.
                </p>
            </div>

            <button
                type="button"
                onClick={() => onApply?.(selectedCountry)}
                className="
                    group
                    mt-7
                    flex w-full
                    items-center justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5 py-3.5
                    text-sm font-bold
                    text-white
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-700
                    hover:shadow-lg
                "
            >
                Apply Now

                <ArrowRight
                    size={18}
                    className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
            </button>

            <div
                className="
                    mt-5
                    flex items-center justify-center
                    gap-2
                    text-xs font-medium
                    text-slate-500
                "
            >
                <ShieldCheck
                    size={16}
                    className="text-green-600"
                />

                Secure & Easy Application
            </div>
        </div>
    );
};

export default StudentVisaFees;