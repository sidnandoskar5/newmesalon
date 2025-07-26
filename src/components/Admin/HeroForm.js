import React from 'react';

const HeroForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>🎯 Hero Section Content</h3>
        
        <div className="form-group">
          <label>Main Title *</label>
          <input
            type="text"
            value={data.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Welcome to Your Salon"
          />
        </div>

        <div className="form-group">
          <label>Subtitle</label>
          <input
            type="text"
            value={data.subtitle || ''}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            placeholder="Experience the finest beauty services"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={data.description || ''}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Professional care for Men, Women & Kids"
            rows="3"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>👁️ Preview</h3>
        <div style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #f8f9fa',
          color: 'white',
          padding: '40px 20px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700' }}>
            {data.title || 'Your Title Here'}
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem', opacity: '0.9' }}>
            {data.subtitle || 'Your subtitle here'}
          </p>
          <p style={{ fontSize: '1rem', opacity: '0.8' }}>
            {data.description || 'Your description here'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroForm; 