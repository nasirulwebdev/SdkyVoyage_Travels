import { Search } from "lucide-react";


const SearchButton = ({onOpen}) => {


    return (

        <button

        type="button"

        onClick={onOpen}

        aria-label="Open Search"

        className="
        group
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


            <Search

            size={20}

            className="
            transition
            group-hover:scale-110
            "

            />


        </button>

    );

};


export default SearchButton;