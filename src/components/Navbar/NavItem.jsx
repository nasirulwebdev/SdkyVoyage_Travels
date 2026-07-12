import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

const NavItem = ({ item }) => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const isActive = () => {
    if (!item.path) return false;

    if (item.path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === item.path ||
      location.pathname.startsWith(item.path + "/")
    );
  };

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.path || "#"}
        className={`
          group
          flex
          items-center
          gap-1
          py-7
          text-[15px]
          font-semibold
          transition-all
          duration-300

          ${
            isActive()
              ? "text-sky-600"
              : "text-slate-700 hover:text-sky-600"
          }
        `}
      >
        {item.title}

        {item.megaMenu && (
          <ChevronDown
            size={16}
            className={`
              transition-transform
              duration-300

              ${
                open
                  ? "rotate-180"
                  : ""
              }
            `}
          />
        )}
      </Link>

      {/* Animated Underline */}

      <span
        className={`
          absolute
          left-0
          bottom-0
          h-[3px]
          rounded-full
          bg-sky-600
          transition-all
          duration-300

          ${
            isActive()
              ? "w-full"
              : open
              ? "w-full"
              : "w-0"
          }
        `}
      />

      {/* Mega Menu */}

      {item.megaMenu && open && (
        <MegaMenu items={item.items} />
      )}
    </li>
  );
};

export default NavItem;