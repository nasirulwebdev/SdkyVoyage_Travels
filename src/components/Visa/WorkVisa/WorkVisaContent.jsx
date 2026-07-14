import WorkVisaSidebar from "./WorkVisaSidebar";
import WorkVisaInformation from "./WorkVisaInformation";
import WorkVisaDocuments from "./WorkVisaDocuments";
import WorkVisaFees from "./WorkVisaFees";


const WorkVisaContent = () => {
    return (
        <section
            className="
                bg-[#f8faff]
                px-4
                pb-16
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    max-w-7xl
                    gap-8
                    lg:grid-cols-[280px_minmax(0,1fr)]
                "
            >
                {/* Left Sidebar */}
                <div>
                    <WorkVisaSidebar />
                </div>


                {/* Right Content */}
                <div
                    className="
                        min-w-0
                        space-y-6
                    "
                >
                    {/* Work Visa Information */}
                    <WorkVisaInformation />


                    {/* Documents + Visa Fees */}
                    <div
                        className="
                            grid
                            gap-6
                            xl:grid-cols-[minmax(0,1.65fr)_minmax(260px,0.75fr)]
                        "
                    >
                        <WorkVisaDocuments />

                        <WorkVisaFees />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default WorkVisaContent;