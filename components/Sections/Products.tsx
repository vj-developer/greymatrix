import React from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { PRODUCTS } from '../../constants';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <SectionWrapper id="products" className="bg-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-xs mb-3 block">Innovation Lab</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">Our Products</h2>
          <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
            Beyond client work, we build our own tools to solve problems we encounter in the digital space.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Status Badge */}
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-emerald-200 transition-colors">
                <div className={`w-3 h-3 rounded-full ${product.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`} />
              </div>

              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
                product.status === 'Live' 
                  ? 'bg-emerald-50/80 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50/80 text-amber-700 border-amber-200'
              }`}>
                {product.status === 'Live' ? <Sparkles size={12} className="mr-1.5"/> : <Lock size={12} className="mr-1.5"/>}
                {product.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading group-hover:text-emerald-700 transition-colors relative z-10">
              {product.title}
            </h3>
            <p className="text-gray-500 mb-8 max-w-md leading-relaxed relative z-10">
              {product.description}
            </p>
            
            <div className="flex items-center text-sm font-bold text-emerald-600 cursor-pointer group/link relative z-10">
               Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Products;