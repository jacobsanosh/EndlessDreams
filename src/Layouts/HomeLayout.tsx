import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

const HomeLayout = () => {
  return (
    <div id="home-layout">
      <Navbar />
      <LandingPage />

      <div className="block sm:hidden w-full mx-auto border-t border-gray-200 my-1"></div>
      <About />

      <div className="block sm:hidden w-full mx-auto border-t border-gray-200 my-1"></div>
      <Services />

      <div className="block sm:hidden w-full mx-auto border-t border-gray-200 my-1"></div>
      <Testimonial />

      <div className="block sm:hidden w-full mx-auto border-t border-gray-200 my-1"></div>
      <Contact/>


      <Footer />
    </div>
  );
};

export default HomeLayout;
