import {
    BadgeCheck,
    Banknote,
    BriefcaseBusiness,
    Building2,
    CalendarCheck2,
    Camera,
    Check,
    FileText,
    Landmark,
    Plane,
} from "lucide-react";


const documents = [
    {
        id: 1,
        title: "Valid Passport",
        description: "Minimum 6 months validity",
        icon: FileText,
    },
    {
        id: 2,
        title: "Passport Size Photos",
        description: "Recent photographs",
        icon: Camera,
    },
    {
        id: 3,
        title: "Bank Statement",
        description: "Last 6 months statement",
        icon: Landmark,
    },
    {
        id: 4,
        title: "Employment Proof",
        description: "Job letter or business documents",
        icon: BriefcaseBusiness,
    },
    {
        id: 5,
        title: "Flight Reservation",
        description: "Round-trip flight itinerary",
        icon: Plane,
    },
    {
        id: 6,
        title: "Hotel Booking",
        description: "Accommodation confirmation",
        icon: Building2,
    },
    {
        id: 7,
        title: "Travel Itinerary",
        description: "Complete travel plan",
        icon: CalendarCheck2,
    },
    {
        id: 8,
        title: "Financial Proof",
        description: "Proof of sufficient funds",
        icon: Banknote,
    },
];


const RequiredDocuments = () => {
    return (
        <section
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                sm:p-5
            "
        >
            <div className="mb-6">
                <div className="flex items-center gap-3">
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-50
                            text-blue-600
                        "
                    >
                        <BadgeCheck size={20} />
                    </div>

                    <div>
                        <h2
                            className="
                                text-xl
                                font-extrabold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            Required Documents
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Prepare the following documents for your
                            tourist visa application.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    gap-x-8
                    gap-y-5
                    sm:grid-cols-2
                "
            >
                {documents.map((document) => {
                    const Icon = document.icon;

                    return (
                        <div
                            key={document.id}
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
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-slate-50
                                    text-blue-600
                                "
                            >
                                <Icon size={17} />
                            </div>

                            <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                    <Check
                                        size={15}
                                        className="
                                            shrink-0
                                            text-emerald-500
                                        "
                                    />

                                    <h3
                                        className="
                                            text-sm
                                            font-bold
                                            text-slate-800
                                        "
                                    >
                                        {document.title}
                                    </h3>
                                </div>

                                <p
                                    className="
                                        mt-1
                                        pl-[23px]
                                        text-xs
                                        leading-5
                                        text-slate-500
                                    "
                                >
                                    {document.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


export default RequiredDocuments;