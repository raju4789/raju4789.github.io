# Assets Directory

This directory contains static assets for your portfolio.

## 📄 Resume

**Required:** Add your resume PDF file here.

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in this directory: `public/assets/resume.pdf`

The "Download Resume" button in the About section will automatically link to this file.

### Current Configuration

The resume path is configured in `src/data/personalInfo.ts`:
```typescript
resume: "/assets/resume.pdf"
```

If you want to use a different filename, update this path in `personalInfo.ts`.

## 🖼️ Images (Optional)

You can also add other assets here:
- Profile photos
- Project screenshots
- Icons
- Any other static files

### Example Structure

```
public/assets/
├── resume.pdf          # Your resume (required)
├── profile.jpg         # Your photo (optional)
└── og-image.jpg        # Open Graph image (optional)
```

---

**Note:** Files in the `public/` directory are served as-is. Reference them using paths like `/assets/filename.ext`

