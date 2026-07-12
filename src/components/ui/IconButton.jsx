const IconButton = ({
    children,
    onClick,
    className = "",
    title = "",
}) => {
    return (
        <button
            type="button"
            title={title}
            onClick={onClick}
            className={`
                flex
                items-center
                justify-center
                h-10
                w-10
                rounded-full
                transition-all
                duration-300
                hover:bg-base-200
                active:scale-95
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default IconButton;