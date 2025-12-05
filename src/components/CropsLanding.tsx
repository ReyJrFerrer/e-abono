import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';
import { ChevronRight, Sprout } from 'lucide-react';

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
      className="group relative overflow-hidden rounded-2xl shadow-xl h-[500px] cursor-pointer block transform hover:-translate-y-2 transition-all duration-500"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 rounded-2xl"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500 rounded-2xl"></div>
      <div className="absolute top-6 right-6">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-eabono-gold transition-all duration-300">
          <Sprout size={28} className="text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-4xl font-bold mb-4 group-hover:text-eabono-gold transition-colors duration-300">{name}</h3>
        <p className="text-gray-200 mb-6 text-lg leading-relaxed">{description}</p>
        <div className="flex items-center gap-3 text-eabono-gold font-bold text-lg group-hover:gap-5 transition-all duration-300">
          <span>Explore Resources</span>
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="pt-20">
        <section
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80')`,
          }}
        >
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-eabono-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                <Sprout size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Crop Resources
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive farming resources, fertilization guides, and project data for various crops grown in Benguet province.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
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
