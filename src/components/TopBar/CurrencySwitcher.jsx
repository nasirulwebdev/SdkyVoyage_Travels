import { useEffect, useRef, useState } from "react";

import {
    Check,
    ChevronDown,
} from "lucide-react";


import currencies from "../../config/currency";



const CurrencySwitcher = () => {


    const [
        selectedCurrency,
        setSelectedCurrency
    ] = useState(currencies[0]);



    const [
        open,
        setOpen
    ] = useState(false);



    const dropdownRef = useRef(null);




    useEffect(()=>{


        const handleOutside=(event)=>{


            if(
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ){

                setOpen(false);

            }

        };


        document.addEventListener(
            "mousedown",
            handleOutside
        );


        return()=>{

            document.removeEventListener(
                "mousedown",
                handleOutside
            );

        };


    },[]);





    const changeCurrency=(currency)=>{

        setSelectedCurrency(currency);

        setOpen(false);

    };





    return (

        <div

        ref={dropdownRef}

        className="
        relative
        "

        >



            <button

            onClick={()=>setOpen(!open)}

            className="
            flex
            items-center
            gap-2
            rounded-xl
            px-3
            py-2
            text-sm
            font-semibold
            text-white/90
            transition
            hover:bg-white/10
            "

            >


                {selectedCurrency.code}


                <ChevronDown

                size={16}

                className={`
                transition
                ${
                    open
                    ?"rotate-180"
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
            w-60
            rounded-2xl
            bg-white
            text-gray-800
            shadow-2xl
            border
            overflow-hidden
            "

            >


                <div

                className="
                border-b
                px-4
                py-3
                font-semibold
                "

                >

                    Select Currency

                </div>





                {
                currencies.map((currency)=>{


                    const active =
                    selectedCurrency.code === currency.code;



                    return (

                    <button

                    key={currency.code}

                    onClick={()=>
                    changeCurrency(currency)
                    }

                    className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    px-4
                    py-3
                    transition
                    hover:bg-blue-50

                    ${
                        active
                        ?
                        "bg-blue-50 text-blue-700"
                        :
                        ""
                    }

                    `}


                    >



                        <div

                        className="
                        flex
                        items-center
                        gap-3
                        "

                        >


                            <span>

                            {currency.symbol}

                            </span>



                            <div>

                                <p
                                className="
                                font-medium
                                "
                                >
                                {currency.code}
                                </p>


                                <p
                                className="
                                text-xs
                                text-gray-500
                                "
                                >

                                {currency.name}

                                </p>


                            </div>


                        </div>





                        {
                        active &&

                        <Check
                        size={17}
                        />

                        }



                    </button>

                    );


                })

                }




            </div>

            )
            }




        </div>


    );

};


export default CurrencySwitcher;