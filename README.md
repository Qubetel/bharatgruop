# Bharat Group Website

![CI](https://github.com/vikashmahato23/bharat_group/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/vikashmahato23/bharat_group/actions/workflows/deploy.yml/badge.svg)

A modern, responsive website for Bharat Group - Your trusted partner in eco-friendly machinery manufacturing since 2005.

## Live Demo

🌐 **Production Site**: [https://vikashmahato23.github.io/bharat_group/](https://vikashmahato23.github.io/bharat_group/)

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Modern UI/UX**: Smooth animations and transitions using Framer Motion
- **Interactive Components**:
  - Product carousels with touch support
  - Testimonial slider
  - Stacking scroll effects
  - Mobile bottom navigation
- **Four Main Pages**:
  - Home - Hero section with stacking scroll animations
  - About - Company vision, mission, and values
  - Machines - Product catalog with filtering
  - Contact - Contact form and company information
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Carousel**: React Slick
- **Icons**: Lucide React
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:vikashmahato23/bharat_group.git
cd bharat_group
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
bharat-group-website/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Machines.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── CI-CD-SETUP.md        # CI/CD documentation
├── PROJECT_INFO.md       # Project information
└── package.json
```

## CI/CD Pipeline

This project uses GitHub Actions for automated testing and deployment:

### Continuous Integration (CI)
- Runs on every push and pull request
- Tests on Node.js 18.x and 20.x
- Runs linter and builds project
- Uploads build artifacts

### Continuous Deployment (CD)
- Automatically deploys to GitHub Pages on push to main
- Available at: https://vikashmahato23.github.io/bharat_group/

For detailed CI/CD setup instructions, see [CI-CD-SETUP.md](./CI-CD-SETUP.md)

## Development

### Running Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages (Automatic)

Every push to the `main` branch automatically triggers deployment to GitHub Pages.

### Manual Deployment

1. Go to [Actions](https://github.com/vikashmahato23/bharat_group/actions)
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Other Platforms

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Build command: `npm run build`, Publish directory: `dist`
- **Custom Server**: Upload the `dist` folder after building

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Bharat Group.

## Contact

For questions or support, please contact:
- Email: vikashkm84@gmail.com
- GitHub: [@vikashmahato23](https://github.com/vikashmahato23)

---

Built with ❤️ using React + Vite
