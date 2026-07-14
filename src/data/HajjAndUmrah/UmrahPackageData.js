// src/data/HajjAndUmrah/UmrahPackageData.js


// ================================
// IMAGE IMPORTS
// ================================

import umrahPackageHero from "../../assets/images/Hajj&Umrah/Umrah-Package-hero.jpg";
// Umrah Images

import umrahEconomy from "../../assets/images/Hajj&Umrah/umrah-economy.jpg";
import umrahStandard from "../../assets/images/Hajj&Umrah/umrah-standard.jpg";
import umrahDeluxe from "../../assets/images/Hajj&Umrah/umrah-deluxe.jpg";
import umrahLuxury from "../../assets/images/Hajj&Umrah/umrah-luxury.jpg";
import umrahPremium from "../../assets/images/Hajj&Umrah/umrah-premium.jpg";
import umrahFamily from "../../assets/images/Hajj&Umrah/umrah-family.jpg";
import umrahRamadan from "../../assets/images/Hajj&Umrah/umrah-ramadan.jpg";


// Hajj Images

import hajjEconomy from "../../assets/images/Hajj&Umrah/hajj-economy.jpg";
import hajjStandard from "../../assets/images/Hajj&Umrah/hajj-standard.jpg";
import hajjDeluxe from "../../assets/images/Hajj&Umrah/hajj-deluxe.jpg";
import hajjVip from "../../assets/images/Hajj&Umrah/hajj-vip.jpg";
import hajjPremium from "../../assets/images/Hajj&Umrah/hajj-premium.jpg";
import hajjFamily from "../../assets/images/Hajj&Umrah/hajj-family.jpg";
import hajjLuxury from "../../assets/images/Hajj&Umrah/hajj-luxury.jpg";





// ==================================
// HERO DATA
// ==================================


export const umrahPackageHeroData = {


    title:
        "Premium Umrah Packages",


    subtitle:
        "Experience a peaceful and memorable Umrah journey with our trusted travel services.",


    description:
        "Choose from economy to luxury Umrah packages including visa, hotel, transport and complete support.",


    image: umrahPackageHero,


    breadcrumb:[
        "Home",
        "Hajj & Umrah",
        "Umrah Package"
    ],


    highlights: [
        {
            icon: "BadgeCheck",
            title: "Best Price Guarantee",
        },
        {
            icon: "BedDouble",
            title: "Comfortable Stay",
        },
        {
            icon: "CalendarCheck",
            title: "Easy Booking",
        },
        {
            icon: "Headphones",
            title: "24/7 Support",
        },
    ],

};








// ==================================
// SEARCH BAR DATA
// ==================================


export const umrahPackageSearchData = {


    fields:[


        {

            name:"destination",

            label:"Destination",

            type:"select",

            options:[
                "Makkah",
                "Madinah",
                "Makkah & Madinah"
            ]

        },


        {

            name:"duration",

            label:"Duration",

            type:"select",

            options:[

                "7 Days",
                "10 Days",
                "15 Days",
                "20 Days",
                "30 Days"

            ]

        },


        {

            name:"packageType",

            label:"Package Type",

            type:"select",

            options:[

                "Economy",
                "Standard",
                "Deluxe",
                "Luxury",
                "Premium",
                "Family",
                "Ramadan"

            ]

        },


        {

            name:"travelMonth",

            label:"Travel Month",

            type:"select",

            options:[

                "January",
                "February",
                "March",
                "April",
                "Ramadan"

            ]

        }


    ],


    buttonText:
        "Search Package"


};









// ==================================
// FILTER DATA
// ==================================


export const umrahPackageFilterData = {


    packageTypes:[

        "Economy",
        "Standard",
        "Deluxe",
        "Luxury",
        "Premium",
        "Family",
        "Ramadan"

    ],


    durations:[

        "7 Days",
        "10 Days",
        "15 Days",
        "20 Days",
        "30 Days"

    ],



    hotelRatings:[

        5,
        4,
        3

    ],



    services:[

        "Visa Included",
        "Flight Included",
        "Hotel Included",
        "Transport Included"

    ],



    priceRange:{


        min:500,

        max:5000


    }


};









// ==================================
// PACKAGE CARD DATA
// ==================================


export const umrahPackagesData = [


    {
        id:1,

        title:"Economy Umrah Package",

        image:umrahEconomy,

        category:"Umrah",

        packageType:"Economy",

        duration:"7 Days",

        location:"Makkah & Madinah",


        hotel:{
            name:"3 Star Hotel",
            rating:3
        },


        services:[

            "Visa Included",
            "Airport Transfer",
            "Ziyarat Tour"

        ],


        features:[

            "Budget Friendly",
            "Group Travel",
            "Basic Support"

        ],


        price:650,

        currency:"USD",


        rating:4.5,

        reviews:120,


        badge:"Popular"


    },



    {
        id:2,

        title:"Standard Umrah Package",

        image:umrahStandard,

        category:"Umrah",

        packageType:"Standard",

        duration:"10 Days",

        location:"Makkah & Madinah",


        hotel:{
            name:"4 Star Hotel",
            rating:4
        },


        services:[

            "Visa Included",
            "Flight Support",
            "Transport"

        ],


        features:[

            "Comfort Stay",
            "Breakfast",
            "Guided Tour"

        ],


        price:950,

        currency:"USD",

        rating:4.7,

        reviews:180,


        badge:"Best Seller"


    },



    {
        id:3,

        title:"Deluxe Umrah Package",

        image:umrahDeluxe,

        category:"Umrah",

        packageType:"Deluxe",

        duration:"15 Days",

        location:"Makkah & Madinah",


        hotel:{
            name:"5 Star Hotel",
            rating:5
        },


        services:[

            "VIP Transport",
            "Visa",
            "Private Guide"

        ],


        features:[

            "Premium Hotel",
            "Luxury Service",
            "Full Support"

        ],


        price:1500,

        currency:"USD",

        rating:4.9,

        reviews:250,


        badge:"Premium"


    },


    {
        id:4,

        title:"Luxury Umrah Package",

        image:umrahLuxury,

        category:"Umrah",

        packageType:"Luxury",

        duration:"20 Days",

        location:"Makkah & Madinah",


        hotel:{
            name:"VIP 5 Star Hotel",
            rating:5
        },


        services:[

            "Private Transport",
            "VIP Guide",
            "Premium Support"

        ],


        features:[

            "Near Haram Hotel",
            "Luxury Room",
            "Personal Assistance"

        ],


        price:2500,

        currency:"USD",

        rating:5,

        reviews:320,


        badge:"Luxury"


    },


    {
        id:5,

        title:"Premium Umrah Package",

        image:umrahPremium,

        category:"Umrah",

        packageType:"Premium",

        duration:"15 Days",

        location:"Saudi Arabia",


        hotel:{
            name:"Premium Hotel",
            rating:5
        },


        services:[

            "Visa",
            "Flight",
            "Transport"

        ],


        features:[

            "Premium Service",
            "Comfort Stay",
            "24/7 Support"

        ],


        price:1800,

        currency:"USD",

        rating:4.8,

        reviews:200,


        badge:"Premium"

    },


    {
        id:6,

        title:"Family Umrah Package",

        image:umrahFamily,

        category:"Umrah",

        packageType:"Family",

        duration:"20 Days",

        location:"Makkah & Madinah",


        hotel:{
            name:"Family Hotel",
            rating:4
        },


        services:[

            "Family Room",
            "Transport",
            "Guide"

        ],


        features:[

            "Family Friendly",
            "Flexible Plan",
            "Support"

        ],


        price:2200,

        currency:"USD",

        rating:4.7,

        reviews:140,


        badge:"Family"

    },


    {
        id:7,

        title:"Ramadan Umrah Package",

        image:umrahRamadan,

        category:"Umrah",

        packageType:"Ramadan",

        duration:"30 Days",

        location:"Makkah",


        hotel:{
            name:"5 Star Ramadan Hotel",
            rating:5
        },


        services:[

            "Ramadan Meals",
            "Visa",
            "Transport"

        ],


        features:[

            "Special Ramadan Service",
            "Near Haram",
            "Premium Support"

        ],


        price:3500,

        currency:"USD",

        rating:5,

        reviews:500,


        badge:"Ramadan"

    },







    // Hajj Images Use

    {
        id:8,
        title:"Economy Hajj Package",
        image:hajjEconomy,
        category:"Hajj",
        packageType:"Economy"
    },


    {
        id:9,
        title:"Standard Hajj Package",
        image:hajjStandard,
        category:"Hajj",
        packageType:"Standard"
    },


    {
        id:10,
        title:"Deluxe Hajj Package",
        image:hajjDeluxe,
        category:"Hajj",
        packageType:"Deluxe"
    },


    {
        id:11,
        title:"VIP Hajj Package",
        image:hajjVip,
        category:"Hajj",
        packageType:"VIP"
    },


    {
        id:12,
        title:"Premium Hajj Package",
        image:hajjPremium,
        category:"Hajj",
        packageType:"Premium"
    },


    {
        id:13,
        title:"Family Hajj Package",
        image:hajjFamily,
        category:"Hajj",
        packageType:"Family"
    },


    {
        id:14,
        title:"Luxury Hajj Package",
        image:hajjLuxury,
        category:"Hajj",
        packageType:"Luxury"
    }


];






// ==================================
// SIDEBAR DATA
// ==================================


export const umrahSidebarData = {


    whyChoose:[

        {
            icon:"ShieldCheck",
            title:"Trusted Service",
            description:"Reliable Umrah travel partner"
        },


        {
            icon:"BedDouble",
            title:"Best Hotels",
            description:"Comfortable accommodation"
        },


        {
            icon:"Headphones",
            title:"24/7 Support",
            description:"Always ready to help"
        }

    ],



    helpCard:{


        title:"Need Help Booking?",

        description:
        "Our Umrah experts are available for assistance.",


        button:
        "Contact Us"


    },


    resources:[

        "Umrah Guide",
        "Required Documents",
        "Travel Checklist",
        "Important Rules"

    ]


};






// ==================================
// FEATURES DATA
// ==================================


export const umrahPackageFeaturesData=[


    {
        icon:"BadgeCheck",
        title:"Verified Packages",
        description:"Carefully selected packages"
    },


    {
        icon:"Hotel",
        title:"Quality Hotels",
        description:"Best accommodation"
    },


    {
        icon:"Plane",
        title:"Flight Support",
        description:"Complete travel solution"
    },


    {
        icon:"Headphones",
        title:"24/7 Support",
        description:"Customer assistance anytime"
    }


];






// ==================================
// TOOLBAR DATA
// ==================================


export const umrahPackageToolbarData={


    sortOptions:[

        "Popularity",
        "Price Low To High",
        "Price High To Low",
        "Rating"

    ],


    viewOptions:[

        "grid",
        "list"

    ]


};






// ==================================
// PAGINATION DATA
// ==================================


export const umrahPackagePaginationData={


    itemsPerPage:9,

    totalPages:5


};