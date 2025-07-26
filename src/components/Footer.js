import React from 'react';
import dataService from '../services/dataService';

const Footer = () => {
  const salonInfo = dataService.getSalonInfo();
  const footer = dataService.getFooterConfig();
  const businessHours = dataService.getBusinessHours();
  const ui = dataService.getUIConfig();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{footer.about.title}</h3>
            <p>{footer.about.description}</p>
          </div>
          
          <div className="footer-section">
            <h3>{footer.contact.title}</h3>
            <p>{ui.contactIcons.phone} {salonInfo.contact}</p>
            <p>{ui.contactIcons.email} {salonInfo.email}</p>
            <p>{ui.contactIcons.location} {salonInfo.location}</p>
            <p>{ui.contactIcons.hours} {businessHours.weekdays}</p>
            <p>{ui.contactIcons.hours} {businessHours.weekend}</p>
          </div>
          
          <div className="footer-section">
            <h3>{footer.services.title}</h3>
            {footer.services.list.map((service, index) => (
              <p key={index}>{service}</p>
            ))}
          </div>
          
          <div className="footer-section">
            <h3>{footer.social.title}</h3>
            {footer.social.links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 {salonInfo.name}. {footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 