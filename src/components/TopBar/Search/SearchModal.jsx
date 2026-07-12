import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

const POPULAR_SEARCHES = [
    "Cox's Bazar",
    "Saint Martin",
    "Sajek Valley",
    "Bandarban",
    "Thailand",
    "Maldives",
    "Dubai",
    "Bali",
];

const SearchModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        inputRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="
                fixed
                inset-0
                z-[999]
                flex
                items-start
                justify-center
                bg-black/50
                backdrop-blur-md
                p-4
                pt-24
                animate-in
                fade-in
            "
        >
            <div
                ref={modalRef}
                className="
                    w-full
                    max-w-3xl
                    overflow-hidden
                    rounded-3xl
                    border
                    border-base-300
                    bg-base-100
                    shadow-2xl
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
                        px-6
                        py-5
                    "
                >
                    <div>

                        <h2 className="text-2xl font-bold">
                            Search Destinations
                        </h2>

                        <p className="mt-1 text-sm text-base-content/60">
                            Find tours, countries and travel packages
                        </p>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close Search"
                        className="
                            rounded-full
                            p-2
                            transition
                            hover:bg-base-200
                        "
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Search Box */}

                <div className="p-6">

                    <div
                        className="
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            border
                            border-base-300
                            px-5
                            py-4
                            transition
                            focus-within:border-primary
                            focus-within:ring-2
                            focus-within:ring-primary/20
                        "
                    >
                        <Search
                            size={22}
                            className="text-base-content/60"
                        />

                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search destination, package, country..."
                            className="
                                w-full
                                bg-transparent
                                text-lg
                                outline-none
                                placeholder:text-base-content/40
                            "
                        />
                    </div>

                    {/* Popular */}

                    <div className="mt-8">

                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
                            Popular Searches
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {POPULAR_SEARCHES.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    className="
                                        rounded-full
                                        border
                                        border-base-300
                                        px-4
                                        py-2
                                        text-sm
                                        transition-all
                                        duration-300
                                        hover:border-primary
                                        hover:bg-primary
                                        hover:text-white
                                    "
                                >
                                    {item}
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* Empty */}

                    <div
                        className="
                            mt-10
                            rounded-2xl
                            bg-base-200/50
                            p-8
                            text-center
                        "
                    >
                        <Search
                            size={42}
                            className="
                                mx-auto
                                mb-4
                                text-base-content/30
                            "
                        />

                        <h4 className="text-lg font-semibold">
                            Start typing to search
                        </h4>

                        <p className="mt-2 text-sm text-base-content/60">
                            Destinations, Hotels, Tour Packages,
                            Visa Services and more.
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SearchModal;