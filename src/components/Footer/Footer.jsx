import {
  Plane,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


const Footer = () => {

  return (

    <footer
      className="
      bg-[#0B1F3A]
      text-white
      mt-20
      "
    >


      {/* Main Footer */}

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-10
        "
      >


        {/* Brand Section */}

        <div>

          <div
            className="
            flex
            items-center
            gap-3
            mb-5
            "
          >

            <div
              className="
              bg-[#D4AF37]
              p-3
              rounded-full
              "
            >

              <Plane
                size={26}
                className="text-[#0B1F3A]"
              />

            </div>


            <h2
              className="
              text-2xl
              font-bold
              "
            >

              SkyVoyage
              <span className="text-[#D4AF37]">
                Travels
              </span>

            </h2>


          </div>



          <p
            className="
            text-gray-300
            leading-relaxed
            "
          >

            Your journey begins beyond the sky.
            Explore the world with premium travel
            experiences.

          </p>



          {/* Social Icons */}

          <div
            className="
            flex
            gap-4
            mt-6
            "
          >


            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-white/10
              hover:bg-[#D4AF37]
              hover:text-[#0B1F3A]
              transition
              "
            >

              <FaFacebookF />

            </a>



            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-white/10
              hover:bg-[#D4AF37]
              hover:text-[#0B1F3A]
              transition
              "
            >

              <FaInstagram />

            </a>



            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-white/10
              hover:bg-[#D4AF37]
              hover:text-[#0B1F3A]
              transition
              "
            >

              <FaTwitter />

            </a>



            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-white/10
              hover:bg-[#D4AF37]
              hover:text-[#0B1F3A]
              transition
              "
            >

              <FaYoutube />

            </a>


          </div>


        </div>





        {/* Quick Links */}

        <div>

          <h3
            className="
            text-xl
            font-semibold
            mb-5
            text-[#D4AF37]
            "
          >

            Quick Links

          </h3>


          <ul
            className="
            space-y-3
            text-gray-300
            "
          >

            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer">
              Tour Packages
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>


          </ul>


        </div>





        {/* Services */}

        <div>


          <h3
            className="
            text-xl
            font-semibold
            mb-5
            text-[#D4AF37]
            "
          >

            Services

          </h3>



          <ul
            className="
            space-y-3
            text-gray-300
            "
          >

            <li>
              Flight Booking
            </li>

            <li>
              Hotel Reservation
            </li>

            <li>
              Visa Assistance
            </li>

            <li>
              Holiday Packages
            </li>


          </ul>


        </div>





        {/* Contact */}

        <div>


          <h3
            className="
            text-xl
            font-semibold
            mb-5
            text-[#D4AF37]
            "
          >

            Contact

          </h3>



          <div
            className="
            space-y-4
            text-gray-300
            "
          >


            <p
              className="
              flex
              gap-3
              items-center
              "
            >

              <MapPin size={18}/>
              Bangladesh

            </p>



            <p
              className="
              flex
              gap-3
              items-center
              "
            >

              <Phone size={18}/>
              +880 1234 567890

            </p>



            <p
              className="
              flex
              gap-3
              items-center
              "
            >

              <Mail size={18}/>
              info@skyvoyagetravels.com

            </p>


          </div>


        </div>


      </div>





      {/* Bottom Footer */}


      <div
        className="
        border-t
        border-gray-700
        py-5
        text-center
        text-gray-400
        "
      >

        © {new Date().getFullYear()}
        {" "}
        SkyVoyage Travels.
        All Rights Reserved.

      </div>



    </footer>

  )

}


export default Footer;