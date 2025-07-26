import React from 'react';
import dataService from '../services/dataService';

const ServiceCard = ({ service }) => {
  const ui = dataService.getUIConfig();

  return (
    <div className="service-card">
      <div className="service-header">
        <div>
          <h3 className="service-name">{service.name}</h3>
          <p className="service-description">{service.description}</p>
        </div>
        <div className="service-price">{dataService.formatPrice(service.price)}</div>
      </div>
      <div className="service-details">
        <div className="service-duration">
          <span>{ui.durationIcon}</span>
          <span>{service.duration}</span>
        </div>
        <div className="service-category">{service.category}</div>
      </div>
    </div>
  );
};

export default ServiceCard; 