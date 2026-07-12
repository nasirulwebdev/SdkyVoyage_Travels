import TourPackageCard from "./TourPackageCard";

const TourPackageGrid = ({
    packages = [],
    viewMode = "grid",
}) => {
    /* =========================================
       EMPTY STATE
    ========================================= */

    if (!packages.length) {
        return (
            <div
                className="
                    flex
                    min-h-[360px]
                    items-center
                    justify-center
                    rounded-[10px]
                    border
                    border-[#e7ebf1]
                    bg-white
                    p-8
                    text-center
                "
            >
                <div>
                    <h3
                        className="
                            text-[18px]
                            font-bold
                            text-[#111c3f]
                        "
                    >
                        No Tour Packages Found
                    </h3>

                    <p
                        className="
                            mt-2
                            text-[13px]
                            text-[#7b8494]
                        "
                    >
                        Try changing your filters or category.
                    </p>
                </div>
            </div>
        );
    }

    /* =========================================
       LIST VIEW
    ========================================= */

    if (viewMode === "list") {
        return (
            <div
                className="
                    flex
                    flex-col
                    gap-5
                "
            >
                {packages.map((tour) => (
                    <TourPackageCard
                        key={tour.id}
                        tour={tour}
                        viewMode="list"
                    />
                ))}
            </div>
        );
    }

    /* =========================================
       GRID VIEW
    ========================================= */

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5

                sm:grid-cols-2

                xl:grid-cols-3
            "
        >
            {packages.map((tour) => (
                <TourPackageCard
                    key={tour.id}
                    tour={tour}
                    viewMode="grid"
                />
            ))}
        </div>
    );
};

export default TourPackageGrid;