import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  onClick,
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variantStyles = {
    default: 'bg-white dark:bg-dark-bg-secondary border border-gray-200 dark:border-gray-700',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20 dark:bg-white/5 dark:border-white/10',
    elevated: 'bg-white dark:bg-dark-bg-secondary shadow-lg hover:shadow-xl',
  };

  const hoverStyles = hover
    ? 'hover:scale-105 hover:shadow-2xl cursor-pointer'
    : '';

  const classes = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

