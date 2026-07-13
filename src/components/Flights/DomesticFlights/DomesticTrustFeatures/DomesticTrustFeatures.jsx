import {
    BadgeCheck,
    Headphones,
    ShieldCheck,
} from "lucide-react";


const DomesticTrustFeatures = () => {

    const features = [
        {
            icon: ShieldCheck,
            title: "Secure Booking",
            desc: "Safe and protected payment",
        },

        {
            icon: BadgeCheck,
            title: "Best Price Guarantee",
            desc: "Get the lowest flight fares",
        },

        {
            icon: Headphones,
            title: "24/7 Customer Support",
            desc: "We're here whenever you need",
        },
    ];


    return (

        <section
            className="
                border-t
                border-slate-200
                bg-white
                py-8
            "
        >

            <div
                className="
                    mx-auto
                    grid
                    max-w-[1320px]
                    grid-cols-1
                    gap-5
                    px-5
                    sm:grid-cols-3
                    lg:px-8
                "
            >

                {
                    features.map((item,index)=>{

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-slate-100
                                    bg-white
                                    p-5
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#effaf4]
                                    "
                                >

                                    <Icon
                                        size={24}
                                        className="text-[#16b364]"
                                    />

                                </div>



                                <div>

                                    <h3
                                        className="
                                            text-sm
                                            font-bold
                                            text-[#0b214a]
                                        "
                                    >
                                        {item.title}
                                    </h3>


                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            text-slate-500
                                        "
                                    >
                                        {item.desc}
                                    </p>

                                </div>


                            </div>

                        );

                    })
                }

            </div>

        </section>

    );
};


export default DomesticTrustFeatures;