import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-eabono-green/20 to-transparent"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Precision
              <br />
              <span className="text-white">Agriculture</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Enhancing productivity and profitability for farmers in Benguet through innovative agricultural technology and sustainable farming practices.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-eabono-green-light text-white font-semibold rounded-full hover:bg-eabono-green-light/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Learn More
                <ChevronRight size={20} />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-eabono-gold/20 backdrop-blur-sm border-2 border-eabono-gold text-eabono-gold font-semibold rounded-full hover:bg-eabono-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                See All Service
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
