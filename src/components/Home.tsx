import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { ValueProposition } from './ValueProposition';
import { ProjectSites } from './ProjectSites';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ProjectSites />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};
