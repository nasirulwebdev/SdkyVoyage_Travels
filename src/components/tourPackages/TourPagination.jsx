import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const TourPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <nav
            className="
                mt-10
                flex
                items-center
                justify-center
                gap-2
            "
            aria-label="Tour package pagination"
        >
            {/* Previous Button */}
            <button
                type="button"
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() =>
                    onPageChange?.(currentPage - 1)
                }
                className="
                    flex
                    h-[36px]
                    w-[36px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-[#dfe5ee]
                    bg-white
                    text-[#667085]
                    shadow-[0_2px_8px_rgba(15,23,42,0.03)]
                    transition-all
                    duration-200
                    hover:border-[#1769e0]
                    hover:bg-[#f5f8ff]
                    hover:text-[#1769e0]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-[#dfe5ee]
                    disabled:hover:bg-white
                    disabled:hover:text-[#667085]
                "
            >
                <ChevronLeft
                    size={16}
                    strokeWidth={2}
                />
            </button>

            {/* Page Numbers */}
            {pages.map((page) => {
                const isActive =
                    currentPage === page;

                return (
                    <button
                        key={page}
                        type="button"
                        aria-label={`Go to page ${page}`}
                        aria-current={
                            isActive
                                ? "page"
                                : undefined
                        }
                        onClick={() =>
                            onPageChange?.(page)
                        }
                        className={`
                            flex
                            h-[36px]
                            min-w-[36px]
                            items-center
                            justify-center
                            rounded-[6px]
                            border
                            px-2
                            text-[12px]
                            font-semibold
                            shadow-[0_2px_8px_rgba(15,23,42,0.03)]
                            transition-all
                            duration-200

                            ${
                                isActive
                                    ? `
                                        border-[#1769e0]
                                        bg-[#1769e0]
                                        text-white
                                        shadow-[0_5px_14px_rgba(23,105,224,0.22)]
                                    `
                                    : `
                                        border-[#dfe5ee]
                                        bg-white
                                        text-[#667085]
                                        hover:border-[#1769e0]
                                        hover:bg-[#f5f8ff]
                                        hover:text-[#1769e0]
                                    `
                            }
                        `}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Next Button */}
            <button
                type="button"
                aria-label="Next page"
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    onPageChange?.(currentPage + 1)
                }
                className="
                    flex
                    h-[36px]
                    w-[36px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-[#dfe5ee]
                    bg-white
                    text-[#667085]
                    shadow-[0_2px_8px_rgba(15,23,42,0.03)]
                    transition-all
                    duration-200
                    hover:border-[#1769e0]
                    hover:bg-[#f5f8ff]
                    hover:text-[#1769e0]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-[#dfe5ee]
                    disabled:hover:bg-white
                    disabled:hover:text-[#667085]
                "
            >
                <ChevronRight
                    size={16}
                    strokeWidth={2}
                />
            </button>
        </nav>
    );
};

export default TourPagination;