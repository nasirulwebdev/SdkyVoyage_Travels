import HajjUmrahFilters from "./HajjUmrahFilters";
import HajjUmrahToolbar from "./HajjUmrahToolbar";
import HajjUmrahPackageGrid from "./HajjUmrahPackageGrid";
import HajjUmrahSidebar from "./HajjUmrahSidebar";
import HajjUmrahPagination from "./HajjUmrahPagination";


const HajjUmrahContent = ({
    filters,
    onFilterChange,
    onPriceChange,
    onClearFilters,

    packages = [],
    totalResults = 0,

    sortBy,
    onSortChange,

    viewMode,
    onViewModeChange,

    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    return (
        <section
            className="
                px-4
                pb-16
                pt-10
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1400px]
                    grid-cols-1
                    gap-6
                    lg:grid-cols-[230px_minmax(0,1fr)]
                    xl:grid-cols-[240px_minmax(0,1fr)_250px]
                "
            >

                {/* =========================
                    LEFT FILTER SIDEBAR
                ========================== */}
                <aside className="w-full">
                    <div className="lg:sticky lg:top-24">
                        <HajjUmrahFilters
                            filters={filters}
                            onFilterChange={onFilterChange}
                            onPriceChange={onPriceChange}
                            onClearFilters={onClearFilters}
                        />
                    </div>
                </aside>


                {/* =========================
                    CENTER CONTENT
                ========================== */}
                <div className="min-w-0 w-full">

                    {/* TOOLBAR */}
                    <HajjUmrahToolbar
                        totalResults={totalResults}
                        sortBy={sortBy}
                        onSortChange={onSortChange}
                        viewMode={viewMode}
                        onViewModeChange={onViewModeChange}
                    />


                    {/* PACKAGE GRID / LIST */}
                    <HajjUmrahPackageGrid
                        packages={packages}
                        viewMode={viewMode}
                    />


                    {/* PAGINATION */}
                    <HajjUmrahPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />

                </div>


                {/* =========================
                    RIGHT SIDEBAR
                ========================== */}
                <aside className="hidden xl:block">
                    <div className="sticky top-24">
                        <HajjUmrahSidebar />
                    </div>
                </aside>

            </div>
        </section>
    );
};


export default HajjUmrahContent;