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
              <div className="w-72 h-[580px] bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-800 relative">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full"></div>
                <div className="w-full h-full bg-white flex flex-col items-center justify-center p-8 pt-16">
                  <div className="flex items-center gap-4 mb-8">
                    <img src="/image.png" alt="E-Abono Logo" className="w-16 h-16 object-contain" />
                    <h3 className="text-3xl font-bold text-gray-900">E-Abono</h3>
                  </div>

                  <div className="w-64 h-64 bg-white border-4 border-gray-200 rounded-lg flex items-center justify-center p-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect x="0" y="0" width="20" height="20" fill="black"/>
                      <rect x="24" y="0" width="4" height="4" fill="black"/>
                      <rect x="32" y="0" width="8" height="4" fill="black"/>
                      <rect x="44" y="0" width="12" height="4" fill="black"/>
                      <rect x="60" y="0" width="4" height="4" fill="black"/>
                      <rect x="80" y="0" width="20" height="20" fill="black"/>

                      <rect x="4" y="4" width="12" height="12" fill="white"/>
                      <rect x="84" y="4" width="12" height="12" fill="white"/>
                      <rect x="8" y="8" width="4" height="4" fill="black"/>
                      <rect x="88" y="8" width="4" height="4" fill="black"/>

                      <rect x="0" y="24" width="4" height="4" fill="black"/>
                      <rect x="8" y="24" width="8" height="4" fill="black"/>
                      <rect x="24" y="24" width="12" height="8" fill="black"/>
                      <rect x="44" y="24" width="4" height="8" fill="black"/>
                      <rect x="52" y="24" width="8" height="4" fill="black"/>
                      <rect x="68" y="24" width="8" height="8" fill="black"/>
                      <rect x="80" y="24" width="4" height="4" fill="black"/>
                      <rect x="92" y="24" width="8" height="4" fill="black"/>

                      <rect x="24" y="32" width="4" height="8" fill="black"/>
                      <rect x="32" y="32" width="8" height="4" fill="black"/>
                      <rect x="44" y="32" width="12" height="4" fill="black"/>
                      <rect x="60" y="32" width="4" height="8" fill="black"/>
                      <rect x="68" y="32" width="8" height="4" fill="black"/>
                      <rect x="80" y="32" width="4" height="4" fill="black"/>
                      <rect x="92" y="32" width="8" height="8" fill="black"/>

                      <rect x="0" y="40" width="16" height="4" fill="black"/>
                      <rect x="24" y="40" width="8" height="4" fill="black"/>
                      <rect x="36" y="40" width="4" height="4" fill="black"/>
                      <rect x="44" y="40" width="8" height="4" fill="black"/>
                      <rect x="60" y="40" width="12" height="4" fill="black"/>
                      <rect x="80" y="40" width="4" height="4" fill="black"/>
                      <rect x="88" y="40" width="12" height="4" fill="black"/>

                      <rect x="0" y="44" width="4" height="12" fill="black"/>
                      <rect x="8" y="44" width="12" height="4" fill="black"/>
                      <rect x="24" y="44" width="8" height="8" fill="black"/>
                      <rect x="36" y="44" width="4" height="4" fill="black"/>
                      <rect x="48" y="44" width="8" height="8" fill="black"/>
                      <rect x="60" y="44" width="4" height="4" fill="black"/>
                      <rect x="68" y="44" width="12" height="4" fill="black"/>
                      <rect x="84" y="44" width="8" height="8" fill="black"/>
                      <rect x="96" y="44" width="4" height="12" fill="black"/>

                      <rect x="24" y="52" width="4" height="4" fill="black"/>
                      <rect x="32" y="52" width="4" height="4" fill="black"/>
                      <rect x="40" y="52" width="12" height="4" fill="black"/>
                      <rect x="64" y="52" width="12" height="4" fill="black"/>
                      <rect x="80" y="52" width="4" height="4" fill="black"/>

                      <rect x="0" y="56" width="8" height="4" fill="black"/>
                      <rect x="12" y="56" width="8" height="4" fill="black"/>
                      <rect x="24" y="56" width="4" height="4" fill="black"/>
                      <rect x="32" y="56" width="12" height="4" fill="black"/>
                      <rect x="48" y="56" width="8" height="4" fill="black"/>
                      <rect x="60" y="56" width="4" height="4" fill="black"/>
                      <rect x="68" y="56" width="8" height="4" fill="black"/>
                      <rect x="80" y="56" width="12" height="4" fill="black"/>
                      <rect x="96" y="56" width="4" height="4" fill="black"/>

                      <rect x="32" y="60" width="8" height="8" fill="black"/>
                      <rect x="44" y="60" width="4" height="4" fill="black"/>
                      <rect x="52" y="60" width="8" height="8" fill="black"/>
                      <rect x="64" y="60" width="4" height="4" fill="black"/>
                      <rect x="72" y="60" width="8" height="8" fill="black"/>
                      <rect x="84" y="60" width="12" height="4" fill="black"/>

                      <rect x="24" y="64" width="4" height="12" fill="black"/>
                      <rect x="44" y="64" width="4" height="4" fill="black"/>
                      <rect x="64" y="64" width="4" height="4" fill="black"/>

                      <rect x="0" y="68" width="20" height="4" fill="black"/>
                      <rect x="32" y="68" width="8" height="4" fill="black"/>
                      <rect x="44" y="68" width="4" height="8" fill="black"/>
                      <rect x="52" y="68" width="8" height="4" fill="black"/>
                      <rect x="64" y="68" width="12" height="4" fill="black"/>
                      <rect x="80" y="68" width="16" height="4" fill="black"/>

                      <rect x="0" y="72" width="4" height="4" fill="black"/>
                      <rect x="12" y="72" width="8" height="4" fill="black"/>
                      <rect x="32" y="72" width="8" height="4" fill="black"/>
                      <rect x="52" y="72" width="4" height="4" fill="black"/>
                      <rect x="60" y="72" width="12" height="4" fill="black"/>
                      <rect x="80" y="72" width="4" height="4" fill="black"/>
                      <rect x="88" y="72" width="8" height="4" fill="black"/>

                      <rect x="0" y="76" width="16" height="4" fill="black"/>
                      <rect x="24" y="76" width="4" height="4" fill="black"/>
                      <rect x="32" y="76" width="4" height="4" fill="black"/>
                      <rect x="40" y="76" width="12" height="4" fill="black"/>
                      <rect x="56" y="76" width="8" height="4" fill="black"/>
                      <rect x="68" y="76" width="4" height="4" fill="black"/>
                      <rect x="76" y="76" width="8" height="4" fill="black"/>
                      <rect x="88" y="76" width="8" height="4" fill="black"/>

                      <rect x="0" y="80" width="20" height="20" fill="black"/>
                      <rect x="24" y="80" width="4" height="4" fill="black"/>
                      <rect x="32" y="80" width="8" height="16" fill="black"/>
                      <rect x="44" y="80" width="12" height="4" fill="black"/>
                      <rect x="60" y="80" width="8" height="4" fill="black"/>
                      <rect x="72" y="80" width="4" height="4" fill="black"/>
                      <rect x="80" y="80" width="20" height="20" fill="black"/>

                      <rect x="4" y="84" width="12" height="12" fill="white"/>
                      <rect x="84" y="84" width="12" height="12" fill="white"/>
                      <rect x="8" y="88" width="4" height="4" fill="black"/>
                      <rect x="88" y="88" width="4" height="4" fill="black"/>

                      <rect x="24" y="84" width="4" height="12" fill="black"/>
                      <rect x="44" y="84" width="4" height="4" fill="black"/>
                      <rect x="52" y="84" width="4" height="12" fill="black"/>
                      <rect x="60" y="84" width="8" height="4" fill="black"/>
                      <rect x="72" y="84" width="4" height="12" fill="black"/>

                      <rect x="44" y="88" width="4" height="8" fill="black"/>
                      <rect x="60" y="88" width="8" height="8" fill="black"/>

                      <rect x="24" y="96" width="4" height="4" fill="black"/>
                      <rect x="44" y="96" width="4" height="4" fill="black"/>
                      <rect x="60" y="96" width="8" height="4" fill="black"/>
                    </svg>
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
            <button className="bg-eabono-gold/20 backdrop-blur-sm border-2 border-eabono-gold text-eabono-gold px-10 py-4 rounded-full font-bold text-lg hover:bg-eabono-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
              <Download size={24} />
              Download Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
