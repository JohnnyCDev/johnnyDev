'use client'

import React from 'react';

// --- Type Definitions for Icon Props ---
type IconProps = React.SVGProps<SVGSVGElement>;

/**
 * Utility function for handling smooth scroll on anchor clicks.
 * This function extracts the target ID from the link's href and scrolls to it smoothly.
 * @param {React.MouseEvent<HTMLAnchorElement>} e - The click event.
 * @param {() => void} [callback] - Optional callback to run after scroll (e.g., close menu).
 */
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, callback?: () => void) => {
  e.preventDefault();
  const targetId = e.currentTarget.href.split('#')[1];
  
  // Handle case where href might be just "#" or empty
  const elementId = targetId || 'hero';

  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    // Scroll smoothly to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  // Execute callback if provided (used to close the mobile menu)
  if (callback) {
    callback();
  }
};


// --- Icon Component Definitions (with Typescript Fix) ---

/**
 * Icon component for Code (Brackets)
 * @param {IconProps} props - Standard SVG properties
 */
const Code: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/></svg>
);

/**
 * Icon component for Zap (Lightning/Energy)
 * @param {IconProps} props - Standard SVG properties
 */
const Zap: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13l4-4 4 4"/><path d="M14 10l-4 4-4-4"/></svg>
);

/**
 * Icon component for Rocket
 * @param {IconProps} props - Standard SVG properties
 */
const Rocket: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 17.5a3 3 0 0 1 3-3"/><path d="M9 13 4 17h11l-5-4z"/><path d="m15 15 3-3 3 3z"/><path d="M12 21v-7"/><path d="M19 12h-7"/></svg>
);

/**
 * Icon component for Check Circle
 * @param {IconProps} props - Standard SVG properties
 */
const CheckCircle: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M9 11l3 3L22 4"/></svg>
);

/**
 * Icon component for Menu (Hamburger)
 * @param {IconProps} props - Standard SVG properties
 */
const Menu: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

/**
 * Icon component for X (Close)
 * @param {IconProps} props - Standard SVG properties
 */
const X: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
);


