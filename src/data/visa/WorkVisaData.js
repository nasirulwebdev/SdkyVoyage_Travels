// ============================================================
// WORK VISA DATA
// ============================================================

// -------------------- HERO --------------------
import workVisaHero from "../../assets/images/visa/work-hero.jpg";


// -------------------- COUNTRY IMAGES --------------------
import canadaCountry from "../../assets/images/visa/countries/canada.jpg";
import germanyCountry from "../../assets/images/visa/countries/germany.jpg";
import australiaCountry from "../../assets/images/visa/countries/australia.jpg";
import uaeCountry from "../../assets/images/visa/countries/uae.jpg";
import qatarCountry from "../../assets/images/visa/countries/qatar.jpg";
import ukCountry from "../../assets/images/visa/countries/uk.jpg";
import usaCountry from "../../assets/images/visa/countries/usa.jpg";
import newZealandCountry from "../../assets/images/visa/countries/new-zealand.jpg";
import singaporeCountry from "../../assets/images/visa/countries/singapore.jpg";
import japanCountry from "../../assets/images/visa/countries/japan.jpg";
import southKoreaCountry from "../../assets/images/visa/countries/south-korea.jpg";
import saudiArabiaCountry from "../../assets/images/visa/countries/saudi-arabia.jpg";
import netherlandsCountry from "../../assets/images/visa/countries/netherlands.jpg";
import portugalCountry from "../../assets/images/visa/countries/portugal.jpg";


// -------------------- FLAGS --------------------
import canadaFlag from "../../assets/images/visa/flags/canada.png";
import germanyFlag from "../../assets/images/visa/flags/germany.png";
import australiaFlag from "../../assets/images/visa/flags/australia.png";
import uaeFlag from "../../assets/images/visa/flags/uae.png";
import qatarFlag from "../../assets/images/visa/flags/qatar.png";
import ukFlag from "../../assets/images/visa/flags/uk.png";
import usaFlag from "../../assets/images/visa/flags/usa.png";
import newZealandFlag from "../../assets/images/visa/flags/new-zealand.png";
import singaporeFlag from "../../assets/images/visa/flags/singapore.png";
import japanFlag from "../../assets/images/visa/flags/japan.png";
import southKoreaFlag from "../../assets/images/visa/flags/south-korea.png";
import saudiArabiaFlag from "../../assets/images/visa/flags/saudi-arabia.png";
import netherlandsFlag from "../../assets/images/visa/flags/netherlands.png";
import portugalFlag from "../../assets/images/visa/flags/portugal.png";


// -------------------- PASSPORT IMAGES --------------------
import canadaPassport from "../../assets/images/visa/passports/canada.png";
import germanyPassport from "../../assets/images/visa/passports/germany.png";
import australiaPassport from "../../assets/images/visa/passports/australia.png";
import uaePassport from "../../assets/images/visa/passports/uae.png";
import qatarPassport from "../../assets/images/visa/passports/qatar.png";
import ukPassport from "../../assets/images/visa/passports/uk.png";
import usaPassport from "../../assets/images/visa/passports/usa.png";
import newZealandPassport from "../../assets/images/visa/passports/new-zealand.png";
import singaporePassport from "../../assets/images/visa/passports/singapore.png";
import japanPassport from "../../assets/images/visa/passports/japan.png";
import southKoreaPassport from "../../assets/images/visa/passports/south-korea.png";
import saudiArabiaPassport from "../../assets/images/visa/passports/saudi-arabia.png";
import netherlandsPassport from "../../assets/images/visa/passports/netherlands.png";
import portugalPassport from "../../assets/images/visa/passports/portugal.png";


// ============================================================
// HERO DATA
// ============================================================

