import React, { useState } from 'react';
import SectionWrapper from '../UI/SectionWrapper';
import { Linkedin, Mail, MapPin, Instagram, Send, Phone } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', mobile: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSent, setIsSent] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formState.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!phoneRegex.test(formState.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Project details are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSent(true);
      
      // Construct Mailto Link
      const subject = encodeURIComponent(`New Project Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi Grey Matrix Team,\n\nI would like to discuss a project with you.\n\nHere are my details:\n` +
        `Name: ${formState.name}\n` +
        `Email: ${formState.email}\n` +
        `Mobile: ${formState.mobile}\n\n` +
        `Project Details:\n${formState.message}\n\n` +
        `Regards,\n${formState.name}`
      );

      // Redirect to email client
      window.location.href = `mailto:greymatrixworks@gmail.com?subject=${subject}&body=${body}`;

      // Reset form after a delay (simulating the user coming back)
      setTimeout(() => {
        setIsSent(false);
        setFormState({ name: '', email: '', mobile: '', message: '' });
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
    // Clear error when user types
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
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
                    <Phone size={20} />
                  </div>
                  <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call or WhatsApp</p>
                      <div className="flex flex-col gap-1">
                        <a href="https://wa.me/919751665327" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-emerald-400 transition-colors">+91 97516 65327</a>
                        <a href="https://wa.me/916379054904" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-emerald-400 transition-colors">+91 63790 54904</a>
                      </div>
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder-gray-400`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder-gray-400`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  value={formState.mobile}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.mobile ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder-gray-400`}
                  placeholder="+91 98765 43210"
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none placeholder-gray-400`}
                  placeholder="Tell us about your project goals..."
                ></textarea>
                 {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#121212] text-white font-medium rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-600/20 flex items-center justify-center gap-2 mt-2 group"
              >
                {isSent ? (
                  <>Opening Email Client...</>
                ) : (
                  <>
                    Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
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