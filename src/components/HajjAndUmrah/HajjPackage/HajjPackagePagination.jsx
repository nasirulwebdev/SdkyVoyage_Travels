import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";


const HajjPackagePagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) {
        return null;
    }


    const pages = Array.from(
        {
            length: totalPages,
        },
        (_, index) => index + 1
    );


    const handlePageChange = (page) => {
        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        onPageChange(page);

        window.scrollTo({
            top: 520,
            behavior: "smooth",
        });
    };


    return (
        <div
            className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
            "
        >
            {/* Previous Button */}
            <button
                type="button"
                onClick={() =>
                    handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="
                    flex
                    h-10
                    items-center
                    justify-center
                    gap-1.5
                    rounded-lg
                    border
                    border-[#ded8cd]
                    bg-white
                    px-3
                    text-sm
                    font-semibold
                    text-[#52615c]
                    transition-all
                    duration-300
                    hover:border-[#0b4d3b]
                    hover:bg-[#0b4d3b]
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-[#ded8cd]
                    disabled:hover:bg-white
                    disabled:hover:text-[#52615c]
                "
            >
                <ChevronLeft size={17} />

                <span className="hidden sm:inline">
                    Previous
                </span>
            </button>


            {/* Page Numbers */}
            {pages.map((page) => {
                const isActive =
                    currentPage === page;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() =>
                            handlePageChange(page)
                        }
                        className={`
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            text-sm
                            font-bold
                            transition-all
                            duration-300

                            ${
                                isActive
                                    ? `
                                        border-[#0b4d3b]
                                        bg-[#0b4d3b]
                                        text-white
                                        shadow-[0_6px_16px_rgba(11,77,59,0.18)]
                                    `
                                    : `
                                        border-[#ded8cd]
                                        bg-white
                                        text-[#52615c]
                                        hover:border-[#c69235]
                                        hover:bg-[#f8f4eb]
                                        hover:text-[#0b4d3b]
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
                onClick={() =>
                    handlePageChange(currentPage + 1)
                }
                disabled={
                    currentPage === totalPages
                }
                className="
                    flex
                    h-10
                    items-center
                    justify-center
                    gap-1.5
                    rounded-lg
                    border
                    border-[#ded8cd]
                    bg-white
                    px-3
                    text-sm
                    font-semibold
                    text-[#52615c]
                    transition-all
                    duration-300
                    hover:border-[#0b4d3b]
                    hover:bg-[#0b4d3b]
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-[#ded8cd]
                    disabled:hover:bg-white
                    disabled:hover:text-[#52615c]
                "
            >
                <span className="hidden sm:inline">
                    Next
                </span>

                <ChevronRight size={17} />
            </button>
        </div>
    );
};


export default HajjPackagePagination;