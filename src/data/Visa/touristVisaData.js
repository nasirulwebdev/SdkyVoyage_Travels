// src/data/Visa/touristVisaData.js

// Country Images
import franceImg from "../../assets/images/visa/countries/france.jpg";
import ukImg from "../../assets/images/visa/countries/uk.jpg";
import usaImg from "../../assets/images/visa/countries/usa.jpg";
import canadaImg from "../../assets/images/visa/countries/canada.jpg";
import turkeyImg from "../../assets/images/visa/countries/turkey.jpg";
import thailandImg from "../../assets/images/visa/countries/thailand.jpg";
import uaeImg from "../../assets/images/visa/countries/uae.jpg";
import singaporeImg from "../../assets/images/visa/countries/singapore.jpg";
import malaysiaImg from "../../assets/images/visa/countries/malaysia.jpg";
import italyImg from "../../assets/images/visa/countries/italy.jpg";
import switzerlandImg from "../../assets/images/visa/countries/switzerland.jpg";
import australiaImg from "../../assets/images/visa/countries/australia.jpg";
import japanImg from "../../assets/images/visa/countries/japan.jpg";
import indonesiaImg from "../../assets/images/visa/countries/indonesia.jpg";


// Flags
import franceFlag from "../../assets/images/visa/flags/france.png";
import ukFlag from "../../assets/images/visa/flags/uk.png";
import usaFlag from "../../assets/images/visa/flags/usa.png";
import canadaFlag from "../../assets/images/visa/flags/canada.png";
import turkeyFlag from "../../assets/images/visa/flags/turkey.png";
import thailandFlag from "../../assets/images/visa/flags/thailand.png";
import uaeFlag from "../../assets/images/visa/flags/uae.png";
import singaporeFlag from "../../assets/images/visa/flags/singapore.png";
import malaysiaFlag from "../../assets/images/visa/flags/malaysia.png";
import italyFlag from "../../assets/images/visa/flags/italy.png";
import switzerlandFlag from "../../assets/images/visa/flags/switzerland.png";
import australiaFlag from "../../assets/images/visa/flags/australia.png";
import japanFlag from "../../assets/images/visa/flags/japan.png";
import indonesiaFlag from "../../assets/images/visa/flags/indonesia.png";


