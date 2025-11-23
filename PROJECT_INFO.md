# Bharat Group Website

A modern, responsive website for Bharat Group - a leading manufacturer of eco-friendly machinery since 2005.

## Features

- Modern and responsive design with Tailwind CSS
- Smooth scroll animations using Framer Motion
- Multiple pages: Home, About, Our Machines, Contact
- Interactive navigation with mobile menu
- Product showcase with filtering
- Contact form with validation
- Animated hero sections
- Custom scroll animations

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation component
│   └── Footer.jsx       # Footer component
├── pages/
│   ├── Home.jsx         # Home page with product showcase
│   ├── About.jsx        # About page with vision & mission
│   ├── Machines.jsx     # Our machines page with filtering
│   └── Contact.jsx      # Contact page with form
├── App.jsx              # Main app component with routing
├── index.css            # Global styles and Tailwind
└── main.jsx             # Entry point

## Pages Overview

### Home Page
- Hero section with animated background
- Company statistics
- Product showcase with 4 featured machines
- Features section
- Call-to-action section

### About Page
- Company overview
- Vision and Mission statements
- Core values
- Company timeline

### Our Machines Page
- Product filtering by category
- Detailed machine specifications
- Features list for each machine
- Request quote functionality

### Contact Page
- Contact information cards
- Contact form
- Google Maps integration
- FAQ section
- Social media links

## Customization

### Colors
The primary color scheme uses blue tones. To change:
- Update `tailwind.config.js` for theme colors
- Modify gradient classes in components

### Content
- Update machine data in `src/pages/Machines.jsx`
- Modify company info in `src/pages/About.jsx`
- Change contact details in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Images
Replace placeholder images with actual product images by updating the `image` properties in the respective page data.

## Animation Features

- Scroll-triggered animations using Framer Motion
- Hover effects on cards and buttons
- Smooth page transitions
- Animated hero backgrounds
- Interactive navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Bharat Group. All rights reserved.
