import { useState } from "react";

import StudentVisaHero from "../../../components/Visa/StudentVisa/StudentVisaHero";
import StudentVisaProcess from "../../../components/Visa/StudentVisa/StudentVisaProcess";
import PopularStudyDestinations from "../../../components/Visa/StudentVisa/PopularStudyDestinations";
import WhyChooseStudentVisa from "../../../components/Visa/StudentVisa/WhyChooseStudentVisa";
import StudentVisaInformation from "../../../components/Visa/StudentVisa/StudentVisaInformation";
import StudentVisaDocuments from "../../../components/Visa/StudentVisa/StudentVisaDocuments";
import StudentVisaFees from "../../../components/Visa/StudentVisa/StudentVisaFees";
import TopStudentVisaCountries from "../../../components/Visa/StudentVisa/TopStudentVisaCountries";
import { studentVisaData, } from "../../../data/visa/StudentVisaData";
import StudentVisaFeatures from "../../../components/Visa/StudentVisa/StudentVisaFeatures";

const StudentVisa = () => {

    // Selected Country
    const [selectedCountry, setSelectedCountry] = useState(
        studentVisaData[0]
    );


    // Apply Now Button
    const handleApply = (visa) => {

        if (!visa) return;

        console.log(
            "Applying for:",
            visa
        );

        alert(
            `Apply for ${visa.visaTitle}`
        );

    };


    return (

        <main
            className="
                min-h-screen
                bg-slate-50
            "
        >

            {/* =========================
                HERO SECTION
            ========================== */}
            <StudentVisaHero />


            {/* =========================
                VISA PROCESS
            ========================== */}
            <StudentVisaProcess />


            {/* =========================
                MAIN VISA CONTENT
            ========================== */}
            <section
                className="
                    py-14
                "
            >

                <div
                    className="
                        mx-auto
                        grid
                        max-w-7xl
                        grid-cols-1
                        gap-8
                        px-4

                        sm:px-6

                        lg:grid-cols-[300px_minmax(0,1fr)]
                        lg:px-8
                    "
                >

                    {/* =========================
                        LEFT SIDEBAR
                    ========================== */}
                    <aside
                        className="
                            space-y-6
                        "
                    >

                        {/* Popular Destinations */}
                        <PopularStudyDestinations
                            selectedCountry={
                                selectedCountry
                            }
                            onSelectCountry={
                                setSelectedCountry
                            }
                        />


                        {/* Why Choose Us */}
                        <WhyChooseStudentVisa />

                    </aside>


                    {/* =========================
                        RIGHT CONTENT
                    ========================== */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm

                            sm:p-7

                            lg:p-8
                        "
                    >

                        {/* =========================
                            VISA INFORMATION
                        ========================== */}
                        <StudentVisaInformation
                            selectedCountry={
                                selectedCountry
                            }
                        />


                        {/* =========================
                            DOCUMENTS + VISA FEES
                        ========================== */}
                        <div
                            className="
                                mt-8
                                grid
                                grid-cols-1
                                gap-6

                                lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]
                            "
                        >

                            {/* Required Documents */}
                            <StudentVisaDocuments />


                            {/* Visa Fees */}
                            <StudentVisaFees
                                selectedCountry={
                                    selectedCountry
                                }
                                onApply={
                                    handleApply
                                }
                            />

                        </div>

                    </div>

                </div>

            </section>
            {/* Top Student Visa Countries */}
            <TopStudentVisaCountries
                onSelectCountry={setSelectedCountry}
            />
            {/* Top Student Visa Countries */}
            <TopStudentVisaCountries
                onSelectCountry={setSelectedCountry}
            />

            {/* Student Visa Features */}
            <StudentVisaFeatures />
        </main>

    );

};


export default StudentVisa;