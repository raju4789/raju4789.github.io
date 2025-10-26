import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
};

