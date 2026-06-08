import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Compass, Palette, Key, ClipboardCheck, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      icon: <HardHat size={32} />,
      title: "House & Villa Construction",
      description: "We build custom houses and residential villas designed for premium standards. Our civil team manages foundational lay, framing, concrete mixing, and quality brickwork, ensuring strong structural strength in compliance with Kerala state norms.",
      details: ["Premium structural design", "Strict quality control of cement/steel", "Compliance with KMBR rules", "Certified civil engineers supervision"]
    },
    {
      icon: <Compass size={32} />,
      title: "Architectural Designing",
      description: "Our in-house design draftsmen craft custom contemporary, traditional-contemporary, box type, colonial, and curved roof house plans. We generate detailed floor blueprints, functional layout maps, and premium 3D exterior elevations.",
      details: ["Detailed 2D floor plans", "High-quality 3D exterior renders", "Sunlight and cross-ventilation analysis", "Vastu-compliant layouts if requested"]
    },
    {
      icon: <Palette size={32} />,
      title: "Interior Designing",
      description: "Complete interior planning and execution for basements, living spaces, dining halls, modular kitchens, wash areas, pooja rooms, and bedrooms. We produce custom woodwork, false ceilings, flooring grids, and decorative elements.",
      details: ["Modern modular kitchen layout", "Custom bedroom & living wardrobes", "Premium false ceiling and LED lighting", "Curated paint & material selection"]
    },
    {
      icon: <Key size={32} />,
      title: "Turnkey Construction Contracts",
      description: "A complete end-to-end service where we manage everything. We look after legal approvals, building permits, raw materials acquisition, civil contracting, plumbing, electrical installations, painting, and interior handover.",
      details: ["Fixed budget contract parameters", "Material specification checklist", "Regular site photos updates", "Single point of accountability"]
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Project Management",
      description: "Our engineers coordinate structural inspections, quality validation, budget monitoring, and contractor workflows, ensuring the building progress matches the project milestones perfectly.",
      details: ["Milestone tracking and charts", "Raw materials testing validations", "Safety code compliance on-site", "Budget variance checkups"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Briefing",
      desc: "Meeting with our architects to align on budget, spacing objectives, preferred architectural styles (contemporary, box type, traditional), and plot details."
    },
    {
      step: "02",
      title: "Planning & Architecture",
      desc: "Generating initial 2D floor layouts and draft blueprints, refining design concepts, and locking in the custom 3D exterior house elevations."
    },
    {
      step: "03",
      title: "Approvals & Permits",
      desc: "Managing local municipality or panchayat document filings, securing clearances, and obtaining structural permissions before launching work."
    },
    {
      step: "04",
      title: "Civil Construction",
      desc: "Foundational excavation, laying of concrete footings, brick masonry, structural framing, plumbing, and major wiring grids."
    },
    {
      step: "05",
      title: "Interior & Finishes",
      desc: "Laying custom flooring tiles, wall painting, electrical fittings, modular kitchen setup, bathroom plumbing installations, and woodworking."
    },
    {
      step: "06",
      title: "Final Handover",
      desc: "Conducting a comprehensive cleaning, testing all electrical/plumbing lines, final inspections, and handing over the keys to your new home."
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
              Expertise
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Complete solutions for house design, structural engineering, civil construction, and interior furnishing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-50/30 via-white to-brand-50/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">What We Do</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900">Core Services</h2>
            <p className="text-neutral-500 mt-3 max-w-lg mx-auto text-sm">Everything you need to build and furnish your dream home — under one roof.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => {
              const schemes = [
                {
                  gradient: 'from-brand-600 via-amber-500 to-orange-400',
                  iconRing: 'bg-white/20 text-white',
                  chip: 'bg-brand-50 text-brand-700 border-brand-200',
                  accent: 'text-brand-600',
                  cardBg: 'bg-white hover:bg-brand-50/10',
                  hoverBorder: 'hover:border-brand-300 hover:shadow-brand-500/10',
                },
                {
                  gradient: 'from-blue-700 via-royal-500 to-cyan-500',
                  iconRing: 'bg-white/20 text-white',
                  chip: 'bg-blue-50 text-blue-700 border-blue-200',
                  accent: 'text-blue-600',
                  cardBg: 'bg-white hover:bg-blue-50/10',
                  hoverBorder: 'hover:border-blue-300 hover:shadow-blue-500/10',
                },
                {
                  gradient: 'from-emerald-600 via-teal-500 to-cyan-400',
                  iconRing: 'bg-white/20 text-white',
                  chip: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  accent: 'text-emerald-600',
                  cardBg: 'bg-white hover:bg-emerald-50/10',
                  hoverBorder: 'hover:border-emerald-300 hover:shadow-emerald-500/10',
                },
                {
                  gradient: 'from-amber-600 via-orange-500 to-yellow-400',
                  iconRing: 'bg-white/20 text-white',
                  chip: 'bg-amber-50 text-amber-700 border-amber-200',
                  accent: 'text-amber-600',
                  cardBg: 'bg-white hover:bg-amber-50/10',
                  hoverBorder: 'hover:border-amber-300 hover:shadow-amber-500/10',
                },
                {
                  gradient: 'from-purple-600 via-pink-500 to-rose-450',
                  iconRing: 'bg-white/20 text-white',
                  chip: 'bg-purple-50 text-purple-700 border-purple-200',
                  accent: 'text-purple-600',
                  cardBg: 'bg-white hover:bg-purple-50/10',
                  hoverBorder: 'hover:border-purple-300 hover:shadow-purple-500/10',
                },
              ];
              const s = schemes[idx % 5];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  whileHover={{ y: -4 }}
                  className={`${s.cardBg} ${s.hoverBorder} rounded-2xl border border-neutral-200/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}
                >
                  {/* Gradient Header Band */}
                  <div className={`bg-gradient-to-r ${s.gradient} p-5 flex items-center gap-4`}>
                    <div className={`w-12 h-12 rounded-xl ${s.iconRing} flex items-center justify-center shrink-0`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white leading-snug">{service.title}</h3>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    <p className="text-sm text-neutral-600 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-neutral-100">
                      {service.details.map((detail, dIdx) => (
                        <span
                          key={dIdx}
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${s.chip}`}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-brand-50/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-emerald-300/50 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Interior Design
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-neutral-900 mb-5">
              We <span className="text-gradient-gold">Curate</span> Interior Spaces
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              At Innovate Designers &amp; Builders Pvt Ltd, no project is too small and no design is too big.
              Our expertise helps you create your dream home, bridging your ideas with reality. We inject
              creativity with pragmatism to create stunning, yet functional designs.
            </p>
          </motion.div>

          {/* Room Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Living Area Interior',
                desc: 'Elegant living room designs that reflect your personality — curated lighting, premium seating arrangements, bespoke wallpapers, and statement centrepieces.',
                emoji: '🛋️',
                gradient: 'from-amber-50 to-orange-50',
                border: 'border-amber-200/60',
                tag: 'Most Popular',
              },
              {
                title: 'Dining Room Interior',
                desc: 'Sophisticated dining spaces with custom-built furniture, ambient pendant lighting, accent walls, and floor-to-ceiling design cohesion.',
                emoji: '🍽️',
                gradient: 'from-brand-50 to-sky-50',
                border: 'border-brand-200/60',
                tag: '',
              },
              {
                title: 'Kitchen Interior',
                desc: 'Modular kitchen designs with premium finishes, ergonomic island layouts, chimney placements, and organised storage solutions for modern living.',
                emoji: '🍳',
                gradient: 'from-emerald-50 to-teal-50',
                border: 'border-emerald-200/60',
                tag: '',
              },
              {
                title: 'Bedroom Interior',
                desc: 'Serene, personalised bedroom environments with wardrobe concepts, false ceilings, feature walls, ambient mood lighting, and premium flooring.',
                emoji: '🛏️',
                gradient: 'from-purple-50 to-violet-50',
                border: 'border-purple-200/60',
                tag: '',
              },
              {
                title: "Kids' Room Interior",
                desc: 'Fun, safe, and creative kids room designs with vibrant themes, built-in storage beds, study zones, and durable yet stylish materials.',
                emoji: '🧸',
                gradient: 'from-pink-50 to-rose-50',
                border: 'border-pink-200/60',
                tag: '',
              },
              {
                title: 'Home Theater Interior',
                desc: 'Immersive home theater setups with acoustic panelling, recliner arrangements, projection or OLED screen mounting, and surround sound integration.',
                emoji: '🎬',
                gradient: 'from-slate-100 to-neutral-100',
                border: 'border-neutral-200/60',
                tag: 'Premium',
              },
            ].map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${room.gradient} border ${room.border} rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300 relative overflow-hidden`}
              >
                {room.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-white/70 text-neutral-600 px-2 py-0.5 rounded-full">
                    {room.tag}
                  </span>
                )}
                <div className="text-4xl">{room.emoji}</div>
                <h3 className="font-heading text-lg font-bold text-neutral-900">{room.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{room.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Us Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl border border-brand-100 p-8 lg:p-10 shadow-sm text-center"
          >
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed italic">
              "Turn your house into a home, your office into a haven, or restaurant into a design masterpiece 
              with <strong className="text-brand-700 not-italic">Innovate Designers &amp; Builders</strong>. We 
              bring creativity, craftsmanship, and quality to every interior project we undertake."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Process Timeline ─── */}
      <section className="py-24 bg-gradient-to-br from-neutral-950 via-neutral-900 to-brand-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300 bg-brand-500/15 px-3 py-1 rounded-full">Consultation Process</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mt-4">From Concept to Handover</h2>
            <p className="text-neutral-400 mt-3 max-w-lg mx-auto">A systematic chronological timeline driving each custom build</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              // Color code sequence
              const colors = [
                { border: 'hover:border-brand-500/40', text: 'text-brand-400', number: 'text-brand-500/20 group-hover:text-brand-500/30' },
                { border: 'hover:border-royal-500/40', text: 'text-royal-400', number: 'text-royal-500/20 group-hover:text-royal-500/30' },
                { border: 'hover:border-emerald-500/40', text: 'text-emerald-400', number: 'text-emerald-500/20 group-hover:text-emerald-500/30' },
                { border: 'hover:border-amber-500/40', text: 'text-amber-400', number: 'text-amber-500/20 group-hover:text-amber-500/30' },
                { border: 'hover:border-purple-500/40', text: 'text-purple-400', number: 'text-purple-500/20 group-hover:text-purple-500/30' },
                { border: 'hover:border-blue-500/40', text: 'text-blue-400', number: 'text-blue-500/20 group-hover:text-blue-500/30' }
              ][idx % 6];
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative group ${colors.border} transition-all duration-300 shadow-lg`}
                >
                  <span className={`font-heading text-5xl font-extrabold absolute top-4 right-6 transition-colors ${colors.number}`}>
                    {step.step}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white pr-10 mt-4 group-hover:text-white transition-colors">{step.title}</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed mt-3">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-50/60 via-white to-amber-50/40 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-brand-100/60 shadow-xl p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-50/50 blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-royal-50/50 blur-xl" />
            
            <h3 className="relative z-10 text-2xl lg:text-3xl font-heading font-bold text-neutral-900 mb-4">Have a Custom Project in Mind?</h3>
            <p className="relative z-10 text-neutral-500 max-w-lg mx-auto text-sm mb-8">
              We work with you to understand your lifestyle needs and build a custom home within your budget framework.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-amber-500 hover:from-brand-700 hover:to-amber-600 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-md shadow-brand-200"
              >
                Book Consultation
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+919995365128"
                className="inline-flex items-center gap-2 border-2 border-neutral-200 hover:border-royal-300 text-neutral-700 hover:text-royal-600 text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300"
              >
                <Phone size={13} />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
