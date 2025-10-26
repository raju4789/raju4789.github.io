import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiLinkedin, FiStar } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { testimonialsData } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentTestimonial = testimonialsData[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-container bg-gray-50 dark:bg-dark-bg-secondary overflow-hidden">
      <SectionTitle
        title="Testimonials"
        subtitle="What colleagues and clients say about working with me"
      />

      <div className="max-w-4xl mx-auto">
        {/* Testimonial card */}
        <div className="relative min-h-[400px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 md:p-12 shadow-xl">
                {/* Quote icon */}
                <div className="text-6xl text-blue-600 dark:text-blue-400 opacity-20 mb-4">
                  "
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-yellow-500 fill-current"
                      size={20}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {currentTestimonial.text}
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {currentTestimonial.position}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {currentTestimonial.company}
                    </p>
                  </div>

                  {currentTestimonial.linkedin && (
                    <motion.a
                      href={currentTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="LinkedIn profile"
                    >
                      <FiLinkedin size={24} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white dark:bg-dark-bg-secondary rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white dark:bg-dark-bg-secondary rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-blue-600 dark:bg-blue-400'
                  : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

