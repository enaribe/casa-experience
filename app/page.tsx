import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import ServicesSection from './components/ServicesSection';
import ServicesCards from './components/ServicesCards';
import StatsSection from './components/StatsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </main>
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <LogoStrip />
      </div>
      <ServicesSection />
      <ServicesCards />
      <StatsSection />
    </div>
  );
}
