
import hajjPackageHeroImage from "../../assets/images/Hajj&Umrah/Hajj-Package-hero.jpg";
// =========================================================
// HAJJ IMAGES
// =========================================================

import hajjEconomy from "../../assets/images/Hajj&Umrah/hajj-economy.jpg";
import hajjStandard from "../../assets/images/Hajj&Umrah/hajj-standard.jpg";
import hajjDeluxe from "../../assets/images/Hajj&Umrah/hajj-deluxe.jpg";
import hajjVip from "../../assets/images/Hajj&Umrah/hajj-vip.jpg";
import hajjPremium from "../../assets/images/Hajj&Umrah/hajj-premium.jpg";
import hajjFamily from "../../assets/images/Hajj&Umrah/hajj-family.jpg";
import hajjLuxury from "../../assets/images/Hajj&Umrah/hajj-luxury.jpg";


// =========================================================
// UMRAH IMAGES
// Used only as package card images for visual variety
// =========================================================

import umrahEconomy from "../../assets/images/Hajj&Umrah/umrah-economy.jpg";
import umrahStandard from "../../assets/images/Hajj&Umrah/umrah-standard.jpg";
import umrahDeluxe from "../../assets/images/Hajj&Umrah/umrah-deluxe.jpg";
import umrahLuxury from "../../assets/images/Hajj&Umrah/umrah-luxury.jpg";
import umrahPremium from "../../assets/images/Hajj&Umrah/umrah-premium.jpg";
import umrahFamily from "../../assets/images/Hajj&Umrah/umrah-family.jpg";
import umrahRamadan from "../../assets/images/Hajj&Umrah/umrah-ramadan.jpg";


// =========================================================
// HAJJ PACKAGE HERO DATA
// =========================================================

export const hajjPackageHeroData = {
    breadcrumb: [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Hajj & Umrah",
            path: "/hajj-umrah",
        },
        {
            label: "Hajj Packages",
            path: "/hajj-umrah/hajj-packages",
        },
    ],

    title: "Hajj Packages",

    description:
        "Begin your spiritual journey with our all-inclusive Hajj packages for a peaceful and blessed experience.",

    image: hajjPremium,

    trustItems: [
        {
            id: 1,
            icon: "ShieldCheck",
            title: "Licensed & Trusted",
        },
        {
            id: 2,
            icon: "BadgeCheck",
            title: "Experienced Guides",
        },
        {
            id: 3,
            icon: "Hotel",
            title: "Comfortable Stay",
        },
        {
            id: 4,
            icon: "Headphones",
            title: "24/7 Support",
        },
    ],
};


// =========================================================
// SEARCH DATA
// =========================================================

export const hajjPackageSearchData = {
    packageTypes: [
        {
            label: "All Hajj Packages",
            value: "all",
        },
        {
            label: "Economy",
            value: "economy",
        },
        {
            label: "Standard",
            value: "standard",
        },
        {
            label: "Deluxe",
            value: "deluxe",
        },
        {
            label: "Premium",
            value: "premium",
        },
        {
            label: "Family",
            value: "family",
        },
        {
            label: "VIP",
            value: "vip",
        },
        {
            label: "Luxury",
            value: "luxury",
        },
    ],

    departureCities: [
        {
            label: "All Cities",
            value: "all",
        },
        {
            label: "Dhaka",
            value: "dhaka",
        },
        {
            label: "Chattogram",
            value: "chattogram",
        },
        {
            label: "Sylhet",
            value: "sylhet",
        },
        {
            label: "Rajshahi",
            value: "rajshahi",
        },
    ],

    durations: [
        {
            label: "Any Duration",
            value: "all",
        },
        {
            label: "20 - 30 Days",
            value: "20-30",
        },
        {
            label: "31 - 40 Days",
            value: "31-40",
        },
        {
            label: "41+ Days",
            value: "41-plus",
        },
    ],
};


// =========================================================
// FILTER DATA
// =========================================================

export const hajjPackageFilterData = {
    packageTypes: [
        {
            id: 1,
            label: "All Hajj Packages",
            value: "all",
        },
        {
            id: 2,
            label: "Economy",
            value: "economy",
        },
        {
            id: 3,
            label: "Standard",
            value: "standard",
        },
        {
            id: 4,
            label: "Deluxe",
            value: "deluxe",
        },
        {
            id: 5,
            label: "Premium",
            value: "premium",
        },
        {
            id: 6,
            label: "Family",
            value: "family",
        },
        {
            id: 7,
            label: "VIP",
            value: "vip",
        },
        {
            id: 8,
            label: "Luxury",
            value: "luxury",
        },
    ],

    departureCities: [
        {
            id: 1,
            label: "All Cities",
            value: "all",
        },
        {
            id: 2,
            label: "Dhaka",
            value: "dhaka",
        },
        {
            id: 3,
            label: "Chattogram",
            value: "chattogram",
        },
        {
            id: 4,
            label: "Sylhet",
            value: "sylhet",
        },
        {
            id: 5,
            label: "Rajshahi",
            value: "rajshahi",
        },
    ],

    durations: [
        {
            id: 1,
            label: "20 - 30 Days",
            value: "20-30",
            min: 20,
            max: 30,
        },
        {
            id: 2,
            label: "31 - 40 Days",
            value: "31-40",
            min: 31,
            max: 40,
        },
        {
            id: 3,
            label: "41+ Days",
            value: "41-plus",
            min: 41,
            max: 100,
        },
    ],

    priceRange: {
        min: 3500,
        max: 10000,
        step: 100,
    },
};


// =========================================================
// SORT OPTIONS
// =========================================================

export const hajjPackageSortOptions = [
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
        label: "Highest Rated",
        value: "highest-rated",
    },
    {
        id: 5,
        label: "Duration: Shortest",
        value: "duration-shortest",
    },
];


// =========================================================
// 14 HAJJ PACKAGES
// =========================================================

