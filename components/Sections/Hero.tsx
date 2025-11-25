import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-white">
      
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Modern Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.3]" 
          style={{
            backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[100px] animate-blob mix-blend-multiply" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm text-gray-600 text-sm font-medium mb-8 hover:bg-white/80 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Future-Focused Digital Solutions
          </motion.div>
          
          {/* Brand Name - Primary Visual Weight */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gray-900 mb-6 font-heading uppercase"
          >
            GREY MATRIX
          </motion.h1>
          
          {/* Tagline - Secondary Visual Weight */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-800 mb-8 leading-[1.1]"
          >
            Building the Future, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">
              Digitally.
            </span>
          </motion.h2>
          
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            We create modern websites, SaaS products, and intelligent digital solutions that help businesses grow and adapt in a rapidly evolving landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="group relative w-full sm:w-auto px-8 py-4 bg-[#121212] text-white rounded-xl font-medium overflow-hidden shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <div className="flex items-center justify-center gap-2 relative z-10">
                Start Your Transformation
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleScrollToSection(e, '#portfolio')}
              className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-900 border border-gray-200 rounded-xl font-medium hover:bg-white hover:border-emerald-200 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              View Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-200 to-gray-400"></div>
      </motion.div>
    </section>
  );
};

export default Hero;