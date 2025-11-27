import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Calculator', href: '/calculator', isRoute: true },
    { label: 'Crops', href: '#crops', isRoute: false },
    { label: 'About Us', href: '#about', isRoute: false },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-eabono-green shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-eabono-green-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-white font-bold text-xl">E-Abono</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-eabono-gold font-semibold'
                      : 'text-white hover:text-eabono-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-eabono-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <button className="hidden md:block bg-white text-eabono-green px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contact Us
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-eabono-green border-t border-eabono-green-light">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-eabono-gold font-semibold'
                      : 'text-white hover:text-eabono-gold'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-eabono-gold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <button className="bg-white text-eabono-green px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-left">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
