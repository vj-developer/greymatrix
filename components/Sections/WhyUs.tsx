import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { VALUE_PROPS } from '../../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const WhyUs: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="why-us" className="bg-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        {/* Sticky Sidebar only on Large Screens */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-semibold text-emerald-600 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            The Grey Matrix Standard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Why Partner <br /> With Us?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-lg">
            We don't just write code; we partner with you to build sustainable, scalable, and premium digital assets. Our approach combines technical excellence with business acumen.
          </p>
          
          <ul className="space-y-4 mb-10">
            {['Transparent Pricing', 'Agile Methodology', 'Post-Launch Support', 'Scalable Architecture'].map((item) => (
               <li key={item} className="flex items-center gap-3 text-base font-medium text-gray-700">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 size={14} strokeWidth={3} />
                 </div>
                 {item}
               </li>
            ))}
          </ul>

          <a 
            href="#contact" 
            onClick={(e) => handleScrollToSection(e, '#contact')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#121212] text-white rounded-lg font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
          >
            Let's discuss your project 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUE_PROPS.map((prop, index) => (
            <div 
                key={prop.id} 
                className={`p-8 rounded-2xl border transition-all duration-300 group
                    ${index % 2 === 0 ? 'bg-[#1a1a1a] border-[#2a2a2a] text-white shadow-2xl shadow-gray-900/10' : 'bg-white border-gray-100 text-gray-900 shadow-xl shadow-gray-200/50'}
                `}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors
                  ${index % 2 === 0 ? 'bg-white/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}
              `}>
                <prop.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className={`text-xl font-bold mb-3 font-heading ${index % 2 === 0 ? 'text-white' : 'text-gray-900'}`}>{prop.title}</h3>
              <p className={`text-sm leading-relaxed ${index % 2 === 0 ? 'text-gray-400' : 'text-gray-500'}`}>
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;