import {
    Grid2X2,
    List,
    SlidersHorizontal,
} from "lucide-react";

import {
    hajjPackageSortOptions,
} from "../../../data/HajjAndUmrah/HajjPackageData";



const HajjPackageToolbar = ({
    resultCount,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
}) => {


    return (

        <div

            className="
                mb-6
                flex
                flex-col
                gap-4
                rounded-2xl
                border
                border-[#eadfce]
                bg-white
                p-4
                shadow-sm

                sm:flex-row
                sm:items-center
                sm:justify-between
            "

        >


            {/* Result Count */}

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
                        bg-[#f4ead8]
                        text-[#b68430]
                    "

                >

                    <SlidersHorizontal
                        size={20}
                    />

                </div>



                <div>

                    <p

                        className="
                            text-xs
                            font-medium
                            text-gray-500
                        "

                    >
                        Available Packages
                    </p>



                    <h3

                        className="
                            text-lg
                            font-bold
                            text-[#123c30]
                        "

                    >

                        {resultCount} Hajj Packages

                    </h3>


                </div>


            </div>








            {/* Right Controls */}

            <div

                className="
                    flex
                    items-center
                    gap-3
                "

            >





                {/* Sort Dropdown */}

                <select

                    value={sortBy}

                    onChange={(e)=>
                        setSortBy(
                            e.target.value
                        )
                    }


                    className="
                        h-11
                        rounded-xl
                        border
                        border-[#dfd5c5]
                        bg-white
                        px-4
                        text-sm
                        font-semibold
                        text-[#374740]
                        outline-none
                        transition-all
                        focus:border-[#0b4d3b]
                        focus:ring-2
                        focus:ring-[#0b4d3b]/10
                    "

                >

                    {
                        hajjPackageSortOptions.map(
                            (option)=>(

                                <option

                                    key={
                                        option.id
                                    }

                                    value={
                                        option.value
                                    }

                                >

                                    {
                                        option.label
                                    }

                                </option>

                            )
                        )
                    }


                </select>








                {/* View Toggle */}

                <div

                    className="
                        flex
                        items-center
                        rounded-xl
                        border
                        border-[#dfd5c5]
                        bg-[#faf8f3]
                        p-1
                    "

                >



                    {/* Grid */}

                    <button

                        type="button"

                        onClick={()=>
                            setViewMode("grid")
                        }


                        className={

                            `
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            transition-all
                            duration-300

                            ${
                                viewMode === "grid"

                                ?

                                `
                                bg-[#0b4d3b]
                                text-white
                                shadow-md
                                `

                                :

                                `
                                text-[#52615c]
                                hover:bg-white
                                `
                            }

                            `
                        }

                    >

                        <Grid2X2
                            size={18}
                        />

                    </button>








                    {/* List */}

                    <button

                        type="button"

                        onClick={()=>
                            setViewMode("list")
                        }


                        className={

                            `
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            transition-all
                            duration-300

                            ${
                                viewMode === "list"

                                ?

                                `
                                bg-[#0b4d3b]
                                text-white
                                shadow-md
                                `

                                :

                                `
                                text-[#52615c]
                                hover:bg-white
                                `
                            }

                            `
                        }

                    >

                        <List
                            size={18}
                        />

                    </button>




                </div>


            </div>


        </div>


    );

};


export default HajjPackageToolbar;