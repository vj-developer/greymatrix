import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { PRICING_PACKAGES } from '../../constants';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="pricing" className="bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-xs mb-3 block">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                Website Development Packages
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
                Transparent pricing tailored for businesses of all sizes. No hidden fees, just premium quality.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {PRICING_PACKAGES.map((pkg) => (
                <div 
                    key={pkg.id} 
                    className={`
                        relative p-8 rounded-2xl transition-all duration-300 flex flex-col h-full group
                        ${pkg.popular 
                            ? 'bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-900/10 scale-100 md:scale-105 z-20' 
                            : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
                        }
                    `}
                >
                    {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{pkg.title}</h3>
                        <p className="text-gray-500 text-sm h-10">{pkg.description}</p>
                    </div>

                    <div className="mb-8">
                        <span className="text-4xl font-bold text-gray-900 tracking-tight">{pkg.price}</span>
                        {pkg.id !== 'premium' && <span className="text-gray-400 text-sm ml-1 font-medium">/ project</span>}
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                        {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.popular ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-emerald-600'}`}>
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="leading-tight">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <a 
                        href="#contact" 
                        onClick={(e) => handleScrollToSection(e, '#contact')}
                        className={`
                            w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3
                            ${pkg.popular 
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-600/20' 
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                            }
                        `}
                    >
                        {pkg.buttonText}
                        <ArrowRight size={16} />
                    </a>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm relative z-10">
            <p className="flex items-center justify-center gap-2">
                Need something more custom? 
                <a 
                    href="#contact" 
                    onClick={(e) => handleScrollToSection(e, '#contact')}
                    className="text-emerald-600 font-semibold hover:underline"
                >
                    Contact us for personalized quotes.
                </a>
            </p>
        </div>
    </SectionWrapper>
  );
};

export default Pricing;