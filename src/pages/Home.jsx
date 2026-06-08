import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, HardHat, Compass, Users, CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ashkar J Mulavunkal",
      text: "Innovate Designers & builders appointed a team of employees and labours were professional and completed the project on time and within budget. We wish all the best in your future projects."
    },
    {
      name: "Raja Sekhar",
      text: "Innovate Designers & Builders team are very professional and have a great 'can do' attitude. Your work on our house project shows that you have observed, considered and implemented learnings from the past years."
    },
    {
      name: "Meera Pillai",
      text: "The team was professional, friendly and understanding throughout the entire project. Their constant communication ensured that our home was completed within budget, on time and to the high standards."
    },
    {
      name: "Manu M K",
      text: "Well, the whole process from planning to construction and finally moving in was programmed and run very professionally from Innovate Designers & Builders. Thank You."
    }
  ];

  const featuredServices = [
    {
      icon: <HardHat size={28} />,
      title: "House Construction",
      description: "Custom residential building constructed to matching premium standards using prime quality materials and engineering."
    },
    {
      icon: <Compass size={28} />,
      title: "Architectural Design",
      description: "Modern elevations, floor plans, and functional layout designs crafted by experienced designers for Kerala homes."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Turnkey Projects",
      description: "Hassle-free complete solutions handling everything from design permission to final construction and keys delivery."
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Turnkey Delivery' },
    { value: '50+', label: 'Active Projects' }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* ─── Hero Banner ─── */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/box-type/innovate-builders-box-type-elevation-1-1024x555.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/80 via-neutral-900/70 to-neutral-950/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                Innovate Designers & Builders
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
                Building Dream Homes{' '}
                <span className="text-brand-400">From Design to Delivery</span>
              </h1>
              <p className="text-lg text-neutral-300 max-w-xl mb-10 leading-relaxed">
                Complete residential design and construction solutions for premium homes and villas across Kerala.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/30"
                >
                  View Portfolio
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-100"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center py-8 px-4">
                <span className="text-3xl lg:text-4xl font-heading font-bold text-brand-600">{stat.value}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── About Intro ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">About Company</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900 leading-snug">
                Complete Solution Provider For Residential Architecture & Construction
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Innovate Designers & Builders Pvt. Ltd. is a premium construction firm based in Thiruvananthapuram, Kerala. We focus on delivering unmatched quality and engineering precision throughout the project lifecycle.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We coordinate and handle complete services starting from planning, documentation, permits acquiring, structural design, foundation lay, brickwork, finishing elements, up to interior modular furnishing.
              </p>
              <div className="mt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors group"
                >
                  Read Our Story
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-neutral-300/30">
                <img
                  src="/assets/images/colonial/innovate-builders-colonial-type-elevation-1-1024x555.jpg"
                  alt="Company Showcase"
                  className="w-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-xl shadow-lg border border-neutral-100 p-5 hidden sm:block">
                <span className="font-heading text-3xl font-bold text-brand-600 block">100%</span>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500 mt-0.5">Turnkey Delivery<br/>Guarantee</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-24 bg-surface-muted bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Services Overview</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mt-3">What We Excel At</h2>
            <p className="text-neutral-500 mt-3 max-w-lg mx-auto">End-to-end builders assistance customized for your home design goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-brand-200 shadow-sm hover:shadow-lg hover:shadow-brand-100/40 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-1">{service.description}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold hover:gap-2.5 transition-all duration-300">
                  Learn More <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Value Proposition</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mt-3">Why Choose Innovate</h2>
            <p className="text-neutral-500 mt-3 max-w-lg mx-auto">We merge high quality workmanship with client centric processes</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={22} />, title: 'Premium Materials', desc: 'Always using standard and tested grade materials for solid construction durability.' },
              { icon: <Users size={22} />, title: 'Experienced Team', desc: 'Equipped with qualified architects and site engineers supervising each structural step.' },
              { icon: <CheckCircle size={22} />, title: 'On-Time Delivery', desc: 'Following strict scheduling processes to hand over key on the committed date.' },
              { icon: <Compass size={22} />, title: 'Bespoke Design', desc: 'Personalized design elevations reflecting your lifestyle and functional needs.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="text-center p-8 rounded-2xl border border-neutral-100 bg-white hover:bg-brand-50/30 transition-colors duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-neutral-900 mb-2">{item.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl" />

        <div className="max-w-4xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mt-3">Client Testimonials</h2>
            <p className="text-neutral-400 mt-3">Hear what our homeowners say about their building journey</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-10 lg:p-14">
            {/* Stars */}
            <div className="flex justify-center gap-1 text-amber-400 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>

            <div className="min-h-[120px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-lg lg:text-xl italic text-neutral-300 leading-relaxed mb-8">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <h4 className="font-heading text-lg font-bold text-brand-400">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <span className="text-xs text-neutral-500">Verified Client</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-500 transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeTestimonial ? 'w-8 bg-brand-500' : 'w-1.5 bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-500 transition-all duration-300 cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-12 lg:p-16 text-center"
          >
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Start Your Project
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Let's Discuss Your Dream Home Layout
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Consult with our engineering and design team for a free structural consultation and design cost review.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-700 text-sm font-bold px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-all duration-300 shadow-lg"
                >
                  Book a Consultation
                </Link>
                <a
                  href="tel:+919995365128"
                  className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/25 transition-all duration-300"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
