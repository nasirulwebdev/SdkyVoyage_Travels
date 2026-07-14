import {
    ArrowRight,
    BedDouble,
    CheckCircle,
    Heart,
    Plane,
    Star,
    Utensils,
    Bus,
} from "lucide-react";

import { Link } from "react-router-dom";



const HajjPackageCard = ({
    packageItem,
    viewMode = "grid",
}) => {


    const {
        id,
        title,
        image,
        badge,
        rating,
        reviewCount,
        durationLabel,
        hotelDistance,
        makkahNights,
        madinahNights,
        flightType,
        visaIncluded,
        mealsIncluded,
        transportIncluded,
        description,
        price,
        currency,
        priceUnit,
    } = packageItem;





    // LIST VIEW

    if(viewMode === "list"){

        return (

            <article

                className="
                    group
                    flex
                    flex-col
                    gap-5
                    rounded-3xl
                    border
                    border-[#e9dfcf]
                    bg-white
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_45px_rgba(11,77,59,0.12)]
                    md:flex-row
                "

            >


                {/* Image */}

                <div

                    className="
                        relative
                        h-56
                        overflow-hidden
                        rounded-2xl
                        md:w-72
                        shrink-0
                    "

                >

                    <img

                        src={image}

                        alt={title}

                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                        "

                    />


                    <div

                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/50
                            to-transparent
                        "

                    />


                    <span

                        className="
                            absolute
                            left-4
                            top-4
                            rounded-full
                            bg-[#c69235]
                            px-3
                            py-1
                            text-xs
                            font-bold
                            text-white
                        "

                    >
                        {badge}

                    </span>


                </div>






                {/* Content */}

                <div className="flex-1">


                    <h3

                        className="
                            text-xl
                            font-bold
                            text-[#123c30]
                        "

                    >

                        {title}

                    </h3>



                    <div

                        className="
                            mt-2
                            flex
                            items-center
                            gap-2
                            text-sm
                        "

                    >

                        <Star

                            size={16}

                            className="
                                fill-[#c69235]
                                text-[#c69235]
                            "

                        />


                        <span className="font-semibold">

                            {rating}

                        </span>


                        <span className="text-gray-500">

                            ({reviewCount} Reviews)

                        </span>


                    </div>





                    <p

                        className="
                            mt-3
                            text-sm
                            leading-6
                            text-gray-600
                        "

                    >

                        {description}

                    </p>




                    <div

                        className="
                            mt-4
                            flex
                            flex-wrap
                            gap-3
                        "

                    >


                        <Feature
                            icon={<BedDouble size={16}/>}
                            text={`${makkahNights} Nights Makkah`}
                        />


                        <Feature
                            icon={<BedDouble size={16}/>}
                            text={`${madinahNights} Nights Madinah`}
                        />


                        <Feature
                            icon={<Plane size={16}/>}
                            text={flightType}
                        />


                    </div>





                    <div

                        className="
                            mt-5
                            flex
                            items-center
                            justify-between
                        "

                    >

                        <div>

                            <p className="
                                text-xs
                                text-gray-500
                            ">
                                Starting From
                            </p>


                            <h4

                                className="
                                    text-2xl
                                    font-bold
                                    text-[#0b4d3b]
                                "

                            >

                                {currency}{price}

                                <span
                                    className="
                                        text-sm
                                        font-medium
                                    "
                                >
                                    {priceUnit}
                                </span>

                            </h4>

                        </div>



                        <Link

                            to={`/hajj-umrah/hajj-packages/${id}`}

                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#0b4d3b]
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                hover:bg-[#c69235]
                            "

                        >

                            Details

                            <ArrowRight size={16}/>

                        </Link>


                    </div>



                </div>


            </article>

        );
    }








    // GRID VIEW

    return (

        <article

            className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#eadfce]
                bg-white
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_45px_rgba(11,77,59,0.15)]
            "

        >


            {/* Image */}

            <div

                className="
                    relative
                    h-60
                    overflow-hidden
                "

            >


                <img

                    src={image}

                    alt={title}

                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "

                />



                <div

                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-transparent
                    "

                />



                <span

                    className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-[#c69235]
                        px-3
                        py-1
                        text-xs
                        font-bold
                        text-white
                    "

                >

                    {badge}

                </span>




                <button

                    className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white/90
                        text-[#0b4d3b]
                        transition-all
                        hover:bg-[#0b4d3b]
                        hover:text-white
                    "

                >

                    <Heart size={18}/>

                </button>


            </div>






            {/* Body */}

            <div className="p-5">


                <h3

                    className="
                        text-lg
                        font-bold
                        text-[#123c30]
                    "

                >

                    {title}

                </h3>




                <div

                    className="
                        mt-2
                        flex
                        items-center
                        gap-2
                        text-sm
                    "

                >

                    <Star

                        size={16}

                        className="
                            fill-[#c69235]
                            text-[#c69235]
                        "

                    />


                    {rating}

                    <span className="text-gray-500">

                        ({reviewCount})

                    </span>


                </div>





                <div

                    className="
                        mt-4
                        space-y-2
                        text-sm
                        text-gray-600
                    "

                >

                    <p>
                        🕋 {makkahNights} Nights Makkah
                    </p>

                    <p>
                        🕌 {madinahNights} Nights Madinah
                    </p>

                    <p>
                        📅 {durationLabel}
                    </p>


                </div>






                <div

                    className="
                        my-4
                        flex
                        flex-wrap
                        gap-2
                    "

                >

                    {
                        visaIncluded &&
                        <Mini icon={<CheckCircle size={14}/>} text="Visa"/>
                    }


                    {
                        mealsIncluded &&
                        <Mini icon={<Utensils size={14}/>} text="Meals"/>
                    }


                    {
                        transportIncluded &&
                        <Mini icon={<Bus size={14}/>} text="Transport"/>
                    }


                </div>






                <div

                    className="
                        flex
                        items-end
                        justify-between
                    "

                >


                    <div>

                        <p className="text-xs text-gray-500">

                            From

                        </p>


                        <h4

                            className="
                                text-2xl
                                font-bold
                                text-[#0b4d3b]
                            "

                        >

                            {currency}{price}

                        </h4>

                    </div>




                    <Link

                        to={`/hajj-umrah/hajj-packages/${id}`}

                        className="
                            rounded-xl
                            bg-[#0b4d3b]
                            px-4
                            py-2.5
                            text-18
                            text-center
                            h-10
                            w-20
                            font-semibold
                            text-white
                            transition-all
                            hover:bg-[#c69235]
                        "

                    >

                        View

                    </Link>


                </div>


            </div>


        </article>

    );

};







const Mini = ({
    icon,
    text,
}) => (

    <span

        className="
            flex
            items-center
            gap-1
            rounded-full
            bg-[#f6f0e5]
            px-3
            py-1
            text-xs
            font-semibold
            text-[#76531d]
        "

    >

        {icon}

        {text}

    </span>

);





const Feature = ({
    icon,
    text,
}) => (

    <span

        className="
            flex
            items-center
            gap-2
            rounded-full
            bg-[#f8f5ee]
            px-3
            py-1.5
            text-xs
            font-medium
            text-[#53615c]
        "

    >

        {icon}

        {text}

    </span>

);



export default HajjPackageCard;