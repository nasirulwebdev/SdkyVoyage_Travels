import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";


const UmrahPackagePagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {

    if (totalPages <= 1) {
        return null;
    }


    const handlePageChange = (page) => {

        if (
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


    const getPageNumbers = () => {

        const pages = [];

        for (
            let page = 1;
            page <= totalPages;
            page++
        ) {
            pages.push(page);
        }

        return pages;

    };


    return (

        <div
            className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-4
                shadow-sm
                sm:flex-row
            "
        >

            {/* PAGE INFORMATION */}

            <p
                className="
                    text-sm
                    font-medium
                    text-slate-500
                "
            >
                Page{" "}

                <span
                    className="
                        font-bold
                        text-emerald-700
                    "
                >
                    {currentPage}
                </span>

                {" "}of{" "}

                <span
                    className="
                        font-bold
                        text-slate-800
                    "
                >
                    {totalPages}
                </span>
            </p>


            {/* PAGINATION BUTTONS */}

            <div
                className="
                    flex
                    items-center
                    gap-2
                "
            >

                {/* PREVIOUS */}

                <button
                    type="button"
                    onClick={() =>
                        handlePageChange(
                            currentPage - 1
                        )
                    }
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="
                        group
                        flex
                        h-10
                        items-center
                        justify-center
                        gap-1
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        text-sm
                        font-semibold
                        text-slate-600
                        transition-all
                        duration-300
                        hover:border-emerald-600
                        hover:bg-emerald-50
                        hover:text-emerald-700
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                        disabled:hover:border-slate-200
                        disabled:hover:bg-white
                        disabled:hover:text-slate-600
                    "
                >

                    <ChevronLeft
                        size={17}
                        className="
                            transition-transform
                            duration-300
                            group-hover:-translate-x-0.5
                        "
                    />

                    <span className="hidden sm:inline">
                        Previous
                    </span>

                </button>


                {/* PAGE NUMBERS */}

                {getPageNumbers().map((page) => (

                    <button
                        key={page}
                        type="button"
                        onClick={() =>
                            handlePageChange(page)
                        }
                        aria-label={`Go to page ${page}`}
                        aria-current={
                            currentPage === page
                                ? "page"
                                : undefined
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
                            font-bold
                            transition-all
                            duration-300

                            ${
                                currentPage === page
                                    ? `
                                        border-emerald-700
                                        bg-emerald-700
                                        text-white
                                        shadow-md
                                        shadow-emerald-700/20
                                      `
                                    : `
                                        border-slate-200
                                        bg-white
                                        text-slate-600
                                        hover:-translate-y-0.5
                                        hover:border-emerald-500
                                        hover:bg-emerald-50
                                        hover:text-emerald-700
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
                    onClick={() =>
                        handlePageChange(
                            currentPage + 1
                        )
                    }
                    disabled={
                        currentPage === totalPages
                    }
                    aria-label="Next page"
                    className="
                        group
                        flex
                        h-10
                        items-center
                        justify-center
                        gap-1
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        text-sm
                        font-semibold
                        text-slate-600
                        transition-all
                        duration-300
                        hover:border-emerald-600
                        hover:bg-emerald-50
                        hover:text-emerald-700
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                        disabled:hover:border-slate-200
                        disabled:hover:bg-white
                        disabled:hover:text-slate-600
                    "
                >

                    <span className="hidden sm:inline">
                        Next
                    </span>

                    <ChevronRight
                        size={17}
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                        "
                    />

                </button>

            </div>

        </div>

    );

};


export default UmrahPackagePagination;