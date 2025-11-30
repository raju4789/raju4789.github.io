export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  TESTIMONIALS: 'testimonials',
  CONTACT: 'contact',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/raju4789',
  linkedin: 'https://linkedin.com/in/raju-m-l-n',
  medium: 'https://medium.com/@narasimha4789',
  email: 'mailto:raju.methuku.career@gmail.com',
};

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

// Easter egg - Konami code
export const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const CONSOLE_MESSAGE = `
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   👋 Hello, fellow developer!                           ║
║                                                          ║
║   I see you're checking out the console.                ║
║   Want to work together? Let's connect!                 ║
║                                                          ║
║   📧 raju.methuku.career@gmail.com                      ║
║   🔗 https://github.com/raju4789                        ║
║   💼 https://linkedin.com/in/raju-m-l-n                 ║
║                                                          ║
║   Built with ❤️ using React, TypeScript & Tailwind      ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`;

