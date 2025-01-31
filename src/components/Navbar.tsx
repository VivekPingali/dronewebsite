import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bone as Drone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 fixed w-full z-50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Drone className="h-8 w-8 text-primary" />
            <span className="font-orbitron font-bold text-xl tracking-wider">SkyTech Drones</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="font-medium hover:text-primary transition-colors tracking-wide">Home</Link>
              <Link to="/about" className="font-medium hover:text-primary transition-colors tracking-wide">About</Link>
              <Link to="/products" className="font-medium hover:text-primary transition-colors tracking-wide">Products</Link>
              <Link to="/contact" className="font-medium hover:text-primary transition-colors tracking-wide">Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-gray-800">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-800">About</Link>
            <Link to="/products" className="block px-3 py-2 rounded-md hover:bg-gray-800">Products</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-800">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;