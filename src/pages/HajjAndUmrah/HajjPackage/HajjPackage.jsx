import {
    useEffect,
    useMemo,
    useState,
} from "react";


import HajjPackageHero from "../../../components/HajjAndUmrah/HajjPackage/HajjPackageHero";
import HajjPackageSearch from "../../../components/HajjAndUmrah/HajjPackage/HajjPackageSearch";
import HajjPackageFilters from "../../../components/HajjAndUmrah/HajjPackage/HajjPackageFilters";
import HajjPackageToolbar from "../../../components/HajjAndUmrah/HajjPackage/HajjPackageToolbar";
import HajjPackageListing from "../../../components/HajjAndUmrah/HajjPackage/HajjPackageListing";
import HajjPackageSidebar from "../../../components/HajjAndUmrah/HajjPackage/HajjPackageSidebar";
import HajjPackagePagination from "../../../components/HajjAndUmrah/HajjPackage/HajjPackagePagination";
import HajjPackageFeatures from "../../../components/HajjAndUmrah/HajjPackage/HajjPackageFeatures";


import {
    hajjPackageFilterData,
    hajjPackagePaginationData,
    hajjPackages,
} from "../../../data/HajjAndUmrah/HajjPackageData";



const HajjPackage = () => {


    const defaultFilters = {
        packageType: "all",
        departureCity: "all",
        duration: "all",
        maxPrice:
            hajjPackageFilterData.priceRange.max,
    };



    const [
        searchFilters,
        setSearchFilters,
    ] = useState({
        packageType: "all",
        departureCity: "all",
        duration: "all",
    });



    const [
        filters,
        setFilters,
    ] = useState(defaultFilters);



    const [
        appliedFilters,
        setAppliedFilters,
    ] = useState(defaultFilters);



    const [
        sortBy,
        setSortBy,
    ] = useState("recommended");



    const [
        viewMode,
        setViewMode,
    ] = useState("grid");



    const [
        currentPage,
        setCurrentPage,
    ] = useState(1);



    const itemsPerPage =
        hajjPackagePaginationData.itemsPerPage;




    // Search Apply

    const handleSearch = () => {

        const nextFilters = {

            ...filters,

            packageType:
                searchFilters.packageType,

            departureCity:
                searchFilters.departureCity,

            duration:
                searchFilters.duration,
        };


        setFilters(nextFilters);

        setAppliedFilters(nextFilters);

        setCurrentPage(1);

    };






    // Filter Apply

    const handleApplyFilters = () => {

        setAppliedFilters({
            ...filters,
        });


        setCurrentPage(1);

    };






    // Clear Filter

    const handleClearFilters = () => {


        setFilters({
            ...defaultFilters,
        });


        setAppliedFilters({
            ...defaultFilters,
        });



        setSearchFilters({

            packageType:"all",

            departureCity:"all",

            duration:"all",

        });



        setCurrentPage(1);

    };







    // Filter + Sort

    const filteredPackages = useMemo(()=>{


        let result = [
            ...hajjPackages
        ];




        // Package Type

        if(
            appliedFilters.packageType !== "all"
        ){

            result =
                result.filter(
                    (item)=>

                        item.packageType ===
                        appliedFilters.packageType

                );

        }





        // Departure City

        if(
            appliedFilters.departureCity !== "all"
        ){

            result =
                result.filter(
                    (item)=>

                        item.departureCity ===
                        appliedFilters.departureCity

                );

        }





        // Duration

        if(
            appliedFilters.duration !== "all"
        ){

            const selectedDuration =
                hajjPackageFilterData.durations.find(

                    (item)=>

                        item.value ===
                        appliedFilters.duration

                );



            if(selectedDuration){

                result =
                    result.filter(

                        (item)=>

                            item.duration >=
                            selectedDuration.min
                            &&

                            item.duration <=
                            selectedDuration.max

                    );

            }

        }






        // Price

        result =
            result.filter(

                (item)=>

                    item.price <=
                    appliedFilters.maxPrice

            );






        // Sorting

        switch(sortBy){


            case "price-low-high":

                result.sort(
                    (a,b)=>
                        a.price-b.price
                );

                break;



            case "price-high-low":

                result.sort(
                    (a,b)=>
                        b.price-a.price
                );

                break;




            case "highest-rated":

                result.sort(
                    (a,b)=>
                        b.rating-a.rating
                );

                break;




            case "duration-shortest":

                result.sort(
                    (a,b)=>
                        a.duration-b.duration
                );

                break;




            default:

                result.sort(

                    (a,b)=>{


                        if(
                            a.featured !==
                            b.featured
                        ){

                            return(

                                Number(b.featured)
                                -
                                Number(a.featured)

                            );

                        }



                        return(

                            b.rating -
                            a.rating

                        );


                    }

                );


                break;

        }




        return result;



    },[
        appliedFilters,
        sortBy,
    ]);







    // Pagination

    const totalPages =
        Math.ceil(

            filteredPackages.length /
            itemsPerPage

        );





    const paginatedPackages =
        useMemo(()=>{


            const startIndex =
                (currentPage - 1)
                *
                itemsPerPage;



            const endIndex =
                startIndex +
                itemsPerPage;



            return filteredPackages.slice(

                startIndex,

                endIndex

            );


        },[
            filteredPackages,
            currentPage,
            itemsPerPage,
        ]);






    useEffect(()=>{

        setCurrentPage(1);

    },[
        sortBy
    ]);







    return (

        <main
            className="
                min-h-screen
                bg-[#f8f6f0]
            "
        >


            <HajjPackageHero />




            <HajjPackageSearch

                searchFilters={
                    searchFilters
                }

                setSearchFilters={
                    setSearchFilters
                }

                onSearch={
                    handleSearch
                }

            />






            <section

                className="
                    mx-auto
                    max-w-[1440px]
                    px-4
                    pb-20
                    sm:px-6
                    lg:px-8
                "

            >



                <div

                    className="
                        grid
                        grid-cols-1
                        gap-6

                        xl:grid-cols-[260px_minmax(0,1fr)_280px]

                    "

                >






                    {/* LEFT FILTER */}

                    <aside

                        className="
                            xl:sticky
                            xl:top-24
                            xl:h-fit
                        "

                    >

                        <HajjPackageFilters

                            filters={
                                filters
                            }


                            setFilters={
                                setFilters
                            }


                            onApplyFilters={
                                handleApplyFilters
                            }


                            onClearFilters={
                                handleClearFilters
                            }

                        />


                    </aside>









                    {/* CENTER PACKAGE */}

                    <div

                        className="
                            min-w-0
                        "

                    >


                        <HajjPackageToolbar

                            resultCount={
                                filteredPackages.length
                            }


                            sortBy={
                                sortBy
                            }


                            setSortBy={
                                setSortBy
                            }



                            viewMode={
                                viewMode
                            }


                            setViewMode={
                                setViewMode
                            }


                        />






                        <HajjPackageListing

                            packages={
                                paginatedPackages
                            }


                            viewMode={
                                viewMode
                            }


                        />







                        <HajjPackagePagination

                            currentPage={
                                currentPage
                            }


                            totalPages={
                                totalPages
                            }


                            onPageChange={
                                setCurrentPage
                            }


                        />




                    </div>









                    {/* RIGHT SIDEBAR */}


                    <aside

                        className="
                            xl:sticky
                            xl:top-24
                            xl:h-fit
                        "

                    >


                        <HajjPackageSidebar />


                    </aside>





                </div>



            </section>







            <HajjPackageFeatures />




        </main>

    );

};



export default HajjPackage;