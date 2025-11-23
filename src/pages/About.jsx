import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Users, Award, Briefcase, TrendingUp } from 'lucide-react';
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

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in manufacturing with skilled professionals ensuring consistent quality in every machine.',
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Our 100+ team members are dedicated to providing exceptional service and support to ensure your complete satisfaction.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We constantly evolve our technology and processes to deliver cutting-edge solutions for eco-friendly manufacturing.',
    },
    {
      icon: Briefcase,
      title: 'Reliable Partnership',
      description: 'With easy payment options, timely shipments, and a wide distribution network, we are your trusted business partner.',
    },
  ];

  const timeline = [
    { year: '2005', event: 'Bharat Group Established', description: 'Started our journey in machinery manufacturing' },
    { year: '2010', event: 'Expanded Product Line', description: 'Introduced paper plate and cup machines' },
    { year: '2015', event: 'Nationwide Distribution', description: 'Built a strong distribution network across India' },
    { year: '2020', event: '500+ Happy Clients', description: 'Achieved major milestone in customer satisfaction' },
    { year: '2025', event: 'Industry Leader', description: 'Recognized as a leading player in eco-friendly machinery' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Floating Logo Icons */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 hidden lg:block"
        >
          <img src={logoSign} alt="Bharat Group" className="w-16 h-16 opacity-20" />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10], rotate: [360, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 hidden lg:block"
        >
          <img src={logoSign} alt="Bharat Group" className="w-12 h-12 opacity-25" />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Bharat Group</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Your Trusted Partner in Eco-Friendly Machinery Manufacturing Since 2005
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="section-title">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established in <strong>2005</strong>, Bharat Group has grown into a recognized name in machinery manufacturing,
                specializing in machines for disposable and eco-friendly products. We manufacture a comprehensive variety of
                <strong> Agarbatti Making Machines</strong>, <strong>Paper Plate Machines</strong>, and <strong>Paper Cup Machines</strong>.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">100+</h3>
                <p className="text-gray-600">Skilled Professionals</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Award className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <TrendingUp className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">20+ Years</h3>
                <p className="text-gray-600">Industry Experience</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-10 text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 mr-4" />
                  <h2 className="text-4xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-green-100 leading-relaxed mb-6">
                  To be a <strong>leading player</strong> in the machine-manufacturing space for eco-disposable products
                  including agarbatti, paper plates, dona, and more.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span>Backed by highly skilled professionals for consistent quality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span>Efficient functionality in all our operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span>Huge distribution network for wide accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span>Easy payments and timely shipments for customer convenience</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-10 shadow-2xl border-2 border-green-100">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 mr-4 text-green-600" />
                  <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      Manufacture <strong>high-quality machines</strong> for disposable and eco products
                      (paper plates, agarbatti, dona, etc.) using skilled professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      Serve customers reliably with <strong>easy payment options</strong> and <strong>timely shipment</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      Build and maintain a <strong>strong and wide distribution network</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      Operate efficiently, making our business processes smooth and functional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      Maintain <strong>high customer satisfaction</strong>, backed by industry-experienced staff
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-green-100">Two decades of excellence and growth</p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-green-600 font-bold text-lg">{item.year}</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex-grow border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-green-100">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
