import {
    useState,
} from "react";

import UmrahPackageHero from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageHero";
import UmrahPackageSearch from "../../../components/HajjAndUmrah/UmrahPackage/UmrahPackageSearch";


const UmrahPackage = () => {

    const [searchFilters, setSearchFilters] = useState({
        destination: "",
        duration: "",
        packageType: "",
        travelMonth: "",
    });


    const handleSearch = (values) => {

        setSearchFilters(values);

    };


    return (

        <main className="min-h-screen bg-[#f7f8fa]">

            {/* =========================
                HERO SECTION
            ========================= */}

            <UmrahPackageHero />


            {/* =========================
                SEARCH SECTION
            ========================= */}

            <UmrahPackageSearch
                searchFilters={searchFilters}
                onSearch={handleSearch}
            />


            {/* =========================
                NEXT COMPONENTS
                WILL BE ADDED HERE
            ========================= */}

        </main>

    );

};


export default UmrahPackage;