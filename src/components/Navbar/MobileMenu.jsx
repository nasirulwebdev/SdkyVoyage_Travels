import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import navbarData from "../../data/navbarData";

const MobileMenu = ({ close }) => {
  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.35 }}
      className="
        lg:hidden
        fixed
        top-[136px]
        left-0
        w-full
        h-[calc(100vh-136px)]
        bg-white
        overflow-y-auto
        shadow-xl
        z-40
      "
    >
      <div className="p-6">

        <div className="space-y-2">

          {navbarData.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              onClick={close}
              className="
                block
                rounded-xl
                px-4
                py-3
                font-medium
                text-slate-700
                hover:bg-sky-50
                hover:text-sky-600
                transition-all
                duration-300
              "
            >
              {item.title}
            </Link>

          ))}

        </div>

        <div className="mt-8">

          <button
            className="
              w-full
              rounded-full
              bg-sky-600
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-sky-700
            "
          >
            Book Now
          </button>

        </div>

      </div>
    </motion.aside>
  );
};

export default MobileMenu;