import dubaiApartment from "../../assets/images/hotels/Apartments/dubaiApartment.jpg";
import bangkokApartment from "../../assets/images/hotels/Apartments/bangkokApartment.jpg";
import newYorkApartment from "../../assets/images/hotels/Apartments/newYorkApartment.jpg";
import parisApartment from "../../assets/images/hotels/Apartments/parisApartment.jpg";

/* =========================
   APARTMENT LISTINGS
========================= */

export const apartments = [
    {
        id: 1,
        name: "Dubai Marina Apartment",
        location: "Dubai, UAE",
        image: dubaiApartment,

        badge: "Popular",
        badgeColor: "blue",

        rating: 5,
        score: 4.7,
        reviewText: "Excellent",
        reviews: 680,

        propertyType: "Apartment",

        amenities: [
            "Kitchen",
            "Free WiFi",
            "Parking",
            "Air Conditioning",
            "Elevator",
        ],

        neighborhood: "Near Beach",

        beds: 2,
        baths: 2,
        kitchen: true,

        /* Search Capacity */
        maxGuests: 4,
        rooms: 2,

        /* Availability */
        availability: {
            availableFrom: "2026-01-01",
            availableTo: "2027-12-31",
        },

        pricePerNight: 160,
        nights: 7,
        totalPrice: 1120,
    },

    {
        id: 2,
        name: "Bangkok City Apartment",
        location: "Bangkok, Thailand",
        image: bangkokApartment,

        badge: "Great Value",
        badgeColor: "green",

        rating: 4.5,
        score: 4.8,
        reviewText: "Excellent",
        reviews: 540,

        propertyType: "Studio",

        amenities: [
            "Kitchen",
            "Free WiFi",
            "Washing Machine",
            "Air Conditioning",
        ],

        neighborhood: "Downtown",

        beds: 1,
        baths: 1,
        kitchen: true,

        /* Search Capacity */
        maxGuests: 2,
        rooms: 1,

        /* Availability */
        availability: {
            availableFrom: "2026-01-01",
            availableTo: "2027-12-31",
        },

        pricePerNight: 80,
        nights: 7,
        totalPrice: 560,
    },

    {
        id: 3,
        name: "New York Central Apartment",
        location: "New York, USA",
        image: newYorkApartment,

        badge: "Luxury",
        badgeColor: "purple",

        rating: 5,
        score: 4.8,
        reviewText: "Excellent",
        reviews: 730,

        propertyType: "Penthouse",

        amenities: [
            "Kitchen",
            "Free WiFi",
            "Washing Machine",
            "Parking",
            "Air Conditioning",
            "Elevator",
        ],

        neighborhood: "Business District",

        beds: 2,
        baths: 2,
        kitchen: true,

        /* Search Capacity */
        maxGuests: 5,
        rooms: 2,

        /* Availability */
        availability: {
            availableFrom: "2026-01-01",
            availableTo: "2027-12-31",
        },

        pricePerNight: 220,
        nights: 7,
        totalPrice: 1540,
    },

    {
        id: 4,
        name: "Paris Montmartre Apartment",
        location: "Paris, France",
        image: parisApartment,

        badge: "Hot Deal",
        badgeColor: "orange",

        rating: 4.5,
        score: 4.5,
        reviewText: "Excellent",
        reviews: 420,

        propertyType: "Serviced Apt",

        amenities: [
            "Kitchen",
            "Free WiFi",
            "Washing Machine",
            "Elevator",
        ],

        neighborhood: "Airport Area",

        beds: 1,
        baths: 1,
        kitchen: true,

        /* Search Capacity */
        maxGuests: 3,
        rooms: 1,

        /* Availability */
        availability: {
            availableFrom: "2026-01-01",
            availableTo: "2027-12-31",
        },

        pricePerNight: 120,
        nights: 7,
        totalPrice: 840,
    },
];


/* =========================
   PROPERTY TYPES
========================= */

export const propertyTypes = [
    {
        id: 1,
        name: "Apartment",
        count: 655,
    },
    {
        id: 2,
        name: "Studio",
        count: 320,
    },
    {
        id: 3,
        name: "Penthouse",
        count: 125,
    },
    {
        id: 4,
        name: "Serviced Apt",
        count: 245,
    },
];


/* =========================
   AMENITIES
========================= */

export const amenities = [
    {
        id: 1,
        name: "Kitchen",
        count: 850,
    },
    {
        id: 2,
        name: "Free WiFi",
        count: 920,
    },
    {
        id: 3,
        name: "Washing Machine",
        count: 642,
    },
    {
        id: 4,
        name: "Parking",
        count: 512,
    },
    {
        id: 5,
        name: "Air Conditioning",
        count: 687,
    },
    {
        id: 6,
        name: "Elevator",
        count: 420,
    },
];


/* =========================
   NEIGHBORHOODS
========================= */

export const neighborhoods = [
    {
        id: 1,
        name: "Downtown",
        count: 230,
    },
    {
        id: 2,
        name: "Near Beach",
        count: 320,
    },
    {
        id: 3,
        name: "Business District",
        count: 175,
    },
    {
        id: 4,
        name: "Airport Area",
        count: 210,
    },
];


/* =========================
   WHY BOOK WITH US
========================= */

export const whyBookWithUs = [
    {
        id: 1,
        title: "Best Price Guarantee",
        description: "We offer the lowest prices",
        icon: "shield",
    },
    {
        id: 2,
        title: "Secure Booking",
        description: "Your data is 100% safe",
        icon: "lock",
    },
    {
        id: 3,
        title: "Free Cancellation",
        description: "Up to 24 hours before check-in",
        icon: "cancel",
    },
    {
        id: 4,
        title: "24/7 Customer Support",
        description: "We are here to help you",
        icon: "support",
    },
];


/* =========================
   TOP APARTMENT DESTINATIONS
========================= */

export const topApartmentDestinations = [
    {
        id: 1,
        name: "Dubai",
        count: 658,
        image: dubaiApartment,
    },
    {
        id: 2,
        name: "Bangkok",
        count: 530,
        image: bangkokApartment,
    },
    {
        id: 3,
        name: "New York",
        count: 482,
        image: newYorkApartment,
    },
    {
        id: 4,
        name: "Paris",
        count: 396,
        image: parisApartment,
    },
    {
        id: 5,
        name: "London",
        count: 356,
        image: newYorkApartment,
    },
];


/* =========================
   BOTTOM FEATURES
========================= */

export const apartmentFeatures = [
    {
        id: 1,
        title: "Fully Furnished",
        description: "Feel at home",
        icon: "furnished",
    },
    {
        id: 2,
        title: "Secure Payments",
        description: "100% safe & secure",
        icon: "payment",
    },
    {
        id: 3,
        title: "Easy Booking",
        description: "Book in just a few clicks",
        icon: "booking",
    },
    {
        id: 4,
        title: "Long Stay Discounts",
        description: "Save more on long stays",
        icon: "discount",
    },
    {
        id: 5,
        title: "24/7 Support",
        description: "We are here for you",
        icon: "support",
    },
];