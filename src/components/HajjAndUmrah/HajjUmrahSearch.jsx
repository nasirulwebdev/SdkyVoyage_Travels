import {
    CalendarDays,
    ChevronDown,
    Search,
    Users,
} from "lucide-react";

import { hajjUmrahSearchData } from "../../data/HajjAndUmrah/HajjAndUmrahData";


const HajjUmrahSearch = ({
    searchData,
    onSearchChange,
    onSearchSubmit,
}) => {
    const {
        packageType,
        departureDate,
        travelers,
        buttonText,
    } = hajjUmrahSearchData;


    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit();
    };


    return (
        <section className="relative z-30 -mt-[72px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1240px]">

                <form
                    onSubmit={handleSubmit}
                    className="
                        grid
                        grid-cols-1
                        gap-4
                        rounded-2xl
                        border-gray-100
                        bg-white
                        p-5
                        shadow-[0_18px_50px_rgba(15,23,42,0.16)]
                        md:grid-cols-2
                        lg:grid-cols-[1fr_1fr_1fr_auto]
                        lg:items-end
                        lg:p-6
                    "
                >

                    {/* Package Type */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-800">
                            {packageType.label}
                        </label>

                        <div className="relative">
                            <select
                                value={searchData.packageType}
                                onChange={(e) =>
                                    onSearchChange(
                                        "packageType",
                                        e.target.value
                                    )
                                }
                                className="
                                    h-12
                                    w-full
                                    appearance-none
                                    rounded-lg
                                    border
                                    border-gray-200
                                    bg-white
                                    px-4
                                    pr-10
                                    text-sm
                                    text-gray-700
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-500/10
                                "
                            >
                                {packageType.options.map((option) => (
                                    <option
                                        key={option.id}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown
                                size={17}
                                className="
                                    pointer-events-none
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                "
                            />
                        </div>
                    </div>


                    {/* Departure Date */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-800">
                            {departureDate.label}
                        </label>

                        <div className="relative">
                            <CalendarDays
                                size={18}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                "
                            />

                            <input
                                type="date"
                                value={searchData.departureDate}
                                onChange={(e) =>
                                    onSearchChange(
                                        "departureDate",
                                        e.target.value
                                    )
                                }
                                className="
                                    h-12
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-200
                                    bg-white
                                    pl-11
                                    pr-4
                                    text-sm
                                    text-gray-700
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-500/10
                                "
                            />
                        </div>
                    </div>


                    {/* Travelers */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-800">
                            {travelers.label}
                        </label>

                        <div className="relative">
                            <Users
                                size={18}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                "
                            />

                            <select
                                value={searchData.travelers}
                                onChange={(e) =>
                                    onSearchChange(
                                        "travelers",
                                        Number(e.target.value)
                                    )
                                }
                                className="
                                    h-12
                                    w-full
                                    appearance-none
                                    rounded-lg
                                    border
                                    border-gray-200
                                    bg-white
                                    pl-11
                                    pr-10
                                    text-sm
                                    text-gray-700
                                    outline-none
                                    transition
                                    focus:border-orange-500
                                    focus:ring-2
                                    focus:ring-orange-500/10
                                "
                            >
                                {travelers.options.map((option) => (
                                    <option
                                        key={option.id}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown
                                size={17}
                                className="
                                    pointer-events-none
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                "
                            />
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
                            bg-orange-500
                            px-7
                            text-sm
                            font-bold
                            whitespace-nowrap
                            text-white
                            shadow-lg
                            shadow-orange-500/20
                            transition
                            hover:bg-orange-600
                            active:scale-[0.98]
                        "
                    >
                        <Search size={18} />
                        {buttonText}
                    </button>

                </form>
            </div>
        </section>
    );
};


export default HajjUmrahSearch;