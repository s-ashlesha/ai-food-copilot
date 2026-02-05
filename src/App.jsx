import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScanSection from './components/ScanSection';
import ResultsSection from './components/ResultsSection';
import ProfileSection from './components/ProfileSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [analyzedIngredients, setAnalyzedIngredients] = useState(null);
  const [userPreferences, setUserPreferences] = useState([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Load preferences from localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      try {
        setUserPreferences(JSON.parse(savedPreferences));
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
  }, [userPreferences]);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle navigation
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle scan completion
  const handleScanComplete = (ingredients) => {
    setAnalyzedIngredients(ingredients);
    handleNavigate('results');
  };

  // Handle preferences change
  const handlePreferencesChange = (newPreferences) => {
    setUserPreferences(newPreferences);
  };

  return (
    <div className="app">
      {/* Offline Banner */}
      {isOffline && (
        <div className="offline-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9" strokeWidth="2" strokeLinecap="round"/>
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>You're offline. Basic features still work!</span>
        </div>
      )}

      {/* Navigation */}
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content */}
      <main>
        <Hero onNavigate={handleNavigate} />
        <ScanSection onScanComplete={handleScanComplete} />
        
        {analyzedIngredients && (
          <ResultsSection 
            ingredients={analyzedIngredients}
            userPreferences={userPreferences}
          />
        )}
        
        <ProfileSection
          preferences={userPreferences}
          onPreferencesChange={handlePreferencesChange}
        />
        <HowItWorks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
