import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Image as ImageIcon,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const getPasswordStrength = () => {
    if (!password) {
      return { text: "None", color: "bg-gray-600", width: "0%" };
    }
    if (password.length < 6) {
      return { text: "Weak", color: "bg-gradient-to-r from-red-500 to-orange-500", width: "30%" };
    }
    if (
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return { text: "Strong", color: "bg-gradient-to-r from-emerald-500 to-teal-500", width: "100%" };
    }
    if (
      password.length >= 6 &&
      (/[A-Z]/.test(password) || /\d/.test(password))
    ) {
      return { text: "Medium", color: "bg-gradient-to-r from-amber-500 to-yellow-500", width: "65%" };
    }
    return { text: "Weak", color: "bg-gradient-to-r from-red-500 to-orange-500", width: "30%" };
  };

  const strength = getPasswordStrength();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In Triggered");
  };

  const features = [
    "Premium Tour Packages",
    "Instant Hotel Booking",
    "Flight Booking Deals",
    "Hassle-free Visa Processing",
    "24/7 Dedicated Support",
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative font-sans selection:bg-sky-500 selection:text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-sky-900/40 backdrop-blur-[2px]"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-6xl items-center"
        >
          {/* LEFT SIDE - BRANDING */}
          <div className="hidden lg:block lg:col-span-5 text-white pr-4">
            <motion.h1 
              className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-sky-200"
            >
              Join <br /> SkyVoyage
            </motion.h1>

            <motion.p 
              className="mt-6 text-base xl:text-lg text-slate-300 leading-relaxed max-w-md"
            >
              Create your account today and unlock extraordinary journeys across the globe with our exclusive membership privileges.
            </motion.p>

            <motion.div className="mt-8 space-y-3.5">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-200 hover:text-sky-300 transition-colors duration-200">
                  <CheckCircle2 size={18} className="text-sky-400 shrink-0" />
                  <span className="text-sm font-medium tracking-wide">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

        {/* RIGHT SIDE - REGISTER CARD */}
          <div className="lg:col-span-7 bg-white/[0.07] backdrop-blur-xl border border-white/[0.15] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-xl mx-auto lg:mx-0 w-full">
            
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Create Account
              </h2>
              <p className="text-slate-300 text-sm mt-2 font-medium tracking-wide">
                Start your journey with SkyVoyage Travels
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center mb-8">
              <div className="flex-1 h-[1px] bg-white/10"></div>
              <span className="px-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">Or register with email</span>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="block">
              
              {/* Full Name */}
              <div className="mb-6 block">
                <label className="block text-slate-200 text-sm font-semibold uppercase tracking-wider mb-2.5">Full Name</label>
                <div className="relative flex items-center">
                  <User size={20} className="absolute left-4 text-slate-400 z-20 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.06] text-white placeholder-slate-400 border border-white/[0.1] rounded-xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.1] transition-all text-base h-13"
                    {...register("name", { required: "Full Name is required" })}
                  />
                </div>
                {errors.name && <p className="text-rose-400 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
              </div>

              {/* Photo URL */}
              <div className="mb-6 block">
                <label className="block text-slate-200 text-sm font-semibold uppercase tracking-wider mb-2.5">Photo URL</label>
                <div className="relative flex items-center">
                  <ImageIcon size={20} className="absolute left-4 text-slate-400 z-20 pointer-events-none" />
                  <input
                    type="url"
                    placeholder="https://example.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.06] text-white placeholder-slate-400 border border-white/[0.1] rounded-xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.1] transition-all text-base h-13"
                    {...register("photo")}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6 block">
                <label className="block text-slate-200 text-sm font-semibold uppercase tracking-wider mb-2.5">Email Address</label>
                <div className="relative flex items-center">
                  <Mail size={20} className="absolute left-4 text-slate-400 z-20 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.06] text-white placeholder-slate-400 border border-white/[0.1] rounded-xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.1] transition-all text-base h-13"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && <p className="text-rose-400 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div className="mb-6 block">
                <label className="block text-slate-200 text-sm font-semibold uppercase tracking-wider mb-2.5">Password</label>
                <div className="relative flex items-center">
                  <Lock size={20} className="absolute left-4 text-slate-400 z-20 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-white/[0.06] text-white placeholder-slate-400 border border-white/[0.1] rounded-xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.1] transition-all text-base h-13"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-white transition-colors z-20"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Strength Meter */}
                {password && (
                  <div className="mt-3 space-y-1.5">
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ease-out ${strength.color}`}
                        style={{ width: strength.width }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-slate-300 font-medium">
                      <span>Password Strength:</span>
                      <span className="font-bold tracking-wide uppercase">{strength.text}</span>
                    </div>
                  </div>
                )}
                {errors.password && <p className="text-rose-400 text-xs mt-1.5 font-medium">{errors.password.message}</p>}
              </div>

              {/* Confirm Password */}
              <div className="mb-8 block">
                <label className="block text-slate-200 text-sm font-semibold uppercase tracking-wider mb-2.5">Confirm Password</label>
                <div className="relative flex items-center">
                  <Lock size={20} className="absolute left-4 text-slate-400 z-20 pointer-events-none" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-white/[0.06] text-white placeholder-slate-400 border border-white/[0.1] rounded-xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.1] transition-all text-base h-13"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === password || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 text-slate-400 hover:text-white transition-colors z-20"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && 
                <p className="text-rose-400 text-xs mt-1.5 font-medium">
                    {errors.confirmPassword.message}</p>}
              </div>

               {/* Submit Button (mb-6 added for spacing underneath) */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full mb-10 py-3.5 px-4 bg-gradient-to-r from-sky-500
                 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold
                  rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 flex items-center
                   justify-center gap-3 tracking-wide cursor-pointer text-base"
              >
                <span>Create Account</span>
                <ArrowRight size={20} />
              </motion.button>
            </form>

            {/* Login Link (pb-4 added inside card boundary) */}
            <div className="text-center pb-4">
              <p className="text-base text-slate-300 font-medium">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sky-400 hover:text-sky-300
                   font-semibold underline underline-offset-4 decoration-2 transition-colors ml-1"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
