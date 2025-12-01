import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, DollarSign, ShoppingCart, CreditCard, Truck, Wrench, Shield, Package, AlertTriangle, Scale, Gavel, RefreshCw, CheckCircle } from 'lucide-react';
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

const TermsSection = ({ icon: IconComponent, number, title, children, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mr-4">
            <IconComponent className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{number}. {title}</h2>
        </div>
        <div className="text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
};

const BulletList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Bharat Group | Purchase Terms</title>
        <meta name="description" content="Bharat Group Terms and Conditions - Read our terms for purchasing machinery, warranty, delivery, payments, and after-sales service." />
        <meta name="keywords" content="Bharat Group terms, purchase terms, machinery warranty, delivery terms, payment terms" />
        <link rel="canonical" href="https://bharatgroup.org/terms-conditions" />

        {/* Open Graph */}
        <meta property="og:title" content="Terms & Conditions - Bharat Group" />
        <meta property="og:description" content="Read our terms for purchasing machinery, warranty, delivery and payments." />
        <meta property="og:url" content="https://bharatgroup.org/terms-conditions" />
        <meta property="og:type" content="website" />

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
                "name": "Terms & Conditions",
                "item": "https://bharatgroup.org/terms-conditions"
              }
            ]
          }
        `}</script>
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
            className="absolute top-20 left-20 hidden lg:block"
          >
            <img src={logoSign} alt="Bharat Group" className="w-14 h-14 opacity-20" />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10], rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-16 right-20 hidden lg:block"
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
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
              <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
                Please read these terms carefully before making a purchase.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">

              {/* Definitions */}
              <TermsSection icon={FileText} number="1" title="Definitions" delay={0.05}>
                <BulletList items={[
                  '"Company" refers to Bharat Group, Bhubaneswar.',
                  '"Customer" refers to the buyer purchasing machines or equipment.',
                  '"Product(s)" refers to paper plate machines, agarbatti machines, and any accessories or materials supplied by the Company.'
                ]} />
              </TermsSection>

              {/* Quotations & Pricing */}
              <TermsSection icon={DollarSign} number="2" title="Quotations & Pricing" delay={0.1}>
                <BulletList items={[
                  'All quotations issued by the Company are valid for 7 days unless stated otherwise.',
                  'Prices are exclusive of GST, transportation, installation, and additional services unless clearly mentioned.',
                  'The Company reserves the right to revise prices due to market fluctuations or changes in raw material costs.'
                ]} />
              </TermsSection>

              {/* Orders & Confirmation */}
              <TermsSection icon={ShoppingCart} number="3" title="Orders & Confirmation" delay={0.15}>
                <BulletList items={[
                  'Orders are confirmed only after receiving the specified advance payment.',
                  'The Company may refuse or cancel orders due to incorrect information, unavailable stock, or other business reasons.',
                  'Once confirmed, orders cannot be cancelled by the Customer without written approval.'
                ]} />
              </TermsSection>

              {/* Payments */}
              <TermsSection icon={CreditCard} number="4" title="Payments" delay={0.2}>
                <BulletList items={[
                  'Payments must be made through approved modes: Cash, UPI, Bank Transfer, Debit/Credit Card.',
                  'Full payment is required before dispatch unless credit terms are agreed in writing.',
                  'In case of delayed payment, the Company may charge a late fee or hold delivery.'
                ]} />
              </TermsSection>

              {/* Delivery & Transportation */}
              <TermsSection icon={Truck} number="5" title="Delivery & Transportation" delay={0.25}>
                <BulletList items={[
                  'Delivery is typically done through road transport.',
                  'All delivery dates are estimates and may vary due to logistics or unforeseen delays.',
                  'Risk transfers to the Customer once the Product is handed over to the transporter.',
                  'Any transport damage must be reported immediately to the transporter and Company.'
                ]} />
              </TermsSection>

              {/* Installation & Training */}
              <TermsSection icon={Wrench} number="6" title="Installation & Training" delay={0.3}>
                <BulletList items={[
                  'Basic installation guidance (video or call support) is provided at no cost.',
                  'On-site installation, if required, may carry additional charges.',
                  'Training on machine operation may be provided digitally or in person as per availability.'
                ]} />
              </TermsSection>

              {/* Warranty Terms */}
              <TermsSection icon={Shield} number="7" title="Warranty Terms" delay={0.35}>
                <div className="space-y-4">
                  <BulletList items={[
                    'Machines may include a limited mechanical warranty (duration varies by model).',
                    'Warranty covers manufacturing defects only.'
                  ]} />

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="font-semibold text-gray-800 mb-2">Warranty does not cover:</p>
                    <ul className="space-y-1 text-sm">
                      {[
                        'Electrical failures',
                        'Damage due to mishandling or improper installation',
                        'Wear-and-tear parts (dies, belts, heaters, bearings, etc.)',
                        'Damage caused during transport',
                        'Unauthorized repairs or modifications'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-gray-800 mb-2">Warranty claims must be supported by:</p>
                    <ul className="space-y-1 text-sm">
                      {[
                        'Purchase invoice',
                        'Machine serial number',
                        'Photos/videos of the issue'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TermsSection>

              {/* After-Sales Service */}
              <TermsSection icon={Wrench} number="8" title="After-Sales Service" delay={0.4}>
                <BulletList items={[
                  'The Company may offer service support through call, video assistance, or technician visit.',
                  'Technician visits (if needed) are chargeable based on distance and nature of service.',
                  'Spare parts are available but may be chargeable depending on warranty status.'
                ]} />
              </TermsSection>

              {/* Return, Replacement & Refund */}
              <TermsSection icon={Package} number="9" title="Return, Replacement & Refund" delay={0.45}>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="font-semibold text-gray-800">Products once sold cannot be returned.</p>
                    <p className="text-sm mt-1">Refunds are not provided except in rare cases of verified manufacturing defects.</p>
                  </div>

                  <p className="font-semibold text-gray-800">Replacement is provided only if:</p>
                  <BulletList items={[
                    'The defect is confirmed by the Company',
                    'The Customer reports it within 48 hours of delivery',
                    'The machine is unused and in original condition'
                  ]} />

                  <p className="text-sm bg-gray-100 p-3 rounded-lg">
                    <strong>Note:</strong> In case of dispute, the Company's decision is final.
                  </p>
                </div>
              </TermsSection>

              {/* Product Usage */}
              <TermsSection icon={AlertTriangle} number="10" title="Product Usage" delay={0.5}>
                <BulletList items={[
                  'Products are intended for commercial use only.',
                  'Customers must follow operational, safety, and maintenance instructions.',
                  'The Company is not liable for damage caused by misuse or improper operation.'
                ]} />
              </TermsSection>

              {/* Limitation of Liability */}
              <TermsSection icon={Scale} number="11" title="Limitation of Liability" delay={0.55}>
                <div className="space-y-4">
                  <p className="font-semibold text-gray-800">The Company shall not be held responsible for:</p>
                  <BulletList items={[
                    'Loss of profits or business interruptions',
                    'Damage due to incorrect wiring or electrical issues',
                    'Damage due to external service providers',
                    'Delays caused by transport agencies',
                    'Accidents or injuries caused by improper handling',
                    'Claims exceeding the invoice value of the Product'
                  ]} />
                  <p className="text-sm bg-gray-100 p-3 rounded-lg">
                    <strong>Note:</strong> Liability is strictly limited to repair or replacement of defective parts under warranty.
                  </p>
                </div>
              </TermsSection>

              {/* Governing Law & Dispute Resolution */}
              <TermsSection icon={Gavel} number="12" title="Governing Law & Dispute Resolution" delay={0.6}>
                <BulletList items={[
                  'All disputes are subject to the jurisdiction of Bhubaneswar, Odisha (India) only.',
                  'Disputes must first be attempted to be resolved through communication and negotiation.'
                ]} />
              </TermsSection>

              {/* Modification of Terms */}
              <TermsSection icon={RefreshCw} number="13" title="Modification of Terms" delay={0.65}>
                <p>
                  The Company may update or modify these Terms at any time without prior notice. Updated Terms will take effect immediately.
                </p>
              </TermsSection>

              {/* Acceptance */}
              <TermsSection icon={CheckCircle} number="14" title="Acceptance" delay={0.7}>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-gray-800">
                    By purchasing the Product, the Customer acknowledges and agrees to all the above Terms and Conditions.
                  </p>
                </div>
              </TermsSection>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
