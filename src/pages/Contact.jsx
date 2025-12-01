import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin, FileText } from 'lucide-react';
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

const Contact = () => {
  const location = useLocation();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (location.hash === '#send-message' && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://bharatgroup.org';
      const response = await fetch(`${API_URL}/api/contact.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Office No.: 207, 2nd Floor', 'Wallfort Zone, Fafadih', 'RAIPUR - 492001 (C.G.)'],
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['0771-3169531'],
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@bharatgroup.org', 'sales@bharatgroup.org'],
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: FileText,
      title: 'GSTIN',
      details: ['22CYHPP7549G1Z4'],
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '9:00 AM - 6:00 PM'],
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Bharat Group | Get in Touch for Eco-Friendly Machinery</title>
        <meta name="description" content="Contact Bharat Group for quality eco-friendly machinery. Located in Raipur, Chhattisgarh. Phone: 0771-3169531. Office: Wallfort Zone, Fafadih. GSTIN: 22CYHPP7549G1Z4" />
        <meta name="keywords" content="contact Bharat Group, machinery dealer Raipur, agarbatti machine dealer, paper plate machine contact, Chhattisgarh machinery supplier" />
        <link rel="canonical" href="https://bharatgroup.org/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Bharat Group - Eco-Friendly Machinery" />
        <meta property="og:description" content="Get in touch for Agarbatti, Paper Plate, Paper Cup & Dona Making Machines. Phone: 0771-3169531, Raipur, Chhattisgarh." />
        <meta property="og:url" content="https://bharatgroup.org/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bharatgroup.org/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Bharat Group" />
        <meta name="twitter:description" content="Get in touch for eco-friendly machinery. Phone: 0771-3169531" />

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
                "item": "https://bharatgroup.org/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://bharatgroup.org/contact"
              }
            ]
          }
        `}</script>

        {/* Local Business Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bharat Group",
            "image": "https://bharatgroup.org/og-image.png",
            "url": "https://bharatgroup.org",
            "telephone": "+91-771-3169531",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No. 207, 2nd Floor, Wallfort Zone, Fafadih",
              "addressLocality": "Raipur",
              "addressRegion": "Chhattisgarh",
              "postalCode": "492001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.258007,
              "longitude": 81.636703
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "$$"
          }
        `}</script>

        {/* FAQ Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the warranty period for your machines?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All our machines come with a 2-year warranty covering manufacturing defects and parts replacement."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide installation and training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide free installation and comprehensive training to ensure smooth operation of the machinery."
                }
              },
              {
                "@type": "Question",
                "name": "What are the payment options available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer flexible payment options including bank transfers and various digital payment methods."
                }
              },
              {
                "@type": "Question",
                "name": "How long does delivery take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically same day or maximum one day depending on your location and machine availability."
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
          animate={{ y: [-12, 12, -12], rotate: [0, 360] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 hidden lg:block"
        >
          <img src={logoSign} alt="Bharat Group" className="w-14 h-14 opacity-25" />
        </motion.div>

        <motion.div
          animate={{ y: [12, -12, 12], rotate: [360, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-16 right-20 hidden lg:block"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              We're here to help you find the perfect machinery solution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${info.bg} rounded-lg mb-4`}>
                    <info.icon className={`w-7 h-7 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection>
              <div ref={formRef} id="send-message" className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 outline-none"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  {/* Status Message */}
                  {submitStatus.message && (
                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Additional Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 overflow-hidden shadow-xl">
                  <iframe
                    title="Location Map"
                    src="https://maps.google.com/maps?q=21.258007,81.636703&hl=en&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Bharat Group?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                      <span>20+ years of industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                      <span>100+ skilled professionals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                      <span>Wide distribution network</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                      <span>Easy payment options</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                      <span>Timely delivery guaranteed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                      <span>Excellent after-sales support</span>
                    </li>
                  </ul>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h3>
                  <p className="text-gray-600 mb-6">Stay connected on social media for updates and news</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 text-green-600"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 text-green-400"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300 text-pink-600"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 text-green-700"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Quick answers to common questions</p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What is the warranty period for your machines?',
                a: 'All our machines come with a 2-year warranty covering manufacturing defects and parts replacement.',
              },
              {
                q: 'Do you provide installation and training?',
                a: 'Yes, we provide free installation and comprehensive training to ensure smooth operation of the machinery.',
              },
              {
                q: 'What are the payment options available?',
                a: 'We offer flexible payment options including bank transfers and various digital payment methods.',
              },
              {
                q: 'How long does delivery take?',
                a: 'Typically same day or maximum one day depending on your location and machine availability.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
