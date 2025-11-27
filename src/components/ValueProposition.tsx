import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    'Helps Benguet farmers grow cabbage and potatoes more efficiently using technology.,
    'Helps improve yields, reduces waste, and increases profits by managing soil, water, and nutrients better.',
   
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -80, rotateY: -15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-eabono-green-light via-eabono-green to-eabono-green-light rounded-full shadow-lg"></div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-eabono-green/20 to-eabono-gold/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                alt="Farmer using E-Abono app in field"
                className="relative rounded-2xl shadow-2xl w-full h-[550px] object-cover transform hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-eabono-gold rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-eabono-green-light rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-eabono-green mb-10 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Supports Farmers crop growth through efficient technology
            </motion.h2>

            <ul className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-eabono-gold/10 flex items-center justify-center group-hover:bg-eabono-gold/20 transition-colors duration-300">
                      <ChevronRight className="text-eabono-gold" size={20} />
                    </div>
                  </motion.div>
                  <span className="text-lg text-gray-700 group-hover:text-eabono-green transition-colors duration-300 font-medium">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link
                to="/about-us"
                className="inline-block bg-eabono-gold text-white px-10 py-4 rounded-xl font-semibold hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
