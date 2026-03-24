import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "GRC", id: "grc" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 
        backdrop-blur-xl bg-black/60 
        ${scrolled ? "border-b border-dark-600" : "border-b border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-1.5 cursor-pointer group"
        >
          <span className="text-xl font-extrabold text-white tracking-tight">
            Shiriix
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse group-hover:scale-150 transition-transform" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="ml-4 px-5 py-2 text-sm font-semibold text-black rounded-full
              bg-white hover:bg-accent-purple hover:text-white
              transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-dark-900 border-b border-dark-600 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              handleScroll("contact");
            }}
            className="px-6 py-2.5 mt-2 text-sm font-semibold text-black rounded-full
              bg-white hover:bg-accent-purple hover:text-white transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
