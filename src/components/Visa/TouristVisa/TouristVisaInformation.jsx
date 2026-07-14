import VisaInfoCard from "./VisaInfoCard";


const visaInformation = [
    {
        id: 1,
        type: "validity",
        title: "Validity",
        description:
            "Usually 30 days to 5 years depending on country",
    },
    {
        id: 2,
        type: "stayDuration",
        title: "Stay Duration",
        description:
            "Typically 15 to 90 days per visit",
    },
    {
        id: 3,
        type: "processingTime",
        title: "Processing Time",
        description:
            "3 to 15 working days (on average)",
    },
    {
        id: 4,
        type: "entryType",
        title: "Entry Type",
        description:
            "Single / Double / Multiple Entry options",
    },
];


const TouristVisaInformation = () => {
    return (
        <section>
            {/* Heading */}
            <div className="mb-5">
                <h2
                    className="
                        text-[18px]
                        font-extrabold
                        text-slate-900
                    "
                >
                    Tourist Visa Information
                </h2>

                <p
                    className="
                        mt-3
                        max-w-2xl
                        text-[12px]
                        leading-5
                        text-slate-500
                    "
                >
                    A tourist visa allows you to visit a country
                    for leisure, sightseeing, visiting family or
                    friends, or any short-term travel purpose.
                </p>
            </div>


            {/* Information Cards */}
            <div
                className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                "
            >
                {visaInformation.map((item) => (
                    <VisaInfoCard
                        key={item.id}
                        type={item.type}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};


export default TouristVisaInformation;