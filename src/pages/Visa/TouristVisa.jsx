import TouristVisaHero from "../../components/Visa/TouristVisa/TouristVisaHero";
import TouristVisaSteps from "../../components/Visa/TouristVisa/TouristVisaSteps";
import PopularTouristDestinations from "../../components/Visa/TouristVisa/PopularTouristDestinations";
import WhyChooseTouristVisa from "../../components/Visa/TouristVisa/WhyChooseTouristVisa";
import TouristVisaInformation from "../../components/Visa/TouristVisa/TouristVisaInformation";
import RequiredDocuments from "../../components/Visa/TouristVisa/RequiredDocuments";
import VisaFeesCard from "../../components/Visa/TouristVisa/VisaFeesCard";
import TopTouristVisaCountries from "../../components/Visa/TouristVisa/TopTouristVisaCountries";
import TouristVisaTrustBar from "../../components/Visa/TouristVisa/TouristVisaTrustBar";


const TouristVisa = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <TouristVisaHero />

            {/* Visa Process Steps */}
            <TouristVisaSteps />

            {/* Main Information Area */}
            <section
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    py-10
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-7
                        lg:grid-cols-[300px_minmax(0,1fr)]
                    "
                >
                    {/* Left Sidebar */}
                    <aside className="space-y-6">
                        <PopularTouristDestinations />
                        <WhyChooseTouristVisa />
                    </aside>

                    {/* Right Content */}
                    <div className="min-w-0 space-y-6">
                        <TouristVisaInformation />

                        <RequiredDocuments />

                        <VisaFeesCard />
                    </div>
                </div>
            </section>

            {/* Top Visa Countries */}
            <TopTouristVisaCountries />

            {/* Bottom Trust Bar */}
            <TouristVisaTrustBar />
        </main>
    );
};


export default TouristVisa;