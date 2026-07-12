import { useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    Plane,
    Send,
    Sparkles,
} from "lucide-react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email.trim()) return;

        setSubscribed(true);
        setEmail("");

        setTimeout(() => {
            setSubscribed(false);
        }, 4000);
    };

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        bg-slate-950
                        px-6
                        py-12
                        shadow-2xl
                        sm:px-10
                        sm:py-16
                        lg:px-16
                        lg:py-20
                    "
                >
                    {/* Background Glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-32
                            -top-32
                            h-96
                            w-96
                            rounded-full
                            bg-blue-600/30
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-40
                            -right-24
                            h-96
                            w-96
                            rounded-full
                            bg-cyan-500/20
                            blur-3xl
                        "
                    />

                    {/* Decorative Plane */}
                    <Plane
                        size={220}
                        strokeWidth={0.6}
                        className="
                            pointer-events-none
                            absolute
                            -right-10
                            top-1/2
                            hidden
                            -translate-y-1/2
                            rotate-[-15deg]
                            text-white/5
                            lg:block
                        "
                    />

                    <div
                        className="
                            relative
                            z-10
                            grid
                            items-center
                            gap-10
                            lg:grid-cols-[1fr_0.9fr]
                            lg:gap-16
                        "
                    >
                        {/* LEFT CONTENT */}
                        <div>
                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-2
                                    text-sm
                                    font-bold
                                    text-blue-300
                                    backdrop-blur
                                "
                            >
                                <Sparkles size={17} />

                                Exclusive Travel Deals
                            </div>

                            <h2
                                className="
                                    mt-6
                                    max-w-2xl
                                    text-3xl
                                    font-extrabold
                                    tracking-tight
                                    text-white
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                Get Inspired For Your
                                <span className="block text-blue-400">
                                    Next Adventure
                                </span>
                            </h2>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-base
                                    leading-8
                                    text-slate-400
                                    sm:text-lg
                                "
                            >
                                Subscribe to receive exclusive travel deals,
                                destination inspiration and special offers
                                directly in your inbox.
                            </p>

                            {/* Benefits */}
                            <div
                                className="
                                    mt-7
                                    flex
                                    flex-wrap
                                    gap-x-6
                                    gap-y-3
                                    text-sm
                                    text-slate-300
                                "
                            >
                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-blue-400"
                                    />

                                    Exclusive Offers
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-blue-400"
                                    />

                                    Travel Inspiration
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-blue-400"
                                    />

                                    No Spam
                                </span>
                            </div>
                        </div>

                        {/* SUBSCRIBE CARD */}
                        <div
                            className="
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/10
                                p-5
                                shadow-2xl
                                backdrop-blur-xl
                                sm:p-7
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-blue-600
                                    text-white
                                    shadow-lg
                                    shadow-blue-600/30
                                "
                            >
                                <Mail size={26} />
                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-white">
                                Join Our Newsletter
                            </h3>

                            <p className="mt-2 leading-7 text-slate-400">
                                Be the first to discover new destinations
                                and limited-time travel deals.
                            </p>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="mt-6"
                            >
                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-3
                                        rounded-2xl
                                        bg-white
                                        p-2
                                        sm:flex-row
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            min-w-0
                                            flex-1
                                            items-center
                                            gap-3
                                            px-3
                                        "
                                    >
                                        <Mail
                                            size={20}
                                            className="
                                                shrink-0
                                                text-slate-400
                                            "
                                        />

                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            placeholder="Enter your email address"
                                            required
                                            aria-label="Email address"
                                            className="
                                                h-12
                                                min-w-0
                                                flex-1
                                                border-none
                                                bg-transparent
                                                text-slate-900
                                                outline-none
                                                placeholder:text-slate-400
                                            "
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="
                                            group
                                            inline-flex
                                            h-12
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            bg-blue-600
                                            px-6
                                            font-bold
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:bg-blue-700
                                            hover:shadow-lg
                                            hover:shadow-blue-600/30
                                        "
                                    >
                                        Subscribe

                                        <Send
                                            size={18}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                            "
                                        />
                                    </button>
                                </div>
                            </form>

                            {/* Success Message */}
                            {subscribed && (
                                <div
                                    className="
                                        mt-4
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-emerald-400/20
                                        bg-emerald-400/10
                                        px-4
                                        py-3
                                        text-sm
                                        font-medium
                                        text-emerald-300
                                    "
                                >
                                    <CheckCircle2 size={18} />

                                    Thank you! You have successfully subscribed.
                                </div>
                            )}

                            <p className="mt-4 text-xs leading-6 text-slate-500">
                                By subscribing, you agree to receive travel
                                news and promotional offers from SkyVoyage.
                            </p>
                        </div>
                    </div>

                    {/* Bottom CTA Link */}
                    <div
                        className="
                            relative
                            z-10
                            mt-10
                            flex
                            flex-col
                            gap-4
                            border-t
                            border-white/10
                            pt-7
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <p className="text-sm text-slate-400">
                            Your next unforgettable journey could be one email away.
                        </p>

                        <a
                            href="#featured-packages"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-bold
                                text-blue-400
                                transition
                                hover:text-blue-300
                            "
                        >
                            Explore Travel Deals

                            <ArrowRight
                                size={17}
                                className="
                                    transition-transform
                                    group-hover:translate-x-1
                                "
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;