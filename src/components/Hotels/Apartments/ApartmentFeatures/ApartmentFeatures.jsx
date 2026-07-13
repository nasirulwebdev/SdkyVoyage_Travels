import {
    Sofa,
    ShieldCheck,
    CalendarCheck,
    BadgePercent,
    Headphones,
} from "lucide-react";

import {
    apartmentFeatures,
} from "../../../../data/hotels/apartmentsData";

const ApartmentFeatures = () => {
    const iconMap = {
        furnished: Sofa,
        payment: ShieldCheck,
        booking: CalendarCheck,
        discount: BadgePercent,
        support: Headphones,
    };

    return (
        <section
            className="
                border-y
                border-slate-200
                bg-white
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        divide-y
                        divide-slate-200
                        sm:grid-cols-2
                        sm:divide-y-0
                        lg:grid-cols-5
                        lg:divide-x
                    "
                >
                    {apartmentFeatures.map((feature) => {
                        const Icon =
                            iconMap[feature.icon] ||
                            ShieldCheck;

                        return (
                            <div
                                key={feature.id}
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-6
                                    first:pl-0
                                    last:pr-0
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-blue-50
                                    "
                                >
                                    <Icon
                                        size={19}
                                        className="text-blue-600"
                                    />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3
                                        className="
                                            text-xs
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[10px]
                                            leading-4
                                            text-slate-500
                                        "
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ApartmentFeatures;