// ========================================
// Images
// ========================================

// Hero
import hajjUmrahHero from "../../assets/images/Hajj&Umrah/Hajj&Umrah-hero.jpg";

// Umrah Package Images
import umrahEconomy from "../../assets/images/Hajj&Umrah/umrah-economy.jpg";
import umrahStandard from "../../assets/images/Hajj&Umrah/umrah-standard.jpg";
import umrahDeluxe from "../../assets/images/Hajj&Umrah/umrah-deluxe.jpg";
import umrahLuxury from "../../assets/images/Hajj&Umrah/umrah-luxury.jpg";
import umrahPremium from "../../assets/images/Hajj&Umrah/umrah-premium.jpg";
import umrahFamily from "../../assets/images/Hajj&Umrah/umrah-family.jpg";
import umrahRamadan from "../../assets/images/Hajj&Umrah/umrah-ramadan.jpg";

// Hajj Package Images
import hajjEconomy from "../../assets/images/Hajj&Umrah/hajj-economy.jpg";
import hajjStandard from "../../assets/images/Hajj&Umrah/hajj-standard.jpg";
import hajjDeluxe from "../../assets/images/Hajj&Umrah/hajj-deluxe.jpg";
import hajjVip from "../../assets/images/Hajj&Umrah/hajj-vip.jpg";
import hajjPremium from "../../assets/images/Hajj&Umrah/hajj-premium.jpg";
import hajjFamily from "../../assets/images/Hajj&Umrah/hajj-family.jpg";
import hajjLuxury from "../../assets/images/Hajj&Umrah/hajj-luxury.jpg";


// ========================================
// Hero Data
// ========================================

export const hajjUmrahHeroData = {
    title: "Hajj & Umrah Packages",

    subtitle: "A Spiritual Journey of a Lifetime",

    description:
        "We provide the best Hajj & Umrah packages with comfortable stay, delicious meals and expert guidance.",

    image: hajjUmrahHero,

    overlay: true,

    benefits: [
        {
            id: 1,
            icon: "ShieldCheck",
            title: "Best Price",
            subtitle: "Guarantee",
        },
        {
            id: 2,
            icon: "BadgeCheck",
            title: "Experienced",
            subtitle: "Guides",
        },
        {
            id: 3,
            icon: "BedDouble",
            title: "Comfortable",
            subtitle: "Stay",
        },
        {
            id: 4,
            icon: "Headphones",
            title: "24/7 Customer",
            subtitle: "Support",
        },
    ],
};


// ========================================
// Search Bar Data
// ========================================

export const hajjUmrahSearchData = {
    packageType: {
        label: "Package Type",
        placeholder: "All Packages",

        options: [
            {
                id: 1,
                label: "All Packages",
                value: "all",
            },
            {
                id: 2,
                label: "Umrah Packages",
                value: "umrah",
            },
            {
                id: 3,
                label: "Hajj Packages",
                value: "hajj",
            },
        ],
    },

    departureDate: {
        label: "Departure Date",
        placeholder: "Select Date",
    },

    travelers: {
        label: "Travelers",
        placeholder: "2 Travelers",

        options: [
            {
                id: 1,
                label: "1 Traveler",
                value: 1,
            },
            {
                id: 2,
                label: "2 Travelers",
                value: 2,
            },
            {
                id: 3,
                label: "3 Travelers",
                value: 3,
            },
            {
                id: 4,
                label: "4 Travelers",
                value: 4,
            },
            {
                id: 5,
                label: "5 Travelers",
                value: 5,
            },
            {
                id: 6,
                label: "6+ Travelers",
                value: 6,
            },
        ],
    },

    buttonText: "Search Packages",
};


// ========================================
// Filter Data
// ========================================

export const hajjUmrahFilterData = {
    title: "Filter Packages",

    packageType: {
        title: "Package Type",

        options: [
            {
                id: 1,
                label: "All Packages",
                value: "all",
            },
            {
                id: 2,
                label: "Umrah Packages",
                value: "umrah",
            },
            {
                id: 3,
                label: "Hajj Packages",
                value: "hajj",
            },
        ],
    },

    departureCity: {
        title: "Departure City",

        options: [
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
    },

    duration: {
        title: "Duration",

        options: [
            {
                id: 1,
                label: "All Durations",
                value: "all",
                min: 0,
                max: 100,
            },
            {
                id: 2,
                label: "3 - 7 Days",
                value: "3-7",
                min: 3,
                max: 7,
            },
            {
                id: 3,
                label: "8 - 14 Days",
                value: "8-14",
                min: 8,
                max: 14,
            },
            {
                id: 4,
                label: "15+ Days",
                value: "15-plus",
                min: 15,
                max: 100,
            },
        ],
    },

    priceRange: {
        title: "Price Range",
        min: 500,
        max: 8500,
        step: 100,
        currency: "USD",
        currencySymbol: "$",
    },

    clearButtonText: "Clear All",
    applyButtonText: "Apply Filters",
};


// ========================================
// Toolbar Data
// ========================================

export const hajjUmrahToolbarData = {
    resultsText: "packages",

    sortOptions: [
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
            label: "Duration: Short to Long",
            value: "duration-short-long",
        },
        {
            id: 5,
            label: "Duration: Long to Short",
            value: "duration-long-short",
        },
        {
            id: 6,
            label: "Highest Rated",
            value: "highest-rated",
        },
    ],
};


// ========================================
// Package Data
// ========================================

export const hajjUmrahPackages = [
    {
        id: 1,
        slug: "umrah-economy-package",
        title: "Umrah Economy Package",
        packageType: "umrah",
        image: umrahEconomy,

        badge: {
            text: "Best Seller",
            type: "success",
        },

        duration: 7,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Makkah",
                nights: 3,
            },
            {
                id: 2,
                label: "Madinah",
                nights: 3,
            },
        ],

        price: 780,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.9,
        reviews: 148,

        featured: true,
        popular: true,
        recommended: 14,

        buttonText: "View Details",
    },

    {
        id: 2,
        slug: "umrah-standard-package",
        title: "Umrah Standard Package",
        packageType: "umrah",
        image: umrahStandard,

        badge: {
            text: "Popular",
            type: "popular",
        },

        duration: 10,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Makkah",
                nights: 4,
            },
            {
                id: 2,
                label: "Madinah",
                nights: 5,
            },
        ],

        price: 950,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.8,
        reviews: 126,

        featured: true,
        popular: true,
        recommended: 13,

        buttonText: "View Details",
    },

    {
        id: 3,
        slug: "umrah-deluxe-package",
        title: "Umrah Deluxe Package",
        packageType: "umrah",
        image: umrahDeluxe,

        badge: {
            text: "Premium",
            type: "premium",
        },

        duration: 10,
        departureCity: "chattogram",
        departureCityLabel: "Chattogram",

        stays: [
            {
                id: 1,
                label: "Makkah",
                nights: 5,
            },
            {
                id: 2,
                label: "Madinah",
                nights: 5,
            },
        ],

        price: 1250,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.8,
        reviews: 98,

        featured: true,
        popular: true,
        recommended: 12,

        buttonText: "View Details",
    },

    {
        id: 4,
        slug: "umrah-luxury-package",
        title: "Umrah Luxury Package",
        packageType: "umrah",
        image: umrahLuxury,

        badge: {
            text: "Luxury",
            type: "luxury",
        },

        duration: 14,
        departureCity: "sylhet",
        departureCityLabel: "Sylhet",

        stays: [
            {
                id: 1,
                label: "Makkah",
                nights: 6,
            },
            {
                id: 2,
                label: "Madinah",
                nights: 7,
            },
        ],

        price: 1650,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.9,
        reviews: 86,

        featured: true,
        popular: true,
        recommended: 11,

        buttonText: "View Details",
    },

    {
        id: 5,
        slug: "hajj-economy-package",
        title: "Hajj Economy Package",
        packageType: "hajj",
        image: hajjEconomy,

        badge: {
            text: "Early Bird",
            type: "warning",
        },

        duration: 20,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Mina",
                nights: 5,
            },
            {
                id: 2,
                label: "Arafat",
                nights: 1,
            },
        ],

        price: 4200,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.8,
        reviews: 112,

        featured: true,
        popular: true,
        recommended: 10,

        buttonText: "View Details",
    },

    {
        id: 6,
        slug: "hajj-standard-package",
        title: "Hajj Standard Package",
        packageType: "hajj",
        image: hajjStandard,

        badge: {
            text: "Recommended",
            type: "recommended",
        },

        duration: 22,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Mina",
                nights: 5,
            },
            {
                id: 2,
                label: "Arafat",
                nights: 1,
            },
        ],

        price: 5200,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.9,
        reviews: 137,

        featured: true,
        popular: true,
        recommended: 9,

        buttonText: "View Details",
    },

    {
        id: 7,
        slug: "hajj-deluxe-package",
        title: "Hajj Deluxe Package",
        packageType: "hajj",
        image: hajjDeluxe,

        badge: {
            text: "Premium",
            type: "premium",
        },

        duration: 25,
        departureCity: "chattogram",
        departureCityLabel: "Chattogram",

        stays: [
            {
                id: 1,
                label: "Mina",
                nights: 5,
            },
            {
                id: 2,
                label: "Arafat",
                nights: 1,
            },
        ],

        price: 6200,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.9,
        reviews: 94,

        featured: true,
        popular: true,
        recommended: 8,

        buttonText: "View Details",
    },

    {
        id: 8,
        slug: "hajj-vip-package",
        title: "Hajj VIP Package",
        packageType: "hajj",
        image: hajjVip,

        badge: {
            text: "VIP",
            type: "vip",
        },

        duration: 30,
        departureCity: "sylhet",
        departureCityLabel: "Sylhet",

        stays: [
            {
                id: 1,
                label: "Mina",
                nights: 5,
            },
            {
                id: 2,
                label: "Arafat",
                nights: 1,
            },
        ],

        price: 8200,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 5,
        reviews: 72,

        featured: true,
        popular: true,
        recommended: 7,

        buttonText: "View Details",
    },

    {
        id: 9,
        slug: "umrah-premium-package",
        title: "Umrah Premium Package",
        packageType: "umrah",
        image: umrahPremium,

        badge: {
            text: "Premium",
            type: "premium",
        },

        duration: 12,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Makkah",
                nights: 6,
            },
            {
                id: 2,
                label: "Madinah",
                nights: 5,
            },
        ],

        price: 1450,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.8,
        reviews: 89,

        featured: false,
        popular: true,
        recommended: 6,

        buttonText: "View Details",
    },

    {
        id: 10,
        slug: "umrah-family-package",
        title: "Umrah Family Package",
        packageType: "umrah",
        image: umrahFamily,

        badge: {
            text: "Family",
            type: "family",
        },

        duration: 14,
        departureCity: "rajshahi",
        departureCityLabel: "Rajshahi",

        stays: [
            {
                id: 1,
                label: "Makkah",
                nights: 7,
            },
            {
                id: 2,
                label: "Madinah",
                nights: 6,
            },
        ],

        price: 1800,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.7,
        reviews: 76,

        featured: false,
        popular: false,
        recommended: 5,

        buttonText: "View Details",
    },

    {
        id: 11,
        slug: "umrah-ramadan-package",
        title: "Umrah Ramadan Package",
        packageType: "umrah",
        image: umrahRamadan,

        badge: {
            text: "Special",
            type: "special",
        },

        duration: 15,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Makkah",
                nights: 8,
            },
            {
                id: 2,
                label: "Madinah",
                nights: 6,
            },
        ],

        price: 2200,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.9,
        reviews: 103,

        featured: false,
        popular: true,
        recommended: 4,

        buttonText: "View Details",
    },

    {
        id: 12,
        slug: "hajj-premium-package",
        title: "Hajj Premium Package",
        packageType: "hajj",
        image: hajjPremium,

        badge: {
            text: "Premium",
            type: "premium",
        },

        duration: 25,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Mina",
                nights: 5,
            },
            {
                id: 2,
                label: "Arafat",
                nights: 1,
            },
        ],

        price: 6800,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.9,
        reviews: 84,

        featured: false,
        popular: true,
        recommended: 3,

        buttonText: "View Details",
    },

    {
        id: 13,
        slug: "hajj-family-package",
        title: "Hajj Family Package",
        packageType: "hajj",
        image: hajjFamily,

        badge: {
            text: "Family",
            type: "family",
        },

        duration: 28,
        departureCity: "chattogram",
        departureCityLabel: "Chattogram",

        stays: [
            {
                id: 1,
                label: "Mina",
                nights: 5,
            },
            {
                id: 2,
                label: "Arafat",
                nights: 1,
            },
        ],

        price: 7500,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 4.8,
        reviews: 68,

        featured: false,
        popular: false,
        recommended: 2,

        buttonText: "View Details",
    },

    {
        id: 14,
        slug: "hajj-luxury-package",
        title: "Hajj Luxury Package",
        packageType: "hajj",
        image: hajjLuxury,

        badge: {
            text: "Luxury",
            type: "luxury",
        },

        duration: 30,
        departureCity: "dhaka",
        departureCityLabel: "Dhaka",

        stays: [
            {
                id: 1,
                label: "Mina",
                nights: 5,
            },
            {
                id: 2,
                label: "Arafat",
                nights: 1,
            },
        ],

        price: 8500,
        currency: "USD",
        currencySymbol: "$",
        priceLabel: "Starting from",
        priceSuffix: "/person",

        rating: 5,
        reviews: 61,

        featured: false,
        popular: true,
        recommended: 1,

        buttonText: "View Details",
    },
];


// ========================================
// Right Sidebar Data
// ========================================

export const hajjUmrahSidebarData = {
    whyChooseUs: {
        title: "Why Choose Us?",

        items: [
            {
                id: 1,
                icon: "ShieldCheck",
                title: "Licensed & Trusted",
                description: "Government approved travel agency",
            },
            {
                id: 2,
                icon: "UserCheck",
                title: "Experienced Guide",
                description: "Expert support throughout your journey",
            },
            {
                id: 3,
                icon: "BedDouble",
                title: "Comfortable Stay",
                description: "Quality hotels near Haram",
            },
            {
                id: 4,
                icon: "Utensils",
                title: "Delicious Meals",
                description: "Hygienic and tasty meals included",
            },
            {
                id: 5,
                icon: "Headphones",
                title: "24/7 Support",
                description: "We are here to help you anytime",
            },
        ],
    },

    help: {
        title: "Need Help?",

        description:
            "Our Hajj & Umrah experts are ready to assist you.",

        phone: {
            label: "Call Us",
            value: "+880 1234 567890",
            href: "tel:+8801234567890",
        },

        email: {
            label: "Email Us",
            value: "info@skyvoyagetravels.com",
            href: "mailto:info@skyvoyagetravels.com",
        },
    },

    guide: {
        title: "Preparing for Hajj or Umrah?",

        description:
            "Check our complete guideline before your spiritual journey.",

        buttonText: "View Guide",

        link: "/hajj-umrah-guide",
    },
};


// ========================================
// Bottom Features Data
// ========================================

export const hajjUmrahFeaturesData = {
    items: [
        {
            id: 1,
            icon: "Luggage",
            title: "All Inclusive Packages",
            description: "Visa, Ticket, Hotel, Meals & Transport",
        },
        {
            id: 2,
            icon: "Plane",
            title: "Direct Flights",
            description: "Convenient and comfortable",
        },
        {
            id: 3,
            icon: "Users",
            title: "Group & Private Options",
            description: "Flexible group sizes",
        },
        {
            id: 4,
            icon: "WalletCards",
            title: "Easy Payment Plans",
            description: "Secure and flexible payments",
        },
        {
            id: 5,
            icon: "BadgeCheck",
            title: "100% Satisfaction",
            description: "Thousands of happy pilgrims",
        },
    ],
};


// ========================================
// Initial Filter State
// ========================================

export const initialHajjUmrahFilters = {
    packageType: "all",
    departureCity: "all",
    duration: "all",

    priceRange: {
        min: hajjUmrahFilterData.priceRange.min,
        max: hajjUmrahFilterData.priceRange.max,
    },
};


// ========================================
// Initial Search State
// ========================================

export const initialHajjUmrahSearch = {
    packageType: "all",
    departureDate: "",
    travelers: 2,
};


// ========================================
// Page Configuration
// ========================================

export const hajjUmrahPageConfig = {
    packagesPerPage: 12,
    defaultSort: "recommended",

    emptyState: {
        title: "No Packages Found",
        description:
            "Try changing or clearing your filters to find more packages.",
        buttonText: "Clear Filters",
    },
};