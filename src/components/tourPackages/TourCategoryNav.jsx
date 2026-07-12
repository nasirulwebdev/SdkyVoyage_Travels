import { tourCategories } from "../../data/tourPackagesData";

const TourCategoryNav = ({
    activeCategory = "all",
    onCategoryChange,
}) => {
    return (
        <section
            className="
                relative
                z-30
                mx-auto
                -mt-[28px]
                w-full
                max-w-[1440px]
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    overflow-hidden
                    rounded-[12px]
                    border
                    border-[#e8edf5]
                    bg-white
                    shadow-[0_12px_35px_rgba(15,23,42,0.08)]
                "
            >
                <div
                    className="
                        flex
                        overflow-x-auto
                        scrollbar-hide
                    "
                >
                    {tourCategories.map((category, index) => {
                        const Icon = category.icon;

                        const isActive =
                            activeCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() =>
                                    onCategoryChange?.(
                                        category.id
                                    )
                                }
                                className={`
                                    group
                                    relative
                                    flex
                                    h-[82px]
                                    min-w-[145px]
                                    flex-1
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-[7px]
                                    px-3
                                    transition-all
                                    duration-200

                                    ${
                                        index !==
                                        tourCategories.length - 1
                                            ? `
                                                after:absolute
                                                after:right-0
                                                after:top-1/2
                                                after:h-[46px]
                                                after:w-px
                                                after:-translate-y-1/2
                                                after:bg-[#e8edf5]
                                            `
                                            : ""
                                    }

                                    ${
                                        isActive
                                            ? `
                                                bg-[#f5f8ff]
                                                text-[#1769e0]
                                            `
                                            : `
                                                bg-white
                                                text-[#172348]
                                                hover:bg-[#f8faff]
                                            `
                                    }
                                `}
                            >
                                {/* Icon */}
                                <span
                                    className={`
                                        flex
                                        h-[32px]
                                        w-[32px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        transition-colors

                                        ${
                                            isActive
                                                ? `
                                                    bg-[#e8f0ff]
                                                    text-[#1769e0]
                                                `
                                                : `
                                                    bg-[#f7f9fc]
                                                    text-[#172348]
                                                    group-hover:text-[#1769e0]
                                                `
                                        }
                                    `}
                                >
                                    <Icon
                                        size={20}
                                        strokeWidth={1.9}
                                    />
                                </span>

                                {/* Label */}
                                <span
                                    className={`
                                        whitespace-nowrap
                                        text-[12px]
                                        leading-none
                                        transition-colors

                                        ${
                                            isActive
                                                ? `
                                                    font-semibold
                                                    text-[#1769e0]
                                                `
                                                : `
                                                    font-medium
                                                    text-[#172348]
                                                    group-hover:text-[#1769e0]
                                                `
                                        }
                                    `}
                                >
                                    {category.label}
                                </span>

                                {/* Active Bottom Line */}
                                {isActive && (
                                    <span
                                        className="
                                            absolute
                                            bottom-0
                                            left-1/2
                                            h-[3px]
                                            w-[42px]
                                            -translate-x-1/2
                                            rounded-t-full
                                            bg-[#1769e0]
                                        "
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TourCategoryNav;