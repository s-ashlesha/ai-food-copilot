import React, { useState } from 'react';
import './ResultsSection.css';

const ResultsSection = ({ ingredients, userPreferences }) => {
  const [expandedCards, setExpandedCards] = useState({});

  // Parse ingredients and generate mock AI analysis
  const parseIngredients = (ingredientString) => {
    const ingredientList = ingredientString.split(',').map(item => item.trim());
    
    // Mock AI analysis data
    const analyses = {
      'Water': {
        purpose: 'Base Solvent',
        tradeoff: 'Essential component with no nutritional value but necessary for product consistency',
        confidence: 'high',
        concern: false
      },
      'Sugar': {
        purpose: 'Sweetener',
        tradeoff: 'Provides taste but contributes to calorie content. Excessive consumption linked to health issues',
        confidence: 'high',
        concern: true
      },
      'Sodium Benzoate': {
        purpose: 'Preservative',
        tradeoff: 'Extends shelf life effectively. Generally recognized as safe, though some studies suggest concerns with vitamin C interaction',
        confidence: 'high',
        concern: false
      },
      'Citric Acid': {
        purpose: 'Flavor Enhancer & Preservative',
        tradeoff: 'Natural acid that adds tartness. Generally safe and commonly used in food products',
        confidence: 'high',
        concern: false
      },
      'Natural Flavors': {
        purpose: 'Flavor Enhancement',
        tradeoff: 'Derived from natural sources but exact composition is proprietary. Generally safe',
        confidence: 'medium',
        concern: false
      },
      'Ascorbic Acid': {
        purpose: 'Vitamin C / Antioxidant',
        tradeoff: 'Beneficial nutrient that also acts as preservative. Prevents oxidation and provides nutritional value',
        confidence: 'high',
        concern: false
      },
      'Red 40': {
        purpose: 'Artificial Colorant',
        tradeoff: 'Synthetic dye for visual appeal. Some studies link to hyperactivity in children, though FDA approved',
        confidence: 'medium',
        concern: true
      },
      'Yellow 5': {
        purpose: 'Artificial Colorant',
        tradeoff: 'Synthetic dye for color enhancement. May cause allergic reactions in sensitive individuals',
        confidence: 'medium',
        concern: true
      }
    };

    return ingredientList.map(ingredient => {
      const baseIngredient = ingredient.replace(/\(.*?\)/g, '').trim();
      const analysis = analyses[baseIngredient] || {
        purpose: 'Processing Aid',
        tradeoff: 'Common food additive used for various manufacturing purposes',
        confidence: 'low',
        concern: false
      };

      return {
        name: ingredient,
        ...analysis,
        highlighted: userPreferences?.length && analysis.concern
      };
    });
  };

  const analyzedIngredients = parseIngredients(ingredients);

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getConfidenceBadge = (confidence) => {
    const badges = {
      high: { class: 'badge-high', icon: '✓' },
      medium: { class: 'badge-medium', icon: '~' },
      low: { class: 'badge-low', icon: '?' }
    };
    return badges[confidence] || badges.low;
  };

  if (!ingredients) return null;

  return (
    <section className="results-section section" id="results">
      <div className="container">
        <div className="results-header">
          <div className="section-title">
            <h2 className="animate-fadeInUp">Ingredient Analysis</h2>
            <p className="text-large animate-fadeInUp animate-delay-1">
              AI-powered insights for each ingredient in your product
            </p>
          </div>
          
          {userPreferences?.length > 0 && (
            <div className="alert-banner animate-fadeInUp animate-delay-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="9" x2="12" y2="13" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Some ingredients may not align with your preferences</span>
            </div>
          )}
        </div>

        <div className="ingredients-grid">
          {analyzedIngredients.map((item, index) => {
            const badge = getConfidenceBadge(item.confidence);
            const isExpanded = expandedCards[index];

            return (
              <div
                key={index}
                className={`ingredient-card card animate-fadeInUp ${item.highlighted ? 'highlighted' : ''}`}
                style={{ animationDelay: `${0.1 * (index % 6)}s` }}
              >
                <div className="card-header">
                  <div className="card-title-group">
                    {item.concern && (
                      <svg className="concern-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    <h4 className="ingredient-name">{item.name}</h4>
                  </div>
                  <span className={`badge ${badge.class}`}>
                    {badge.icon} {item.confidence}
                  </span>
                </div>

                <div className="card-body">
                  <div className="purpose-tag">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {item.purpose}
                  </div>

                  <div className={`tradeoff-content ${isExpanded ? 'expanded' : ''}`}>
                    <p>{item.tradeoff}</p>
                  </div>
                </div>

                <button
                  className="expand-btn"
                  onClick={() => toggleCard(index)}
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {isExpanded ? 'Show less' : 'Learn more'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="results-summary card animate-fadeInUp">
          <h3>Summary</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">{analyzedIngredients.length}</span>
              <span className="stat-label">Total Ingredients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {analyzedIngredients.filter(i => i.confidence === 'high').length}
              </span>
              <span className="stat-label">High Confidence</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {analyzedIngredients.filter(i => i.concern).length}
              </span>
              <span className="stat-label">Flagged Items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
