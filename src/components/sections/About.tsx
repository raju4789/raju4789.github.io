import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { personalInfo } from '../../data/personalInfo';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const [counters, setCounters] = useState(
    personalInfo.stats.map(() => 0)
  );

  useEffect(() => {
    if (isIntersecting) {
      personalInfo.stats.forEach((stat, index) => {
        const target = parseInt(stat.value.replace(/\D/g, ''));
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = target;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, duration / steps);

        return () => clearInterval(timer);
      });
    }
  }, [isIntersecting]);

  return (
    <section
      id="about"
      ref={ref}
      className="section-container bg-gray-50 dark:bg-dark-bg-secondary"
    >
      <SectionTitle
        title="About Me"
        subtitle="Get to know more about who I am and what I do"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30" />
            
            {/* Placeholder for professional photo */}
            <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-1">
              <div className="bg-white dark:bg-dark-bg-secondary rounded-xl p-8 text-center">
                <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Bio */}
          <div className="space-y-4 mb-8">
            {personalInfo.bio.full.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Traits */}
          <div className="flex flex-wrap gap-2 mb-8">
            {personalInfo.traits.map((trait) => (
              <motion.span
                key={trait}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {trait}
              </motion.span>
            ))}
          </div>

          {/* Download Resume Button */}
          <Button
            variant="primary"
            icon={<FiDownload />}
            href={personalInfo.resume}
            download
          >
            Download Resume
          </Button>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {personalInfo.stats.map((stat, index) => (
          <Card key={index} variant="elevated" className="p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {counters[index]}
                {stat.value.includes('+') && '+'}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          </Card>
        ))}
      </div>
    </section>
  );
};

