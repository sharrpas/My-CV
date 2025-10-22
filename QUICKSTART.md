# 🚀 Quick Start Guide - 5 Minutes

## What You Have

✅ **Original scrolling CV design** (with sidebar)  
✅ **Config-driven content** (edit JSON, not HTML)  
✅ **A4 PDF export** (one-click download)

## Step 1: Start Local Server (Required)

Choose ONE method:

```bash
# Python (if installed)
python -m http.server 8000

# Node.js (if installed)
npx http-server -p 8000

# PHP (if installed)
php -S localhost:8000
```

**OR use VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Step 2: Open in Browser

Visit: `http://localhost:8000`

You should see your CV! 🎉

## Step 3: Test PDF Export

Click the **"Export PDF"** button (top-right corner)

Your CV downloads as a professional A4 PDF!

## Step 4: Update Your Content

1. Open `config.json` in any text editor
2. Find this section:
```json
"personal": {
  "name": "Sina Fathi",   ← Change to your name
  "email": "sinaf381@gmail.com",  ← Your email
  ...
}
```

3. Save the file
4. Refresh your browser
5. See your changes instantly!

## 🎯 Common First Edits

### Change Your Name
Line 3 in `config.json`:
```json
"name": "YOUR NAME HERE"
```

### Change Your Email
Line 10:
```json
"email": "your.email@example.com"
```

### Change Your Phone
Line 11:
```json
"phone": "+1 234 567 8900"
```

### Update Your Photo
1. Add your photo to `images/` folder
2. Line 20:
```json
"profileImage": "images/your-photo.jpg"
```

### Add a Skill
Find `"skills"` array (around line 30):
```json
"skills": [
  { "name": "React", "level": 90 },  ← Add this line
  { "name": "PHP", "level": 82 }
]
```

### Add Work Experience
Find `"workExperience"` array:
```json
{
  "company": "New Company",
  "position": "Your Position",
  "period": "2024 - 2025",
  "description": "What they do...",
  "responsibilities": ["Task 1", "Task 2"],
  "technologies": ["Tech1", "Tech2"],
  "link": "https://company.com"
}
```

## ⚠️ Important Notes

1. **Must use a server** - Can't open index.html directly (file://)
2. **Valid JSON required** - Check at [jsonlint.com](https://jsonlint.com) if errors
3. **Hard refresh if needed** - Ctrl+Shift+R (Win) or Cmd+Shift+R (Mac)

## 🎨 Customize Colors

1. Click the **gear icon** (bottom-right)
2. Choose from 5 color themes
3. Toggle Dark/Light mode

## 📄 PDF Export Tips

- ✅ Wait for page to load completely before exporting
- ✅ Check internet connection (uses online library)
- ✅ PDF is automatically formatted as A4
- ✅ All sections included automatically

## 🐛 Quick Troubleshooting

### "Failed to load CV data"
→ Make sure you're running on a server (Step 1)

### Changes not showing
→ Hard refresh: Ctrl+Shift+R or Cmd+Shift+R

### JSON syntax error
→ Validate at [jsonlint.com](https://jsonlint.com)

### Images not loading
→ Check paths in config.json: `images/photo.jpg`

## 🚀 Deploy Online (5 minutes)

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag your project folder
3. Get instant live URL!

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Enable
3. Live at `username.github.io/repo`

## 📋 Workflow

```
1. Edit config.json
2. Save
3. Refresh browser
4. Check changes
5. Test PDF export
6. Deploy!
```

## 💡 Pro Tips

1. **Backup config.json** before major changes
2. **Test PDF after edits** to see how it looks
3. **Use JSON validator** to catch errors early
4. **Keep it concise** - quality over quantity
5. **Optimize images** - smaller = faster

## 📖 Next Steps

- Read full [README.md](README.md) for detailed docs
- Customize colors in `css/skins/`
- Add all your work experience and projects
- Export and share your professional CV!

## 🎯 Key Files

| File | What It Does |
|------|-------------|
| `config.json` | **YOUR CV DATA** (edit this!) |
| `index.html` | Page structure |
| `css/style.css` | Web design |
| `css/print-a4.css` | PDF export design |
| `js/script.js` | Loads and renders CV |

## ⏱️ Time Estimate

- Setup & test: **5 minutes**
- Update your info: **30 minutes**
- Perfect & deploy: **30 minutes**

**Total: ~1 hour to have your professional CV live!**

---

**Need help?** Check the full [README.md](README.md)

Good luck! 🎉
