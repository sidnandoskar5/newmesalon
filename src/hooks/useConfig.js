import { useEffect } from 'react';
import dataService from '../services/dataService';

export const useConfig = () => {
  useEffect(() => {
    const meta = dataService.getMeta();
    const theme = dataService.getTheme();
    
    // Update document title
    document.title = meta.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', meta.keywords);
    }
    
    // Update CSS custom properties for theme
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--accent-color', theme.accentColor);
    
    // Update font family
    document.body.style.fontFamily = `'${theme.fontFamily}', sans-serif`;
  }, []);

  return dataService.getConfig();
};

export default useConfig; 