import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CheckCircle, Zap, Shield, Clock, Award, DollarSign } from 'lucide-react';
import logoSign from '../assets/bharat-group/logo-sign.png';

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

const Machines = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const machines = [
    {
      id: 1,
      category: 'agarbatti',
      name: 'Automatic Agarbatti Making Machine',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
      description: 'High-speed automatic agarbatti manufacturing machine with precision engineering and consistent output quality.',
      features: [
        'Automatic operation with minimal manual intervention',
        'High production capacity: 100-150 kg/hour',
        'Energy-efficient motor system',
        'Low maintenance requirements',
        'Durable stainless steel construction',
        'Easy to operate with user-friendly controls',
      ],
      specifications: {
        'Production Capacity': '100-150 kg/hour',
        'Power Consumption': '2-3 HP',
        'Machine Weight': '350 kg',
        'Warranty': '1 Year',
      },
    },
    {
      id: 2,
      category: 'paper-plate',
      name: 'Fully Automatic Paper Plate Machine',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
      description: 'State-of-the-art paper plate making machine designed for high-volume eco-friendly disposable production.',
      features: [
        'Fully automatic operation',
        'Multiple plate size options (4" to 12")',
        'High-speed production',
        'Eco-friendly manufacturing process',
        'Low power consumption',
        'Minimal wastage of raw material',
      ],
      specifications: {
        'Production Speed': '50-60 plates/min',
        'Power Required': '3 HP',
        'Plate Sizes': '4" to 12"',
        'Warranty': '1 Year',
      },
    },
    {
      id: 3,
      category: 'paper-cup',
      name: 'High-Speed Paper Cup Machine',
      image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=800&q=80',
      description: 'Advanced paper cup manufacturing machine with automatic paper feeding, heating, and cup collection systems.',
      features: [
        'Fully automated cup forming process',
        'Multiple cup size compatibility',
        'Auto lubrication system',
        'Digital temperature control',
        'Safety protection features',
        'Low noise operation',
      ],
      specifications: {
        'Production Speed': '40-50 cups/min',
        'Cup Sizes': '65ml to 350ml',
        'Power': '3.5 HP',
        'Warranty': '1 Year',
      },
    },
    {
      id: 4,
      category: 'dona',
      name: 'Automatic Dona Making Machine',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      description: 'Premium quality dona making machine for eco-friendly disposable bowl production with excellent efficiency.',
      features: [
        'Automatic operation',
        'High production efficiency',
        'Multiple dona sizes',
        'Energy-saving design',
        'Robust construction',
        'Easy maintenance',
      ],
      specifications: {
        'Production Rate': '60-70 pcs/min',
        'Power': '2.5 HP',
        'Dona Sizes': '4" to 8"',
        'Warranty': '1 Year',
      },
    },
    {
      id: 5,
      category: 'agarbatti',
      name: 'Semi-Automatic Agarbatti Machine',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
      description: 'Cost-effective semi-automatic agarbatti making solution perfect for small to medium-scale businesses.',
      features: [
        'Semi-automatic operation',
        'Cost-effective solution',
        'Easy to learn and operate',
        'Consistent stick quality',
        'Low power consumption',
        'Portable design',
      ],
      specifications: {
        'Production Capacity': '50-70 kg/hour',
        'Power': '1.5 HP',
        'Machine Weight': '200 kg',
        'Warranty': '1 Year',
      },
    },
    {
      id: 6,
      category: 'paper-plate',
      name: 'Hydraulic Paper Plate Machine',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
      description: 'Heavy-duty hydraulic paper plate machine designed for maximum output and durability in industrial settings.',
      features: [
        'Hydraulic pressing system',
        'High-pressure molding',
        'Superior plate quality',
        'Heavy-duty construction',
        'Long operational life',
        'Minimal maintenance',
      ],
      specifications: {
        'Production Speed': '70-80 plates/min',
        'Power Required': '5 HP',
        'Plate Sizes': '6" to 14"',
        'Warranty': '1 Year',
      },
    },
  ];

  const categories = [
    { id: 'all', name: 'All Machines' },
    { id: 'agarbatti', name: 'Agarbatti Machines' },
    { id: 'paper-plate', name: 'Paper Plate Machines' },
    { id: 'paper-cup', name: 'Paper Cup Machines' },
    { id: 'dona', name: 'Dona Machines' },
  ];

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
              Premium Quality Machinery for Eco-Friendly Manufacturing
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
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredMachines.map((machine, index) => (
              <AnimatedSection key={machine.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white pr-4">
                      {machine.name}
                    </h3>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{machine.description}</p>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {machine.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(machine.specifications).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-sm text-gray-600 mb-1">{key}</p>
                            <p className="font-semibold text-gray-800">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <button className="flex-1 btn-primary">
                        Request Quote
                      </button>
                      <button className="flex-1 btn-secondary">
                        View Details
                      </button>
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
                <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl">
                  Contact Sales Team
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                  Download Catalog
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Machines;
