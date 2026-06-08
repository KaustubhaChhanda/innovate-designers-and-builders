import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // On home page: transparent initially, white on scroll
  // On other pages: always solid white
  const showSolidBg = !isHome || isScrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolidBg
            ? 'py-2 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-neutral-200/60'
            : 'py-4 bg-white/10 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <img
              src="/assets/images/logo/innovate-builders-designers-logo.png"
              alt="Innovate Logo"
              className={`h-9 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                !showSolidBg ? 'brightness-0 invert' : ''
              }`}
            />
            <div className="hidden sm:flex flex-col">
              <span className={`font-heading text-[17px] font-bold tracking-tight leading-none transition-colors duration-300 ${
                showSolidBg ? 'text-neutral-900' : 'text-white'
              }`}>
                Innovate
              </span>
              <span className={`text-[9px] uppercase tracking-[0.2em] font-semibold mt-0.5 transition-colors duration-300 ${
                showSolidBg ? 'text-brand-600' : 'text-brand-300'
              }`}>
                Designers & Builders
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 rounded-lg ${
                    isActive
                      ? showSolidBg ? 'text-brand-600' : 'text-brand-300'
                      : showSolidBg
                        ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full ${
                          showSolidBg ? 'bg-brand-500' : 'bg-brand-300'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="tel:+919995365128"
              className={`hidden lg:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md ${
                showSolidBg
                  ? 'bg-brand-600 hover:bg-brand-700 text-white'
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
              }`}
            >
              <PhoneCall size={13} />
              <span>Call Now</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                showSolidBg ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-neutral-200/60"
            >
              <div className="px-5 py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-[15px] font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'text-brand-600 bg-brand-50'
                          : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <a
                    href="tel:+919995365128"
                    className="flex items-center justify-center gap-2 bg-brand-600 text-white text-sm font-semibold py-3 rounded-xl hover:bg-brand-700 transition-colors"
                  >
                    <PhoneCall size={15} />
                    <span>+91 99953 65128</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
