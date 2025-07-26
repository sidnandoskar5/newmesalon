import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import SalonInfoForm from './SalonInfoForm';
import HeroForm from './HeroForm';
import CategoriesForm from './CategoriesForm';
import ServicesForm from './ServicesForm';
import FooterForm from './FooterForm';
import ThemeForm from './ThemeForm';
import MetaForm from './MetaForm';
import UIForm from './UIForm';
import './AdminPanel.css';

const AdminPanel = ({ onClose, onSave }) => {
  const [config, setConfig] = useState(dataService.getConfig());
  const [services, setServices] = useState(dataService.getAllServices());
  const [activeTab, setActiveTab] = useState('salon');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const tabs = [
    { id: 'salon', label: 'Salon Info', icon: '🏪' },
    { id: 'hero', label: 'Hero Section', icon: '🎯' },
    { id: 'categories', label: 'Categories', icon: '📋' },
    { id: 'services', label: 'Services', icon: '💼' },
    { id: 'footer', label: 'Footer', icon: '📄' },
    { id: 'theme', label: 'Theme', icon: '🎨' },
    { id: 'ui', label: 'UI Settings', icon: '⚙️' },
    { id: 'meta', label: 'SEO Meta', icon: '🔍' }
  ];

  const updateConfig = (section, data) => {
    setConfig(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const updateServices = (servicesData) => {
    setServices(servicesData);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');

    try {
      // Validate configuration
      const validation = validateConfig(config);
      if (!validation.isValid) {
        setSaveMessage(`Validation Error: ${validation.errors.join(', ')}`);
        setIsSaving(false);
        return;
      }

      // In a real application, this would make an API call to save the config and services
      // For now, we'll simulate the save and update the data service
      await simulateSave({ config, services });
      
      // Update the data service with new config and services
      dataService.updateConfig(config);
      dataService.updateServices(services);
      
      setSaveMessage('Configuration saved successfully!');
      
      // Call the onSave callback to refresh the main app
      if (onSave) {
        onSave(config);
      }
      
      setTimeout(() => {
        setSaveMessage('');
      }, 3000);

    } catch (error) {
      setSaveMessage(`Error saving configuration: ${error.message}`);
    }

    setIsSaving(false);
  };

  const validateConfig = (config) => {
    const errors = [];
    
    if (!config.salonInfo?.name) errors.push('Salon name is required');
    if (!config.salonInfo?.contact) errors.push('Contact number is required');
    if (!config.salonInfo?.email) errors.push('Email is required');
    if (!config.hero?.title) errors.push('Hero title is required');
    if (!config.categories || config.categories.length === 0) errors.push('At least one category is required');
    if (!config.theme?.primaryColor) errors.push('Primary color is required');
    
    // Validate services
    const totalServices = Object.values(services).reduce((sum, categoryServices) => sum + categoryServices.length, 0);
    if (totalServices === 0) errors.push('At least one service is required');
    
    // Validate individual services
    Object.entries(services).forEach(([category, categoryServices]) => {
      categoryServices.forEach((service, index) => {
        if (!service.name) errors.push(`Service name is required for ${category} service #${index + 1}`);
        if (!service.price || service.price <= 0) errors.push(`Valid price is required for ${category} service #${index + 1}`);
        if (!service.duration) errors.push(`Duration is required for ${category} service #${index + 1}`);
      });
    });
    
    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const simulateSave = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this would save to backend/file system
        console.log('Saving data:', data);
        resolve();
      }, 1000);
    });
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'salon':
        return (
          <SalonInfoForm 
            data={config.salonInfo} 
            businessHours={config.businessHours}
            onChange={(data) => updateConfig('salonInfo', data)}
            onBusinessHoursChange={(data) => updateConfig('businessHours', data)}
          />
        );
      case 'hero':
        return (
          <HeroForm 
            data={config.hero} 
            onChange={(data) => updateConfig('hero', data)}
          />
        );
      case 'categories':
        return (
          <CategoriesForm 
            data={config.categories} 
            onChange={(data) => updateConfig('categories', data)}
          />
        );
      case 'services':
        return (
          <ServicesForm 
            data={services} 
            onChange={updateServices}
          />
        );
      case 'footer':
        return (
          <FooterForm 
            data={config.footer} 
            onChange={(data) => updateConfig('footer', data)}
          />
        );
      case 'theme':
        return (
          <ThemeForm 
            data={config.theme} 
            onChange={(data) => updateConfig('theme', data)}
          />
        );
      case 'ui':
        return (
          <UIForm 
            data={config.ui} 
            onChange={(data) => updateConfig('ui', data)}
          />
        );
      case 'meta':
        return (
          <MetaForm 
            data={config.meta} 
            onChange={(data) => updateConfig('meta', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-overlay">
      <div className="admin-panel">
        <div className="admin-header">
          <h2>🔧 Admin Panel</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="admin-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="admin-content">
          {renderActiveTab()}
        </div>

        <div className="admin-footer">
          {saveMessage && (
            <div className={`save-message ${saveMessage.includes('Error') ? 'error' : 'success'}`}>
              {saveMessage}
            </div>
          )}
          
          <div className="admin-actions">
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button 
              className="save-btn" 
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 