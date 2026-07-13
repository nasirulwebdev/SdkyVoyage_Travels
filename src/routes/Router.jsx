import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// ===========================
// PUBLIC PAGES
// ===========================

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Packages from "../pages/Packages/Packages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";

// ===========================
// DESTINATION PAGES
// ===========================

import Destinations from "../pages/Destinations/Destinations";
import DestinationDetails from "../pages/DestinationDetails/DestinationDetails";
import TourPackages from "../pages/TourPackages/TourPackages";
// ===========================
// FLIGHT PAGES
// ===========================
import FlightsPage from "../pages/Flights/FlightsPage";
import DomesticFlightPage from "../pages/Flights/DomesticFlights/DomesticFlightPage";
import InternationalFlightPage from "../pages/Flights/InternationalFlightPage";
import FlightBookingPage from "../pages/Flights/FlightBookingPage";

// ===========================
// VISA PAGES
// ===========================

import VisaPage from "../pages/Visa/VisaPage";
// ===========================
// HOTEL PAGES
// ===========================

import HotelsPage from "../pages/Hotels/HotelsPage";
import ResortsPage from "../pages/Hotels/Resorts/ResortsPage";
import Apartments from "../pages/Hotels/Apartments/Apartments";
// ===========================
// DASHBOARD PAGES
// ===========================

import UserDashboard from "../pages/Dashboard/UserDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";


const router = createBrowserRouter([

    // ==========================================
    // MAIN WEBSITE
    // ==========================================

    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,

        children: [

            // HOME
            {
                index: true,
                element: <Home />,
            },

            // ABOUT
            {
                path: "about",
                element: <About />,
            },

            // ==========================================
            // DESTINATIONS
            // ==========================================

            // Example:
            // /destinations/asia
            // /destinations/europe
            // /destinations/america
            // /destinations/africa

            {
                path: "destinations/:region",
                element: <Destinations />,
            },

            // Example:
            // /destinations/asia/thailand
            // /destinations/asia/bali
            // /destinations/europe/switzerland

            {
                path: "destinations/:region/:destinationSlug",
                element: <DestinationDetails />,
            },

            // ==========================================
            // TOUR PACKAGES
            // ==========================================

            // TOUR PACKAGES LISTING
            {
                path: "tour-packages",
                element: <TourPackages />,
            },

            // TOUR PACKAGE DETAILS
            {
                path: "tour-packages/:slug",
                element: <PackageDetails />,
            },

            {
                path: "/tour-packages",
                element: <TourPackages />,
            },

            // FLIGHTS

            {
                path: "flights",
                element: <FlightsPage />,
            },
            {
                path: "flights/domestic",
                element: <DomesticFlightPage />,
            },
            {
                path: "flights/international",
                element: <InternationalFlightPage />,
            },
            {
                path: "flights/booking",
                element: <FlightBookingPage />,
            },

            // ==========================================
            // VISA 
            // ==========================================
            {
                path: "visa",
                element: <VisaPage />,
            },
            // ==========================================
            // HOTELS
            // ==========================================

            {
                path: "hotels",
                element: <HotelsPage />,
            },
            {
                path: "hotels/resort",
                element: <ResortsPage />,
            },
            {
                path: "hotels/apartments",
                element: <Apartments />,
            },
            // CONTACT
            {
                path: "contact",
                element: <Contact />,
            },

            // AUTHENTICATION
            {
                path: "login",
                element: <Login />,
            },

            {
                path: "register",
                element: <Register />,
            },

        ],
    },


    // ==========================================
    // DASHBOARD
    // ==========================================

    {
        path: "/dashboard",
        element: <DashboardLayout />,

        children: [

            {
                path: "user",
                element: <UserDashboard />,
            },

            {
                path: "admin",
                element: <AdminDashboard />,
            },

        ],
    },

]);


export default router;