export const workVisaHeroData = {
    breadcrumb: [
        {
            id: 1,
            label: "Home",
            path: "/",
        },
        {
            id: 2,
            label: "Visa",
            path: "/visa",
        },
        {
            id: 3,
            label: "Work Visa",
            path: "/visa/work-visa",
        },
    ],

    title: "Work Visa",

    description:
        "Work in your dream country with the right visa. We provide end-to-end work visa support.",

    image: workVisaHero,

    highlights: [
        {
            id: 1,
            label: "High Success Rate",
        },
        {
            id: 2,
            label: "Fast Processing",
        },
        {
            id: 3,
            label: "Expert Guidance",
        },
        {
            id: 4,
            label: "Secure & Reliable",
        },
    ],
};


// ============================================================
// WORK VISA PROCESS
// ============================================================

export const workVisaProcessData = [
    {
        id: 1,
        step: "01",
        title: "Choose Country",
        description: "Select your destination",
        icon: "BriefcaseBusiness",
    },
    {
        id: 2,
        step: "02",
        title: "Apply Online",
        description: "Fill application form",
        icon: "FilePenLine",
    },
    {
        id: 3,
        step: "03",
        title: "Document Check",
        description: "We verify your documents",
        icon: "FileCheck2",
    },
    {
        id: 4,
        step: "04",
        title: "Get Your Visa",
        description: "Receive your visa",
        icon: "BadgeCheck",
    },
];


// ============================================================
// FILTER BUTTON DATA
// ============================================================

export const workVisaFilterData = [
    {
        id: 1,
        label: "All",
        value: "all",
    },
    {
        id: 2,
        label: "Popular",
        value: "popular",
    },
    {
        id: 3,
        label: "Europe",
        value: "europe",
    },
    {
        id: 4,
        label: "Asia Pacific",
        value: "asia-pacific",
    },
    {
        id: 5,
        label: "Middle East",
        value: "middle-east",
    },
    {
        id: 6,
        label: "Americas",
        value: "americas",
    },
];


// ============================================================
// SORT OPTIONS
// ============================================================

export const workVisaSortOptions = [
    {
        id: 1,
        label: "Recommended",
        value: "recommended",
    },
    {
        id: 2,
        label: "Price: Low to High",
        value: "price-low-high",
    },
    {
        id: 3,
        label: "Price: High to Low",
        value: "price-high-low",
    },
    {
        id: 4,
        label: "Processing Time",
        value: "processing-time",
    },
    {
        id: 5,
        label: "Country: A to Z",
        value: "country-a-z",
    },
];


// ============================================================
// WORK VISA COUNTRIES
// ============================================================

