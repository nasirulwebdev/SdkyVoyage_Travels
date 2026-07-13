import {
    Heart,
    MapPin,
    Star,
    Waves,
    Wifi,
    Utensils,
    Dumbbell,
    Car,
    ArrowRight,
} from "lucide-react";

import { useState } from "react";


const ResortCard = ({
    resort,
    viewMode = "list",
}) => {

    const [isFavorite, setIsFavorite] =
        useState(false);


    const facilities =
        resort.facilities || [];


    const visibleFacilities =
        facilities.slice(0,4);



    // ==========================================
    // GRID VIEW
    // ==========================================

    if(viewMode === "grid"){

        return(

            <article
                className="
                    group
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition
                    hover:shadow-lg
                "
            >

                <ResortImage
                    resort={resort}
                    isFavorite={isFavorite}
                    setIsFavorite={setIsFavorite}
                />


                <div
                    className="
                        p-4
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-1
                        "
                    >
                        <ResortStars
                            stars={resort.stars}
                        />
                    </div>


                    <h3
                        className="
                            mt-2
                            text-sm
                            font-extrabold
                            text-slate-900
                        "
                    >
                        {resort.name}
                    </h3>


                    <ResortLocation
                        location={resort.location}
                    />


                    <Facilities
                        facilities={visibleFacilities}
                    />


                    <div
                        className="
                            mt-4
                            flex
                            justify-between
                            items-center
                        "
                    >

                        <Price
                            price={
                                resort.pricePerNight
                            }
                        />


                        <Rating
                            rating={
                                resort.rating
                            }
                        />

                    </div>


                    <BookButton/>

                </div>

            </article>

        );
    }



    // ==========================================
    // LIST VIEW (REFERENCE IMAGE STYLE)
    // ==========================================


    return (

        <article
            className="
                group
                grid
                h-[128px]
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition
                hover:shadow-md

                grid-cols-[220px_minmax(0,1fr)_170px]
            "
        >



            {/* IMAGE */}

            <ResortImage

                resort={resort}

                isFavorite={isFavorite}

                setIsFavorite={
                    setIsFavorite
                }

                listView

            />





            {/* DETAILS */}

            <div
                className="
                    flex
                    min-w-0
                    flex-col
                    justify-center
                    border-r
                    border-slate-100
                    px-4
                "
            >


                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <ResortStars
                        stars={
                            resort.stars
                        }
                    />

                </div>



                <h3
                    className="
                        mt-1
                        truncate
                        text-[16px]
                        font-extrabold
                        text-slate-900
                    "
                >

                    {resort.name}

                </h3>




                <ResortLocation

                    location={
                        resort.location
                    }

                />





                <Facilities

                    facilities={
                        visibleFacilities
                    }

                />



            </div>





            {/* PRICE AREA */}


            <div
                className="
                    flex
                    flex-col
                    justify-between
                    p-3
                "
            >


                <Rating

                    rating={
                        resort.rating
                    }

                    reviews={
                        resort.reviews
                    }

                />



                <div>

                    <Price

                        price={
                            resort.pricePerNight
                        }

                    />


                    <BookButton/>


                </div>


            </div>



        </article>

    );

};





// ==============================================
// IMAGE SECTION
// ==============================================


const ResortImage = ({
    resort,
    isFavorite,
    setIsFavorite,
    listView=false,
})=>{


    return(

        <div
            className="
                relative
                h-full
                overflow-hidden
                bg-slate-100
            "
        >


            <img

                src={
                    resort.image
                }

                alt={
                    resort.name
                }

                className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                "

            />





            {
                resort.badge && (

                    <span
                        className="
                            absolute
                            left-2
                            top-2
                            rounded-md
                            bg-emerald-500
                            px-2
                            py-1
                            text-[8px]
                            font-bold
                            text-white
                        "
                    >

                        {resort.badge}

                    </span>

                )
            }





            <button

                type="button"

                onClick={()=>


                    setIsFavorite(
                        prev=>!prev
                    )

                }

                className="
                    absolute
                    right-2
                    top-2
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow
                "

            >

                <Heart

                    size={14}

                    className={
                        isFavorite
                        ?
                        "fill-red-500 text-red-500"
                        :
                        "text-slate-600"
                    }

                />


            </button>



        </div>

    );

};

// ==============================================
// STAR RATING
// ==============================================

