import {
    ChevronRight,
    ShieldCheck,
    LockKeyhole,
    RotateCcw,
} from "lucide-react";

import apartmentHero from "../../../../assets/images/hotels/Apartments/ApartmentHero.jpg";

const ApartmentHero = () => {
    return (
        <section
            className="
                relative
                min-h-[360px]
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
                lg:min-h-[390px]
            "
            style={{
                backgroundImage: `url(${apartmentHero})`,
            }}
        >
            {/* Dark Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-slate-950/90
                    via-slate-900/55
                    to-transparent
                "
            />

            {/* Hero Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-4
                    py-10
                    sm:px-6
                    lg:px-8
                    lg:py-12
                "
            >
                <div className="max-w-2xl">
                    {/* Breadcrumb */}
                    <div
                        className="
                            mb-5
                            flex
                            items-center
                            gap-1.5
                            text-xs
                            font-medium
                            text-white/90
                        "
                    >
                        <span>Home</span>

                        <ChevronRight
                            size={13}
                            strokeWidth={2}
                        />

                        <span>Hotels</span>

                        <ChevronRight
                            size={13}
                            strokeWidth={2}
                        />

                        <span>Apartments</span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="
                            max-w-xl
                            text-4xl
                            font-bold
                            leading-[1.12]
                            tracking-tight
                            text-white
                            sm:text-5xl
                        "
                    >
                        Comfortable Apartments
                        <br />
                        Like Your Own Home
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mt-4
                            max-w-lg
                            text-sm
                            leading-6
                            text-white/90
                            sm:text-base
                        "
                    >
                        Book fully furnished apartments for short or long stays
                        at the best prices.
                    </p>

                    {/* Trust Features */}
                    <div
                        className="
                            mt-7
                            flex
                            flex-wrap
                            items-center
                            gap-x-7
                            gap-y-4
                        "
                    >
                        {/* Best Price Guarantee */}
                        <div className="flex items-center gap-2">
                            <ShieldCheck
                                size={20}
                                className="text-blue-400"
                                strokeWidth={2}
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    text-white
                                    sm:text-sm
                                "
                            >
                                Best Price Guarantee
                            </span>
                        </div>

                        {/* Secure Booking */}
                        <div className="flex items-center gap-2">
                            <LockKeyhole
                                size={20}
                                className="text-blue-400"
                                strokeWidth={2}
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    text-white
                                    sm:text-sm
                                "
                            >
                                Secure Booking
                            </span>
                        </div>

                        {/* Free Cancellation */}
                        <div className="flex items-center gap-2">
                            <RotateCcw
                                size={20}
                                className="text-blue-400"
                                strokeWidth={2}
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    text-white
                                    sm:text-sm
                                "
                            >
                                Free Cancellation
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApartmentHero;