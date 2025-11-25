import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', dark = false }) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 ${dark ? 'bg-[#121212] text-white' : 'bg-white text-gray-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper;