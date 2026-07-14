import {
    Check,
    Filter,
    RotateCcw,
} from "lucide-react";


import {
    hajjPackageFilterData,
} from "../../../data/HajjAndUmrah/HajjPackageData";




const HajjPackageFilters = ({
    filters,
    setFilters,
    onApplyFilters,
    onClearFilters,
}) => {



    const handleChange = (
        key,
        value
    )=>{

        setFilters({

            ...filters,

            [key]: value,

        });

    };






    return (

        <div

            className="
                rounded-3xl
                border
                border-[#eadfce]
                bg-white
                p-5
                shadow-sm
            "

        >




            {/* Header */}

            <div

                className="
                    mb-6
                    flex
                    items-center
                    justify-between
                "

            >

                <div

                    className="
                        flex
                        items-center
                        gap-3
                    "

                >

                    <div

                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#f5ead7]
                            text-[#b68430]
                        "

                    >

                        <Filter
                            size={20}
                        />

                    </div>


                    <h3

                        className="
                            text-lg
                            font-bold
                            text-[#123c30]
                        "

                    >

                        Filters

                    </h3>


                </div>




                <button

                    onClick={
                        onClearFilters
                    }

                    className="
                        text-xs
                        font-semibold
                        text-[#b68430]
                        hover:underline
                    "

                >

                    Clear

                </button>


            </div>









            {/* Package Type */}


            <FilterSection

                title="Package Type"

            >


                {
                    hajjPackageFilterData.packageTypes.map(
                        (item)=>(

                            <label

                                key={
                                    item.id
                                }

                                className="
                                    group
                                    flex
                                    cursor-pointer
                                    items-center
                                    gap-3
                                    rounded-lg
                                    py-2
                                    text-sm
                                    text-gray-600
                                    transition
                                    hover:text-[#0b4d3b]
                                "

                            >


                                <input

                                    type="radio"

                                    name="packageType"

                                    checked={
                                        filters.packageType === item.value
                                    }

                                    onChange={()=>

                                        handleChange(
                                            "packageType",
                                            item.value
                                        )

                                    }

                                    className="
                                        hidden
                                    "

                                />



                                <span

                                    className={

                                        `
                                        flex
                                        h-5
                                        w-5
                                        items-center
                                        justify-center
                                        rounded-full
                                        border

                                        ${
                                            filters.packageType === item.value

                                            ?

                                            `
                                            border-[#0b4d3b]
                                            bg-[#0b4d3b]
                                            text-white
                                            `

                                            :

                                            `
                                            border-gray-300
                                            `
                                        }

                                        `
                                    }

                                >

                                    {
                                        filters.packageType === item.value
                                        &&
                                        <Check size={13}/>
                                    }


                                </span>




                                {item.label}


                            </label>


                        )
                    )
                }


            </FilterSection>









            {/* Departure City */}


            <FilterSection

                title="Departure City"

            >

                {
                    hajjPackageFilterData.departureCities.map(
                        (item)=>(


                            <label

                                key={
                                    item.id
                                }

                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    gap-3
                                    py-2
                                    text-sm
                                    text-gray-600
                                "

                            >

                                <input

                                    type="radio"

                                    name="city"

                                    checked={
                                        filters.departureCity === item.value
                                    }


                                    onChange={()=>

                                        handleChange(
                                            "departureCity",
                                            item.value
                                        )

                                    }


                                    className="hidden"

                                />



                                <span

                                    className={

                                        `
                                        h-4
                                        w-4
                                        rounded-full
                                        border

                                        ${
                                            filters.departureCity === item.value

                                            ?

                                            "border-4 border-[#0b4d3b]"

                                            :

                                            "border-gray-300"

                                        }

                                        `
                                    }

                                />



                                {item.label}



                            </label>


                        )
                    )
                }


            </FilterSection>









            {/* Duration */}



            <FilterSection

                title="Duration"

            >


                {
                    hajjPackageFilterData.durations.map(
                        (item)=>(


                            <label

                                key={
                                    item.id
                                }

                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    gap-3
                                    py-2
                                    text-sm
                                    text-gray-600
                                "

                            >


                                <input

                                    type="radio"

                                    name="duration"

                                    checked={
                                        filters.duration === item.value
                                    }


                                    onChange={()=>

                                        handleChange(
                                            "duration",
                                            item.value
                                        )

                                    }


                                    className="hidden"

                                />



                                <span

                                    className={

                                        `
                                        h-4
                                        w-4
                                        rounded-full
                                        border

                                        ${
                                            filters.duration === item.value

                                            ?

                                            "border-4 border-[#0b4d3b]"

                                            :

                                            "border-gray-300"

                                        }

                                        `
                                    }

                                />


                                {item.label}


                            </label>


                        )
                    )
                }


            </FilterSection>









            {/* Price Range */}



            <FilterSection

                title="Maximum Price"

            >


                <input

                    type="range"

                    min={
                        hajjPackageFilterData.priceRange.min
                    }


                    max={
                        hajjPackageFilterData.priceRange.max
                    }


                    step={
                        hajjPackageFilterData.priceRange.step
                    }


                    value={
                        filters.maxPrice
                    }


                    onChange={(e)=>

                        handleChange(
                            "maxPrice",
                            Number(e.target.value)
                        )

                    }


                    className="
                        w-full
                        accent-[#0b4d3b]
                    "

                />



                <div

                    className="
                        mt-3
                        flex
                        justify-between
                        text-sm
                        font-semibold
                        text-[#123c30]
                    "

                >

                    <span>

                        $3500

                    </span>


                    <span>

                        ${filters.maxPrice}

                    </span>


                </div>


            </FilterSection>









            {/* Apply Button */}



            <button

                onClick={
                    onApplyFilters
                }


                className="
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#0b4d3b]
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    hover:bg-[#c69235]
                "

            >

                <Filter size={17}/>

                Apply Filters


            </button>



            <button

                onClick={
                    onClearFilters
                }


                className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#eadfce]
                    py-3
                    text-sm
                    font-semibold
                    text-[#123c30]
                    transition-all
                    hover:bg-[#faf5eb]
                "

            >

                <RotateCcw size={16}/>

                Reset


            </button>




        </div>


    );

};









const FilterSection = ({
    title,
    children,
}) => (

    <div

        className="
            mb-6
            border-b
            border-[#eee5d8]
            pb-5
        "

    >

        <h4

            className="
                mb-3
                text-sm
                font-bold
                text-[#123c30]
            "

        >

            {title}

        </h4>


        {children}


    </div>

);



export default HajjPackageFilters;