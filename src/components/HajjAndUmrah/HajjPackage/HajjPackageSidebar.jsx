import {
    BadgeCheck,
    UserCheck,
    Hotel,
    Utensils,
    Headphones,
    Phone,
    Mail,
    BookOpen,
    FileText,
    Compass,
    Luggage,
} from "lucide-react";

import { Link } from "react-router-dom";


import {
    hajjPackageSidebarData,
} from "../../../data/HajjAndUmrah/HajjPackageData";





const iconMap = {

    BadgeCheck,
    UserCheck,
    Hotel,
    Utensils,
    Headphones,

};






const resourceIconMap = {

    "Hajj Guide": BookOpen,

    "Required Documents": FileText,

    "Hajj Rituals": Compass,

    "Packing Checklist": Luggage,

};







const HajjPackageSidebar = () => {


    const {
        whyChooseUs,
        help,
        resources,
    } = hajjPackageSidebarData;





    return (

        <div

            className="
                space-y-6
            "

        >







            {/* WHY CHOOSE US */}

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


                <h3

                    className="
                        mb-5
                        text-xl
                        font-bold
                        text-[#123c30]
                    "

                >

                    {whyChooseUs.title}

                    <br />

                    <span
                        className="
                            text-[#b68430]
                        "
                    >
                        Us
                    </span>

                </h3>







                <div

                    className="
                        space-y-4
                    "

                >


                    {
                        whyChooseUs.items.map(
                            (item)=>(


                                <div

                                    key={
                                        item.id
                                    }


                                    className="
                                        group
                                        flex
                                        gap-3
                                        rounded-2xl
                                        p-3
                                        transition-all
                                        hover:bg-[#faf5eb]
                                    "

                                >


                                    <div

                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[#f5ead7]
                                            text-[#b68430]
                                            transition-all
                                            group-hover:bg-[#0b4d3b]
                                            group-hover:text-white
                                        "

                                    >

                                        {
                                            (()=>{

                                                const Icon =
                                                    iconMap[item.icon];

                                                return Icon
                                                    ?
                                                    <Icon size={20}/>
                                                    :
                                                    null;

                                            })()
                                        }


                                    </div>




                                    <div>


                                        <h4

                                            className="
                                                text-sm
                                                font-bold
                                                text-[#123c30]
                                            "

                                        >

                                            {item.title}


                                        </h4>



                                        <p

                                            className="
                                                mt-1
                                                text-xs
                                                text-gray-500
                                            "

                                        >

                                            {item.description}


                                        </p>


                                    </div>



                                </div>


                            )
                        )
                    }


                </div>


            </div>









            {/* HELP CARD */}


            <div

                className="
                    rounded-3xl
                    bg-[#0b4d3b]
                    p-6
                    text-white
                "

            >


                <h3

                    className="
                        text-xl
                        font-bold
                    "

                >

                    {help.title}

                </h3>



                <p

                    className="
                        mt-3
                        text-sm
                        leading-6
                        text-white/80
                    "

                >

                    {help.description}

                </p>







                <div

                    className="
                        mt-5
                        space-y-3
                    "

                >


                    <div

                        className="
                            flex
                            items-center
                            gap-3
                            text-sm
                        "

                    >

                        <Phone size={17}/>

                        {help.phone}

                    </div>




                    <div

                        className="
                            flex
                            items-center
                            gap-3
                            text-sm
                        "

                    >

                        <Mail size={17}/>

                        {help.email}

                    </div>



                </div>







                <Link

                    to={
                        help.buttonPath
                    }


                    className="
                        mt-6
                        block
                        rounded-xl
                        bg-[#c69235]
                        py-3
                        text-center
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        hover:bg-white
                        hover:text-[#0b4d3b]
                    "

                >

                    {help.buttonText}


                </Link>


            </div>









            {/* RESOURCES */}


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



                <h3

                    className="
                        mb-5
                        text-lg
                        font-bold
                        text-[#123c30]
                    "

                >

                    {resources.title}

                </h3>







                <div

                    className="
                        space-y-3
                    "

                >


                    {
                        resources.items.map(
                            (item)=>(


                                <Link

                                    key={
                                        item.id
                                    }


                                    to={
                                        item.path
                                    }


                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        p-3
                                        text-sm
                                        font-semibold
                                        text-gray-600
                                        transition-all
                                        hover:bg-[#faf5eb]
                                        hover:text-[#0b4d3b]
                                    "

                                >


                                    <div

                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-[#f5ead7]
                                            text-[#b68430]
                                        "

                                    >


                                        {
                                            (()=>{

                                                const Icon =
                                                    resourceIconMap[item.title];

                                                return Icon
                                                    ?
                                                    <Icon size={17}/>
                                                    :
                                                    null;


                                            })()
                                        }


                                    </div>




                                    {item.title}



                                </Link>


                            )
                        )
                    }



                </div>



            </div>







        </div>

    );

};



export default HajjPackageSidebar;