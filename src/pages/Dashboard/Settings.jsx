const Settings = () => {
  return (
    <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm max-w-xl">
      <h1 className="text-xl font-bold text-slate-800">Account Settings</h1>
      <p className="text-sm text-slate-400 mt-1 font-medium">Configure dashboard alerts and notification pipelines.</p>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-sm font-semibold text-slate-700">Email Notifications</span>
          <div className="w-9 h-5 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
