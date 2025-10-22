# Professional CV - Config-Driven with A4 PDF Export

A modern CV website with config-driven content management and professional A4 PDF export. Keep your beautiful scrolling web design while exporting perfect A4-formatted PDFs.

## 🌟 Features

- ✅ **Config-Driven** - All content managed via `config.json` (no HTML editing!)
- ✅ **Original Design** - Beautiful scrolling page with sidebar navigation
- ✅ **A4 PDF Export** - One-click client-side PDF generation in perfect A4 format
- ✅ **Serverless** - Pure client-side, no backend needed
- ✅ **5 Color Themes** - Built-in theme switcher
- ✅ **Dark/Light Mode** - Toggle between themes
- ✅ **Responsive** - Works on all devices
- ✅ **Easy to Update** - Edit one JSON file, refresh browser

## 🎯 How It Works

**Web View:** Original beautiful scrolling design with sidebar  
**PDF Export:** Automatically formatted as professional A4 document

You get the best of both worlds!

## 📁 Project Structure

```
My-CV/
├── config.json           # 🔧 Edit this file to update your CV
├── index.html            # Main HTML structure
├── css/
│   ├── style.css         # Main styling (web view)
│   ├── print-a4.css      # A4 print layout (PDF export)
│   ├── style-switcher.css
│   └── skins/            # 5 color themes
├── js/
│   ├── script.js         # Loads config & renders CV
│   └── style-switcher.js # Theme switching
├── images/               # Your images and logos
└── README.md
```

## 🚀 Quick Start

### 1. Start a Local Server

