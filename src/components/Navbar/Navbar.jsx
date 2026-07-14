import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchModal from "../Search/SearchModal";
import SearchInput from "../Search/SearchInput";
import SearchResult from "../Search/SearchResult";

import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  MapPin,
  Plane,
  Hotel,
  Heart,
  Compass,
  User,
  LogOut,
  LayoutDashboard
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [query, setQuery] = useState("");

  // ডেমো ইউজার স্টেট
  const [user, setUser] = useState({
    displayName: "John Doe",
    photoURL: "https://unsplash.com"
  });

  const handleLogout = () => {
    console.log("Logout triggered");
    setUser(null);
    setProfileOpen(false);
  };

  const demoResults = [
    { id: 1, title: "Thailand Tour", type: "Tour Package" },
    { id: 2, title: "Dubai Flight", type: "Flight" },
    { id: 3, title: "Cox's Bazar Hotel", type: "Hotel" },
  ];

  const dropdowns = [
    {
      title: "Destinations",
      items: [
        { name: "Asia", desc: "Explore beautiful Asian countries", icon: <Globe size={18}/>, path: "/destinations/asia" },
        { name: "Europe", desc: "Discover European destinations", icon: <Compass size={18}/>, path: "/destinations/europe" },
        { name: "America", desc: "Amazing American journeys", icon: <MapPin size={18}/>, path: "/destinations/america" },
        { name: "Africa", desc: "Safari and adventure tours", icon: <Globe size={18}/>, path: "/destinations/africa" }
      ]
    },
      {
      title: "Tour Packages",
      path: "/tour-packages",
      items: [
        {
          name: "Family Tour",
          desc: "Perfect holiday with family",
          icon: <Heart size={18} />,
          path: "/tour-packages?category=family"
        },
        {
          name: "Honeymoon",
          desc: "Romantic couple packages",
          icon: <Heart size={18} />,
          path: "/tour-packages?category=honeymoon"
        },
        {
          name: "Adventure",
          desc: "Thrilling travel experience",
          icon: <Compass size={18} />,
          path: "/tour-packages?category=adventure"
        },
        {
          name: "Luxury Tour",
          desc: "Premium travel experience",
          icon: <Globe size={18} />,
          path: "/tour-packages?category=luxury"
        }
      ]
    },
    {
      title: "Flights",
      path: "/flights",
      items: [
        {
          name: "Domestic Flight",
          desc: "Book local flights",
          icon: <Plane size={18} />,
          path: "/flights/domestic"
        },
        {
          name: "International Flight",
          desc: "Global flight booking",
          icon: <Plane size={18} />,
          path: "/flights/international"
        },
        {
          name: "Flight Booking",
          desc: "Easy online reservation",
          icon: <Plane size={18} />,
          path: "/flights/booking"
        }
      ]
    },
    {
      title: "Hotels",
      path: "/hotels",
      items: [
          {
              name: "Hotels",
              desc: "Comfortable hotel booking",
              icon: <Hotel size={18} />,
              path: "/hotels"
          },
          {
              name: "Resort",
              desc: "Luxury resort stay",
              icon: <Hotel size={18} />,
              path: "/hotels/resort"
          },
          {
              name: "Apartments",
              desc: "Private apartment rental",
              icon: <Hotel size={18} />,
              path: "/hotels/apartments"
          }
      ]
  },

  {
      title: "Visa",
      path: "/visa",
      items: [
          {
              name: "Tourist Visa",
              desc: "Explore the world with tourist visa assistance",
              icon: <Globe size={18} />,
              path: "/visa/tourist",
          },
          {
              name: "Student Visa",
              desc: "Study abroad with professional visa support",
              icon: <Compass size={18} />,
              path: "/visa/student",
          },
          {
              name: "Work Visa",
              desc: "Professional assistance for overseas work visas",
              icon: <MapPin size={18} />,
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
              icon: <Heart size={18} />,
              path: "/hajj-umrah/hajj-packages",
          },
          {
              name: "Umrah Package",
              desc: "Peaceful Umrah journey",
              icon: <Heart size={18} />,
              path: "/hajj-umrah/umrah-package",
          },
      ],
  }
  ];

  const normalLinks = [
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between w-full">
        
        {/* LOGO AREA - DIRECT STRING PATH FIXED */}
        <NavLink to="/" className="flex items-center gap-2.5 group shrink-0">
          <img 
            src="/images/SkyVoyage.png" 
            alt="SkyVoyage Logo" 
            className="h-10 w-10 object-contain group-hover:scale-105
             transition-transform duration-200"
          />
          <div className="text-2xl font-extrabold text-[#0B3A82] tracking-tight">
            SkyVoyage<span className="text-blue-500">.</span>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
          <NavLink
            to="/"
            className="font-medium text-gray-700 hover:text-blue-700 transition text-sm xl:text-base"
          >
            Home
          </NavLink>

          {dropdowns.map((menu, index) => (
            <div key={index} className="relative group">
              
              {/* MENU TITLE */}
              <div className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700 transition text-sm xl:text-base">
                  {menu.path ? (
                      <NavLink
                          to={menu.path}
                          className="hover:text-blue-700 transition"
                      >
                          {menu.title}
                      </NavLink>
                  ) : (
                      <span className="cursor-pointer">
                          {menu.title}
                      </span>
                  )}

                  <ChevronDown
                      size={14}
                      className="text-gray-400 group-hover:text-blue-700 transition-colors"
                  />
              </div>

              {/* DROPDOWN BOX */}
              <div className="absolute top-full mt-3 -left-4 hidden group-hover:block w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 transition-all">
                <div className="space-y-1">
                  {menu.items.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.path}
                      className="flex gap-3 items-start p-2.5 rounded-xl hover:bg-blue-50/70 transition group/item"
                    >
                      <div className="mt-1 text-blue-600 group-hover/item:scale-110 transition shrink-0">
                        {item.icon}
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm group-hover/item:text-blue-700">
                          {item.name}
                        </h4>

                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {normalLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="font-medium text-gray-700 hover:text-blue-700 transition text-sm xl:text-base"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 justify-end relative">
          <button
            onClick={() => setSearchOpen(true)}
            className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700 transition"
          >
            <Search size={20} />
          </button>

          {user ? (
            <div className="relative">
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-1.5 p-1 pr-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
              >
                <img 
                  src={user.photoURL || "https://w3schools.com"} 
                  alt="Profile" 
                  className="w-9 h-9 rounded-full object-cover border-2 border-blue-600"
                />
                <ChevronDown size={14} className={`text-gray-500 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* USER DROPDOWN */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2.5 z-50">
                  <div className="px-4 py-2 border-b border-gray-100 mb-1.5">
                    <p className="text-sm font-bold text-gray-800 truncate">{user.displayName}</p>
                    <p className="text-xs text-gray-400 truncate">Logged in successfully</p>
                  </div>
                  
                  <NavLink to="/profile" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 transition">
                    <User size={16} className="text-gray-400" />
                    <span>My Profile</span>
                  </NavLink>

                  <NavLink to="/dashboard" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 transition">
                    <LayoutDashboard size={16} className="text-gray-400" />
                    <span>Dashboard</span>
                  </NavLink>

                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50/50 transition text-left mt-1 border-t border-gray-100 pt-2.5"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-800 shadow-md shadow-blue-700/10 hover:shadow-blue-700/20 text-sm transition">
              Book Now
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-700 transition">
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-5 py-5 space-y-4 shadow-inner">
          {user && (
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-2">
              <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-blue-500" />
              <div>
                <p className="font-bold text-gray-900 text-sm">{user.displayName}</p>
                <button onClick={handleLogout} className="text-xs text-rose-500 font-semibold mt-0.5">Sign Out</button>
              </div>
            </div>
          )}

          <NavLink to="/" onClick={() => setOpen(false)} className="block font-medium text-gray-800">
            Home
          </NavLink>

          {dropdowns.map((menu, index) => (
            <div key={index} className="space-y-1">
             {menu.path ? (
                  <NavLink
                      to={menu.path}
                      onClick={() => setOpen(false)}
                      className="block font-semibold text-gray-900 text-sm pt-1 hover:text-blue-700 transition"
                  >
                      {menu.title}
                  </NavLink>
              ) : (
                  <p className="font-semibold text-gray-900 text-sm pt-1">
                      {menu.title}
                  </p>
              )}
              <div className="ml-3 border-l-2 border-gray-100 pl-3 mt-1 space-y-2">
                {menu.items.map((item, i) => (
                  <NavLink key={i} to={item.path} onClick={() => setOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 py-0.5">
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          {normalLinks.map(link => (
            <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className="block font-medium text-gray-800 pt-1">
              {link.name}
            </NavLink>
          ))}

          {!user && (
            <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-700/10 mt-4">
              Book Now
            </button>
          )}
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)}>
        <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
        <SearchResult results={[]} />
      </SearchModal>
    </nav>
  );
};

export default Navbar;
