# Daily Sheet App

This folder now includes a small printable web app for the existing two-page shop sheet.

## Files

- `index.html` - app shell
- `styles.css` - screen and print styling
- `app.js` - editable fields, local save/load, JSON import/export
- `Daily Wages & Operations Report Final.pdf` - original sheet reference

## Use It

Open `index.html` in a browser, or run a tiny local server:

```bash
cd /Users/varundaiya/1bit_llm_advanced/daily_sheet
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## What It Does

- Keeps the printable layout locked to exactly `2` A4 pages
- Lets you add extra A4 Chillar-table pages when a day needs more space
- Preserves the same section order, row counts, and columns as the original sheet
- Adds searchable product autocomplete everywhere a product column appears
- Lets you save extra product names locally from the app for later reuse
- Lets you type directly into every writable cell
- Saves the current draft in the browser automatically
- Supports JSON export/import if you want to keep separate day records

## Print Notes

- Use portrait A4
- Browser print preview should show exactly `2` pages unless you add extra pages
- The control bar does not print
