import React from 'react';
import { Download } from 'lucide-react';

export const AppDownload = () => {
  return (
    <section className="py-20 bg-eabono-green">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
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
          </div>

          <div className="text-white">
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
          </div>
        </div>
      </div>
    </section>
  );
};
