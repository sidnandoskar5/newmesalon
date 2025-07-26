import React from 'react';
import dataService from '../services/dataService';

const Header = () => {
  const salonInfo = dataService.getSalonInfo();
  const ui = dataService.getUIConfig();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {salonInfo.name}
            <span>{salonInfo.tagline}</span>
          </div>
          <div className="contact-info">
            <p>{ui.contactIcons.phone} {salonInfo.contact}</p>
            <p>{ui.contactIcons.email} {salonInfo.email}</p>
            <p>{ui.contactIcons.location} {salonInfo.location}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 