import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import navbarData from "../../data/navbarData";
import MegaMenu from "./MegaMenu";

const NavLinks = () => {
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(null);

  const isActive = (path) => {
    if (!path) return false;

    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(path + "/")
    );
  };

  return (
    <ul className="flex items-center gap-8">

      {navbarData.map((item, index) => (

        <li
          key={index}
          className="relative"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link
            to={item.path || "#"}
            className={`
              flex
              items-center
              gap-1
              py-7
              text-[15px]
              font-semibold
              transition-all
              duration-300

              ${
                isActive(item.path)
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
                    activeMenu === index
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            )}
          </Link>

          {/* Active / Hover Line */}

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
                isActive(item.path)
                  ? "w-full"
                  : activeMenu === index
                  ? "w-full"
                  : "w-0"
              }
            `}
          />

          {item.megaMenu && activeMenu === index && (
            <MegaMenu items={item.items} />
          )}
        </li>

      ))}

    </ul>
  );
};

export default NavLinks;