import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─── Colored Social SVG Icons ─── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path fill="#E60023" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

/* ─── Social Links Data ─── */
export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/innovatebuilder',
    Icon: FacebookIcon,
    bgHover: 'hover:bg-[#1877F2]/15 hover:border-[#1877F2]/40',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCxiSN-5aHqai_MWPWbbsLTg',
    Icon: YouTubeIcon,
    bgHover: 'hover:bg-[#FF0000]/15 hover:border-[#FF0000]/40',
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/idbtvm',
    Icon: XIcon,
    bgHover: 'hover:bg-neutral-850 hover:border-neutral-700 hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/innovate-designers-builders',
    Icon: LinkedInIcon,
    bgHover: 'hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40',
  },
  {
    label: 'Pinterest',
    href: 'https://in.pinterest.com/innovatebuilders',
    Icon: PinterestIcon,
    bgHover: 'hover:bg-[#E60023]/15 hover:border-[#E60023]/40',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                  Designers &amp; Builders
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Complete residential design and construction solutions for premium homes and villas across Kerala. From early planning to key delivery.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map(({ label, href, Icon, bgHover }) => {
                const isX = label.includes('X');
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center transition-all duration-300 ${bgHover} ${
                      isX ? 'bg-neutral-900/50 text-white' : 'text-neutral-400'
                    }`}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
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
                  Innovate Designers &amp; Builders Pvt Ltd,<br />
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
            &copy; {currentYear} Innovate Designers &amp; Builders Pvt. Ltd. All Rights Reserved.
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