export const hajjPackages = [
    {
        id: 1,
        title: "Hajj Economy Package",
        slug: "hajj-economy-package",
        image: hajjEconomy,
        badge: "Best Seller",
        packageType: "economy",
        departureCity: "dhaka",
        duration: 20,
        durationLabel: "20 Days",
        rating: 4.6,
        reviewCount: 120,
        hotelDistance: "Near Haram",
        makkahNights: 10,
        madinahNights: 6,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "Affordable and comfortable Hajj package with quality accommodation, guided support and essential services.",
        price: 4200,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 2,
        title: "Hajj Standard Package",
        slug: "hajj-standard-package",
        image: hajjStandard,
        badge: "Popular",
        packageType: "standard",
        departureCity: "dhaka",
        duration: 25,
        durationLabel: "25 Days",
        rating: 4.7,
        reviewCount: 90,
        hotelDistance: "800m from Haram",
        makkahNights: 12,
        madinahNights: 7,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "A balanced Hajj package with comfortable hotels, airport transfers and experienced religious guidance.",
        price: 5200,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 3,
        title: "Hajj Deluxe Package",
        slug: "hajj-deluxe-package",
        image: hajjDeluxe,
        badge: "Premium Choice",
        packageType: "deluxe",
        departureCity: "chattogram",
        duration: 28,
        durationLabel: "28 Days",
        rating: 4.8,
        reviewCount: 180,
        hotelDistance: "500m from Haram",
        makkahNights: 14,
        madinahNights: 8,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "Premium accommodation near the Haram with quality meals, transport and dedicated Hajj assistance.",
        price: 6200,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 4,
        title: "Hajj VIP Package",
        slug: "hajj-vip-package",
        image: hajjVip,
        badge: "VIP",
        packageType: "vip",
        departureCity: "dhaka",
        duration: 30,
        durationLabel: "30 Days",
        rating: 4.9,
        reviewCount: 130,
        hotelDistance: "300m from Haram",
        makkahNights: 15,
        madinahNights: 9,
        flightType: "Business Class",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "An exclusive VIP Hajj journey featuring premium hotels, private transfers and personalized assistance.",
        price: 8500,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 5,
        title: "Hajj Premium Package",
        slug: "hajj-premium-package",
        image: hajjPremium,
        badge: "Recommended",
        packageType: "premium",
        departureCity: "sylhet",
        duration: 32,
        durationLabel: "32 Days",
        rating: 4.8,
        reviewCount: 145,
        hotelDistance: "450m from Haram",
        makkahNights: 16,
        madinahNights: 9,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "A premium spiritual journey with excellent accommodation, full guidance and reliable travel services.",
        price: 6800,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 6,
        title: "Hajj Family Package",
        slug: "hajj-family-package",
        image: hajjFamily,
        badge: "Family Choice",
        packageType: "family",
        departureCity: "rajshahi",
        duration: 35,
        durationLabel: "35 Days",
        rating: 4.7,
        reviewCount: 105,
        hotelDistance: "700m from Haram",
        makkahNights: 17,
        madinahNights: 10,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "A family-friendly Hajj package designed for comfort, convenience and a peaceful spiritual experience.",
        price: 5900,
        currency: "$",
        priceUnit: "/Person",
        featured: false,
    },

    {
        id: 7,
        title: "Hajj Luxury Package",
        slug: "hajj-luxury-package",
        image: hajjLuxury,
        badge: "Luxury",
        packageType: "luxury",
        departureCity: "dhaka",
        duration: 38,
        durationLabel: "38 Days",
        rating: 5,
        reviewCount: 98,
        hotelDistance: "200m from Haram",
        makkahNights: 19,
        madinahNights: 11,
        flightType: "Business Class",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "A luxury Hajj experience with five-star hotels, VIP transportation and exceptional personalized service.",
        price: 9600,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 8,
        title: "Essential Economy Hajj",
        slug: "essential-economy-hajj",
        image: umrahEconomy,
        badge: "Best Value",
        packageType: "economy",
        departureCity: "chattogram",
        duration: 22,
        durationLabel: "22 Days",
        rating: 4.5,
        reviewCount: 76,
        hotelDistance: "1.2km from Haram",
        makkahNights: 11,
        madinahNights: 6,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "A value-focused Hajj package providing all essential services with trusted support throughout the journey.",
        price: 3900,
        currency: "$",
        priceUnit: "/Person",
        featured: false,
    },

    {
        id: 9,
        title: "Classic Standard Hajj",
        slug: "classic-standard-hajj",
        image: umrahStandard,
        badge: "Classic",
        packageType: "standard",
        departureCity: "sylhet",
        duration: 31,
        durationLabel: "31 Days",
        rating: 4.6,
        reviewCount: 84,
        hotelDistance: "900m from Haram",
        makkahNights: 15,
        madinahNights: 8,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "A complete standard Hajj journey combining comfortable accommodation and dependable pilgrimage services.",
        price: 5400,
        currency: "$",
        priceUnit: "/Person",
        featured: false,
    },

    {
        id: 10,
        title: "Deluxe Comfort Hajj",
        slug: "deluxe-comfort-hajj",
        image: umrahDeluxe,
        badge: "Comfort",
        packageType: "deluxe",
        departureCity: "dhaka",
        duration: 36,
        durationLabel: "36 Days",
        rating: 4.8,
        reviewCount: 112,
        hotelDistance: "550m from Haram",
        makkahNights: 18,
        madinahNights: 10,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "Enhanced comfort with premium hotels, convenient transportation and experienced Hajj guides.",
        price: 6500,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 11,
        title: "Executive VIP Hajj",
        slug: "executive-vip-hajj",
        image: umrahLuxury,
        badge: "Executive",
        packageType: "vip",
        departureCity: "chattogram",
        duration: 40,
        durationLabel: "40 Days",
        rating: 4.9,
        reviewCount: 89,
        hotelDistance: "250m from Haram",
        makkahNights: 20,
        madinahNights: 11,
        flightType: "Business Class",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "An executive-level Hajj package offering VIP services, premium stays and dedicated personal assistance.",
        price: 8900,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },

    {
        id: 12,
        title: "Extended Premium Hajj",
        slug: "extended-premium-hajj",
        image: umrahPremium,
        badge: "Extended",
        packageType: "premium",
        departureCity: "dhaka",
        duration: 42,
        durationLabel: "42 Days",
        rating: 4.8,
        reviewCount: 118,
        hotelDistance: "400m from Haram",
        makkahNights: 21,
        madinahNights: 12,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "An extended premium journey allowing more time for worship in Makkah and Madinah.",
        price: 7200,
        currency: "$",
        priceUnit: "/Person",
        featured: false,
    },

    {
        id: 13,
        title: "Extended Family Hajj",
        slug: "extended-family-hajj",
        image: umrahFamily,
        badge: "Family",
        packageType: "family",
        departureCity: "rajshahi",
        duration: 45,
        durationLabel: "45 Days",
        rating: 4.7,
        reviewCount: 94,
        hotelDistance: "650m from Haram",
        makkahNights: 22,
        madinahNights: 13,
        flightType: "Return Flight",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "An extended family pilgrimage with comfortable accommodation and complete travel support.",
        price: 6300,
        currency: "$",
        priceUnit: "/Person",
        featured: false,
    },

    {
        id: 14,
        title: "Signature Luxury Hajj",
        slug: "signature-luxury-hajj",
        image: umrahRamadan,
        badge: "Signature",
        packageType: "luxury",
        departureCity: "chattogram",
        duration: 50,
        durationLabel: "50 Days",
        rating: 5,
        reviewCount: 72,
        hotelDistance: "150m from Haram",
        makkahNights: 25,
        madinahNights: 15,
        flightType: "Business Class",
        visaIncluded: true,
        mealsIncluded: true,
        transportIncluded: true,
        description:
            "Our signature luxury Hajj experience with world-class hospitality, VIP transport and dedicated service.",
        price: 10000,
        currency: "$",
        priceUnit: "/Person",
        featured: true,
    },
];


