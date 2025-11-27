import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Globe } from 'lucide-react';

export const Footer = () => {
  const websiteLinks = [
    { label: 'Home', href: '/' },
    { label: 'Calculator', href: '/calculator' },
    { label: 'Crops', href: '/crops' },
  ];

  const resourceLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Project Sites', href: '/#project-sites' },
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/' },
    { label: 'Disclosure', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ];

  return (
    <footer className="bg-[#152711] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/image.png"
                alt="E-Abono Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl">E-Abono</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering farmers with smart agricultural solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Website</h3>
            <ul className="space-y-2">
              {websiteLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-eabono-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-eabono-gold transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-eabono-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-eabono-green-light rounded-lg flex items-center justify-center hover:bg-eabono-gold transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-eabono-green-light rounded-lg flex items-center justify-center hover:bg-eabono-gold transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-eabono-green-light rounded-lg flex items-center justify-center hover:bg-eabono-gold transition-colors duration-200"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-eabono-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 E-Abono. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
