import {
    PackageSearch,
    RotateCcw,
} from "lucide-react";

import UmrahPackageCard from "./UmrahPackageCard";


const UmrahPackageGrid = ({
    packages = [],
    viewMode = "grid",
    onResetFilters,
}) => {

    // =====================================
    // EMPTY RESULT
    // =====================================

    if (!packages.length) {

        return (

            <div
                className="
                    flex
                    min-h-[420px]
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-12
                    text-center
                    shadow-sm
                "
            >

                <div className="max-w-md">

                    {/* ICON */}

                    <div
                        className="
                            mx-auto
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-50
                            text-emerald-700
                        "
                    >
                        <PackageSearch
                            size={34}
                            strokeWidth={1.8}
                        />
                    </div>


                    {/* TITLE */}

                    <h3
                        className="
                            mt-6
                            text-2xl
                            font-extrabold
                            text-slate-900
                        "
                    >
                        No Umrah Packages Found
                    </h3>


                    {/* DESCRIPTION */}

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        We could not find any packages matching
                        your current search and filter options.
                        Try changing or resetting your filters.
                    </p>


                    {/* RESET BUTTON */}

                    {onResetFilters && (

                        <button
                            type="button"
                            onClick={onResetFilters}
                            className="
                                group
                                mx-auto
                                mt-6
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-emerald-700
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-white
                                shadow-md
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-emerald-800
                                hover:shadow-lg
                                active:translate-y-0
                            "
                        >

                            <RotateCcw
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:-rotate-45
                                "
                            />

                            Reset All Filters

                        </button>

                    )}

                </div>

            </div>

        );

    }


    // =====================================
    // PACKAGE GRID / LIST
    // =====================================

    return (

        <div
            className={
                viewMode === "list"

                    ? `
                        grid
                        grid-cols-1
                        gap-6
                      `

                    : `
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                      `
            }
        >

            {packages.map((packageItem) => (

                <UmrahPackageCard
                    key={packageItem.id}
                    packageData={packageItem}
                    viewMode={viewMode}
                />

            ))}

        </div>

    );

};


export default UmrahPackageGrid;