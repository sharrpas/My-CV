# Old Version Backup

This folder contains the original CV files before the A4 format conversion.

## Files

- `script.js` - Original JavaScript with typing animation and scroll navigation
- `style.css` - Original CSS with sidebar layout

## Why These Were Replaced

The new A4 format version uses:
- `css/style-a4.css` - A4 paper layout with print optimization
- `js/cv-renderer.js` - Config-driven dynamic rendering

## To Revert to Old Version

If you want to use the old version:

1. Copy these files back:
   ```
   copy old-version\script.js js\
   copy old-version\style.css css\
   ```

2. Update `index.html` to reference the old files instead of the new ones

3. Remove the new A4 files:
   - `css/style-a4.css`
   - `js/cv-renderer.js`

## Note

The old version did not support:
- Config-driven content (required manual HTML editing)
- PDF export functionality
- A4 paper formatting
- Dynamic content loading

Keep this backup for reference or if you need to revert changes.

---
**Backup Date:** October 22, 2025

