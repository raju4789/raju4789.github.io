import React, { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { CONSOLE_MESSAGE, KONAMI_CODE } from './utils/constants';
import { personalInfo } from './data/personalInfo';

function App() {
  useEffect(() => {
    // Display console message for developers
    console.log(CONSOLE_MESSAGE);

    // Konami code easter egg
    let konamiIndex = 0;
    const handleKonamiCode = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
          console.log('🎉 Konami Code activated! You found the easter egg!');
          document.body.style.animation = 'rainbow 2s infinite';
          setTimeout(() => {
            document.body.style.animation = '';
          }, 5000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKonamiCode);
    return () => window.removeEventListener('keydown', handleKonamiCode);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{personalInfo.name} - {personalInfo.title}</title>
        <meta name="description" content={personalInfo.tagline} />
        <meta name="keywords" content="React Developer, Full Stack Developer, Web Developer, Portfolio, TypeScript" />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personalInfo.social.portfolio} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta name="twitter:description" content={personalInfo.tagline} />
      </Helmet>

      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </Layout>
    </HelmetProvider>
  );
}

export default App;

