import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg h-[400px] cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-200 mb-4 line-clamp-2">{description}</p>
        <button className="bg-eabono-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-eabono-gold/90 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export const ProjectSites = () => {
  const projects = [
    {
      title: 'La Trinidad',
      description: 'Pioneering sustainable farming practices in the strawberry capital of the Philippines with advanced nitrogen management systems.',
      imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    },
    {
      title: 'Atok',
      description: 'Revolutionizing high-altitude vegetable farming through precision agriculture and smart fertilizer application.',
      imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    },
    {
      title: 'Buguias',
      description: 'Empowering local farmers with data-driven insights for improved crop yields and sustainable agricultural practices.',
      imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eabono-green mb-4">
            Project Sites
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how E-Abono is transforming agriculture across Benguet province through innovative technology and community partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
