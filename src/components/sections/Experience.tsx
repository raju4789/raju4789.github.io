import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="section-container">
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey and career milestones"
      />

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {experienceData.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-dark-bg z-10">
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                    isEven ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <motion.div
                    className="bg-white dark:bg-dark-bg-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <FiCalendar size={14} />
                            <span>{exp.startDate} - {exp.endDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiBriefcase size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 dark:text-gray-500">
                        {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </div>
                    </div>

                    {/* Current position badge */}
                    {exp.current && (
                      <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-medium mb-4">
                        Current Position
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {/* Responsibilities */}
                          {exp.responsibilities.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Key Responsibilities:
                              </h4>
                              <ul className="space-y-2">
                                {exp.responsibilities.map((resp, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                  >
                                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Achievements */}
                          {exp.achievements.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                  >
                                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

