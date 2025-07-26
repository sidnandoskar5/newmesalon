import React from 'react';

const SalonInfoForm = ({ data, businessHours, onChange, onBusinessHoursChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const handleBusinessHoursChange = (field, value) => {
    onBusinessHoursChange({
      ...businessHours,
      [field]: value
    });
  };

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>🏪 Basic Information</h3>
        
        <div className="form-group">
          <label>Salon Name *</label>
          <input
            type="text"
            value={data.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter salon name"
          />
        </div>

        <div className="form-group">
          <label>Tagline</label>
          <input
            type="text"
            value={data.tagline || ''}
            onChange={(e) => handleChange('tagline', e.target.value)}
            placeholder="Enter salon tagline"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Contact Number *</label>
            <input
              type="tel"
              value={data.contact || ''}
              onChange={(e) => handleChange('contact', e.target.value)}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              value={data.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contact@salon.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={data.location || ''}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="City, Country"
            />
          </div>

          <div className="form-group">
            <label>Website</label>
            <input
              type="url"
              value={data.website || ''}
              onChange={(e) => handleChange('website', e.target.value)}
              placeholder="www.yoursalon.com"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>🕒 Business Hours</h3>
        
        <div className="form-group">
          <label>Weekdays (Mon-Sat)</label>
          <input
            type="text"
            value={businessHours.weekdays || ''}
            onChange={(e) => handleBusinessHoursChange('weekdays', e.target.value)}
            placeholder="Mon-Sat: 9:00 AM - 8:00 PM"
          />
        </div>

        <div className="form-group">
          <label>Weekend (Sunday)</label>
          <input
            type="text"
            value={businessHours.weekend || ''}
            onChange={(e) => handleBusinessHoursChange('weekend', e.target.value)}
            placeholder="Sunday: 10:00 AM - 6:00 PM"
          />
        </div>
      </div>
    </div>
  );
};

export default SalonInfoForm; 