import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RevivalStory } from './components/RevivalStory';
import { DeploymentGuide } from './components/DeploymentGuide';
import { ServerShowcase } from './components/ServerShowcase';
import { FeaturesGrid } from './components/FeaturesGrid';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Configurable portal URL via environment variable or default
  const portalUrl = import.meta.env.VITE_PORTAL_URL || 'https://portal.mohpa.net';

  return (
    <div className="min-h-screen flex flex-col bg-sand-100 text-ink">
      <Navbar portalUrl={portalUrl} />
      <main className="flex-1">
        <Hero portalUrl={portalUrl} />
        <RevivalStory />
        <DeploymentGuide portalUrl={portalUrl} />
        <ServerShowcase portalUrl={portalUrl} />
        <FeaturesGrid />
        <FaqSection />
      </main>
      <Footer portalUrl={portalUrl} />
    </div>
  );
};

export default App;
