import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Users } from 'lucide-react';
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

  return (
    <>
      <Helmet>
        <title>About Bharat Group - Eco-Friendly Machinery Manufacturer Since 2005</title>
        <meta name="description" content="Learn about Bharat Group - Established in 2005, we are a leading manufacturer of eco-friendly machinery with 100+ employees. Manufacturing, wholesaling, and retailing agarbatti, paper plate, paper cup and dona making machines." />
        <link rel="canonical" href="https://bharat-group.vercel.app/about" />
      </Helmet>

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
              <h2 className="section-title">Welcome to Bharat Group</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Established in <strong>2005</strong>, Bharat Group has grown into a recognized name in machinery manufacturing,
                especially focusing on machines for disposable/eco-products. We manufacture a variety of
                <strong> Agarbatti Making Machines</strong>, <strong>Paper Plate Machines</strong>, and <strong>Paper Cup Machines</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have a manufacturing unit to produce these machines. Our business model includes
                <strong> manufacturing, wholesaling, and retail</strong>. With <strong>100+ employees</strong>, we maintain
                a reasonable scale that allows us to be responsive and flexible to our customers' needs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">100+</h3>
                <p className="text-gray-600">Employees</p>
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
                  Our aim is to be a <strong>leading player</strong> in the machine-manufacturing space for eco-disposable products
                  (agarbatti, paper plates, dona, etc.).
                </p>
                <p className="text-green-100 leading-relaxed mb-4">
                  We focus on customer satisfaction, backed by:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span><strong>Highly skilled professionals</strong> for consistent quality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span><strong>Efficient functionality</strong> — we want to run our operations effectively</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span>A <strong>huge distribution network</strong> for wide reach and good accessibility for customers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                    <span><strong>Easy payments and timely shipments</strong> — a customer-friendly and reliable business model</span>
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
                      To manufacture <strong>high-quality machines</strong> for disposable/eco products
                      (paper plates, agarbatti, dona, etc.) using skilled professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      To serve customers reliably, by providing:
                      <strong> easy payment options</strong> and <strong>timely shipment</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      A <strong>strong and wide distribution network</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      To operate efficiently, making our business processes smooth and functional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span>
                      To maintain <strong>high customer satisfaction</strong>, backed by industry-experienced staff
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
