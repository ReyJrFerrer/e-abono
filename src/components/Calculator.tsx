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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-20">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-eabono-green mb-4">
              Nitrogen Rate Calculator
            </h1>
            <p className="text-red-600 font-bold mb-8">
              *Please Enter or Select a value for each field
            </p>

            <div className="space-y-6">
              <div className="bg-[#5e7724] rounded-lg p-8">
                <div className="border-b-2 border-white pb-2 mb-6">
                  <h2 className="text-white text-xl font-bold uppercase">
                    Crop Information
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Crop Type
                    </label>
                    <select
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-eabono-green focus:outline-none"
                    >
                      <option value="">Select crop type</option>
                      <option value="corn">Corn</option>
                      <option value="rice">Rice</option>
                      <option value="wheat">Wheat</option>
                      <option value="soybean">Soybean</option>
                      <option value="potato">Potato</option>
                      <option value="cabbage">Cabbage</option>
                      <option value="carrot">Carrot</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Estimated Yield
                    </label>
                    <select
                      name="estimatedYield"
                      value={formData.estimatedYield}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-eabono-green focus:outline-none"
                    >
                      <option value="">Select estimated yield</option>
                      <option value="low">Low (0-50 kg/ha)</option>
                      <option value="medium">Medium (50-100 kg/ha)</option>
                      <option value="high">High (100-150 kg/ha)</option>
                      <option value="very-high">Very High (150+ kg/ha)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Growth Target
                    </label>
                    <input
                      type="text"
                      name="growthTarget"
                      value={formData.growthTarget}
                      onChange={handleInputChange}
                      placeholder="Enter growth target"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-eabono-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Suggested (N)
                    </label>
                    <input
                      type="text"
                      name="suggestedN"
                      value={formData.suggestedN}
                      onChange={handleInputChange}
                      placeholder="Enter suggested nitrogen"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-eabono-green focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <p className="text-red-600 font-bold">
                *Please Enter or Select a value for each field
              </p>

              <div className="bg-[#5e7724] rounded-lg p-8">
                <div className="border-b-2 border-white pb-2 mb-6">
                  <h2 className="text-white text-xl font-bold uppercase">
                    Location Information
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-white font-semibold mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter location"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-eabono-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Terrain
                    </label>
                    <select
                      name="terrain"
                      value={formData.terrain}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-eabono-green focus:outline-none"
                    >
                      <option value="">Select terrain type</option>
                      <option value="flat">Flat</option>
                      <option value="rolling">Rolling</option>
                      <option value="hilly">Hilly</option>
                      <option value="mountainous">Mountainous</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleCalculate}
                  className="bg-eabono-gold text-black px-12 py-3 rounded-lg font-bold text-lg hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </section>

        {showResults && (
          <section className="py-12 bg-white border-t-4 border-gray-200">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-eabono-green mb-2">
                Calculated Results
              </h2>
              <div className="w-full h-1 bg-eabono-green mb-8"></div>

              <div className="space-y-6">
                <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                  <p className="text-gray-600 text-2xl font-semibold">Graphs</p>
                </div>

                <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                  <p className="text-gray-600 text-2xl font-semibold">
                    Explanation and Documents
                  </p>
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
