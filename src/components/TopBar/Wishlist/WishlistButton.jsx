import { Heart } from "lucide-react";


const WishlistButton = ({
    count=0,
    onClick
}) => {


    return (

        <button

        type="button"

        onClick={onClick}

        aria-label="Wishlist"

        className="
        group
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        text-white/90
        transition
        duration-300
        hover:bg-white/10
        hover:text-white
        hover:scale-105
        active:scale-95
        "

        >


            <Heart

            size={20}

            className="
            transition
            group-hover:scale-110
            "

            />



            {
            count>0 &&

            <span

            className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            min-w-5
            items-center
            justify-center
            rounded-full
            bg-red-500
            px-1
            text-[10px]
            font-bold
            text-white
            "

            >

            {count>99 ? "99+" : count}

            </span>

            }



        </button>


    );

};


export default WishlistButton;