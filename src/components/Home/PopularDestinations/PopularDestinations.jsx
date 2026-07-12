import { ArrowRight, Plane, Star } from "lucide-react";
import { Link } from "react-router-dom";

import dubaiImg from "../../../assets/images/destinations/dubaai.jpg";
import baliImg from "../../../assets/images/destinations/bali.jpg";
import maldivesImg from "../../../assets/images/destinations/maldives.jpg";
import switzerlandImg from "../../../assets/images/destinations/switzerland.jpg";
import turkeyImg from "../../../assets/images/destinations/turkey.jpg";
import parisImg from "../../../assets/images/destinations/paris.jpg";

const destinations = [
    {
        id: 1,
        name: "Dubai",
        price: 520,
        rating: 4.8,
        image: dubaiImg,
        path: "/destinations/dubai",
    },
    {
        id: 2,
        name: "Bali",
        price: 420,
        rating: 4.7,
        image: baliImg,
        path: "/destinations/bali",
    },
    {
        id: 3,
        name: "Maldives",
        price: 650,
        rating: 4.9,
        image: maldivesImg,
        path: "/destinations/maldives",
    },
    {
        id: 4,
        name: "Switzerland",
        price: 780,
        rating: 4.8,
        image: switzerlandImg,
        path: "/destinations/switzerland",
    },
    {
        id: 5,
        name: "Turkey",
        price: 450,
        rating: 4.6,
        image: turkeyImg,
        path: "/destinations/turkey",
    },
    {
        id: 6,
        name: "Paris",
        price: 550,
        rating: 4.7,
        image: parisImg,
        path: "/destinations/paris",
    },
];

const PopularDestinations = () => {
    return (
        <section className="bg-slate-50 py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600">
                            <Plane size={17} />
                            Popular Destinations
                        </div>

                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl">
                            Explore Popular{" "}
                            <span className="text-blue-600">
                                Destinations
                            </span>
                        </h2>
                    </div>

                    <Link
                        to="/destinations"
                        className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-slate-800
                            shadow-sm
                            transition
                            hover:border-blue-200
                            hover:text-blue-600
                        "
                    >
                        View All Destinations

                        <ArrowRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* DESTINATION CARDS */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-6
                    "
                >
                    {destinations.map((destination) => (
                        <Link
                            key={destination.id}
                            to={destination.path}
                            className="
                                group
                                relative
                                h-[280px]
                                overflow-hidden
                                rounded-2xl
                                shadow-lg
                                shadow-slate-900/10
                            "
                        >
                            {/* Image */}
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-110
                                "
                            />

                            {/* Overlay */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-slate-950/90
                                    via-slate-950/20
                                    to-transparent
                                "
                            />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-5 text-white">

                                <h3 className="text-xl font-bold">
                                    {destination.name}
                                </h3>

                                <p className="mt-1 text-sm text-white/85">
                                    From{" "}
                                    <span className="font-bold text-white">
                                        ${destination.price}
                                    </span>
                                </p>

                                <div className="mt-2 flex items-center gap-1 text-sm font-semibold">
                                    <Star
                                        size={16}
                                        className="text-amber-400"
                                        fill="currentColor"
                                    />

                                    {destination.rating}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PopularDestinations;