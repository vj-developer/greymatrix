import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { DIGITAL_BENEFITS } from '../../constants';
import { ArrowRight, Check } from 'lucide-react';

const DigitalBenefits: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper className="bg-white relative overflow-hidden border-t border-gray-100">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.4]" 
             style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />
        
        <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10">
                <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-px w-8 bg-emerald-500"></div>
                      <span className="text-emerald-600 font-bold tracking-wider uppercase text-xs">The Opportunity</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-heading">
                        Unlock Your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">True Potential</span>
                    </h2>
                </div>
                <div className="md:w-1/2">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Digital transformation isn't just about technology—it's about creating value, improving efficiency, and securing your future in a connected world.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {DIGITAL_BENEFITS.map((benefit, index) => (
                    <div 
                      key={benefit.id} 
                      className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                            <benefit.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading group-hover:text-emerald-700 transition-colors">{benefit.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <a 
                  href="#contact" 
                  onClick={(e) => handleScrollToSection(e, '#contact')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-50 text-emerald-700 font-bold rounded-full hover:bg-emerald-100 transition-all cursor-pointer"
                >
                    Book Your Free Consultation 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </a>
            </div>
        </div>
    </SectionWrapper>
  );
};

export default DigitalBenefits;