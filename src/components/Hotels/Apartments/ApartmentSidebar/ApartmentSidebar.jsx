import {
    ShieldCheck,
    LockKeyhole,
    RotateCcw,
    Headphones,
    ArrowRight,
    MapPin,
} from "lucide-react";

import {
    whyBookWithUs,
    topApartmentDestinations,
} from "../../../../data/hotels/apartmentsData";

const ApartmentSidebar = () => {
    const iconMap = {
        shield: ShieldCheck,
        lock: LockKeyhole,
        cancel: RotateCcw,
        support: Headphones,
    };

    return (
        <aside className="space-y-5">

            {/* =========================
                WHY BOOK WITH US
            ========================= */}
            <div
                className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                "
            >
                <div className="border-b border-slate-200 px-5 py-4">
                    <h3 className="text-base font-bold text-slate-900">
                        Why Book With Us?
                    </h3>
                </div>

                <div className="divide-y divide-slate-100 px-5">
                    {whyBookWithUs.map((item) => {
                        const Icon = iconMap[item.icon] || ShieldCheck;

                        return (
                            <div
                                key={item.id}
                                className="flex gap-3 py-4"
                            >
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-blue-50
                                    "
                                >
                                    <Icon
                                        size={17}
                                        className="text-blue-600"
                                    />
                                </div>

                                <div>
                                    <h4
                                        className="
                                            text-xs
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-[11px]
                                            leading-4
                                            text-slate-500
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* =========================
                STAY LONGER OFFER
            ========================= */}
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    to-blue-800
                    p-5
                    text-white
                    shadow-sm
                "
            >
                {/* Decorative Circles */}
                <div
                    className="
                        absolute
                        -right-10
                        -top-10
                        h-32
                        w-32
                        rounded-full
                        bg-white/10
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-14
                        -left-10
                        h-32
                        w-32
                        rounded-full
                        bg-white/5
                    "
                />

                <div className="relative z-10">
                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-white/15
                            px-3
                            py-1
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wide
                        "
                    >
                        Special Offer
                    </span>

                    <h3
                        className="
                            mt-4
                            text-xl
                            font-bold
                            leading-tight
                        "
                    >
                        Stay Longer,
                        <br />
                        Save More
                    </h3>

                    <p
                        className="
                            mt-3
                            text-xs
                            leading-5
                            text-blue-100
                        "
                    >
                        Get up to 25% off when you book
                        apartments for 7 nights or more.
                    </p>

                    <button
                        type="button"
                        className="
                            mt-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-white
                            px-4
                            py-2.5
                            text-xs
                            font-bold
                            text-blue-700
                            transition
                            hover:bg-blue-50
                        "
                    >
                        View Offers
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>


            {/* =========================
                TOP DESTINATIONS
            ========================= */}
            <div
                className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                "
            >
                <div className="border-b border-slate-200 px-5 py-4">
                    <h3 className="text-base font-bold text-slate-900">
                        Top Apartment Destinations
                    </h3>
                </div>

                <div className="p-4">
                    <div className="space-y-3">
                        {topApartmentDestinations.map((destination) => (
                            <button
                                key={destination.id}
                                type="button"
                                className="
                                    group
                                    flex
                                    w-full
                                    items-center
                                    gap-3
                                    text-left
                                "
                            >
                                {/* Destination Image */}
                                <div
                                    className="
                                        h-12
                                        w-14
                                        shrink-0
                                        overflow-hidden
                                        rounded-lg
                                    "
                                >
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    />
                                </div>

                                {/* Destination Info */}
                                <div className="min-w-0 flex-1">
                                    <h4
                                        className="
                                            truncate
                                            text-xs
                                            font-bold
                                            text-slate-900
                                            transition
                                            group-hover:text-blue-600
                                        "
                                    >
                                        {destination.name}
                                    </h4>

                                    <div
                                        className="
                                            mt-1
                                            flex
                                            items-center
                                            gap-1
                                            text-[10px]
                                            text-slate-500
                                        "
                                    >
                                        <MapPin size={11} />

                                        <span>
                                            {destination.count} Apartments
                                        </span>
                                    </div>
                                </div>

                                <ArrowRight
                                    size={14}
                                    className="
                                        text-slate-300
                                        transition
                                        group-hover:translate-x-1
                                        group-hover:text-blue-600
                                    "
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ApartmentSidebar;