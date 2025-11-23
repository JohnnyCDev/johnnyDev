'use client'

import React from 'react';

// --- Type Definitions for Icon Props ---
type IconProps = React.SVGProps<SVGSVGElement>;

// --- Icon Component Definitions ---

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

/**
 * Icon component for Sun
 * @param {IconProps} props - Standard SVG properties
 */
const Sun: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>
);

/**
 * Icon component for Moon
 * @param {IconProps} props - Standard SVG properties
 */
const Moon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);


// --- Utility Function ---

/**
 * Utility function for handling smooth scroll on anchor clicks.
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


// --- Component Definitions ---

interface ThemeClasses {
    root: string;
    headerBg: string;
    headerBorder: string;
    headerLogo: string;
    headerNav: string;
    mobileMenuBg: string;
    mobileNavLink: string;
    heroGradient: string;
    heroTitle: string;
    heroText: string;
    heroButtonBorder: string;
    sectionBg1: string;
    sectionBg2: string;
    cardBg: string;
    cardTitle: string;
    cardText: string;
    processLine: string;
    ctaContainer: string;
    ctaTitle: string;
    ctaText: string;
    footerBorder: string;
    footerText: string;
    footerSubtext: string;
    footerLink: string;
}

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    themeClasses: ThemeClasses;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, themeClasses }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // Navigation items updated to include Competencies and Portfolio
  const navItems = ['Services', 'Process', 'Competencies', 'Portfolio', 'Contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Wrapper for the utility function that also closes the menu
  const handleMobileNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, () => setIsMenuOpen(false));
  };

  const navLinkClass = theme === 'dark' 
    ? "text-gray-300 hover:text-teal-400 transition duration-300 font-medium"
    : "text-gray-600 hover:text-teal-600 transition duration-300 font-medium";

  return (
    <header className={`py-3 border-b ${themeClasses.headerBorder} sticky top-0 ${themeClasses.headerBg} z-50 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Smooth scroll to the hero section */}
        <a 
          href="#hero" 
          onClick={handleSmoothScroll}
          className={`text-3xl font-extrabold tracking-tight ${themeClasses.headerLogo} z-50 cursor-pointer`}
        >
          JNC<span className="text-teal-400">.</span>Web Service
        </a>

        {/* Desktop Navigation and Buttons */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                // Links to the corresponding section ID (e.g., #competencies)
                href={`#${item.toLowerCase()}`} 
                onClick={handleSmoothScroll}
                className={navLinkClass}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Quote Button */}
          <a 
            href="#contact" 
            onClick={handleSmoothScroll}
            className="hidden md:block px-5 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white dark:hover:text-[#0a0a0a] transition duration-300"
          >
            Get a Quote
          </a>
          
          {/* Theme Switch (Desktop & Mobile) */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition duration-300 ${theme === 'dark' ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* Mobile Menu Button (Hamburger/X) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-teal-400 focus:outline-none z-50 transition duration-300"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-out Overlay) */}
      <div 
        className={`fixed inset-0 h-full w-full ${themeClasses.mobileMenuBg} backdrop-blur-sm transform transition-transform duration-500 md:hidden z-40 p-8 
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
                className={`text-3xl font-bold ${theme === 'dark' ? 'text-white hover:text-teal-400' : 'text-gray-900 hover:text-teal-600'} py-3 border-b ${themeClasses.headerBorder} transition duration-300`}
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

interface SectionProps {
    themeClasses: ThemeClasses;
}

// Data structure for the Core Competencies section
const coreCompetenciesData = {
    Frameworks: [
        'React.js', 'Next.js', 'Vue.js', 'Angular', 'Laravel', 'Express.js', 'ASP.NET Core',
        'Node.js', 'Bootstrap', 'Bulma', 'Tailwind', 'AEM (Adobe Experience Manager)', 
        'Magnolia CMS', 'Hybris', 'Magento', 'Liferay', 'OpenCart', 'CodeIgniter', 
        'CakePHP', 'WordPress', 'Tridion', 'Umbraco'
    ],
    Tools: [
        'Git', 'Docker', 'VS Code', 'Postman', 'Figma', 'Adobe XD', 'SVN', 
        'Ajax (technique/tool)', 'Microsoft Azure (Cloud Services, Storage, DevOps)', 
        'CDNs: Cloudflare, Imperva, CDN77', 'JIRA', 'Confluence', 'Wrike', 'Trello', 
        'D365 CRM Solution Tracker', 'Microsoft Office'
    ],
    Languages: [
        'HTML', 'CSS (SASS, LESS)', 'JavaScript', 'TypeScript', 'PHP', 'Java (JCR, Servlet, JSP)',
        'Python', 'C#', 'SQL'
    ],
    Others: [
        'REST API', 'GraphQL', 'Agile', 'Scrum', 'CI/CD', 'Testing', 
        'File Recovery (deleted/formatted drives)', 'Laptop / Desktop / LCD Repair'
    ],
    Databases: [
        'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQL Server', 'MsSQL', 'NoSQL', 
        'Supabase', 'MariaDB'
    ],
};

const Hero: React.FC<SectionProps> = ({ themeClasses }) => (
  <section id="hero" className={`relative pt-24 pb-32 overflow-hidden bg-gradient-to-b ${themeClasses.heroGradient} transition-colors duration-500`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className={`text-6xl md:text-8xl font-extrabold leading-tight tracking-tighter ${themeClasses.heroTitle}`}>
        Crafting <span className="text-teal-500 inline-block">Digital Excellence.</span>
      </h1>
      <p className={`mt-6 text-xl ${themeClasses.heroText} max-w-3xl mx-auto`}>
        JNC Web Development Services specializes in building high-performance, responsive websites using modern web technologies
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Smooth scroll applied to hero buttons */}
        <a href="#services" onClick={handleSmoothScroll} className="px-8 py-3 text-lg font-semibold rounded-xl bg-teal-500 text-[#0a0a0a] hover:bg-teal-400 transition duration-300 shadow-xl shadow-teal-500/30">
          Explore Our Services
        </a>
        <a href="#competencies" onClick={handleSmoothScroll} className={`px-8 py-3 text-lg font-semibold rounded-xl border transition duration-300 ${themeClasses.heroButtonBorder}`}>
          View Core Competencies
        </a>
      </div>
    </div>
  </section>
);

const Services: React.FC<SectionProps> = ({ themeClasses }) => {
  const serviceItems = [
    { icon: Code, title: 'Full-Stack Development', description: 'Building scalable applications with secure backend and optimized frontend.' },
    { icon: Zap, title: 'Performance Optimization', description: 'Ensuring lightning-fast load times and high Core Web Vitals scores.' },
    { icon: Rocket, title: 'Static Site Generation (SSG)', description: 'Deploying highly reliable, cost-effective static sites' },
    { icon: CheckCircle, title: 'Responsive Design', description: 'Guaranteeing seamless user experience on all devices, from mobile to desktop.' },
  ];

  return (
    <section id="services" className={`py-20 ${themeClasses.sectionBg1} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center ${themeClasses.cardTitle} mb-12`}>
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg transition border ${themeClasses.cardBg} hover:shadow-teal-500/30 dark:hover:shadow-teal-500/30`}
            >
              <item.icon className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className={`text-xl font-semibold ${themeClasses.cardTitle} mb-3`}>{item.title}</h3>
              <p className={`text-sm ${themeClasses.cardText}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process: React.FC<SectionProps> = ({ themeClasses }) => {
    const steps = [
        { num: 1, title: "Discovery & Planning", description: "We identify your project objectives, clarify the scope, and outline all technical requirements to ensure a well-structured plan." },
        { num: 2, title: "Design & Wireframing", description: "Building visual concepts and interactive wireframes to shape the user experience." },
        { num: 3, title: "Development & Build", description: "Developing the application according to your requirements using modern, reliable, and future-ready technologies." },
        { num: 4, title: "Review & Launch", description: "Comprehensive testing, performance tuning, and preparing the final deployment to your live environment." },
    ];

    return (
        <section id="process" className={`py-20 ${themeClasses.sectionBg2} transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl font-bold text-center ${themeClasses.cardTitle} mb-12`}>
                    Our Streamlined Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                    {/* The lines connecting the steps */}
                    <div className={`hidden md:block absolute top-10 left-[12%] right-[12%] h-1 ${themeClasses.processLine}`}></div>

                    {steps.map((step, index) => (
                        <div key={index} className={`relative p-6 rounded-xl text-center z-10 border shadow-lg ${themeClasses.cardBg} hover:shadow-teal-500/30 dark:hover:shadow-teal-500/30`} >
                            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-teal-500 text-[#0a0a0a] font-extrabold text-xl ring-4 ring-teal-500/50">
                                {step.num}
                            </div>
                            <h3 className={`text-xl font-semibold ${themeClasses.cardTitle} mb-2`}>{step.title}</h3>
                            <p className={`text-sm ${themeClasses.cardText}`}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Competencies section displaying tech stack in categorized cards (like chips).
 */
const Competencies: React.FC<SectionProps> = ({ themeClasses }) => {
    // Determine card background and border based on theme
    const cardClass = themeClasses.cardBg;
    const chipClass = themeClasses.cardText === 'text-gray-400' 
        ? 'bg-gray-700 text-gray-200 hover:bg-teal-700' // Dark theme chip
        : 'bg-gray-200 text-gray-700 hover:bg-teal-200'; // Light theme chip

    // Define the layout grid for the competency cards (2x2 grid + 1 full-width row for Databases)
    const cardLayouts = [
        { title: 'Frameworks', data: coreCompetenciesData.Frameworks, className: 'md:col-span-2' },
        { title: 'Tools', data: coreCompetenciesData.Tools, className: 'md:col-span-2' },
        { title: 'Languages', data: coreCompetenciesData.Languages, className: 'md:col-span-2' },
        { title: 'Others', data: coreCompetenciesData.Others, className: 'md:col-span-2' },
        { title: 'Databases', data: coreCompetenciesData.Databases, className: 'md:col-span-4' },
    ];

    return (
        <section id="competencies" className={`py-20 ${themeClasses.sectionBg1} transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl font-bold text-center ${themeClasses.cardTitle} mb-4`}>
                    Core Competencies
                </h2>
                <p className={`text-xl ${themeClasses.heroText} mb-12 text-center max-w-3xl mx-auto`}>
                    A comprehensive overview of the frameworks, tools, and languages we master.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {cardLayouts.map((card, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl border shadow-lg ${cardClass} ${card.className}`}
                        >
                            {/* Card Title (e.g., Frameworks) */}
                            <h3 className={`text-2xl font-semibold mb-4 pb-2 border-b ${themeClasses.headerBorder}`}>
                                {card.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {/* Skill Chips */}
                                {card.data.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${chipClass}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


/**
 * Placeholder Portfolio Section (Restored)
 */
const Portfolio: React.FC<SectionProps> = ({ themeClasses }) => {
  const projectItems = [
    { title: 'E-Commerce Platform', description: 'React, Next.js, Medusa, WooCommerce, Strapi/Payload' },
    { title: 'Corporate, Business & Marketing Websites', description: 'Delivering high-performance dynamic or static websites designed to meet your business needs.' },
    { title: 'Data Migration Automation', description: 'PowerShell, Bulk File Processing, Metadata Mapping, CSV/Excel Integration' },
  ];

  const cardBgClass = themeClasses.cardBg;
  const cardTitleClass = themeClasses.cardTitle;
  const cardTextClass = themeClasses.cardText;

  return (
    <section id="portfolio" className={`py-20 ${themeClasses.sectionBg2} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center ${cardTitleClass} mb-4`}>
          Portfolio Snapshot
        </h2>
        <p className={`text-xl ${themeClasses.heroText} mb-12 text-center max-w-3xl mx-auto`}>
            A quick look at recent project achievements and complexity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition border ${cardBgClass} hover:shadow-teal-500/30 dark:hover:shadow-teal-500/30`}
            >
              <h3 className={`text-xl font-semibold ${cardTitleClass} mb-3`}>{item.title}</h3>
              <p className={`text-sm ${cardTextClass}`}>{item.description}</p>
             {/* <a href="#" className="mt-4 inline-block text-teal-500 hover:text-teal-400 text-sm font-semibold transition duration-200">View Case Study &rarr;</a> */}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#contact" onClick={handleSmoothScroll} className="px-6 py-3 text-lg font-semibold rounded-xl border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-[#0a0a0a] dark:hover:text-white transition duration-300">
                Discuss Your Project
            </a>
        </div>
      </div>
    </section>
  );
};

const CallToAction: React.FC<SectionProps> = ({ themeClasses }) => (
  <section id="contact" className={`py-20 ${themeClasses.sectionBg1} transition-colors duration-500`}>
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-10 rounded-xl shadow-2xl border ${themeClasses.ctaContainer}`}>
      <h2 className={`text-4xl font-bold ${themeClasses.ctaTitle} mb-4`}>
        Ready to build your Next-Gen website?
      </h2>
      <p className={`text-xl ${themeClasses.ctaText} mb-8`}>
        Let's discuss your project and turn your vision into a high-speed reality.
      </p>
      {/* Smooth scroll applied to CTA button */}
      <a 
        href="mailto:camagongjohn@gmail.com?subject=Inquiry%20from%20JNC%20Website" 
        className="inline-block px-10 py-4 text-xl font-bold rounded-full bg-teal-500 text-[#0a0a0a] hover:bg-teal-400 transition duration-300 shadow-lg shadow-teal-500/40 transform hover:scale-[1.02]"
      >
        Get in Touch
      </a>
    </div>
  </section>
);

const Footer: React.FC<SectionProps> = ({ themeClasses }) => (
  <footer className={`py-4 ${themeClasses.sectionBg2} border-t ${themeClasses.footerBorder} transition-colors duration-500`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className={`text-2xl font-extrabold tracking-tight ${themeClasses.footerText}`}>JNC<span className="text-teal-400">.Web Service</span></div>
      <p className={`mt-3 text-sm ${themeClasses.footerSubtext}`}>
      Copyright © {new Date().getFullYear()} JNC Web Development Services. All rights reserved.
      </p>
      <div className="mt-4 space-x-4 text-sm hidden">
        <a href="#" className={themeClasses.footerLink}>Privacy Policy</a>
        <span className={themeClasses.footerSubtext}>|</span>
        <a href="#" className={themeClasses.footerLink}>Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  // Define dynamic theme classes based on the current theme state
  const themeClasses: ThemeClasses = {
    // General root styles
    root: theme === 'dark' ? 'bg-[#0a0a0a] text-[#ededed]' : 'bg-white text-gray-900',
    
    // Header specific
    headerBg: theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white',
    headerBorder: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
    headerLogo: theme === 'dark' ? 'text-white' : 'text-gray-900',
    headerNav: theme === 'dark' ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600',
    mobileMenuBg: theme === 'dark' ? 'bg-[#0a0a0a]/95' : 'bg-white/95',
    mobileNavLink: theme === 'dark' ? 'text-white border-gray-800' : 'text-gray-900 border-gray-200',

    // Hero specific
    heroGradient: theme === 'dark' ? 'from-[#0a0a0a] to-gray-900' : 'from-white to-gray-50',
    heroTitle: theme === 'dark' ? 'text-white' : 'text-gray-900',
    heroText: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
    heroButtonBorder: theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100',
    
    // Section backgrounds
    sectionBg1: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
    sectionBg2: theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white',
    
    // Card styles (used in Services/Competencies/Portfolio/Process)
    cardBg: theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    cardTitle: theme === 'dark' ? 'text-white' : 'text-gray-900',
    cardText: theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
    processLine: theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300',
    
    // CTA specific
    ctaContainer: theme === 'dark' ? 'bg-gray-800 border-teal-500/20' : 'bg-gray-100 border-teal-300/50',
    ctaTitle: theme === 'dark' ? 'text-white' : 'text-gray-900',
    ctaText: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',

    // Footer specific
    footerBorder: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
    footerText: theme === 'dark' ? 'text-white' : 'text-gray-900',
    footerSubtext: theme === 'dark' ? 'text-gray-500' : 'text-gray-500',
    footerLink: theme === 'dark' ? 'text-gray-500 hover:text-teal-400' : 'text-gray-500 hover:text-teal-600',
  };

  // The main container now uses the dynamic root theme classes
  return (
    <div className={`min-h-screen font-sans antialiased ${themeClasses.root} transition-colors duration-500`}>
      <Header theme={theme} toggleTheme={toggleTheme} themeClasses={themeClasses} />
      <main>
        <Hero themeClasses={themeClasses} />
        <Services themeClasses={themeClasses} />
        <Process themeClasses={themeClasses} />
        <Competencies themeClasses={themeClasses} />
        <Portfolio themeClasses={themeClasses} />
        <CallToAction themeClasses={themeClasses} />
      </main>
      <Footer themeClasses={themeClasses} />
    </div>
  );
}