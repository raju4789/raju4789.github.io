import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { ThemeToggle } from '../common/ThemeToggle';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../utils/helpers';
import { personalInfo } from '../../data/personalInfo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { y } = useScrollPosition();
  const activeSection = useActiveSection(NAVIGATION_ITEMS.map(item => item.href.slice(1)));

  const isScrolled = y > 50;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
            >
              <h1 className="text-2xl font-bold text-gradient">
                {personalInfo.name.split(' ')[0]}
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAVIGATION_ITEMS.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 relative ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                        layoutId="navbar-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Right side actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <motion.a
                href={personalInfo.resume}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Resume
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-20 right-0 bottom-0 w-64 bg-white dark:bg-dark-bg-secondary shadow-2xl z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col p-6 space-y-4">
                {NAVIGATION_ITEMS.map((item) => {
                  const sectionId = item.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
                <motion.a
                  href={personalInfo.resume}
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

