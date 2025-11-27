import React, { useState } from 'react';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';

interface FormData {
  cropType: string;
  estimatedYield: string;
  growthTarget: string;
  suggestedN: string;
  location: string;
  terrain: string;
}

export const Calculator = () => {
  const [formData, setFormData] = useState<FormData>({
    cropType: '',
    estimatedYield: '',
    growthTarget: '',
    suggestedN: '',
    location: '',
    terrain: '',
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-eabono-green mb-4">
                Nitrogen Rate Calculator
              </h1>
              <div className="w-24 h-1 bg-eabono-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Calculate optimal nitrogen rates for your crops
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-eabono-green to-eabono-green-light p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-white text-2xl font-bold">
                    Crop Information
                  </h2>
                </div>
                <p className="text-white/80 text-sm">Provide details about your crop and targets</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Crop Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="cropType"
                        value={formData.cropType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select crop type</option>
                        <option value="potato">Potato</option>
                        <option value="cabbage">Cabbage</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Estimated Yield <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="estimatedYield"
                        value={formData.estimatedYield}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select estimated yield</option>
                        <option value="low">Low (0-50 kg/ha)</option>
                        <option value="medium">Medium (50-100 kg/ha)</option>
                        <option value="high">High (100-150 kg/ha)</option>
                        <option value="very-high">Very High (150+ kg/ha)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Growth Target <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="growthTarget"
                      value={formData.growthTarget}
                      onChange={handleInputChange}
                      placeholder="Enter growth target (kg/ha)"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Suggested (N) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="suggestedN"
                      value={formData.suggestedN}
                      onChange={handleInputChange}
                      placeholder="Enter nitrogen rate (kg/ha)"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
              <div className="bg-gradient-to-r from-eabono-green to-eabono-green-light p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-white text-2xl font-bold">
                    Location Information
                  </h2>
                </div>
                <p className="text-white/80 text-sm">Specify where your crops are located</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select location</option>
                        <option value="La Trinidad">La Trinidad</option>
                        <option value="Atok">Atok</option>
                        <option value="Buguias">Buguias</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Terrain <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="terrain"
                        value={formData.terrain}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select terrain type</option>
                        <option value="flat">Flat</option>
                        <option value="rolling">Rolling</option>
                        <option value="hilly">Hilly</option>
                        <option value="mountainous">Mountainous</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between bg-white rounded-2xl shadow-xl p-6">
              <p className="text-sm text-gray-500">
                <span className="text-red-500">*</span> All fields are required
              </p>
              <button
                onClick={handleCalculate}
                className="bg-eabono-gold text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
              >
                Calculate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {showResults && (
          <section className="py-16">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-eabono-green mb-4">
                  Calculated Results
                </h2>
                <div className="w-24 h-1 bg-eabono-gold mx-auto"></div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-eabono-green to-eabono-green-light p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-white text-xl font-bold">Data Visualization</h3>
                    </div>
                  </div>
                  <div className="p-12 flex items-center justify-center min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-400 text-xl font-semibold">Graphs and Charts</p>
                      <p className="text-gray-400 text-sm mt-2">Visual representation of nitrogen requirements</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-eabono-green to-eabono-green-light p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-white text-xl font-bold">Analysis & Recommendations</h3>
                    </div>
                  </div>
                  <div className="p-12 flex items-center justify-center min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-400 text-xl font-semibold">Explanation and Documents</p>
                      <p className="text-gray-400 text-sm mt-2">Detailed analysis and supporting documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};
