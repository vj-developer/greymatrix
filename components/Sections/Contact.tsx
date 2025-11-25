import React, { useState } from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { Linkedin, Mail, MapPin, Instagram, ArrowRight, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact">
      <div className="bg-[#121212] rounded-3xl overflow-hidden shadow-2xl relative border border-gray-800">
        {/* Abstract Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          
          <div className="p-10 md:p-16 text-white flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-emerald-900/30 rounded-full text-xs font-semibold text-emerald-400 mb-8 border border-emerald-800/50">
                Free Consultation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Let's Build Your <br/> Digital Future</h2>
              <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-md">
                Ready to elevate your business? Fill out the form below to claim your <span className="text-white font-medium">free 30-minute consultation</span> and strategy session.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:greymatrixworks@gmail.com" className="text-lg text-white hover:text-emerald-400 transition-colors">greymatrixworks@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                   <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                      <span className="text-lg text-white">Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              <a href="https://www.linkedin.com/company/greymatrix/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-gray-400 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/greymatrixworks" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-gray-400 transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 resize-none"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSent}
                className="w-full px-8 py-4 bg-[#121212] text-white font-medium rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-600/20 flex items-center justify-center gap-2 disabled:bg-emerald-600"
              >
                {isSent ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;