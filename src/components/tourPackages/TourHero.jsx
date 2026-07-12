import { BriefcaseBusiness } from "lucide-react";
import tourHero from "../../assets/images/tour-packages/tour-hero.jpg";

const TourHero = () => {
    return (
        <section
            className="
                relative
                h-[300px]
                w-full
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
                sm:h-[320px]
                lg:h-[340px]
            "
            style={{
                backgroundImage: `url(${tourHero})`,
            }}
        >
            {/* Dark Gradient Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#061b35]/95
                    via-[#06294b]/70
                    to-[#06294b]/10
                "
            />

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-full
                    w-full
                    max-w-[1440px]
                    items-center
                    px-4
                    pb-[28px]
                    sm:px-6
                    lg:px-8
                "
            >
                <div className="max-w-[650px]">
                    {/* Eyebrow */}
                    <div
                        className="
                            mb-3
                            flex
                            items-center
                            gap-2
                            text-[12px]
                            font-bold
                            uppercase
                            tracking-[0.08em]
                            text-[#fbbf24]
                            sm:text-[13px]
                        "
                    >
                        <BriefcaseBusiness
                            size={16}
                            strokeWidth={2.4}
                        />

                        <span>Handpicked Journeys</span>
                    </div>

                    {/* Main Title */}
                    <h1
                        className="
                            text-[38px]
                            font-extrabold
                            leading-[1]
                            tracking-[-0.03em]
                            text-white
                            sm:text-[46px]
                            lg:text-[54px]
                        "
                    >
                        Tour Packages
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="
                            mt-2
                            font-serif
                            text-[26px]
                            italic
                            leading-[1.15]
                            text-[#fbbf24]
                            sm:text-[32px]
                            lg:text-[38px]
                        "
                    >
                        For Every Kind of Traveler
                    </p>

                    {/* Description */}
                    <p
                        className="
                            mt-4
                            max-w-[540px]
                            text-[13px]
                            font-medium
                            leading-[1.7]
                            text-white/90
                            sm:text-[14px]
                        "
                    >
                        Explore our specially curated tour packages and
                        experience the world with comfort and memories.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TourHero;