import { useState } from "react";

import ApartmentHero from "../../../components/Hotels/Apartments/ApartmentHero/ApartmentHero";
import ApartmentSearch from "../../../components/Hotels/Apartments/ApartmentSearch/ApartmentSearch";
import ApartmentContent from "../../../components/Hotels/Apartments/ApartmentContent/ApartmentContent";
import ApartmentFeatures from "../../../components/Hotels/Apartments/ApartmentFeatures/ApartmentFeatures";

const Apartments = () => {
    const [searchData, setSearchData] = useState({
        destination: "",
        checkIn: "",
        checkOut: "",
        guests: 2,
        rooms: 1,
    });

    const handleApartmentSearch = (newSearchData) => {
        setSearchData(newSearchData);
    };

    return (
        <main className="min-h-screen bg-[#f7f9fc]">
            <ApartmentHero />

            <ApartmentSearch
                onSearch={handleApartmentSearch}
            />

            <ApartmentContent
                searchData={searchData}
            />

            <ApartmentFeatures />
        </main>
    );
};

export default Apartments;