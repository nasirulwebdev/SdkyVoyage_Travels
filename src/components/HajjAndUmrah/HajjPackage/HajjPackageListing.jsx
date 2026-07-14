import HajjPackageCard from "./HajjPackageCard";


const HajjPackageListing = ({
    packages = [],
    viewMode = "grid",
}) => {


    // No Result Found

    if(packages.length === 0){

        return (

            <div

                className="
                    flex
                    min-h-[350px]
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-[#eadfce]
                    bg-white
                    px-6
                    text-center
                "

            >

                <div

                    className="
                        mb-5
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-[#f6efe2]
                        text-4xl
                    "

                >
                    🕋
                </div>



                <h3

                    className="
                        text-xl
                        font-bold
                        text-[#123c30]
                    "

                >

                    No Hajj Package Found

                </h3>



                <p

                    className="
                        mt-2
                        max-w-md
                        text-sm
                        leading-6
                        text-gray-500
                    "

                >

                    We could not find any package matching
                    your selected filters. Please try
                    different options.

                </p>


            </div>

        );

    }







    return (

        <div

            className={

                viewMode === "grid"

                ?

                `
                    grid
                    grid-cols-1
                    gap-6
                    md:grid-cols-2
                `

                :

                `
                    flex
                    flex-col
                    gap-6
                `

            }

        >


            {
                packages.map(
                    (packageItem)=>(

                        <HajjPackageCard

                            key={
                                packageItem.id
                            }

                            packageItem={
                                packageItem
                            }

                            viewMode={
                                viewMode
                            }

                        />

                    )
                )
            }


        </div>

    );

};


export default HajjPackageListing;