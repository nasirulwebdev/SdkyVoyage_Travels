const Tooltip = ({
    message,
    children,
}) => {
    return (
        <div
            className="tooltip tooltip-bottom"
            data-tip={message}
        >
            {children}
        </div>
    );
};

export default Tooltip;