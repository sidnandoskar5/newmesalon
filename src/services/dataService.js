import config from '../data/config.json';
import servicesData from '../data/services.json';

class DataService {
  constructor() {
    this.config = config;
    this.servicesData = servicesData;
  }

  // Get full configuration
  getConfig() {
    return this.config;
  }

  // Get salon information
  getSalonInfo() {
    return this.config.salonInfo;
  }

  // Get hero content
  getHeroContent() {
    return this.config.hero;
  }

  // Get categories
  getCategories() {
    return this.config.categories;
  }

  // Get UI configuration
  getUIConfig() {
    return this.config.ui;
  }

  // Get footer configuration
  getFooterConfig() {
    return this.config.footer;
  }

  // Get business hours
  getBusinessHours() {
    return this.config.businessHours;
  }

  // Get theme configuration
  getTheme() {
    return this.config.theme;
  }

  // Get meta information
  getMeta() {
    return this.config.meta;
  }

  // Get all services
  getAllServices() {
    return this.servicesData.services;
  }

  // Get services by category
  getServicesByCategory(category) {
    return this.servicesData.services[category] || [];
  }

  // Get service by ID
  getServiceById(serviceId) {
    const allServices = this.getAllServices();
    for (const category in allServices) {
      const service = allServices[category].find(s => s.id === serviceId);
      if (service) return service;
    }
    return null;
  }

  // Format price according to configuration
  formatPrice(price) {
    const { currency } = this.config.ui;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  // Get category by key
  getCategoryByKey(key) {
    return this.config.categories.find(cat => cat.key === key);
  }

  // Update configuration (for admin panel)
  updateConfig(newConfig) {
    this.config = newConfig;
    // In a real application, this would make an API call to save the configuration
    console.log('Configuration updated:', newConfig);
  }

  // Update services data (for admin panel)
  updateServices(newServicesData) {
    this.servicesData.services = newServicesData;
    // In a real application, this would make an API call to save the services data
    console.log('Services updated:', newServicesData);
  }

  // Validate configuration
  validateConfig() {
    const requiredFields = [
      'salonInfo.name',
      'salonInfo.contact',
      'salonInfo.email',
      'hero.title',
      'categories',
      'ui.currency'
    ];

    const errors = [];
    
    requiredFields.forEach(field => {
      const keys = field.split('.');
      let value = this.config;
      
      for (const key of keys) {
        value = value?.[key];
      }
      
      if (!value) {
        errors.push(`Missing required field: ${field}`);
      }
    });

    if (errors.length > 0) {
      console.warn('Configuration validation errors:', errors);
      return false;
    }

    return true;
  }
}

// Create and export singleton instance
const dataService = new DataService();

// Validate configuration on initialization
dataService.validateConfig();

export default dataService; 