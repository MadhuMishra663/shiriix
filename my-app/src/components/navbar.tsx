import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home page first
      // Wait for navigation & DOM to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200); // Slightly longer delay
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToHero: true } });
    } else {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Shiriix Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Shiriix
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-purple-400 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-purple-400 transition"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-purple-400 transition"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1"
          >
            <span
              className={`w-6 h-0.5 bg-white transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/90 backdrop-blur-md py-6 space-y-6 text-white animate-slideDown">
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-purple-400 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-purple-400 transition"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-purple-400 transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