export const touristVisaData = [
    {
        id: 1,
        country: "France",
        visaName: "Schengen Visa",
        region: ["Schengen", "Europe"],
        image: franceImg,
        flag: franceFlag,
        price: 120,
        processingTime: "10 - 15 working days",
        validity: "Up to 5 years",
        stayDuration: "Up to 90 days",
        entryType: "Single / Multiple",
        popular: true,
        featured: true,
    },
    {
        id: 2,
        country: "United Kingdom",
        visaName: "UK Tourist Visa",
        region: ["Europe"],
        image: ukImg,
        flag: ukFlag,
        price: 160,
        processingTime: "15 - 20 working days",
        validity: "Up to 10 years",
        stayDuration: "Up to 6 months",
        entryType: "Multiple",
        popular: true,
        featured: true,
    },
    {
        id: 3,
        country: "United States",
        visaName: "USA Tourist Visa",
        region: ["North America"],
        image: usaImg,
        flag: usaFlag,
        price: 185,
        processingTime: "15 - 30 working days",
        validity: "Up to 10 years",
        stayDuration: "Up to 6 months",
        entryType: "Multiple",
        popular: true,
        featured: true,
    },
    {
        id: 4,
        country: "Canada",
        visaName: "Canada Visitor Visa",
        region: ["North America"],
        image: canadaImg,
        flag: canadaFlag,
        price: 140,
        processingTime: "20 - 30 working days",
        validity: "Up to 10 years",
        stayDuration: "Up to 6 months",
        entryType: "Multiple",
        popular: true,
        featured: true,
    },
    {
        id: 5,
        country: "Turkey",
        visaName: "Turkey Tourist Visa",
        region: ["Europe", "Asia"],
        image: turkeyImg,
        flag: turkeyFlag,
        price: 60,
        processingTime: "5 - 10 working days",
        validity: "180 days",
        stayDuration: "Up to 90 days",
        entryType: "Single / Multiple",
        popular: true,
        featured: false,
    },
    {
        id: 6,
        country: "Thailand",
        visaName: "Thailand Tourist Visa",
        region: ["Asia"],
        image: thailandImg,
        flag: thailandFlag,
        price: 40,
        processingTime: "5 - 7 working days",
        validity: "3 months",
        stayDuration: "Up to 60 days",
        entryType: "Single",
        popular: true,
        featured: false,
    },
    {
        id: 7,
        country: "UAE",
        visaName: "Dubai Tourist Visa",
        region: ["Middle East", "Asia"],
        image: uaeImg,
        flag: uaeFlag,
        price: 70,
        processingTime: "3 - 5 working days",
        validity: "60 days",
        stayDuration: "30 - 60 days",
        entryType: "Single / Multiple",
        popular: true,
        featured: false,
    },
    {
        id: 8,
        country: "Singapore",
        visaName: "Singapore Tourist Visa",
        region: ["Asia"],
        image: singaporeImg,
        flag: singaporeFlag,
        price: 80,
        processingTime: "5 - 7 working days",
        validity: "Up to 2 years",
        stayDuration: "Up to 30 days",
        entryType: "Multiple",
        popular: true,
        featured: false,
    },
    {
        id: 9,
        country: "Malaysia",
        visaName: "Malaysia Tourist Visa",
        region: ["Asia"],
        image: malaysiaImg,
        flag: malaysiaFlag,
        price: 50,
        processingTime: "3 - 7 working days",
        validity: "3 months",
        stayDuration: "Up to 30 days",
        entryType: "Single",
        popular: true,
        featured: false,
    },
    {
        id: 10,
        country: "Italy",
        visaName: "Italy Tourist Visa",
        region: ["Schengen", "Europe"],
        image: italyImg,
        flag: italyFlag,
        price: 110,
        processingTime: "10 - 15 working days",
        validity: "Up to 5 years",
        stayDuration: "Up to 90 days",
        entryType: "Single / Multiple",
        popular: false,
        featured: false,
    },
    {
        id: 11,
        country: "Switzerland",
        visaName: "Switzerland Tourist Visa",
        region: ["Schengen", "Europe"],
        image: switzerlandImg,
        flag: switzerlandFlag,
        price: 120,
        processingTime: "10 - 15 working days",
        validity: "Up to 5 years",
        stayDuration: "Up to 90 days",
        entryType: "Single / Multiple",
        popular: false,
        featured: false,
    },
    {
        id: 12,
        country: "Australia",
        visaName: "Australia Visitor Visa",
        region: ["Oceania"],
        image: australiaImg,
        flag: australiaFlag,
        price: 150,
        processingTime: "15 - 25 working days",
        validity: "Up to 3 years",
        stayDuration: "Up to 12 months",
        entryType: "Single / Multiple",
        popular: false,
        featured: false,
    },
    {
        id: 13,
        country: "Japan",
        visaName: "Japan Tourist Visa",
        region: ["Asia"],
        image: japanImg,
        flag: japanFlag,
        price: 90,
        processingTime: "5 - 10 working days",
        validity: "Up to 5 years",
        stayDuration: "Up to 90 days",
        entryType: "Single / Multiple",
        popular: false,
        featured: false,
    },
    {
        id: 14,
        country: "Indonesia",
        visaName: "Indonesia Tourist Visa",
        region: ["Asia"],
        image: indonesiaImg,
        flag: indonesiaFlag,
        price: 55,
        processingTime: "3 - 7 working days",
        validity: "60 days",
        stayDuration: "Up to 30 days",
        entryType: "Single",
        popular: false,
        featured: false,
    },
];