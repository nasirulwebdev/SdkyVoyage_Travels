import {
    useMemo,
    useState,
    useEffect,
} from "react";

import ApartmentFilter from "../ApartmentFilter/ApartmentFilter";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import ApartmentSidebar from "../ApartmentSidebar/ApartmentSidebar";
import ApartmentPagination from "../ApartmentPagination/ApartmentPagination";

import {
    apartments,
} from "../../../../data/hotels/apartmentsData.js";

const ApartmentContent = ({
    searchData = {
        destination: "",
        checkIn: "",
        checkOut: "",
        guests: 2,
        rooms: 1,
    },
}) => {
    const [sortBy, setSortBy] =
        useState("recommended");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [filters, setFilters] = useState({
        propertyTypes: [],
        amenities: [],
        neighborhoods: [],
        maxPrice: 500,
    });

    const itemsPerPage = 10;

    /* =========================
       RESET PAGE AFTER SEARCH
    ========================= */

    useEffect(() => {
        setCurrentPage(1);
    }, [searchData]);

    /* =========================
       SEARCH + FILTER + SORT
    ========================= */

    const filteredAndSortedApartments =
        useMemo(() => {
            let result = apartments.filter(
                (apartment) => {

                    /* =========================
                       DESTINATION SEARCH
                    ========================= */

                    if (
                        searchData.destination?.trim()
                    ) {
                        const query =
                            searchData.destination
                                .trim()
                                .toLowerCase();

                        const apartmentName =
                            apartment.name
                                ?.toLowerCase() || "";

                        const apartmentLocation =
                            apartment.location
                                ?.toLowerCase() || "";

                        const matchesDestination =
                            apartmentName.includes(
                                query
                            ) ||
                            apartmentLocation.includes(
                                query
                            );

                        if (!matchesDestination) {
                            return false;
                        }
                    }

                    /* =========================
                       GUEST CAPACITY
                    ========================= */

                    if (
                        searchData.guests &&
                        apartment.maxGuests <
                            searchData.guests
                    ) {
                        return false;
                    }

                    /* =========================
                       ROOM CAPACITY
                    ========================= */

                    if (
                        searchData.rooms &&
                        apartment.rooms <
                            searchData.rooms
                    ) {
                        return false;
                    }

                    /* =========================
                       DATE AVAILABILITY
                    ========================= */

                    if (
                        searchData.checkIn &&
                        apartment.availability
                            ?.availableFrom
                    ) {
                        const checkInDate =
                            new Date(
                                searchData.checkIn
                            );

                        const availableFrom =
                            new Date(
                                apartment
                                    .availability
                                    .availableFrom
                            );

                        if (
                            checkInDate <
                            availableFrom
                        ) {
                            return false;
                        }
                    }

                    if (
                        searchData.checkOut &&
                        apartment.availability
                            ?.availableTo
                    ) {
                        const checkOutDate =
                            new Date(
                                searchData.checkOut
                            );

                        const availableTo =
                            new Date(
                                apartment
                                    .availability
                                    .availableTo
                            );

                        if (
                            checkOutDate >
                            availableTo
                        ) {
                            return false;
                        }
                    }

                    /* =========================
                       PRICE FILTER
                    ========================= */

                    if (
                        apartment.pricePerNight >
                        filters.maxPrice
                    ) {
                        return false;
                    }

                    /* =========================
                       PROPERTY TYPE FILTER
                    ========================= */

                    if (
                        filters.propertyTypes.length >
                            0 &&
                        !filters.propertyTypes.includes(
                            apartment.propertyType
                        )
                    ) {
                        return false;
                    }

                    /* =========================
                       NEIGHBORHOOD FILTER
                    ========================= */

                    if (
                        filters.neighborhoods.length >
                            0 &&
                        !filters.neighborhoods.includes(
                            apartment.neighborhood
                        )
                    ) {
                        return false;
                    }

                    /* =========================
                       AMENITIES FILTER
                    ========================= */

                    if (
                        filters.amenities.length > 0
                    ) {
                        const apartmentAmenities =
                            apartment.amenities || [];

                        const hasAllAmenities =
                            filters.amenities.every(
                                (amenity) =>
                                    apartmentAmenities.includes(
                                        amenity
                                    )
                            );

                        if (!hasAllAmenities) {
                            return false;
                        }
                    }

                    return true;
                }
            );

            /* =========================
               SORTING
            ========================= */

            result = [...result];

            switch (sortBy) {
                case "low-price":
                    result.sort(
                        (a, b) =>
                            a.pricePerNight -
                            b.pricePerNight
                    );
                    break;

                case "high-price":
                    result.sort(
                        (a, b) =>
                            b.pricePerNight -
                            a.pricePerNight
                    );
                    break;

                case "rating":
                    result.sort(
                        (a, b) =>
                            b.score - a.score
                    );
                    break;

                default:
                    break;
            }

            return result;
        }, [
            searchData,
            filters,
            sortBy,
        ]);

    /* =========================
       PAGINATION
    ========================= */

    const totalPages = Math.ceil(
        filteredAndSortedApartments.length /
            itemsPerPage
    );

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const visibleApartments =
        filteredAndSortedApartments.slice(
            startIndex,
            startIndex + itemsPerPage
        );

    /* =========================
       SORT CHANGE
    ========================= */

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        setCurrentPage(1);
    };

    /* =========================
       FILTER CHANGE
    ========================= */

    const handleFiltersChange = (updater) => {
        setFilters(updater);
        setCurrentPage(1);
    };

    /* =========================
       PAGE CHANGE
    ========================= */

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="pb-16 pt-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        lg:grid-cols-[230px_minmax(0,1fr)_230px]
                        xl:grid-cols-[250px_minmax(0,1fr)_250px]
                    "
                >
                    {/* =========================
                        LEFT FILTER
                    ========================= */}

                    <div className="min-w-0">
                        <ApartmentFilter
                            filters={filters}
                            setFilters={
                                handleFiltersChange
                            }
                        />
                    </div>

                    {/* =========================
                        CENTER LISTINGS
                    ========================= */}

                    <div className="min-w-0">

                        {/* Results Header */}

                        <div
                            className="
                                mb-4
                                flex
                                flex-col
                                gap-3
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">
                                    Apartments
                                </h2>

                                <p className="mt-1 text-xs text-slate-500">
                                    {
                                        filteredAndSortedApartments.length
                                    }{" "}
                                    properties found
                                </p>
                            </div>

                            {/* Sorting */}

                            <select
                                value={sortBy}
                                onChange={
                                    handleSortChange
                                }
                                className="
                                    rounded-lg
                                    border
                                    border-slate-200
                                    bg-white
                                    px-3
                                    py-2.5
                                    text-xs
                                    font-medium
                                    text-slate-700
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                "
                            >
                                <option value="recommended">
                                    Recommended
                                </option>

                                <option value="low-price">
                                    Price: Low to High
                                </option>

                                <option value="high-price">
                                    Price: High to Low
                                </option>

                                <option value="rating">
                                    Top Rated
                                </option>
                            </select>
                        </div>

                        {/* =========================
                            APARTMENT CARDS
                        ========================= */}

                        {visibleApartments.length >
                        0 ? (
                            <div className="space-y-5">
                                {visibleApartments.map(
                                    (apartment) => (
                                        <ApartmentCard
                                            key={
                                                apartment.id
                                            }
                                            apartment={
                                                apartment
                                            }
                                        />
                                    )
                                )}
                            </div>
                        ) : (
                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-10
                                    text-center
                                "
                            >
                                <h3 className="font-bold text-slate-900">
                                    No apartments found
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Try another destination,
                                    date, guest count, room
                                    count, or change your
                                    filters.
                                </p>
                            </div>
                        )}

                        {/* =========================
                            PAGINATION
                        ========================= */}

                        {totalPages > 1 && (
                            <ApartmentPagination
                                currentPage={
                                    currentPage
                                }
                                totalPages={
                                    totalPages
                                }
                                onPageChange={
                                    handlePageChange
                                }
                            />
                        )}
                    </div>

                    {/* =========================
                        RIGHT SIDEBAR
                    ========================= */}

                    <div className="hidden min-w-0 lg:block">
                        <ApartmentSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApartmentContent;