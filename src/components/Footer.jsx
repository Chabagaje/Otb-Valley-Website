import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="glass border-t border-white/5 px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
        <div>
          <span className="font-bold text-white/60">OBTValley</span>
          <span className="mx-2">·</span>
          <span>Nigeria&apos;s #1 Institutional Grade Exchange</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <Link to="/" className="transition hover:text-white/70">
            Trade
          </Link>
          <Link to="/about" className="transition hover:text-white/70">
            About
          </Link>
          <Link to="/services" className="transition hover:text-white/70">
            Services
          </Link>
          <Link to="/contact" className="transition hover:text-white/70">
            Contact
          </Link>
          <Link to="/signup" className="transition hover:text-white/70">
            Sign Up
          </Link>
        </div>
        <span>© 2026 OTBValley • INSTITUTIONAL GRADE TRADING</span>
      </div>
    </footer>
  );
};

export default Footer;
