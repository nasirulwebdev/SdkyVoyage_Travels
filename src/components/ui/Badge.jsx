const Badge = ({ value = 0 }) => {

    if (value <= 0) return null;

    return (
        <span
            className="
            absolute
            -top-1
            -right-1
            min-w-5
            h-5
            px-1
            rounded-full
            bg-red-500
            text-white
            text-[10px]
            font-bold
            flex
            items-center
            justify-center
            "
        >
            {value}
        </span>
    );
};

export default Badge;