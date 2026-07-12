import {
    BadgeDollarSign,
    Headphones,
    ShieldCheck,
    MapPinned,
    Award,
    CalendarCheck,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        id: 1,
        title: "Best Price Guarantee",
        description:
            "We offer competitive prices and carefully selected travel deals for the best possible value.",
        icon: BadgeDollarSign,
    },
    {
        id: 2,
        title: "24/7 Travel Support",
        description:
            "Our dedicated support team is available around the clock to assist you throughout your journey.",
        icon: Headphones,
    },
    {
        id: 3,
        title: "Safe & Secure Booking",
        description:
            "Your booking experience is protected with secure processes and trusted travel solutions.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Handpicked Destinations",
        description:
            "Explore carefully selected destinations designed to give you unforgettable travel experiences.",
        icon: MapPinned,
    },
    {
        id: 5,
        title: "Trusted Travel Experts",
        description:
            "Our experienced travel professionals help you plan every detail with confidence and care.",
        icon: Award,
    },
    {
        id: 6,
        title: "Easy Booking Process",
        description:
            "Find, compare and book your perfect trip through a simple and convenient booking experience.",
        icon: CalendarCheck,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-blue-100
                            bg-blue-50
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-blue-600
                        "
                    >
                        <Sparkles size={17} />

                        Why Choose SkyVoyage
                    </div>

                    <h2
                        className="
                            mt-5
                            text-3xl
                            font-extrabold
                            tracking-tight
                            text-slate-950
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Travel Better With{" "}
                        <span className="text-blue-600">
                            SkyVoyage
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-base
                            leading-8
                            text-slate-500
                            sm:text-lg
                        "
                    >
                        From planning your journey to returning home,
                        we make every step of your travel experience
                        simple, secure and memorable.
                    </p>
                </div>

                {/* Services Grid */}
                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.id}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-7
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-blue-200
                                    hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]
                                "
                            >
                                {/* Number */}
                                <span
                                    className="
                                        absolute
                                        right-6
                                        top-5
                                        text-5xl
                                        font-black
                                        text-slate-100
                                        transition-colors
                                        duration-500
                                        group-hover:text-blue-50
                                    "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div
                                    className="
                                        relative
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-blue-50
                                        text-blue-600
                                        transition-all
                                        duration-500
                                        group-hover:rotate-3
                                        group-hover:scale-110
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                        group-hover:shadow-lg
                                        group-hover:shadow-blue-600/25
                                    "
                                >
                                    <Icon
                                        size={29}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                {/* Content */}
                                <h3
                                    className="
                                        mt-7
                                        text-xl
                                        font-bold
                                        text-slate-900
                                        transition-colors
                                        duration-300
                                        group-hover:text-blue-600
                                    "
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        leading-7
                                        text-slate-500
                                    "
                                >
                                    {service.description}
                                </p>

                                {/* Bottom Line */}
                                <div
                                    className="
                                        mt-7
                                        h-1
                                        w-12
                                        rounded-full
                                        bg-blue-600
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div
                    className="
                        mt-14
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-6
                        rounded-3xl
                        bg-slate-950
                        px-6
                        py-8
                        text-center
                        sm:px-10
                        lg:flex-row
                        lg:text-left
                    "
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Ready to explore the world?
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Find the perfect package for your next
                            unforgettable journey.
                        </p>
                    </div>

                    <Link
                        to="/packages"
                        className="
                            group
                            inline-flex
                            shrink-0
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-600
                            px-7
                            py-3.5
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-blue-500
                            hover:shadow-lg
                            hover:shadow-blue-600/30
                        "
                    >
                        Explore Packages

                        <ArrowRight
                            size={19}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;