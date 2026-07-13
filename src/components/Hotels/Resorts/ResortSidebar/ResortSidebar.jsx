import {
    ChevronRight,
    Headphones,
    Percent,
    ShieldCheck,
    XCircle,
} from "lucide-react";

import { useState } from "react";
import resortPromoImage from "../../../../assets/images/hotels/resorts/resort-promo.jpg";
import dubaiImg from "../../../../assets/images/hotels/resorts/resort1.jpg";
import maldivesImg from "../../../../assets/images/hotels/resorts/resort2.jpg";
import singaporeImg from "../../../../assets/images/hotels/resorts/resort3.jpg";
import parisImg from "../../../../assets/images/hotels/resorts/resort4.jpg";
import bangkokImg from "../../../../assets/images/hotels/resorts/resort5.jpg";

// ==========================================
// SUB-COMPONENTS (HELPERS)
// ==========================================
const SidebarFeature = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50/60 border border-blue-100/30 text-blue-600">
                <Icon size={18} />
            </div>
            <div>
                <h4 className="text-[13px] font-bold text-slate-800">
                    {title}
                </h4>
                <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Destination = ({ name, count, imgUrl }) => {
    return (
        <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl p-1.5 transition duration-200 hover:bg-slate-50 cursor-pointer"
        >
            <div className="flex items-center gap-3">
                <img 
                    src={imgUrl} 
                    alt={name} 
                    className="h-10 w-12 rounded-lg object-cover bg-slate-100"
                />
                <span className="text-[13px] font-bold text-slate-800">
                    {name}
                </span>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-[12px] font-medium text-slate-400">
                    {count}
                </span>
                <ChevronRight size={14} className="text-slate-400" />
            </div>
        </button>
    );
};
// ==========================================
// MAIN SIDEBAR COMPONENT
// ==========================================
const ResortSidebar = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <aside className="w-full space-y-6 max-w-[360px]">
            {/* WHY BOOK WITH US */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)]">
                <h3 className="text-[15px] font-bold text-slate-800">
                    Why Book With Us?
                </h3>

                <div className="mt-5 space-y-5">
                    <SidebarFeature
                        icon={ShieldCheck}
                        title="Best Price Guarantee"
                        description="We offer the lowest prices"
                    />

                    <SidebarFeature
                        icon={ShieldCheck}
                        title="Secure Booking"
                        description="Your data is 100% safe"
                    />

                    <SidebarFeature
                        icon={XCircle}
                        title="Free Cancellation"
                        description="Up to 24 hours before check-in"
                    />

                    <SidebarFeature
                        icon={Headphones}
                        title="24/7 Customer Support"
                        description="We are here to help you"
                    />
                </div>
            </div>

            {/* NEWSLETTER / PROMO CARD */}
            <div className="group relative overflow-hidden rounded-2xl bg-blue-600 p-6 shadow-lg shadow-blue-500/10">
                <div className="absolute top-0 right-0 h-44 w-44 translate-x-6 -translate-y-4 overflow-hidden rounded-full border border-white/10 bg-white/5 opacity-90">
                    <img
                        src={resortPromoImage}
                        alt="Promo view"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600/80 to-transparent" />

                <div className="relative z-10 text-white">
                    <h3 className="text-[20px] font-black leading-tight tracking-wide">
                        Get Up to 30% OFF
                    </h3>
                    <p className="text-[14px] font-bold text-white/90">
                        on Hotel Bookings
                    </p>

                    <div className="my-4 border-t border-white/20 w-full" />

                    <p className="text-[11px] font-medium leading-relaxed text-white/80 max-w-[200px]">
                        Sign up and unlock exclusive deals & offers
                    </p>

                    <form onSubmit={handleSubscribe} className="mt-5 flex gap-2">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl bg-white px-3.5 py-2.5 text-[12px] font-medium text-slate-800 outline-none placeholder:text-slate-400"
                        />
                        <button
                            type="submit"
                            className="rounded-xl bg-blue-700 hover:bg-blue-800 border border-blue-500/30 px-4 py-2.5 text-[12px] font-bold transition active:scale-[0.97] cursor-pointer shrink-0"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* TOP DESTINATIONS */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)]">
                <h3 className="text-[15px] font-bold text-slate-800 px-1 mb-4">
                    Top Destinations
                </h3>

                <div className="mt-4 space-y-2">
                    <Destination 
                        name="Dubai" 
                        count="856 Hotels" 
                        imgUrl={dubaiImg}
                    />
                    <Destination 
                        name="Maldives" 
                        count="642 Hotels" 
                        imgUrl={maldivesImg}
                    />
                    <Destination 
                        name="Singapore" 
                        count="512 Hotels" 
                        imgUrl={singaporeImg}
                    />
                    <Destination 
                        name="Paris" 
                        count="420 Hotels" 
                        imgUrl={parisImg}
                    />
                    <Destination 
                        name="Bangkok" 
                        count="398 Hotels" 
                        imgUrl={bangkokImg}
                    />
                </div>
            </div>
        </aside>
    );
};

export default ResortSidebar;
