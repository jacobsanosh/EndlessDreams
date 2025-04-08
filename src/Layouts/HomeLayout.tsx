import About from "./components/About";
import Footer from "./components/footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

const HomeLayout = () => {
  return (
    <div
      id="home-layout"
      className="w-full min-h-screen flex flex-col relative overflow-auto scroll-smooth"
    >
      <LandingPage />
      <Navbar />
      <About />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomeLayout;
