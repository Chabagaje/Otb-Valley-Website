import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-darkBg/80 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-white">
          OTBValley
        </Link>
        <div className="flex gap-4 text-sm text-gray-300">
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
          <Link to="/signin" className="hover:text-primary">
            Sign In
          </Link>
          <Link to="/signup" className="hover:text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