**Important:** Must run on a server (not file://) to load config.json

```bash
# Choose one:
python -m http.server 8000
npx http-server -p 8000
php -S localhost:8000
```

### 2. Open in Browser

```
http://localhost:8000
```

### 3. Update Your Content

Edit `config.json` with your information and save. Refresh browser to see changes!

### 4. Export to PDF

Click the **"Export PDF"** button (top-right corner). Your CV will download as a professional A4-formatted PDF!

## 📝 Updating Your CV

### All content is in `config.json`

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com",
    ...
  },
  "skills": [...],
  "workExperience": [...],
  ...
}
```

### Common Updates

**Change Your Name & Contact:**
```json
"personal": {
  "name": "Your Name",
  "title": "Your Job Title",
  "email": "your.email@example.com",
  "phone": "+1 234 567 8900",
  "city": "Your City"
}
```

**Update Skills:**
```json
"skills": [
  { "name": "React", "level": 85 },
  { "name": "Node.js", "level": 80 }
]
```
The `level` is 0-100.

**Add Work Experience:**
```json
"workExperience": [
  {
    "company": "Company Name",
    "logo": "images/company.png",
    "position": "Your Position",
    "period": "2024 - 2025",
    "description": "Company description...",
    "responsibilities": [
      "What you did",
      "Your achievements"
    ],
    "technologies": ["Tech1", "Tech2", "Tech3"],
    "link": "https://company.com"
  }
]
```

**Add Projects:**
```json
"projects": [
  {
    "name": "Project Name",
    "image": "images/project.jpg",
    "links": [
      { "text": "Live Demo", "url": "https://..." },
      { "text": "GitHub", "url": "https://github.com/..." }
    ]
  }
]
```

**Update Education:**
```json
"education": [
  {
    "institution": "University Name",
    "logo": "images/university.svg",
    "degree": "Your Degree",
    "period": "2020 - 2024"
  }
]
```

## 🎨 Customization

### Change Colors

Click the **gear icon** (bottom-right) to choose from 5 color themes.

To customize colors permanently, edit:
- `css/skins/color-1.css` (or color-2, etc.)

### Change Fonts

Edit `css/style.css` - look for the `@import` line at the top.

### Adjust Layout

- **Web view:** Edit `css/style.css`
- **PDF export:** Edit `css/print-a4.css`

## 📄 PDF Export

### How It Works

1. Click "Export PDF" button
2. JavaScript uses html2pdf.js library
3. Applies A4 print styles from `print-a4.css`
4. Generates perfect A4 PDF
5. Downloads automatically

### PDF Features

- ✅ Perfect A4 format (210mm × 297mm)
- ✅ Professional page breaks
- ✅ Hides sidebar and navigation
- ✅ Optimized typography for print
- ✅ Maintains all your content
- ✅ Client-side (serverless)

### Customizing PDF Output

Edit `css/print-a4.css` to adjust:
- Font sizes
- Spacing
- Page breaks
- Layout

Or edit the export options in `js/script.js`:
```javascript
const opt = {
    margin: 10,
    filename: 'Your_Name_CV.pdf',
    ...
}
```

## 🐛 Troubleshooting

### "Failed to load config"
- ✅ Must run on local server (not file://)
- ✅ Check `config.json` syntax at [jsonlint.com](https://jsonlint.com)

### Images not showing
- ✅ Check file paths in config.json
- ✅ Use relative paths: `images/photo.jpg`

### Changes not appearing
- ✅ Hard refresh: Ctrl+Shift+R (Win) or Cmd+Shift+R (Mac)
- ✅ Check browser console for errors (F12)

### PDF export not working
- ✅ Wait for page to load completely
- ✅ Check internet connection (loads html2pdf.js from CDN)
- ✅ Try different browser

## 🌐 Deployment

### GitHub Pages (Free)
1. Push to GitHub repository
2. Settings → Pages → Enable
3. Live at `username.github.io/repo-name`

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Instant live URL!

### Vercel
```bash
npm i -g vercel
vercel
```

## 💡 Best Practices

1. **Validate JSON** - Use [jsonlint.com](https://jsonlint.com) before saving
2. **Test PDF export** - After making changes
3. **Backup config.json** - Before major edits
4. **Use version control** - Git commit regularly
5. **Optimize images** - Smaller files load faster
6. **Keep it concise** - Less is more in a CV

## 🎯 What's Different?

**Web View:** 
- Scrolling page with sidebar
- All sections visible by scrolling
- Beautiful animations and colors
- Interactive elements

**PDF Export:**
- Professional A4 format
- Multi-page document
- Print-optimized typography
- Clean and professional

## 📚 Configuration Reference

### Personal Info
- `name`, `title`, `email`, `phone`, `city`
- `birthday`, `age`, `degree`
- `github`, `telegram`
- `profileImage`, `intro`, `about`
- `typingTitles` (array of job titles for animation)

### Skills
Array of `{ name, level }` where level is 0-100

### Work Experience
- `company`, `logo`, `position`, `period`
- `description`, `responsibilities` (array)
- `technologies` (array), `link`

### Education  
- `institution`, `logo`, `degree`, `period`

### Tools
- `name`, `icon`, `description`

### Projects
- `name`, `image`, `links` (array of {text, url})

### Gallery
- `id`, `image`, `link` (optional)

### Navigation
- `label`, `icon`, `href`

## 🔧 Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling & Print Layout
- **Vanilla JavaScript** - Config loading & rendering
- **Typed.js** - Typing animation
- **html2pdf.js** - PDF generation
- **Font Awesome** - Icons

## 📖 Files Explained

- **index.html** - Main structure with placeholders
- **config.json** - All your CV data (EDIT THIS!)
- **js/script.js** - Loads config, renders CV, handles PDF export
- **css/style.css** - Web view styling
- **css/print-a4.css** - A4 PDF export styling
- **css/style-switcher.css** - Theme switcher
- **css/skins/** - Color themes

## 🎓 Learning More

- **JSON basics:** [JSON.org](https://www.json.org/)
- **CSS for print:** [Smashing Magazine Guide](https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/)
- **html2pdf.js:** [GitHub Repo](https://github.com/eKoopmans/html2pdf.js)

## ⚡ Quick Tips

1. **Edit config.json** → **Save** → **Refresh browser** → **Done!**
2. Use JSON validator if something breaks
3. Test PDF export regularly
4. Keep backups of working config.json
5. Images load faster if optimized (use tinypng.com)

## 📞 Support

Check:
1. Browser console (F12) for errors
2. config.json syntax at [jsonlint.com](https://jsonlint.com)
3. File paths are correct
4. Running on local server

---

**Live Demo:** https://sinafathi.ir/

Enjoy your config-driven CV with perfect PDF export! 🎉
