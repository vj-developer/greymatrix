import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { PORTFOLIO } from '../../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="portfolio">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-xs mb-3 block">Selected Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">Our Work</h2>
          <p className="text-gray-500 text-lg">
            A showcase of digital products that drive results.
          </p>
        </div>
        <a 
          href="#contact" 
          onClick={(e) => handleScrollToSection(e, '#contact')}
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 hover:border-emerald-500 hover:text-emerald-600 transition-all"
        >
          Start your project <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PORTFOLIO.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer"
          >
            {/* Image Frame Container */}
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:shadow-emerald-900/5 transition-all duration-500 group-hover:-translate-y-1 bg-gray-50 p-6 md:p-8 flex items-center justify-center">
              
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-contain relative z-10 drop-shadow-md rounded-lg transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300 flex items-center justify-center z-20">
                <div className="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full text-gray-900 font-medium flex items-center gap-2 shadow-xl border border-white/20">
                  Visit Website <ExternalLink size={16} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col px-1">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors font-heading">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 rounded-md text-gray-600 uppercase tracking-wide border border-gray-200">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      
       <div className="mt-8 md:hidden text-center">
        <a 
          href="#contact" 
          onClick={(e) => handleScrollToSection(e, '#contact')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1 hover:border-emerald-500 hover:text-emerald-600 transition-all"
        >
            Start your project <ArrowUpRight size={16} />
          </a>
       </div>
    </SectionWrapper>
  );
};

export default Portfolio;