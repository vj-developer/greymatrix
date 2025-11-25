import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { DIGITAL_RISKS } from '../../constants';

const DigitalRisks: React.FC = () => {
  return (
    <SectionWrapper dark={true} className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Tech Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-20">
                <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
                    Critical Insight
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-heading tracking-tight">
                    The Cost of <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400">Digital Inaction</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    The gap between digital-first businesses and traditional models is widening. Standing still is no longer an option.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DIGITAL_RISKS.map((risk) => (
                    <div key={risk.id} className="relative bg-[#121212] border border-white/5 p-8 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 group overflow-hidden hover:border-red-500/20">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="w-14 h-14 bg-red-900/20 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:text-red-400 transition-colors border border-red-500/10">
                            <risk.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 font-heading">{risk.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                            {risk.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
  );
};

export default DigitalRisks;