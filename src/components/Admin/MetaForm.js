import React from 'react';

const MetaForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>🔍 SEO Meta Information</h3>
        
        <div className="form-group">
          <label>Page Title</label>
          <input
            type="text"
            value={data.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Your Salon - Professional Beauty Services"
            maxLength="60"
          />
          <small style={{ color: '#6c757d', fontSize: '12px' }}>
            Recommended: 50-60 characters ({(data.title || '').length}/60)
          </small>
        </div>

        <div className="form-group">
          <label>Meta Description</label>
          <textarea
            value={data.description || ''}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Professional unisex salon services for men, women, and kids in India"
            rows="3"
            maxLength="160"
          />
          <small style={{ color: '#6c757d', fontSize: '12px' }}>
            Recommended: 150-160 characters ({(data.description || '').length}/160)
          </small>
        </div>

        <div className="form-group">
          <label>Keywords</label>
          <input
            type="text"
            value={data.keywords || ''}
            onChange={(e) => handleChange('keywords', e.target.value)}
            placeholder="salon, beauty, hair, spa, Mumbai, unisex salon, grooming"
          />
          <small style={{ color: '#6c757d', fontSize: '12px' }}>
            Separate keywords with commas. Focus on 5-10 relevant keywords.
          </small>
        </div>
      </div>

      <div className="form-section">
        <h3>👁️ Search Engine Preview</h3>
        <div style={{
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          padding: '20px',
          background: '#f8f9fa',
          fontFamily: 'Arial, sans-serif'
        }}>
          <div style={{
            color: '#1a0dab',
            fontSize: '18px',
            lineHeight: '1.3',
            marginBottom: '5px',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}>
            {data.title || 'Your Page Title Here'}
          </div>
          
          <div style={{
            color: '#006621',
            fontSize: '14px',
            marginBottom: '5px'
          }}>
            https://yoursalon.com
          </div>
          
          <div style={{
            color: '#545454',
            fontSize: '13px',
            lineHeight: '1.4'
          }}>
            {data.description || 'Your meta description will appear here. This is how your website will look in search engine results.'}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>💡 SEO Tips</h3>
        <div style={{
          background: '#e3f2fd',
          border: '1px solid #bbdefb',
          borderRadius: '8px',
          padding: '15px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>Best Practices:</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#424242' }}>
            <li><strong>Title:</strong> Include your main keyword and keep it under 60 characters</li>
            <li><strong>Description:</strong> Write compelling copy that encourages clicks (150-160 chars)</li>
            <li><strong>Keywords:</strong> Use relevant terms your customers search for</li>
            <li><strong>Local SEO:</strong> Include your city/location in title and description</li>
            <li><strong>Unique:</strong> Each page should have unique title and description</li>
          </ul>
        </div>
      </div>

      <div className="form-section">
        <h3>📊 Content Analysis</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <div style={{
            background: 'white',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: getScoreColor((data.title || '').length, 50, 60) }}>
              {(data.title || '').length}
            </div>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>Title Length</div>
            <div style={{ fontSize: '11px', color: '#6c757d' }}>Optimal: 50-60</div>
          </div>

          <div style={{
            background: 'white',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: getScoreColor((data.description || '').length, 150, 160) }}>
              {(data.description || '').length}
            </div>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>Description Length</div>
            <div style={{ fontSize: '11px', color: '#6c757d' }}>Optimal: 150-160</div>
          </div>

          <div style={{
            background: 'white',
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
              {(data.keywords || '').split(',').filter(k => k.trim()).length}
            </div>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>Keywords Count</div>
            <div style={{ fontSize: '11px', color: '#6c757d' }}>Recommended: 5-10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to determine color based on optimal range
const getScoreColor = (value, min, max) => {
  if (value >= min && value <= max) return '#28a745'; // Green
  if (value >= min * 0.8 && value <= max * 1.2) return '#ffc107'; // Yellow
  return '#dc3545'; // Red
};

export default MetaForm; 