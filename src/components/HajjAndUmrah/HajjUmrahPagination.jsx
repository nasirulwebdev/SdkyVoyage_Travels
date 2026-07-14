import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";


const HajjUmrahPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    if (totalPages <= 1) {
        return null;
    }


    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );


    return (
        <div
            className="
                mt-10
                flex
                items-center
                justify-center
                gap-2
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
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    transition
                    hover:border-orange-500
                    hover:text-orange-500
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronLeft size={18} />
            </button>


            {/* PAGE NUMBERS */}
            {pages.map((page) => (
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
                        rounded-lg
                        border
                        px-3
                        text-sm
                        font-semibold
                        transition

                        ${
                            currentPage === page
                                ? `
                                    border-orange-500
                                    bg-orange-500
                                    text-white
                                `
                                : `
                                    border-gray-200
                                    bg-white
                                    text-gray-700
                                    hover:border-orange-500
                                    hover:text-orange-500
                                `
                        }
                    `}
                >
                    {page}
                </button>
            ))}


            {/* NEXT */}
            <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() =>
                    onPageChange(currentPage + 1)
                }
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    transition
                    hover:border-orange-500
                    hover:text-orange-500
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
};


export default HajjUmrahPagination;