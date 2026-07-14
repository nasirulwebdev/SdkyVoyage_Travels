import {
    BedDouble,
    Headphones,
    Mail,
    Phone,
    ShieldCheck,
    UserCheck,
    Utensils,
} from "lucide-react";

import {
    hajjUmrahSidebarData,
} from "../../data/HajjAndUmrah/HajjAndUmrahData";
import { Link } from "react-router-dom";

const iconMap = {
    ShieldCheck,
    UserCheck,
    BedDouble,
    Utensils,
    Headphones,
};


const HajjUmrahSidebar = () => {
    const {
        whyChooseUs,
        help,
        guide,
    } = hajjUmrahSidebarData;


    return (
        <aside className="w-full space-y-5">

            {/* =========================
                WHY CHOOSE US
            ========================== */}
            <div
                className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-5
                    shadow-sm
                "
            >
                <h3
                    className="
                        mb-5
                        text-lg
                        font-bold
                        text-gray-900
                    "
                >
                    {whyChooseUs.title}
                </h3>

                <div className="space-y-5">
                    {whyChooseUs.items.map((item) => {
                        const Icon =
                            iconMap[item.icon] ||
                            ShieldCheck;

                        return (
                            <div
                                key={item.id}
                                className="flex items-start gap-3"
                            >
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-orange-50
                                        text-orange-500
                                    "
                                >
                                    <Icon size={18} />
                                </div>

                                <div>
                                    <h4
                                        className="
                                            text-sm
                                            font-semibold
                                            text-gray-900
                                        "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            leading-5
                                            text-gray-500
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
                NEED HELP
            ========================== */}
            <div
                className="
                    rounded-2xl
                    bg-[#0b4f46]
                    p-5
                    text-white
                    shadow-lg
                "
            >
                <div
                    className="
                        mb-4
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                    "
                >
                    <Headphones size={23} />
                </div>

                <h3 className="text-xl font-bold">
                    {help.title}
                </h3>

                <p
                    className="
                        mt-2
                        text-sm
                        leading-6
                        text-white/75
                    "
                >
                    {help.description}
                </p>


                {/* Phone */}
                <a
                    href={help.phone.href}
                    className="
                        mt-5
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-white/10
                        p-3
                        transition
                        hover:bg-white/15
                    "
                >
                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-orange-500
                        "
                    >
                        <Phone size={17} />
                    </div>

                    <div>
                        <p className="text-xs text-white/60">
                            {help.phone.label}
                        </p>

                        <p className="text-sm font-semibold">
                            {help.phone.value}
                        </p>
                    </div>
                </a>


                {/* Email */}
                <a
                    href={help.email.href}
                    className="
                        mt-3
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-white/10
                        p-3
                        transition
                        hover:bg-white/15
                    "
                >
                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-orange-500
                        "
                    >
                        <Mail size={17} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-white/60">
                            {help.email.label}
                        </p>

                        <p className="truncate text-sm font-semibold">
                            {help.email.value}
                        </p>
                    </div>
                </a>
            </div>


            {/* =========================
                GUIDE CARD
            ========================== */}
            <div
                className="
                    rounded-2xl
                    border
                    border-orange-100
                    bg-orange-50
                    p-5
                "
            >
                <h3
                    className="
                        text-base
                        font-bold
                        text-gray-900
                    "
                >
                    {guide.title}
                </h3>

                <p
                    className="
                        mt-2
                        text-sm
                        leading-6
                        text-gray-600
                    "
                >
                    {guide.description}
                </p>

                <Link
                    to={guide.link}
                    className="
                            mt-5
                            flex
                            w-32
                            h-8
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#0b4f46]
                            px-5
                            py-3
                            text-sm
                            font-bold
                            text-white
                            transition
                            duration-300
                            hover:bg-[#083d37]
                            hover:shadow-lg
                        "
                >
                    {guide.buttonText}
                </Link>
            </div>

        </aside>
    );
};


export default HajjUmrahSidebar;