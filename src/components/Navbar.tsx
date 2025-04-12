
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold gradient-text">RegeniScan</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button className="bg-regeni-purple hover:bg-regeni-purple/90 text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            <Button className="bg-regeni-purple hover:bg-regeni-purple/90 text-white">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to="/" className="text-gray-700 hover:text-regeni-purple font-medium">
        Home
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-regeni-purple font-medium">
        About
      </Link>
      <Link to="/features" className="text-gray-700 hover:text-regeni-purple font-medium">
        Features
      </Link>
      <Link to="/technology" className="text-gray-700 hover:text-regeni-purple font-medium">
        Technology
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-regeni-purple font-medium">
        Contact
      </Link>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <Link
        to="/"
        className="text-gray-700 hover:text-regeni-purple font-medium py-2 border-b"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-gray-700 hover:text-regeni-purple font-medium py-2 border-b"
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        to="/features"
        className="text-gray-700 hover:text-regeni-purple font-medium py-2 border-b"
        onClick={closeMenu}
      >
        Features
      </Link>
      <Link
        to="/technology"
        className="text-gray-700 hover:text-regeni-purple font-medium py-2 border-b"
        onClick={closeMenu}
      >
        Technology
      </Link>
      <Link
        to="/contact"
        className="text-gray-700 hover:text-regeni-purple font-medium py-2 border-b"
        onClick={closeMenu}
      >
        Contact
      </Link>
    </>
  );
};

export default Navbar;
