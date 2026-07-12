const Bookings = () => {
  return (
    <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
      <h1 className="text-xl font-bold text-slate-800">My Bookings</h1>
      <p className="text-sm text-slate-400 mt-1 font-medium">Track your travel logs, flights, and ticket receipts.</p>
      <div className="mt-8 border border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 text-sm font-medium">
        No active booking logs found in system database.
      </div>
    </div>
  );
};

export default Bookings;
