import React from 'react';
import { CLIENT_LOGOS } from '../../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
           <h3 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-3">Trusted Partners</h3>
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Brands That Trust Us</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CLIENT_LOGOS.map((client, index) => (
            <a 
              key={index} 
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;