const ResortStars = ({
    stars = 0,
}) => {

    return (

        <div
            className="
                flex
                items-center
                gap-[2px]
            "
        >

            {
                Array.from({
                    length:Number(stars)
                }).map((_,index)=>(

                    <Star
                        key={index}
                        size={11}
                        className="
                            fill-amber-400
                            text-amber-400
                        "
                    />

                ))
            }

        </div>

    );

};





// ==============================================
// LOCATION
// ==============================================


const ResortLocation = ({
    location,
})=>{


    return(

        <div
            className="
                mt-1
                flex
                items-center
                gap-1
                text-[10px]
                text-slate-500
            "
        >

            <MapPin
                size={11}
                className="
                    text-blue-600
                "
            />


            <span
                className="
                    truncate
                "
            >
                {location}
            </span>


        </div>

    );

};






// ==============================================
// FACILITIES
// ==============================================


const Facilities = ({
    facilities=[]
})=>{


    return(

        <div
            className="
                mt-2
                flex
                flex-wrap
                gap-x-3
                gap-y-1
            "
        >

        {
            facilities.map(
                (facility)=>(


                    <span
                        key={facility}
                        className="
                            flex
                            items-center
                            gap-1
                            text-[9px]
                            font-medium
                            text-slate-600
                        "
                    >

                        {
                            (()=>{

                                const Icon =
                                getFacilityIcon(
                                    facility
                                );

                                return(

                                    <Icon
                                        size={10}
                                        className="
                                            text-blue-600
                                        "
                                    />

                                )

                            })()
                        }


                        {facility}


                    </span>


                )
            )
        }


        </div>


    );

};






// ==============================================
// RATING
// ==============================================


const Rating = ({
    rating,
    reviews,
})=>{


    return(

        <div
            className="
                flex
                items-center
                justify-end
                gap-2
            "
        >


            <div
                className="
                    text-right
                "
            >

                <p
                    className="
                        text-[10px]
                        font-bold
                        text-slate-800
                    "
                >

                    {
                        Number(rating)>=9
                        ?
                        "Excellent"
                        :
                        Number(rating)>=8
                        ?
                        "Very Good"
                        :
                        "Good"
                    }

                </p>


                {
                    reviews && (

                    <p
                        className="
                            text-[8px]
                            text-slate-400
                        "
                    >
                        {reviews} reviews
                    </p>

                    )
                }


            </div>





            <span
                className="
                    flex
                    h-8
                    min-w-8
                    items-center
                    justify-center
                    rounded-md
                    bg-blue-600
                    px-2
                    text-[11px]
                    font-extrabold
                    text-white
                "
            >

                {rating}

            </span>


        </div>

    );

};







// ==============================================
// PRICE
// ==============================================


const Price = ({
    price,
})=>{


    return(

        <div>

            <p
                className="
                    text-[8px]
                    text-slate-400
                "
            >
                Starting from
            </p>



            <div
                className="
                    flex
                    items-end
                    gap-1
                "
            >

                <span
                    className="
                        text-lg
                        font-extrabold
                        leading-none
                        text-slate-900
                    "
                >

                    ${price}

                </span>



                <span
                    className="
                        text-[8px]
                        text-slate-400
                    "
                >
                    /night
                </span>


            </div>


        </div>


    );

};







// ==============================================
// BUTTON
// ==============================================


const BookButton = ()=>{


    return(

        <button

            type="button"

            className="
                mt-2
                flex
                h-7
                w-full
                items-center
                justify-center
                gap-1
                rounded-md
                bg-blue-600
                text-[9px]
                font-bold
                text-white
                transition
                hover:bg-blue-700
            "

        >

            View Details


            <ArrowRight
                size={11}
            />


        </button>


    );

};







// ==============================================
// FACILITY ICON
// ==============================================


const getFacilityIcon = (
    facility
)=>{


    const value =
    String(facility)
    .toLowerCase();




    if(
        value.includes("wifi")
    ){

        return Wifi;

    }




    if(
        value.includes("pool") ||
        value.includes("beach")
    ){

        return Waves;

    }




    if(
        value.includes("restaurant") ||
        value.includes("breakfast")
    ){

        return Utensils;

    }




    if(
        value.includes("fitness") ||
        value.includes("gym")
    ){

        return Dumbbell;

    }





    if(
        value.includes("parking") ||
        value.includes("shuttle")
    ){

        return Car;

    }



    return Star;


};




export default ResortCard;