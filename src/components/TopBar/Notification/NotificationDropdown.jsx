import { useEffect, useRef } from "react";
import { Bell, CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";

const NotificationDropdown = ({
    open,
    notifications = [],
    onClose,
}) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                onClose?.();
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            ref={dropdownRef}
            className="
                absolute
                right-0
                top-12
                z-[999]
                w-[360px]
                overflow-hidden
                rounded-2xl
                border
                border-base-300
                bg-base-100
                shadow-2xl
                animate-in
                fade-in
                slide-in-from-top-2
                duration-200
            "
        >
            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-base-300
                    px-5
                    py-4
                "
            >
                <div>

                    <h3 className="text-base font-bold">
                        Notifications
                    </h3>

                    <p className="text-xs text-base-content/60">
                        {notifications.length} unread notification
                        {notifications.length !== 1 && "s"}
                    </p>

                </div>

                <button
                    type="button"
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        font-medium
                        transition
                        hover:bg-base-200
                    "
                >
                    <CheckCheck size={16} />

                    Mark all
                </button>

            </div>

            {/* Notification List */}

            <div className="max-h-[380px] overflow-y-auto">

                {notifications.length === 0 ? (

                    <div className="px-6 py-12 text-center">

                        <Bell
                            size={50}
                            className="
                                mx-auto
                                mb-4
                                text-base-300
                            "
                        />

                        <h4 className="font-semibold">
                            No Notifications
                        </h4>

                        <p className="mt-2 text-sm text-base-content/60">
                            You're all caught up.
                        </p>

                    </div>

                ) : (

                    notifications.map((notification) => (

                        <Link
                            key={notification.id}
                            to={notification.link}
                            onClick={onClose}
                            className="
                                block
                                border-b
                                border-base-200
                                px-5
                                py-4
                                transition-all
                                duration-300
                                hover:bg-base-200
                            "
                        >
                            <div className="flex items-start gap-3">

                                <div
                                    className="
                                        mt-1
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        bg-primary
                                    "
                                />

                                <div className="flex-1">

                                    <h4 className="font-semibold">
                                        {notification.title}
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-base-content/70
                                        "
                                    >
                                        {notification.message}
                                    </p>

                                    <span
                                        className="
                                            mt-2
                                            inline-block
                                            text-xs
                                            text-base-content/50
                                        "
                                    >
                                        {notification.time}
                                    </span>

                                </div>

                            </div>

                        </Link>

                    ))

                )}

            </div>

            {/* Footer */}

            <div
                className="
                    border-t
                    border-base-300
                    p-3
                "
            >
                <Link
                    to="/dashboard/notifications"
                    onClick={onClose}
                    className="
                        block
                        rounded-xl
                        py-3
                        text-center
                        text-sm
                        font-semibold
                        text-primary
                        transition-all
                        duration-300
                        hover:bg-base-200
                    "
                >
                    View All Notifications
                </Link>
            </div>
        </div>
    );
};

export default NotificationDropdown;