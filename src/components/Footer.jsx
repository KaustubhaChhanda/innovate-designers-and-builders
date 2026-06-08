import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/innovatebuilder', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/idbtvm/?hl=en', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/innovate-designers-builders', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/idbtvm', label: 'Twitter' }
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-300 mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/assets/images/logo/innovate-builders-designers-logo.png"
                alt="Innovate Logo"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-heading text-[16px] font-bold text-white tracking-tight leading-none">
                  Innovate
                </span>
                <span className="text-[8px] text-brand-400 uppercase tracking-[0.2em] font-semibold mt-0.5">
                  Designers & Builders
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Complete residential design and construction solutions for premium homes and villas across Kerala. From early planning to key delivery.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Our Services' },
                { to: '/projects', label: 'Project Videos' },
                { to: '/gallery', label: 'Photo Gallery' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Page' }
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="text-sm text-neutral-400 hover:text-brand-400 transition-colors duration-200 w-fit"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Core Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                'House Construction',
                'Villa Construction',
                'Architectural Designing',
                'Interior Designing',
                'Turnkey Construction',
                'Project Management'
              ].map((service) => (
                <NavLink
                  key={service}
                  to="/services"
                  className="text-sm text-neutral-400 hover:text-brand-400 transition-colors duration-200 w-fit"
                >
                  {service}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-brand-400 shrink-0 mt-1" />
                <span className="text-sm text-neutral-400 leading-relaxed">
                  Innovate Designers & Builders Pvt Ltd,<br />
                  Tc 93/1944, KRA 111A, Pettah.P.O,<br />
                  Trivandrum, Kerala - 695024
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="text-brand-400 shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href="tel:+919995365128" className="text-neutral-400 hover:text-white transition-colors">+91 99953 65128</a>
                  <a href="tel:+919388100090" className="text-neutral-400 hover:text-white transition-colors">+91 93881 00090</a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="text-brand-400 shrink-0" />
                <a href="mailto:idbtvm@gmail.com" className="text-sm text-neutral-400 hover:text-white transition-colors">idbtvm@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-500">
            &copy; {currentYear} Innovate Designers & Builders Pvt. Ltd. All Rights Reserved.
          </span>
          <div className="flex gap-6 text-xs text-neutral-500">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
