import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="home"
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 shadow-md text-red-400",
        scrolled ? "bg-white  text-black" : "bg-transparent",
        isNavOpen && "bg-white"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-blue-500"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsNavOpen(false);
          }}
        >
          EndlessDreams
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? <X color="black" /> : <Menu color="black" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <div className="fixed top-16 left-0 right-0 bottom-0 shadow-md md:hidden w-full h-[calc(100%-64px)] bg-white">
            <div className="flex flex-col items-center py-4">
              <a
                href="#about"
                className="py-2 hover:text-blue-500"
                onClick={() => setIsNavOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="py-2 hover:text-blue-500"
                onClick={() => setIsNavOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="py-2 hover:text-blue-500"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
