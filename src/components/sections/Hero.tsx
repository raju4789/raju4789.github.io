import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../../data/personalInfo';
import { Button } from '../common/Button';
import { scrollToSection } from '../../utils/helpers';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-bg dark:via-dark-bg-secondary dark:to-dark-bg"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`,
        }}
      />

      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 section-container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name with staggered animation */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="inline-block">
              {personalInfo.name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-gradient"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.05,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Typing animation for roles */}
          <motion.div variants={itemVariants} className="mb-6">
            <TypeAnimation
              sequence={[
                'Senior Software Engineer',
                2000,
                'Full Stack Engineer',
                2000,
                'Java Expert',
                2000,
                'Microservices Architect',
                2000,
                'AI Enthusiast',
                2000,
                'Quick Adaptor',
                2000,
                'Team Player',
                2000,
                'Problem Solver',
                2000,
                'Continuous Learner',
                2000,
                'Passionate about Technology',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400"
              repeat={Infinity}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('experience')}
            >
              View My Experience
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
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
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex flex-col items-center gap-2"
            aria-label="Scroll down"
          >
            <span className="text-sm">Scroll Down</span>
            <FiChevronDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

