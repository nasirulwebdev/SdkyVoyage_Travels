import { Bell, Search, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  // ডেমো ইউজার স্টেট (পরবর্তীতে ফায়ারবেস অথ দিয়ে রিপ্লেস করতে পারবেন)
  const [user, setUser] = useState({
    displayName: "Nasir",
    photoURL: null // এখানে ইমেজ লিঙ্ক না থাকলে 'N' লেটার লোগো দেখাবে
  });

  const handleLogout = () => {
    console.log("Sign Out Triggered");
    setUser(null); // ডেমো লগআউট অ্যাকশন
    setProfileOpen(false);
  };
    return (
    // bg-white এবং border-slate-100 দিয়ে ন্যাভবারটিকে নিচের ব্যাকগ্রাউন্ড থেকে আলাদা করা হয়েছে
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 sm:px-8 md:px-10 sticky top-0 z-40 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] w-full">
      
      {/* LEFT SIDE - PAGE BRANDING & SUBTITLE */}
      <div className="flex flex-col text-left">
        <h2 className="text-lg font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
          SkyVoyage Panel
        </h2>
        <p className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block mt-0.5">
          Welcome back to your travel space
        </p>
      </div>

      {/* RIGHT CONTROLS - PERFECTLY SPACED */}
      <div className="flex items-center gap-4 sm:gap-6">
        
        {/* RE-DESIGNED SEARCH BAR */}
        <div className="hidden md:flex items-center bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-2 w-80 focus-within:border-blue-500 focus-within:bg-white focus-within:shadow-[0_4px_12px_-2px_rgba(59,130,246,0.08)] transition-all duration-200 group">
          <Search size={16} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search bookings, receipts, flights..."
            className="bg-transparent outline-none ml-2.5 text-sm w-full text-slate-700 placeholder-slate-400 font-medium"
          />
        </div>

        {/* NOTIFICATION BUTTON */}
        <button className="relative h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200/60 hover:border-slate-300 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-all duration-200 cursor-pointer shadow-sm">
          <Bell size={18} />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
        </button>

        {/* USER ACCOUNT ACTIONS */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 p-1.5 pr-2.5 hover:bg-slate-50 border border-slate-200/40 hover:border-slate-200 rounded-xl transition-all duration-200 cursor-pointer shadow-sm bg-white"
          >
            {/* প্রিমিয়াম গ্রেডিয়েন্ট অবতার বাটন */}
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/10">
              {user?.displayName ? user.displayName.charAt(0) : "U"}
            </div>
            <div className="hidden sm:block text-left">
              <p className="font-bold text-slate-800 text-sm leading-tight">{user?.displayName || "Guest"}</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Premium Member</p>
            </div>
            <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${profileOpen ? "rotate-180 text-slate-700" : ""}`} />
          </button>

          {/* LATEST SHADOW DROPDOWN INTERFACE */}
          {profileOpen && user && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_16px_-6px_rgba(0,0,0,0.05)] border border-slate-100 p-1.5 z-50">
              <div className="px-4 py-2 border-b border-slate-100/80 mb-1.5">
                <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                <p className="text-sm font-bold text-slate-800 truncate mt-0.5">{user.displayName}</p>
              </div>
              
              <NavLink to="/dashboard/user" onClick={() => setProfileOpen(false)} className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer">
                <User size={16} className="text-slate-400" />
                Profile Details
              </NavLink>
              
              <NavLink to="/dashboard/settings" onClick={() => setProfileOpen(false)} className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer">
                <Settings size={16} className="text-slate-400" />
                Account Settings
              </NavLink>
              
              <div className="h-px bg-slate-100 my-1.5"></div>
              
              <button 
                onClick={handleLogout} 
                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
