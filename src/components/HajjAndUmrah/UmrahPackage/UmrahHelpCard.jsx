import {
    Headphones,
    Mail,
    MessageCircle,
    Phone,
} from "lucide-react";


const UmrahHelpCard = ({
    title = "Need Help?",
    description = "Our Umrah travel experts are ready to help you choose the perfect package for your spiritual journey.",
    phone = "+880 1234-567890",
    email = "support@skyvoyage.com",
    buttonText = "Contact Us",
    onContact,
}) => {


    // =====================================
    // CONTACT HANDLER
    // =====================================

    const handleContact = () => {

        if (onContact) {
            onContact();
            return;
        }

        window.location.href = "/contact";

    };


    // =====================================
    // PHONE HANDLER
    // =====================================

    const handlePhoneCall = () => {

        const cleanPhone = phone.replace(
            /[^+\d]/g,
            ""
        );

        window.location.href = `tel:${cleanPhone}`;

    };


    // =====================================
    // EMAIL HANDLER
    // =====================================

    const handleEmail = () => {

        window.location.href = `mailto:${email}`;

    };


    return (

        <div
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-br
                from-emerald-800
                via-emerald-700
                to-emerald-900
                p-6
                text-white
                shadow-lg
            "
        >


            {/* DECORATIVE CIRCLES */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-700
                    group-hover:scale-125
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-16
                    -left-16
                    h-40
                    w-40
                    rounded-full
                    bg-white/5
                "
            />


            {/* CONTENT */}

            <div className="relative z-10">


                {/* ICON */}

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/15
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:bg-white
                        group-hover:text-emerald-700
                    "
                >

                    <Headphones
                        size={27}
                        strokeWidth={2}
                    />

                </div>


                {/* TITLE */}

                <h3
                    className="
                        mt-5
                        text-xl
                        font-extrabold
                    "
                >
                    {title}
                </h3>


                {/* DESCRIPTION */}

                <p
                    className="
                        mt-2
                        text-sm
                        leading-6
                        text-white/80
                    "
                >
                    {description}
                </p>


                {/* CONTACT INFORMATION */}

                <div
                    className="
                        mt-5
                        space-y-3
                    "
                >


                    {/* PHONE */}

                    <button
                        type="button"
                        onClick={handlePhoneCall}
                        className="
                            group/phone
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            bg-white/10
                            p-3
                            text-left
                            transition-all
                            duration-300
                            hover:bg-white/20
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
                                bg-white/15
                                transition-all
                                duration-300
                                group-hover/phone:bg-white
                                group-hover/phone:text-emerald-700
                            "
                        >

                            <Phone size={17} />

                        </div>


                        <div className="min-w-0">

                            <p
                                className="
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-white/60
                                "
                            >
                                Call Us
                            </p>

                            <p
                                className="
                                    truncate
                                    text-sm
                                    font-bold
                                "
                            >
                                {phone}
                            </p>

                        </div>

                    </button>


                    {/* EMAIL */}

                    <button
                        type="button"
                        onClick={handleEmail}
                        className="
                            group/email
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            bg-white/10
                            p-3
                            text-left
                            transition-all
                            duration-300
                            hover:bg-white/20
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
                                bg-white/15
                                transition-all
                                duration-300
                                group-hover/email:bg-white
                                group-hover/email:text-emerald-700
                            "
                        >

                            <Mail size={17} />

                        </div>


                        <div className="min-w-0">

                            <p
                                className="
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-white/60
                                "
                            >
                                Email Us
                            </p>

                            <p
                                className="
                                    truncate
                                    text-sm
                                    font-bold
                                "
                            >
                                {email}
                            </p>

                        </div>

                    </button>

                </div>


                {/* CONTACT BUTTON */}

                <button
                    type="button"
                    onClick={handleContact}
                    className="
                        group/button
                        mt-5
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-white
                        px-5
                        py-3
                        text-sm
                        font-extrabold
                        text-emerald-800
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-amber-400
                        hover:text-slate-900
                        hover:shadow-lg
                        active:translate-y-0
                    "
                >

                    <MessageCircle
                        size={18}
                        className="
                            transition-transform
                            duration-300
                            group-hover/button:scale-110
                        "
                    />

                    {buttonText}

                </button>

            </div>

        </div>

    );

};


export default UmrahHelpCard;