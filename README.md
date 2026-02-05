# Ingredient Co-Pilot

A modern, privacy-first web application that uses AI to decode ingredient labels and provide clear explanations about what you're eating.

## Features

- Scan or Type: Upload food label photos or paste ingredient lists
- AI Analysis: Instant ingredient breakdown
- Personalized: Set dietary preferences
- Privacy First: All data stays local
- Responsive: Works on desktop, tablet, and mobile

## Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

The app will be available at http://localhost:5173

## Project Structure

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

## Technical Stack

- React 18
- Vite 5
- Vanilla CSS with CSS Variables
- React Hooks + localStorage

## License

MIT License
