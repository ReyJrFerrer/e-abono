import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ValueProposition = () => {
  const features = [
    'Real-time crop health monitoring',
    'AI-powered nitrogen level detection',
    'Customized fertilizer recommendations',
    'Yield prediction and analytics',
    'Weather-based insights',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-eabono-green-light"></div>
            <div className="ml-8">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                alt="Farmer using E-Abono app in field"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-eabono-green mb-8">
              Supports Farmers crop growth through efficient technology
            </h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="text-eabono-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about-us"
              className="inline-block bg-eabono-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