// =========================================================
// RIGHT SIDEBAR DATA
// =========================================================

export const hajjPackageSidebarData = {
    whyChooseUs: {
        title: "Why Choose Our",
        items: [
            {
                id: 1,
                icon: "BadgeCheck",
                title: "Licensed & Approved",
                description: "By Ministry of Hajj",
            },
            {
                id: 2,
                icon: "UserCheck",
                title: "Expert Guidance",
                description: "From experienced team",
            },
            {
                id: 3,
                icon: "Hotel",
                title: "Comfortable Stay",
                description: "In selected hotels",
            },
            {
                id: 4,
                icon: "Utensils",
                title: "Hygienic Meals",
                description: "Included in packages",
            },
            {
                id: 5,
                icon: "Headphones",
                title: "24/7 Customer Support",
                description: "We are here for you",
            },
        ],
    },

    help: {
        title: "Need Help?",
        description:
            "Our Hajj experts are here to assist you with your pilgrimage journey.",
        phone: "+880 1234 567890",
        email: "info@skyvoyagetravels.com",
        buttonText: "Contact Us",
        buttonPath: "/contact",
    },

    resources: {
        title: "Hajj Resources",
        items: [
            {
                id: 1,
                title: "Hajj Guide",
                path: "/hajj-guide",
            },
            {
                id: 2,
                title: "Required Documents",
                path: "/hajj-documents",
            },
            {
                id: 3,
                title: "Hajj Rituals",
                path: "/hajj-rituals",
            },
            {
                id: 4,
                title: "Packing Checklist",
                path: "/hajj-packing-checklist",
            },
        ],
    },
};


// =========================================================
// PAGINATION DATA
// =========================================================

export const hajjPackagePaginationData = {
    itemsPerPage: 4,
};


// =========================================================
// BOTTOM FEATURES DATA
// =========================================================

export const hajjPackageFeaturesData = [
    {
        id: 1,
        icon: "Luggage",
        title: "All Inclusive Packages",
        description: "Visa, Ticket, Stay & Meals",
    },
    {
        id: 2,
        icon: "Plane",
        title: "Direct Flights",
        description: "Comfortable & reliable",
    },
    {
        id: 3,
        icon: "Users",
        title: "Group & Private Options",
        description: "Flexible for everyone",
    },
    {
        id: 4,
        icon: "CreditCard",
        title: "Easy Payment Plans",
        description: "Secure & flexible payments",
    },
    {
        id: 5,
        icon: "CalendarCheck",
        title: "Trusted Service",
        description: "Thousands of happy pilgrims",
    },
];