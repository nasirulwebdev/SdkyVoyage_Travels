import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const VisaPagination = ({
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

    return (
        <div
            className="
                mt-8
                flex
                items-center
                justify-between
                gap-4
                rounded-[10px]
                border
                border-[#e4e9f1]
                bg-white
                px-4
                py-3
                shadow-[0_3px_14px_rgba(15,23,42,0.03)]
            "
        >
            {/* PREVIOUS */}
            <button
                type="button"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="
                    flex
                    h-[36px]
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[6px]
                    border
                    border-[#dfe5ed]
                    bg-white
                    px-3
                    text-[11px]
                    font-bold
                    text-[#4d5a70]
                    transition
                    hover:border-[#0866ff]
                    hover:text-[#0866ff]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-[#dfe5ed]
                    disabled:hover:text-[#4d5a70]
                "
            >
                <ChevronLeft size={14} />
                Previous
            </button>

            {/* PAGE NUMBERS */}
            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        onClick={() =>
                            onPageChange(page)
                        }
                        className={`
                            flex
                            h-[34px]
                            min-w-[34px]
                            items-center
                            justify-center
                            rounded-[6px]
                            px-2
                            text-[11px]
                            font-bold
                            transition
                            ${
                                currentPage === page
                                    ? `
                                        border
                                        border-[#0866ff]
                                        bg-[#0866ff]
                                        text-white
                                        shadow-[0_5px_12px_rgba(8,102,255,0.20)]
                                    `
                                    : `
                                        border
                                        border-[#dfe5ed]
                                        bg-white
                                        text-[#58657a]
                                        hover:border-[#0866ff]
                                        hover:text-[#0866ff]
                                    `
                            }
                        `}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* NEXT */}
            <button
                type="button"
                onClick={handleNext}
                disabled={
                    currentPage === totalPages
                }
                className="
                    flex
                    h-[36px]
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[6px]
                    border
                    border-[#dfe5ed]
                    bg-white
                    px-3
                    text-[11px]
                    font-bold
                    text-[#4d5a70]
                    transition
                    hover:border-[#0866ff]
                    hover:text-[#0866ff]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:border-[#dfe5ed]
                    disabled:hover:text-[#4d5a70]
                "
            >
                Next
                <ChevronRight size={14} />
            </button>
        </div>
    );
};

export default VisaPagination;