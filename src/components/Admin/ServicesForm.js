import React, { useState } from 'react';
import dataService from '../../services/dataService';

const ServicesForm = ({ data, onChange }) => {
  const [activeServiceCategory, setActiveServiceCategory] = useState('men');
  const categories = dataService.getCategories();

  const handleServiceChange = (category, serviceIndex, field, value) => {
    const updatedData = { ...data };
    updatedData[category][serviceIndex] = {
      ...updatedData[category][serviceIndex],
      [field]: value
    };
    onChange(updatedData);
  };

  const addService = (category) => {
    const newService = {
      id: `${category[0]}${Date.now()}`,
      name: 'New Service',
      description: 'Service description',
      price: 500,
      duration: '30 min',
      category: 'Hair'
    };
    
    const updatedData = { ...data };
    updatedData[category] = [...(updatedData[category] || []), newService];
    onChange(updatedData);
  };

  const removeService = (category, serviceIndex) => {
    const updatedData = { ...data };
    updatedData[category] = updatedData[category].filter((_, index) => index !== serviceIndex);
    onChange(updatedData);
  };

  const duplicateService = (category, serviceIndex) => {
    const originalService = data[category][serviceIndex];
    const duplicatedService = {
      ...originalService,
      id: `${category[0]}${Date.now()}`,
      name: `${originalService.name} (Copy)`
    };
    
    const updatedData = { ...data };
    updatedData[category] = [
      ...updatedData[category].slice(0, serviceIndex + 1),
      duplicatedService,
      ...updatedData[category].slice(serviceIndex + 1)
    ];
    onChange(updatedData);
  };

  const serviceCategories = [
    'Hair', 'Skin', 'Nails', 'Beauty', 'Wellness', 'Beard', 'Special'
  ];

  const currentServices = data[activeServiceCategory] || [];

  return (
    <div className="admin-form">
      <div className="form-section">
        <h3>💼 Services Management</h3>
        
        {/* Service Category Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setActiveServiceCategory(category.key)}
              style={{
                background: activeServiceCategory === category.key ? 'var(--primary-color)' : 'white',
                color: activeServiceCategory === category.key ? 'white' : 'var(--primary-color)',
                border: '2px solid var(--primary-color)',
                padding: '8px 15px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span style={{
                background: activeServiceCategory === category.key ? 'rgba(255,255,255,0.3)' : 'var(--primary-color)',
                color: activeServiceCategory === category.key ? 'white' : 'white',
                borderRadius: '10px',
                padding: '2px 6px',
                fontSize: '11px',
                minWidth: '16px',
                textAlign: 'center'
              }}>
                {(data[category.key] || []).length}
              </span>
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="dynamic-list">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <h4 style={{ margin: 0 }}>
              {categories.find(c => c.key === activeServiceCategory)?.label} Services
            </h4>
            <button 
              className="add-item-btn"
              onClick={() => addService(activeServiceCategory)}
              style={{ margin: 0 }}
            >
              + Add Service
            </button>
          </div>

          {currentServices.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              color: '#6c757d'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>📋</div>
              <p>No services in this category yet.</p>
              <button 
                className="add-item-btn"
                onClick={() => addService(activeServiceCategory)}
              >
                Add First Service
              </button>
            </div>
          ) : (
            currentServices.map((service, index) => (
              <div key={service.id || index} className="list-item" style={{ position: 'relative' }}>
                {/* Action Buttons */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  display: 'flex',
                  gap: '5px'
                }}>
                  <button
                    onClick={() => duplicateService(activeServiceCategory, index)}
                    style={{
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Duplicate service"
                  >
                    📋
                  </button>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeService(activeServiceCategory, index)}
                    title="Remove service"
                  >
                    ×
                  </button>
                </div>

                {/* Service Form */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Service ID</label>
                    <input
                      type="text"
                      value={service.id || ''}
                      onChange={(e) => handleServiceChange(activeServiceCategory, index, 'id', e.target.value)}
                      placeholder="service_id"
                    />
                  </div>

                  <div className="form-group">
                    <label>Service Name *</label>
                    <input
                      type="text"
                      value={service.name || ''}
                      onChange={(e) => handleServiceChange(activeServiceCategory, index, 'name', e.target.value)}
                      placeholder="Service Name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={service.description || ''}
                    onChange={(e) => handleServiceChange(activeServiceCategory, index, 'description', e.target.value)}
                    placeholder="Service description"
                    rows="2"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Price (₹) *</label>
                    <input
                      type="number"
                      value={service.price || ''}
                      onChange={(e) => handleServiceChange(activeServiceCategory, index, 'price', parseInt(e.target.value) || 0)}
                      placeholder="500"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label>Duration *</label>
                    <input
                      type="text"
                      value={service.duration || ''}
                      onChange={(e) => handleServiceChange(activeServiceCategory, index, 'duration', e.target.value)}
                      placeholder="30 min"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={service.category || 'Hair'}
                    onChange={(e) => handleServiceChange(activeServiceCategory, index, 'category', e.target.value)}
                  >
                    {serviceCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Service Preview */}
                <div style={{
                  marginTop: '15px',
                  padding: '15px',
                  background: '#f8f9fa',
                  borderRadius: '6px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '10px'
                  }}>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>
                        {service.name || 'Service Name'}
                      </h4>
                      <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>
                        {service.description || 'Service description'}
                      </p>
                    </div>
                    <div style={{
                      background: 'var(--primary-color)',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      {dataService.formatPrice(service.price || 0)}
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    color: '#6c757d'
                  }}>
                    <span>⏱️ {service.duration || 'Duration'}</span>
                    <span style={{
                      background: 'var(--secondary-color)',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '10px'
                    }}>
                      {service.category || 'Category'}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Services Summary */}
      <div className="form-section">
        <h3>📊 Services Summary</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          {categories.map(category => {
            const services = data[category.key] || [];
            const totalServices = services.length;
            const avgPrice = totalServices > 0 
              ? Math.round(services.reduce((sum, s) => sum + (s.price || 0), 0) / totalServices)
              : 0;

            return (
              <div
                key={category.key}
                style={{
                  background: 'white',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  padding: '15px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '5px' }}>
                  {category.icon}
                </div>
                <div style={{ fontWeight: '600', marginBottom: '5px' }}>
                  {category.label}
                </div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {totalServices}
                </div>
                <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '5px' }}>
                  Services
                </div>
                {totalServices > 0 && (
                  <div style={{ fontSize: '14px', color: '#28a745' }}>
                    Avg: {dataService.formatPrice(avgPrice)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bulk Actions */}
      <div className="form-section">
        <h3>⚡ Bulk Actions</h3>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => {
              const confirmed = window.confirm('Are you sure you want to clear all services in this category?');
              if (confirmed) {
                const updatedData = { ...data };
                updatedData[activeServiceCategory] = [];
                onChange(updatedData);
              }
            }}
            style={{
              background: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Clear Category
          </button>
          
          <button
            onClick={() => {
              const categoryData = categories.find(c => c.key === activeServiceCategory);
              const sampleService = {
                id: `${activeServiceCategory[0]}${Date.now()}`,
                name: `Sample ${categoryData.label} Service`,
                description: `Professional ${categoryData.label.toLowerCase()} service`,
                price: 1000,
                duration: '60 min',
                category: 'Hair'
              };
              
              const updatedData = { ...data };
              updatedData[activeServiceCategory] = [...(updatedData[activeServiceCategory] || []), sampleService];
              onChange(updatedData);
            }}
            style={{
              background: '#28a745',
              color: 'white',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Add Sample Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesForm; 