import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=500&q=80',
      description: 'High-speed automatic agarbatti manufacturing with precision engineering.',
    },
    {
      id: 2,
      category: 'agarbatti',
      name: 'Semi-Automatic Agarbatti Machine',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
      description: 'Cost-effective solution for small to medium-scale businesses.',
    },
    {
      id: 3,
      category: 'paper-plate',
      name: 'Fully Automatic Paper Plate Machine',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80',
      description: 'High-volume eco-friendly paper plate production.',
    },
    {
      id: 4,
      category: 'paper-plate',
      name: 'Hydraulic Paper Plate Machine',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80',
      description: 'Heavy-duty machine for industrial-scale production.',
    },
    {
      id: 5,
      category: 'paper-cup',
      name: 'High-Speed Paper Cup Machine',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=500&q=80',
      description: 'Automatic paper cup manufacturing with multiple sizes.',
    },
    {
      id: 6,
      category: 'paper-cup',
      name: 'Paper Cup Forming Machine',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=500&q=80',
      description: 'Efficient cup forming with digital temperature control.',
    },
    {
      id: 7,
      category: 'dona',
      name: 'Automatic Dona Making Machine',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=500&q=80',
      description: 'Eco-friendly disposable bowl production machine.',
    },
    {
      id: 8,
      category: 'dona',
      name: 'Semi-Automatic Dona Machine',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80',
      description: 'Compact dona making for small businesses.',
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
    <>
      <Helmet>
        <title>Our Machinery - Agarbatti, Paper Plate & Cup Making Machines | Bharat Group</title>
        <meta name="description" content="Explore our range of eco-friendly machinery including Agarbatti Making Machines, Paper Plate Machines, Paper Cup Machines, and Dona Making Machines. Quality machines with easy payment options and timely delivery." />
        <link rel="canonical" href="https://bharat-group.vercel.app/machines" />
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMachines.map((machine, index) => (
              <AnimatedSection key={machine.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2">
                      {machine.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{machine.description}</p>

                    <Link
                      to="/contact#send-message"
                      className="block w-full py-2.5 bg-green-600 text-white text-center rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300"
                    >
                      Order Now
                    </Link>
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
    </>
  );
};

export default Machines;
