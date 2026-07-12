import { useState } from "react";
import {
    Plane,
    Hotel,
    MapPin,
    CalendarDays,
    Users,
    Search,
    ArrowRightLeft,
    MapPinned,
    Palmtree,
} from "lucide-react";

const TravelSearch = () => {
    const [activeTab, setActiveTab] = useState("flights");

    const tabs = [
        {
            id: "flights",
            label: "Flights",
            icon: Plane,
        },
        {
            id: "hotels",
            label: "Hotels",
            icon: Hotel,
        },
        {
            id: "packages",
            label: "Tour Packages",
            icon: Palmtree,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const searchData = Object.fromEntries(formData.entries());

        console.log({
            type: activeTab,
            ...searchData,
        });
    };

    return (

    <section className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white
                    shadow-[0_25px_70px_rgba(15,23,42,0.18)]
                "
            >
                    {/* =========================
                        SEARCH TABS
                    ========================== */}

                    <div
                        className="
                            flex
                            overflow-x-auto
                            border-b
                            border-slate-200
                            bg-slate-50/80
                            px-4
                            sm:px-6
                            lg:px-8
                        "
                    >
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        relative
                                        flex
                                        min-w-max
                                        items-center
                                        gap-2
                                        px-5
                                        py-5
                                        text-sm
                                        font-semibold
                                        transition-all
                                        duration-300
                                        sm:px-7
                                        ${
                                            isActive
                                                ? "text-blue-600"
                                                : "text-slate-500 hover:text-slate-900"
                                        }
                                    `}
                                >
                                    <Icon size={19} />

                                    {tab.label}

                                    {isActive && (
                                        <span
                                            className="
                                                absolute
                                                bottom-0
                                                left-5
                                                right-5
                                                h-[3px]
                                                rounded-t-full
                                                bg-blue-600
                                                sm:left-7
                                                sm:right-7
                                            "
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* =========================
                        SEARCH FORM
                    ========================== */}

                    <form
                        onSubmit={handleSubmit}
                        className="p-5 sm:p-6 lg:p-8"
                    >
                        {/* FLIGHTS */}
                        {activeTab === "flights" && (
                            <div
                                className="
                                    grid
                                    gap-4
                                    md:grid-cols-2
                                    xl:grid-cols-[1fr_48px_1fr_1fr_1fr_auto]
                                    xl:items-end
                                "
                            >
                                <SearchField
                                    icon={Plane}
                                    label="From"
                                    name="from"
                                    placeholder="Dhaka"
                                />

                                <button
                                    type="button"
                                    aria-label="Swap locations"
                                    className="
                                        hidden
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        text-blue-600
                                        transition
                                        hover:border-blue-200
                                        hover:bg-blue-50
                                        xl:flex
                                    "
                                >
                                    <ArrowRightLeft size={18} />
                                </button>

                                <SearchField
                                    icon={MapPin}
                                    label="To"
                                    name="to"
                                    placeholder="Dubai"
                                />

                                <SearchField
                                    icon={CalendarDays}
                                    label="Departure"
                                    name="departure"
                                    type="date"
                                />

                                <SearchField
                                    icon={Users}
                                    label="Travelers"
                                    name="travelers"
                                    type="number"
                                    placeholder="2 Travelers"
                                    min="1"
                                />

                                <SearchButton />
                            </div>
                        )}

                        {/* HOTELS */}
                        {activeTab === "hotels" && (
                            <div
                                className="
                                    grid
                                    gap-4
                                    md:grid-cols-2
                                    xl:grid-cols-[1.4fr_1fr_1fr_1fr_auto]
                                    xl:items-end
                                "
                            >
                                <SearchField
                                    icon={MapPinned}
                                    label="Destination"
                                    name="destination"
                                    placeholder="Where are you going?"
                                />

                                <SearchField
                                    icon={CalendarDays}
                                    label="Check In"
                                    name="checkIn"
                                    type="date"
                                />

                                <SearchField
                                    icon={CalendarDays}
                                    label="Check Out"
                                    name="checkOut"
                                    type="date"
                                />

                                <SearchField
                                    icon={Users}
                                    label="Guests"
                                    name="guests"
                                    type="number"
                                    placeholder="2 Guests"
                                    min="1"
                                />

                                <SearchButton />
                            </div>
                        )}

                        {/* TOUR PACKAGES */}
                        {activeTab === "packages" && (
                            <div
                                className="
                                    grid
                                    gap-4
                                    md:grid-cols-2
                                    xl:grid-cols-[1.4fr_1fr_1fr_1fr_auto]
                                    xl:items-end
                                "
                            >
                                <SearchField
                                    icon={MapPin}
                                    label="Destination"
                                    name="destination"
                                    placeholder="Thailand, Dubai, Maldives..."
                                />

                                <SearchField
                                    icon={CalendarDays}
                                    label="Travel Date"
                                    name="travelDate"
                                    type="date"
                                />

                                <div>
                                    <label
                                        htmlFor="tourType"
                                        className="
                                            mb-2
                                            block
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-[0.08em]
                                            text-slate-500
                                        "
                                    >
                                        Tour Type
                                    </label>

                                    <div className="relative">
                                        <Palmtree
                                            size={19}
                                            className="
                                                pointer-events-none
                                                absolute
                                                left-4
                                                top-1/2
                                                -translate-y-1/2
                                                text-blue-600
                                            "
                                        />

                                        <select
                                            id="tourType"
                                            name="tourType"
                                            defaultValue=""
                                            className="
                                                h-14
                                                w-full
                                                appearance-none
                                                rounded-xl
                                                border
                                                border-slate-200
                                                bg-white
                                                pl-12
                                                pr-4
                                                font-medium
                                                text-slate-700
                                                outline-none
                                                transition
                                                focus:border-blue-500
                                                focus:ring-4
                                                focus:ring-blue-100
                                            "
                                        >
                                            <option value="" disabled>
                                                Select tour type
                                            </option>

                                            <option value="family">
                                                Family Tour
                                            </option>

                                            <option value="honeymoon">
                                                Honeymoon
                                            </option>

                                            <option value="adventure">
                                                Adventure
                                            </option>

                                            <option value="luxury">
                                                Luxury Tour
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <SearchField
                                    icon={Users}
                                    label="Travelers"
                                    name="travelers"
                                    type="number"
                                    placeholder="2 Travelers"
                                    min="1"
                                />

                                <SearchButton />
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

/* =========================
    REUSABLE SEARCH FIELD
========================== */

const SearchField = ({
    icon: Icon,
    label,
    name,
    type = "text",
    placeholder,
    min,
}) => {
    return (
        <div className="min-w-0">
            <label
                htmlFor={name}
                className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-slate-500
                "
            >
                {label}
            </label>

            <div
                className="
                    flex
                    h-14
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    transition-all
                    duration-300
                    focus-within:border-blue-500
                    focus-within:ring-4
                    focus-within:ring-blue-100
                "
            >
                {/* Icon is now normal flex item */}
                <Icon
                    size={19}
                    className="
                        shrink-0
                        text-blue-600
                    "
                />

                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    min={min}
                    className="
                        min-w-0
                        flex-1
                        border-none
                        bg-transparent
                        p-0
                        font-medium
                        text-slate-800
                        outline-none
                        placeholder:text-slate-400
                    "
                />
            </div>
        </div>
    );
};

/* =========================
    SEARCH BUTTON
========================== */

const SearchButton = () => {
    return (
        <button
            type="submit"
            className="
                group
                flex
                h-14
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-7
                font-bold
                text-white
                shadow-lg
                shadow-blue-600/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-xl
                active:translate-y-0
            "
        >
            <Search
                size={19}
                className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            />

            Search
        </button>
    );
};

export default TravelSearch;