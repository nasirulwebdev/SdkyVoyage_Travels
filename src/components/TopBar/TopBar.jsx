import { memo, useCallback, useMemo, useState } from "react";

import ContactInfo from "./ContactInfo";
import CurrencySwitcher from "./CurrencySwitcher";
import UserMenu from "./UserMenu";

import { SearchButton, SearchModal } from "./Search";
import { WishlistButton } from "./Wishlist";

import {
    NotificationButton,
    NotificationDropdown,
} from "./Notification";


const TopBar = () => {

    const [
        isSearchOpen,
        setIsSearchOpen
    ] = useState(false);


    const [
        isNotificationOpen,
        setIsNotificationOpen
    ] = useState(false);



    const wishlistCount = 0;



    const notifications = useMemo(
        () => [
            {
                id:1,
                title:"Booking Confirmed",
                message:
                "Your Cox's Bazar tour booking has been confirmed.",
                time:"2 min ago",
                link:"/dashboard/bookings",
            },

            {
                id:2,
                title:"Special Offer",
                message:
                "Get 20% OFF on Thailand Tour Packages.",
                time:"1 hour ago",
                link:"/packages",
            },
        ],
        []
    );



    const openSearch = useCallback(()=>{
        setIsSearchOpen(true);
    },[]);



    const closeSearch = useCallback(()=>{
        setIsSearchOpen(false);
    },[]);



    const toggleNotification = useCallback(()=>{
        setIsNotificationOpen(prev=>!prev);
    },[]);



    const closeNotification = useCallback(()=>{
        setIsNotificationOpen(false);
    },[]);



    const openWishlist = useCallback(()=>{
        console.log("Wishlist Clicked");
    },[]);



    return (

        <>

        <header

        className="
        hidden
        lg:block
        sticky
        top-0
        z-[60]
        w-full
        bg-[#0B3A82]
        text-white
        shadow-lg
        "

        >


            <div

            className="
            container
            mx-auto
            flex
            h-12
            items-center
            justify-between
            px-5
            2xl:px-0
            "

            >


                {/* LEFT SIDE */}

                <ContactInfo />



                {/* RIGHT SIDE */}

                <div

                className="
                flex
                items-center
                gap-1
                "

                >


                    <CurrencySwitcher />



                    <SearchButton
                    onOpen={openSearch}
                    />



                    <WishlistButton

                    count={wishlistCount}

                    onClick={openWishlist}

                    />



                    <div className="relative">


                        <NotificationButton

                        count={
                            notifications.length
                        }

                        onClick={
                            toggleNotification
                        }

                        />



                        <NotificationDropdown

                        open={
                            isNotificationOpen
                        }

                        notifications={
                            notifications
                        }

                        onClose={
                            closeNotification
                        }

                        />


                    </div>



                    <UserMenu />


                </div>


            </div>


        </header>



        <SearchModal

        isOpen={isSearchOpen}

        onClose={closeSearch}

        />

        </>

    );

};


export default memo(TopBar);