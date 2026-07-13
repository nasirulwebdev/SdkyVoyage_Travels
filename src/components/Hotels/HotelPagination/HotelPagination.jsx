import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const HotelPagination = ({
    currentPage = 1,
    totalPages = 1,
    totalHotels = 0,
    hotelsPerPage = 4,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    // ==========================================
    // RESULT RANGE
    // ==========================================

    const startResult =
        (currentPage - 1) * hotelsPerPage + 1;

    const endResult = Math.min(
        currentPage * hotelsPerPage,
        totalHotels
    );

    // ==========================================
    // DYNAMIC PAGE NUMBERS
    // ==========================================

    const getPageNumbers = () => {
        if (totalPages <= 7) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            );
        }

        if (currentPage <= 4) {
            return [1, 2, 3, 4, 5, "...", totalPages];
        }

        if (currentPage >= totalPages - 3) {
            return [
                1,
                "...",
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }

        return [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
        ];
    };

    const pages = getPageNumbers();

    return (
        <div
            className="
                mt-7
                flex
                flex-col
                items-center
                justify-between
                gap-4
                sm:flex-row
            "
        >
            {/* RESULT INFO */}
            <p className="text-[11px] text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                    {startResult}–{endResult}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                    {totalHotels}
                </span>{" "}
                hotels
            </p>

            {/* PAGINATION */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">

                {/* PREVIOUS */}
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                        onPageChange(currentPage - 1)
                    }
                    aria-label="Previous page"
                    className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-slate-200
                        bg-white
                        text-slate-500
                        transition
                        hover:border-emerald-600
                        hover:text-emerald-600
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    <ChevronLeft size={15} />
                </button>

                {/* PAGE NUMBERS */}
                {pages.map((page, index) =>
                    page === "..." ? (
                        <span
                            key={`dots-${index}`}
                            className="
                                flex
                                h-9
                                min-w-7
                                items-center
                                justify-center
                                text-xs
                                text-slate-400
                            "
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            type="button"
                            onClick={() =>
                                onPageChange(page)
                            }
                            className={`
                                flex
                                h-9
                                min-w-9
                                items-center
                                justify-center
                                rounded-md
                                border
                                px-2
                                text-[11px]
                                font-semibold
                                transition
                                ${
                                    currentPage === page
                                        ? "border-emerald-600 bg-emerald-600 text-white"
                                        : "border-slate-200 bg-white text-slate-600 hover:border-emerald-600 hover:text-emerald-600"
                                }
                            `}
                        >
                            {page}
                        </button>
                    )
                )}

                {/* NEXT */}
                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                        onPageChange(currentPage + 1)
                    }
                    aria-label="Next page"
                    className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-slate-200
                        bg-white
                        text-slate-500
                        transition
                        hover:border-emerald-600
                        hover:text-emerald-600
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    <ChevronRight size={15} />
                </button>
            </div>
        </div>
    );
};

export default HotelPagination;