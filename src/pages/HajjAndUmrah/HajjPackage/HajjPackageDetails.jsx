import {
    useParams,
} from "react-router-dom";


import {
    BedDouble,
    Bus,
    CheckCircle,
    Clock,
    Plane,
    Star,
    Utensils,
} from "lucide-react";


import {
    hajjPackages,
} from "../../../data/HajjAndUmrah/HajjPackageData.js";





const HajjPackageDetails = () => {


    const {
        id,
    } = useParams();




    const packageData =
        hajjPackages.find(
            (item)=>
                item.id === Number(id)
        );





    if(!packageData){

        return (

            <div

                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-[#f8f6f0]
                "

            >

                <h2

                    className="
                        text-2xl
                        font-bold
                        text-[#123c30]
                    "

                >

                    Package Not Found

                </h2>

            </div>

        );

    }







    return (

        <main

            className="
                min-h-screen
                bg-[#f8f6f0]
                pb-20
            "

        >




            {/* Hero Image */}


            <section

                className="
                    relative
                    h-[420px]
                    overflow-hidden
                "

            >


                <img

                    src={
                        packageData.image
                    }


                    alt={
                        packageData.title
                    }


                    className="
                        h-full
                        w-full
                        object-cover
                    "

                />



                <div

                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/30
                        to-transparent
                    "

                />





                <div

                    className="
                        absolute
                        bottom-10
                        left-0
                        right-0
                        mx-auto
                        max-w-7xl
                        px-5
                    "

                >


                    <span

                        className="
                            rounded-full
                            bg-[#c69235]
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-white
                        "

                    >

                        {packageData.badge}

                    </span>





                    <h1

                        className="
                            mt-4
                            text-3xl
                            font-bold
                            text-white
                            md:text-5xl
                        "

                    >

                        {packageData.title}

                    </h1>




                    <div

                        className="
                            mt-3
                            flex
                            items-center
                            gap-2
                            text-white
                        "

                    >

                        <Star

                            size={18}

                            className="
                                fill-[#c69235]
                                text-[#c69235]
                            "

                        />

                        {packageData.rating}

                        <span>

                            ({packageData.reviewCount} Reviews)

                        </span>


                    </div>



                </div>



            </section>









            <section

                className="
                    mx-auto
                    max-w-7xl
                    px-5
                    pt-10
                "

            >



                <div

                    className="
                        grid
                        gap-8
                        lg:grid-cols-[1fr_350px]
                    "

                >





                    {/* LEFT CONTENT */}


                    <div

                        className="
                            space-y-6
                        "

                    >



                        <InfoCard

                            title="Package Overview"

                        >

                            <p

                                className="
                                    leading-7
                                    text-gray-600
                                "

                            >

                                {packageData.description}

                            </p>


                        </InfoCard>









                        <InfoCard

                            title="Package Information"

                        >


                            <div

                                className="
                                    grid
                                    gap-4
                                    sm:grid-cols-2
                                "

                            >


                                <Item

                                    icon={<Clock/>}

                                    title="Duration"

                                    value={
                                        packageData.durationLabel
                                    }

                                />


                                <Item

                                    icon={<BedDouble/>}

                                    title="Hotel"

                                    value={
                                        packageData.hotelDistance
                                    }

                                />



                                <Item

                                    icon={<Plane/>}

                                    title="Flight"

                                    value={
                                        packageData.flightType
                                    }

                                />


                                <Item

                                    icon={<Bus/>}

                                    title="Transport"

                                    value="Included"

                                />


                            </div>


                        </InfoCard>









                        <InfoCard

                            title="Services Included"

                        >


                            <div

                                className="
                                    space-y-3
                                "

                            >


                                {
                                    packageData.visaIncluded &&

                                    <Service text="Hajj Visa Included"/>

                                }


                                {
                                    packageData.mealsIncluded &&

                                    <Service text="Daily Meals Included"/>

                                }


                                {
                                    packageData.transportIncluded &&

                                    <Service text="Transportation Included"/>

                                }



                                <Service

                                    text={`${packageData.makkahNights} Nights Stay in Makkah`}

                                />


                                <Service

                                    text={`${packageData.madinahNights} Nights Stay in Madinah`}

                                />



                            </div>



                        </InfoCard>



                    </div>









                    {/* RIGHT PRICE CARD */}


                    <aside


                        className="
                            lg:sticky
                            lg:top-24
                            lg:h-fit
                        "

                    >


                        <div

                            className="
                                rounded-3xl
                                bg-white
                                p-6
                                shadow-lg
                            "

                        >



                            <p

                                className="
                                    text-sm
                                    text-gray-500
                                "

                            >

                                Starting From

                            </p>




                            <h2

                                className="
                                    mt-2
                                    text-4xl
                                    font-bold
                                    text-[#0b4d3b]
                                "

                            >

                                {packageData.currency}

                                {packageData.price}

                            </h2>



                            <p

                                className="
                                    text-sm
                                    text-gray-500
                                "

                            >

                                {packageData.priceUnit}

                            </p>







                            <button

                                className="
                                    mt-6
                                    w-full
                                    rounded-xl
                                    bg-[#0b4d3b]
                                    py-4
                                    font-bold
                                    text-white
                                    transition
                                    hover:bg-[#c69235]
                                "

                            >

                                Book This Package

                            </button>




                        </div>


                    </aside>






                </div>


            </section>





        </main>

    );

};









const InfoCard = ({
    title,
    children,
}) => (

    <div

        className="
            rounded-3xl
            border
            border-[#eadfce]
            bg-white
            p-6
        "

    >

        <h3

            className="
                mb-5
                text-xl
                font-bold
                text-[#123c30]
            "

        >

            {title}

        </h3>


        {children}


    </div>

);







const Item = ({
    icon,
    title,
    value,
}) => (

    <div

        className="
            flex
            gap-3
            rounded-xl
            bg-[#faf5eb]
            p-4
        "

    >

        <div

            className="
                text-[#b68430]
            "

        >

            {icon}

        </div>


        <div>

            <p className="text-xs text-gray-500">

                {title}

            </p>


            <p className="
                text-sm
                font-bold
                text-[#123c30]
            ">

                {value}

            </p>


        </div>


    </div>

);







const Service = ({
    text,
}) => (

    <div

        className="
            flex
            items-center
            gap-3
            text-sm
            font-medium
            text-gray-600
        "

    >

        <CheckCircle

            size={18}

            className="
                text-[#0b4d3b]
            "

        />

        {text}


    </div>

);





export default HajjPackageDetails;