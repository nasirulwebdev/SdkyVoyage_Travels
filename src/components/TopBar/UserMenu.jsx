import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import {
    ChevronDown,
    LogIn,
    User,
    UserPlus,
} from "lucide-react";


const UserMenu = () => {


    const [open,setOpen] = useState(false);

    const menuRef = useRef(null);



    useEffect(()=>{


        const handleClickOutside = (event)=>{

            if(
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ){

                setOpen(false);

            }

        };


        document.addEventListener(
            "mousedown",
            handleClickOutside
        );


        return()=>{

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };


    },[]);




    return (

        <div
        ref={menuRef}
        className="
        relative
        "
        >



            <button

            type="button"

            onClick={()=>setOpen(!open)}

            className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            px-3
            py-2
            text-white
            transition
            duration-300
            hover:bg-white/10
            active:scale-95
            "

            >


                <div

                className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white/20
                "

                >

                    <User size={18}/>

                </div>



                <ChevronDown

                size={16}

                className={`
                transition-transform
                duration-300
                ${
                    open
                    ? "rotate-180"
                    :""
                }
                `}

                />


            </button>





            {
                open && (

                <div

                className="
                absolute
                right-0
                top-12
                z-[999]
                w-72
                overflow-hidden
                rounded-2xl
                bg-white
                text-gray-800
                shadow-2xl
                border
                border-gray-200
                animate-in
                fade-in
                slide-in-from-top-2
                "

                >



                    {/* HEADER */}


                    <div

                    className="
                    border-b
                    px-5
                    py-5
                    "

                    >


                        <h3

                        className="
                        text-xl
                        font-bold
                        "

                        >

                            Welcome

                        </h3>



                        <p

                        className="
                        mt-1
                        text-sm
                        text-gray-500
                        "

                        >

                        Sign in to manage your bookings.

                        </p>



                    </div>





                    {/* MENU */}


                    <div

                    className="
                    p-3
                    "

                    >



                        <Link

                        to="/login"

                        onClick={()=>setOpen(false)}

                        className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        transition
                        hover:bg-blue-50
                        hover:text-blue-700
                        "

                        >

                            <LogIn size={18}/>

                            Login


                        </Link>





                        <Link

                        to="/register"

                        onClick={()=>setOpen(false)}

                        className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        transition
                        hover:bg-blue-50
                        hover:text-blue-700
                        "

                        >

                            <UserPlus size={18}/>

                            Register


                        </Link>



                    </div>



                </div>

                )
            }



        </div>

    );

};


export default UserMenu;