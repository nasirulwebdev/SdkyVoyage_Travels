import {
    Boxes,
    Globe2,
    MapPin,
    Heart,
    UsersRound,
    TentTree,
    Gem,
    UserRoundCheck,
    CalendarDays,
} from "lucide-react";
import maldivesImg from "../assets/images/tour-packages/maldives.jpg";
import baliImg from "../assets/images/tour-packages/bali.jpg";
import dubaiImg from "../assets/images/tour-packages/dubai.jpg";
import thailandImg from "../assets/images/tour-packages/thailand.jpg";
import coxsBazarImg from "../assets/images/tour-packages/coxs-bazar.jpg";
import sundarbansImg from "../assets/images/tour-packages/sundarbans.jpg";
import parisImg from "../assets/images/tour-packages/paris.jpg";
import switzerlandImg from "../assets/images/tour-packages/switzerland.jpg";
import singaporeImg from "../assets/images/tour-packages/singapore.jpg";
import kashmirImg from "../assets/images/tour-packages/kashmir.jpg";
import sajekImg from "../assets/images/tour-packages/sajek.jpg";
import nepalImg from "../assets/images/tour-packages/nepal.jpg";


/* =========================================================
   TOUR CATEGORY NAVIGATION
========================================================= */

export const tourCategories = [
    {
        id: "all",
        label: "All Packages",
        icon: Boxes,
    },
    {
        id: "international",
        label: "International",
        icon: Globe2,
    },
    {
        id: "domestic",
        label: "Domestic",
        icon: MapPin,
    },
    {
        id: "honeymoon",
        label: "Honeymoon",
        icon: Heart,
    },
    {
        id: "family",
        label: "Family",
        icon: UsersRound,
    },
    {
        id: "adventure",
        label: "Adventure",
        icon: TentTree,
    },
    {
        id: "luxury",
        label: "Luxury",
        icon: Gem,
    },
    {
        id: "group-tour",
        label: "Group Tour",
        icon: UserRoundCheck,
    },
    {
        id: "weekend-getaway",
        label: "Weekend Getaway",
        icon: CalendarDays,
    },
];

/* =========================================================
   FILTER DATA
========================================================= */

export const destinationOptions = [
    { id: "maldives", label: "Maldives", count: 8 },
    { id: "thailand", label: "Thailand", count: 10 },
    { id: "dubai", label: "Dubai", count: 7 },
    { id: "bali", label: "Bali", count: 6 },
    { id: "bangladesh", label: "Bangladesh", count: 12 },
];

export const tourTypeOptions = [
    { id: "family", label: "Family Tour", count: 14 },
    { id: "honeymoon", label: "Honeymoon", count: 9 },
    { id: "adventure", label: "Adventure", count: 11 },
    { id: "luxury", label: "Luxury Tour", count: 8 },
];

export const durationOptions = [
    {
        id: "1-3-days",
        label: "1 - 3 Days",
    },
    {
        id: "4-7-days",
        label: "4 - 7 Days",
    },
    {
        id: "8-14-days",
        label: "8 - 14 Days",
    },
    {
        id: "15-plus-days",
        label: "15+ Days",
    },
];

export const ratingOptions = [5, 4, 3];

/* =========================================================
   TOUR PACKAGES
========================================================= */

