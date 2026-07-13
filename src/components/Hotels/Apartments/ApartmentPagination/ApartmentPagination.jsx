import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const ApartmentPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    // ১টি বা তার কম page হলে pagination hide থাকবে
    if (totalPages <= 1) {
        return null;
    }

    /* =========================
       GENERATE PAGE NUMBERS
    ========================= */

    const getPageNumbers = () => {
        // সর্বোচ্চ 7টি page হলে সব page number দেখাবে
        if (totalPages <= 7) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            );
        }

        // Current page শুরুতে থাকলে
        if (currentPage <= 4) {
            return [
                1,
                2,
                3,
                4,
                5,
                "...",
                totalPages,
            ];
        }

        // Current page শেষে থাকলে
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

        // Current page মাঝখানে থাকলে
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

    const pageNumbers = getPageNumbers();

    /* =========================
       CHANGE PAGE
    ========================= */

    const handlePageChange = (page) => {
        if (
            typeof page !== "number" ||
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        onPageChange?.(page);

        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };

    return (
        <nav
            className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
            "
            aria-label="Apartment pagination"
        >
            {/* Previous */}
            <button
                type="button"
                onClick={() =>
                    handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-lg
                    border border-slate-200
                    bg-white
                    text-slate-600
                    transition
                    hover:border-blue-600
                    hover:text-blue-600
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronLeft size={17} />
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((page, index) => {
                if (page === "...") {
                    return (
                        <span
                            key={`dots-${index}`}
                            className="
                                flex h-10 min-w-8
                                items-center justify-center
                                text-sm text-slate-400
                            "
                        >
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() =>
                            handlePageChange(page)
                        }
                        className={`
                            flex h-10 min-w-10
                            items-center justify-center
                            rounded-lg border px-3
                            text-sm font-semibold
                            transition
                            ${
                                currentPage === page
                                    ? "border-blue-600 bg-blue-600 text-white"
                                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-600 hover:text-blue-600"
                            }
                        `}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Next */}
            <button
                type="button"
                onClick={() =>
                    handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-lg
                    border border-slate-200
                    bg-white
                    text-slate-600
                    transition
                    hover:border-blue-600
                    hover:text-blue-600
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronRight size={17} />
            </button>
        </nav>
    );
};

export default ApartmentPagination;