export const workVisaData = [
    {
        id: 1,
        slug: "canada-work-visa",

        country: "Canada",
        title: "Canada Work Visa",

        region: "americas",
        categories: ["popular", "americas"],

        countryImage: canadaCountry,
        flagImage: canadaFlag,
        passportImage: canadaPassport,

        price: 140,
        priceText: "From $140",

        processingDays: 15,
        processingTime: "5 to 25 working days",

        validity: "1 to 5 years",
        workPermission: "Full-time work allowed",
        renewal: "Renewable",

        isPopular: true,
        isFeatured: true,

        applyPath: "/visa/work-visa/canada-work-visa/apply",
        detailsPath: "/visa/work-visa/canada-work-visa",
    },

    {
        id: 2,
        slug: "germany-work-visa",

        country: "Germany",
        title: "Germany Work Visa",

        region: "europe",
        categories: ["popular", "europe"],

        countryImage: germanyCountry,
        flagImage: germanyFlag,
        passportImage: germanyPassport,

        price: 75,
        priceText: "From $75",

        processingDays: 20,
        processingTime: "10 to 30 working days",

        validity: "Up to 4 years",
        workPermission: "Full-time work allowed",
        renewal: "Renewable",

        isPopular: true,
        isFeatured: true,

        applyPath: "/visa/work-visa/germany-work-visa/apply",
        detailsPath: "/visa/work-visa/germany-work-visa",
    },

    {
        id: 3,
        slug: "australia-work-visa",

        country: "Australia",
        title: "Australia Work Visa",

        region: "asia-pacific",
        categories: ["popular", "asia-pacific"],

        countryImage: australiaCountry,
        flagImage: australiaFlag,
        passportImage: australiaPassport,

        price: 160,
        priceText: "From $160",

        processingDays: 25,
        processingTime: "15 to 30 working days",

        validity: "1 to 4 years",
        workPermission: "Full-time work allowed",
        renewal: "Conditions apply",

        isPopular: true,
        isFeatured: true,

        applyPath: "/visa/work-visa/australia-work-visa/apply",
        detailsPath: "/visa/work-visa/australia-work-visa",
    },

    {
        id: 4,
        slug: "uae-work-visa",

        country: "UAE",
        title: "UAE Work Visa",

        region: "middle-east",
        categories: ["popular", "middle-east"],

        countryImage: uaeCountry,
        flagImage: uaeFlag,
        passportImage: uaePassport,

        price: 90,
        priceText: "From $90",

        processingDays: 10,
        processingTime: "5 to 15 working days",

        validity: "2 to 3 years",
        workPermission: "Full-time work allowed",
        renewal: "Renewable",

        isPopular: true,
        isFeatured: true,

        applyPath: "/visa/work-visa/uae-work-visa/apply",
        detailsPath: "/visa/work-visa/uae-work-visa",
    },

    {
        id: 5,
        slug: "qatar-work-visa",

        country: "Qatar",
        title: "Qatar Work Visa",

        region: "middle-east",
        categories: ["popular", "middle-east"],

        countryImage: qatarCountry,
        flagImage: qatarFlag,
        passportImage: qatarPassport,

        price: 80,
        priceText: "From $80",

        processingDays: 14,
        processingTime: "7 to 20 working days",

        validity: "1 to 3 years",
        workPermission: "Full-time work allowed",
        renewal: "Renewable",

        isPopular: true,
        isFeatured: false,

        applyPath: "/visa/work-visa/qatar-work-visa/apply",
        detailsPath: "/visa/work-visa/qatar-work-visa",
    },

    {
        id: 6,
        slug: "uk-work-visa",

        country: "United Kingdom",
        title: "UK Work Visa",

        region: "europe",
        categories: ["europe"],

        countryImage: ukCountry,
        flagImage: ukFlag,
        passportImage: ukPassport,

        price: 180,
        priceText: "From $180",

        processingDays: 22,
        processingTime: "15 to 30 working days",

        validity: "Up to 5 years",
        workPermission: "Skilled employment",
        renewal: "Renewable",

        isPopular: false,
        isFeatured: true,

        applyPath: "/visa/work-visa/uk-work-visa/apply",
        detailsPath: "/visa/work-visa/uk-work-visa",
    },

    {
        id: 7,
        slug: "usa-work-visa",

        country: "United States",
        title: "USA Work Visa",

        region: "americas",
        categories: ["americas"],

        countryImage: usaCountry,
        flagImage: usaFlag,
        passportImage: usaPassport,

        price: 190,
        priceText: "From $190",

        processingDays: 40,
        processingTime: "20 to 60 working days",

        validity: "Depends on visa type",
        workPermission: "Authorized employment",
        renewal: "Conditions apply",

        isPopular: false,
        isFeatured: true,

        applyPath: "/visa/work-visa/usa-work-visa/apply",
        detailsPath: "/visa/work-visa/usa-work-visa",
    },

    {
        id: 8,
        slug: "new-zealand-work-visa",

        country: "New Zealand",
        title: "New Zealand Work Visa",

        region: "asia-pacific",
        categories: ["asia-pacific"],

        countryImage: newZealandCountry,
        flagImage: newZealandFlag,
        passportImage: newZealandPassport,

        price: 150,
        priceText: "From $150",

        processingDays: 25,
        processingTime: "15 to 35 working days",

        validity: "1 to 3 years",
        workPermission: "Full-time work allowed",
        renewal: "Renewable",

        isPopular: false,
        isFeatured: false,

        applyPath: "/visa/work-visa/new-zealand-work-visa/apply",
        detailsPath: "/visa/work-visa/new-zealand-work-visa",
    },

    {
        id: 9,
        slug: "singapore-work-visa",

        country: "Singapore",
        title: "Singapore Work Visa",

        region: "asia-pacific",
        categories: ["popular", "asia-pacific"],

        countryImage: singaporeCountry,
        flagImage: singaporeFlag,
        passportImage: singaporePassport,

        price: 110,
        priceText: "From $110",

        processingDays: 14,
        processingTime: "7 to 20 working days",

        validity: "Up to 2 years",
        workPermission: "Employment pass required",
        renewal: "Renewable",

        isPopular: true,
        isFeatured: false,

        applyPath: "/visa/work-visa/singapore-work-visa/apply",
        detailsPath: "/visa/work-visa/singapore-work-visa",
    },

    {
        id: 10,
        slug: "japan-work-visa",

        country: "Japan",
        title: "Japan Work Visa",

        region: "asia-pacific",
        categories: ["asia-pacific"],

        countryImage: japanCountry,
        flagImage: japanFlag,
        passportImage: japanPassport,

        price: 120,
        priceText: "From $120",

        processingDays: 20,
        processingTime: "10 to 30 working days",

        validity: "1 to 5 years",
        workPermission: "Skilled employment",
        renewal: "Renewable",

        isPopular: false,
        isFeatured: false,

        applyPath: "/visa/work-visa/japan-work-visa/apply",
        detailsPath: "/visa/work-visa/japan-work-visa",
    },

    {
        id: 11,
        slug: "south-korea-work-visa",

        country: "South Korea",
        title: "South Korea Work Visa",

        region: "asia-pacific",
        categories: ["asia-pacific"],

        countryImage: southKoreaCountry,
        flagImage: southKoreaFlag,
        passportImage: southKoreaPassport,

        price: 115,
        priceText: "From $115",

        processingDays: 18,
        processingTime: "10 to 25 working days",

        validity: "1 to 3 years",
        workPermission: "Employment visa required",
        renewal: "Renewable",

        isPopular: false,
        isFeatured: false,

        applyPath: "/visa/work-visa/south-korea-work-visa/apply",
        detailsPath: "/visa/work-visa/south-korea-work-visa",
    },

    {
        id: 12,
        slug: "saudi-arabia-work-visa",

        country: "Saudi Arabia",
        title: "Saudi Arabia Work Visa",

        region: "middle-east",
        categories: ["middle-east"],

        countryImage: saudiArabiaCountry,
        flagImage: saudiArabiaFlag,
        passportImage: saudiArabiaPassport,

        price: 95,
        priceText: "From $95",

        processingDays: 16,
        processingTime: "7 to 25 working days",

        validity: "1 to 2 years",
        workPermission: "Employer-sponsored work",
        renewal: "Renewable",

        isPopular: false,
        isFeatured: false,

        applyPath: "/visa/work-visa/saudi-arabia-work-visa/apply",
        detailsPath: "/visa/work-visa/saudi-arabia-work-visa",
    },

    {
        id: 13,
        slug: "netherlands-work-visa",

        country: "Netherlands",
        title: "Netherlands Work Visa",

        region: "europe",
        categories: ["europe"],

        countryImage: netherlandsCountry,
        flagImage: netherlandsFlag,
        passportImage: netherlandsPassport,

        price: 145,
        priceText: "From $145",

        processingDays: 22,
        processingTime: "15 to 30 working days",

        validity: "Up to 5 years",
        workPermission: "Skilled employment",
        renewal: "Renewable",

        isPopular: false,
        isFeatured: false,

        applyPath: "/visa/work-visa/netherlands-work-visa/apply",
        detailsPath: "/visa/work-visa/netherlands-work-visa",
    },

    {
        id: 14,
        slug: "portugal-work-visa",

        country: "Portugal",
        title: "Portugal Work Visa",

        region: "europe",
        categories: ["europe"],

        countryImage: portugalCountry,
        flagImage: portugalFlag,
        passportImage: portugalPassport,

        price: 130,
        priceText: "From $130",

        processingDays: 28,
        processingTime: "15 to 40 working days",

        validity: "1 to 2 years",
        workPermission: "Full-time work allowed",
        renewal: "Renewable",

        isPopular: false,
        isFeatured: false,

        applyPath: "/visa/work-visa/portugal-work-visa/apply",
        detailsPath: "/visa/work-visa/portugal-work-visa",
    },
];


