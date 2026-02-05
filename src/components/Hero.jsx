import React from 'react';
import './Hero.css';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero" id="home">
      {/* Decorative background elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text animate-fadeInUp">
            <span className="hero-badge">AI-Powered Food Intelligence</span>
            <h1 className="hero-title animate-fadeInUp animate-delay-1">
              Know what's in your food
            </h1>
            <p className="hero-description text-large animate-fadeInUp animate-delay-2">
              AI-powered ingredient analysis. Clear, honest insights instantly.
            </p>
            
            <div className="hero-cta-group animate-fadeInUp animate-delay-3">
              <button
                className="btn btn-primary btn-large"
                onClick={() => onNavigate('scan')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="13" r="4" strokeWidth="2"/>
                </svg>
                Scan Ingredients Now
              </button>
              <button
                className="btn btn-secondary btn-large"
                onClick={() => onNavigate('how-it-works')}
              >
                How It Works
              </button>
            </div>

            {/* Trust indicators */}
            <div className="hero-trust animate-fadeInUp animate-delay-4">
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Privacy First</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Instant Results</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" strokeWidth="2"/>
                </svg>
                <span>No Sign-Up Required</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Visual */}
          <div className="hero-visual animate-fadeIn animate-delay-2">
            <div className="visual-card">
              <div className="visual-mockup">
                {/* Ingredient card preview */}
                <div className="preview-card">
                  <div className="preview-header">
                    <span className="preview-ingredient">Sodium Benzoate</span>
                    <span className="preview-badge badge-high">High Confidence</span>
                  </div>
                  <div className="preview-body">
                    <p className="preview-purpose">Preservative</p>
                    <p className="preview-text">Prevents bacterial growth and extends shelf life...</p>
                  </div>
                </div>

                {/* Second card slightly behind */}
                <div className="preview-card preview-card-back">
                  <div className="preview-header">
                    <span className="preview-ingredient">Citric Acid</span>
                    <span className="preview-badge badge-high">High Confidence</span>
                  </div>
                  <div className="preview-body">
                    <p className="preview-purpose">Flavor Enhancer</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="float-element float-1">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="var(--color-sage)" opacity="0.3"/>
                  <path d="M20 10L25 20L20 30L15 20L20 10Z" fill="var(--color-olive)"/>
                </svg>
              </div>
              <div className="float-element float-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="13" fill="var(--color-peach)" opacity="0.3"/>
                  <circle cx="15" cy="15" r="8" fill="var(--color-apricot)"/>
                </svg>
              </div>
              <div className="float-element float-3">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                  <rect x="5" y="5" width="25" height="25" rx="5" fill="var(--color-mint)" opacity="0.3"/>
                  <path d="M12 17.5L16 21.5L23 13.5" stroke="var(--color-olive)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