// --- Component Definitions ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = ['Services', 'Process', 'Portfolio', 'Contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Wrapper for the utility function that also closes the menu
  const handleMobileNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, () => setIsMenuOpen(false));
  };

  return (
    <header className="py-3 border-b border-gray-800 sticky top-0 bg-[#0a0a0a] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Smooth scroll to the hero section */}
        <a 
          href="#hero" 
          onClick={handleSmoothScroll}
          className="text-3xl font-extrabold tracking-tight text-white z-50 cursor-pointer"
        >
          JNC<span className="text-teal-400">.</span>Web Service
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={handleSmoothScroll} // Use smooth scroll
              className="text-gray-300 hover:text-teal-400 transition duration-300 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Quote Button */}
        <a 
          href="#contact" 
          onClick={handleSmoothScroll} // Use smooth scroll
          className="hidden md:block px-5 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-[#0a0a0a] transition duration-300"
        >
          Get a Quote
        </a>

        {/* Mobile Menu Button (Hamburger/X) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-teal-400 focus:outline-none z-50 transition duration-300"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (Slide-out Overlay) */}
      <div 
        className={`fixed inset-0 h-full w-full bg-[#0a0a0a]/95 backdrop-blur-sm transform transition-transform duration-500 md:hidden z-40 p-8 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Content wrapper for padding/spacing */}
        <div className="flex flex-col h-full pt-16">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={handleMobileNavLinkClick} // Use wrapper to close menu
                className="text-3xl font-bold text-white hover:text-teal-400 py-3 border-b border-gray-800 transition duration-300"
              >
                {item}
              </a>
            ))}
            {/* Mobile Quote Button */}
            <a 
              href="#contact" 
              onClick={handleMobileNavLinkClick} // Use wrapper to close menu
              className="mt-8 px-6 py-3 text-lg font-semibold text-center rounded-xl bg-teal-500 text-[#0a0a0a] hover:bg-teal-400 transition duration-300 shadow-lg"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tighter text-white">
        Crafting <span className="text-teal-400 inline-block">Digital Excellence.</span>
      </h1>
      <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
        JNC Web Development Services specializes in building high-performance, responsive websites using modern web technologies
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Smooth scroll applied to hero buttons */}
        <a href="#services" onClick={handleSmoothScroll} className="px-8 py-3 text-lg font-semibold rounded-xl bg-teal-500 text-[#0a0a0a] hover:bg-teal-400 transition duration-300 shadow-xl shadow-teal-500/30">
          Explore Our Services
        </a>
        <a href="#portfolio" onClick={handleSmoothScroll} className="px-8 py-3 text-lg font-semibold rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition duration-300">
          View Recent Work
        </a>
      </div>
    </div>
  </section>
);

const Services = () => {
  const serviceItems = [
    { icon: Code, title: 'Full-Stack Development', description: 'Building scalable applications with secure backend and optimized frontend.' },
    { icon: Zap, title: 'Performance Optimization', description: 'Ensuring lightning-fast load times and high Core Web Vitals scores.' },
    { icon: Rocket, title: 'Static Site Generation (SSG)', description: 'Deploying highly reliable, cost-effective static sites' },
    { icon: CheckCircle, title: 'Responsive Design', description: 'Guaranteeing seamless user experience on all devices, from mobile to desktop.' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-teal-500/30 transition border border-gray-700"
            >
              <item.icon className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
    const steps = [
        { num: 1, title: "Discovery & Planning", description: "We identify your project objectives, clarify the scope, and outline all technical requirements to ensure a well-structured plan." },
        { num: 2, title: "Design & Wireframing", description: "Building visual concepts and interactive wireframes to shape the user experience." },
        { num: 3, title: "Development & Build", description: "Developing the application according to your requirements using modern, reliable, and future-ready technologies." },
        { num: 4, title: "Review & Launch", description: "Comprehensive testing, performance tuning, and preparing the final deployment to your live environment." },
    ];

    return (
        <section id="process" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Our Streamlined Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                    {/* The lines connecting the steps (visually implied or simulated with grid) */}
                    <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-1 bg-gray-700"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 bg-gray-900 rounded-xl text-center z-0 border border-gray-800 shadow-lg hover:shadow-teal-500/30 transition">
                            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-teal-500 text-[#0a0a0a] font-extrabold text-xl ring-4 ring-teal-500/50">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CallToAction = () => (
  <section id="contact" className="py-20 bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-800 p-10 rounded-xl shadow-2xl border border-teal-500/20">
      <h2 className="text-4xl font-bold text-white mb-4">
        Ready to build your Next-Gen website?
      </h2>
      <p className="text-xl text-gray-400 mb-8">
        Let's discuss your project and turn your vision into a high-speed reality.
      </p>
      {/* Smooth scroll applied to CTA button */}
      <a href="#contact" onClick={handleSmoothScroll} className="inline-block px-10 py-4 text-xl font-bold rounded-full bg-teal-500 text-[#0a0a0a] hover:bg-teal-400 transition duration-300 shadow-lg shadow-teal-500/40 transform hover:scale-[1.02]">
        Start Your Project
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 bg-[#0a0a0a] border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="text-2xl font-extrabold tracking-tight text-white">JNC<span className="text-teal-400">.dev</span></div>
      <p className="mt-3 text-sm text-gray-500">
        © {new Date().getFullYear()} JNC Web Development Services.
      </p>
      
    </div>
  </footer>
);

export default function App() {
  // The main container enforces the dark theme using the specific hex codes requested
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        {/* Placeholder for Portfolio (since it's a static single file, we skip the dynamic list) */}
        <section id="portfolio" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Our Portfolio Snapshot
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    We deliver high-speed, modern static sites optimized for conversion and performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-teal-500/30 transition">
                        <h3 className="text-xl font-semibold text-teal-400">E-Commerce Platform</h3>
                        <p className="text-sm text-gray-400 mt-2">React, Next.js, Medusa, WooCommerce, Strapi/Payload</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-teal-500/30 transition">
                        <h3 className="text-xl font-semibold text-teal-400">Corporate, Business & Marketing Websites</h3>
                        <p className="text-sm text-gray-400 mt-2">Delivering high-performance dynamic or static websites designed to meet your business needs.</p>
                    </div>  
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-teal-500/30 transition">
                        <h3 className="text-xl font-semibold text-teal-400">Data Migration Automation</h3>
                        <p className="text-sm text-gray-400 mt-2">PowerShell, Bulk File Processing, Metadata Mapping, CSV/Excel Integration</p>
                    </div>
                </div>
            </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}