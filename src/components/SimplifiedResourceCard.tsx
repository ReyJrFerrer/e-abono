import React from 'react';
import { Download } from 'lucide-react';

interface SimplifiedResourceCardProps {
  title: string;
  description: string;
}

export const SimplifiedResourceCard = ({
  title,
  description,
}: SimplifiedResourceCardProps) => {
  return (
    <div className="bg-gray-200 rounded-xl shadow-md p-8">
      <h3 className="text-2xl font-bold text-eabono-green mb-4">{title}</h3>

      <div className="w-full h-px bg-gray-700 mb-6"></div>

      <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>

      <div className="flex justify-end">
        <button className="bg-eabono-green-light text-white px-8 py-3 rounded-lg font-semibold hover:bg-eabono-green transition-all duration-300 flex items-center gap-2 shadow-md">
          <Download size={20} />
          Download PDF
        </button>
      </div>
    </div>
  );
};
