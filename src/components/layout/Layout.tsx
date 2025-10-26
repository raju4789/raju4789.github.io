import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from '../common/ScrollProgress';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

