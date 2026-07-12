import {
    CalendarCheck2,
    ChevronRight,
    Headphones,
    ShieldCheck,
} from "lucide-react";
import flightHero from "../../../assets/images/flights/flight-hero.png";
const FlightHero = () => {
    return (
        <section
            className="
                relative
                min-h-[300px]
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
            "
            style={{
                    backgroundImage: `url(${flightHero})`,
                }}
            >
            {/* Soft overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-white/75
                    via-white/25
                    to-transparent
                "
            />

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1240px]
                    px-4
                    pt-7
                    sm:px-6
                    lg:px-4
                "
            >
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="
                        mb-3
                        flex
                        items-center
                        gap-1
                        text-[12px]
                        font-medium
                        text-[#0b2348]
                    "
                >
                    <span>Home</span>

                    <ChevronRight
                        size={13}
                        strokeWidth={2.2}
                    />

                    <span>Flights</span>
                </nav>

                {/* Heading */}
                <h1
                    className="
                        max-w-[560px]
                        text-[34px]
                        font-extrabold
                        leading-[1.12]
                        tracking-[-0.8px]
                        text-[#082653]
                        sm:text-[40px]
                    "
                >
                    Find Your Perfect Flight
                </h1>

                {/* Description */}
                <p
                    className="
                        mt-3
                        max-w-[350px]
                        text-[13px]
                        font-medium
                        leading-[1.55]
                        text-[#172b4d]
                    "
                >
                    Search and book flights to anywhere in the world
                    <br className="hidden sm:block" />
                    {" "}at the best possible prices.
                </p>

                {/* Features */}
                <div
                    className="
                        mt-5
                        flex
                        flex-wrap
                        items-center
                        gap-y-4
                    "
                >
                    {/* Best Price */}
                    <div className="flex items-center gap-2.5 pr-7">
                        <ShieldCheck
                            size={22}
                            strokeWidth={2}
                            className="text-[#0d6efd]"
                        />

                        <span
                            className="
                                text-[12px]
                                font-semibold
                                text-[#10284e]
                            "
                        >
                            Best Price Guarantee
                        </span>
                    </div>

                    {/* Divider */}
                    <div
                        className="
                            hidden
                            h-7
                            w-px
                            bg-white/70
                            sm:block
                        "
                    />

                    {/* Easy Booking */}
                    <div className="flex items-center gap-2.5 px-7">
                        <CalendarCheck2
                            size={22}
                            strokeWidth={2}
                            className="text-[#0d6efd]"
                        />

                        <span
                            className="
                                text-[12px]
                                font-semibold
                                text-[#10284e]
                            "
                        >
                            Easy Booking
                        </span>
                    </div>

                    {/* Divider */}
                    <div
                        className="
                            hidden
                            h-7
                            w-px
                            bg-white/70
                            sm:block
                        "
                    />

                    {/* Support */}
                    <div className="flex items-center gap-2.5 pl-7">
                        <Headphones
                            size={22}
                            strokeWidth={2}
                            className="text-[#0d6efd]"
                        />

                        <span
                            className="
                                text-[12px]
                                font-semibold
                                text-[#10284e]
                            "
                        >
                            24/7 Support
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlightHero;