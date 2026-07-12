import { Outlet } from "react-router-dom";

import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";


const MainLayout = () => {


    return (

        <div
            className="
            min-h-screen
            flex
            flex-col
            bg-base-100
            text-base-content
            "
        >


            {/* Scroll Position Reset */}
            <ScrollToTop />



            {/* Website Header */}

            <header>

                <TopBar />

                <Navbar />

            </header>





            {/* Dynamic Page Content */}

            <main
                className="
                flex-1
                "
            >

                <Outlet />

            </main>





            {/* Website Footer */}

            <Footer />


        </div>

    );


};


export default MainLayout;