import studentHero from "../../assets/images/visa/student-hero.jpg";

// Country Images
import usaImage from "../../assets/images/visa/countries/usa.jpg";
import ukImage from "../../assets/images/visa/countries/uk.jpg";
import canadaImage from "../../assets/images/visa/countries/canada.jpg";
import australiaImage from "../../assets/images/visa/countries/australia.jpg";
import germanyImage from "../../assets/images/visa/countries/germany.jpg";
import franceImage from "../../assets/images/visa/countries/france.jpg";
import italyImage from "../../assets/images/visa/countries/italy.jpg";
import irelandImage from "../../assets/images/visa/countries/ireland.jpg";
import newZealandImage from "../../assets/images/visa/countries/new-zealand.jpg";
import netherlandsImage from "../../assets/images/visa/countries/netherlands.jpg";
import swedenImage from "../../assets/images/visa/countries/sweden.jpg";
import finlandImage from "../../assets/images/visa/countries/finland.jpg";
import denmarkImage from "../../assets/images/visa/countries/denmark.jpg";
import japanImage from "../../assets/images/visa/countries/japan.jpg";

// Flag Images
import usaFlag from "../../assets/images/visa/flags/usa.png";
import ukFlag from "../../assets/images/visa/flags/uk.png";
import canadaFlag from "../../assets/images/visa/flags/canada.png";
import australiaFlag from "../../assets/images/visa/flags/australia.png";
import germanyFlag from "../../assets/images/visa/flags/germany.png";
import franceFlag from "../../assets/images/visa/flags/france.png";
import italyFlag from "../../assets/images/visa/flags/italy.png";
import irelandFlag from "../../assets/images/visa/flags/ireland.png";
import newZealandFlag from "../../assets/images/visa/flags/new-zealand.png";
import netherlandsFlag from "../../assets/images/visa/flags/netherlands.png";
import swedenFlag from "../../assets/images/visa/flags/sweden.png";
import finlandFlag from "../../assets/images/visa/flags/finland.png";
import denmarkFlag from "../../assets/images/visa/flags/denmark.png";
import japanFlag from "../../assets/images/visa/flags/japan.png";

// Passport Images
import usaPassport from "../../assets/images/visa/passports/usa.png";
import ukPassport from "../../assets/images/visa/passports/uk.png";
import canadaPassport from "../../assets/images/visa/passports/canada.png";
import australiaPassport from "../../assets/images/visa/passports/australia.png";
import germanyPassport from "../../assets/images/visa/passports/germany.png";
import francePassport from "../../assets/images/visa/passports/france.png";
import italyPassport from "../../assets/images/visa/passports/italy.png";
import irelandPassport from "../../assets/images/visa/passports/ireland.png";
import newZealandPassport from "../../assets/images/visa/passports/new-zealand.png";
import netherlandsPassport from "../../assets/images/visa/passports/netherlands.png";
import swedenPassport from "../../assets/images/visa/passports/sweden.png";
import finlandPassport from "../../assets/images/visa/passports/finland.png";
import denmarkPassport from "../../assets/images/visa/passports/denmark.png";
import japanPassport from "../../assets/images/visa/passports/japan.png";

export const studentVisaHeroData = {
    image: studentHero,
    breadcrumb: ["Home", "Visa", "Student Visa"],
    title: "Student Visa",
    description: "Your dream to study abroad starts here.",
    subDescription: "We make your student visa journey simple.",
};

