import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mb-6 bg-blue-950 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between p-6">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="font-heading text-2xl tracking-widest transition duration-150 hover:text-gray-300"
          >
            ALPACA GENERATOR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="transition duration-150 hover:scale-105 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/customize"
              className="transition duration-150 hover:scale-105 hover:text-gray-300"
            >
              Customize
            </Link>
            <Link
              to="/gallery"
              className="transition duration-150 hover:scale-105 hover:text-gray-300"
            >
              Gallery
            </Link>
            <Link
              to="/customize"
              className="rounded-full border-2 border-white bg-white px-6 py-2 font-semibold text-blue-950 transition duration-150 hover:scale-105 hover:bg-transparent hover:text-white"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="transition duration-150 hover:scale-105 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-blue-800 pt-4 md:hidden">
            <Link
              to="/"
              onClick={toggleMenu}
              className="transition duration-150 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/customize"
              onClick={toggleMenu}
              className="transition duration-150 hover:text-gray-300"
            >
              Customize
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className="transition duration-150 hover:text-gray-300"
            >
              Gallery
            </Link>
            <Link
              to="/customize"
              onClick={toggleMenu}
              className="rounded-full border-2 border-white bg-white px-6 py-2 text-center font-semibold text-blue-950 transition duration-150 hover:bg-transparent hover:text-white"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
