import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Products from './components/Sections/Products';
import Portfolio from './components/Sections/Portfolio';
import Clients from './components/Sections/Clients';
import Testimonials from './components/Sections/Testimonials';
import BillGatesQuote from './components/Sections/BillGatesQuote';
import DigitalRisks from './components/Sections/DigitalRisks';
import DigitalBenefits from './components/Sections/DigitalBenefits';
import WhyUs from './components/Sections/WhyUs';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Pricing from './components/Sections/Pricing';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Products />
        <Portfolio />
        <Clients />
        <Testimonials />
        <BillGatesQuote />
        <DigitalRisks />
        <DigitalBenefits />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;