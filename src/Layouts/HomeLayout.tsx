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
      <About />
      <Services />
      <Testimonial />
      <Contact/>
      <Footer />
    </div>
  );
};

export default HomeLayout;
