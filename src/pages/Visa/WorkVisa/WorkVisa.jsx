import WorkVisaHero from "../../../components/Visa/WorkVisa/WorkVisaHero";
import WorkVisaProcess from "../../../components/Visa/WorkVisa/WorkVisaProcess";
import WorkVisaContent from "../../../components/Visa/WorkVisa/WorkVisaContent";
import WorkVisaCountries from "../../../components/Visa/WorkVisa/WorkVisaCountries";
import WorkVisaFeatures from "../../../components/Visa/WorkVisa/WorkVisaFeatures";

const WorkVisa = () => {
    return (
        <main className="min-h-screen bg-[#f8faff]">
            {/* Hero Section */}
            <WorkVisaHero />

            {/* Application Process */}
            <WorkVisaProcess />

            {/* Sidebar + Work Visa Information */}
            <WorkVisaContent />

            {/* Filter + Country Cards */}
            <WorkVisaCountries />

            {/* Bottom Features */}
            <WorkVisaFeatures />
        </main>
    );
};

export default WorkVisa;