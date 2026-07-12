import Hero from "../../components/Home/Hero/Hero";
import TravelSearch from "../../components/Home/TravelSearch/TravelSearch";
import PopularDestinations from "../../components/Home/PopularDestinations/PopularDestinations";
import TrustFeatures from "../../components/Home/TrustFeatures/TrustFeatures";
import TravelCategories from "../../components/Home/TravelCategories/TravelCategories";
import FeaturedPackages from "../../components/Home/FeaturedPackages/FeaturedPackages";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import FAQ from "../../components/Home/FAQ/FAQ";
import Newsletter from "../../components/Home/Newsletter/Newsletter";


const Home = () => {
    return (
        <main className="overflow-x-hidden">

            {/* Hero */}
            <Hero />

            {/* Overlapping Travel Search */}
            <div className="relative z-40 -mt-24 md:-mt-28 lg:-mt-32">
                <TravelSearch />
            </div>

            {/* Popular Destinations */}
            <div className="relative z-10 pt-16 lg:pt-20">
                <PopularDestinations />
            </div>

            {/* Trust Features */}
            <TrustFeatures />

            {/* Travel Categories */}
            <TravelCategories />

            {/* Featured Packages */}
            <FeaturedPackages />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* Newsletter */}
            <Newsletter />
        </main>
    );
};

export default Home;