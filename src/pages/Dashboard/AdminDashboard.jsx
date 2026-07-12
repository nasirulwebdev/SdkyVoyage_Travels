const AdminDashboard = () => {
  return (
    <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm border-l-4 border-l-emerald-500">
      <h1 className="text-xl font-bold text-slate-800">Admin Operations</h1>
      <p className="text-sm text-slate-400 mt-1 font-medium">Core administrative system configurations.</p>
      <div className="mt-4 p-4 bg-emerald-50/50 text-emerald-800 rounded-xl text-xs font-semibold tracking-wide uppercase">
        Phase 7 Engine Deployment Pending
      </div>
    </div>
  );
};

// এই এক্সপোর্টটি মিসিং ছিল, যার কারণে এরর দিচ্ছিল
export default AdminDashboard;
