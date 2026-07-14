import {
    CalendarDays,
    MapPin,
    Search,
    Tag,
} from "lucide-react";

import { hajjPackageSearchData } from "../../../data/HajjAndUmrah/HajjPackageData";


const HajjPackageSearch = ({
    searchFilters,
    setSearchFilters,
    onSearch,
}) => {
    const {
        packageTypes,
        departureCities,
        durations,
    } = hajjPackageSearchData;


    const handleChange = (event) => {
        const {
            name,
            value,
        } = event.target;

        setSearchFilters((previousFilters) => ({
            ...previousFilters,
            [name]: value,
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        if (onSearch) {
            onSearch();
        }
    };


    return (
        <section
            className="
                relative
                z-20
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                    -translate-y-1/2
                "
            >
                <form
                    onSubmit={handleSubmit}
                    className="
                        grid
                        grid-cols-1
                        gap-4
                        rounded-2xl
                        border
                        border-[#eadfca]
                        bg-[#fffdf8]
                        p-4
                        shadow-[0_18px_50px_rgba(33,52,42,0.12)]
                        md:grid-cols-2
                        lg:grid-cols-[1fr_1fr_1fr_auto]
                        lg:items-end
                        lg:gap-3
                        lg:p-5
                    "
                >
                    {/* Package Type */}
                    <div>
                        <label
                            htmlFor="packageType"
                            className="
                                mb-2
                                block
                                text-xs
                                font-semibold
                                text-[#18392f]
                            "
                        >
                            Package Type
                        </label>

                        <div className="relative">
                            <Tag
                                size={17}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#b98a35]
                                "
                            />

                            <select
                                id="packageType"
                                name="packageType"
                                value={searchFilters.packageType}
                                onChange={handleChange}
                                className="
                                    h-12
                                    w-full
                                    cursor-pointer
                                    appearance-none
                                    rounded-lg
                                    border
                                    border-[#ddd5c7]
                                    bg-white
                                    pl-11
                                    pr-4
                                    text-sm
                                    font-medium
                                    text-[#33443e]
                                    outline-none
                                    transition
                                    focus:border-[#c9963c]
                                    focus:ring-2
                                    focus:ring-[#c9963c]/15
                                "
                            >
                                {packageTypes.map((type) => (
                                    <option
                                        key={type.value}
                                        value={type.value}
                                    >
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>


                    {/* Departure City */}
                    <div>
                        <label
                            htmlFor="departureCity"
                            className="
                                mb-2
                                block
                                text-xs
                                font-semibold
                                text-[#18392f]
                            "
                        >
                            Departure City
                        </label>

                        <div className="relative">
                            <MapPin
                                size={17}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#b98a35]
                                "
                            />

                            <select
                                id="departureCity"
                                name="departureCity"
                                value={searchFilters.departureCity}
                                onChange={handleChange}
                                className="
                                    h-12
                                    w-full
                                    cursor-pointer
                                    appearance-none
                                    rounded-lg
                                    border
                                    border-[#ddd5c7]
                                    bg-white
                                    pl-11
                                    pr-4
                                    text-sm
                                    font-medium
                                    text-[#33443e]
                                    outline-none
                                    transition
                                    focus:border-[#c9963c]
                                    focus:ring-2
                                    focus:ring-[#c9963c]/15
                                "
                            >
                                {departureCities.map((city) => (
                                    <option
                                        key={city.value}
                                        value={city.value}
                                    >
                                        {city.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>


                    {/* Duration */}
                    <div>
                        <label
                            htmlFor="duration"
                            className="
                                mb-2
                                block
                                text-xs
                                font-semibold
                                text-[#18392f]
                            "
                        >
                            Duration
                        </label>

                        <div className="relative">
                            <CalendarDays
                                size={17}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-[#b98a35]
                                "
                            />

                            <select
                                id="duration"
                                name="duration"
                                value={searchFilters.duration}
                                onChange={handleChange}
                                className="
                                    h-12
                                    w-full
                                    cursor-pointer
                                    appearance-none
                                    rounded-lg
                                    border
                                    border-[#ddd5c7]
                                    bg-white
                                    pl-11
                                    pr-4
                                    text-sm
                                    font-medium
                                    text-[#33443e]
                                    outline-none
                                    transition
                                    focus:border-[#c9963c]
                                    focus:ring-2
                                    focus:ring-[#c9963c]/15
                                "
                            >
                                {durations.map((duration) => (
                                    <option
                                        key={duration.value}
                                        value={duration.value}
                                    >
                                        {duration.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>


                    {/* Search Button */}
                    <button
                        type="submit"
                        className="
                            flex
                            h-12
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-[#0b4d3b]
                            px-7
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-[#083d30]
                            hover:shadow-lg
                            active:scale-[0.98]
                            lg:min-w-[145px]
                        "
                    >
                        <Search size={18} />

                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};


export default HajjPackageSearch;