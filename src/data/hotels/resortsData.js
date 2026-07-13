// ==============================================
// RESORT IMAGES
// ==============================================

import resort1 from "../../assets/images/hotels/resorts/resort1.jpg";
import resort2 from "../../assets/images/hotels/resorts/resort2.jpg";
import resort3 from "../../assets/images/hotels/resorts/resort3.jpg";
import resort4 from "../../assets/images/hotels/resorts/resort4.jpg";
import resort5 from "../../assets/images/hotels/resorts/resort5.jpg";
import resort6 from "../../assets/images/hotels/resorts/resort6.jpg";
import resort7 from "../../assets/images/hotels/resorts/resort7.jpg";
import resort8 from "../../assets/images/hotels/resorts/resort8.jpg";

// ==============================================
// RESORT DATA
// ==============================================

export const resortsData = [
    {
        id: 1,
        name: "Soneva Jani Maldives",
        location: "Noonu Atoll, Maldives",
        city: "Noonu Atoll",
        country: "Maldives",
        image: resort1,

        stars: 5,
        rating: 4.9,
        ratingText: "Exceptional",
        reviews: 1284,

        pricePerNight: 780,
        oldPrice: 920,
        nights: 7,

        badge: "Luxury Choice",

        facilities: [
            "Private Beach",
            "Swimming Pool",
            "Free WiFi",
            "Spa",
            "Water Sports",
        ],
    },

    {
        id: 2,
        name: "Four Seasons Resort Bali",
        location: "Jimbaran Bay, Bali, Indonesia",
        city: "Bali",
        country: "Indonesia",
        image: resort2,

        stars: 5,
        rating: 4.8,
        ratingText: "Exceptional",
        reviews: 956,

        pricePerNight: 620,
        oldPrice: 750,
        nights: 7,

        badge: "Best Seller",

        facilities: [
            "Private Beach",
            "Swimming Pool",
            "Free Breakfast",
            "Spa",
            "Fitness Center",
        ],
    },

    {
        id: 3,
        name: "Anantara Riverside Resort",
        location: "Bangkok, Thailand",
        city: "Bangkok",
        country: "Thailand",
        image: resort3,

        stars: 5,
        rating: 4.7,
        ratingText: "Wonderful",
        reviews: 2145,

        pricePerNight: 340,
        oldPrice: 410,
        nights: 7,

        badge: "Popular",

        facilities: [
            "Swimming Pool",
            "Free WiFi",
            "Spa",
            "Free Breakfast",
            "Airport Shuttle",
        ],
    },

    {
        id: 4,
        name: "The Ritz-Carlton Langkawi",
        location: "Langkawi, Malaysia",
        city: "Langkawi",
        country: "Malaysia",
        image: resort4,

        stars: 5,
        rating: 4.8,
        ratingText: "Exceptional",
        reviews: 1187,

        pricePerNight: 510,
        oldPrice: 620,
        nights: 7,

        badge: "Top Rated",

        facilities: [
            "Private Beach",
            "Swimming Pool",
            "Free WiFi",
            "Spa",
            "Fitness Center",
        ],
    },

    {
        id: 5,
        name: "Centara Grand Beach Resort",
        location: "Krabi, Thailand",
        city: "Krabi",
        country: "Thailand",
        image: resort5,

        stars: 4,
        rating: 4.6,
        ratingText: "Excellent",
        reviews: 1860,

        pricePerNight: 285,
        oldPrice: 350,
        nights: 7,

        badge: "Great Value",

        facilities: [
            "Private Beach",
            "Swimming Pool",
            "Free Breakfast",
            "Water Sports",
            "Free WiFi",
        ],
    },

    {
        id: 6,
        name: "Shangri-La Hambantota",
        location: "Hambantota, Sri Lanka",
        city: "Hambantota",
        country: "Sri Lanka",
        image: resort6,

        stars: 5,
        rating: 4.5,
        ratingText: "Excellent",
        reviews: 1432,

        pricePerNight: 390,
        oldPrice: 470,
        nights: 7,

        badge: "Family Favorite",

        facilities: [
            "Swimming Pool",
            "Free WiFi",
            "Spa",
            "Golf Course",
            "Free Breakfast",
        ],
    },

    {
        id: 7,
        name: "InterContinental Phuket Resort",
        location: "Kamala Beach, Phuket, Thailand",
        city: "Phuket",
        country: "Thailand",
        image: resort7,

        stars: 5,
        rating: 4.7,
        ratingText: "Wonderful",
        reviews: 1685,

        pricePerNight: 460,
        oldPrice: 540,
        nights: 7,

        badge: "Trending",

        facilities: [
            "Private Beach",
            "Swimming Pool",
            "Free WiFi",
            "Spa",
            "Airport Shuttle",
        ],
    },

    {
        id: 8,
        name: "The Westin Maldives",
        location: "Baa Atoll, Maldives",
        city: "Baa Atoll",
        country: "Maldives",
        image: resort8,

        stars: 5,
        rating: 4.9,
        ratingText: "Exceptional",
        reviews: 874,

        pricePerNight: 690,
        oldPrice: 810,
        nights: 7,

        badge: "Premium Escape",

        facilities: [
            "Private Beach",
            "Swimming Pool",
            "Free WiFi",
            "Water Sports",
            "Spa",
        ],
    },
];

// ==============================================
// STAR RATING FILTERS
// ==============================================

export const resortStarRatingFilters = [
    { id: 1, value: 5, label: "5 Stars" },
    { id: 2, value: 4, label: "4 Stars" },
    { id: 3, value: 3, label: "3 Stars" },
    { id: 4, value: 2, label: "2 Stars" },
    { id: 5, value: 1, label: "1 Star" },
];

// ==============================================
// GUEST RATING FILTERS
// ==============================================

export const resortGuestRatingFilters = [
    {
        id: 1,
        value: 4.5,
        label: "4.5 & Above",
    },
    {
        id: 2,
        value: 4.0,
        label: "4.0 & Above",
    },
    {
        id: 3,
        value: 3.5,
        label: "3.5 & Above",
    },
    {
        id: 4,
        value: 3.0,
        label: "3.0 & Above",
    },
];

// ==============================================
// FACILITIES FILTERS
// ==============================================

export const resortFacilitiesFilters = [
    {
        id: 1,
        value: "Private Beach",
        label: "Private Beach",
    },
    {
        id: 2,
        value: "Swimming Pool",
        label: "Swimming Pool",
    },
    {
        id: 3,
        value: "Free WiFi",
        label: "Free WiFi",
    },
    {
        id: 4,
        value: "Spa",
        label: "Spa & Wellness",
    },
    {
        id: 5,
        value: "Free Breakfast",
        label: "Free Breakfast",
    },
    {
        id: 6,
        value: "Water Sports",
        label: "Water Sports",
    },
    {
        id: 7,
        value: "Fitness Center",
        label: "Fitness Center",
    },
    {
        id: 8,
        value: "Airport Shuttle",
        label: "Airport Shuttle",
    },
];

// ==============================================
// RESORT DESTINATIONS
// ==============================================

export const resortDestinations = [
    {
        id: 1,
        name: "Maldives",
        image: resort1,
        resorts: 248,
    },
    {
        id: 2,
        name: "Bali",
        image: resort2,
        resorts: 315,
    },
    {
        id: 3,
        name: "Thailand",
        image: resort3,
        resorts: 426,
    },
    {
        id: 4,
        name: "Malaysia",
        image: resort4,
        resorts: 184,
    },
];