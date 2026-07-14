import HajjUmrahPackageCard from "./HajjUmrahPackageCard";


const HajjUmrahPackageGrid = ({
    packages,
    viewMode,
}) => {
    if (packages.length === 0) {
        return (
            <div className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                px-6
                py-16
                text-center
                shadow-sm
            ">
                <h3 className="text-xl font-bold text-gray-900">
                    No Packages Found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                    Try changing your filters to find more packages.
                </p>
            </div>
        );
    }


    return (
        <div
            className={
                viewMode === "grid"
                    ? "grid grid-cols-1 gap-5 md:grid-cols-2"
                    : "space-y-5"
            }
        >
            {packages.map((packageItem) => (
                <HajjUmrahPackageCard
                    key={packageItem.id}
                    packageItem={packageItem}
                    viewMode={viewMode}
                />
            ))}
        </div>
    );
};


export default HajjUmrahPackageGrid;