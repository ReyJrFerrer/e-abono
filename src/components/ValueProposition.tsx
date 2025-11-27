import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    'Real-time crop health monitoring',
    'AI-powered nitrogen level detection',
    'Customized fertilizer recommendations',
    'Yield prediction and analytics',
    'Weather-based insights',
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-eabono-green-light"></div>
            <div className="ml-8">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                alt="Farmer using E-Abono app in field"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-eabono-green mb-8">
              Supports Farmers crop growth through efficient technology
            </h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <ChevronRight className="text-eabono-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              to="/about-us"
              className="inline-block bg-eabono-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
