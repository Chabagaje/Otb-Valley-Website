import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Market", href: "#market" },
    { label: "Gift Cards", href: "#giftcard" },
  ];

  const pageLinks = [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="glow-text">OTBValley</span>
        </Link>

        <div className="hidden items-center gap-8 text-base font-bold md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 transition hover:text-indigo-300"
            >
              {link.label}
            </a>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white/80 transition hover:text-indigo-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/signup"
            className="glass-button glass-button-primary rounded-full px-5 py-2.5 text-sm font-bold"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="text-2xl text-white/70 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="glass border-t border-white/5 px-4 py-6 text-base font-bold md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 transition hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/80 transition hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/signup"
              className="glass-button glass-button-primary mt-2 w-full justify-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
