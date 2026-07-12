import { NavLink } from "react-router-dom";
import { LayoutDashboard, User, Plane, Hotel, CalendarCheck, Settings, LogOut, ShieldCheck } from "lucide-react";

const DashboardSidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18}/> },
    { name: "My Profile", path: "/dashboard/user", icon: <User size={18}/> },
    { name: "My Bookings", path: "/dashboard/bookings", icon: <CalendarCheck size={18}/> },
    { name: "Flights", path: "/dashboard/flights", icon: <Plane size={18}/> },
    { name: "Hotels", path: "/dashboard/hotels", icon: <Hotel size={18}/> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={18}/> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#a7b3cf] text-slate-300 p-5 flex flex-col justify-between border-r border-slate-800 hidden md:flex shrink-0">
      <div>
        {/* LOGO WITH PUBLIC FOLDER IMAGE & BRAND TEXT */}
        <div className="mb-8 pl-2">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/SkyVoyage.png" 
              alt="SkyVoyage Logo" 
              className="h-9 w-9 object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="text-xl font-extrabold text-white tracking-tight">
              SkyVoyage<span className="text-blue-500">.</span>
            </div>
          </NavLink>
          <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1.5 pl-0.5">
            Travel Management
          </p>
        </div>


        {/* NAVIGATION LINKS */}
        <nav className="space-y-1.5">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 font-semibold"
                    : "hover:bg-slate-800/60 hover:text-white text-slate-400"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="h-px bg-slate-800 my-6"></div>

        {/* ADMIN SHORTCUT */}
        <NavLink
          to="/dashboard/admin"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                : "hover:bg-slate-800/60 text-slate-400 hover:text-white"
            }`
          }
        >
          <ShieldCheck size={18} />
          <span>Admin Control</span>
        </NavLink>
      </div>

      {/* SIDEBAR FOOTER (LOGOUT) */}
      <button className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-200 cursor-pointer border border-transparent hover:border-rose-500/20">
        <LogOut size={18} />
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default DashboardSidebar;
