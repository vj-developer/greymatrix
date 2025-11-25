import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => handleScrollToSection(e, '#')} className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/qzYx83C/Grey-Matrix-Transparent.png" 
              alt="Grey Matrix" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-xl md:text-2xl font-bold font-heading text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-300">
             Grey Matrix
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full opacity-50"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="px-6 py-2.5 bg-[#121212] text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-200/50 hover:shadow-gray-300/50 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden pt-24 px-6 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-heading font-semibold text-gray-900 hover:text-emerald-600 border-b border-gray-100 pb-4"
                  onClick={(e) => handleScrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 w-full text-center px-6 py-4 bg-[#121212] text-white text-lg font-medium rounded-xl hover:bg-emerald-600 transition-colors shadow-xl"
                onClick={(e) => handleScrollToSection(e, '#contact')}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;