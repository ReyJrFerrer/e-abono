import React from 'react';
import { Download } from 'lucide-react';

interface CropResourceCardProps {
  location: string;
  terrain: string;
  description: string;
  timeDate: string;
  growthStage: string;
  fertilization: string;
  expectedYield: string;
  imageUrl: string;
}

export const CropResourceCard = ({
  location,
  terrain,
  description,
  timeDate,
  growthStage,
  fertilization,
  expectedYield,
  imageUrl,
}: CropResourceCardProps) => {
  return (
    <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2">
          <img
            src={imageUrl}
            alt={`${location} crop field`}
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>

        <div className="md:col-span-3 p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-bold text-eabono-green">{location}</h3>
            <span className="text-gray-600 text-sm">{terrain}</span>
          </div>

          <div className="w-full h-px bg-gray-400 mb-6"></div>

          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2">
              <span className="font-bold text-gray-800 min-w-[200px]">Time & Date:</span>
              <span className="text-gray-700">{timeDate}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-gray-800 min-w-[200px]">Crop Growth Stage:</span>
              <span className="text-gray-700">{growthStage}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-gray-800 min-w-[200px]">Suggested Fertilization:</span>
              <span className="text-gray-700">{fertilization}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-gray-800 min-w-[200px]">Expected Yield/Area:</span>
              <span className="text-gray-700">{expectedYield}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-eabono-green-light text-white px-8 py-3 rounded-lg font-semibold hover:bg-eabono-green transition-all duration-300 flex items-center gap-2 shadow-md">
              <Download size={20} />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
