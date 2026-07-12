import { SlidersHorizontal, X } from "lucide-react";
import TourFilters from "./TourFilters";

const TourMobileFilter = ({
    isOpen,
    onClose,
    filters,
    setFilters,
    onApplyFilters,
    onClearFilters,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Overlay */}
            <button
                type="button"
                aria-label="Close filters"
                onClick={onClose}
                className="absolute inset-0 bg-[#071426]/60 backdrop-blur-[2px]"
            />

            {/* Drawer */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-[88%]
                    max-w-[340px]
                    overflow-y-auto
                    bg-[#f7f9fc]
                    shadow-2xl
                "
            >
                <div
                    className="
                        sticky
                        top-0
                        z-20
                        flex
                        h-[60px]
                        items-center
                        justify-between
                        border-b
                        border-[#e5eaf1]
                        bg-white
                        px-5
                    "
                >
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal
                            size={18}
                            className="text-[#1769e0]"
                        />

                        <h2 className="text-[15px] font-bold text-[#111c3f]">
                            Filters
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-[#f2f5f9]
                            text-[#111c3f]
                        "
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="p-4">
                    <TourFilters
                        filters={filters}
                        setFilters={setFilters}
                        onClearFilters={onClearFilters}
                        onApplyFilters={() => {
                            onApplyFilters();
                            onClose();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TourMobileFilter;