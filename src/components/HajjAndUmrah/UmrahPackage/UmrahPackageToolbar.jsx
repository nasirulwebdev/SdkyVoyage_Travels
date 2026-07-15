import {
    Grid2X2,
    List,
    SlidersHorizontal,
} from "lucide-react";

import {
    umrahPackageToolbarData,
} from "../../../data/HajjAndUmrah/UmrahPackageData";


const UmrahPackageToolbar = ({
    totalPackages = 0,
    sortBy = "Popularity",
    onSortChange,
    viewMode = "grid",
    onViewModeChange,
}) => {

    return (

        <div
            className="
                mb-6
                flex
                flex-col
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-4
                shadow-sm
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
        >

            {/* LEFT SIDE */}

            <div className="flex items-center gap-3">

                <div
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-50
                        text-emerald-700
                    "
                >
                    <SlidersHorizontal size={19} />
                </div>


                <div>

                    <h2
                        className="
                            text-base
                            font-bold
                            text-slate-900
                        "
                    >
                        Umrah Packages
                    </h2>

                    <p
                        className="
                            mt-0.5
                            text-sm
                            text-slate-500
                        "
                    >
                        Showing{" "}
                        <span className="font-bold text-emerald-700">
                            {totalPackages}
                        </span>{" "}
                        available packages
                    </p>

                </div>

            </div>


            {/* RIGHT SIDE */}

            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                "
            >

                {/* SORT */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <span
                        className="
                            hidden
                            text-sm
                            font-medium
                            text-slate-500
                            md:block
                        "
                    >
                        Sort by:
                    </span>


                    <select
                        value={sortBy}
                        onChange={(event) =>
                            onSortChange?.(event.target.value)
                        }
                        className="
                            h-10
                            cursor-pointer
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-3
                            text-sm
                            font-semibold
                            text-slate-700
                            outline-none
                            transition-all
                            duration-300
                            hover:border-emerald-400
                            focus:border-emerald-600
                            focus:ring-4
                            focus:ring-emerald-600/10
                        "
                    >

                        {umrahPackageToolbarData.sortOptions.map(
                            (option) => (

                                <option
                                    key={option}
                                    value={option}
                                >
                                    {option}
                                </option>

                            )
                        )}

                    </select>

                </div>


                {/* VIEW MODE */}

                <div
                    className="
                        flex
                        items-center
                        rounded-lg
                        border
                        border-slate-200
                        bg-slate-50
                        p-1
                    "
                >

                    {/* GRID */}

                    <button
                        type="button"
                        onClick={() =>
                            onViewModeChange?.("grid")
                        }
                        aria-label="Grid view"
                        className={`
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-md
                            transition-all
                            duration-300

                            ${
                                viewMode === "grid"
                                    ? `
                                        bg-emerald-700
                                        text-white
                                        shadow-sm
                                      `
                                    : `
                                        text-slate-500
                                        hover:bg-white
                                        hover:text-emerald-700
                                      `
                            }
                        `}
                    >
                        <Grid2X2 size={16} />
                    </button>


                    {/* LIST */}

                    <button
                        type="button"
                        onClick={() =>
                            onViewModeChange?.("list")
                        }
                        aria-label="List view"
                        className={`
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-md
                            transition-all
                            duration-300

                            ${
                                viewMode === "list"
                                    ? `
                                        bg-emerald-700
                                        text-white
                                        shadow-sm
                                      `
                                    : `
                                        text-slate-500
                                        hover:bg-white
                                        hover:text-emerald-700
                                      `
                            }
                        `}
                    >
                        <List size={17} />
                    </button>

                </div>

            </div>

        </div>

    );

};


export default UmrahPackageToolbar;