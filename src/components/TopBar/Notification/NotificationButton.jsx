import { Bell } from "lucide-react";


const NotificationButton = ({
    count=0,
    onClick
}) => {


    return (

        <button

        type="button"

        onClick={onClick}

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
        "

        >


            <Bell

            size={20}

            className="
            transition
            group-hover:rotate-12
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

            {count}

            </span>

            }



        </button>

    );

};


export default NotificationButton;