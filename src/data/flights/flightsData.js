import emiratesLogo from "../../assets/images/flights/airlines/emirates.png";
import qatarLogo from "../../assets/images/flights/airlines/qatar-airways.png";
import turkishLogo from "../../assets/images/flights/airlines/turkish-airlines.png";
import saudiaLogo from "../../assets/images/flights/airlines/saudia.png";
import bimanLogo from "../../assets/images/flights/airlines/biman-bangladesh.png";

export const flightsData = [
    {
        id: 1,
        airline: "Emirates",
        image: emiratesLogo,
        flightNumber: "EK 585",

        from: {
            code: "DAC",
            city: "Dhaka",
            time: "09:15",
        },

        to: {
            code: "DXB",
            city: "Dubai",
            time: "01:45",
        },

        duration: "5h 30m",
        stops: 0,
        stopLabel: "Non Stop",
        stopAirport: "",

        departurePeriod: "morning",

        cabinClass: "Economy",
        baggage: "30 KG",

        price: 320,
        currency: "$",

        nextDay: true,
        refundable: true,
        featured: true,
    },

    {
        id: 2,
        airline: "Qatar Airways",
        image: qatarLogo,
        flightNumber: "QR 641",

        from: {
            code: "DAC",
            city: "Dhaka",
            time: "14:20",
        },

        to: {
            code: "DXB",
            city: "Dubai",
            time: "18:05",
        },

        duration: "5h 45m",
        stops: 0,
        stopLabel: "Non Stop",
        stopAirport: "",

        departurePeriod: "afternoon",

        cabinClass: "Economy",
        baggage: "25 KG",

        price: 305,
        currency: "$",

        nextDay: true,
        refundable: true,
        featured: false,
    },

    {
        id: 3,
        airline: "Turkish Airlines",
        image: turkishLogo,
        flightNumber: "TK 713",

        from: {
            code: "DAC",
            city: "Dhaka",
            time: "08:40",
        },

        to: {
            code: "DXB",
            city: "Dubai",
            time: "15:50",
        },

        duration: "9h 10m",
        stops: 1,
        stopLabel: "1 Stop (IST)",
        stopAirport: "IST",

        departurePeriod: "morning",

        cabinClass: "Economy",
        baggage: "30 KG",

        price: 290,
        currency: "$",

        nextDay: true,
        refundable: false,
        featured: false,
    },

    {
        id: 4,
        airline: "Saudia",
        image: saudiaLogo,
        flightNumber: "SV 805",

        from: {
            code: "DAC",
            city: "Dhaka",
            time: "20:35",
        },

        to: {
            code: "DXB",
            city: "Dubai",
            time: "02:25",
        },

        duration: "8h 50m",
        stops: 1,
        stopLabel: "1 Stop (JED)",
        stopAirport: "JED",

        departurePeriod: "evening",

        cabinClass: "Economy",
        baggage: "30 KG",

        price: 272,
        currency: "$",

        nextDay: true,
        refundable: true,
        featured: false,
    },

    {
        id: 5,
        airline: "Biman Bangladesh Airlines",
        image: bimanLogo,
        flightNumber: "BG 347",

        from: {
            code: "DAC",
            city: "Dhaka",
            time: "11:30",
        },

        to: {
            code: "DXB",
            city: "Dubai",
            time: "18:50",
        },

        duration: "10h 20m",
        stops: 1,
        stopLabel: "1 Stop (DOH)",
        stopAirport: "DOH",

        departurePeriod: "morning",

        cabinClass: "Economy",
        baggage: "30 KG",

        price: 210,
        currency: "$",

        nextDay: true,
        refundable: true,
        featured: false,
    },
];