import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Factory, Zap, Shield, Star, Quote } from 'lucide-react';
import Slider from 'react-slick';
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

// 3D Card Component with mouse tracking
const Card3D = ({ children, className }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]), {
    stiffness: 300,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]), {
    stiffness: 300,
    damping: 20
  });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000
      }}
      className={className}
    >
      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

const StackingSection = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });

  // More dramatic scale effect
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.7, 0.85, 0.95, 1]);

  // Smooth opacity transition
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [0, 0.3, 0.7, 1]);

  // Add vertical translation for sliding up effect
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150, 50, 0]);

  // Enhanced 3D rotation effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 5, 0]);

  // Add subtle Y-axis rotation for depth
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-2, -1, 0]);

  // Add Z-axis translation for depth
  const z = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale,
        opacity,
        y,
        rotateX,
        rotateY,
        z,
        transformStyle: 'preserve-3d',
        transformPerspective: 1500
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(() => {
    // Initialize with current window width
    return typeof window !== 'undefined' ? window.innerWidth : 0;
  });

  // Parallax scroll tracking
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const parallaxY3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const parallaxRotate = useTransform(scrollY, [0, 1000], [0, 180]);

  useEffect(() => {
    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate slides to show based on window width
  const getSlidesToShow = () => {
    if (windowWidth === 0) return 1; // Default before measurement
    if (windowWidth < 480) return 1;
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const products = [
    {
      title: 'Agarbatti Making Machine',
      description: 'High-speed automatic agarbatti manufacturing with precision engineering',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80',
      features: ['Automatic Operation', 'High Production Capacity', 'Energy Efficient'],
    },
    {
      title: 'Paper Plate Machine',
      description: 'Eco-friendly paper plate production with advanced technology',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
      features: ['Eco-Friendly', 'Low Maintenance', 'Quick Setup'],
    },
    {
      title: 'Paper Cup Machine',
      description: 'Fully automatic paper cup making with superior quality output',
      image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=600&q=80',
      features: ['Fully Automatic', 'Multiple Sizes', 'Durable Design'],
    },
    {
      title: 'Dona Making Machine',
      description: 'Premium quality dona making machine for eco-friendly disposables',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
      features: ['Cost Effective', 'Easy to Operate', 'Consistent Quality'],
    },
  ];

  const stats = [
    { icon: Users, value: '100+', label: 'Expert Team Members' },
    { icon: Factory, value: '2005', label: 'Established Year' },
    { icon: Award, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '99%', label: 'Customer Satisfaction' },
  ];

  const features = [
    'High-Quality Manufacturing',
    'Skilled Professional Team',
    'Wide Distribution Network',
    'Easy Payment Options',
    'Timely Delivery',
    'After-Sales Support',
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Disposables Pvt. Ltd.',
      location: 'Mumbai, Maharashtra',
      image: 'https://i.pravatar.cc/150?img=12',
      feedback: 'The paper plate machine from Bharat Group has transformed our business. The quality is exceptional and the ROI was achieved within 8 months. Highly recommend their products!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Agarbatti Industries',
      location: 'Delhi',
      image: 'https://i.pravatar.cc/150?img=47',
      feedback: 'We purchased an automatic agarbatti making machine 2 years ago. Still running smoothly with minimal maintenance. The after-sales support is outstanding!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      business: 'Patel Paper Products',
      location: 'Ahmedabad, Gujarat',
      image: 'https://i.pravatar.cc/150?img=33',
      feedback: 'Best investment for our business! The paper cup machine is highly efficient and produces consistent quality. The team at Bharat Group is very professional and helpful.',
      rating: 5,
    },
    {
      name: 'Sunita Reddy',
      business: 'Eco-Friendly Disposables',
      location: 'Hyderabad, Telangana',
      image: 'https://i.pravatar.cc/150?img=45',
      feedback: 'Excellent machinery with great build quality. The dona making machine has helped us scale our production significantly. Thank you Bharat Group!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      business: 'Singh Manufacturing Co.',
      location: 'Jaipur, Rajasthan',
      image: 'https://i.pravatar.cc/150?img=15',
      feedback: 'Outstanding service and product quality! The team provided complete training and installation support. Our production capacity has doubled since we got the machine.',
      rating: 5,
    },
    {
      name: 'Meera Iyer',
      business: 'Iyer Eco Solutions',
      location: 'Bangalore, Karnataka',
      image: 'https://i.pravatar.cc/150?img=48',
      feedback: 'Very satisfied with the purchase. The machine quality is top-notch and the pricing was very competitive. Bharat Group delivers what they promise!',
      rating: 5,
    },
  ];

  // Floating animation variants
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="scroll-section scroll-section-1 relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-600 py-20 md:py-0">
        {/* Animated Background with Parallax */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            style={{ y: parallaxY1 }}
            className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"
          ></motion.div>
          <motion.div
            style={{ y: parallaxY2 }}
            className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
          ></motion.div>
          <motion.div
            style={{ y: parallaxY3 }}
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
          ></motion.div>
        </div>

        {/* Animated Floating Icons with Parallax */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ y: parallaxY1, rotate: parallaxRotate }}
          className="absolute top-32 left-20 hidden lg:block"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img src={logoSign} alt="Bharat Group" className="w-16 h-16 opacity-30" style={{ transform: 'translateZ(30px)' }} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          style={{ y: parallaxY2 }}
          className="absolute top-64 right-32 hidden lg:block"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Zap className="w-12 h-12 text-yellow-300 opacity-40" style={{ transform: 'translateZ(40px)' }} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          style={{ y: parallaxY3 }}
          className="absolute bottom-32 right-20 hidden lg:block"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img src={logoSign} alt="Bharat Group" className="w-14 h-14 opacity-30" style={{ transform: 'translateZ(50px)' }} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          style={{ y: parallaxY2 }}
          className="absolute bottom-48 left-1/4 hidden lg:block"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img src={logoSign} alt="Bharat Group" className="w-12 h-12 opacity-20" style={{ transform: 'translateZ(35px)' }} />
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-white/30">
                  🏭 Since 2005
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6"
              >
                Welcome to{' '}
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-gradient-to-r from-green-200 via-white to-green-200 bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% auto' }}
                >
                  Bharat Group
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-green-100 leading-relaxed px-4 lg:px-0"
              >
                Leading Manufacturer of <span className="font-bold text-white">Eco-Friendly Machinery</span> Since 2005
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8"
              >
                {[
                  { icon: Star, text: '500+ Clients' },
                  { icon: Award, text: '100+ Team' },
                  { icon: TrendingUp, text: '99% Satisfaction' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-1.5 md:gap-2"
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
                    <span className="text-xs md:text-sm font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-4 lg:px-0"
              >
                <Link to="/machines" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-green-600 rounded-lg font-bold text-base md:text-lg shadow-xl"
                  >
                    Explore Our Machines
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </motion.div>
                  </motion.button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-base md:text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 lg:mt-0 px-4 lg:px-0"
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
                    alt="Industrial Machinery"
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-4 right-4 md:top-6 md:right-6 bg-white rounded-full p-2 md:p-4 shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-xl md:text-3xl font-bold text-green-600">20+</div>
                      <div className="text-[10px] md:text-xs font-semibold text-gray-600">Years</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-xl"
                ></motion.div>
              </motion.div>

              {/* Small Feature Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm md:text-base">Quality Assured</div>
                    <div className="text-xs md:text-sm text-gray-600">ISO Certified</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <StackingSection index={2} className="scroll-section scroll-section-2 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card3D className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(22, 163, 74, 0.4)",
                          "0 0 0 20px rgba(22, 163, 74, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                      style={{ transform: 'translateZ(75px)' }}
                    >
                      <stat.icon className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <motion.h3
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-gray-800 mb-2"
                      style={{ transform: 'translateZ(60px)' }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-gray-600" style={{ transform: 'translateZ(40px)' }}>{stat.label}</p>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </StackingSection>

      {/* Products Section */}
      <StackingSection index={3} className="scroll-section scroll-section-3 py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
              >
                Our Premium Machines
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="section-subtitle max-w-2xl mx-auto"
              >
                Discover our range of high-quality, eco-friendly manufacturing machines
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-12">
            {windowWidth > 0 && (
              <Slider
                key={windowWidth} // Force re-render on width change
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={getSlidesToShow()}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                pauseOnHover={true}
                arrows={true}
                swipeToSlide={true}
                touchThreshold={10}
                adaptiveHeight={false}
                variableWidth={false}
                initialSlide={0}
              >
                {products.map((product, index) => (
                <div key={index} className="px-2 sm:px-3 md:px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col product-carousel-card"
                  >
                    <div className="relative h-48 overflow-hidden group flex-shrink-0">
                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-4"
                      >
                        <motion.span
                          initial={{ y: 20 }}
                          whileHover={{ y: 0 }}
                          className="text-white font-semibold"
                        >
                          View Details
                        </motion.span>
                      </motion.div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col overflow-hidden">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/machines"
                        className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group mt-auto"
                      >
                        Learn More
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </StackingSection>

      {/* Features Section */}
      <StackingSection index={4} className="scroll-section scroll-section-4 py-20 bg-gradient-to-br from-green-600 to-green-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Why Choose Bharat Group?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-green-100"
              >
                Your trusted partner in eco-friendly machinery manufacturing
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card3D className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-3" style={{ transform: 'translateZ(60px)' }} />
                  <h3 className="text-xl font-semibold" style={{ transform: 'translateZ(40px)' }}>{feature}</h3>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </StackingSection>

      {/* Customer Testimonials Section */}
      <StackingSection index={5} className="scroll-section scroll-section-5 py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              >
                What Our Customers Say
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Trusted by 500+ businesses across India. Here's what they have to say about us.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-12">
            {windowWidth > 0 && (
              <Slider
                key={`testimonial-${windowWidth}`} // Force re-render on width change
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={getSlidesToShow()}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={4000}
                pauseOnHover={true}
                arrows={true}
                swipeToSlide={true}
                touchThreshold={10}
                adaptiveHeight={false}
                variableWidth={false}
                initialSlide={0}
              >
                {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 sm:px-3 md:px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 flex flex-col testimonial-carousel-card"
                  >
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <Quote className="w-12 h-12 text-green-500" />
                    </motion.div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow">
                      "{testimonial.feedback}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4 pt-4 border-t-2 border-green-100 mt-auto">
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-green-200 shadow-md"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                        <p className="text-green-600 font-semibold text-sm">{testimonial.business}</p>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Verified Customer
                    </motion.div>
                  </motion.div>
                </div>
                ))}
              </Slider>
            )}
          </div>

          {/* Trust Indicators */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Happy Customers', icon: Users },
                { value: '4.9/5', label: 'Average Rating', icon: Star },
                { value: '99%', label: 'Satisfaction Rate', icon: Award },
                { value: '24/7', label: 'Support Available', icon: CheckCircle },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                  className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center shadow-lg"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-green-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </StackingSection>



      {/* CTA Section */}
      <StackingSection index={6} className="scroll-section scroll-section-6 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              ></motion.div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Ready to Start Your Business?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl mb-8 text-green-100"
                >
                  Get in touch with us today and take the first step towards success
                </motion.p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-bold text-lg shadow-xl"
                  >
                    Contact Us Now
                    <ArrowRight className="ml-2" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </StackingSection>
    </div>
  );
};

export default Home;
