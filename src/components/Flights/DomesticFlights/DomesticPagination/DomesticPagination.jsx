import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const DomesticPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div
            className="
                mt-8
                flex
                items-center
                justify-center
                gap-2
            "
        >
            {/* Previous */}
            <button
                type="button"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    transition

                    ${
                        currentPage === 1
                            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
                            : "border-slate-200 bg-white text-slate-500 hover:border-[#16b364] hover:text-[#16b364]"
                    }
                `}
            >
                <ChevronLeft size={17} />
            </button>

            {/* Page Numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    aria-label={`Go to page ${page}`}
                    aria-current={
                        page === currentPage
                            ? "page"
                            : undefined
                    }
                    className={`
                        h-9
                        w-9
                        rounded-lg
                        text-sm
                        font-semibold
                        transition

                        ${
                            page === currentPage
                                ? "bg-[#16b364] text-white shadow-[0_5px_15px_rgba(22,179,100,0.25)]"
                                : "border border-slate-200 bg-white text-slate-600 hover:border-[#16b364] hover:text-[#16b364]"
                        }
                    `}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                type="button"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    transition

                    ${
                        currentPage === totalPages
                            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
                            : "border-slate-200 bg-white text-slate-500 hover:border-[#16b364] hover:text-[#16b364]"
                    }
                `}
            >
                <ChevronRight size={17} />
            </button>
        </div>
    );
};

export default DomesticPagination;