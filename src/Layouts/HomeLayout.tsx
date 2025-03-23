import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

const HomeLayout = () => {
  return (
    <div id="home-layout" className="w-ful h-full flex flex-col relative">
      <LandingPage />
      <Navbar />
    </div>
  );
};

export default HomeLayout;
