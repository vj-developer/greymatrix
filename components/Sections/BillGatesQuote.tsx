import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { Quote } from 'lucide-react';

const BillGatesQuote: React.FC = () => {
  return (
    <SectionWrapper className="bg-white border-y border-gray-100 overflow-hidden relative">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05]"
           style={{
             backgroundImage: `radial-gradient(#16a34a 1px, transparent 1px)`,
             backgroundSize: '24px 24px'
           }}
      />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 z-0" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Image Side */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-200 rounded-full blur-2xl opacity-40 transform translate-x-2 translate-y-2"></div>
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/600px-Bill_Gates_2017_%28cropped%29.jpg" 
                  alt="Bill Gates" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg z-20 text-emerald-600 border border-emerald-50">
                <Quote size={24} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Quote Side */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <blockquote className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
              “If your business is not on the internet, then your business will be out of business.”
            </blockquote>
            <div className="flex flex-col md:items-start items-center">
              <cite className="text-gray-900 font-bold not-italic text-xl">
                Bill Gates
              </cite>
              <span className="text-emerald-600 font-medium">
                Co-founder, Microsoft
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BillGatesQuote;