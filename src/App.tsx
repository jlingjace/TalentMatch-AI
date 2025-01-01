import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Pricing } from './components/Pricing/Pricing';
import { Stats } from './components/Stats/Stats';
import { CTA } from './components/CTA/CTA';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;