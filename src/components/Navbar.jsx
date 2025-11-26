import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Package, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import logoFull from '../assets/bharat-group/logo-full.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Machines', path: '/machines', icon: Package },
    { name: 'Contact', path: '/contact#send-message', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 hidden md:block ${
          scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={logoFull}
                alt="Bharat Group"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold transition-colors duration-300 relative group ${
                    location.pathname === link.path.split('#')[0]
                      ? scrolled
                        ? 'text-green-600'
                        : 'text-white'
                      : scrolled
                      ? 'text-gray-600 hover:text-green-600'
                      : 'text-gray-100 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path.split('#')[0] ? 'w-full' : ''
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Logo Only */}
      <div className={`fixed top-0 w-full z-50 md:hidden transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center justify-center">
            <img
              src={logoFull}
              alt="Bharat Group"
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-4 h-16">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path.split('#')[0];

            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex flex-col items-center justify-center relative"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`flex flex-col items-center justify-center ${
                    isActive ? 'text-green-600' : 'text-gray-600'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-0.5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                  <span className={`text-[10px] font-medium ${isActive ? 'font-semibold' : ''}`}>
                    {link.name}
                  </span>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-600 rounded-b-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Spacer */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default Navbar;