export const studentVisaData = [
    {
        id: 1,
        country: "USA",
        code: "US",
        visaTitle: "USA Student Visa",
        countryImage: usaImage,
        flagImage: usaFlag,
        passportImage: usaPassport,
        fee: 160,
        feeRange: "$160 - $350",
        processingTime: "5 to 30 working days",
        validity: "According to course duration",
        stayDuration: "Full course duration with options",
        workPermission: "Part-time work allowed",
        popular: true,
        featured: true,
    },
    {
        id: 2,
        country: "UK",
        code: "UK",
        visaTitle: "UK Student Visa",
        countryImage: ukImage,
        flagImage: ukFlag,
        passportImage: ukPassport,
        fee: 160,
        feeRange: "$160 - $420",
        processingTime: "3 to 20 working days",
        validity: "According to course duration",
        stayDuration: "Full course duration",
        workPermission: "Up to 20 hours per week",
        popular: true,
        featured: true,
    },
    {
        id: 3,
        country: "Canada",
        code: "CA",
        visaTitle: "Canada Student Visa",
        countryImage: canadaImage,
        flagImage: canadaFlag,
        passportImage: canadaPassport,
        fee: 150,
        feeRange: "$150 - $300",
        processingTime: "4 to 12 weeks",
        validity: "According to study program",
        stayDuration: "Full study duration",
        workPermission: "Part-time work allowed",
        popular: true,
        featured: true,
    },
    {
        id: 4,
        country: "Australia",
        code: "AU",
        visaTitle: "Australia Student Visa",
        countryImage: australiaImage,
        flagImage: australiaFlag,
        passportImage: australiaPassport,
        fee: 140,
        feeRange: "$140 - $400",
        processingTime: "15 to 45 working days",
        validity: "According to course duration",
        stayDuration: "Full course duration",
        workPermission: "Part-time work allowed",
        popular: true,
        featured: true,
    },
    {
        id: 5,
        country: "Germany",
        code: "DE",
        visaTitle: "Germany Student Visa",
        countryImage: germanyImage,
        flagImage: germanyFlag,
        passportImage: germanyPassport,
        fee: 75,
        feeRange: "$75 - $200",
        processingTime: "4 to 12 weeks",
        validity: "According to course duration",
        stayDuration: "Full study duration",
        workPermission: "Part-time work allowed",
        popular: true,
        featured: false,
    },
    {
        id: 6,
        country: "France",
        code: "FR",
        visaTitle: "France Student Visa",
        countryImage: franceImage,
        flagImage: franceFlag,
        passportImage: francePassport,
        fee: 110,
        feeRange: "$110 - $250",
        processingTime: "15 to 30 working days",
        validity: "According to study program",
        stayDuration: "Full course duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: true,
    },
    {
        id: 7,
        country: "Italy",
        code: "IT",
        visaTitle: "Italy Student Visa",
        countryImage: italyImage,
        flagImage: italyFlag,
        passportImage: italyPassport,
        fee: 90,
        feeRange: "$90 - $220",
        processingTime: "15 to 30 working days",
        validity: "According to course duration",
        stayDuration: "Full study duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: false,
    },
    {
        id: 8,
        country: "Ireland",
        code: "IE",
        visaTitle: "Ireland Student Visa",
        countryImage: irelandImage,
        flagImage: irelandFlag,
        passportImage: irelandPassport,
        fee: 100,
        feeRange: "$100 - $250",
        processingTime: "4 to 8 weeks",
        validity: "According to course duration",
        stayDuration: "Full course duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: true,
    },
    {
        id: 9,
        country: "New Zealand",
        code: "NZ",
        visaTitle: "New Zealand Student Visa",
        countryImage: newZealandImage,
        flagImage: newZealandFlag,
        passportImage: newZealandPassport,
        fee: 130,
        feeRange: "$130 - $320",
        processingTime: "20 to 40 working days",
        validity: "According to study program",
        stayDuration: "Full study duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: true,
    },
    {
        id: 10,
        country: "Netherlands",
        code: "NL",
        visaTitle: "Netherlands Student Visa",
        countryImage: netherlandsImage,
        flagImage: netherlandsFlag,
        passportImage: netherlandsPassport,
        fee: 120,
        feeRange: "$120 - $280",
        processingTime: "15 to 30 working days",
        validity: "According to course duration",
        stayDuration: "Full study duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: false,
    },
    {
        id: 11,
        country: "Sweden",
        code: "SE",
        visaTitle: "Sweden Student Visa",
        countryImage: swedenImage,
        flagImage: swedenFlag,
        passportImage: swedenPassport,
        fee: 115,
        feeRange: "$115 - $270",
        processingTime: "4 to 8 weeks",
        validity: "According to course duration",
        stayDuration: "Full study duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: false,
    },
    {
        id: 12,
        country: "Finland",
        code: "FI",
        visaTitle: "Finland Student Visa",
        countryImage: finlandImage,
        flagImage: finlandFlag,
        passportImage: finlandPassport,
        fee: 125,
        feeRange: "$125 - $290",
        processingTime: "20 to 40 working days",
        validity: "According to study program",
        stayDuration: "Full course duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: false,
    },
    {
        id: 13,
        country: "Denmark",
        code: "DK",
        visaTitle: "Denmark Student Visa",
        countryImage: denmarkImage,
        flagImage: denmarkFlag,
        passportImage: denmarkPassport,
        fee: 135,
        feeRange: "$135 - $300",
        processingTime: "20 to 45 working days",
        validity: "According to course duration",
        stayDuration: "Full study duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: false,
    },
    {
        id: 14,
        country: "Japan",
        code: "JP",
        visaTitle: "Japan Student Visa",
        countryImage: japanImage,
        flagImage: japanFlag,
        passportImage: japanPassport,
        fee: 95,
        feeRange: "$95 - $230",
        processingTime: "5 to 30 working days",
        validity: "According to study program",
        stayDuration: "Full course duration",
        workPermission: "Part-time work allowed",
        popular: false,
        featured: true,
    },
];

export const studentVisaDocuments = [
    "Valid Passport (18 months validity)",
    "University Offer Letter / Admission Letter",
    "HSC / CAS / COE (as applicable)",
    "Academic Certificates & Transcripts",
    "Financial Proof / Bank Statement",
    "English Language Test Results (IELTS/TOEFL)",
    "Statement of Purpose (SOP)",
    "Passport Size Photograph",
];

export default studentVisaData;