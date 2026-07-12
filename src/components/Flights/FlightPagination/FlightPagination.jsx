import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const FlightPagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <div
            className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
            "
        >
            {/* PREVIOUS */}
            <button
                type="button"
                disabled={currentPage === 1}
                onClick={() =>
                    onPageChange(currentPage - 1)
                }
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[7px]
                    border
                    border-[#e1e7ef]
                    bg-white
                    text-[#52627a]
                    transition
                    hover:border-[#0866f5]
                    hover:text-[#0866f5]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronLeft size={18} />
            </button>

            {/* PAGE NUMBERS */}
            {pages.map((page) => {
                const isActive =
                    currentPage === page;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() =>
                            onPageChange(page)
                        }
                        className={`
                            flex
                            h-10
                            min-w-10
                            items-center
                            justify-center
                            rounded-[7px]
                            border
                            px-3
                            text-[12px]
                            font-semibold
                            transition

                            ${
                                isActive
                                    ? "border-[#0866f5] bg-[#0866f5] text-white"
                                    : "border-[#e1e7ef] bg-white text-[#52627a] hover:border-[#0866f5] hover:text-[#0866f5]"
                            }
                        `}
                    >
                        {page}
                    </button>
                );
            })}

            {/* NEXT */}
            <button
                type="button"
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    onPageChange(currentPage + 1)
                }
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[7px]
                    border
                    border-[#e1e7ef]
                    bg-white
                    text-[#52627a]
                    transition
                    hover:border-[#0866f5]
                    hover:text-[#0866f5]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronRight size={17} />
            </button>
        </div>
    );
};

export default FlightPagination;