# 🚀 Professional Portfolio Template

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC.svg)](https://tailwindcss.com/)

> A stunning, enterprise-grade portfolio template built with modern web technologies. Fully customizable and ready to deploy in minutes!

🌐 **Live Demo:** [https://raju4789.github.io](https://raju4789.github.io)  
⭐ **Star this repo if you find it useful!**

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Sections](#-sections)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Quick Start](#quick-start)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Troubleshooting](#-troubleshooting)
- [Available Scripts](#-available-scripts)
- [License](#-license)
- [Author](#-author)
- [Contributing](#-contributing)
- [Show Your Support](#-show-your-support)
- [Resources](#-resources)
- [Contact](#-contact)

---

## 🎯 About

A **production-ready portfolio template** for developers and tech professionals. Fork it, customize it with your information, and deploy in minutes!

**Perfect for:**
- 💼 Software Engineers & Developers
- 🎨 Full Stack Developers  
- 🚀 Anyone building their personal brand

---

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Seamless theme switching with user preference persistence
- **Fully Responsive** - Mobile-first design that works perfectly on all devices
- **Glassmorphism Effects** - Modern card designs with blur and transparency
- **Smooth Animations** - Framer Motion for fluid, 60fps animations

### ⚡ Performance
- **Blazing Fast** - Vite for lightning-fast HMR and optimized builds
- **Code Splitting** - Lazy loading for optimal bundle size
- **Optimized Assets** - Minified CSS/JS and compressed images
- **SEO Optimized** - Meta tags, Open Graph, semantic HTML
- **Lighthouse Score** - 90+ in all categories

### 🛠️ Technical
- **TypeScript** - Type-safe codebase for better maintainability
- **Component-Based** - Reusable React components with clean architecture
- **Custom Hooks** - Modular logic for theme, scroll, and intersection observer
- **Accessibility** - WCAG 2.1 AA compliant
- **Clean Code** - ESLint, Prettier, and best practices

---

## 🔧 Tech Stack

### Core Technologies
- **Frontend Framework:** React 18.2.0
- **Language:** TypeScript 5.2.2
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.4.0
- **Animations:** Framer Motion 10.16.16

### Libraries & Tools
- **SEO:** React Helmet Async 2.0.4
- **Icons:** React Icons 5.0.1
- **Typing Animation:** React Type Animation 3.2.0
- **Notifications:** React Toastify 10.0.3

### Development Tools
- **Linting:** ESLint 8.55.0
- **Type Checking:** TypeScript ESLint
- **CSS Processing:** PostCSS, Autoprefixer
- **Deployment:** GitHub Pages (gh-pages 6.1.1)

---

## 📄 Sections

1. **🏠 Hero** - Name, title, dynamic typing animation, social links
2. **👤 About** - Bio, animated stats, personality traits, resume download
3. **🛠️ Skills** - Technical skills with proficiency levels and years of experience
4. **💼 Experience** - Interactive timeline with achievements and metrics
5. **💬 Testimonials** - Professional recommendations with ratings (optional)
6. **📧 Contact** - Email, location, social media links

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16.0+ ([Download](https://nodejs.org/))
- **npm** v8.0+ (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Quick Start

1. **Clone and install**
   ```bash
   git clone https://github.com/raju4789/raju4789.github.io.git
   cd raju4789.github.io
   npm install
   ```

2. **Start development**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

3. **Customize** - Edit these 3 key files:
   - `src/data/personalInfo.ts` - Your name, bio, social links
   - `src/data/experience.ts` - Your work history
   - `src/data/skills.ts` - Your technical skills
   
   👉 See [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed guide

4. **Add your resume** - Place your resume PDF here:
   ```
   public/assets/resume.pdf
   ```

5. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🎨 Customization

All your content is stored in separate data files for easy customization:

| Priority | File | What to Change | Time |
|----------|------|----------------|------|
| 🔴 **Required** | `src/data/personalInfo.ts` | Name, email, bio, social links | 10 min |
| 🔴 **Required** | `src/data/experience.ts` | Your work history & achievements | 15 min |
| 🔴 **Required** | `src/data/skills.ts` | Your technical skills & proficiency | 10 min |
| 🟡 **Recommended** | `public/assets/resume.pdf` | Your resume PDF file | 2 min |
| 🟢 **Optional** | `src/data/testimonials.ts` | Recommendations from colleagues | 5 min |

**📖 Complete Guide:** See [CUSTOMIZATION.md](CUSTOMIZATION.md) for step-by-step instructions with examples

**⏱️ Total Time:** ~45 minutes to fully customize

---

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Update repository name** (if using personal site)
   ```
   Repository name: yourusername.github.io
   ```

2. **Configure base path** in `vite.config.ts`
   ```typescript
   export default defineConfig({
     base: '/', // For custom domain or username.github.io
   })
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to: Repository → Settings → Pages
   - Source: Deploy from branch → `gh-pages`
   - Wait 2-3 minutes for deployment

5. **Access your site**
   ```
   https://yourusername.github.io
   ```

### Custom Domain

1. Add `CNAME` file to `public/` folder:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. Enable custom domain in GitHub Pages settings

### Alternative Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📁 Project Structure

```
raju4789.github.io/
├── public/                 # Static assets
│   ├── assets/            # Images, resume, etc.
│   ├── robots.txt         # SEO configuration
│   └── vite.svg           # Favicon
│
├── src/
│   ├── components/
│   │   ├── common/        # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── layout/        # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   │
│   │   └── sections/      # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Experience.tsx
│   │       ├── Testimonials.tsx
│   │       └── Contact.tsx
│   │
│   ├── data/              # Content data (customize here!)
│   │   ├── personalInfo.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── testimonials.ts
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.ts
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useActiveSection.ts
│   │
│   ├── styles/            # Global styles
│   │   └── globals.css
│   │
│   ├── utils/             # Helper functions
│   │   ├── constants.ts
│   │   └── helpers.ts
│   │
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts      # Vite types
│
├── .github/
│   └── workflows/
│       └── deploy.yml     # Automated deployment
│
├── index.html             # HTML entry point
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── LICENSE                # MIT License
└── README.md              # This file
```

---

## 📊 Performance

**Optimizations:**
- Code splitting, tree shaking, lazy loading
- Debounced scroll handlers, memoization
- Minified CSS/JS, compressed assets

**Lighthouse Scores:** 90+ across all categories (Performance, Accessibility, Best Practices, SEO)

---

## 🌐 Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge - latest versions)

**Responsive:** Mobile (320px+), Tablet (768px+), Desktop (1024px+)

---

## 🐛 Troubleshooting

### Common Issues

**Issue: `npm: command not found`**
```bash
# Solution: Install Node.js from nodejs.org
```

**Issue: Port 3000 already in use**
```bash
# Solution: Change port in vite.config.ts or kill process
lsof -ti:3000 | xargs kill
```

**Issue: TypeScript errors during build**
```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
```

**Issue: Tailwind classes not working**
```bash
# Solution: Rebuild
npm run build
```

**Issue: GitHub Pages 404**
- ✅ Check `base` path in `vite.config.ts`
- ✅ Verify `gh-pages` branch exists
- ✅ Confirm GitHub Pages source settings

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run preview      # Preview production build

# Build
npm run build        # Build for production

# Deployment
npm run deploy       # Deploy to GitHub Pages

# Code Quality
npm run lint         # Run ESLint
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Raju Methuku

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👤 Author

Created by **Raju Methuku** - Senior Full Stack Engineer

If you use this template, I'd love to see your portfolio! Feel free to reach out.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas to improve this template:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Ideas for contributions:**
- 🎨 New theme color presets
- 🚀 Performance improvements
- 📱 Enhanced mobile experience
- 🌍 Internationalization (i18n)
- 📊 New section ideas
- 🐛 Bug fixes

---

## 🌟 Show Your Support

If you find this portfolio template helpful:

- ⭐ **Star this repository** on GitHub
- 🍴 **Fork it** and create your own portfolio
- 📢 **Share it** with friends and colleagues
- 💬 **Give feedback** or suggestions
- 🐦 **Tag me** when you deploy your version!

**Built with this template?** Share your portfolio by opening an issue with your URL!

---

## 📚 Resources

- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Detailed customization guide
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)

---

## 📞 Contact

Questions or feedback?
- 📧 narasimha4789@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/raju-m-l-n)
- 🐙 [GitHub](https://github.com/raju4789)

---

<div align="center">

**Made with ❤️ using React + TypeScript + Tailwind CSS**

⭐ Star this repo if you find it useful!

</div>
