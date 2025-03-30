import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for visual effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-r from-blue-700 to-indigo-800 backdrop-blur-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="/Assests/image (1).png" 
                    alt="VitalChain Logo" 
                    className={`h-12 w-12 transition-all duration-300 group-hover:scale-110 ${
                      scrolled ? 'filter brightness-90' : 'drop-shadow-md'
                    }`}
                  />
                  <div className="absolute -inset-1 bg-blue-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  Vital<span className="text-blue-400">⛓️‍💥</span>Chain
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <NavLink to="/" active={location.pathname === "/" || location.pathname === "/home"} scrolled={scrolled}>
                <Home size={18} className="mr-1" />
                Home
              </NavLink>
              <NavLink to="/hospitals" active={location.pathname === "/hospitals"} scrolled={scrolled}>Hospitals</NavLink>
              <NavLink to="/Statistics" active={location.pathname === "/Statistics"} scrolled={scrolled}>Statistics</NavLink>
              <NavLink to="/contact" active={location.pathname === "/contact"} scrolled={scrolled}>Contact</NavLink>
              <Link 
                to="/registration" 
                className={`ml-2 inline-flex items-center px-6 py-2.5 text-lg font-medium rounded-md transition-all duration-300 ${
                  scrolled 
                  ? 'text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-blue-300/50 hover:-translate-y-0.5' 
                  : 'text-blue-100 bg-blue-600 hover:bg-blue-500 shadow hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                Login/Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  scrolled 
                  ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-3 pb-4 space-y-2">
              <MobileNavLink to="/" active={location.pathname === "/" || location.pathname === "/home"} scrolled={scrolled} onClick={toggleMenu}>
                <div className="flex items-center">
                  <Home size={18} className="mr-2" />
                  Home
                </div>
              </MobileNavLink>
              <MobileNavLink to="/hospitals" active={location.pathname === "/hospitals"} scrolled={scrolled} onClick={toggleMenu}>Hospitals</MobileNavLink>
              <MobileNavLink to="/Statistics" active={location.pathname === "/Statistics"} scrolled={scrolled} onClick={toggleMenu}>Statistics</MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === "/contact"} scrolled={scrolled} onClick={toggleMenu}>Contact</MobileNavLink>
              <div className="pt-2 pb-2">
                <Link 
                  to="/registration" 
                  className={`block w-full text-center px-5 py-3 text-lg font-medium rounded-md transition-all duration-300 ${
                    scrolled 
                    ? 'text-white bg-blue-600 hover:bg-blue-700' 
                    : 'text-white bg-blue-600 hover:bg-blue-500'
                  }`}
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Added spacer div to create margin after the navbar */}
      <div className="h-8"></div>
    </>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children, active, scrolled }) => (
  <Link 
    to={to} 
    className={`relative text-lg font-medium transition-all duration-300 group flex items-center ${
      active
        ? scrolled ? 'text-blue-600' : 'text-white'
        : scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-blue-100 hover:text-white'
    }`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-all duration-300 ${
      active
        ? scrolled ? 'bg-blue-600 scale-x-100' : 'bg-white scale-x-100'
        : scrolled ? 'bg-blue-600 scale-x-0 group-hover:scale-x-100' : 'bg-white scale-x-0 group-hover:scale-x-100'
    }`}></span>
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, children, active, scrolled, onClick }) => (
  <Link 
    to={to} 
    className={`block px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
      active
        ? scrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-blue-500/20'
        : scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-blue-100 hover:text-white hover:bg-blue-500/20'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;