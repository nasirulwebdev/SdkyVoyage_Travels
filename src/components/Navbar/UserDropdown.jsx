import { Link } from "react-router-dom";

const UserDropdown = () => {
  return (
    <div className="absolute right-0 top-full mt-2 hidden w-56 rounded-xl border border-gray-100 bg-white p-3 shadow-xl group-hover:block">

      <Link
        to="/dashboard"
        className="block rounded-md px-3 py-2 hover:bg-sky-50"
      >
        Dashboard
      </Link>

      <Link
        to="/dashboard/bookings"
        className="block rounded-md px-3 py-2 hover:bg-sky-50"
      >
        My Booking
      </Link>

      <Link
        to="/dashboard/wishlist"
        className="block rounded-md px-3 py-2 hover:bg-sky-50"
      >
        Wishlist
      </Link>

      <Link
        to="/dashboard/payments"
        className="block rounded-md px-3 py-2 hover:bg-sky-50"
      >
        Payments
      </Link>

      <Link
        to="/dashboard/invoices"
        className="block rounded-md px-3 py-2 hover:bg-sky-50"
      >
        Invoices
      </Link>

      <Link
        to="/dashboard/profile"
        className="block rounded-md px-3 py-2 hover:bg-sky-50"
      >
        Profile
      </Link>

      <Link
        to="/dashboard/settings"
        className="block rounded-md px-3 py-2 hover:bg-sky-50"
      >
        Settings
      </Link>

      <hr className="my-2" />

      <button className="w-full rounded-md px-3 py-2 text-left text-red-500 hover:bg-red-50">
        Logout
      </button>
    </div>
  );
};

export default UserDropdown;