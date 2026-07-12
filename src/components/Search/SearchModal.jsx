import { X } from "lucide-react";
import { useEffect } from "react";

const SearchModal = ({ open, onClose, children }) => {

    useEffect(() => {

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (open) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };

    }, [open, onClose]);

    if (!open) return null;

    return (

        <div
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-start justify-center p-5"
            onClick={onClose}
        >

            <div
                className="w-full max-w-3xl mt-20 rounded-2xl bg-white shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex items-center justify-between border-b p-5">

                    <h2 className="text-xl font-bold">
                        Search
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-full p-2 hover:bg-gray-100"
                    >
                        <X size={22} />
                    </button>

                </div>

                <div className="p-5">

                    {children}

                </div>

            </div>

        </div>

    );

};

export default SearchModal;