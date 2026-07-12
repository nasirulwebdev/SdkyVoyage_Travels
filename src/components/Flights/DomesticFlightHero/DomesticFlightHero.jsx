import { ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import domesticHero from "../../../../assets/images/flights/Domestic-Flight-Hero.png";




const DomesticFlightHero = () => {
    return (
            <section
                className="
                    relative
                    min-h-[190px]
                    overflow-hidden
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage: "url('/images/flights/Domestic-Flight-Hero.png')",
                }}
            >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#071a38]/75" />

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[190px]
                    max-w-[1320px]
                    items-center
                    justify-between
                    gap-8
                    px-5
                    py-10
                    lg:px-8
                "
            >
                {/* Left Content */}
                <div>
                    {/* Breadcrumb */}
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                        <Link
                            to="/"
                            className="
                                font-medium
                                text-white/80
                                transition
                                hover:text-white
                            "
                        >
                            Home
                        </Link>

                        <ChevronRight
                            size={15}
                            className="text-white/50"
                        />

                        <Link
                            to="/flights"
                            className="
                                font-medium
                                text-white/80
                                transition
                                hover:text-white
                            "
                        >
                            Flights
                        </Link>

                        <ChevronRight
                            size={15}
                            className="text-white/50"
                        />

                        <span className="font-medium text-[#31d17c]">
                            Domestic Flights
                        </span>
                    </div>

                    {/* Page Title */}
                    <h1
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-4xl
                        "
                    >
                        Domestic Flights
                    </h1>
                </div>

                {/* Secure Booking Badge */}
                <div
                    className="
                        hidden
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-white/15
                        bg-white/10
                        px-5
                        py-3
                        backdrop-blur-sm
                        md:flex
                    "
                >
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-[#21c978]/15
                        "
                    >
                        <ShieldCheck
                            size={23}
                            className="text-[#31d17c]"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-white/65">
                            Safe & Trusted
                        </p>

                        <p className="text-sm font-semibold text-white">
                            100% Secure Booking
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DomesticFlightHero;