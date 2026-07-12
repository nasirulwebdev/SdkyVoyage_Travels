import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, CalendarDays, Star } from "lucide-react";


const PackageDetails = () => {

    const { id } = useParams();


    return (

        <section
            className="
                min-h-[70vh]
                bg-base-100
                px-5
                py-16
            "
        >

            <div
                className="
                    mx-auto
                    max-w-5xl
                "
            >

                {/* Back Button */}

                <Link
                    to="/packages"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-base-200
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition
                        hover:bg-primary
                        hover:text-white
                    "
                >

                    <ArrowLeft size={18}/>

                    Back To Packages

                </Link>



                {/* Details Card */}

                <div
                    className="
                        mt-8
                        overflow-hidden
                        rounded-3xl
                        border
                        border-base-300
                        bg-base-100
                        shadow-xl
                    "
                >


                    {/* Image Placeholder */}

                    <div
                        className="
                            flex
                            h-72
                            items-center
                            justify-center
                            bg-gradient-to-r
                            from-primary
                            to-secondary
                            text-white
                        "
                    >

                        <h1
                            className="
                                text-5xl
                                font-bold
                            "
                        >

                            SkyVoyage Travels

                        </h1>


                    </div>



                    {/* Content */}

                    <div
                        className="
                            p-8
                        "
                    >

                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                justify-between
                                gap-5
                            "
                        >

                            <div>


                                <h2
                                    className="
                                        text-3xl
                                        font-bold
                                    "
                                >

                                    Premium Travel Package

                                </h2>


                                <p
                                    className="
                                        mt-3
                                        text-base-content/70
                                    "
                                >

                                    Package ID :
                                    <span className="ml-2 font-semibold">

                                        {id}

                                    </span>

                                </p>


                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    rounded-full
                                    bg-yellow-400/20
                                    px-4
                                    py-2
                                "
                            >

                                <Star
                                    size={18}
                                    className="text-yellow-500"
                                    fill="currentColor"
                                />

                                <span className="font-semibold">

                                    5.0

                                </span>


                            </div>


                        </div>



                        {/* Info */}

                        <div
                            className="
                                mt-8
                                grid
                                gap-5
                                md:grid-cols-3
                            "
                        >


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    bg-base-200
                                    p-4
                                "
                            >

                                <MapPin/>

                                <div>

                                    <p className="text-sm opacity-60">

                                        Destination

                                    </p>

                                    <p className="font-semibold">

                                        Bangladesh

                                    </p>


                                </div>


                            </div>



                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    bg-base-200
                                    p-4
                                "
                            >

                                <CalendarDays/>

                                <div>

                                    <p className="text-sm opacity-60">

                                        Duration

                                    </p>

                                    <p className="font-semibold">

                                        5 Days

                                    </p>


                                </div>


                            </div>



                            <div
                                className="
                                    rounded-2xl
                                    bg-base-200
                                    p-4
                                "
                            >

                                <p className="text-sm opacity-60">

                                    Package Status

                                </p>


                                <p className="font-semibold text-success">

                                    Available

                                </p>


                            </div>



                        </div>


                    </div>


                </div>


            </div>


        </section>

    );
};


export default PackageDetails;