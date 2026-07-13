import bimanLogo from "../../../assets/images/flights/airlines/biman.png";
import usBanglaLogo from "../../../assets/images/flights/airlines/us-bangla.png";
import novoairLogo from "../../../assets/images/flights/airlines/novoair.png";
import airAstraLogo from "../../../assets/images/flights/airlines/air-astra.png";


export const domesticFlightsData = [
    {
        id: 1,
        airline: "Biman Bangladesh Airlines",
        airlineCode: "BG",
        airlineLogo: bimanLogo,
        flightNo: "BG-121",
        aircraft: "Boeing 737-800",
        rating: 4.8,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Chattogram",
        toCode: "CGP",

        departure: "08:30",
        arrival: "09:25",
        departurePeriod: "morning",

        duration: "55 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 5500,
        oldPrice: 6200,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: true,
        seatsLeft: 6,
    },

    {
        id: 2,
        airline: "US-Bangla Airlines",
        airlineCode: "BS",
        airlineLogo: usBanglaLogo,
        flightNo: "BS-145",
        aircraft: "ATR 72-600",
        rating: 4.7,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Chattogram",
        toCode: "CGP",

        departure: "11:15",
        arrival: "12:10",
        departurePeriod: "morning",

        duration: "55 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 6200,
        oldPrice: 6800,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: true,
        seatsLeft: 4,
    },

    {
        id: 3,
        airline: "NOVOAIR",
        airlineCode: "VQ",
        airlineLogo: novoairLogo,
        flightNo: "VQ-203",
        aircraft: "ATR 72-500",
        rating: 4.6,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Chattogram",
        toCode: "CGP",

        departure: "16:40",
        arrival: "17:35",
        departurePeriod: "afternoon",

        duration: "55 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 5900,
        oldPrice: 6500,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: false,
        seatsLeft: 8,
    },

    {
        id: 4,
        airline: "Air Astra",
        airlineCode: "2A",
        airlineLogo: airAstraLogo,
        flightNo: "2A-441",
        aircraft: "ATR 72-600",
        rating: 4.5,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Cox's Bazar",
        toCode: "CXB",

        departure: "07:20",
        arrival: "08:25",
        departurePeriod: "morning",

        duration: "1 hr 05 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 7200,
        oldPrice: 7900,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: true,
        seatsLeft: 5,
    },

    {
        id: 5,
        airline: "Biman Bangladesh Airlines",
        airlineCode: "BG",
        airlineLogo: bimanLogo,
        flightNo: "BG-433",
        aircraft: "Boeing 737-800",
        rating: 4.9,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Cox's Bazar",
        toCode: "CXB",

        departure: "10:00",
        arrival: "11:05",
        departurePeriod: "morning",

        duration: "1 hr 05 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 7800,
        oldPrice: 8500,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: true,
        seatsLeft: 3,
    },

    {
        id: 6,
        airline: "US-Bangla Airlines",
        airlineCode: "BS",
        airlineLogo: usBanglaLogo,
        flightNo: "BS-533",
        aircraft: "ATR 72-600",
        rating: 4.7,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Sylhet",
        toCode: "ZYL",

        departure: "09:10",
        arrival: "10:00",
        departurePeriod: "morning",

        duration: "50 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 5300,
        oldPrice: 5900,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: false,
        seatsLeft: 7,
    },

    {
        id: 7,
        airline: "NOVOAIR",
        airlineCode: "VQ",
        airlineLogo: novoairLogo,
        flightNo: "VQ-987",
        aircraft: "ATR 72-500",
        rating: 4.6,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Saidpur",
        toCode: "SPD",

        departure: "12:30",
        arrival: "13:25",
        departurePeriod: "afternoon",

        duration: "55 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 5700,
        oldPrice: 6300,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: false,
        mealIncluded: false,
        seatsLeft: 9,
    },

    {
        id: 8,
        airline: "Air Astra",
        airlineCode: "2A",
        airlineLogo: airAstraLogo,
        flightNo: "2A-671",
        aircraft: "ATR 72-600",
        rating: 4.5,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Saidpur",
        toCode: "SPD",

        departure: "15:10",
        arrival: "16:05",
        departurePeriod: "afternoon",

        duration: "55 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 5450,
        oldPrice: 6100,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: false,
        seatsLeft: 5,
    },

    {
        id: 9,
        airline: "Biman Bangladesh Airlines",
        airlineCode: "BG",
        airlineLogo: bimanLogo,
        flightNo: "BG-467",
        aircraft: "Dash 8-400",
        rating: 4.9,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Rajshahi",
        toCode: "RJH",

        departure: "17:20",
        arrival: "18:10",
        departurePeriod: "afternoon",

        duration: "50 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 5200,
        oldPrice: 5800,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: true,
        seatsLeft: 2,
    },

    {
        id: 10,
        airline: "US-Bangla Airlines",
        airlineCode: "BS",
        airlineLogo: usBanglaLogo,
        flightNo: "BS-181",
        aircraft: "ATR 72-600",
        rating: 4.8,

        from: "Dhaka",
        fromCode: "DAC",
        to: "Jashore",
        toCode: "JSR",

        departure: "19:00",
        arrival: "19:45",
        departurePeriod: "evening",

        duration: "45 min",
        stop: "Non Stop",
        stopType: "non-stop",

        price: 4900,
        oldPrice: 5500,

        cabinClass: "Economy",
        baggage: "20 KG",
        cabinBaggage: "7 KG",
        refundable: true,
        mealIncluded: false,
        seatsLeft: 6,
    },
];