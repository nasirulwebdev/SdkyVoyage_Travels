import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPinned,
  Plane,
  Hotel,
  Globe,
} from "lucide-react";

const icons = [MapPinned, Plane, Hotel, Globe];

const MegaMenu = ({ items = [] }) => {
  return (
    <div
      className="
        absolute
        left-1/2
        top-full
        z-50
        mt-2
        w-[950px]
        -translate-x-1/2
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-2xl
        animate-in
        fade-in
        zoom-in-95
        duration-200
      "
    >
      <div className="grid grid-cols-4 gap-8">

        {/* Menu Columns */}

        {items.map((menu, index) => {

          const Icon = icons[index % icons.length];

          return (
            <div key={index}>

              <div className="mb-5 flex items-center gap-2">

                <div className="rounded-xl bg-sky-100 p-2">

                  <Icon
                    size={18}
                    className="text-sky-600"
                  />

                </div>

                <h3 className="font-bold text-slate-900">
                  {menu.name}
                </h3>

              </div>

              {menu.children ? (

                <div className="space-y-2">

                  {menu.children.map((child, i) => (

                    <Link
                      key={i}
                      to="#"
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-2
                        text-sm
                        text-slate-600
                        transition-all
                        duration-300
                        hover:bg-sky-50
                        hover:text-sky-600
                      "
                    >
                      <span>{child}</span>

                      <ArrowRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-2
                          transition-all
                          duration-300
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />

                    </Link>

                  ))}

                </div>

              ) : (

                <Link
                  to={menu.path}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-sky-600
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-sky-700
                  "
                >
                  Explore

                  <ArrowRight size={16} />

                </Link>

              )}

            </div>
          );
        })}

        {/* Featured Card */}

        <div
          className="
            rounded-3xl
            bg-gradient-to-br
            from-sky-500
            via-blue-600
            to-indigo-700
            p-6
            text-white
          "
        >
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
            Featured
          </span>

          <h2 className="mt-4 text-2xl font-bold">
            Discover Your Next Adventure
          </h2>

          <p className="mt-3 text-sm leading-6 text-sky-100">
            Explore amazing destinations, exclusive holiday
            packages, luxury hotels and affordable flights
            with SkyVoyage Travels.
          </p>

          <div className="mt-6 space-y-2 text-sm">

            <div>✔ 150+ Destinations</div>

            <div>✔ Best Price Guarantee</div>

            <div>✔ 24/7 Customer Support</div>

          </div>

          <button
            className="
              mt-8
              w-full
              rounded-full
              bg-white
              py-3
              font-semibold
              text-sky-700
              transition
              hover:scale-105
            "
          >
            Explore Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default MegaMenu;