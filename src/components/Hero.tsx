import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')`,
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight mb-6">
              PRECISION AGRICULTURE
            </h1>
            <div className="w-24 h-1 bg-eabono-gold mb-6"></div>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Enhancing productivity and profitability for farmers in Benguet through innovative agricultural technology and sustainable farming practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about-us"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-eabono-green transition-all duration-300 text-center"
              >
                Learn More
              </Link>
              <Link
                to="/calculator"
                className="px-8 py-3 bg-white text-eabono-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-center"
              >
                Open Calculator
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-[520px] bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-900">
                <div className="w-full h-full bg-gradient-to-br from-eabono-green-light to-eabono-green flex flex-col items-center justify-center p-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
                    <span className="text-eabono-green font-bold text-4xl">E</span>
                  </div>
                  <h2 className="text-white text-2xl font-bold mb-2">E-Abono</h2>
                  <p className="text-white text-center text-sm">Smart Agriculture Platform</p>
                  <div className="mt-12 flex gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 px-8">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg p-1 flex items-center justify-center">
                  <span className="text-xs font-semibold text-center">Bagong Pilipinas</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg p-1 flex items-center justify-center">
                  <span className="text-xs font-semibold text-center">BSU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
