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
                Open Calculator
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
              <div className="w-48 h-[400px] sm:w-56 sm:h-[460px] md:w-64 md:h-[520px] bg-gray-800 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border-4 md:border-8 border-gray-900">
                <div className="w-full h-full bg-white flex flex-col items-center p-4 sm:p-6 md:p-8 relative">
                  <div className="flex flex-col items-center mt-3 sm:mt-4 md:mt-6">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <img src="/image.png" alt="E-Abono Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-1 tracking-tight">E-Abono</h2>
                  </div>

                  <div className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-6">
                    <p className="text-[#2D5C1E] text-center text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
                      Support our Local farmers crop growth with sustainable technology
                    </p>
                  </div>

                  <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 pb-3 sm:pb-4 md:pb-6">
                    <img src="/bagong-pilipinas-v4.png" alt="Bagong Pilipinas" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
                    <img src="/Approved-BSU-logo-2020.png.png" alt="BSU" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
