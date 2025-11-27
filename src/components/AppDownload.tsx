import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export const AppDownload = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-eabono-green" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-72 h-[580px] bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-800">
                <div className="w-full h-full bg-white flex flex-col items-center justify-center p-8">
                  <div className="w-48 h-48 border-8 border-eabono-green rounded-lg flex items-center justify-center mb-6">
                    <div className="w-full h-full bg-gray-900 p-4">
                      <div className="grid grid-cols-3 gap-1 h-full">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="bg-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-eabono-green font-bold text-xl mb-2">Scan to Download</p>
                    <p className="text-gray-600 text-sm">E-Abono Mobile App</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Scan the QR Code to Download E-Abono
            </h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-xl mb-8 leading-relaxed">
              Smart Snap, Grow Right: AI-Powered Nitrogen Detection for Healthier Crops and Better Yields. Transform your farming with instant crop analysis right from your smartphone.
            </p>
            <button className="bg-eabono-gold text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
              <Download size={24} />
              Download Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
