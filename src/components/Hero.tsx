import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

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
            className="md:col-span-2 flex justify-center perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div
              className="relative"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="w-64 h-[520px] bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-900 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-eabono-green-light to-eabono-green flex flex-col items-center justify-center p-6 relative">
                  <motion.div
                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg p-2"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <img
                      src="/image.png"
                      alt="E-Abono Logo"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <motion.h2
                    className="text-white text-2xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    E-Abono
                  </motion.h2>
                  <motion.p
                    className="text-white text-center text-sm mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Smart Agriculture Platform
                  </motion.p>

                  <div className="mt-auto grid grid-cols-2 gap-4 w-full px-4">
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src="/bagong-pilipinas-v4.png"
                        alt="Bagong Pilipinas"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src="/Approved-BSU-logo-2020.png.png"
                        alt="BSU Logo"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-eabono-gold/20 to-eabono-green-light/20 rounded-[3rem] blur-2xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
