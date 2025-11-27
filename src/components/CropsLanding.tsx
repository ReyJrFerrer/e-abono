import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';
import { ChevronRight } from 'lucide-react';

interface CropCardProps {
  name: string;
  description: string;
  imageUrl: string;
  path: string;
}

const CropCard = ({ name, description, imageUrl, path }: CropCardProps) => {
  return (
    <Link
      to={path}
      className="group relative overflow-hidden rounded-xl shadow-lg h-[450px] cursor-pointer block"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-3xl font-bold mb-3">{name}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <div className="flex items-center gap-2 text-eabono-gold font-semibold group-hover:gap-4 transition-all duration-300">
          <span>View Resources</span>
          <ChevronRight size={20} />
        </div>
      </div>
    </Link>
  );
};

export const CropsLanding = () => {
  const crops = [
    {
      name: 'Potato',
      description:
        'Comprehensive resources for potato cultivation including fertilization guides, growth monitoring, and yield optimization strategies.',
      imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80',
      path: '/crops/potato',
    },
    {
      name: 'Cabbage',
      description:
        'Complete cabbage farming resources covering nutrient management, disease prevention, and best practices for maximum yield.',
      imageUrl: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=800&q=80',
      path: '/crops/cabbage',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-eabono-green mb-4">
                Crop Resources
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access comprehensive farming resources, fertilization guides, and project data for various crops grown in Benguet province.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {crops.map((crop, index) => (
                <CropCard key={index} {...crop} />
              ))}
            </div>
          </div>
        </section>

        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};
