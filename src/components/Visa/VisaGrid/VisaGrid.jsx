import VisaCard from "../VisaCard/VisaCard";

const VisaGrid = ({
    visas = [],
    viewMode = "grid",
}) => {
    if (visas.length === 0) {
        return (
            <div
                className="
                    flex
                    min-h-[320px]
                    items-center
                    justify-center
                    rounded-[10px]
                    border
                    border-[#e4e9f1]
                    bg-white
                    px-6
                    text-center
                "
            >
                <div>
                    <h3 className="text-[17px] font-bold text-[#102143]">
                        No Visa Services Found
                    </h3>

                    <p className="mt-2 text-[12px] text-[#7d899d]">
                        Try changing or resetting your filters.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div
            className={
                viewMode === "grid"
                    ? `
                        grid
                        grid-cols-1
                        gap-4
                        md:grid-cols-2
                        xl:grid-cols-3
                    `
                    : `
                        flex
                        flex-col
                        gap-4
                    `
            }
        >
            {visas.map((visa) => (
                <VisaCard
                    key={visa.id}
                    visa={visa}
                    viewMode={viewMode}
                />
            ))}
        </div>
    );
};

export default VisaGrid;