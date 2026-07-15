import { useMemo, useState } from "react";
import {
    ArrowRight,
    ChevronUp,
} from "lucide-react";

import { touristVisaData } from "../../../data/Visa/touristVisaData.js";
import TouristVisaCountryCard from "./TouristVisaCountryCard";


const filters = [
    "All",
    "Schengen",
    "Europe",
    "Asia",
    "North America",
    "Middle East",
    "Oceania",
];


const TopTouristVisaCountries = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [showAll, setShowAll] = useState(false);


    // Filter Countries
    const filteredCountries = useMemo(() => {
        if (activeFilter === "All") {
            return touristVisaData;
        }

        return touristVisaData.filter((visa) =>
            visa.region?.includes(activeFilter)
        );
    }, [activeFilter]);


    // Show 4 cards initially
    const visibleCountries = showAll
        ? filteredCountries
        : filteredCountries.slice(0, 4);


    // Change Filter
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setShowAll(false);
    };


    return (
        <section
            id="tourist-visa-countries"
            className="
                mx-auto
                max-w-7xl
                px-4
                pb-14
                sm:px-6
                lg:px-8
            "
        >
            {/* Section Heading */}
            <div
                className="
                    mb-6
                    flex
                    flex-col
                    gap-4
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                "
            >
                <div>
                    <p
                        className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-blue-600
                        "
                    >
                        Popular Destinations
                    </p>

                    <h2
                        className="
                            mt-2
                            text-2xl
                            font-extrabold
                            text-slate-900
                            sm:text-3xl
                        "
                    >
                        Top Tourist Visa Countries
                    </h2>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        Explore popular destinations and start
                        your tourist visa application with our
                        expert assistance.
                    </p>
                </div>
            </div>


            {/* Active Filters */}
            <div
                className="
                    mb-7
                    flex
                    flex-wrap
                    items-center
                    gap-2
                "
            >
                {filters.map((filter) => {
                    const isActive =
                        activeFilter === filter;

                    return (
                        <button
                            key={filter}
                            type="button"
                            onClick={() =>
                                handleFilterChange(filter)
                            }
                            className={`
                                rounded-lg
                                border
                                px-4
                                py-2
                                text-sm
                                font-bold
                                transition-all
                                duration-200

                                ${
                                    isActive
                                        ? `
                                            border-blue-600
                                            bg-blue-600
                                            text-white
                                            shadow-md
                                            shadow-blue-600/20
                                        `
                                        : `
                                            border-slate-200
                                            bg-white
                                            text-slate-600
                                            hover:border-blue-300
                                            hover:bg-blue-50
                                            hover:text-blue-600
                                        `
                                }
                            `}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>


            {/* Country Cards */}
            {visibleCountries.length > 0 ? (
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {visibleCountries.map((visa) => (
                        <TouristVisaCountryCard
                            key={visa.id}
                            visa={visa}
                        />
                    ))}
                </div>
            ) : (
                <div
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-6
                        py-14
                        text-center
                    "
                >
                    <h3
                        className="
                            text-lg
                            font-bold
                            text-slate-900
                        "
                    >
                        No Countries Found
                    </h3>

                    <p
                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "
                    >
                        No tourist visa countries are available
                        in this category.
                    </p>
                </div>
            )}


            {/* View All / Show Less */}
            {filteredCountries.length > 4 && (
                <div
                    className="
                        mt-8
                        flex
                        justify-center
                    "
                >
                    <button
                        type="button"
                        onClick={() =>
                            setShowAll((prev) => !prev)
                        }
                        className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            border
                            border-blue-600
                            bg-white
                            px-6
                            py-2.5
                            text-sm
                            font-bold
                            text-blue-600
                            transition-all
                            duration-300
                            hover:bg-blue-600
                            hover:text-white
                            hover:shadow-lg
                            hover:shadow-blue-600/20
                        "
                    >
                        {showAll ? (
                            <>
                                Show Less
                                <ChevronUp size={16} />
                            </>
                        ) : (
                            <>
                                View All Countries

                                <ArrowRight
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
};


export default TopTouristVisaCountries;