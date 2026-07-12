import contact from "../../config/contact";
import { Mail, Phone } from "../../utils/icons";


const ContactInfo = () => {


    const phoneLink =
    `tel:${contact.phone.replace(/\s+/g,"")}`;


    const emailLink =
    `mailto:${contact.email}`;



    return (


        <div

        className="
        flex
        items-center
        gap-2
        "

        >


            {/* PHONE */}

            <a

            href={phoneLink}

            className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            px-3
            py-2
            text-sm
            font-medium
            text-white/90
            transition
            duration-300
            hover:bg-white/10
            hover:text-white
            "

            >


                <Phone

                size={16}

                className="
                transition
                group-hover:scale-110
                "

                />


                <span

                className="
                hidden
                2xl:block
                "

                >

                    {contact.phone}

                </span>


            </a>




            {/* DIVIDER */}

            <span

            className="
            hidden
            xl:block
            h-5
            w-px
            bg-white/30
            "

            />




            {/* EMAIL */}

            <a

            href={emailLink}

            className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            px-3
            py-2
            text-sm
            font-medium
            text-white/90
            transition
            duration-300
            hover:bg-white/10
            hover:text-white
            "

            >


                <Mail

                size={16}

                className="
                transition
                group-hover:scale-110
                "

                />


                <span

                className="
                hidden
                xl:block
                "

                >

                    {contact.email}

                </span>


            </a>


        </div>


    );

};


export default ContactInfo;