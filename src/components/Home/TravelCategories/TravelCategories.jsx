import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    Users,
    Heart,
    Mountain,
    Gem,
    Plane,
    Hotel,
    Compass,
} from "lucide-react";

const categories = [
    {
        id: 1,
        title: "Family Tour",
        description: "Create unforgettable memories with your loved ones.",
        icon: Users,
        path: "/packages/family-tour",
    },
    {
        id: 2,
        title: "Honeymoon",
        description: "Romantic escapes designed for beautiful moments.",
        icon: Heart,
        path: "/packages/honeymoon",
    },
    {
        id: 3,
        title: "Adventure",
        description: "Discover thrilling experiences around the world.",
        icon: Mountain,
        path: "/packages/adventure",
    },
    {
        id: 4,
        title: "Luxury Tour",
        description: "Experience premium travel with exceptional comfort.",
        icon: Gem,
        path: "/packages/luxury",
    },
    {
        id: 5,
        title: "Flights",
        description: "Find convenient domestic and international flights.",
        icon: Plane,
        path: "/flights",
    },
    {
        id: 6,
        title: "Hotels",
        description: "Book comfortable stays at your favorite destinations.",
        icon: Hotel,
        path: "/hotels",
    },
];

const TravelCategories = () => {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">

                    <div
                        className="
                            mx-auto
                            mb-4
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-50
                            px-4
                            py-2
                            text-sm
                            font-bold
                            uppercase
                            tracking-wider
                            text-blue-600
                        "
                    >
                        <Compass size={17} />

                        Travel Categories
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            tracking-tight
                            text-slate-950
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Choose Your Perfect{" "}
                        <span className="text-blue-600">
                            Travel Experience
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-xl
                            text-base
                            leading-7
                            text-slate-500
                            sm:text-lg
                        "
                    >
                        Explore our carefully selected travel services and
                        find the perfect journey for your next adventure.
                    </p>
                </div>

                {/* Category Cards */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <Link
                                key={category.id}
                                to={category.path}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-7
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-blue-200
                                    hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]
                                "
                            >
                                {/* Background Decoration */}
                                <div
                                    className="
                                        absolute
                                        -right-10
                                        -top-10
                                        h-32
                                        w-32
                                        rounded-full
                                        bg-blue-50
                                        transition-all
                                        duration-500
                                        group-hover:scale-[2.5]
                                    "
                                />

                                <div className="relative z-10">

                                    {/* Top */}
                                    <div className="flex items-start justify-between">

                                        {/* Icon */}
                                        <div
                                            className="
                                                flex
                                                h-16
                                                w-16
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                bg-blue-50
                                                text-blue-600
                                                transition-all
                                                duration-500
                                                group-hover:rotate-3
                                                group-hover:bg-blue-600
                                                group-hover:text-white
                                                group-hover:shadow-lg
                                                group-hover:shadow-blue-600/25
                                            "
                                        >
                                            <Icon
                                                size={28}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        {/* Arrow */}
                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-slate-200
                                                bg-white
                                                text-slate-500
                                                transition-all
                                                duration-300
                                                group-hover:border-blue-600
                                                group-hover:bg-blue-600
                                                group-hover:text-white
                                            "
                                        >
                                            <ArrowUpRight
                                                size={18}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:rotate-45
                                                "
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="
                                            mt-7
                                            text-xl
                                            font-bold
                                            text-slate-900
                                            transition-colors
                                            group-hover:text-blue-700
                                        "
                                    >
                                        {category.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            leading-7
                                            text-slate-500
                                        "
                                    >
                                        {category.description}
                                    </p>

                                    <div
                                        className="
                                            mt-6
                                            inline-flex
                                            items-center
                                            gap-2
                                            text-sm
                                            font-bold
                                            text-blue-600
                                        "
                                    >
                                        Explore Now

                                        <ArrowUpRight
                                            size={17}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TravelCategories;