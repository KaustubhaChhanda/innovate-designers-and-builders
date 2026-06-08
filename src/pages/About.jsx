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
      <section className="pt-32 pb-16 bg-surface-muted bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Who We Are</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mt-3 text-gradient">About Our Company</h1>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
              Innovate Designers & Builders Pvt. Ltd. represents structural trust, custom layouts, and turnkey home delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Company Story ─── */}
      <section className="py-24">
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
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-brand-200/50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 mb-4 block">Vision Statement</span>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Designing Beyond Boundaries</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                To be the most trusted and customer-focused residential construction and design firm in Kerala, continuously setting standards in construction quality, custom styling parameters, and engineering precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 mb-4 block">Mission Statement</span>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Turnkey Structural Excellence</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                To supply homeowners with a transparent, budget-friendly building contract model, deploying experienced supervisors, selecting prime quality structural materials, and executing zero-defect keys delivery on the committed date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Our Code</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mt-3">Values That Drive Us</h2>
            <p className="text-neutral-500 mt-3 max-w-lg mx-auto">We maintain absolute transparency, strict supervision, and custom layouts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-100 p-8 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h4 className="font-heading font-bold text-lg text-neutral-900 mb-3">{val.title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
