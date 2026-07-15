import VisaHero from "../../components/Visa/VisaHero/VisaHero";
import VisaProcess from "../../components/Visa/VisaProcess/VisaProcess";
import VisaContent from "../../components/Visa/VisaContent/VisaContent";

import {
    visaServices,
} from "../../data/Visa/VisaData.js";

const VisaPage = () => {
    return (
        <main className="min-h-screen bg-[#f7f9fc]">
            <VisaHero />

            <VisaProcess />

            <VisaContent
                visaServices={visaServices}
            />
        </main>
    );
};

export default VisaPage;