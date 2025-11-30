import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Shield, Clock, Award, DollarSign, X, ChevronRight } from 'lucide-react';
import logoSign from '../assets/bharat-group/logo-sign.png';

// Import machines data from separate file
import { machines, categories } from '../data/machinesData';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Product Detail Modal Component
const ProductModal = ({ machine, onClose }) => {
  if (!machine) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative">
            <div className="h-64 md:h-80 overflow-hidden bg-gray-100">
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{machine.name}</h2>
              <p className="text-white/90 text-sm md:text-base">{machine.description}</p>
            </div>
          </div>

          {/* Modal Body - Key Features */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)]">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Key Features
            </h3>
            <div className="grid gap-4">
              {machine.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link
                to="/contact#send-message"
                className="block w-full py-4 bg-green-600 text-white text-center rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Order This Machine
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Machines = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMachine, setSelectedMachine] = useState(null);

  const benefits = [
    { icon: Zap, title: 'High Efficiency', description: 'Maximum output with minimal input' },
    { icon: Shield, title: 'Durable Build', description: 'Long-lasting construction quality' },
    { icon: Clock, title: 'Fast Production', description: 'Quick turnaround times' },
    { icon: Award, title: 'Quality Assured', description: 'Consistent premium results' },
    { icon: DollarSign, title: 'Cost-Effective', description: 'Great return on investment' },
    { icon: CheckCircle, title: 'Easy Operation', description: 'User-friendly interface' },
  ];

  const filteredMachines = selectedCategory === 'all'
    ? machines
    : machines.filter(machine => machine.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Machinery - Agarbatti, Paper Plate, Paper Cup, Papad & More | Bharat Group</title>
        <meta name="description" content="Explore our range of industrial machinery including Agarbatti Making Machines, Paper Plate Machines, Paper Cup Machines, Papad Making Machines, Cattle Feed Machines, Pulverizer and more. Quality machines with easy payment options and timely delivery." />
        <meta name="keywords" content="buy agarbatti making machine, paper plate machine price, paper cup machine India, papad making machine, cattle feed machine, pulverizer machine, edge squaring machine, manual paper press, automatic machines" />
        <link rel="canonical" href="https://bharat-group.vercel.app/machines" />

        {/* Open Graph */}
        <meta property="og:title" content="Premium Industrial Machinery - Bharat Group" />
        <meta property="og:description" content="Agarbatti, Paper Plate, Paper Cup, Papad Making, Cattle Feed & Pulverizer Machines. High efficiency, durable build, fast production. Order now!" />
        <meta property="og:url" content="https://bharat-group.vercel.app/machines" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bharat-group.vercel.app/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Machinery - Bharat Group" />
        <meta name="twitter:description" content="Premium quality Agarbatti, Paper Plate, Paper Cup, Papad & more Making Machines." />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bharat-group.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Machines",
                "item": "https://bharat-group.vercel.app/machines"
              }
            ]
          }
        `}</script>

        {/* Product List Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Bharat Group Machinery",
            "description": "Premium industrial manufacturing machines",
            "itemListElement": [
              {
                "@type": "Product",
                "position": 1,
                "name": "Automatic Agarbatti Making Machine",
                "description": "High-speed automatic agarbatti manufacturing with precision engineering. Fully automatic operation, high production capacity, uniform quality control.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Agarbatti Making Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "Product",
                "position": 2,
                "name": "Automatic Papad Making Machine",
                "description": "Fully automatic papad production with uniform size and thickness. Hygienic food-grade construction, high throughput.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Food Processing Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "Product",
                "position": 3,
                "name": "Automatic Paper Cup Machine",
                "description": "High-speed automatic paper cup manufacturing. 60-120 cups per minute, precision sealing, PLC controlled.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Paper Cup Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "Product",
                "position": 4,
                "name": "Cattle Feed Machine",
                "description": "Pelletising & feed-making automation for livestock. Adjustable pellet size, raw material versatility, scalable capacity.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Cattle Feed Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "Product",
                "position": 5,
                "name": "Double Die Paper Plate Making Machine",
                "description": "High-output dual-die paper plate production. 3,000-6,000 plates per hour, multiple sizes supported.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Paper Plate Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "Product",
                "position": 6,
                "name": "Edge Squaring Machine",
                "description": "Hydraulic clamping & pressing for professional book binding. PLC controlled, adjustable pressure settings.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Printing & Binding Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "Product",
                "position": 7,
                "name": "Manual Paper Press Machine",
                "description": "Precision manual pressing for bookbinding. Rigid steel construction, no power consumption, versatile use.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Printing & Binding Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              },
              {
                "@type": "Product",
                "position": 8,
                "name": "Micro Pulverizer Machine",
                "description": "Fine grinding for spices, grains, chemicals. Adjustable fineness, high efficiency, durable build.",
                "brand": { "@type": "Brand", "name": "Bharat Group" },
                "category": "Pulverizer Machines",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                }
              }
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          </div>

          {/* Floating Logo Icons */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 360] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute top-16 left-24 hidden lg:block"
          >
            <img src={logoSign} alt="Bharat Group" className="w-14 h-14 opacity-25" />
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15], rotate: [360, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-16 right-24 hidden lg:block"
          >
            <img src={logoSign} alt="Bharat Group" className="w-16 h-16 opacity-20" />
          </motion.div>

          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Machines</h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Premium Quality Machinery for Your Manufacturing Needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
                      <benefit.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white sticky top-0 z-40 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Machines Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMachines.map((machine, index) => (
                <AnimatedSection key={machine.id} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                    onClick={() => setSelectedMachine(machine)}
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white font-semibold text-sm bg-green-600 px-4 py-2 rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2">
                        {machine.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{machine.description}</p>

                      <div className="flex items-center text-green-600 text-sm font-medium mb-3">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {machine.keyFeatures.length} Key Features
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMachine(machine);
                          }}
                          className="flex-1 py-2.5 border-2 border-green-600 text-green-600 text-center rounded-lg font-semibold text-sm hover:bg-green-50 transition-all duration-300"
                        >
                          View Details
                        </button>
                        <Link
                          to="/contact#send-message"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-2.5 bg-green-600 text-white text-center rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center text-white max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Get in touch with our experts to find the perfect machine for your needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#send-message" className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl text-center">
                    Order Now
                  </Link>
                  <Link to="/contact#send-message" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 text-center">
                    Contact Sales Team
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* Product Detail Modal */}
      {selectedMachine && (
        <ProductModal
          machine={selectedMachine}
          onClose={() => setSelectedMachine(null)}
        />
      )}
    </>
  );
};

export default Machines;
