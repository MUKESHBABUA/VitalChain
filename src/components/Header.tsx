import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, UserCircle, LogOut, LogIn } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setUser(null);
    alert("Logged out successfully!");
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-r from-red-700 to-indigo-800'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              Vital<span className="text-red-400">⛓️‍💥</span>Chain
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
              <NavLink to="/hospitals" active={location.pathname === "/hospitals"}>Hospitals</NavLink>
              <NavLink to="/statistics" active={location.pathname === "/statistics"}>Statistics</NavLink>
              <NavLink to="/contact" active={location.pathname === "/contact"}>Contact</NavLink>
              {user?.role === "admin" && <NavLink to="/admin" active={location.pathname === "/admin"}>Admin</NavLink>}
              {user && <NavLink to="/user" active={location.pathname === "/user"}>Dashboard</NavLink>}
            </div>
            
            {/* Auth Controls */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-white">
                    <UserCircle className="inline mr-2" size={20} />
                    {user.name}
                  </span>
                  <button onClick={handleLogout} className="px-4 py-2 text-sm font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center">
                    <LogOut className="mr-1" size={16} /> Logout
                  </button>
                </div>
              ) : (
                <Link to="/registration" className="px-4 py-2 text-sm font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center">
                  <LogIn className="mr-1" size={16} /> Login / Register
                </Link>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="p-2 text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-8"></div>
    </>
  );
};

// Navigation Link Component
const NavLink = ({ to, children, active }) => (
  <Link to={to} className={`text-lg font-medium transition-all duration-300 ${
    active ? 'text-red-600' : 'text-white hover:text-red-200'}`}>{children}</Link>
);

export default Header;
