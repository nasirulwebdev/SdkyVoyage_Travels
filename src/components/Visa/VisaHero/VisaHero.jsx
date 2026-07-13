import {
    BadgeCheck,
    ShieldCheck,
    Timer,
    FileCheck2,
} from "lucide-react";

import visaHero from "../../../assets/images/visa/visa-hero.jpg";

const VisaHero = () => {
    return (
        <section
            className="
                relative
                w-full
                bg-cover
                bg-center
                bg-no-repeat
                pt-20
                pb-[110px]
            "
            style={{
                backgroundImage: `url(${visaHero})`,
            }}
        >
            {/* Light overlay for text readability */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#eaf6ff]
                    via-[#eaf6ff]/40
                    to-transparent
                "
            />

            {/* Hero Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1440px]
                    px-6
                    xl:px-10
                "
            >
                <div
                    className="
                        flex
                        max-w-[620px]
                        flex-col
                        justify-center
                    "
                >
                    {/* Small Badge */}
                    <div
                        className="
                            mb-3
                            inline-flex
                            w-fit
                            items-center
                            gap-2
                            rounded-md
                            bg-[#dcecff]
                            px-3
                            py-1.5
                            text-[12px]
                            font-semibold
                            text-[#0866ff]
                        "
                    >
                        <ShieldCheck size={15} strokeWidth={2.2} />

                        <span>
                            Your Journey, Our Priority
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="
                            text-[46px]
                            font-extrabold
                            leading-[1.1]
                            tracking-[-1.2px]
                            text-[#071c4d]
                        "
                    >
                        Visa Services
                    </h1>

                    {/* Subtitle */}
                    <h2
                        className="
                            mt-2
                            text-[20px]
                            font-bold
                            leading-[1.3]
                            text-[#0965ff]
                        "
                    >
                        Fast, Reliable & Hassle-Free Visa Solutions
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-3
                            max-w-[560px]
                            text-[14px]
                            font-medium
                            leading-[1.7]
                            text-[#263653]
                        "
                    >
                        We provide professional visa assistance for tourist,
                        business, student and work visas to 100+ countries
                        worldwide.
                    </p>

                    {/* Benefits */}
                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            gap-10
                        "
                    >
                        <div className="flex items-center gap-2">
                            <BadgeCheck
                                size={17}
                                className="text-[#0866ff]"
                                strokeWidth={2.4}
                            />

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    text-[#152544]
                                "
                            >
                                Expert Guidance
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FileCheck2
                                size={17}
                                className="text-[#0866ff]"
                                strokeWidth={2.4}
                            />

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    text-[#152544]
                                "
                            >
                                High Success Rate
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Timer
                                size={17}
                                className="text-[#0866ff]"
                                strokeWidth={2.4}
                            />

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    text-[#152544]
                                "
                            >
                                Fast Processing
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <ShieldCheck
                                size={17}
                                className="text-[#0866ff]"
                                strokeWidth={2.4}
                            />

                            <span
                                className="
                                    text-[12px]
                                    font-semibold
                                    text-[#152544]
                                "
                            >
                                Secure Service
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaHero;