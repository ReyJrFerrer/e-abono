import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const hasHeroImage = location.pathname === '/' || location.pathname === '/about-us' || location.pathname === '/contact-us';

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
    { label: 'Crops', href: '/crops', isRoute: true },
    { label: 'About Us', href: '/about-us', isRoute: true },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/crops') return location.pathname.startsWith('/crops');
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasHeroImage
          ? isScrolled
            ? 'bg-eabono-green/95 backdrop-blur-md shadow-lg'
            : 'bg-eabono-green/30 backdrop-blur-sm'
          : 'bg-eabono-green backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="E-Abono Logo"
              className="w-12 h-12 object-contain"
            />
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

          <Link
            to="/contact-us"
            className="hidden md:flex items-center gap-2 bg-eabono-green-light text-white px-6 py-3 rounded-full font-semibold hover:bg-eabono-green-light/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

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
            <Link
              to="/contact-us"
              className="flex items-center gap-2 bg-eabono-green-light text-white px-6 py-3 rounded-full font-semibold hover:bg-eabono-green-light/90 transition-all duration-300 shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started Now
              <ArrowRight size={18} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
