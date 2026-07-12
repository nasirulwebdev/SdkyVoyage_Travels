import { useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Plane,
} from "lucide-react";
import { toast } from "sonner";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signInUser, googleLogin } = useAuth();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // =====================================
  // Email Login
  // =====================================

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await signInUser(
        data.email,
        data.password
      );

      toast.success(
        "Welcome Back ✈️"
      );

      navigate(from, {
        replace: true,
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // Google Login
  // =====================================

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      await googleLogin();

      toast.success(
        "Google Login Successful ✈️"
      );

      navigate(from, {
        replace: true,
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-sky-950/70 to-slate-900/90"></div>

      {/* Content */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="grid lg:grid-cols-2 gap-14 max-w-7xl w-full items-center"
        >

          {/* LEFT */}

          <div className="hidden lg:block text-white">

            <div className="flex items-center gap-3 mb-8">

              <Plane
                size={40}
                className="text-sky-400"
              />

              <h2 className="text-4xl font-black">
                SkyVoyage
              </h2>

            </div>

            <h1 className="text-6xl font-black leading-tight">

              Explore

              <br />

              The World

            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-300 max-w-xl">

              Discover amazing destinations,
              luxury hotels,
              affordable flights,
              tour packages
              and unforgettable experiences
              around the world.

            </p>

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-5">

                <h3 className="text-3xl font-bold">
                  120+
                </h3>

                <p className="text-gray-300">
                  Countries
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-5">

                <h3 className="text-3xl font-bold">
                  5000+
                </h3>

                <p className="text-gray-300">
                  Tours
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-5">

                <h3 className="text-3xl font-bold">
                  4.9★
                </h3>

                <p className="text-gray-300">
                  Rating
                </p>

              </div>

            </div>

          </div>

          {/* LOGIN CARD */}

          <motion.div
            initial={{
              opacity:0,
              scale:.95
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            transition={{
              duration:.5
            }}
            className="rounded-[30px] border border-white/20 bg-white/15 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.35)] p-10"
          >

            <div className="text-center">

              <h2 className="text-4xl font-bold text-white">

                Welcome Back

              </h2>

              <p className="text-gray-300 mt-3">

                Login to continue your journey

              </p>

            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10"
            >
                              {/* Email */}

              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-white">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input w-full h-14 rounded-xl border border-white/20 bg-white/10 pl-12 text-white placeholder:text-gray-300 focus:border-sky-400 focus:outline-none"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}

              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-white">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="input w-full h-14 rounded-xl border border-white/20 bg-white/10 pl-12 pr-12 text-white placeholder:text-gray-300 focus:border-sky-400 focus:outline-none"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember */}

              <div className="mb-8 flex items-center justify-between">

                <label className="flex items-center gap-2 text-white">

                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />

                  Remember Me

                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-sky-300 hover:text-sky-400"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login Button */}

              <button
                type="submit"
                disabled={loading}
                className="btn h-14 w-full rounded-xl border-0 bg-gradient-to-r from-sky-500 to-cyan-500 text-lg font-semibold text-white transition hover:scale-[1.02]"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Signing In...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <div className="divider my-8 text-white">
                OR
              </div>

              {/* Google */}

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="btn h-14 w-full rounded-xl border-0 bg-white text-black hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                  />
                </svg>

                Continue with Google
              </button>

              <p className="mt-8 text-center text-white">

                Don't have an account?

                <Link
                  to="/register"
                  className="ml-2 font-semibold text-sky-400 hover:text-sky-300"
                >
                  Register
                </Link>

              </p>

            </form>

          </motion.div>

        </motion.div>

      </div>

    </div>
  );
};

export default Login;