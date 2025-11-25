import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { TESTIMONIALS } from '../../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 mb-6 text-emerald-600">
          <Quote size={20} />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">What Our Clients Say</h2>
        <p className="text-gray-500 text-lg">
          We build long-term partnerships, not just websites. Here is what our partners have to say about working with Grey Matrix.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="flex flex-col justify-between bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 relative group"
          >
            {/* Decorative Quote Mark */}
            <div className="absolute top-6 right-8 text-gray-100 group-hover:text-emerald-50 transition-colors">
              <Quote size={60} fill="currentColor" className="opacity-50" />
            </div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </p>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <p className="font-bold text-gray-900 font-heading">{testimonial.author}</p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                <span className="text-emerald-600 font-medium">{testimonial.role}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>{testimonial.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;