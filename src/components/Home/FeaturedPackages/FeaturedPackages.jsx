import { Link } from "react-router-dom";
import {
    ArrowRight,
    CalendarDays,
    Heart,
    MapPin,
    Star,
    Users,
} from "lucide-react";
import { useState } from "react";

import thailandImg from "../../../assets/images/packages/thailand.jpg";
import maldivesImg from "../../../assets/images/packages/maldives.jpg";
import dubaiImg from "../../../assets/images/packages/dubai.jpg";
import switzerlandImg from "../../../assets/images/packages/switzerland.jpg";
import turkeyImg from "../../../assets/images/packages/turkey.jpg";
import baliImg from "../../../assets/images/packages/bali.jpg";

const packages = [
    {
        id: 1,
        title: "Amazing Thailand Escape",
        location: "Bangkok & Phuket, Thailand",
        duration: "6 Days / 5 Nights",
        people: "2-8 People",
        rating: 4.9,
        reviews: 128,
        price: 599,
        oldPrice: 720,
        badge: "Best Seller",
        image: thailandImg,
    },
    {
        id: 2,
        title: "Luxury Maldives Getaway",
        location: "Maldives",
        duration: "5 Days / 4 Nights",
        people: "2-6 People",
        rating: 4.9,
        reviews: 96,
        price: 899,
        oldPrice: 1050,
        badge: "Popular",
        image: maldivesImg,
    },
    {
        id: 3,
        title: "Discover Dubai",
        location: "Dubai, UAE",
        duration: "5 Days / 4 Nights",
        people: "2-10 People",
        rating: 4.8,
        reviews: 142,
        price: 749,
        oldPrice: 890,
        badge: "Hot Deal",
        image: dubaiImg,
    },
    {
        id: 4,
        title: "Swiss Alps Adventure",
        location: "Switzerland",
        duration: "7 Days / 6 Nights",
        people: "2-8 People",
        rating: 4.9,
        reviews: 84,
        price: 1299,
        oldPrice: 1490,
        badge: "Premium",
        image: switzerlandImg,
    },
    {
        id: 5,
        title: "Magical Turkey Tour",
        location: "Istanbul & Cappadocia",
        duration: "7 Days / 6 Nights",
        people: "2-12 People",
        rating: 4.7,
        reviews: 110,
        price: 799,
        oldPrice: 950,
        badge: "Trending",
        image: turkeyImg,
    },
    {
        id: 6,
        title: "Beautiful Bali Holiday",
        location: "Bali, Indonesia",
        duration: "6 Days / 5 Nights",
        people: "2-8 People",
        rating: 4.8,
        reviews: 135,
        price: 649,
        oldPrice: 780,
        badge: "Top Rated",
        image: baliImg,
    },
];

const FeaturedPackages = () => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );
    };

    return (
        
        <section 
        id="featured-packages"
         className="bg-slate-50 py-16 sm:py-20 lg:py-24">
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                            Featured Packages
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Find Your Next{" "}
                            <span className="text-blue-600">
                                Dream Journey
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-slate-500">
                            Discover our most popular travel experiences,
                            carefully designed for unforgettable memories.
                        </p>
                    </div>

                    <Link
                        to="/packages"
                        className="group inline-flex items-center gap-2 font-bold text-blue-600"
                    >
                        View All Packages

                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* PACKAGE GRID */}
                <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {packages.map((item) => (
                        <article
                            key={item.id}
                            className="
                                group
                                overflow-hidden
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                shadow-sm
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                            "
                        >
                            {/* IMAGE */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                                <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg">
                                    {item.badge}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => toggleFavorite(item.id)}
                                    aria-label="Add to wishlist"
                                    className="
                                        absolute
                                        right-5
                                        top-5
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/95
                                        text-slate-700
                                        shadow-lg
                                        backdrop-blur
                                        transition
                                        hover:scale-110
                                        hover:text-red-500
                                    "
                                >
                                    <Heart
                                        size={20}
                                        className={
                                            favorites.includes(item.id)
                                                ? "fill-red-500 text-red-500"
                                                : ""
                                        }
                                    />
                                </button>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <MapPin
                                        size={17}
                                        className="text-blue-600"
                                    />

                                    {item.location}
                                </div>

                                <Link to={`/packages/${item.id}`}>
                                    <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors hover:text-blue-600">
                                        {item.title}
                                    </h3>
                                </Link>

                                {/* INFO */}
                                <div className="mt-5 flex flex-wrap gap-4 border-b border-slate-100 pb-5 text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays
                                            size={17}
                                            className="text-blue-600"
                                        />

                                        {item.duration}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Users
                                            size={17}
                                            className="text-blue-600"
                                        />

                                        {item.people}
                                    </div>
                                </div>

                                {/* RATING */}
                                <div className="mt-5 flex items-center gap-2">
                                    <Star
                                        size={18}
                                        className="fill-amber-400 text-amber-400"
                                    />

                                    <span className="font-bold text-slate-900">
                                        {item.rating}
                                    </span>

                                    <span className="text-sm text-slate-400">
                                        ({item.reviews} reviews)
                                    </span>
                                </div>

                                {/* PRICE + BUTTON */}
                                <div className="mt-6 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Starting from
                                        </p>

                                        <div className="mt-1 flex items-center gap-2">
                                            <span className="text-2xl font-extrabold text-blue-600">
                                                ${item.price}
                                            </span>

                                            <span className="text-sm text-slate-400 line-through">
                                                ${item.oldPrice}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/packages/${item.id}`}
                                        className="
                                            inline-flex
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-slate-900
                                            px-5
                                            py-3
                                            text-sm
                                            font-bold
                                            text-white
                                            transition
                                            hover:bg-blue-600
                                        "
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPackages;