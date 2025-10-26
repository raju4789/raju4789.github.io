import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiUser, FiCopy, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { personalInfo } from '../../data/personalInfo';
import { copyToClipboard } from '../../utils/helpers';

export const Contact: React.FC = () => {

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (success) {
      toast.success('Email copied to clipboard!');
    } else {
      toast.error('Failed to copy email');
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      action: handleCopyEmail,
      actionIcon: FiCopy,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: FiUser,
      label: 'Availability',
      value: personalInfo.availability,
    },
  ];

  return (
    <section id="contact" className="section-container">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or just want to chat? Feel free to reach out!"
      />

      <div className="max-w-4xl mx-auto">
        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Feel free to reach out via email or connect with me on social media.
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <Card
                key={info.label}
                variant="elevated"
                className="p-6 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mb-4">
                    <info.icon size={32} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.label}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {info.value}
                  </p>
                  {info.action && info.actionIcon && (
                    <motion.button
                      onClick={info.action}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Copy to clipboard"
                    >
                      <info.actionIcon size={16} />
                      Copy
                    </motion.button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Email CTA Card */}
          <Card variant="glass" className="p-10 text-center">
            <div className="text-5xl mb-4">📧</div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Let's Connect!
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hi,
              I'd love to hear from you. Send me an email and I'll get back to you as soon as possible!
            </p>
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${personalInfo.email}`}
            >
              Email Me Directly
            </Button>
          </Card>

          {/* Social links */}
          <Card variant="elevated" className="p-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Connect with me on Social Media
            </h4>
            <div className="flex justify-center gap-4 flex-wrap">
              {Object.entries(personalInfo.social).filter(([_, url]) => url).map(([platform, url]) => {
                let Icon;
                let label = '';
                
                if (platform === 'github') {
                  Icon = FiGithub;
                  label = 'GitHub';
                } else if (platform === 'linkedin') {
                  Icon = FiLinkedin;
                  label = 'LinkedIn';
                } else if (platform === 'medium') {
                  Icon = SiMedium;
                  label = 'Medium';
                } else {
                  return null;
                }

                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={24} />
                    <span>{label}</span>
                  </motion.a>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

