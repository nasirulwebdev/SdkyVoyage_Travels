import {
    BadgeCheck,
    Check,
    Clock3,
    Copy,
    Headphones,
    ShieldCheck,
    Sparkles,
    Tag,
    WalletCards,
} from "lucide-react";

const specialOffers = [
    {
        id: 1,
        discount: "20% OFF",
        title: "Domestic Flight Deal",
        description: "Save up to 20% on selected domestic flights.",
        promoCode: "FLY20",
        theme: "from-[#0b214a] via-[#123665] to-[#16b364]",
    },
    {
        id: 2,
        discount: "৳500 OFF",
        title: "First Booking Offer",
        description: "Get instant discount on your first flight booking.",
        promoCode: "FIRST500",
        theme: "from-[#16b364] via-[#0fa765] to-[#0b6b54]",
    },
];

const bookingBenefits = [
    {
        id: 1,
        icon: BadgeCheck,
        title: "Best Price Guarantee",
        description: "Find the best available domestic flight fares.",
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: "100% Secure Booking",
        description: "Your payment and personal data stay protected.",
    },
    {
        id: 3,
        icon: Headphones,
        title: "24/7 Customer Support",
        description: "Our travel experts are always ready to help.",
    },
    {
        id: 4,
        icon: WalletCards,
        title: "Easy Payment",
        description: "Enjoy fast, simple and convenient payment options.",
    },
];

const DomesticRightSidebar = () => {
    const handleCopyPromo = async (promoCode) => {
        try {
            await navigator.clipboard.writeText(promoCode);
        } catch (error) {
            console.error("Promo code copy failed:", error);
        }
    };

    return (
        <aside className="space-y-6">

            {/* =====================================
                SPECIAL OFFERS
            ====================================== */}
            <section
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                "
            >
                {/* Header */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-100
                        px-5
                        py-4
                    "
                >
                    <div className="flex items-center gap-2.5">
                        <div
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#effaf4]
                                text-[#16b364]
                            "
                        >
                            <Tag size={18} />
                        </div>

                        <div>
                            <h2
                                className="
                                    text-base
                                    font-extrabold
                                    text-[#0b214a]
                                "
                            >
                                Special Offers
                            </h2>

                            <p className="mt-0.5 text-[11px] text-slate-400">
                                Save more on your booking
                            </p>
                        </div>
                    </div>

                    <Sparkles
                        size={18}
                        className="text-amber-400"
                    />
                </div>

                {/* Offers */}
                <div className="space-y-4 p-4">
                    {specialOffers.map((offer) => (
                        <article
                            key={offer.id}
                            className={`
                                relative
                                overflow-hidden
                                rounded-xl
                                bg-gradient-to-br
                                ${offer.theme}
                                p-5
                                text-white
                                shadow-[0_10px_25px_rgba(15,23,42,0.12)]
                            `}
                        >
                            {/* Decorative circles */}
                            <div
                                className="
                                    absolute
                                    -right-8
                                    -top-8
                                    h-28
                                    w-28
                                    rounded-full
                                    bg-white/10
                                "
                            />

                            <div
                                className="
                                    absolute
                                    -bottom-10
                                    -left-8
                                    h-24
                                    w-24
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
                                        text-[11px]
                                        font-extrabold
                                        tracking-wide
                                        backdrop-blur-sm
                                    "
                                >
                                    {offer.discount}
                                </span>

                                <h3
                                    className="
                                        mt-4
                                        text-lg
                                        font-extrabold
                                        leading-tight
                                    "
                                >
                                    {offer.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        leading-5
                                        text-white/75
                                    "
                                >
                                    {offer.description}
                                </p>

                                {/* Promo Code */}
                                <div
                                    className="
                                        mt-4
                                        flex
                                        items-center
                                        justify-between
                                        gap-2
                                        rounded-lg
                                        border
                                        border-white/20
                                        bg-white/10
                                        px-3
                                        py-2.5
                                        backdrop-blur-sm
                                    "
                                >
                                    <div>
                                        <p className="text-[9px] uppercase tracking-wider text-white/60">
                                            Promo Code
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                text-xs
                                                font-extrabold
                                                tracking-[0.12em]
                                            "
                                        >
                                            {offer.promoCode}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleCopyPromo(
                                                offer.promoCode
                                            )
                                        }
                                        aria-label={`Copy ${offer.promoCode} promo code`}
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-[#0b214a]
                                            transition
                                            hover:scale-105
                                        "
                                    >
                                        <Copy size={14} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>


            {/* =====================================
                WHY BOOK WITH US
            ====================================== */}
            <section
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                "
            >
                {/* Header */}
                <div
                    className="
                        border-b
                        border-slate-100
                        px-5
                        py-4
                    "
                >
                    <h2
                        className="
                            text-base
                            font-extrabold
                            text-[#0b214a]
                        "
                    >
                        Why Book With Us?
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                        Travel with confidence
                    </p>
                </div>

                {/* Benefits */}
                <div className="divide-y divide-slate-100">
                    {bookingBenefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.id}
                                className="
                                    group
                                    flex
                                    gap-3.5
                                    px-5
                                    py-4
                                    transition
                                    hover:bg-[#fbfdfc]
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#effaf4]
                                        text-[#16b364]
                                        transition
                                        group-hover:bg-[#16b364]
                                        group-hover:text-white
                                    "
                                >
                                    <Icon size={19} />
                                </div>

                                <div>
                                    <h3
                                        className="
                                            text-sm
                                            font-bold
                                            text-[#0b214a]
                                        "
                                    >
                                        {benefit.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[11px]
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Support Footer */}
                <div
                    className="
                        border-t
                        border-slate-100
                        bg-[#f8fbf9]
                        px-5
                        py-4
                    "
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#16b364]
                                text-white
                            "
                        >
                            <Clock3 size={17} />
                        </div>

                        <div>
                            <p
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    text-xs
                                    font-bold
                                    text-[#0b214a]
                                "
                            >
                                <Check
                                    size={13}
                                    className="text-[#16b364]"
                                />
                                We're here 24/7
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-400">
                                Get help whenever you need it
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </aside>
    );
};

export default DomesticRightSidebar;