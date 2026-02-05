import React, { useState } from 'react';
import './ProfileSection.css';

const ProfileSection = ({ preferences, onPreferencesChange }) => {
  const [newPreference, setNewPreference] = useState('');

  const commonPreferences = [
    'Gluten-Free',
    'Dairy-Free',
    'Vegan',
    'Low Sugar',
    'No Artificial Colors',
    'Organic',
    'Non-GMO',
    'Keto-Friendly'
  ];

  const handleAddPreference = (preference) => {
    if (preference && !preferences.includes(preference)) {
      onPreferencesChange([...preferences, preference]);
      setNewPreference('');
    }
  };

  const handleRemovePreference = (preference) => {
    onPreferencesChange(preferences.filter(p => p !== preference));
  };

  const handleCustomAdd = (e) => {
    e.preventDefault();
    if (newPreference.trim()) {
      handleAddPreference(newPreference.trim());
    }
  };

  return (
    <section className="profile-section section" id="profile">
      <div className="container">
        <div className="section-title">
          <h2 className="animate-fadeInUp">Your Dietary Profile</h2>
          <p className="text-large animate-fadeInUp animate-delay-1">
            Personalize your experience by setting dietary preferences and sensitivities
          </p>
        </div>

        <div className="profile-content">
          {/* Privacy Notice */}
          <div className="privacy-card card animate-fadeInUp animate-delay-2">
            <div className="privacy-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h3>Privacy First</h3>
                <p>Your preferences are stored locally on your device. No account required, no data tracking.</p>
              </div>
            </div>
          </div>

          {/* Current Preferences */}
          <div className="preferences-card card animate-fadeInUp animate-delay-3">
            <h3>Your Preferences</h3>
            <p className="preferences-subtitle">
              We'll highlight ingredients that may not align with your dietary needs
            </p>

            {preferences.length > 0 ? (
              <div className="selected-preferences">
                {preferences.map((pref, index) => (
                  <div key={index} className="chip chip-removable">
                    <span>{pref}</span>
                    <button
                      onClick={() => handleRemovePreference(pref)}
                      className="chip-remove"
                      aria-label={`Remove ${pref}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" opacity="0.3"/>
                  <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p>No preferences set yet. Add some below to get started.</p>
              </div>
            )}

            {/* Quick Add Buttons */}
            <div className="quick-add-section">
              <h4>Quick Add</h4>
              <div className="quick-add-grid">
                {commonPreferences.map((pref) => (
                  <button
                    key={pref}
                    onClick={() => handleAddPreference(pref)}
                    className="quick-add-btn"
                    disabled={preferences.includes(pref)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {pref}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Preference Input */}
            <div className="custom-add-section">
              <h4>Add Custom Preference</h4>
              <form onSubmit={handleCustomAdd} className="custom-form">
                <input
                  type="text"
                  value={newPreference}
                  onChange={(e) => setNewPreference(e.target.value)}
                  placeholder="e.g., Nut-Free, Soy-Free..."
                  maxLength="50"
                />
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>

          {/* Info Cards */}
          <div className="info-grid animate-fadeInUp animate-delay-4">
            <div className="info-card card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" strokeWidth="2"/>
                <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h4>Real-Time Highlighting</h4>
              <p>Ingredients matching your preferences are automatically flagged during analysis</p>
            </div>
            <div className="info-card card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2"/>
              </svg>
              <h4>Secure & Private</h4>
              <p>All preferences stay on your device. Clear your browser data to reset anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
