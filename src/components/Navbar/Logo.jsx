import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
        flex
        items-center
        gap-3
        group
        shrink-0
      "
    >
      {/* Logo Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-sky-500
          to-blue-700
          text-white
          shadow-lg
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:rotate-6
        "
      >
        <Plane size={24} />
      </div>

      {/* Logo Text */}
      <div className="leading-tight">
        <h1
          className="
            text-xl
            font-extrabold
            tracking-wide
            text-slate-800
            transition-colors
            duration-300
            group-hover:text-sky-600
          "
        >
          SkyVoyage
        </h1>

        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-slate-500
          "
        >
          Travels
        </p>
      </div>
    </Link>
  );
};

export default Logo;