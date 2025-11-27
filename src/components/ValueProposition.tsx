import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-eabono-green/10 to-transparent rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
                alt="Benguet vegetable farming"
                className="w-full h-full object-cover"
              />

              <motion.div
                className="absolute top-8 left-8 right-8"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                  YOU GOT A TICKET TO THE
                  <br />
                  <span className="text-5xl md:text-6xl lg:text-7xl">GREEN PARADISE</span>
                </h3>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 text-white text-sm font-medium drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Enjoy Nature
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eabono-gold/10 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                alt="Sustainable farming in Benguet"
                className="w-full h-full object-cover"
              />

              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="inline-block bg-white/95 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-xl">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      TOUCH<br />
                      <span className="text-eabono-green">THE WORLD OF</span><br />
                      <span className="text-eabono-green-light">AGRICULTURE</span>
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto mb-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-eabono-green mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Empowering Benguet Farmers Through Smart Technology
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="font-medium">
                E-Abono helps Benguet farmers grow cabbage and potatoes more efficiently using precision agriculture technology and AI-powered insights.
              </p>
              <p>
                Our platform improves crop yields, reduces waste, and increases profits by optimizing soil health, water management, and nutrient application for sustainable farming success.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link
              to="/about-us"
              className="inline-block bg-eabono-gold text-white px-10 py-4 rounded-xl font-semibold hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
