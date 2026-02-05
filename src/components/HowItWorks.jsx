import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2"/>
          <circle cx="12" cy="13" r="4" strokeWidth="2"/>
        </svg>
      ),
      title: 'Scan or Type',
      description: 'Take a photo of your ingredient label or paste the text directly. We support any format.'
    },
    {
      number: '02',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2"/>
          <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2"/>
        </svg>
      ),
      title: 'AI Analysis',
      description: 'Our AI instantly identifies each ingredient, explains its purpose, and evaluates trade-offs.'
    },
    {
      number: '03',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2"/>
          <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2"/>
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2"/>
          <polyline points="10 9 9 9 8 9" strokeWidth="2"/>
        </svg>
      ),
      title: 'Understand',
      description: 'Get clear, honest explanations for each ingredient with confidence scores and personalized alerts.'
    },
    {
      number: '04',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2"/>
          <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2"/>
        </svg>
      ),
      title: 'Make Choices',
      description: 'Armed with knowledge, make informed decisions about what you eat—no medical degree required.'
    }
  ];

  return (
    <section className="how-it-works-section section" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2 className="animate-fadeInUp">How It Works</h2>
          <p className="text-large animate-fadeInUp animate-delay-1">
            Understanding your food has never been easier
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card card animate-fadeInUp"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="12 5 19 12 12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Value Propositions */}
        <div className="value-props animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="value-card card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h4>Instant Results</h4>
            <p>Analysis completed in seconds, not minutes</p>
          </div>
          <div className="value-card card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" strokeWidth="2"/>
            </svg>
            <h4>Clear & Honest</h4>
            <p>No marketing spin, just straightforward facts</p>
          </div>
          <div className="value-card card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
            </svg>
            <h4>For Everyone</h4>
            <p>No expertise needed to understand results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
