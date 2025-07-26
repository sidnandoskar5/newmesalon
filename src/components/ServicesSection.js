import React, { useState } from 'react';
import dataService from '../services/dataService';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('men');
  const categories = dataService.getCategories();
  const ui = dataService.getUIConfig();
  
  const currentServices = dataService.getServicesByCategory(activeCategory);

  return (
    <section className="services-section">
      <div className="container">
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-tab ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
              title={category.description}
            >
              <span style={{ marginRight: '8px' }}>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {currentServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {currentServices.length === 0 && (
          <div className="loading">{ui.noServicesText}</div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection; 