// ============================================================
// POPULAR WORK DESTINATIONS
// ============================================================

export const popularWorkDestinations = workVisaData
    .filter((visa) => visa.isPopular)
    .slice(0, 5);


// ============================================================
// TOP WORK VISA COUNTRIES
// ============================================================

export const topWorkVisaCountries = workVisaData
    .filter((visa) => visa.isFeatured)
    .slice(0, 4);


// ============================================================
// WORK VISA INFORMATION
// Student Visa page-এর same UI structure ব্যবহার হবে
// ============================================================

export const workVisaInformationData = {
    title: "Work Visa Information",

    description:
        "A work visa allows you to work legally in a foreign country for a specific period. We help professionals and skilled workers achieve their goals.",

    informationCards: [
        {
            id: 1,
            title: "Validity",
            description: "1 to 5 years based on country & job type",
            icon: "CalendarDays",
        },
        {
            id: 2,
            title: "Work Permission",
            description: "Full-time work allowed as per visa",
            icon: "BriefcaseBusiness",
        },
        {
            id: 3,
            title: "Processing Time",
            description: "5 to 25 working days on average",
            icon: "Clock3",
        },
        {
            id: 4,
            title: "Renewal",
            description: "Renewable based on employment",
            icon: "RefreshCw",
        },
    ],

    requiredDocuments: {
        title: "Required Documents",

        items: [
            "Valid Passport (6+ months validity)",
            "Job Offer Letter / Employment Contract",
            "Educational Certificates",
            "Work Experience Certificates",
            "Medical Examination Report",
            "Police Clearance Certificate",
            "Passport Size Photograph",
            "Visa Application Form",
        ],
    },

    visaFees: {
        title: "Visa Fees",
        subtitle: "(Starting From)",
        price: "$70 - $250",
        description: "Fees vary by country",
        buttonText: "Apply Now",
        buttonPath: "/visa/work-visa/apply",
        secureText: "Secure & Easy Application",
    },
};


