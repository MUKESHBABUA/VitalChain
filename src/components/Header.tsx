import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCircle, LogOut, LogIn } from "lucide-react";
import logo from "/Assests/image (2).png"; // Replace with your actual logo path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    setUser(null);
    alert("Logged out successfully!");
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "shadow-md bg-gray-900" : "bg-gradient-to-r from-red-900 to-gray-900"
        } text-white py-3`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="VitalChain Logo" className="h-10" />
              <span className="text-2xl font-bold tracking-tight">Vital<span className="text-red-400">⛓️‍💥</span>Chain</span>
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
                  <span className="text-lg font-semibold">
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-2 bg-gray-800 rounded-lg shadow-lg">
              <NavLink to="/" active={location.pathname === "/"} mobile>Home</NavLink>
              <NavLink to="/hospitals" active={location.pathname === "/hospitals"} mobile>Hospitals</NavLink>
              <NavLink to="/statistics" active={location.pathname === "/statistics"} mobile>Statistics</NavLink>
              <NavLink to="/contact" active={location.pathname === "/contact"} mobile>Contact</NavLink>
              {user?.role === "admin" && <NavLink to="/admin" active={location.pathname === "/admin"} mobile>Admin</NavLink>}
              {user && <NavLink to="/user" active={location.pathname === "/user"} mobile>Dashboard</NavLink>}
              {user ? (
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-white hover:bg-red-700">
                  <LogOut className="inline mr-2" size={16} /> Logout
                </button>
              ) : (
                <Link to="/registration" className="block px-4 py-2 text-white hover:bg-red-700">
                  <LogIn className="inline mr-2" size={16} /> Login / Register
                </Link>
              )}
            </div>
          )}
        </nav>
      </header>
      <div className="h-16"></div>
    </>
  );
};

// Navigation Link Component
const NavLink = ({ to, children, active, mobile }) => (
  <Link
    to={to}
    className={`block ${mobile ? "px-4 py-2" : "text-lg font-medium"} transition-all duration-300 ${
      active ? "text-white bg-red-700 px-3 py-1 rounded-md" : "text-gray-300 hover:text-white hover:bg-red-600 px-3 py-1 rounded-md"
    }`}
  >
    {children}
  </Link>
);

export default Header;
