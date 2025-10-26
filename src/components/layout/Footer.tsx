import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../../data/personalInfo';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-dark-bg-secondary border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {personalInfo.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <motion.button
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>{personalInfo.location}</li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>{personalInfo.availability}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
            <span className="ml-2">Made with ❤️ and React</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

