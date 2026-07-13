import DomesticFlightCard from "./DomesticFlightCard";

const DomesticFlightResults = ({
    flights = [],
    sortBy,
    onSortChange,
    onSelectFlight,
    searchData,
}) => {
    return (
        <section className="min-w-0 space-y-4">
            {/* Results Header */}
            <div
                className="
                    flex
                    flex-col
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    shadow-[0_5px_20px_rgba(15,23,42,0.04)]
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >
                <div>
                    <h2
                        className="
                            text-lg
                            font-extrabold
                            text-[#0b214a]
                        "
                    >
                        {searchData?.from && searchData?.to
                            ? `${searchData.from} to ${searchData.to}`
                            : "Available Domestic Flights"}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        <span className="font-bold text-[#16b364]">
                            {flights.length}
                        </span>{" "}
                        {flights.length === 1
                            ? "flight found"
                            : "flights found"}
                    </p>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                    <span
                        className="
                            hidden
                            text-xs
                            font-medium
                            text-slate-500
                            sm:block
                        "
                    >
                        Sort by:
                    </span>

                    <select
                        value={sortBy}
                        onChange={(event) =>
                            onSortChange(event.target.value)
                        }
                        className="
                            cursor-pointer
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-2.5
                            text-sm
                            font-semibold
                            text-[#0b214a]
                            outline-none
                            transition
                            focus:border-[#16b364]
                        "
                    >
                        <option value="recommended">
                            Recommended
                        </option>

                        <option value="price-low">
                            Price: Low to High
                        </option>

                        <option value="price-high">
                            Price: High to Low
                        </option>

                        <option value="departure-early">
                            Departure: Earliest
                        </option>

                        <option value="departure-late">
                            Departure: Latest
                        </option>

                        <option value="rating">
                            Highest Rated
                        </option>
                    </select>
                </div>
            </div>

            {/* Flight Cards */}
            {flights.length > 0 ? (
                <div className="space-y-4">
                    {flights.map((flight) => (
                        <DomesticFlightCard
                            key={flight.id}
                            flight={flight}
                            onSelect={onSelectFlight}
                        />
                    ))}
                </div>
            ) : (
                <div
                    className="
                        flex
                        min-h-[320px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-dashed
                        border-slate-300
                        bg-white
                        px-6
                        text-center
                    "
                >
                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-[#effaf4]
                            text-2xl
                        "
                    >
                        ✈
                    </div>

                    <h3
                        className="
                            mt-4
                            text-lg
                            font-bold
                            text-[#0b214a]
                        "
                    >
                        No flights found
                    </h3>

                    <p
                        className="
                            mt-2
                            max-w-sm
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        Try changing your route, price range,
                        airline, departure time, or stop filters.
                    </p>
                </div>
            )}
        </section>
    );
};

export default DomesticFlightResults;