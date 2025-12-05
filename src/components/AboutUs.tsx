import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const wasMobile = isMobile;
      const nowMobile = window.innerWidth < 768;
      setIsMobile(nowMobile);

      if (wasMobile !== nowMobile) {
        setCurrentSlide(0);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Maria Santos',
      role: 'Project Director',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      name: 'Engr. Juan dela Cruz',
      role: 'Lead Agricultural Engineer',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Dr. Ana Reyes',
      role: 'Soil Scientist',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
      name: 'Mark Bautista',
      role: 'Field Coordinator',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
    {
      name: 'Lisa Garcia',
      role: 'Data Analyst',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Mobile App Developer',
      imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
    },
    {
      name: 'Sofia Lim',
      role: 'Community Liaison',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
    {
      name: 'Roberto Tan',
      role: 'Research Assistant',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
    {
      name: 'Elena Cruz',
      role: 'Farmer Training Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    },
  ];

  const itemsPerSlide = isMobile ? 2 : 6;
  const slidesCount = Math.ceil(teamMembers.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const getCurrentSlideMembers = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return teamMembers.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80')`,
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">About Us</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Empowering farmers through innovative agricultural technology and sustainable practices for a prosperous future.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eabono-green mb-6 md:mb-8 text-center">About E-Abono</h2>
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                E-Abono is a groundbreaking agricultural technology initiative designed to revolutionize farming practices in the Cordillera region. Through cutting-edge AI-powered nitrogen detection and precision agriculture techniques, we provide farmers with the tools they need to optimize crop yields while maintaining environmental sustainability.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our platform combines mobile technology, data analytics, and on-the-ground expertise to deliver real-time insights and actionable recommendations. By bridging the gap between traditional farming knowledge and modern agricultural science, E-Abono empowers local communities to thrive in an increasingly competitive agricultural landscape.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eabono-green mb-6 md:mb-8 text-center">Mission and Vision</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                Our mission is to transform agricultural practices in Benguet province by providing farmers with accessible, science-based tools for crop management. We strive to increase agricultural productivity, improve farmer livelihoods, and promote sustainable farming practices that protect our natural resources for future generations.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We envision a future where every farmer in the Cordillera region has access to advanced agricultural technology, enabling them to make informed decisions about fertilization, crop management, and resource allocation. Through E-Abono, we aim to create a thriving agricultural ecosystem that balances productivity with environmental stewardship, ensuring food security and economic prosperity for farming communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-6 overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eabono-green mb-8 md:mb-12 text-center">
              The Team Behind E-Abono
            </h2>

            <div className="relative max-w-6xl mx-auto px-2 sm:px-8 md:px-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 justify-items-center">
                {getCurrentSlideMembers().map((member, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer w-full"
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                      <div className="text-white">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1">{member.name}</h3>
                        <p className="text-gray-200 text-sm md:text-base">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {slidesCount > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute -left-3 md:-left-16 top-1/2 -translate-y-1/2 bg-eabono-green text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-eabono-green-light transition-colors duration-300 z-10"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} className="md:w-6 md:h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute -right-3 md:-right-16 top-1/2 -translate-y-1/2 bg-eabono-green text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-eabono-green-light transition-colors duration-300 z-10"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                  </button>

                  <div className="flex justify-center gap-2 mt-6 md:mt-8">
                    {Array.from({ length: slidesCount }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          currentSlide === index ? 'bg-eabono-green' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};
