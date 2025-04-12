
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Camera, User, Recycle } from "lucide-react";
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
          <Link to="/scan">
            <Button className="bg-regeni-green hover:bg-regeni-green/90 text-white mr-2">
              <Camera className="h-4 w-4 mr-2" /> Scan
            </Button>
          </Link>
          <Link to="/deposit">
            <Button className="bg-regeni-purple hover:bg-regeni-purple/90 text-white mr-2">
              <Recycle className="h-4 w-4 mr-2" /> Deposit
            </Button>
          </Link>
          <Link to="/account">
            <Button variant="outline" className="border-regeni-purple text-regeni-purple hover:bg-regeni-lightpurple">
              <User className="h-4 w-4 mr-2" /> My Account
            </Button>
          </Link>
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
            <Link to="/scan" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-regeni-green hover:bg-regeni-green/90 text-white w-full mb-2">
                <Camera className="h-4 w-4 mr-2" /> Scan
              </Button>
            </Link>
            <Link to="/deposit" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-regeni-purple hover:bg-regeni-purple/90 text-white w-full mb-2">
                <Recycle className="h-4 w-4 mr-2" /> Deposit
              </Button>
            </Link>
            <Link to="/account" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="border-regeni-purple text-regeni-purple hover:bg-regeni-lightpurple w-full">
                <User className="h-4 w-4 mr-2" /> My Account
              </Button>
            </Link>
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
