# 🎨 Customization Guide

This guide will help you personalize the portfolio with your own information.

## 📋 Quick Checklist

- [ ] Update personal information
- [ ] Update skills and expertise
- [ ] Add work experience
- [ ] Add testimonials (optional)
- [ ] Add your resume PDF
- [ ] Replace placeholder images
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Add Google Analytics (optional)

## 1️⃣ Personal Information

### File: `src/data/personalInfo.ts`

```typescript
export const personalInfo = {
  name: "Your Full Name",                    // ← Your name
  title: "Your Job Title",                   // ← e.g., "Senior React Developer"
  tagline: "Your catchy tagline",            // ← Brief description
  bio: {
    short: "One-line bio",
    full: [
      "First paragraph about you",           // ← Your story
      "Second paragraph",
      "Third paragraph",
      "Fourth paragraph"
    ]
  },
  location: "Your City, Country",            // ← Where you're based
  email: "your.email@example.com",           // ← Your email
  phone: "+1234567890",                      // ← Your phone (optional)
  availability: "Current status",            // ← e.g., "Available for opportunities"
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    medium: "https://medium.com/@yourusername",
    portfolio: "https://yourwebsite.com"
  },
  resume: "/assets/resume.pdf",              // ← Path to your resume
  stats: [
    { label: "Years Experience", value: "X+", icon: "⚡" },
    { label: "Projects Completed", value: "X+", icon: "🚀" },
    { label: "Happy Clients", value: "X+", icon: "😊" },
    { label: "Code Commits", value: "X+", icon: "💻" }
  ],
  traits: [
    "Your Trait 1",                          // ← e.g., "Problem Solver"
    "Your Trait 2",
    "Your Trait 3",
    // Add more traits
  ]
};
```

## 2️⃣ Skills

### File: `src/data/skills.ts`

Update each category with your skills:

```typescript
{
  title: "Frontend Development",             // ← Category name
  skills: [
    {
      name: "React",                         // ← Skill name
      level: 95,                             // ← Proficiency (0-100)
      icon: "⚛️",                             // ← Emoji icon
      yearsOfExperience: 4,                  // ← Years
      description: "Brief description"       // ← What you can do
    },
    // Add more skills
  ]
}
```

### Skill Level Guide

- 90-100: Expert (Can teach others, solve complex problems)
- 80-89: Advanced (Very comfortable, production-ready)
- 70-79: Intermediate (Can build projects independently)
- 60-69: Competent (Need occasional help)
- Below 60: Beginner (Still learning)

## 3️⃣ Work Experience

### File: `src/data/experience.ts`

```typescript
{
  id: 1,
  company: "Company Name",
  position: "Your Position",
  duration: "X years Y months",              // ← Will be calculated
  startDate: "Jan 2023",                     // ← Start date
  endDate: "Present",                        // ← Or end date
  location: "City, State/Country",
  type: "Full-time",                         // ← Full-time, Part-time, Contract
  description: "Brief overview",
  responsibilities: [
    "What you did",
    "Another responsibility",
    // Add more
  ],
  achievements: [
    "Key achievement with metrics",
    "Another achievement",
    // Add more
  ],
  technologies: ["Tech1", "Tech2", "..."],
  current: true,                             // ← Only for current position
}
```

## 4️⃣ Testimonials

### File: `src/data/testimonials.ts`

```typescript
{
  id: 1,
  name: "Client/Colleague Name",
  position: "Their Job Title",
  company: "Their Company",
  image: "https://avatar-url.com",           // ← Or use pravatar.cc
  text: "Their testimonial text",            // ← The review
  rating: 5,                                 // ← 1-5 stars
  linkedin: "https://linkedin.com/in/...",   // ← Optional
}
```

### How to Get Testimonials

1. Export LinkedIn recommendations
2. Ask clients/colleagues via email
3. Use testimonials from freelance platforms
4. Request feedback after successful projects

## 5️⃣ Resume PDF

### Adding Your Resume

1. **Export your resume as PDF**
   - Keep it under 5MB for faster downloads
   - Name it `resume.pdf`

2. **Place it in the assets directory**
   ```
   public/assets/resume.pdf
   ```

3. **Verify the path in personalInfo.ts**
   ```typescript
   // src/data/personalInfo.ts
   export const personalInfo = {
     // ...
     resume: "/assets/resume.pdf",  // ← This should match your filename
   };
   ```

4. **Test the download**
   - Run `npm run dev`
   - Go to the About section
   - Click "Download Resume" button
   - Verify the PDF downloads correctly

### Using a Different Filename

If you want to use a different filename (e.g., `YourName_Resume.pdf`):

1. Place your file in `public/assets/YourName_Resume.pdf`
2. Update `personalInfo.ts`:
   ```typescript
   resume: "/assets/YourName_Resume.pdf",
   ```

### Note
The "Download Resume" button appears in the **About** section of your portfolio.

## 6️⃣ Images

### Profile/About Image

- Add a professional photo to `public/assets/images/`
- Update the image in `src/components/sections/About.tsx`
- Recommended size: 500x500px

## 7️⃣ Theme Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  light: {
    bg: '#FFFFFF',              // ← Background
    accent: '#3B82F6',          // ← Primary color
  },
  dark: {
    bg: '#0A192F',              // ← Dark background
    accent: '#22D3EE',          // ← Dark mode accent
  }
}
```

### Fonts

In `index.html`, change the Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 8️⃣ Analytics (Optional)

### Google Analytics 4

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎯 Final Checks

Before deploying:

- [ ] Test all sections on desktop
- [ ] Test on mobile devices
- [ ] Test light and dark mode
- [ ] Click all links to verify they work
- [ ] Test contact form
- [ ] Check for typos
- [ ] Verify all images load
- [ ] Test navigation and smooth scrolling
- [ ] Run Lighthouse audit (aim for 90+ scores)

## 🚀 Ready to Deploy?

Once customized, follow the deployment guide in `README.md`!

## ❓ Need Help?

- Check `README.md` for troubleshooting
- Review the code comments in each file
- Look at the placeholder data for examples
- Feel free to reach out!

Happy customizing! 🎉

