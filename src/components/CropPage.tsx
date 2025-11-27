import React from 'react';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';
import { CropResourceCard } from './CropResourceCard';
import { SimplifiedResourceCard } from './SimplifiedResourceCard';

interface LocationResource {
  location: string;
  terrain: string;
  description: string;
  timeDate: string;
  growthStage: string;
  fertilization: string;
  expectedYield: string;
  imageUrl: string;
}

interface SimplifiedResource {
  title: string;
  description: string;
}

interface CropPageProps {
  cropName: string;
  locationResources: LocationResource[];
  fertilizationResources?: SimplifiedResource[];
}

export const CropPage = ({
  cropName,
  locationResources,
  fertilizationResources,
}: CropPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-eabono-green mb-12">
              {cropName} Project Resources
            </h1>

            <div className="space-y-8">
              {locationResources.map((resource, index) => (
                <CropResourceCard key={index} {...resource} />
              ))}
            </div>

            {fertilizationResources && fertilizationResources.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-eabono-green mb-8">
                  Fertilization Resources
                </h2>
                <div className="space-y-8">
                  {fertilizationResources.map((resource, index) => (
                    <SimplifiedResourceCard key={index} {...resource} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};
