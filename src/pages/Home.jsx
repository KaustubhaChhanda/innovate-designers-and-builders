import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, HardHat, Compass, Users, CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

// Animated rolling number component
function StatCounter({ value, label, color }) {
  const [ref, display] = useCountUp(value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center py-8 px-4 hover:scale-105 transition-transform duration-300">
      <motion.span
        className={`text-3xl lg:text-4xl font-heading font-bold tabular-nums ${color}`}
      >
        {display}
      </motion.span>
      <span className="text-xs text-neutral-600 uppercase tracking-wider font-semibold mt-1.5 text-center">{label}</span>
    </div>
  );
}

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
      description: "Custom residential building constructed to matching premium standards using prime quality materials and engineering.",
      borderClass: "border-t-brand-500",
      bgClass: "bg-brand-50",
      iconClass: "text-brand-600",
      hoverIconClass: "group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white"
    },
    {
      icon: <Compass size={28} />,
      title: "Architectural Design",
      description: "Modern elevations, floor plans, and functional layout designs crafted by experienced designers for Kerala homes.",
      borderClass: "border-t-royal-500",
      bgClass: "bg-royal-50",
      iconClass: "text-royal-600",
      hoverIconClass: "group-hover:bg-gradient-to-br group-hover:from-royal-500 group-hover:to-royal-600 group-hover:text-white"
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Turnkey Projects",
      description: "Hassle-free complete solutions handling everything from design permission to final construction and keys delivery.",
      borderClass: "border-t-emerald-500",
      bgClass: "bg-emerald-50",
      iconClass: "text-emerald-600",
      hoverIconClass: "group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white"
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed', color: 'text-brand-600' },
    { value: '10+', label: 'Years Experience', color: 'text-royal-600' },
    { value: '100%', label: 'Turnkey Delivery', color: 'text-emerald-600' },
    { value: '50+', label: 'Active Projects', color: 'text-amber-600' }
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
      <section className="relative pt-12 pb-6 z-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-50/90 via-white to-royal-50/90 backdrop-blur-md rounded-2xl shadow-xl shadow-neutral-200/40 border border-brand-100/60 grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-100"
          >
            {stats.map((stat, idx) => (
              <StatCounter key={idx} value={stat.value} label={stat.label} color={stat.color} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── About Intro ─── */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 relative overflow-hidden">
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
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg border-2 border-amber-200 p-5 hidden sm:block">
                <span className="font-heading text-3xl font-bold text-gradient-gold block">100%</span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800 mt-0.5">Turnkey Delivery<br/>Guarantee</p>
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
                className={`bg-white rounded-2xl p-8 border border-neutral-100 ${service.borderClass} border-t-4 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 group flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl ${service.bgClass} ${service.iconClass} flex items-center justify-center mb-5 ${service.hoverIconClass} transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-1">{service.description}</p>
                <Link to="/services" className={`inline-flex items-center gap-1.5 ${service.iconClass} text-sm font-semibold hover:gap-2.5 transition-all duration-300`}>
                  Learn More <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-neutral-950 via-slate-900 to-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300 bg-brand-500/15 px-3 py-1 rounded-full">Value Proposition</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mt-4">Why Choose Innovate</h2>
            <p className="text-neutral-400 mt-3 max-w-lg mx-auto">We merge high quality workmanship with client centric processes</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={22} />, title: 'Premium Materials', desc: 'Always using standard and tested grade materials for solid construction durability.', bg: 'bg-white/5 border-white/10 hover:bg-white/10', iconBg: 'bg-gradient-to-br from-brand-500 to-amber-500 text-white' },
              { icon: <Users size={22} />, title: 'Experienced Team', desc: 'Equipped with qualified architects and site engineers supervising each structural step.', bg: 'bg-white/5 border-white/10 hover:bg-white/10', iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white' },
              { icon: <CheckCircle size={22} />, title: 'On-Time Delivery', desc: 'Following strict scheduling processes to hand over key on the committed date.', bg: 'bg-white/5 border-white/10 hover:bg-white/10', iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-400 text-white' },
              { icon: <Compass size={22} />, title: 'Bespoke Design', desc: 'Personalized design elevations reflecting your lifestyle and functional needs.', bg: 'bg-white/5 border-white/10 hover:bg-white/10', iconBg: 'bg-gradient-to-br from-violet-500 to-purple-400 text-white' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`text-center p-8 rounded-2xl border ${item.bg} transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-gradient-to-br from-neutral-950 via-neutral-900 to-brand-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300 bg-brand-500/10 px-3 py-1 rounded-full">Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mt-4">Client Testimonials</h2>
            <p className="text-neutral-400 mt-3">Hear what our homeowners say about their building journey</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border-2 border-white/10 p-10 lg:p-14 shadow-2xl relative">
            {/* Top border colored accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 via-royal-500 to-amber-500 rounded-t-2xl" />

            {/* Stars */}
            <div className="flex justify-center gap-1 text-amber-400 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>

            <div className="min-h-[140px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                  className="text-center"
                >
                  <p className="text-lg lg:text-xl italic text-neutral-200 leading-relaxed mb-8">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <h4 className="font-heading text-lg font-bold text-gradient-gold">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <span className="text-xs text-neutral-400 font-medium">Verified Client</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeTestimonial ? 'w-8 bg-brand-500' : 'w-2 bg-neutral-600 hover:bg-neutral-500'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300 cursor-pointer"
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 via-orange-600 to-amber-600 p-12 lg:p-16 text-center shadow-xl shadow-brand-900/15"
          >
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10 blur-xl" />

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Start Your Project
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Let's Discuss Your Dream Home Layout
              </h2>
              <p className="text-white/85 max-w-xl mx-auto mb-8">
                Consult with our engineering and design team for a free structural consultation and design cost review.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-brand-700 hover:text-brand-800 text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
                >
                  Book a Consultation
                </Link>
                <a
                  href="tel:+919995365128"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all duration-300"
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
