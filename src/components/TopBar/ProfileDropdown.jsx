import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaUser,
  FaSuitcaseRolling,
  FaHeart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const ProfileDropdown = () => {
  // Temporary auth state
  const isLoggedIn = false;

  return (
    <div className="dropdown dropdown-end">

      <label
        tabIndex={0}
        className="
          btn
          btn-ghost
          btn-circle
          hover:bg-blue-50
          border-0
        "
      >
        <FaUserCircle className="text-2xl text-slate-700" />
      </label>

      <ul
        tabIndex={0}
        className="
          dropdown-content
          mt-3
          w-72
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-2xl
          z-[999]
          overflow-hidden
        "
      >
        {isLoggedIn ? (
          <>
            {/* User Info */}

            <div className="px-5 py-4 border-b bg-slate-50">

              <h3 className="font-bold text-lg">
                John Doe
              </h3>

              <p className="text-sm text-gray-500">
                john@example.com
              </p>

            </div>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 py-3"
              >
                <FaUser />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/my-bookings"
                className="flex items-center gap-3 py-3"
              >
                <FaSuitcaseRolling />
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                className="flex items-center gap-3 py-3"
              >
                <FaHeart />
                Wishlist
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3 py-3"
              >
                <FaCog />
                Settings
              </Link>
            </li>

            <div className="divider my-0"></div>

            <li>
              <button
                className="
                  flex
                  items-center
                  gap-3
                  py-3
                  text-red-500
                  hover:bg-red-50
                "
              >
                <FaSignOutAlt />
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <div className="px-5 py-5 text-center border-b">

              <FaUserCircle className="text-5xl mx-auto text-blue-600 mb-3" />

              <h3 className="font-bold text-lg">
                Welcome
              </h3>

              <p className="text-sm text-gray-500">
                Login to manage your bookings
              </p>

            </div>

            <div className="p-4 space-y-3">

              <Link
                to="/login"
                className="btn btn-primary w-full rounded-xl"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-outline btn-primary w-full rounded-xl"
              >
                Register
              </Link>

            </div>
          </>
        )}
      </ul>

    </div>
  );
};

export default ProfileDropdown;