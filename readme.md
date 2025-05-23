{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang1033{\fonttbl{\f0\fnil\fcharset0 Calibri;}{\f1\fnil Calibri;}{\f2\fnil\fcharset1 Segoe UI Symbol;}{\f3\fnil\fcharset1 Segoe UI Symbol;}}
{\*\generator Riched20 10.0.22621}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang9 # Accessibility Resources Portal\par
\par
Welcome to the **Accessibility Resources Portal** \f1\emdash  a bilingual project offering structured guidance on building accessible digital content for web, mobile, and documents.\par
\par
---\par
\par
## \f2\u-10179?\u-8998?\f0  Project Structure\par
\par
```\par
/ (Root)\par
|-- index.html                     # English Homepage\par
|-- arabic-index.html               # Arabic Homepage\par
|-- accessibilitey-faq.html          # FAQ Page (English)\par
|-- accessibilitey-faq-ar.html       # FAQ Page (Arabic)\par
|-- header.html                     # Global Header (English)\par
|-- footer.html                     # Global Footer (English)\par
|-- header-arabic.html              # Global Header (Arabic)\par
|-- footer-arabic.html              # Global Footer (Arabic)\par
|-- /checklists/                    # Accessibility Checklists\par
|    |-- dev-a11y-checklist.html\par
|    |-- dev-a11y-checklist-ar.html\par
|    |-- pm-a11y-checklist.html\par
|    |-- pm-a11y-checklist-ar.html\par
|    |-- qa-a11y-checklist.html\par
|    |-- qa-a11y-checklist-ar.html\par
|    |-- ux-ui-a11y-checklist.html\par
|    |-- ux-ui-a11y-checklist-ar.html\par
|    |-- pdf-accessibilitey-checklist.html\par
|    |-- pdf-accessibilitey-checklist-ar.html\par
|-- /quick-guides/                  # Assistive Technology Quick Start Guides\par
|    |-- quick-jaws.html\par
|    |-- quick-jaws-ar.html\par
|    |-- nvda-quick.html\par
|    |-- nvda-quick-ar.html\par
|    |-- narrator-quick.html\par
|    |-- narrator-quick-ar.html\par
|    |-- dragon-quick.html\par
|    |-- dragon-quick-ar.html\par
|    |-- switchcontrol-quick.html\par
|    |-- switchcontrol-quick-ar.html\par
|    |-- talkback-quick.html\par
|    |-- talkback-quick-ar.html\par
|    |-- voice-access-android-quick.html\par
|    |-- voice-access-android-quick-ar.html\par
|    |-- voicecontrol-mak-ios-quick.html\par
|    |-- voicecontrol-mak-ios-quick-ar.html\par
|    |-- voiceover-ios-quick.html\par
|    |-- voiceover-ios-quick-ar.html\par
|    |-- voiceover-mac-quick.html\par
|    |-- voiceover-mac-quick-ar.html\par
|    |-- zoomtext-quick.html\par
|    |-- zoomtext-quick-ar.html\par
|-- /tools/                         # Accessibility Testing Tools\par
|    |-- wcag_checker_a_aa_only.html\par
|    |-- wcag_checker_a_aa_only_arabic.html\par
|    |-- Accessibility_Audit_Template_20250426.xlsx\par
```\par
\par
---\par
\par
## \f2\u-10179?\u-8480?\f0  How It Works\par
\par
- **Dynamic Global Header and Footer:**\par
  - Each page automatically loads `header.html` or `header-arabic.html`, and `footer.html` or `footer-arabic.html` using JavaScript `fetch()`.\par
- **Skip Links:**\par
  - All pages include a "Skip to Main Content" link at the top for better accessibility.\par
- **Responsive and Accessible:**\par
  - All pages are built using TailwindCSS for responsiveness and accessibility.\par
- **Bilingual:**\par
  - All content is fully available in both English and Arabic.\par
\par
\par
## \f2\u-10180?\u-8432?\f0  Hosting Notes\par
\par
- Dynamic loading (fetching header/footer) works **only after deployment** (GitHub Pages, Netlify, etc.) \f1\emdash  not directly from `file://` system.\par
- For local preview, you can use a small web server like:\par
  - `Live Server` extension for VS Code\par
  - `python -m http.server`\par
\par
\par
## \f2\u-10179?\u-9002?\f0  License\par
\par
Created and designed by **Noah Al Hadidi \'a9 2025**.\par
\par
---\par
\par
\f3\u9989?\f0  This README ensures that anyone downloading or contributing will immediately understand the project structure and purpose!\par
}
 