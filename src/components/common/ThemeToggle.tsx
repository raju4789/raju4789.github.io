import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-y-1 left-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <FiMoon className="text-blue-400 w-4 h-4" />
        ) : (
          <FiSun className="text-yellow-500 w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
};

