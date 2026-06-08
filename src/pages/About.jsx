import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building, Compass } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Building size={24} />,
      title: "Construction Expertise",
      desc: "Our structural engineering teams inspect raw materials, test concrete grades, and oversee civil mason work at each phase."
    },
    {
      icon: <Compass size={24} />,
      title: "Design Innovation",
      desc: "We focus on bespoke Kerala architectural styles, integrating modern air circulation flows and maximum natural sunlight."
    },
    {
      icon: <Award size={24} />,
      title: "Turnkey Accountability",
      desc: "By taking full charge of documentations, clearances, building materials, and site supervision, we ensure zero-stress delivery."
    }
  ];

  return (
    <div>
      {/* ─── Page Header ─── */}
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
              Who We Are
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
              About Our <span className="text-gradient-gold">Company</span>
            </h1>
            <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Innovate Designers & Builders Pvt. Ltd. represents structural trust, custom layouts, and turnkey home delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900 leading-snug">
                Trusted Builder & Construction Partner in Kerala
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Based in Thiruvananthapuram, Kerala, <strong className="text-neutral-900">Innovate Designers & Builders Pvt. Ltd.</strong> has established a strong reputation as a premier builder specializing in residential construction, premium villa projects, and architectural layouts.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We operate under a customer-centric delivery framework, handling everything starting from soil validation checks and legal document processing up to brick layouts, roofing concrete, final painting, and interior modular kitchen setups.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our builders coordinate structural designs, materials testing (fe500 steel, certified grade cements), plumbing pipelines, and electrical grids, ensuring that the final home is durable, safe, and custom-styled.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-neutral-300/30">
                <img
                  src="/assets/images/contemporary/innovate-builders-contemporary-house-home-elevation-2-1024x555.jpg"
                  alt="Build Site"
                  className="w-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-brand-400 bg-brand-50/50 shadow-xl shadow-brand-100" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-royal-950/60 via-neutral-900/50 to-neutral-950 backdrop-blur-sm rounded-2xl border-2 border-royal-500/20 p-8 lg:p-10 relative overflow-hidden group hover:border-royal-500/40 transition-colors duration-300 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-royal-500/5 rounded-full blur-2xl group-hover:bg-royal-500/10 transition-all duration-300" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-royal-400 mb-4 block">Vision Statement</span>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Designing Beyond Boundaries</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                To be the most trusted and customer-focused residential construction and design firm in Kerala, continuously setting standards in construction quality, custom styling parameters, and engineering precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-brand-950/60 via-neutral-900/50 to-neutral-950 backdrop-blur-sm rounded-2xl border-2 border-brand-500/20 p-8 lg:p-10 relative overflow-hidden group hover:border-brand-500/40 transition-colors duration-300 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-all duration-300" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300 mb-4 block">Mission Statement</span>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Turnkey Structural Excellence</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                To supply homeowners with a transparent, budget-friendly building contract model, deploying experienced supervisors, selecting prime quality structural materials, and executing zero-defect keys delivery on the committed date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-24 bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300 bg-brand-500/15 px-3 py-1 rounded-full">Our Code</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mt-4">Values That Drive Us</h2>
            <p className="text-neutral-400 mt-3 max-w-lg mx-auto">We maintain absolute transparency, strict supervision, and custom layouts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const gradients = [
                'from-blue-600 via-royal-500 to-cyan-500',
                'from-brand-600 via-amber-500 to-orange-400',
                'from-emerald-600 via-teal-500 to-cyan-400',
              ];
              const glow = ['bg-blue-500/10', 'bg-brand-500/10', 'bg-emerald-500/10'][idx % 3];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  {/* Gradient top bar */}
                  <div className={`bg-gradient-to-r ${gradients[idx % 3]} h-1.5`} />
                  <div className="p-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[idx % 3]} flex items-center justify-center mb-5 text-white shadow-lg`}>
                      {val.icon}
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white mb-3">{val.title}</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
