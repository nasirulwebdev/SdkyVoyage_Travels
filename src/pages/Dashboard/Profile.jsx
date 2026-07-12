const Profile = () => {
  return (
    <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm max-w-2xl">
      <h1 className="text-xl font-bold text-slate-800">My Profile</h1>
      <p className="text-sm text-slate-400 mt-1 font-medium">Manage your personal identification metadata.</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-16 w-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center font-bold text-blue-600 text-xl">N</div>
        <div>
          <h3 className="font-bold text-slate-700 text-base">Nasir Uddin</h3>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">nasir@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