// ============================================================
// WHY CHOOSE US
// ============================================================

export const workVisaWhyChooseUsData = {
    title: "Why Choose Us?",

    items: [
        {
            id: 1,
            title: "98% Visa Success Rate",
            description: "High success rate with expert support",
            icon: "BadgeCheck",
        },
        {
            id: 2,
            title: "Fast Processing",
            description: "Quick processing and updates",
            icon: "Clock3",
        },
        {
            id: 3,
            title: "Expert Visa Consultants",
            description: "Experienced professionals",
            icon: "Users",
        },
        {
            id: 4,
            title: "Secure & Reliable",
            description: "Your data is 100% safe with us",
            icon: "ShieldCheck",
        },
    ],
};


// ============================================================
// BOTTOM FEATURES
// ============================================================

export const workVisaFeaturesData = [
    {
        id: 1,
        title: "End-to-End Support",
        description: "From application to approval",
        icon: "BadgeCheck",
    },
    {
        id: 2,
        title: "Transparent Process",
        description: "No hidden charges",
        icon: "FileCheck2",
    },
    {
        id: 3,
        title: "Secure Payments",
        description: "100% safe & secure",
        icon: "ShieldCheck",
    },
    {
        id: 4,
        title: "24/7 Support",
        description: "We're here to help",
        icon: "Headphones",
    },
];


// ============================================================
// DEFAULT UI SETTINGS
// ============================================================

export const workVisaUiConfig = {
    defaultFilter: "all",
    defaultSort: "recommended",

    initialVisibleCountries: 4,

    showSearch: true,
    showFilter: true,
    showSort: true,

    viewAllButtonText: "View All Countries",
    showLessButtonText: "Show Less",

    applyButtonText: "Apply Now",
};