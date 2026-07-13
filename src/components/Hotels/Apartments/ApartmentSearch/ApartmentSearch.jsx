import {
    MapPin,
    CalendarDays,
    UsersRound,
    ChevronDown,
    Search,
    Minus,
    Plus,
} from "lucide-react";

import {
    useEffect,
    useRef,
    useState,
} from "react";

const ApartmentSearch = ({
    onSearch,
}) => {
    const [destination, setDestination] =
        useState("");

    const [checkIn, setCheckIn] =
        useState("");

    const [checkOut, setCheckOut] =
        useState("");

    const [guests, setGuests] =
        useState(2);

    const [rooms, setRooms] =
        useState(1);

    const [
        isGuestDropdownOpen,
        setIsGuestDropdownOpen,
    ] = useState(false);

    const guestDropdownRef =
        useRef(null);

    /* =========================
       TODAY DATE
    ========================= */

    const today = new Date()
        .toISOString()
        .split("T")[0];

    /* =========================
       CLOSE GUEST DROPDOWN
    ========================= */

    useEffect(() => {
        const handleOutsideClick = (
            event
        ) => {
            if (
                guestDropdownRef.current &&
                !guestDropdownRef.current.contains(
                    event.target
                )
            ) {
                setIsGuestDropdownOpen(
                    false
                );
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

    /* =========================
       CHECK IN CHANGE
    ========================= */

    const handleCheckInChange = (
        event
    ) => {
        const selectedDate =
            event.target.value;

        setCheckIn(selectedDate);

        // Check Out যদি Check In-এর
        // আগে বা একই date হয়, reset হবে
        if (
            checkOut &&
            checkOut <= selectedDate
        ) {
            setCheckOut("");
        }
    };

    /* =========================
       SEARCH
    ========================= */

    const handleSearch = () => {
        const searchData = {
            destination:
                destination.trim(),
            checkIn,
            checkOut,
            guests,
            rooms,
        };

        onSearch?.(searchData);
    };

    return (
        <section className="relative z-30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Search Container */}

                <div
                    className="
                        -mt-14
                        rounded-xl
                        border
                        border-slate-200/80
                        bg-white
                        p-3
                        shadow-[0_15px_45px_rgba(15,23,42,0.14)]
                    "
                >
                    <div
                        className="
                            grid
                            grid-cols-1
                            items-center
                            gap-0
                            md:grid-cols-2
                            xl:grid-cols-[1.45fr_1fr_1fr_1.1fr_auto]
                        "
                    >
                        {/* =========================
                            DESTINATION
                        ========================= */}

                        <div
                            className="
                                flex
                                min-h-[72px]
                                items-center
                                gap-3
                                px-4
                                xl:border-r
                                xl:border-slate-200
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue-50
                                "
                            >
                                <MapPin
                                    size={19}
                                    className="text-blue-600"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <label
                                    htmlFor="apartment-destination"
                                    className="
                                        block
                                        text-[11px]
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    Destination
                                </label>

                                <input
                                    id="apartment-destination"
                                    type="text"
                                    value={
                                        destination
                                    }
                                    onChange={(
                                        event
                                    ) =>
                                        setDestination(
                                            event
                                                .target
                                                .value
                                        )
                                    }
                                    placeholder="Where are you going?"
                                    className="
                                        mt-1
                                        w-full
                                        bg-transparent
                                        text-sm
                                        text-slate-900
                                        outline-none
                                        placeholder:text-slate-500
                                    "
                                />
                            </div>
                        </div>

                        {/* =========================
                            CHECK IN
                        ========================= */}

                        <div
                            className="
                                flex
                                min-h-[72px]
                                items-center
                                gap-3
                                px-4
                                xl:border-r
                                xl:border-slate-200
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue-50
                                "
                            >
                                <CalendarDays
                                    size={18}
                                    className="text-blue-600"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <label
                                    htmlFor="apartment-check-in"
                                    className="
                                        block
                                        text-[11px]
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    Check In
                                </label>

                                <input
                                    id="apartment-check-in"
                                    type="date"
                                    value={checkIn}
                                    min={today}
                                    onChange={
                                        handleCheckInChange
                                    }
                                    className="
                                        mt-1
                                        w-full
                                        cursor-pointer
                                        bg-transparent
                                        text-sm
                                        text-slate-600
                                        outline-none
                                    "
                                />
                            </div>
                        </div>

                        {/* =========================
                            CHECK OUT
                        ========================= */}

                        <div
                            className="
                                flex
                                min-h-[72px]
                                items-center
                                gap-3
                                px-4
                                xl:border-r
                                xl:border-slate-200
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue-50
                                "
                            >
                                <CalendarDays
                                    size={18}
                                    className="text-blue-600"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <label
                                    htmlFor="apartment-check-out"
                                    className="
                                        block
                                        text-[11px]
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    Check Out
                                </label>

                                <input
                                    id="apartment-check-out"
                                    type="date"
                                    value={checkOut}
                                    min={
                                        checkIn ||
                                        today
                                    }
                                    onChange={(
                                        event
                                    ) =>
                                        setCheckOut(
                                            event
                                                .target
                                                .value
                                        )
                                    }
                                    className="
                                        mt-1
                                        w-full
                                        cursor-pointer
                                        bg-transparent
                                        text-sm
                                        text-slate-600
                                        outline-none
                                    "
                                />
                            </div>
                        </div>

                        {/* =========================
                            GUESTS & ROOMS
                        ========================= */}

                        <div
                            ref={
                                guestDropdownRef
                            }
                            className="
                                relative
                                min-h-[72px]
                            "
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setIsGuestDropdownOpen(
                                        (
                                            previous
                                        ) =>
                                            !previous
                                    )
                                }
                                className="
                                    flex
                                    min-h-[72px]
                                    w-full
                                    items-center
                                    gap-3
                                    px-4
                                    text-left
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-blue-50
                                    "
                                >
                                    <UsersRound
                                        size={
                                            19
                                        }
                                        className="text-blue-600"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-[11px] font-semibold text-slate-700">
                                        Guests &
                                        Rooms
                                    </p>

                                    <p className="mt-1 whitespace-nowrap text-sm text-slate-600">
                                        {
                                            guests
                                        }{" "}
                                        Guests,{" "}
                                        {
                                            rooms
                                        }{" "}
                                        Room
                                        {rooms >
                                        1
                                            ? "s"
                                            : ""}
                                    </p>
                                </div>

                                <ChevronDown
                                    size={15}
                                    className={`
                                        text-slate-600
                                        transition-transform
                                        ${
                                            isGuestDropdownOpen
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />
                            </button>

                            {/* Dropdown */}

                            {isGuestDropdownOpen && (
                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-[78px]
                                        z-50
                                        w-[280px]
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        shadow-xl
                                    "
                                >
                                    {/* Guests */}

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">
                                                Guests
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                Number
                                                of
                                                guests
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setGuests(
                                                        (
                                                            previous
                                                        ) =>
                                                            Math.max(
                                                                1,
                                                                previous -
                                                                    1
                                                            )
                                                    )
                                                }
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
                                                    hover:border-blue-600
                                                    hover:text-blue-600
                                                "
                                            >
                                                <Minus
                                                    size={
                                                        15
                                                    }
                                                />
                                            </button>

                                            <span className="w-5 text-center text-sm font-semibold text-slate-900">
                                                {
                                                    guests
                                                }
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setGuests(
                                                        (
                                                            previous
                                                        ) =>
                                                            Math.min(
                                                                20,
                                                                previous +
                                                                    1
                                                            )
                                                    )
                                                }
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
                                                    hover:border-blue-600
                                                    hover:text-blue-600
                                                "
                                            >
                                                <Plus
                                                    size={
                                                        15
                                                    }
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="my-4 border-t border-slate-100" />

                                    {/* Rooms */}

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">
                                                Rooms
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                Number
                                                of
                                                rooms
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setRooms(
                                                        (
                                                            previous
                                                        ) =>
                                                            Math.max(
                                                                1,
                                                                previous -
                                                                    1
                                                            )
                                                    )
                                                }
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
                                                    hover:border-blue-600
                                                    hover:text-blue-600
                                                "
                                            >
                                                <Minus
                                                    size={
                                                        15
                                                    }
                                                />
                                            </button>

                                            <span className="w-5 text-center text-sm font-semibold text-slate-900">
                                                {
                                                    rooms
                                                }
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setRooms(
                                                        (
                                                            previous
                                                        ) =>
                                                            Math.min(
                                                                10,
                                                                previous +
                                                                    1
                                                            )
                                                    )
                                                }
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
                                                    hover:border-blue-600
                                                    hover:text-blue-600
                                                "
                                            >
                                                <Plus
                                                    size={
                                                        15
                                                    }
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsGuestDropdownOpen(
                                                false
                                            )
                                        }
                                        className="
                                            mt-5
                                            w-full
                                            rounded-lg
                                            bg-blue-600
                                            py-2.5
                                            text-sm
                                            font-semibold
                                            text-white
                                            transition
                                            hover:bg-blue-700
                                        "
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* =========================
                            SEARCH BUTTON
                        ========================= */}

                        <div className="p-2">
                            <button
                                type="button"
                                onClick={
                                    handleSearch
                                }
                                className="
                                    flex
                                    h-14
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    whitespace-nowrap
                                    rounded-lg
                                    bg-blue-600
                                    px-7
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-blue-700
                                    xl:w-auto
                                "
                            >
                                <Search
                                    size={18}
                                />

                                Search Apartments
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApartmentSearch;