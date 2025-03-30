import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Vital⛓️‍💥Chain</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering healthcare with seamless digital records and access to quality services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Hospitals", "Statistics", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-medium text-white">Address:</span> 123 Healthcare Ave, NY 10001</li>
              <li><span className="font-medium text-white">Phone:</span> (555) 123-4567</li>
              <li><span className="font-medium text-white">Email:</span> info@vitalchain.com</li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-transform transform hover:scale-110 duration-300"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VitalChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
