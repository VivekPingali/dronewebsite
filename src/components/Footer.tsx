import React from 'react';
import { Bone as Drone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Drone className="h-8 w-8 text-primary" />
              <span className="font-orbitron font-bold text-xl">SkyTech</span>
            </div>
            <p className="text-gray-400">
              Pioneering the future of aerial technology with innovative drone solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-primary">About Us</a></li>
              <li><a href="/products" className="hover:text-primary">Products</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
              <li><a href="/support" className="hover:text-primary">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Drone Street</li>
              <li>Tech City, TC 12345</li>
              <li>contact@skytech.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SkyTech Drones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;