# 🍃 Ingredient Co-Pilot

> **AI-Powered Food Intelligence** – Understand what's really in your food

A modern, privacy-first web application that uses AI to decode ingredient labels and provide clear, honest explanations about what you're eating.

![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![React](https://img.shields.io/badge/React-18.2-blue)
![License](https://img.shields.io/badge/license-MIT-orange)

---

## ✨ Features

- **📸 Scan or Type** – Upload food label photos or paste ingredient lists
- **🤖 AI Analysis** – Instant ingredient breakdown with confidence scores
- **🎯 Personalized** – Set dietary preferences for customized insights
- **🔒 Privacy First** – All data stays local, no tracking or accounts
- **📱 Fully Responsive** – Beautiful UI across desktop, tablet, and mobile
- **🌐 Offline Support** – Core features work without internet
- **♿ Accessible** – WCAG compliant with keyboard navigation

---

## 🎨 Design Features

- **Modern Aesthetic** – Soft pastel color palette with food-friendly tones
- **Smooth Animations** – Staggered fade-ins and micro-interactions
- **Card-Based Layout** – Clean, organized content presentation
- **Typography** – DM Serif Display + Karla font pairing
- **Glassmorphism** – Subtle backdrop blur effects
- **Responsive Grid** – Adapts seamlessly to all screen sizes

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

---

## 🏗️ Project Structure

```
ingredient-copilot/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ScanSection.jsx
│   │   ├── ResultsSection.jsx
│   │   ├── ProfileSection.jsx
│   │   ├── HowItWorks.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

---

## 📋 Component Overview

### Navigation
- Sticky header with smooth scroll
- Mobile hamburger menu
- Active section highlighting

### Hero Section
- Eye-catching headline and CTA
- Animated product preview cards
- Floating decorative elements
- Trust indicators

### Scan Section
- Toggle between photo upload and text input
- Sample ingredient button
- Privacy reassurance
- Loading states

### Results Section
- Grid of ingredient cards
- Expandable descriptions
- Confidence badges
- Summary statistics
- Preference-based highlighting

### Profile Section
- Local storage preferences
- Quick-add common dietary needs
- Custom preference input
- Privacy notice

### How It Works
- 4-step process cards
- Value propositions
- Responsive layout

### Footer
- Disclaimer and ethics statement
- Links and resources
- Contact information

---

## 🎨 Design System

### Color Palette

```css
--color-cream: #FFF8F0        /* Background */
--color-peach: #FFD4C2        /* Accent light */
--color-apricot: #FFAB91      /* Accent */
--color-terracotta: #E87461   /* Primary */
--color-sage: #B8C5B0         /* Secondary */
--color-mint: #D4E7DD         /* Success */
--color-olive: #8B9D83        /* Secondary dark */
--color-charcoal: #2D3436     /* Text primary */
```

### Typography

- **Display Font**: DM Serif Display (headings)
- **Body Font**: Karla (paragraphs, UI)

### Spacing Scale

```css
--space-xs: 0.5rem   /* 8px */
--space-sm: 1rem     /* 16px */
--space-md: 1.5rem   /* 24px */
--space-lg: 2.5rem   /* 40px */
--space-xl: 4rem     /* 64px */
--space-2xl: 6rem    /* 96px */
```

---

## 🔧 Technical Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Vanilla CSS with CSS Variables
- **State Management**: React Hooks + localStorage
- **Animations**: CSS animations and transitions
- **Icons**: Custom SVG components

---

## 🌟 Key Features Implementation

### Local Storage
User preferences are stored in browser's localStorage for persistence:
```javascript
localStorage.setItem('userPreferences', JSON.stringify(preferences));
```

### Offline Detection
App monitors network status and shows banner when offline:
```javascript
window.addEventListener('online', handleOnline);
window.addEventListener('offline', handleOffline);
```

### Smooth Scrolling
Navigation uses smooth scroll with offset for fixed header:
```javascript
window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
```

### Responsive Design
Mobile-first approach with breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## ⚡ Performance Optimizations

- Lazy loading for images
- CSS animations (GPU accelerated)
- Minimal re-renders with React hooks
- Optimized bundle size with Vite
- Tree-shaking for unused code

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance (WCAG AA)
- Screen reader friendly

---

## 🔐 Privacy & Security

- **No tracking**: Zero analytics or tracking scripts
- **Local storage only**: Data never leaves the device
- **No accounts**: No sign-up or login required
- **No third-party**: No external API calls for user data
- **Clear data**: Users can clear browser data anytime

---

## 📝 Future Enhancements

- [ ] Real OCR for image processing
- [ ] AI model integration (Claude API)
- [ ] Multi-language support
- [ ] Export analysis as PDF
- [ ] Compare multiple products
- [ ] Barcode scanning
- [ ] Nutritional info integration
- [ ] Community ingredient database

---

## 🤝 Contributing

This is a hackathon project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## ⚖️ Disclaimer

This tool provides educational information only and is not medical advice. Always consult healthcare professionals for dietary decisions, especially if you have allergies or health conditions.

---

## 📄 License

MIT License - feel free to use this project for learning and inspiration

---

## 🙏 Credits

- **Design Inspiration**: Modern food, restaurant, and ecommerce websites
- **Typography**: Google Fonts (DM Serif Display, Karla)
- **Icons**: Custom SVG illustrations
- **Built for**: AI Hackathon 2024

---

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ and a desire to make food labels less confusing**
