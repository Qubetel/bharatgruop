import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logoSign from '../assets/bharat-group/logo-sign.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoSign} alt="Bharat Group" className="w-8 h-8" />
              <span className="text-2xl font-bold">Bharat Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of eco-friendly machinery since 2005. Quality you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors p-2" aria-label="Follow us on Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors p-2" aria-label="Follow us on Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors p-2" aria-label="Follow us on Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors p-2" aria-label="Follow us on LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/machines" className="text-gray-400 hover:text-green-500 transition-colors">
                  Our Machines
                </Link>
              </li>
              <li>
                <Link to="/contact#send-message" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/machines?product=1" className="text-gray-400 hover:text-green-500 transition-colors">
                  Agarbatti Making Machines
                </Link>
              </li>
              <li>
                <Link to="/machines?product=5" className="text-gray-400 hover:text-green-500 transition-colors">
                  Paper Plate Machines
                </Link>
              </li>
              <li>
                <Link to="/machines?product=3" className="text-gray-400 hover:text-green-500 transition-colors">
                  Paper Cup Machines
                </Link>
              </li>
              <li>
                <Link to="/machines?product=2" className="text-gray-400 hover:text-green-500 transition-colors">
                  Papad Making Machines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-400">
                  Office No. 207, 2nd Floor, Wallfort Zone, Fafadih, Raipur - 492001 (C.G.)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">0771-3169531</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">info@bharatgroup.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bharat Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-green-500 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
