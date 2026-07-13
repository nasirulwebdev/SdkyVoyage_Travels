import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const ResortPagination = ({
    currentPage,
    totalPages,
    totalResorts,
    resortsPerPage,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    const startItem =
        (currentPage - 1) * resortsPerPage + 1;

    const endItem = Math.min(
        currentPage * resortsPerPage,
        totalResorts
    );

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <div
            className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-4
                rounded-xl
                border
                border-slate-200
                bg-white
                px-,
                py-4
                text-center
                shadow-sm
                        "
                    >
            <p className="text-[10px] text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-800">
                    {startItem}–{endItem}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-800">
                    {totalResorts}
                </span>{" "}
                resorts
            </p>

            <div className="flex flex-wrap items-center gap-1.5">
                <PaginationButton
                    disabled={currentPage === 1}
                    onClick={() =>
                        onPageChange(currentPage - 1)
                    }
                    ariaLabel="Previous page"
                >
                    <ChevronLeft size={15} />
                </PaginationButton>

                {pages.map((page) => (
                    <PaginationButton
                        key={page}
                        active={page === currentPage}
                        onClick={() =>
                            onPageChange(page)
                        }
                        ariaLabel={`Page ${page}`}
                    >
                        {page}
                    </PaginationButton>
                ))}

                <PaginationButton
                    disabled={
                        currentPage === totalPages
                    }
                    onClick={() =>
                        onPageChange(currentPage + 1)
                    }
                    ariaLabel="Next page"
                >
                    <ChevronRight size={15} />
                </PaginationButton>
            </div>
        </div>
    );
};

const PaginationButton = ({
    children,
    active = false,
    disabled = false,
    onClick,
    ariaLabel,
}) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            aria-label={ariaLabel}
            className={`
                flex
                h-9
                min-w-9
                items-center
                justify-center
                rounded-lg
                px-2
                text-[11px]
                font-bold
                transition

                ${
                    active
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600"
                }

                ${
                    disabled
                        ? "cursor-not-allowed opacity-40"
                        : ""
                }
            `}
        >
            {children}
        </button>
    );
};

export default ResortPagination;