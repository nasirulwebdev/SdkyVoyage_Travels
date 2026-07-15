import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";


const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* ফিক্সড সাইডবার */}
      <DashboardSidebar />

      {/* মেইন কনটেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <DashboardNavbar />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
