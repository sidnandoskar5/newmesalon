# Glow and Shine Beauty Salon - Professional Beauty Services Website

A modern, responsive React website for a unisex salon in India, showcasing professional beauty and grooming services for men, women, and kids.

## 🌟 Features

- **Professional Design**: Modern, attractive UI with elegant color scheme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Service Categories**: Separate sections for Men, Women, and Kids services
- **Dynamic Pricing**: All prices displayed in Indian Rupees (INR)
- **Interactive Tabs**: Easy navigation between service categories
- **Service Details**: Complete information including duration, category, and descriptions
- **Contact Information**: Prominent display of salon contact details
- **Config-Driven**: Completely configuration-driven architecture with centralized data management
- **Theme Customization**: Dynamic theme updates via configuration
- **Data Service**: Centralized data service with validation and utility methods

## 🎨 Design Highlights

- **Color Scheme**: Elegant gold (#d4af37) and dark blue (#2c3e50) theme
- **Typography**: Modern Poppins font family
- **Animations**: Smooth hover effects and transitions
- **Cards Layout**: Professional service cards with pricing badges
- **Gradient Backgrounds**: Beautiful visual elements
- **Icons**: Emoji icons for better visual appeal

## 📱 Responsive Features

- Mobile-first design approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interface
- Optimized for all screen sizes

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with CSS variables
- **JSON**: External data management
- **Responsive Design**: Mobile-first approach
- **Modern JavaScript**: ES6+ features

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saloon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
saloon/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── ServiceCard.js
│   │   ├── ServicesSection.js
│   │   └── Footer.js
│   ├── data/
│   │   ├── config.json          # Main configuration file
│   │   └── services.json        # Services and pricing data
│   ├── hooks/
│   │   └── useConfig.js         # Configuration management hook
│   ├── services/
│   │   └── dataService.js       # Centralized data service
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 📊 Services Included

### Men Services
- Haircut & Styling (₹800)
- Beard Trim & Shape (₹500)
- Hair Color (₹1,500)
- Facial (₹1,200)
- Head Massage (₹600)
- Hair Spa (₹1,000)

### Women Services
- Haircut & Styling (₹1,200)
- Hair Color (₹2,500)
- Hair Straightening (₹3,500)
- Facial (₹1,800)
- Threading (₹300)
- Waxing (₹800)
- Manicure (₹600)
- Pedicure (₹800)
- Hair Spa (₹1,500)
- Bridal Package (₹8,000)

### Kids Services
- Kids Haircut (₹400)
- Kids Hair Styling (₹300)
- Kids Facial (₹600)
- Kids Manicure (₹400)
- Kids Hair Wash (₹250)

## 🎯 Key Features

1. **Config-Driven Architecture**: All content, styling, and data driven by JSON configuration
2. **Centralized Data Management**: Single data service handles all data operations
3. **Dynamic Theme Updates**: Colors and fonts can be changed via configuration
4. **Category Filtering**: Easy switching between Men, Women, and Kids services
5. **Price Formatting**: Automatic currency formatting based on configuration
6. **Professional Layout**: Clean, modern design suitable for business
7. **Contact Integration**: Prominent display of salon contact information
8. **Mobile Responsive**: Optimized for all device sizes
9. **Configuration Validation**: Built-in validation for required configuration fields

## 🔧 Customization

### Complete Website Configuration
Edit `src/data/config.json` to customize all aspects of the website:

```json
{
  "salonInfo": {
    "name": "Your Salon Name",
    "tagline": "Your Tagline",
    "location": "Your City, Country",
    "contact": "+91 XXXXX XXXXX",
    "email": "your@email.com"
  },
  "hero": {
    "title": "Welcome to Your Salon",
    "subtitle": "Your custom subtitle",
    "description": "Your description"
  },
  "theme": {
    "primaryColor": "#your-primary-color",
    "secondaryColor": "#your-secondary-color",
    "accentColor": "#your-accent-color",
    "fontFamily": "Your-Font-Family"
  }
}
```

### Adding New Services
Edit `src/data/services.json` to add new services or modify existing ones:

```json
{
  "id": "new-service",
  "name": "Service Name",
  "description": "Service description",
  "price": 1000,
  "duration": "60 min",
  "category": "Hair"
}
```

### Using the Data Service
Access data programmatically using the centralized data service:

```javascript
import dataService from '../services/dataService';

// Get salon information
const salonInfo = dataService.getSalonInfo();

// Get services by category
const menServices = dataService.getServicesByCategory('men');

// Format price
const formattedPrice = dataService.formatPrice(1500);

// Get category information
const category = dataService.getCategoryByKey('women');
```

## 📞 Contact Information

- **Salon Name**: Glow and Shine Beauty Salon
- **Location**: Mumbai, India
- **Phone**: +91 98765 43210
- **Email**: info@glowandshinebeauty.com
- **Hours**: Mon-Sat: 9:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## 📄 License

This project is created for educational and business purposes. Feel free to customize and use for your salon business.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Glow and Shine Beauty Salon** - Where Beauty Meets Excellence ✨ 