import React from 'react';

const FooterForm = ({ data, onChange }) => {
  const handleAboutChange = (field, value) => {
    onChange({
      ...data,
      about: {
        ...data.about,
        [field]: value
      }
    });
  };

  const handleContactChange = (field, value) => {
    onChange({
      ...data,
      contact: {
        ...data.contact,
        [field]: value
      }
    });
  };

  const handleServicesChange = (field, value) => {
    onChange({
      ...data,
      services: {
        ...data.services,
        [field]: value
      }
    });
  };

  const handleServiceListChange = (index, value) => {
    const updatedList = [...data.services.list];
    updatedList[index] = value;
    onChange({
      ...data,
      services: {
        ...data.services,
        list: updatedList
      }
    });
  };

  const addServiceItem = () => {
    const updatedList = [...data.services.list, '• New Service'];
    onChange({
      ...data,
      services: {
        ...data.services,
        list: updatedList
      }
    });
  };

  const removeServiceItem = (index) => {
    const updatedList = data.services.list.filter((_, i) => i !== index);
    onChange({
      ...data,
      services: {
        ...data.services,
        list: updatedList
      }
    });
  };

  const handleSocialChange = (field, value) => {
    onChange({
      ...data,
      social: {
        ...data.social,
        [field]: value
      }
    });
  };

  const handleSocialLinkChange = (index, field, value) => {
    const updatedLinks = [...data.social.links];
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value
    };
    onChange({
      ...data,
      social: {
        ...data.social,
        links: updatedLinks
      }
    });
  };

  const addSocialLink = () => {
    const newLink = {
      name: 'New Platform',
      icon: '🔗',
      url: 'https://example.com'
    };
    onChange({
      ...data,
      social: {
        ...data.social,
        links: [...data.social.links, newLink]
      }
    });
  };

  const removeSocialLink = (index) => {
    const updatedLinks = data.social.links.filter((_, i) => i !== index);
    onChange({
      ...data,
      social: {
        ...data.social,
        links: updatedLinks
      }
    });
  };

  const handleCopyrightChange = (value) => {
    onChange({
      ...data,
      copyright: value
    });
  };

  const socialIcons = ['📘', '📷', '🐦', '📱', '💼', '📺', '🎵', '📞'];

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>ℹ️ About Section</h3>
        
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={data.about?.title || ''}
            onChange={(e) => handleAboutChange('title', e.target.value)}
            placeholder="About Your Salon"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={data.about?.description || ''}
            onChange={(e) => handleAboutChange('description', e.target.value)}
            placeholder="Tell customers about your salon..."
            rows="4"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>📞 Contact Section</h3>
        
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={data.contact?.title || ''}
            onChange={(e) => handleContactChange('title', e.target.value)}
            placeholder="Contact Information"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>💼 Services Section</h3>
        
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={data.services?.title || ''}
            onChange={(e) => handleServicesChange('title', e.target.value)}
            placeholder="Our Services"
          />
        </div>

        <div className="form-group">
          <label>Service List</label>
          <div className="dynamic-list">
            {data.services?.list?.map((service, index) => (
              <div key={index} className="list-item">
                <button
                  className="remove-item-btn"
                  onClick={() => removeServiceItem(index)}
                  title="Remove service"
                >
                  ×
                </button>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => handleServiceListChange(index, e.target.value)}
                  placeholder="• Service name"
                />
              </div>
            ))}
            <button className="add-item-btn" onClick={addServiceItem}>
              + Add Service
            </button>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>🌐 Social Media</h3>
        
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={data.social?.title || ''}
            onChange={(e) => handleSocialChange('title', e.target.value)}
            placeholder="Follow Us"
          />
        </div>

        <div className="form-group">
          <label>Social Links</label>
          <div className="dynamic-list">
            {data.social?.links?.map((link, index) => (
              <div key={index} className="list-item">
                <button
                  className="remove-item-btn"
                  onClick={() => removeSocialLink(index)}
                  title="Remove social link"
                >
                  ×
                </button>

                <div className="form-row">
                  <div className="form-group">
                    <label>Platform Name</label>
                    <input
                      type="text"
                      value={link.name || ''}
                      onChange={(e) => handleSocialLinkChange(index, 'name', e.target.value)}
                      placeholder="Facebook"
                    />
                  </div>

                  <div className="form-group">
                    <label>Icon</label>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input
                        type="text"
                        value={link.icon || ''}
                        onChange={(e) => handleSocialLinkChange(index, 'icon', e.target.value)}
                        placeholder="📘"
                        style={{ flex: 1 }}
                      />
                      <div style={{ display: 'flex', gap: '5px' }}>
                        {socialIcons.map(icon => (
                          <button
                            key={icon}
                            type="button"
                            onClick={() => handleSocialLinkChange(index, 'icon', icon)}
                            style={{
                              background: 'none',
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              padding: '5px',
                              cursor: 'pointer',
                              fontSize: '16px'
                            }}
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>URL</label>
                  <input
                    type="url"
                    value={link.url || ''}
                    onChange={(e) => handleSocialLinkChange(index, 'url', e.target.value)}
                    placeholder="https://facebook.com/yoursalon"
                  />
                </div>
              </div>
            ))}
            <button className="add-item-btn" onClick={addSocialLink}>
              + Add Social Link
            </button>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>©️ Copyright</h3>
        
        <div className="form-group">
          <label>Copyright Text</label>
          <input
            type="text"
            value={data.copyright || ''}
            onChange={(e) => handleCopyrightChange(e.target.value)}
            placeholder="All rights reserved. | Designed with ❤️ for our valued customers"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterForm; 