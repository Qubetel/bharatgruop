import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Database, Share2, Lock, Cookie, UserCheck, Clock, ExternalLink, RefreshCw } from 'lucide-react';
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

const PolicySection = ({ icon: Icon, title, children, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mr-4">
            <Icon className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
};

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Bharat Group | Data Protection & Privacy</title>
        <meta name="description" content="Bharat Group Privacy Policy - Learn how we collect, use, store, and protect your personal information when you visit our website or purchase our products." />
        <link rel="canonical" href="https://bharat-group.vercel.app/privacy-policy" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-600">
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
            <img src={logoSign} alt="Bharat Group" className="w-14 h-14 opacity-20" />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10], rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-16 left-20 hidden lg:block"
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we protect your data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white shadow-xl mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-green-100 leading-relaxed">
                    Bharat Group ("Company", "we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website or purchase our products.
                  </p>
                  <p className="text-green-100 leading-relaxed mt-4 font-semibold">
                    By using our website or services, you agree to the terms of this Policy.
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                {/* Information We Collect */}
                <PolicySection icon={Database} title="2. Information We Collect" delay={0.1}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">A. Personal Information</h3>
                      <p className="mb-3">We may collect the following personal details:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Billing and shipping address</li>
                        <li>Business details</li>
                        <li>GST number (if applicable)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">B. Transaction Information</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Machine purchased</li>
                        <li>Payment details (mode, amount)</li>
                        <li>Order history</li>
                      </ul>
                      <p className="mt-3 text-sm bg-green-50 p-3 rounded-lg border border-green-200">
                        <strong>Note:</strong> We do not store your card or banking passwords.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">C. Website Usage Data</h3>
                      <p className="mb-3">We may collect:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Pages visited</li>
                        <li>Time spent on the website</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-500">This helps us improve our website performance.</p>
                    </div>
                  </div>
                </PolicySection>

                {/* How We Use Your Information */}
                <PolicySection icon={UserCheck} title="3. How We Use Your Information" delay={0.15}>
                  <p className="mb-4">We use your information for purposes such as:</p>
                  <ul className="space-y-2">
                    {[
                      'Processing orders and payments',
                      'Providing customer service and after-sales support',
                      'Sending order updates, invoices, and confirmations',
                      'Improving website content and user experience',
                      'Responding to inquiries or complaints',
                      'Ensuring warranty validation',
                      'Sending promotional messages (only with your consent)'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </PolicySection>

                {/* Sharing of Information */}
                <PolicySection icon={Share2} title="4. Sharing of Information" delay={0.2}>
                  <p className="font-semibold text-gray-800 mb-4">We do not sell or trade your personal information.</p>
                  <p className="mb-4">We may share information only with:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Logistics/transport providers (for product delivery)',
                      'Payment service providers',
                      'Service technicians (for warranty/repair service)',
                      'Government authorities (if required by law)'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm bg-gray-50 p-3 rounded-lg">
                    All partners are required to maintain confidentiality.
                  </p>
                </PolicySection>

                {/* Data Security */}
                <PolicySection icon={Lock} title="5. Data Security" delay={0.25}>
                  <p className="mb-4">We implement reasonable security measures to protect your information from:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Unauthorized access',
                      'Data loss',
                      'Misuse',
                      'Modification'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    However, no data transmission over the internet is 100% secure. Users share information at their own risk.
                  </p>
                </PolicySection>

                {/* Cookies & Tracking */}
                <PolicySection icon={Cookie} title="6. Cookies & Tracking" delay={0.3}>
                  <p className="mb-4">Our website may use cookies to:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Improve browsing experience',
                      'Store user preferences',
                      'Analyze website traffic'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500">
                    You can disable cookies through your browser settings, but some features may not function properly.
                  </p>
                </PolicySection>

                {/* Your Rights */}
                <PolicySection icon={UserCheck} title="7. Your Rights" delay={0.35}>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Request access to your personal data',
                      'Request correction of incorrect or outdated information',
                      'Request deletion of personal data (where legally allowed)',
                      'Opt out of promotional messages',
                      'Ask how your data is being used'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm bg-green-50 p-3 rounded-lg border border-green-200">
                    To exercise these rights, contact us using the details on our Contact page.
                  </p>
                </PolicySection>

                {/* Data Retention */}
                <PolicySection icon={Clock} title="8. Data Retention" delay={0.4}>
                  <p className="mb-4">We retain customer information as long as necessary for:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Completing transactions',
                      'Warranty support',
                      'Legal compliance',
                      'Business communication'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500">
                    Afterward, data may be securely deleted.
                  </p>
                </PolicySection>

                {/* Third-Party Links */}
                <PolicySection icon={ExternalLink} title="9. Third-Party Links" delay={0.45}>
                  <p>
                    Our website may contain links to third-party sites. We are not responsible for the privacy policies or practices of those websites.
                  </p>
                </PolicySection>

                {/* Policy Changes */}
                <PolicySection icon={RefreshCw} title="10. Policy Changes" delay={0.5}>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time. Changes will be posted on our website with an updated "Last Updated" date.
                  </p>
                  <p className="font-semibold text-gray-800">
                    Your continued use of our website means acceptance of the revised Policy.
                  </p>
                </PolicySection>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
