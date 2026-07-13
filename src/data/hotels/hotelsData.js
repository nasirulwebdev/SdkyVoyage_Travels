import atlantisImg from "../../assets/images/hotels/atlantis-the-palm.jpg";
import sunSiyamImg from "../../assets/images/hotels/sun-siyam-iru-fushi.jpg";
import marinaBayImg from "../../assets/images/hotels/marina-bay-sands.jpg";
import shangriLaImg from "../../assets/images/hotels/shangri-la-paris.jpg";

import dubaiImg from "../../assets/images/hotels/dubaai.jpg";
import maldivesImg from "../../assets/images/hotels/maldives.jpg";
import singaporeImg from "../../assets/images/hotels/singapore.jpg";
import parisImg from "../../assets/images/hotels/paris.jpg";
import bangkokImg from "../../assets/images/hotels/bangkok.jpg";

// ==========================================
// HOTEL LIST
// ==========================================

export const hotelsData = [
    {
        id: 1,
        name: "Atlantis The Palm",
        slug: "atlantis-the-palm",
        location: "Dubai, United Arab Emirates",
        image: atlantisImg,

        badge: "Best Seller",
        rating: 4.8,
        ratingText: "Excellent",
        reviews: 1250,
        stars: 5,

        pricePerNight: 350,
        totalPrice: 2450,
        nights: 7,

        facilities: [
            "Free WiFi",
            "Pool",
            "Breakfast",
            "Airport Shuttle",
        ],
    },

    {
        id: 2,
        name: "Sun Siyam Iru Fushi",
        slug: "sun-siyam-iru-fushi",
        location: "Maldives",
        image: sunSiyamImg,

        badge: "Popular",
        rating: 4.7,
        ratingText: "Excellent",
        reviews: 980,
        stars: 5,

        pricePerNight: 420,
        totalPrice: 2940,
        nights: 7,

        facilities: [
            "Free WiFi",
            "Pool",
            "Breakfast",
            "Spa",
        ],
    },

    {
        id: 3,
        name: "Marina Bay Sands",
        slug: "marina-bay-sands",
        location: "Singapore",
        image: marinaBayImg,

        badge: "Great Deal",
        rating: 4.6,
        ratingText: "Excellent",
        reviews: 1150,
        stars: 5,

        pricePerNight: 310,
        totalPrice: 2170,
        nights: 7,

        facilities: [
            "Free WiFi",
            "Pool",
            "Breakfast",
            "Parking",
        ],
    },

    {
        id: 4,
        name: "Shangri-La Hotel Paris",
        slug: "shangri-la-hotel-paris",
        location: "Paris, France",
        image: shangriLaImg,

        badge: "Luxury",
        rating: 4.9,
        ratingText: "Exceptional",
        reviews: 870,
        stars: 5,

        pricePerNight: 560,
        totalPrice: 3920,
        nights: 7,

        facilities: [
            "Free WiFi",
            "Pool",
            "Breakfast",
            "Spa",
        ],
    },
];

// ==========================================
// TOP DESTINATIONS
// ==========================================

export const hotelDestinations = [
    {
        id: 1,
        name: "Dubai",
        image: dubaiImg,
        hotels: 856,
    },
    {
        id: 2,
        name: "Maldives",
        image: maldivesImg,
        hotels: 642,
    },
    {
        id: 3,
        name: "Singapore",
        image: singaporeImg,
        hotels: 512,
    },
    {
        id: 4,
        name: "Paris",
        image: parisImg,
        hotels: 420,
    },
    {
        id: 5,
        name: "Bangkok",
        image: bangkokImg,
        hotels: 398,
    },
];

// ==========================================
// STAR RATING FILTER
// ==========================================

export const starRatingFilters = [
    {
        id: 1,
        stars: 5,
        count: 125,
    },
    {
        id: 2,
        stars: 4,
        count: 320,
    },
    {
        id: 3,
        stars: 3,
        count: 468,
    },
    {
        id: 4,
        stars: 2,
        count: 230,
    },
    {
        id: 5,
        stars: 1,
        count: 75,
    },
];

// ==========================================
// GUEST RATING FILTER
// ==========================================

export const guestRatingFilters = [
    {
        id: 1,
        label: "4.5 & Above",
        value: 4.5,
        count: 350,
    },
    {
        id: 2,
        label: "4.0 & Above",
        value: 4.0,
        count: 575,
    },
    {
        id: 3,
        label: "3.5 & Above",
        value: 3.5,
        count: 820,
    },
    {
        id: 4,
        label: "3.0 & Above",
        value: 3.0,
        count: 950,
    },
];

// ==========================================
// FACILITIES FILTER
// ==========================================

export const facilitiesFilters = [
    {
        id: 1,
        name: "Free WiFi",
        count: 850,
    },
    {
        id: 2,
        name: "Swimming Pool",
        count: 642,
    },
    {
        id: 3,
        name: "Free Breakfast",
        count: 512,
    },
    {
        id: 4,
        name: "Airport Shuttle",
        count: 245,
    },
    {
        id: 5,
        name: "Parking",
        count: 687,
    },
];