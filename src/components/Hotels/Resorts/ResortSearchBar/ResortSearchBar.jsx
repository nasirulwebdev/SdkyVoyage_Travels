import {
    CalendarDays,
    ChevronDown,
    MapPin,
    Minus,
    Plus,
    Search,
    Users,
} from "lucide-react";

import {
    useEffect,
    useRef,
    useState,
} from "react";

// ==========================================
// SUB-COMPONENTS (HELPERS)
// ==========================================
const SearchFieldWrapper = ({ children, className = "" }) => (
    <div className={`relative flex items-center gap-4 px-6 py-4.5 min-w-0 border-slate-100 ${className}`}>
        {children}
    </div>
);

const SearchIcon = ({ icon: Icon }) => (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50/50">
        <Icon className="h-4.5 w-4.5 text-blue-600" />
    </div>
);

// ==========================================
// MAIN COMPONENT (LOGIC PART)
// ==========================================
const ResortSearchBar = ({
    searchData = { destination: "", checkIn: "", checkOut: "", guests: 2, rooms: 1 },
    setSearchData,
    onSearch,
}) => {
    const [showGuests, setShowGuests] = useState(false);
    const guestDropdownRef = useRef(null);

    // CLOSE GUEST DROPDOWN ON OUTSIDE CLICK
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                guestDropdownRef.current &&
                !guestDropdownRef.current.contains(event.target)
            ) {
                setShowGuests(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    // INPUT CHANGE HANDLER
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    // GUEST & ROOM COUNTER HANDLER
    const updateGuestCount = (field, amount, minimum) => {
        setSearchData((previousData) => ({
            ...previousData,
            [field]: Math.max(minimum, previousData[field] + amount),
        }));
    };

    // SEARCH SUBMIT HANDLER
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowGuests(false);
        if (onSearch) {
            onSearch();
        }
    };
    return (
        <section
            className="
                relative
                z-30
                mx-auto
                -mt-9
                w-full
                max-w-[1280px]
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <form
                onSubmit={handleSubmit}
                className="
                    grid
                    grid-cols-1
                    overflow-visible
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    shadow-[0_15px_40px_-5px_rgba(15,23,42,0.08)]
                    md:grid-cols-2
                    xl:grid-cols-[1.25fr_1fr_1fr_1.25fr_175px]
                "
            >
                {/* DESTINATION FIELD */}
                <SearchFieldWrapper className="border-b md:border-r xl:border-b-0">
                    <SearchIcon icon={MapPin} />
                    <div className="min-w-0 flex-1">
                        <label htmlFor="resort-destination" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Destination
                        </label>
                        <input
                            id="resort-destination"
                            type="text"
                            name="destination"
                            value={searchData.destination}
                            onChange={handleInputChange}
                            placeholder="Where are you going?"
                            autoComplete="off"
                            className="mt-0.5 w-full bg-transparent text-[13px] font-semibold text-slate-800 outline-none placeholder:font-medium placeholder:text-slate-400"
                        />
                    </div>
                </SearchFieldWrapper>

                {/* CHECK IN FIELD */}
                <SearchFieldWrapper className="border-b xl:border-b-0 xl:border-r">
                    <SearchIcon icon={CalendarDays} />
                    <div className="min-w-0 flex-1">
                        <label htmlFor="resort-check-in" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Check In
                        </label>
                        <input
                            id="resort-check-in"
                            type="date"
                            name="checkIn"
                            value={searchData.checkIn}
                            onChange={handleInputChange}
                            className="mt-0.5 w-full cursor-pointer bg-transparent text-[13px] font-semibold text-slate-800 outline-none"
                        />
                    </div>
                </SearchFieldWrapper>

                {/* CHECK OUT FIELD */}
                <SearchFieldWrapper className="border-b md:border-r xl:border-b-0">
                    <SearchIcon icon={CalendarDays} />
                    <div className="min-w-0 flex-1">
                        <label htmlFor="resort-check-out" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Check Out
                        </label>
                        <input
                            id="resort-check-out"
                            type="date"
                            name="checkOut"
                            min={searchData.checkIn || undefined}
                            value={searchData.checkOut}
                            onChange={handleInputChange}
                            className="mt-0.5 w-full cursor-pointer bg-transparent text-[13px] font-semibold text-slate-800 outline-none"
                        />
                    </div>
                </SearchFieldWrapper>

                {/* GUESTS & ROOMS FIELD (WITH DROPDOWN) */}
                <div ref={guestDropdownRef} className="relative border-b md:border-b-0 xl:border-r">
                    <div
                        onClick={() => setShowGuests(!showGuests)}
                        className="flex h-full cursor-pointer items-center justify-between px-6 py-4.5"
                    >
                        <div className="flex items-center gap-4 min-w-0 flex-1">
                            <SearchIcon icon={Users} />
                            <div className="min-w-0 flex-1">
                                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    Guests & Rooms
                                </span>
                                <span className="mt-0.5 block truncate text-[13px] font-semibold text-slate-800">
                                    {searchData.guests} Guests, {searchData.rooms} Room
                                </span>
                            </div>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${showGuests ? 'rotate-180' : ''}`} />
                    </div>

                    {showGuests && (
                        <div className="absolute top-[calc(100%+8px)] left-4 right-4 z-50 rounded-xl border border-slate-100 bg-white p-4 shadow-xl md:left-auto md:w-72 md:right-4">
                            {/* Guests Counter */}
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Guests</p>
                                    <p className="text-xs text-slate-400">Number of guests</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => updateGuestCount("guests", -1, 1)}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                                    >
                                        <Minus className="h-3.5 w-3.5" />
                                    </button>
                                    <span className="w-5 text-center text-sm font-bold text-slate-800">{searchData.guests}</span>
                                    <button
                                        type="button"
                                        onClick={() => updateGuestCount("guests", 1, 1)}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                                    >
                                        <Plus className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Rooms Counter */}
                            <div className="mt-2 flex items-center justify-between border-t border-slate-50 pt-3">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Rooms</p>
                                    <p className="text-xs text-slate-400">Number of rooms</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => updateGuestCount("rooms", -1, 1)}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                                    >
                                        <Minus className="h-3.5 w-3.5" />
                                    </button>
                                    <span className="w-5 text-center text-sm font-bold text-slate-800">{searchData.rooms}</span>
                                    <button
                                        type="button"
                                        onClick={() => updateGuestCount("rooms", 1, 1)}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                                    >
                                        <Plus className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* SEARCH BUTTON */}
                <div className="flex items-center justify-center p-3.5">
                    <button
                        type="submit"
                        className="flex h-full w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-[13px] font-semibold text-white shadow-md shadow-blue-500/10 transition-all hover:bg-blue-700 active:scale-[0.98] cursor-pointer"
                    >
                        <Search className="h-4 w-4" />
                        <span>Search Hotels</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ResortSearchBar;
