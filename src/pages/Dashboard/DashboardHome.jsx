import { TrendingUp, Calendar, Compass, ShieldAlert } from "lucide-react";

const DashboardHome = () => {
  const stats = [
    { title: "Total Bookings", value: "12", sub: "+2 this month", icon: <Calendar className="text-blue-500" /> },
    { title: "Active Visas", value: "02", sub: "Valid standard", icon: <ShieldAlert className="text-emerald-500" /> },
    { title: "Places Visited", value: "08", sub: "Global spots", icon: <Compass className="text-indigo-500" /> },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER HERO */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-700/10">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Welcome Back, Nasir!</h1>
        <p className="mt-2 text-blue-100 font-medium max-w-md text-sm sm:text-base">
          Your flight to Bangkok is on track. Ready to discover your next destination?
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200/50 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-slate-50 rounded-xl">{stat.icon}</div>
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <TrendingUp size={12} /> Live
              </span>
            </div>
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-4">{stat.title}</h3>
            <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
            <p className="text-xs text-slate-400 font-medium mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
