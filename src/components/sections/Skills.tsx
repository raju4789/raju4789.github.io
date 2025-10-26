import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { skillsData } from '../../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="section-container">
      <SectionTitle
        title="Skills & Expertise"
        subtitle="Technologies and tools I work with to bring ideas to life"
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {skillsData.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === index
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: selectedCategory === index ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData[selectedCategory].skills.map((skill, index) => (
            <Card
              key={skill.name}
              variant="elevated"
              className="p-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Skill header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      {skill.yearsOfExperience && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.yearsOfExperience} year
                          {skill.yearsOfExperience !== 1 ? 's' : ''} experience
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>

                {/* Description */}
                {skill.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                )}
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

