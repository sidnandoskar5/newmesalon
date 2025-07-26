import React from 'react';

const ThemeForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const fontOptions = [
    'Poppins',
    'Roboto',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Nunito',
    'Source Sans Pro',
    'Raleway',
    'Ubuntu',
    'Playfair Display'
  ];

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>🎨 Color Scheme</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Primary Color</label>
            <div className="color-input-group">
              <input
                type="color"
                value={data.primaryColor || '#d4af37'}
                onChange={(e) => handleChange('primaryColor', e.target.value)}
              />
              <input
                type="text"
                value={data.primaryColor || '#d4af37'}
                onChange={(e) => handleChange('primaryColor', e.target.value)}
                placeholder="#d4af37"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Secondary Color</label>
            <div className="color-input-group">
              <input
                type="color"
                value={data.secondaryColor || '#2c3e50'}
                onChange={(e) => handleChange('secondaryColor', e.target.value)}
              />
              <input
                type="text"
                value={data.secondaryColor || '#2c3e50'}
                onChange={(e) => handleChange('secondaryColor', e.target.value)}
                placeholder="#2c3e50"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Accent Color</label>
          <div className="color-input-group">
            <input
              type="color"
              value={data.accentColor || '#e74c3c'}
              onChange={(e) => handleChange('accentColor', e.target.value)}
            />
            <input
              type="text"
              value={data.accentColor || '#e74c3c'}
              onChange={(e) => handleChange('accentColor', e.target.value)}
              placeholder="#e74c3c"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>🔤 Typography</h3>
        
        <div className="form-group">
          <label>Font Family</label>
          <select
            value={data.fontFamily || 'Poppins'}
            onChange={(e) => handleChange('fontFamily', e.target.value)}
          >
            {fontOptions.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-section">
        <h3>👁️ Theme Preview</h3>
        <div style={{
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          {/* Header Preview */}
          <div style={{
            background: `linear-gradient(135deg, ${data.primaryColor || '#d4af37'}, #b8941f)`,
            color: 'white',
            padding: '20px',
            fontFamily: `'${data.fontFamily || 'Poppins'}', sans-serif`
          }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Header Preview</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Primary Color Background</p>
          </div>

          {/* Button Preview */}
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <button style={{
              background: data.primaryColor || '#d4af37',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontFamily: `'${data.fontFamily || 'Poppins'}', sans-serif`,
              marginRight: '10px',
              cursor: 'pointer'
            }}>
              Primary Button
            </button>
            
            <button style={{
              background: data.secondaryColor || '#2c3e50',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontFamily: `'${data.fontFamily || 'Poppins'}', sans-serif`,
              marginRight: '10px',
              cursor: 'pointer'
            }}>
              Secondary Button
            </button>

            <button style={{
              background: data.accentColor || '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontFamily: `'${data.fontFamily || 'Poppins'}', sans-serif`,
              cursor: 'pointer'
            }}>
              Accent Button
            </button>
          </div>

          {/* Text Preview */}
          <div style={{ 
            padding: '20px',
            fontFamily: `'${data.fontFamily || 'Poppins'}', sans-serif`
          }}>
            <h1 style={{ 
              color: data.secondaryColor || '#2c3e50',
              margin: '0 0 10px 0',
              fontSize: '2rem'
            }}>
              Sample Heading
            </h1>
            <p style={{ 
              color: '#7f8c8d',
              margin: 0,
              lineHeight: 1.6
            }}>
              This is how your text will look with the selected font family. 
              The typography will be consistent across your entire website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeForm; 