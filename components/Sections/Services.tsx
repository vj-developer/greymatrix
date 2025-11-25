import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { SERVICES } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="services" className="relative overflow-hidden">
      {/* Engineering Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-semibold text-emerald-600 mb-6 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Core Capabilities
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">What We Build</h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          We combine design thinking with robust engineering to deliver digital solutions that are scalable, secure, and future-ready.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10"
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            variants={item}
            className="group relative bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            {/* Tech Corner Accent */}
            <div className="absolute top-0 right-0 p-4 opacity-100">
               <span className="font-mono text-xs font-bold text-gray-200 group-hover:text-emerald-500 transition-colors duration-300">
                 {(index + 1).toString().padStart(2, '0')}
               </span>
            </div>

            {/* Hover Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Icon Container */}
            <div className="relative mb-8 inline-block">
               <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
               <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm relative z-10 group-hover:scale-110 group-hover:border-emerald-200 transition-all duration-300">
                  <service.icon className="text-gray-700 group-hover:text-emerald-600 transition-colors" size={26} strokeWidth={1.5} />
               </div>
               {/* Decorative connector */}
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gray-200 group-hover:bg-emerald-300 transition-colors" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading group-hover:text-emerald-700 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-2 border-gray-100 pl-4 group-hover:border-emerald-200 transition-colors">
              {service.description}
            </p>

            {/* Bottom Action Area */}
            <div className="flex items-center justify-between border-t border-gray-50 pt-6 mt-auto">
               <div className="flex items-center gap-2">
                  <Plus size={14} className="text-gray-300 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-emerald-600 transition-colors">Learn More</span>
               </div>
               <a 
                 href="#contact" 
                 onClick={(e) => handleScrollToSection(e, '#contact')}
                 className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 cursor-pointer"
                 aria-label={`Inquire about ${service.title}`}
               >
                  <ArrowRight size={14} />
               </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;