import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121212] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="bg-white px-3 py-1.5 rounded-lg inline-block">
             <img 
              src="https://i.ibb.co/TBBgV1zG/Grey-Matrix-WB.png" 
              alt="Grey Matrix" 
              className="h-8 w-auto object-contain" 
            />
          </div>
          <p className="text-gray-400 text-sm">Building the Future, Digitally.</p>
        </div>

        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#services" onClick={(e) => handleScrollToSection(e, '#services')} className="hover:text-emerald-500 transition-colors">Services</a>
          <a href="#portfolio" onClick={(e) => handleScrollToSection(e, '#portfolio')} className="hover:text-emerald-500 transition-colors">Portfolio</a>
          <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="hover:text-emerald-500 transition-colors">Contact</a>
        </div>

        <div className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Grey Matrix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;