import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-fadeInUp">
              <h2>About Ingredient Co-Pilot</h2>
              <p className="text-large">
                We believe everyone deserves to understand what's in their food—without needing 
                a degree in chemistry or nutrition.
              </p>
              <p>
                Ingredient Co-Pilot uses advanced AI to decode ingredient labels in seconds, 
                providing clear, honest explanations about what each ingredient does and its 
                potential trade-offs. We're not here to tell you what to eat, but to give you 
                the knowledge to make your own informed choices.
              </p>
              <p>
                Built with privacy at our core, all your data stays on your device. No tracking, 
                no accounts, no hidden agendas—just transparency about what you're eating.
              </p>
            </div>
            
            <div className="about-values animate-fadeInUp animate-delay-2">
              <div className="value-item">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Transparency</h4>
                  <p>Honest information without marketing spin or hidden motives</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4>Privacy</h4>
                  <p>Your data never leaves your device. Zero tracking, zero storage</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2"/>
                    <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4>Accessibility</h4>
                  <p>Complex science made simple for everyone to understand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4C16 4 8 8 8 16C8 20 10 24 16 28C22 24 24 20 24 16C24 8 16 4 16 4Z"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <path
                    d="M16 4C16 4 8 8 8 16C8 20 10 24 16 28C22 24 24 20 24 16C24 8 16 4 16 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 10V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 14L16 18L20 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Ingredient Co-Pilot</span>
              </div>
              <p className="footer-tagline">
                Understanding food, one ingredient at a time
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#home">Home</a>
                <a href="#scan">Scan Food</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#profile">Your Profile</a>
              </div>
              
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#about">About Us</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="#feedback">Feedback</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="disclaimer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p>
                <strong>Disclaimer:</strong> This tool provides educational information only and is not 
                medical advice. Always consult healthcare professionals for dietary decisions, especially 
                if you have allergies or health conditions.
              </p>
            </div>

            <div className="ethics-note">
              <p>
                <strong>Our Ethics:</strong> We're committed to transparency, privacy, and accessibility. 
                This tool is designed to empower—not replace—your judgment. We don't sell your data, 
                track your searches, or push products.
              </p>
            </div>

            <div className="footer-meta">
              <p>Built with care • AI-Powered • Privacy-First</p>
              <p className="copyright">
                © {new Date().getFullYear()} Ingredient Co-Pilot. Created for a hackathon with ❤️
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
