import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { socialLinks } from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', location: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15784.38758739335!2d76.9307042!3d8.4899593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a0f9a409a8f98a0!2sInnovate%20Designers%20%26%20Builders!5e0!3m2!1sen!2sin!4v1575933007657!5m2!1sen!2sin";

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-800 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all duration-200";

  return (
    <div>
      {/* ─── Header ─── */}
      <section className="relative pt-40 pb-24 bg-hero-gradient overflow-hidden">
        {/* Gradients and grids */}
        <div className="absolute inset-0 bg-hero-gradient-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-brand-400/35 bg-brand-500/10 text-brand-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Contact Our <span className="text-gradient-gold">Office</span>
            </h1>
            <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Reach out for plans analysis, free estimates, or residential construction queries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-neutral-900">Contact Coordinates</h2>
              <p className="text-neutral-600 leading-relaxed">
                We look forward to partnering with you on your home construction project. Drop by our office or call us directly.
              </p>

              <div className="flex flex-col gap-6 mt-2">
                {/* Address */}
                <div className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-sm border border-amber-100 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Office Location</h4>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Innovate Designers & Builders Pvt Ltd,<br />
                      Tc 93/1944, KRA 111A, Railway station road,<br />
                      Pallimuku, Pettah.P.O, Trivandrum, Kerala-695024
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Phone Numbers</h4>
                    <div className="flex flex-col text-sm font-medium">
                      <a href="tel:+919995365128" className="text-neutral-700 hover:text-emerald-600 transition-colors">+91 99953 65128</a>
                      <a href="tel:+919388100090" className="text-neutral-700 hover:text-emerald-600 transition-colors">+91 93881 00090</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center shrink-0 shadow-sm border border-royal-100 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Email Address</h4>
                    <a href="mailto:idbtvm@gmail.com" className="text-sm text-neutral-700 hover:text-royal-600 transition-colors font-medium">
                      idbtvm@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-4">
                <a
                  href="https://wa.me/919995365128/?text=Hi%20Innovate%20team,%20I%20am%20interested%20in%20your%20house%20construction%20services.%20Can%20we%20discuss%20my%20project?"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300"
                >
                  <MessageSquare size={15} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">Follow Us On</h4>
                <div className="flex items-center gap-2.5 flex-wrap">
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
                        className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm transition-all duration-300 ${
                          isX 
                            ? 'bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400' 
                            : `${bgHover} bg-white border-neutral-200`
                        }`}
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-brand-100 shadow-xl p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-50 rounded-full blur-xl" />
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6 relative z-10">Send an Inquiry</h3>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className={inputClasses}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Mobile number"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email (optional)"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Project Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Trivandrum, Kollam, etc."
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Provide details about your plot, budget, and project requirements"
                        rows={4}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-amber-500 hover:from-brand-700 hover:to-amber-600 text-white text-sm font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-brand-200 hover:shadow-lg hover:scale-[1.01] cursor-pointer mt-1"
                    >
                      <Send size={15} />
                      Send Message
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={36} />
                    </motion.div>
                    <h4 className="text-xl font-heading font-bold text-neutral-900 mb-2">Inquiry Sent Successfully!</h4>
                    <p className="text-sm text-neutral-500 max-w-xs">
                      Thank you, our engineering design coordinators will review your message and contact you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-neutral-100"
          >
            <iframe
              src={googleMapUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Office Location Map"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
