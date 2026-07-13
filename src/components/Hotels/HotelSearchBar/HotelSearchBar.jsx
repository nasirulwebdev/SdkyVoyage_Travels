import { useEffect, useRef, useState } from "react";
import {
    MapPin,
    CalendarDays,
    Users,
    Search,
    ChevronDown,
    Minus,
    Plus,
} from "lucide-react";

const HotelSearchBar = ({
    searchData,
    setSearchData,
    onSearch,
}) => {
    const [isGuestOpen, setIsGuestOpen] = useState(false);
    const guestDropdownRef = useRef(null);

    // ==========================================
    // NORMAL INPUT CHANGE
    // ==========================================

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setSearchData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    // ==========================================
    // CHECK IN CHANGE
    // ==========================================

    const handleCheckInChange = (event) => {
        const newCheckIn = event.target.value;

        setSearchData((previousData) => {
            let updatedCheckOut = previousData.checkOut;

            // Check-out check-in এর আগে হলে reset
            if (
                updatedCheckOut &&
                updatedCheckOut <= newCheckIn
            ) {
                updatedCheckOut = "";
            }

            return {
                ...previousData,
                checkIn: newCheckIn,
                checkOut: updatedCheckOut,
            };
        });
    };

    // ==========================================
    // GUEST COUNTER
    // ==========================================

    const updateGuestCount = (
        field,
        operation,
        minimum,
        maximum
    ) => {
        setSearchData((previousData) => {
            const currentValue = Number(
                previousData[field]
            );

            const newValue =
                operation === "increase"
                    ? Math.min(currentValue + 1, maximum)
                    : Math.max(currentValue - 1, minimum);

            return {
                ...previousData,
                [field]: newValue,
            };
        });
    };

    // ==========================================
    // CLOSE DROPDOWN ON OUTSIDE CLICK
    // ==========================================

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                guestDropdownRef.current &&
                !guestDropdownRef.current.contains(
                    event.target
                )
            ) {
                setIsGuestOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, []);

    // ==========================================
    // SEARCH
    // ==========================================

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        setIsGuestOpen(false);

        onSearch();
    };

    return (
        <section
            className="
                relative
                z-30
                -mt-8
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1280px]
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                <form
                    onSubmit={handleSearchSubmit}
                    className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        p-3
                        shadow-[0_12px_35px_rgba(15,23,42,0.12)]
                    "
                >
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-2
                            md:grid-cols-2
                            xl:grid-cols-[1.2fr_1fr_1fr_1.2fr_170px]
                        "
                    >
                        {/* ==================================
                            DESTINATION
                        =================================== */}
                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-slate-200
                                px-4
                                py-3
                                transition
                                focus-within:border-emerald-500
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-emerald-50
                                    text-emerald-600
                                "
                            >
                                <MapPin size={17} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <label
                                    htmlFor="hotel-destination"
                                    className="
                                        block
                                        text-[10px]
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    Destination
                                </label>

                                <input
                                    id="hotel-destination"
                                    type="text"
                                    name="destination"
                                    value={
                                        searchData.destination
                                    }
                                    onChange={handleInputChange}
                                    placeholder="Where are you going?"
                                    className="
                                        mt-1
                                        w-full
                                        bg-transparent
                                        text-[12px]
                                        text-slate-700
                                        outline-none
                                        placeholder:text-slate-400
                                    "
                                />
                            </div>
                        </div>

                        {/* ==================================
                            CHECK IN
                        =================================== */}
                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-slate-200
                                px-4
                                py-3
                                transition
                                focus-within:border-emerald-500
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-emerald-50
                                    text-emerald-600
                                "
                            >
                                <CalendarDays size={17} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <label
                                    htmlFor="hotel-check-in"
                                    className="
                                        block
                                        text-[10px]
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    Check In
                                </label>

                                <input
                                    id="hotel-check-in"
                                    type="date"
                                    name="checkIn"
                                    value={searchData.checkIn}
                                    onChange={handleCheckInChange}
                                    className="
                                        mt-1
                                        w-full
                                        bg-transparent
                                        text-[12px]
                                        text-slate-700
                                        outline-none
                                    "
                                />
                            </div>
                        </div>

                        {/* ==================================
                            CHECK OUT
                        =================================== */}
                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-slate-200
                                px-4
                                py-3
                                transition
                                focus-within:border-emerald-500
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-emerald-50
                                    text-emerald-600
                                "
                            >
                                <CalendarDays size={17} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <label
                                    htmlFor="hotel-check-out"
                                    className="
                                        block
                                        text-[10px]
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    Check Out
                                </label>

                                <input
                                    id="hotel-check-out"
                                    type="date"
                                    name="checkOut"
                                    value={searchData.checkOut}
                                    min={
                                        searchData.checkIn ||
                                        undefined
                                    }
                                    onChange={handleInputChange}
                                    className="
                                        mt-1
                                        w-full
                                        bg-transparent
                                        text-[12px]
                                        text-slate-700
                                        outline-none
                                    "
                                />
                            </div>
                        </div>

                        {/* ==================================
                            GUESTS & ROOMS
                        =================================== */}
                        <div
                            ref={guestDropdownRef}
                            className="relative"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setIsGuestOpen(
                                        (previous) => !previous
                                    )
                                }
                                className="
                                    flex
                                    h-full
                                    min-h-[66px]
                                    w-full
                                    items-center
                                    gap-3
                                    rounded-lg
                                    border
                                    border-slate-200
                                    px-4
                                    py-3
                                    text-left
                                    transition
                                    hover:border-emerald-400
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-emerald-50
                                        text-emerald-600
                                    "
                                >
                                    <Users size={17} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <span
                                        className="
                                            block
                                            text-[10px]
                                            font-bold
                                            text-slate-800
                                        "
                                    >
                                        Guests & Rooms
                                    </span>

                                    <span
                                        className="
                                            mt-1
                                            block
                                            truncate
                                            text-[12px]
                                            text-slate-600
                                        "
                                    >
                                        {searchData.adults} Adults,{" "}
                                        {searchData.children} Children,{" "}
                                        {searchData.rooms}{" "}
                                        {searchData.rooms === 1
                                            ? "Room"
                                            : "Rooms"}
                                    </span>
                                </div>

                                <ChevronDown
                                    size={15}
                                    className={`
                                        shrink-0
                                        text-slate-400
                                        transition-transform
                                        ${
                                            isGuestOpen
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />
                            </button>

                            {/* GUEST DROPDOWN */}
                            {isGuestOpen && (
                                <div
                                    className="
                                        absolute
                                        left-0
                                        right-0
                                        top-[calc(100%+8px)]
                                        z-50
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        shadow-[0_18px_45px_rgba(15,23,42,0.16)]
                                    "
                                >
                                    {/* ADULTS */}
                                    <GuestCounter
                                        title="Adults"
                                        subtitle="Age 13+"
                                        value={
                                            searchData.adults
                                        }
                                        onDecrease={() =>
                                            updateGuestCount(
                                                "adults",
                                                "decrease",
                                                1,
                                                20
                                            )
                                        }
                                        onIncrease={() =>
                                            updateGuestCount(
                                                "adults",
                                                "increase",
                                                1,
                                                20
                                            )
                                        }
                                    />

                                    {/* CHILDREN */}
                                    <GuestCounter
                                        title="Children"
                                        subtitle="Age 0–12"
                                        value={
                                            searchData.children
                                        }
                                        onDecrease={() =>
                                            updateGuestCount(
                                                "children",
                                                "decrease",
                                                0,
                                                10
                                            )
                                        }
                                        onIncrease={() =>
                                            updateGuestCount(
                                                "children",
                                                "increase",
                                                0,
                                                10
                                            )
                                        }
                                    />

                                    {/* ROOMS */}
                                    <GuestCounter
                                        title="Rooms"
                                        subtitle="Maximum 10 rooms"
                                        value={
                                            searchData.rooms
                                        }
                                        onDecrease={() =>
                                            updateGuestCount(
                                                "rooms",
                                                "decrease",
                                                1,
                                                10
                                            )
                                        }
                                        onIncrease={() =>
                                            updateGuestCount(
                                                "rooms",
                                                "increase",
                                                1,
                                                10
                                            )
                                        }
                                        last
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsGuestOpen(false)
                                        }
                                        className="
                                            mt-4
                                            h-9
                                            w-full
                                            rounded-md
                                            bg-emerald-600
                                            text-[11px]
                                            font-bold
                                            text-white
                                            transition
                                            hover:bg-emerald-700
                                        "
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* ==================================
                            SEARCH BUTTON
                        =================================== */}
                        <button
                            type="submit"
                            className="
                                flex
                                min-h-[66px]
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-emerald-600
                                px-5
                                text-[12px]
                                font-bold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-emerald-700
                                active:scale-[0.98]
                            "
                        >
                            <Search size={17} />
                            Search Hotels
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

// ==============================================
// REUSABLE GUEST COUNTER
// ==============================================

const GuestCounter = ({
    title,
    subtitle,
    value,
    onDecrease,
    onIncrease,
    last = false,
}) => {
    return (
        <div
            className={`
                flex
                items-center
                justify-between
                py-3
                ${!last ? "border-b border-slate-100" : ""}
            `}
        >
            <div>
                <p className="text-[12px] font-bold text-slate-800">
                    {title}
                </p>

                <p className="mt-0.5 text-[9px] text-slate-400">
                    {subtitle}
                </p>
            </div>

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onDecrease}
                    className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        text-slate-600
                        transition
                        hover:border-emerald-600
                        hover:text-emerald-600
                    "
                >
                    <Minus size={13} />
                </button>

                <span
                    className="
                        min-w-5
                        text-center
                        text-[12px]
                        font-bold
                        text-slate-800
                    "
                >
                    {value}
                </span>

                <button
                    type="button"
                    onClick={onIncrease}
                    className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        text-slate-600
                        transition
                        hover:border-emerald-600
                        hover:text-emerald-600
                    "
                >
                    <Plus size={13} />
                </button>
            </div>
        </div>
    );
};

export default HotelSearchBar;