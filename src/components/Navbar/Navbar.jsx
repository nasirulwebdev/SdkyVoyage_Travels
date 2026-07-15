import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SearchModal from "../Search/SearchModal";
import SearchInput from "../Search/SearchInput";
import SearchResult from "../Search/SearchResult";

import {
    ChevronDown,
    Compass,
    Globe,
    Heart,
    Hotel,
    LayoutDashboard,
    LogOut,
    MapPin,
    Menu,
    Plane,
    Search,
    User,
    X,
} from "lucide-react";


const Navbar = () => {
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [query, setQuery] = useState("");

    const [user, setUser] = useState({
        displayName: "John Doe",
        photoURL: "https://unsplash.com",
    });


    // ==========================================
    // ACTIVE ROUTE CHECK
    // ==========================================

    const isPathActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return (
            location.pathname === path ||
            location.pathname.startsWith(`${path}/`)
        );
    };


    // ==========================================
    // LOGOUT
    // ==========================================

    const handleLogout = () => {
        console.log("Logout triggered");
        setUser(null);
        setProfileOpen(false);
    };


    // ==========================================
    // SEARCH RESULTS
    // ==========================================

    const demoResults = [
        {
            id: 1,
            title: "Thailand Tour",
            type: "Tour Package",
        },
        {
            id: 2,
            title: "Dubai Flight",
            type: "Flight",
        },
        {
            id: 3,
            title: "Cox's Bazar Hotel",
            type: "Hotel",
        },
    ];

    const filteredResults = query.trim()
        ? demoResults.filter((item) =>
              item.title
                  .toLowerCase()
                  .includes(query.toLowerCase())
          )
        : [];


    // ==========================================
    // DROPDOWN MENUS
    // ==========================================

    const dropdowns = [
        {
            title: "Destinations",
            path: "/destinations",
            items: [
                {
                    name: "Asia",
                    desc: "Explore beautiful Asian countries",
                    icon: <Globe size={18} strokeWidth={2.4} />,
                    path: "/destinations/asia",
                },
                {
                    name: "Europe",
                    desc: "Discover European destinations",
                    icon: <Compass size={18} strokeWidth={2.4} />,
                    path: "/destinations/europe",
                },
                {
                    name: "America",
                    desc: "Amazing American journeys",
                    icon: <MapPin size={18} strokeWidth={2.4} />,
                    path: "/destinations/america",
                },
                {
                    name: "Africa",
                    desc: "Safari and adventure tours",
                    icon: <Globe size={18} strokeWidth={2.4} />,
                    path: "/destinations/africa",
                },
            ],
        },

        {
            title: "Tour Packages",
            path: "/tour-packages",
            items: [
                {
                    name: "Family Tour",
                    desc: "Perfect holiday with family",
                    icon: <Heart size={18} strokeWidth={2.4} />,
                    path: "/tour-packages?category=family",
                },
                {
                    name: "Honeymoon",
                    desc: "Romantic couple packages",
                    icon: <Heart size={18} strokeWidth={2.4} />,
                    path: "/tour-packages?category=honeymoon",
                },
                {
                    name: "Adventure",
                    desc: "Thrilling travel experience",
                    icon: <Compass size={18} strokeWidth={2.4} />,
                    path: "/tour-packages?category=adventure",
                },
                {
                    name: "Luxury Tour",
                    desc: "Premium travel experience",
                    icon: <Globe size={18} strokeWidth={2.4} />,
                    path: "/tour-packages?category=luxury",
                },
            ],
        },

        {
            title: "Flights",
            path: "/flights",
            items: [
                {
                    name: "Domestic Flight",
                    desc: "Book local flights",
                    icon: <Plane size={18} strokeWidth={2.4} />,
                    path: "/flights/domestic",
                },
                {
                    name: "International Flight",
                    desc: "Global flight booking",
                    icon: <Plane size={18} strokeWidth={2.4} />,
                    path: "/flights/international",
                },
                {
                    name: "Flight Booking",
                    desc: "Easy online reservation",
                    icon: <Plane size={18} strokeWidth={2.4} />,
                    path: "/flights/booking",
                },
            ],
        },

        {
            title: "Hotels",
            path: "/hotels",
            items: [
                {
                    name: "Hotels",
                    desc: "Comfortable hotel booking",
                    icon: <Hotel size={18} strokeWidth={2.4} />,
                    path: "/hotels",
                },
                {
                    name: "Resort",
                    desc: "Luxury resort stay",
                    icon: <Hotel size={18} strokeWidth={2.4} />,
                    path: "/hotels/resort",
                },
                {
                    name: "Apartments",
                    desc: "Private apartment rental",
                    icon: <Hotel size={18} strokeWidth={2.4} />,
                    path: "/hotels/apartments",
                },
            ],
        },

        {
            title: "Visa",
            path: "/visa",
            items: [
                {
                    name: "Tourist Visa",
                    desc: "Explore the world with tourist visa assistance",
                    icon: <Globe size={18} strokeWidth={2.4} />,
                    path: "/visa/tourist",
                },
                {
                    name: "Student Visa",
                    desc: "Study abroad with professional visa support",
                    icon: <Compass size={18} strokeWidth={2.4} />,
                    path: "/visa/student",
                },
                {
                    name: "Work Visa",
                    desc: "Professional assistance for overseas work visas",
                    icon: <MapPin size={18} strokeWidth={2.4} />,
                    path: "/visa/work",
                },
            ],
        },

        {
            title: "Hajj & Umrah",
            path: "/hajj-umrah",
            items: [
                {
                    name: "Hajj Package",
                    desc: "Complete Hajj services",
                    icon: <Heart size={18} strokeWidth={2.4} />,
                    path: "/hajj-umrah/hajj-packages",
                },
                {
                    name: "Umrah Package",
                    desc: "Peaceful Umrah journey",
                    icon: <Heart size={18} strokeWidth={2.4} />,
                    path: "/hajj-umrah/umrah-package",
                },
            ],
        },
    ];


    // ==========================================
    // NORMAL LINKS
    // ==========================================

    const normalLinks = [
        {
            name: "Blog",
            path: "/blog",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];


    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md">

            <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* LOGO */}
                <NavLink
                    to="/"
                    className="group flex shrink-0 items-center gap-2.5"
                >
                    <img
                        src="/images/SkyVoyage.png"
                        alt="SkyVoyage Logo"
                        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="text-2xl font-extrabold tracking-tight text-[#0B3A82]">
                        SkyVoyage
                        <span className="text-blue-500">.</span>
                    </div>
                </NavLink>


                {/* ==========================================
                    DESKTOP MENU
                ========================================== */}

                <div className="mx-auto hidden items-center gap-6 lg:flex xl:gap-8">

                    {/* HOME */}
                    <NavLink
                        to="/"
                        className={`text-sm font-semibold transition-colors duration-300 xl:text-base ${
                            isPathActive("/")
                                ? "text-blue-700"
                                : "text-gray-700 hover:text-blue-700"
                        }`}
                    >
                        Home
                    </NavLink>


                    {/* DROPDOWNS */}
                    {dropdowns.map((menu) => {

                        const menuActive =
                            menu.path === "/destinations"
                                ? location.pathname.startsWith("/destinations")
                                : isPathActive(menu.path);

                        return (
                            <div
                                key={menu.title}
                                className="group relative"
                            >

                                {/* MENU TITLE */}
                                <div
                                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 xl:text-base ${
                                        menuActive
                                            ? "text-blue-700"
                                            : "text-gray-700 group-hover:text-blue-700"
                                    }`}
                                >
                                    <NavLink
                                        to={menu.path}
                                        className="transition-colors"
                                    >
                                        {menu.title}
                                    </NavLink>

                                    <ChevronDown
                                        size={15}
                                        strokeWidth={2.6}
                                        className={`transition-all duration-300 group-hover:rotate-180 ${
                                            menuActive
                                                ? "text-blue-700"
                                                : "text-gray-400 group-hover:text-blue-700"
                                        }`}
                                    />
                                </div>


                                {/* DROPDOWN BOX */}
                                <div className="invisible absolute -left-4 top-full z-50 w-72 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                                    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">

                                        <div className="space-y-1">

                                            {menu.items.map((item) => {

                                                const itemPath =
                                                    item.path.split("?")[0];

                                                const itemActive =
                                                    location.pathname ===
                                                    itemPath;

                                                return (
                                                    <NavLink
                                                        key={item.name}
                                                        to={item.path}
                                                        className={`group/item flex items-start gap-3 rounded-xl p-2.5 transition-all duration-300 ${
                                                            itemActive
                                                                ? "bg-blue-50"
                                                                : "hover:bg-blue-50/70"
                                                        }`}
                                                    >
                                                        <div
                                                            className={`mt-1 shrink-0 transition-all duration-300 group-hover/item:scale-110 ${
                                                                itemActive
                                                                    ? "text-blue-700"
                                                                    : "text-blue-600"
                                                            }`}
                                                        >
                                                            {item.icon}
                                                        </div>

                                                        <div>
                                                            <h4
                                                                className={`text-sm font-bold transition-colors ${
                                                                    itemActive
                                                                        ? "text-blue-700"
                                                                        : "text-gray-800 group-hover/item:text-blue-700"
                                                                }`}
                                                            >
                                                                {item.name}
                                                            </h4>

                                                            <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </NavLink>
                                                );
                                            })}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}


                    {/* NORMAL LINKS */}
                    {normalLinks.map((link) => {

                        const linkActive =
                            isPathActive(link.path);

                        return (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-semibold transition-colors duration-300 xl:text-base ${
                                    linkActive
                                        ? "text-blue-700"
                                        : "text-gray-700 hover:text-blue-700"
                                }`}
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}

                </div>


                {/* ==========================================
                    RIGHT SIDE
                ========================================== */}

                <div className="relative hidden shrink-0 items-center justify-end gap-4 lg:flex">

                    {/* SEARCH */}
                    <button
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        aria-label="Open search"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                        <Search
                            size={20}
                            strokeWidth={2.5}
                        />
                    </button>


                    {/* USER */}
                    {user ? (
                        <div className="relative">

                            <button
                                type="button"
                                onClick={() =>
                                    setProfileOpen(
                                        (previous) => !previous
                                    )
                                }
                                className="flex cursor-pointer items-center gap-1.5 rounded-full p-1 pr-2 transition hover:bg-gray-100"
                            >
                                <img
                                    src={
                                        user.photoURL ||
                                        "https://w3schools.com"
                                    }
                                    alt="Profile"
                                    className="h-9 w-9 rounded-full border-2 border-blue-600 object-cover"
                                />

                                <ChevronDown
                                    size={14}
                                    strokeWidth={2.5}
                                    className={`text-gray-500 transition-transform duration-300 ${
                                        profileOpen
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>


                            {/* USER DROPDOWN */}
                            {profileOpen && (
                                <div className="absolute right-0 z-50 mt-3 w-56 rounded-2xl border border-gray-100 bg-white py-2.5 shadow-2xl">

                                    <div className="mb-1.5 border-b border-gray-100 px-4 py-2">
                                        <p className="truncate text-sm font-bold text-gray-800">
                                            {user.displayName}
                                        </p>

                                        <p className="truncate text-xs text-gray-400">
                                            Logged in successfully
                                        </p>
                                    </div>


                                    <NavLink
                                        to="/profile"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <User
                                            size={16}
                                            strokeWidth={2.5}
                                        />

                                        <span>My Profile</span>
                                    </NavLink>


                                    <NavLink
                                        to="/dashboard"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <LayoutDashboard
                                            size={16}
                                            strokeWidth={2.5}
                                        />

                                        <span>Dashboard</span>
                                    </NavLink>


                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="mt-1 flex w-full items-center gap-3 border-t border-gray-100 px-4 py-2 pt-2.5 text-left text-sm text-rose-600 transition hover:bg-rose-50"
                                    >
                                        <LogOut
                                            size={16}
                                            strokeWidth={2.5}
                                        />

                                        <span>Sign Out</span>
                                    </button>

                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-700/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
                        >
                            Book Now
                        </button>
                    )}

                </div>


                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    onClick={() =>
                        setOpen((previous) => !previous)
                    }
                    aria-label="Toggle navigation"
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-blue-50 hover:text-blue-700 lg:hidden"
                >
                    {open ? (
                        <X
                            size={24}
                            strokeWidth={2.6}
                        />
                    ) : (
                        <Menu
                            size={24}
                            strokeWidth={2.6}
                        />
                    )}
                </button>

            </div>


            {/* ==========================================
                MOBILE DRAWER
            ========================================== */}

            {open && (
                <div className="space-y-4 border-t border-gray-100 bg-white px-5 py-5 shadow-inner lg:hidden">

                    {user && (
                        <div className="mb-2 flex items-center gap-3 border-b border-gray-100 pb-3">

                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="h-10 w-10 rounded-full border border-blue-500 object-cover"
                            />

                            <div>
                                <p className="text-sm font-bold text-gray-900">
                                    {user.displayName}
                                </p>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="mt-0.5 text-xs font-semibold text-rose-500"
                                >
                                    Sign Out
                                </button>
                            </div>

                        </div>
                    )}


                    {/* MOBILE HOME */}
                    <NavLink
                        to="/"
                        onClick={() => setOpen(false)}
                        className={`block font-semibold transition ${
                            isPathActive("/")
                                ? "text-blue-700"
                                : "text-gray-800 hover:text-blue-700"
                        }`}
                    >
                        Home
                    </NavLink>


                    {/* MOBILE DROPDOWNS */}
                    {dropdowns.map((menu) => {

                        const menuActive =
                            menu.path === "/destinations"
                                ? location.pathname.startsWith(
                                      "/destinations"
                                  )
                                : isPathActive(menu.path);

                        return (
                            <div
                                key={menu.title}
                                className="space-y-1"
                            >

                                <NavLink
                                    to={menu.path}
                                    onClick={() => setOpen(false)}
                                    className={`block pt-1 text-sm font-bold transition ${
                                        menuActive
                                            ? "text-blue-700"
                                            : "text-gray-900 hover:text-blue-700"
                                    }`}
                                >
                                    {menu.title}
                                </NavLink>


                                <div className="ml-3 mt-1 space-y-2 border-l-2 border-gray-100 pl-3">

                                    {menu.items.map((item) => {

                                        const itemPath =
                                            item.path.split("?")[0];

                                        const itemActive =
                                            location.pathname ===
                                            itemPath;

                                        return (
                                            <NavLink
                                                key={item.name}
                                                to={item.path}
                                                onClick={() =>
                                                    setOpen(false)
                                                }
                                                className={`block py-0.5 text-sm font-medium transition ${
                                                    itemActive
                                                        ? "text-blue-700"
                                                        : "text-gray-600 hover:text-blue-600"
                                                }`}
                                            >
                                                {item.name}
                                            </NavLink>
                                        );
                                    })}

                                </div>
                            </div>
                        );
                    })}


                    {/* MOBILE NORMAL LINKS */}
                    {normalLinks.map((link) => {

                        const linkActive =
                            isPathActive(link.path);

                        return (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() =>
                                    setOpen(false)
                                }
                                className={`block pt-1 font-semibold transition ${
                                    linkActive
                                        ? "text-blue-700"
                                        : "text-gray-800 hover:text-blue-700"
                                }`}
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}


                    {!user && (
                        <button
                            type="button"
                            className="mt-4 w-full rounded-xl bg-blue-700 py-3 font-bold text-white shadow-lg shadow-blue-700/10 transition hover:bg-blue-800"
                        >
                            Book Now
                        </button>
                    )}

                </div>
            )}


            {/* ==========================================
                SEARCH MODAL
            ========================================== */}

            <SearchModal
                open={searchOpen}
                onClose={() => {
                    setSearchOpen(false);
                    setQuery("");
                }}
            >
                <SearchInput
                    value={query}
                    onChange={(event) =>
                        setQuery(event.target.value)
                    }
                />

                <SearchResult
                    results={filteredResults}
                />
            </SearchModal>

        </nav>
    );
};


export default Navbar;