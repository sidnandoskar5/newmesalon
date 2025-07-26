import React from 'react';

const CategoriesForm = ({ data, onChange }) => {
  const handleCategoryChange = (index, field, value) => {
    const updatedCategories = [...data];
    updatedCategories[index] = {
      ...updatedCategories[index],
      [field]: value
    };
    onChange(updatedCategories);
  };

  const addCategory = () => {
    const newCategory = {
      key: `category_${Date.now()}`,
      label: 'New Category',
      icon: '📋',
      description: 'Category description'
    };
    onChange([...data, newCategory]);
  };

  const removeCategory = (index) => {
    const updatedCategories = data.filter((_, i) => i !== index);
    onChange(updatedCategories);
  };

  const emojiOptions = ['👨', '👩', '👶', '✂️', '💄', '💅', '🧴', '🎨', '💆', '💇'];

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>📋 Service Categories</h3>
        
        <div className="dynamic-list">
          {data.map((category, index) => (
            <div key={index} className="list-item">
              <button
                className="remove-item-btn"
                onClick={() => removeCategory(index)}
                title="Remove category"
              >
                ×
              </button>

              <div className="form-row">
                <div className="form-group">
                  <label>Category Key</label>
                  <input
                    type="text"
                    value={category.key || ''}
                    onChange={(e) => handleCategoryChange(index, 'key', e.target.value)}
                    placeholder="category_key"
                  />
                </div>

                <div className="form-group">
                  <label>Display Label</label>
                  <input
                    type="text"
                    value={category.label || ''}
                    onChange={(e) => handleCategoryChange(index, 'label', e.target.value)}
                    placeholder="Category Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Icon</label>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      type="text"
                      value={category.icon || ''}
                      onChange={(e) => handleCategoryChange(index, 'icon', e.target.value)}
                      placeholder="📋"
                      style={{ flex: 1 }}
                    />
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {emojiOptions.map(emoji => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() => handleCategoryChange(index, 'icon', emoji)}
                          style={{
                            background: 'none',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            padding: '5px',
                            cursor: 'pointer',
                            fontSize: '16px'
                          }}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={category.description || ''}
                  onChange={(e) => handleCategoryChange(index, 'description', e.target.value)}
                  placeholder="Category description for tooltip"
                  rows="2"
                />
              </div>
            </div>
          ))}

          <button className="add-item-btn" onClick={addCategory}>
            + Add Category
          </button>
        </div>
      </div>

      <div className="form-section">
        <h3>👁️ Categories Preview</h3>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '8px'
        }}>
          {data.map((category, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                border: '2px solid var(--primary-color)',
                color: 'var(--primary-color)',
                padding: '10px 15px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}
              title={category.description}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesForm; 