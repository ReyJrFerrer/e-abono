import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Globe } from 'lucide-react';

export const Footer = () => {
  const location = useLocation();

  const websiteLinks = [
    { label: 'Home', href: '/' },
    { label: 'Calculator', href: '/calculator' },
    { label: 'Crops', href: '/crops' },
  ];

  const resourceLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Project Sites', href: '/crops' },
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/' },
    { label: 'Disclosure', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ];

  const isCurrentPage = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/crops') return location.pathname.startsWith('/crops');
    return location.pathname === href;
  };

  const handleLinkClick = (href: string) => {
    if (isCurrentPage(href)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#152711] text-white">
      <div className="container mx-auto px-6 py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <img
                src="/image.png"
                alt="E-Abono Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="font-bold text-lg md:text-xl">E-Abono</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              Empowering farmers with smart agricultural solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Website</h3>
            <ul className="space-y-1 md:space-y-2">
              {websiteLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-xs md:text-sm text-gray-400 hover:text-eabono-gold hover:font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-eabono-gold pb-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Resources</h3>
            <ul className="space-y-1 md:space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="text-xs md:text-sm text-gray-400 hover:text-eabono-gold hover:font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-eabono-gold pb-1"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-xs md:text-sm text-gray-400 hover:text-eabono-gold hover:font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-eabono-gold pb-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Connect</h3>
            <div className="flex gap-3 md:gap-4">
              <a
                href="/"
                className="w-9 h-9 md:w-10 md:h-10 bg-eabono-green-light rounded-lg flex items-center justify-center hover:bg-eabono-gold transition-colors duration-200"
              >
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="/"
                className="w-9 h-9 md:w-10 md:h-10 bg-eabono-green-light rounded-lg flex items-center justify-center hover:bg-eabono-gold transition-colors duration-200"
              >
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="/"
                className="w-9 h-9 md:w-10 md:h-10 bg-eabono-green-light rounded-lg flex items-center justify-center hover:bg-eabono-gold transition-colors duration-200"
              >
                <Globe size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 text-xs md:text-sm hover:text-eabono-gold hover:font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-eabono-gold pb-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              © 2024 E-Abono. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
