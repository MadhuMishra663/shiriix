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
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
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
    <nav className="fixed w-full z-50 bg-white/20 backdrop-blur-lg border-b border-white/20">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* Round Logo */}
          <div className="h-10 w-10 rounded-full overflow-hidden bg-white/50 flex items-center justify-center shadow-md">
            <img
              src={logo}
              alt="Shiriix Logo"
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          {/* Company Name in dark color */}
          <span className="text-xl font-semibold text-gray-900">Shiriix</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-900 font-medium">
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-gray-700 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-gray-700 transition"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-gray-700 transition"
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
              className={`w-6 h-0.5 bg-gray-900 transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/20 backdrop-blur-lg py-6 space-y-6 text-gray-900 animate-slideDown rounded-b-xl shadow-lg">
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-gray-700 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-gray-700 transition"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-gray-700 transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
