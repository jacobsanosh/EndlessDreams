import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

const HomeLayout = () => {
  return (
    <div
      id="home-layout"
      className="w-full min-h-screen flex flex-col relative overflow-auto scroll-smooth"
    >
      <LandingPage />
      <Navbar />
      <About />
    </div>
  );
};

export default HomeLayout;
