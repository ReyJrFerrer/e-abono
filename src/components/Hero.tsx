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
                <div className="w-full h-full bg-white flex flex-col items-center p-8 relative">
                  <div className="flex flex-col items-center mt-6">
                    <div className="w-36 h-36 rounded-full border-[6px] border-[#F5C542] flex items-center justify-center mb-4 bg-white shadow-lg">
                      <svg className="w-28 h-28" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 180 Q70 165 60 140 L60 130 Q60 120 70 115 Q80 110 90 115 Q95 120 100 125" fill="#7BA83D"/>
                        <path d="M100 180 Q130 165 140 140 L140 130 Q140 120 130 115 Q120 110 110 115 Q105 120 100 125" fill="#5C8A3D"/>
                        <ellipse cx="100" cy="175" rx="45" ry="18" fill="#9BC157" opacity="0.5"/>
                        <ellipse cx="100" cy="175" rx="35" ry="14" fill="#7BA83D" opacity="0.4"/>
                        <path d="M85 110 Q80 90 75 75 Q72 65 70 60 L75 55 Q78 58 82 65 Q87 75 90 85 Q93 95 95 105" fill="#9BC157" stroke="#7BA83D" strokeWidth="1"/>
                        <path d="M80 100 Q75 85 70 72 L65 68 Q63 66 65 64 L70 62 Q73 65 76 72 Q81 82 85 95" fill="#B5D86A"/>
                        <path d="M95 105 Q98 85 100 70 Q101 58 102 50 L100 45 Q98 50 98 60 Q97 75 95 90 Q94 100 93 110" fill="#4A7C2C" stroke="#2D5C1E" strokeWidth="1.5"/>
                        <path d="M100 70 L95 58 Q93 54 95 52 L100 50 L105 52 Q107 54 105 58 L100 70" fill="#5E9E3E"/>
                        <path d="M100 70 L110 58 Q112 54 115 53 L118 55 Q120 58 118 62 L110 75" fill="#4A7C2C"/>
                        <path d="M115 110 Q120 90 125 75 Q128 65 130 60 L125 55 Q122 58 118 65 Q113 75 110 85 Q107 95 105 105" fill="#2D5C1E" stroke="#1F4419" strokeWidth="1"/>
                        <path d="M120 100 Q125 85 130 72 L135 68 Q137 66 135 64 L130 62 Q127 65 124 72 Q119 82 115 95" fill="#5E9E3E"/>
                        <path d="M60 140 Q80 155 100 150 Q120 155 140 140" stroke="#5C8A3D" strokeWidth="3" fill="none"/>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-4xl font-bold mb-1 tracking-tight">E-Abono</h2>
                  </div>

                  <div className="flex-1 flex items-center justify-center px-6">
                    <p className="text-[#2D5C1E] text-center text-base font-semibold leading-relaxed">
                      Support our Local farmers crop growth with sustainable technology
                    </p>
                  </div>

                  <div className="flex justify-center items-end gap-8 pb-6">
                    <img src="/bagong-pilipinas-v4.png" alt="Bagong Pilipinas" className="h-20 w-auto object-contain" />
                    <img src="/Approved-BSU-logo-2020.png.png" alt="BSU" className="h-20 w-auto object-contain" />
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
