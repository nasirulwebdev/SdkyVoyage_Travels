import {
    BadgeCheck,
    ChevronRight,
    Clock3,
    FileCheck2,
    FileText,
    Search,
    ShieldCheck,
    UserRoundCheck,
    WalletCards,
} from "lucide-react";

const chooseItems = [
    {
        title: "98% Visa Success Rate",
        description: "High success rate with expert support",
        icon: ShieldCheck,
    },
    {
        title: "Expert Visa Consultants",
        description: "Experienced professionals",
        icon: UserRoundCheck,
    },
    {
        title: "Fast & Reliable Service",
        description: "Quick processing and updates",
        icon: Clock3,
    },
    {
        title: "Secure & Trusted",
        description: "Your data is 100% safe with us",
        icon: BadgeCheck,
    },
];

const visaInformation = [
    {
        title: "Visa Requirements",
        icon: FileCheck2,
    },
    {
        title: "Document Checklist",
        icon: FileText,
    },
    {
        title: "Visa Fees",
        icon: WalletCards,
    },
    {
        title: "Processing Time",
        icon: Clock3,
    },
    {
        title: "Visa Application Guide",
        icon: FileText,
    },
];

const VisaSidebar = () => {
    return (
        <aside className="w-full space-y-4">

            {/* =====================================
                WHY CHOOSE SKYVOYAGE
            ====================================== */}
            <div
                className="
                    rounded-xl
                    border border-slate-200
                    bg-white
                    px-5
                    py-6
                    shadow-[0_4px_18px_rgba(15,23,42,0.05)]
                "
            >
                <h3 className="mb-6 text-[17px] font-extrabold text-[#0b1739]">
                    Why Choose SkyVoyage
                </h3>

                <div className="space-y-6">
                    {chooseItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="flex items-center gap-4"
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#edf5ff]
                                        text-[#0866ff]
                                    "
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={2}
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="min-w-0">
                                    <h4
                                        className="
                                            text-[13px]
                                            font-bold
                                            leading-5
                                            text-[#17213f]
                                        "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-[11px]
                                            leading-[17px]
                                            text-[#7d879b]
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

            {/* =====================================
                NEED HELP
            ====================================== */}
            <div
                className="
                    rounded-xl
                    bg-gradient-to-br
                    from-[#073a7c]
                    to-[#031f4d]
                    px-5
                    py-5
                    text-white
                    shadow-[0_8px_24px_rgba(3,31,77,0.18)]
                "
            >
                <h3 className="text-[18px] font-bold">
                    Need Help?
                </h3>

                <p
                    className="
                        mt-2
                        max-w-[210px]
                        text-[12px]
                        font-medium
                        leading-[18px]
                        text-white/90
                    "
                >
                    Our visa experts are here to
                    assist you 24/7.
                </p>

                {/* CONTACT BUTTON */}
                <div
                    className="
                        mt-5
                        flex
                        h-11
                        overflow-hidden
                        rounded-md
                    "
                >
                    <button
                        type="button"
                        className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            bg-[#0866ff]
                            px-4
                            text-[12px]
                            font-bold
                            text-white
                            transition
                            hover:bg-[#0057e7]
                        "
                    >
                        Contact Expert
                    </button>

                    <button
                        type="button"
                        aria-label="Search visa expert"
                        className="
                            flex
                            w-16
                            shrink-0
                            items-center
                            justify-center
                            bg-white
                            text-[#0866ff]
                            transition
                            hover:bg-[#f3f7ff]
                        "
                    >
                        <Search
                            size={19}
                            strokeWidth={2.3}
                        />
                    </button>
                </div>
            </div>

            {/* =====================================
                VISA INFORMATION
            ====================================== */}
            <div
                className="
                    rounded-xl
                    border border-slate-200
                    bg-white
                    px-5
                    py-5
                    shadow-[0_4px_18px_rgba(15,23,42,0.05)]
                "
            >
                <h3
                    className="
                        mb-4
                        text-[17px]
                        font-extrabold
                        text-[#0b1739]
                    "
                >
                    Visa Information
                </h3>

                <div>
                    {visaInformation.map(
                        (item, index) => {
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.title}
                                    type="button"
                                    className={`
                                        group
                                        flex
                                        min-h-[42px]
                                        w-full
                                        items-center
                                        justify-between
                                        gap-3
                                        text-left

                                        ${
                                            index !==
                                            visaInformation.length - 1
                                                ? "border-b border-slate-100"
                                                : ""
                                        }
                                    `}
                                >
                                    <div
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-3
                                        "
                                    >
                                        <Icon
                                            size={16}
                                            strokeWidth={1.9}
                                            className="
                                                shrink-0
                                                text-[#71809a]
                                            "
                                        />

                                        <span
                                            className="
                                                text-[12px]
                                                font-semibold
                                                text-[#4b5870]
                                                transition
                                                group-hover:text-[#0866ff]
                                            "
                                        >
                                            {item.title}
                                        </span>
                                    </div>

                                    <ChevronRight
                                        size={15}
                                        strokeWidth={2}
                                        className="
                                            shrink-0
                                            text-[#18365f]
                                            transition
                                            group-hover:translate-x-0.5
                                            group-hover:text-[#0866ff]
                                        "
                                    />
                                </button>
                            );
                        }
                    )}
                </div>
            </div>

        </aside>
    );
};

export default VisaSidebar;