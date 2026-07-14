import {
    BriefcaseBusiness,
    CalendarDays,
    Clock3,
    GraduationCap,
} from "lucide-react";

const StudentVisaInformation = ({ selectedCountry }) => {
    if (!selectedCountry) return null;

    const information = [
        {
            id: 1,
            title: "Validity",
            value: selectedCountry.validity,
            icon: CalendarDays,
        },
        {
            id: 2,
            title: "Stay Duration",
            value: selectedCountry.stayDuration,
            icon: GraduationCap,
        },
        {
            id: 3,
            title: "Processing Time",
            value: selectedCountry.processingTime,
            icon: Clock3,
        },
        {
            id: 4,
            title: "Work Permission",
            value: selectedCountry.workPermission,
            icon: BriefcaseBusiness,
        },
    ];

    return (
        <div>
            {/* Section Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    Student Visa Information
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Essential information for your{" "}
                    <span className="font-semibold text-blue-600">
                        {selectedCountry.country}
                    </span>{" "}
                    student visa application.
                </p>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {information.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="
                                group
                                flex
                                min-h-[105px]
                                items-center
                                gap-4
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                p-5
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-200
                                hover:shadow-lg
                            "
                        >
                            {/* Icon */}
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-50
                                    text-blue-600
                                    transition-all
                                    duration-300
                                    group-hover:bg-blue-600
                                    group-hover:text-white
                                "
                            >
                                <Icon
                                    size={23}
                                    strokeWidth={2}
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <p className="text-xs font-medium text-slate-500">
                                    {item.title}
                                </p>

                                <h3
                                    className="
                                        mt-1
                                        text-sm
                                        font-bold
                                        leading-5
                                        text-slate-900
                                    "
                                >
                                    {item.value}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudentVisaInformation;