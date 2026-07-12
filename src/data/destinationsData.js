import thailandImg from "../assets/images/destinations/thailand.jpg";
import baliImg from "../assets/images/destinations/bali.jpg";
import maldivesImg from "../assets/images/destinations/maldives.jpg";
import japanImg from "../assets/images/destinations/japan.jpg";

import switzerlandImg from "../assets/images/destinations/switzerland.jpg";
import franceImg from "../assets/images/destinations/france.jpg";
import italyImg from "../assets/images/destinations/italy.jpg";
import turkeyImg from "../assets/images/destinations/turkey.jpg";

import newYorkImg from "../assets/images/destinations/new-york.jpg";
import losAngelesImg from "../assets/images/destinations/los-angeles.jpg";
import canadaImg from "../assets/images/destinations/canada.jpg";
import brazilImg from "../assets/images/destinations/brazil.jpg";

import egyptImg from "../assets/images/destinations/egypt.jpg";
import moroccoImg from "../assets/images/destinations/morocco.jpg";
import kenyaImg from "../assets/images/destinations/kenya.jpg";
import southAfricaImg from "../assets/images/destinations/south-africa.jpg";



const destinationsData = {
    // ==================================================
    // ASIA
    // ==================================================
    asia: {
        name: "Asia",
        slug: "asia",
        title: "Discover The Wonders Of Asia",
        subtitle:
            "Explore ancient cultures, tropical islands, modern cities, and unforgettable adventures.",
        description:
            "From breathtaking beaches to vibrant cities and historic landmarks, Asia offers extraordinary travel experiences for every kind of traveler.",

        destinations: [
            {
                id: 1,
                name: "Thailand",
                slug: "thailand",
                city: "Bangkok & Phuket",
                country: "Thailand",
                image: thailandImg,
                badge: "Best Seller",
                rating: 4.9,
                reviews: 328,
                duration: "6 Days / 5 Nights",
                startingPrice: 599,
                perfectFor: "Couples & Families",

                shortDescription:
                    "Experience vibrant Bangkok, tropical Phuket, beautiful beaches, delicious cuisine, and Thailand's famous hospitality.",

                description:
                    "Thailand is one of Asia's most exciting destinations, combining tropical beaches, magnificent temples, vibrant cities, rich culture, and world-famous cuisine.",

                highlights: [
                    "Explore the vibrant city of Bangkok",
                    "Relax on the beautiful beaches of Phuket",
                    "Visit famous temples and cultural landmarks",
                    "Experience authentic Thai cuisine",
                    "Enjoy island hopping and water activities",
                    "Discover exciting local markets",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Airport transfers",
                    "Selected sightseeing tours",
                    "Professional travel assistance",
                ],
            },

            {
                id: 2,
                name: "Bali",
                slug: "bali",
                city: "Bali",
                country: "Indonesia",
                image: baliImg,
                badge: "Top Rated",
                rating: 4.8,
                reviews: 286,
                duration: "6 Days / 5 Nights",
                startingPrice: 649,
                perfectFor: "Couples & Honeymooners",

                shortDescription:
                    "Discover tropical beaches, ancient temples, lush rice terraces, and the peaceful island lifestyle of Bali.",

                description:
                    "Bali is a tropical paradise famous for beautiful beaches, dramatic landscapes, ancient temples, wellness retreats, and unforgettable sunsets.",

                highlights: [
                    "Visit iconic Balinese temples",
                    "Explore beautiful rice terraces",
                    "Relax on tropical beaches",
                    "Experience traditional Balinese culture",
                    "Watch unforgettable sunsets",
                    "Discover waterfalls and natural landscapes",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Airport transfers",
                    "Selected island tours",
                    "Travel assistance",
                ],
            },

            {
                id: 3,
                name: "Maldives",
                slug: "maldives",
                city: "Malé & Islands",
                country: "Maldives",
                image: maldivesImg,
                badge: "Luxury Escape",
                rating: 4.9,
                reviews: 412,
                duration: "5 Days / 4 Nights",
                startingPrice: 899,
                perfectFor: "Couples & Honeymooners",

                shortDescription:
                    "Escape to crystal-clear waters, white-sand beaches, luxury resorts, and breathtaking overwater villas.",

                description:
                    "The Maldives is a world-famous island paradise offering turquoise lagoons, luxury resorts, coral reefs, and peaceful tropical experiences.",

                highlights: [
                    "Stay near crystal-clear lagoons",
                    "Relax on white-sand beaches",
                    "Experience luxury island resorts",
                    "Enjoy snorkeling and water activities",
                    "Discover beautiful coral reefs",
                    "Watch spectacular tropical sunsets",
                ],

                included: [
                    "Resort accommodation",
                    "Daily breakfast",
                    "Airport or speedboat transfer",
                    "Selected resort activities",
                    "Travel support",
                ],
            },

            {
                id: 4,
                name: "Japan",
                slug: "japan",
                city: "Tokyo & Kyoto",
                country: "Japan",
                image: japanImg,
                badge: "Cultural Journey",
                rating: 4.9,
                reviews: 254,
                duration: "8 Days / 7 Nights",
                startingPrice: 1399,
                perfectFor: "Culture & City Travelers",

                shortDescription:
                    "Experience futuristic Tokyo, historic Kyoto, traditional culture, beautiful landscapes, and world-famous cuisine.",

                description:
                    "Japan blends advanced modern cities with centuries-old traditions, peaceful temples, beautiful natural scenery, and unique cultural experiences.",

                highlights: [
                    "Explore modern Tokyo",
                    "Discover historic Kyoto",
                    "Visit traditional temples",
                    "Experience authentic Japanese cuisine",
                    "Explore vibrant shopping districts",
                    "Discover Japanese culture and traditions",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected city tours",
                    "Travel assistance",
                    "Airport transfer",
                ],
            },
        ],
    },

    // ==================================================
    // EUROPE
    // ==================================================
    europe: {
        name: "Europe",
        slug: "europe",
        title: "Experience The Beauty Of Europe",
        subtitle:
            "Discover romantic cities, breathtaking mountains, timeless history, and unforgettable cultures.",
        description:
            "Europe offers an extraordinary collection of iconic cities, historic landmarks, spectacular landscapes, and world-class travel experiences.",

        destinations: [
            {
                id: 5,
                name: "Switzerland",
                slug: "switzerland",
                city: "Zurich & Interlaken",
                country: "Switzerland",
                image: switzerlandImg,
                badge: "Premium",
                rating: 4.9,
                reviews: 198,
                duration: "7 Days / 6 Nights",
                startingPrice: 1299,
                perfectFor: "Nature & Adventure Lovers",

                shortDescription:
                    "Discover majestic Alpine mountains, crystal-clear lakes, scenic train journeys, and beautiful Swiss towns.",

                description:
                    "Switzerland is famous for breathtaking Alpine landscapes, peaceful lakes, charming villages, and unforgettable scenic journeys.",

                highlights: [
                    "Explore the Swiss Alps",
                    "Visit beautiful mountain villages",
                    "Experience scenic train journeys",
                    "Discover crystal-clear lakes",
                    "Explore Zurich and Interlaken",
                    "Enjoy spectacular mountain views",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Local transportation assistance",
                    "Professional travel support",
                ],
            },

            {
                id: 6,
                name: "France",
                slug: "france",
                city: "Paris",
                country: "France",
                image: franceImg,
                badge: "Romantic Escape",
                rating: 4.8,
                reviews: 315,
                duration: "6 Days / 5 Nights",
                startingPrice: 1099,
                perfectFor: "Couples & Culture Lovers",

                shortDescription:
                    "Experience iconic Paris, romantic streets, famous landmarks, art, culture, and unforgettable French cuisine.",

                description:
                    "France combines iconic architecture, world-renowned art, romantic cities, beautiful countryside, and exceptional cuisine.",

                highlights: [
                    "Visit the Eiffel Tower",
                    "Explore beautiful Paris streets",
                    "Discover famous museums",
                    "Experience French cuisine",
                    "Visit historic landmarks",
                    "Enjoy romantic city experiences",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected Paris tours",
                    "Airport transfer",
                    "Travel assistance",
                ],
            },

            {
                id: 7,
                name: "Italy",
                slug: "italy",
                city: "Rome & Venice",
                country: "Italy",
                image: italyImg,
                badge: "Cultural Favorite",
                rating: 4.9,
                reviews: 342,
                duration: "7 Days / 6 Nights",
                startingPrice: 1199,
                perfectFor: "History & Culture Lovers",

                shortDescription:
                    "Explore ancient Rome, romantic Venice, historic architecture, artistic treasures, and authentic Italian cuisine.",

                description:
                    "Italy offers extraordinary history, legendary architecture, romantic cities, beautiful landscapes, and one of the world's most celebrated cuisines.",

                highlights: [
                    "Explore ancient Rome",
                    "Experience romantic Venice",
                    "Visit historic landmarks",
                    "Discover Italian art and culture",
                    "Enjoy authentic Italian cuisine",
                    "Explore beautiful city streets",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected city tours",
                    "Travel assistance",
                    "Airport transfer",
                ],
            },

            {
                id: 8,
                name: "Turkey",
                slug: "turkey",
                city: "Istanbul & Cappadocia",
                country: "Turkey",
                image: turkeyImg,
                badge: "Trending",
                rating: 4.8,
                reviews: 276,
                duration: "7 Days / 6 Nights",
                startingPrice: 799,
                perfectFor: "Culture & Adventure Travelers",

                shortDescription:
                    "Discover historic Istanbul, magical Cappadocia, unique landscapes, colorful markets, and rich Turkish culture.",

                description:
                    "Turkey connects Europe and Asia through extraordinary history, beautiful architecture, unique landscapes, and rich cultural traditions.",

                highlights: [
                    "Explore historic Istanbul",
                    "Discover magical Cappadocia",
                    "Visit famous mosques and landmarks",
                    "Experience traditional Turkish cuisine",
                    "Explore colorful local markets",
                    "Enjoy spectacular landscapes",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Airport transfers",
                    "Professional travel assistance",
                ],
            },
        ],
    },

    // ==================================================
    // AMERICA
    // ==================================================
    america: {
        name: "America",
        slug: "america",
        title: "Explore The Wonders Of America",
        subtitle:
            "Experience iconic cities, spectacular landscapes, exciting adventures, and unforgettable journeys.",
        description:
            "From vibrant cities to breathtaking natural wonders, America offers endless possibilities for extraordinary travel experiences.",

        destinations: [
            {
                id: 9,
                name: "New York",
                slug: "new-york",
                city: "New York City",
                country: "United States",
                image:  newYorkImg,
                badge: "Iconic City",
                rating: 4.8,
                reviews: 458,
                duration: "6 Days / 5 Nights",
                startingPrice: 1499,
                perfectFor: "City & Lifestyle Travelers",

                shortDescription:
                    "Experience Times Square, Manhattan, Central Park, world-famous landmarks, shopping, entertainment, and city life.",

                description:
                    "New York City is one of the world's most iconic destinations, offering legendary landmarks, diverse culture, entertainment, shopping, and endless experiences.",

                highlights: [
                    "Explore Times Square",
                    "Visit Central Park",
                    "Discover Manhattan",
                    "See iconic city landmarks",
                    "Experience world-class shopping",
                    "Enjoy exciting entertainment",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected city tours",
                    "Airport transfer",
                    "Travel assistance",
                ],
            },

            {
                id: 10,
                name: "Los Angeles",
                slug: "los-angeles",
                city: "Los Angeles",
                country: "United States",
                image: losAngelesImg,
                badge: "Entertainment",
                rating: 4.7,
                reviews: 245,
                duration: "6 Days / 5 Nights",
                startingPrice: 1399,
                perfectFor: "City & Entertainment Lovers",

                shortDescription:
                    "Explore Hollywood, beautiful beaches, famous attractions, entertainment culture, and the exciting California lifestyle.",

                description:
                    "Los Angeles combines entertainment, beaches, iconic neighborhoods, famous attractions, and the relaxed lifestyle of Southern California.",

                highlights: [
                    "Explore Hollywood",
                    "Visit famous beaches",
                    "Discover iconic attractions",
                    "Experience California lifestyle",
                    "Explore entertainment districts",
                    "Enjoy beautiful coastal views",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Airport transfer",
                    "Travel support",
                ],
            },

            {
                id: 11,
                name: "Canada",
                slug: "canada",
                city: "Toronto & Niagara",
                country: "Canada",
                image: canadaImg,
                badge: "Nature Escape",
                rating: 4.8,
                reviews: 221,
                duration: "7 Days / 6 Nights",
                startingPrice: 1299,
                perfectFor: "Nature & Family Travelers",

                shortDescription:
                    "Discover modern cities, spectacular natural beauty, Niagara Falls, beautiful landscapes, and Canadian hospitality.",

                description:
                    "Canada offers vibrant multicultural cities, breathtaking natural landscapes, spectacular waterfalls, and unforgettable outdoor experiences.",

                highlights: [
                    "Explore Toronto",
                    "Visit Niagara Falls",
                    "Discover beautiful landscapes",
                    "Experience Canadian culture",
                    "Enjoy family-friendly attractions",
                    "Explore vibrant city life",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Transportation assistance",
                    "Travel support",
                ],
            },

            {
                id: 12,
                name: "Brazil",
                slug: "brazil",
                city: "Rio de Janeiro",
                country: "Brazil",
                image: brazilImg,
                badge: "Adventure",
                rating: 4.7,
                reviews: 184,
                duration: "7 Days / 6 Nights",
                startingPrice: 1199,
                perfectFor: "Adventure & Beach Lovers",

                shortDescription:
                    "Experience Rio de Janeiro, spectacular beaches, vibrant culture, iconic landmarks, and unforgettable Brazilian energy.",

                description:
                    "Brazil is famous for spectacular beaches, vibrant cities, colorful culture, incredible natural beauty, and unforgettable adventures.",

                highlights: [
                    "Explore Rio de Janeiro",
                    "Relax on famous beaches",
                    "Visit iconic landmarks",
                    "Experience Brazilian culture",
                    "Discover spectacular landscapes",
                    "Enjoy vibrant city experiences",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Airport transfer",
                    "Travel assistance",
                ],
            },
        ],
    },

    // ==================================================
    // AFRICA
    // ==================================================
    africa: {
        name: "Africa",
        slug: "africa",
        title: "Discover The Spirit Of Africa",
        subtitle:
            "Experience extraordinary wildlife, breathtaking landscapes, ancient history, and unforgettable adventures.",
        description:
            "Africa offers spectacular safari experiences, ancient civilizations, beautiful coastlines, diverse cultures, and some of the world's greatest natural wonders.",

        destinations: [
            {
                id: 13,
                name: "Egypt",
                slug: "egypt",
                city: "Cairo & Giza",
                country: "Egypt",
                image: egyptImg,
                badge: "Historic Wonder",
                rating: 4.8,
                reviews: 304,
                duration: "7 Days / 6 Nights",
                startingPrice: 899,
                perfectFor: "History & Culture Lovers",

                shortDescription:
                    "Discover the legendary pyramids, ancient history, fascinating culture, and extraordinary treasures of Egypt.",

                description:
                    "Egypt is home to one of the world's greatest ancient civilizations, offering legendary monuments, fascinating history, and unforgettable cultural experiences.",

                highlights: [
                    "Visit the Pyramids of Giza",
                    "Explore historic Cairo",
                    "Discover ancient Egyptian history",
                    "Experience traditional culture",
                    "Visit famous museums",
                    "Explore extraordinary landmarks",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Airport transfer",
                    "Professional travel assistance",
                ],
            },

            {
                id: 14,
                name: "Morocco",
                slug: "morocco",
                city: "Marrakech",
                country: "Morocco",
                image: moroccoImg,
                badge: "Cultural Escape",
                rating: 4.8,
                reviews: 216,
                duration: "7 Days / 6 Nights",
                startingPrice: 849,
                perfectFor: "Culture & Adventure Travelers",

                shortDescription:
                    "Explore colorful markets, historic cities, desert landscapes, beautiful architecture, and rich Moroccan culture.",

                description:
                    "Morocco offers colorful cities, ancient traditions, dramatic desert landscapes, beautiful architecture, and unforgettable cultural experiences.",

                highlights: [
                    "Explore Marrakech",
                    "Visit colorful traditional markets",
                    "Discover beautiful architecture",
                    "Experience Moroccan cuisine",
                    "Explore desert landscapes",
                    "Discover local traditions",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Airport transfer",
                    "Travel assistance",
                ],
            },

            {
                id: 15,
                name: "Kenya",
                slug: "kenya",
                city: "Nairobi & Maasai Mara",
                country: "Kenya",
                image: kenyaImg,
                badge: "Safari Adventure",
                rating: 4.9,
                reviews: 267,
                duration: "8 Days / 7 Nights",
                startingPrice: 1599,
                perfectFor: "Wildlife & Adventure Lovers",

                shortDescription:
                    "Experience extraordinary wildlife, unforgettable safari adventures, spectacular landscapes, and authentic African culture.",

                description:
                    "Kenya is one of the world's greatest safari destinations, famous for extraordinary wildlife, spectacular landscapes, and unforgettable African adventures.",

                highlights: [
                    "Experience a wildlife safari",
                    "Explore Maasai Mara",
                    "Discover extraordinary wildlife",
                    "Experience local culture",
                    "Enjoy spectacular landscapes",
                    "Create unforgettable safari memories",
                ],

                included: [
                    "Safari accommodation",
                    "Selected meals",
                    "Game drives",
                    "Professional safari assistance",
                    "Transportation during selected tours",
                ],
            },

            {
                id: 16,
                name: "South Africa",
                slug: "south-africa",
                city: "Cape Town",
                country: "South Africa",
                image: southAfricaImg,
                badge: "Top Adventure",
                rating: 4.8,
                reviews: 238,
                duration: "8 Days / 7 Nights",
                startingPrice: 1399,
                perfectFor: "Nature & Adventure Travelers",

                shortDescription:
                    "Discover Cape Town, spectacular coastlines, incredible wildlife, beautiful landscapes, and unforgettable adventures.",

                description:
                    "South Africa offers spectacular cities, dramatic coastlines, extraordinary wildlife, beautiful landscapes, and diverse travel experiences.",

                highlights: [
                    "Explore Cape Town",
                    "Discover spectacular coastlines",
                    "Experience incredible wildlife",
                    "Visit famous natural landmarks",
                    "Enjoy beautiful landscapes",
                    "Experience diverse local culture",
                ],

                included: [
                    "Hotel accommodation",
                    "Daily breakfast",
                    "Selected sightseeing tours",
                    "Airport transfer",
                    "Professional travel assistance",
                ],
            },
        ],
    },
};

export default destinationsData;