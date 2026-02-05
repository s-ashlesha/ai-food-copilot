import React, { useState } from 'react';
import './ScanSection.css';

const ScanSection = ({ onScanComplete }) => {
  const [inputMethod, setInputMethod] = useState('text'); // 'text' or 'upload'
  const [ingredientText, setIngredientText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState('');

  const sampleIngredients = "Water, Sugar, Sodium Benzoate (Preservative), Citric Acid, Natural Flavors, Ascorbic Acid (Vitamin C), Red 40, Yellow 5";

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      // In a real app, this would process the image
      console.log('File uploaded:', file.name);
    }
  };

  const handleScan = () => {
    setIsProcessing(true);

    // Simulate AI processing
    setTimeout(() => {
      const ingredients = ingredientText || sampleIngredients;
      onScanComplete(ingredients);
      setIsProcessing(false);
    }, 1500);
  };

  const handleTrySample = () => {
    setIngredientText(sampleIngredients);
    setInputMethod('text');
  };

  return (
    <section className="scan-section section" id="scan">
      <div className="container">
        <div className="section-title">
          <h2 className="animate-fadeInUp">Scan Your Food Label</h2>
          <p className="text-large animate-fadeInUp animate-delay-1">
            Upload photo or paste ingredients for instant AI analysis
          </p>
        </div>

        <div className="scan-card card animate-fadeInUp animate-delay-2">
          {/* Input Method Toggle */}
          <div className="input-method-toggle">
            <button
              className={`toggle-btn ${inputMethod === 'upload' ? 'active' : ''}`}
              onClick={() => setInputMethod('upload')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2" />
                <circle cx="12" cy="13" r="4" strokeWidth="2" />
              </svg>
              Upload Photo
            </button>
            <button
              className={`toggle-btn ${inputMethod === 'text' ? 'active' : ''}`}
              onClick={() => setInputMethod('text')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
                <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" />
                <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" />
              </svg>
              Type Text
            </button>
          </div>

          {/* Upload Photo Mode */}
          {inputMethod === 'upload' && (
            <div className="upload-area">
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleFileUpload}
                className="file-input"
              />
              <label htmlFor="file-upload" className="file-label">
                <div className="upload-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="17 8 12 3 7 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="3" x2="12" y2="15" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>
                  {fileName ? fileName : 'Click to upload or drag & drop'}
                </h4>
                <p>Supports JPG, PNG, HEIC (Max 10MB)</p>
              </label>
            </div>
          )}

          {/* Text Input Mode */}
          {inputMethod === 'text' && (
            <div className="text-input-area">
              <label htmlFor="ingredient-input" className="input-label">
                Ingredient List
              </label>
              <textarea
                id="ingredient-input"
                value={ingredientText}
                onChange={(e) => setIngredientText(e.target.value)}
                placeholder="Paste or type ingredient list here... (e.g., Water, Sugar, Salt, Natural Flavors...)"
                rows="6"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="scan-actions">
            <button
              className="btn btn-primary btn-large"
              onClick={handleScan}
              disabled={isProcessing || (!ingredientText && !fileName)}
            >
              {isProcessing ? (
                <>
                  <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Analyze Ingredients
                </>
              )}
            </button>
            <button className="btn btn-secondary" onClick={handleTrySample}>
              Try Sample
            </button>
          </div>

          {/* Privacy Note */}
          <div className="privacy-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Your data is processed locally and never stored on our servers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanSection;