export const tourPackages = [
    {
        id: 1,
        title: "Maldives Paradise Escape",
        slug: "maldives-paradise-escape",
        destination: "Maldives",
        destinationId: "maldives",
        location: "Maldives",
        category: "international",
        tourTypes: ["honeymoon", "luxury"],
        duration: "5 Days / 4 Nights",
        durationId: "4-7-days",
        price: 85000,
        oldPrice: 95000,
        rating: 4.9,
        reviews: 128,
        badge: "BEST SELLER",
        image: maldivesImg,
        featured: true,
    },

    {
        id: 2,
        title: "Beautiful Bali Adventure",
        slug: "beautiful-bali-adventure",
        destination: "Bali",
        destinationId: "bali",
        location: "Bali, Indonesia",
        category: "international",
        tourTypes: ["adventure", "honeymoon"],
        duration: "6 Days / 5 Nights",
        durationId: "4-7-days",
        price: 72000,
        oldPrice: 80000,
        rating: 4.8,
        reviews: 96,
        badge: "POPULAR",
        image: baliImg,
        featured: true,
    },

    {
        id: 3,
        title: "Dubai Luxury Experience",
        slug: "dubai-luxury-experience",
        destination: "Dubai",
        destinationId: "dubai",
        location: "Dubai, UAE",
        category: "international",
        tourTypes: ["luxury", "family"],
        duration: "5 Days / 4 Nights",
        durationId: "4-7-days",
        price: 98000,
        oldPrice: 110000,
        rating: 4.9,
        reviews: 154,
        badge: "LUXURY",
        image: dubaiImg,
        featured: true,
    },

    {
        id: 4,
        title: "Amazing Thailand Tour",
        slug: "amazing-thailand-tour",
        destination: "Thailand",
        destinationId: "thailand",
        location: "Bangkok & Pattaya",
        category: "international",
        tourTypes: ["family", "group-tour"],
        duration: "6 Days / 5 Nights",
        durationId: "4-7-days",
        price: 65000,
        oldPrice: 75000,
        rating: 4.7,
        reviews: 112,
        badge: "HOT DEAL",
        image: thailandImg,
        featured: false,
    },

    {
        id: 5,
        title: "Cox's Bazar Beach Holiday",
        slug: "coxs-bazar-beach-holiday",
        destination: "Bangladesh",
        destinationId: "bangladesh",
        location: "Cox's Bazar",
        category: "domestic",
        tourTypes: ["family", "weekend-getaway"],
        duration: "3 Days / 2 Nights",
        durationId: "1-3-days",
        price: 18500,
        oldPrice: 22000,
        rating: 4.8,
        reviews: 186,
        badge: "POPULAR",
        image: coxsBazarImg,
        featured: true,
    },

    {
        id: 6,
        title: "Sundarbans Adventure",
        slug: "sundarbans-adventure",
        destination: "Bangladesh",
        destinationId: "bangladesh",
        location: "Sundarbans",
        category: "domestic",
        tourTypes: ["adventure", "group-tour"],
        duration: "3 Days / 2 Nights",
        durationId: "1-3-days",
        price: 14500,
        oldPrice: 17500,
        rating: 4.6,
        reviews: 84,
        badge: "ADVENTURE",
        image: sundarbansImg,
        featured: false,
    },

    {
        id: 7,
        title: "Romantic Paris Getaway",
        slug: "romantic-paris-getaway",
        destination: "Paris",
        destinationId: "paris",
        location: "Paris, France",
        category: "international",
        tourTypes: ["honeymoon", "luxury"],
        duration: "7 Days / 6 Nights",
        durationId: "4-7-days",
        price: 165000,
        oldPrice: 185000,
        rating: 4.9,
        reviews: 72,
        badge: "HONEYMOON",
        image: parisImg,
        featured: true,
    },

    {
        id: 8,
        title: "Swiss Alps Dream Tour",
        slug: "swiss-alps-dream-tour",
        destination: "Switzerland",
        destinationId: "switzerland",
        location: "Switzerland",
        category: "international",
        tourTypes: ["luxury", "family"],
        duration: "8 Days / 7 Nights",
        durationId: "8-14-days",
        price: 195000,
        oldPrice: 220000,
        rating: 4.9,
        reviews: 91,
        badge: "PREMIUM",
        image: switzerlandImg,
        featured: true,
    },

    {
        id: 9,
        title: "Singapore Family Holiday",
        slug: "singapore-family-holiday",
        destination: "Singapore",
        destinationId: "singapore",
        location: "Singapore",
        category: "international",
        tourTypes: ["family"],
        duration: "5 Days / 4 Nights",
        durationId: "4-7-days",
        price: 88000,
        oldPrice: 99000,
        rating: 4.7,
        reviews: 105,
        badge: "FAMILY",
        image: singaporeImg,
        featured: false,
    },

    {
        id: 10,
        title: "Kashmir Heaven Tour",
        slug: "kashmir-heaven-tour",
        destination: "Kashmir",
        destinationId: "kashmir",
        location: "Kashmir, India",
        category: "international",
        tourTypes: ["honeymoon", "family"],
        duration: "7 Days / 6 Nights",
        durationId: "4-7-days",
        price: 78000,
        oldPrice: 89000,
        rating: 4.8,
        reviews: 118,
        badge: "TRENDING",
        image: kashmirImg,
        featured: true,
    },

    {
        id: 11,
        title: "Sajek Valley Escape",
        slug: "sajek-valley-escape",
        destination: "Bangladesh",
        destinationId: "bangladesh",
        location: "Sajek Valley",
        category: "domestic",
        tourTypes: ["adventure", "weekend-getaway"],
        duration: "3 Days / 2 Nights",
        durationId: "1-3-days",
        price: 12500,
        oldPrice: 15000,
        rating: 4.7,
        reviews: 142,
        badge: "WEEKEND",
        image: sajekImg,
        featured: false,
    },

    {
        id: 12,
        title: "Nepal Himalayan Adventure",
        slug: "nepal-himalayan-adventure",
        destination: "Nepal",
        destinationId: "nepal",
        location: "Kathmandu & Pokhara",
        category: "international",
        tourTypes: ["adventure", "group-tour"],
        duration: "7 Days / 6 Nights",
        durationId: "4-7-days",
        price: 69000,
        oldPrice: 79000,
        rating: 4.8,
        reviews: 89,
        badge: "ADVENTURE",
        image: nepalImg,
        featured: true,
    },
];