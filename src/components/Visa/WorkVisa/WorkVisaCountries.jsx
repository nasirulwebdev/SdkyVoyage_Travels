import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    ChevronDown,
    ChevronUp,
    Search,
} from "lucide-react";

import {
    workVisaData,
    workVisaUiConfig,
    workVisaSortOptions,
} from "../../../data/Visa/WorkVisaData.js";

import WorkVisaFilter from "./WorkVisaFilter";
import WorkVisaCard from "./WorkVisaCard";


const WorkVisaCountries = () => {
    const [activeFilter, setActiveFilter] = useState(
        workVisaUiConfig.defaultFilter
    );

    const [searchTerm, setSearchTerm] = useState("");

    const [sortBy, setSortBy] = useState(
        workVisaSortOptions[0]?.value || "default"
    );

    const [showAll, setShowAll] = useState(false);


    // ========================================
    // SIDEBAR EVENTS
    // ========================================
    useEffect(() => {
        // Popular Work Destination Click
        const handleDestinationSelect = (event) => {
            const selectedCountry =
                event.detail?.country || "";

            setActiveFilter("all");
            setSearchTerm(selectedCountry);
            setSortBy(
                workVisaSortOptions[0]?.value ||
                "default"
            );
            setShowAll(true);
        };


        // Sidebar View All Countries Click
        const handleViewAllCountries = () => {
            setActiveFilter(
                workVisaUiConfig.defaultFilter
            );

            setSearchTerm("");

            setSortBy(
                workVisaSortOptions[0]?.value ||
                "default"
            );

            setShowAll(true);
        };


        window.addEventListener(
            "workVisaDestinationSelect",
            handleDestinationSelect
        );

        window.addEventListener(
            "workVisaViewAllCountries",
            handleViewAllCountries
        );


        return () => {
            window.removeEventListener(
                "workVisaDestinationSelect",
                handleDestinationSelect
            );

            window.removeEventListener(
                "workVisaViewAllCountries",
                handleViewAllCountries
            );
        };
    }, []);


    // ========================================
    // FILTER + SEARCH + SORT
    // ========================================
    const filteredAndSortedVisas = useMemo(() => {
        let result = [...workVisaData];


        // Category Filter
        if (activeFilter !== "all") {
            result = result.filter((visa) =>
                visa.categories.includes(activeFilter)
            );
        }


        // Search
        const normalizedSearch = searchTerm
            .trim()
            .toLowerCase();

        if (normalizedSearch) {
            result = result.filter((visa) => {
                const searchableText = [
                    visa.country,
                    visa.title,
                    visa.region,
                    visa.workPermission,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(
                    normalizedSearch
                );
            });
        }


        // Sort
        switch (sortBy) {
            case "price-low-high":
                result.sort(
                    (a, b) =>
                        Number(a.price) -
                        Number(b.price)
                );
                break;

            case "price-high-low":
                result.sort(
                    (a, b) =>
                        Number(b.price) -
                        Number(a.price)
                );
                break;

            case "country-a-z":
                result.sort((a, b) =>
                    a.country.localeCompare(b.country)
                );
                break;

            case "country-z-a":
                result.sort((a, b) =>
                    b.country.localeCompare(a.country)
                );
                break;

            case "popular":
                result.sort(
                    (a, b) =>
                        Number(b.popularity || 0) -
                        Number(a.popularity || 0)
                );
                break;

            default:
                result.sort(
                    (a, b) =>
                        Number(a.id) -
                        Number(b.id)
                );
        }


        return result;
    }, [
        activeFilter,
        searchTerm,
        sortBy,
    ]);


    // ========================================
    // VISIBLE CARDS
    // ========================================
    const visibleVisas = showAll
        ? filteredAndSortedVisas
        : filteredAndSortedVisas.slice(
              0,
              workVisaUiConfig.initialVisibleCountries
          );


    // ========================================
    // HANDLERS
    // ========================================
    const handleFilterChange = (value) => {
        setActiveFilter(value);
        setSearchTerm("");
        setShowAll(false);
    };


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setShowAll(false);
    };


    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        setShowAll(false);
    };


    const handleViewAll = () => {
        setShowAll((prev) => !prev);
    };


    return (
        <section
            id="work-visa-countries"
            className="
                scroll-mt-24
                bg-white
                px-4
                py-16
                sm:px-6
                lg:px-8
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* HEADING */}
                <div className="text-center">
                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            tracking-tight
                            text-slate-900
                            sm:text-4xl
                        "
                    >
                        Top Work Visa Countries
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-3
                            max-w-2xl
                            text-sm
                            leading-7
                            text-slate-500
                        "
                    >
                        Explore the best work visa
                        opportunities and choose the
                        right destination for your career.
                    </p>
                </div>


                {/* FILTER BUTTONS */}
                <div className="mt-8">
                    <WorkVisaFilter
                        activeFilter={activeFilter}
                        onFilterChange={
                            handleFilterChange
                        }
                    />
                </div>


                {/* SEARCH + SORT */}
                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-[#f8faff]
                        p-4
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >
                    {/* SEARCH */}
                    {workVisaUiConfig.showSearch && (
                        <div
                            className="
                                relative
                                w-full
                                md:max-w-md
                            "
                        >
                            <Search
                                size={18}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                "
                            />

                            <input
                                type="text"
                                value={searchTerm}
                                onChange={
                                    handleSearchChange
                                }
                                placeholder="Search country..."
                                className="
                                    h-12
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    pl-11
                                    pr-4
                                    text-sm
                                    text-slate-700
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                            />
                        </div>
                    )}


                    {/* SORT */}
                    {workVisaUiConfig.showSort && (
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    hidden
                                    text-sm
                                    font-semibold
                                    text-slate-600
                                    sm:block
                                "
                            >
                                Sort by:
                            </span>

                            <select
                                value={sortBy}
                                onChange={
                                    handleSortChange
                                }
                                className="
                                    h-12
                                    min-w-[190px]
                                    cursor-pointer
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                            >
                                {workVisaSortOptions.map(
                                    (option) => (
                                        <option
                                            key={option.id}
                                            value={
                                                option.value
                                            }
                                        >
                                            {option.label}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    )}
                </div>


                {/* RESULT COUNT */}
                <div
                    className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        pb-4
                    "
                >
                    <p className="text-sm text-slate-500">
                        Showing{" "}
                        <span className="font-bold text-slate-900">
                            {visibleVisas.length}
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-slate-900">
                            {
                                filteredAndSortedVisas.length
                            }
                        </span>{" "}
                        countries
                    </p>
                </div>


                {/* COUNTRY CARDS */}
                {visibleVisas.length > 0 ? (
                    <div
                        className="
                            mt-7
                            grid
                            gap-6
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                        "
                    >
                        {visibleVisas.map((visa) => (
                            <WorkVisaCard
                                key={visa.id}
                                visa={visa}
                            />
                        ))}
                    </div>
                ) : (
                    <div
                        className="
                            mt-8
                            rounded-2xl
                            border
                            border-dashed
                            border-slate-300
                            bg-slate-50
                            px-6
                            py-16
                            text-center
                        "
                    >
                        <Search
                            size={35}
                            className="
                                mx-auto
                                text-slate-300
                            "
                        />

                        <h3
                            className="
                                mt-4
                                text-lg
                                font-bold
                                text-slate-800
                            "
                        >
                            No countries found
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-slate-500
                            "
                        >
                            Try another country name
                            or filter.
                        </p>
                    </div>
                )}


                {/* VIEW ALL / SHOW LESS */}
                {filteredAndSortedVisas.length >
                    workVisaUiConfig.initialVisibleCountries && (
                    <div className="mt-10 flex justify-center">
                        <button
                            type="button"
                            onClick={handleViewAll}
                            className="
                                flex
                                cursor-pointer
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-blue-600
                                bg-white
                                px-8
                                py-3.5
                                text-sm
                                font-bold
                                text-blue-600
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-blue-600
                                hover:text-white
                            "
                        >
                            {showAll
                                ? workVisaUiConfig.showLessButtonText
                                : workVisaUiConfig.viewAllButtonText}

                            {showAll ? (
                                <ChevronUp size={17} />
                            ) : (
                                <ChevronDown size={17} />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};


export default WorkVisaCountries;