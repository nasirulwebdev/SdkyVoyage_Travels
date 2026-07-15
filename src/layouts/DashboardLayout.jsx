import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import DashboardNavbar from "../dashboard/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex font-sans w-full overflow-x-hidden bg-[#0F172A]">
      {/* ১. বাম পাশের ফিক্সড ডার্ক সাইডবার */}
      <DashboardSidebar />

      {/* ২. ডান পাশের মেইন কনটেন্ট এরিয়া (ইনলাইন স্টাইল দিয়ে জোরপূর্বক সবুজ করা হয়েছে) */}
      <div 
        className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto"
        style={{ backgroundColor: "#d4edda" }} // এটি একটি হালকা প্রফেশনাল মিন্ট গ্রিন কালার
      >
        <DashboardNavbar />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          <Outlet />
        </main>
              {/* ৩. ড্যাশবোর্ড কাস্টম ফুটার (সবুজ থিমের সাথে অ্যালাইনড) */}
        <footer 
          className="mt-auto py-4 px-6 border-t text-xs flex justify-between font-medium"
          style={{ borderColor: "#c8e6c9", color: "#2e7d32" }}
        >
          <div>&copy; {new Date().getFullYear()} <span className="text-[#0B3A82] font-bold">SkyVoyage Travels</span>. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-green-900 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-green-900 transition">Terms of Service</a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default DashboardLayout;
