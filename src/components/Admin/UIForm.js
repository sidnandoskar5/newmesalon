import React from 'react';

const UIForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const handleContactIconsChange = (field, value) => {
    onChange({
      ...data,
      contactIcons: {
        ...data.contactIcons,
        [field]: value
      }
    });
  };

  const currencyOptions = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' }
  ];

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>💰 Currency Settings</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Currency Code</label>
            <select
              value={data.currency || 'INR'}
              onChange={(e) => handleChange('currency', e.target.value)}
            >
              {currencyOptions.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Currency Symbol</label>
            <input
              type="text"
              value={data.currencySymbol || '₹'}
              onChange={(e) => handleChange('currencySymbol', e.target.value)}
              placeholder="₹"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>📱 Contact Icons</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Phone Icon</label>
            <input
              type="text"
              value={data.contactIcons?.phone || '📞'}
              onChange={(e) => handleContactIconsChange('phone', e.target.value)}
              placeholder="📞"
            />
          </div>

          <div className="form-group">
            <label>Email Icon</label>
            <input
              type="text"
              value={data.contactIcons?.email || '📧'}
              onChange={(e) => handleContactIconsChange('email', e.target.value)}
              placeholder="📧"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location Icon</label>
            <input
              type="text"
              value={data.contactIcons?.location || '📍'}
              onChange={(e) => handleContactIconsChange('location', e.target.value)}
              placeholder="📍"
            />
          </div>

          <div className="form-group">
            <label>Hours Icon</label>
            <input
              type="text"
              value={data.contactIcons?.hours || '🕒'}
              onChange={(e) => handleContactIconsChange('hours', e.target.value)}
              placeholder="🕒"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>⏱️ Service Display</h3>
        
        <div className="form-group">
          <label>Duration Icon</label>
          <input
            type="text"
            value={data.durationIcon || '⏱️'}
            onChange={(e) => handleChange('durationIcon', e.target.value)}
            placeholder="⏱️"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>💬 System Messages</h3>
        
        <div className="form-group">
          <label>Loading Text</label>
          <input
            type="text"
            value={data.loadingText || ''}
            onChange={(e) => handleChange('loadingText', e.target.value)}
            placeholder="Loading services..."
          />
        </div>

        <div className="form-group">
          <label>No Services Text</label>
          <input
            type="text"
            value={data.noServicesText || ''}
            onChange={(e) => handleChange('noServicesText', e.target.value)}
            placeholder="No services available for this category."
          />
        </div>

        <div className="form-group">
          <label>Error Text</label>
          <input
            type="text"
            value={data.errorText || ''}
            onChange={(e) => handleChange('errorText', e.target.value)}
            placeholder="Unable to load services. Please try again later."
          />
        </div>
      </div>

      <div className="form-section">
        <h3>👁️ Preview</h3>
        <div style={{
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          padding: '20px',
          background: '#f8f9fa'
        }}>
          <h4>Contact Information Preview:</h4>
          <p>{data.contactIcons?.phone || '📞'} +91 98765 43210</p>
          <p>{data.contactIcons?.email || '📧'} contact@salon.com</p>
          <p>{data.contactIcons?.location || '📍'} Mumbai, India</p>
          <p>{data.contactIcons?.hours || '🕒'} Mon-Sat: 9:00 AM - 8:00 PM</p>
          
          <hr style={{ margin: '15px 0' }} />
          
          <h4>Service Duration Preview:</h4>
          <p>{data.durationIcon || '⏱️'} 45 min</p>
          
          <hr style={{ margin: '15px 0' }} />
          
          <h4>Price Preview:</h4>
          <p>Service Price: {data.currencySymbol || '₹'}1,500</p>
          
          <hr style={{ margin: '15px 0' }} />
          
          <h4>System Messages Preview:</h4>
          <p><em>Loading:</em> {data.loadingText || 'Loading services...'}</p>
          <p><em>No Services:</em> {data.noServicesText || 'No services available for this category.'}</p>
          <p><em>Error:</em> {data.errorText || 'Unable to load services. Please try again later.'}</p>
        </div>
      </div>
    </div>
  );
};

export default UIForm; 