import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  Globe,
  DollarSign,
  Heart,
  Bell,
  User,
} from "lucide-react";

import navbarData from "../../data/navbarData";

const MobileDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="
              fixed
              top-0
              left-0
              z-50
              h-screen
              w-[320px]
              bg-white
              shadow-2xl
              flex
              flex-col
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b p-5">

              <div>

                <h2 className="text-xl font-bold text-sky-600">
                  SkyVoyage
                </h2>

                <p className="text-xs text-gray-500">
                  Explore the World
                </p>

              </div>

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  p-2
                  hover:bg-gray-100
                "
              >
                <X size={22} />
              </button>

            </div>

            {/* Quick Actions */}

            <div className="grid grid-cols-4 gap-3 border-b p-5">

              <button className="flex flex-col items-center gap-1 text-sm">
                <Globe size={20} />
                <span>EN</span>
              </button>

              <button className="flex flex-col items-center gap-1 text-sm">
                <DollarSign size={20} />
                <span>USD</span>
              </button>

              <button className="flex flex-col items-center gap-1 text-sm">
                <Heart size={20} />
                <span>Wish</span>
              </button>

              <button className="flex flex-col items-center gap-1 text-sm">
                <Bell size={20} />
                <span>Alert</span>
              </button>

            </div>

            {/* Navigation */}

            <div className="flex-1 overflow-y-auto p-4">

              <div className="space-y-2">

                {navbarData.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={onClose}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      text-gray-700
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-sky-50
                      hover:text-sky-600
                    "
                  >
                    <span>{item.title}</span>

                    <ChevronRight size={18} />
                  </Link>
                ))}

              </div>

            </div>

            {/* Footer */}

            <div className="border-t p-5">

              <button
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-sky-600
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-sky-700
                "
              >
                <User size={18} />

                Login / Register
              </button>

            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;