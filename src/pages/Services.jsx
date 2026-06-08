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
      <section className="pt-32 pb-16 bg-surface-muted bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Expertise</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mt-3 text-gradient">Our Services</h1>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
              Complete solution for house design, structural engineering, civil construction, and interior furnishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Services List ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-neutral-100 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-heading font-bold text-neutral-900">{service.title}</h2>
              </div>

              {/* Description */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-neutral-100">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-sm text-neutral-700">
                      <ChevronRight size={13} className="text-brand-500 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Process Timeline ─── */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-brand-500/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">Consultation Process</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mt-3">From Concept to Handover</h2>
            <p className="text-neutral-400 mt-3 max-w-lg mx-auto">A systematic chronological timeline driving each custom build</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative group hover:border-brand-500/30 transition-all duration-300"
              >
                <span className="font-heading text-5xl font-extrabold text-brand-500/15 absolute top-4 right-6 group-hover:text-brand-500/25 transition-colors">
                  {step.step}
                </span>
                <h4 className="font-heading text-lg font-bold text-white pr-10 mt-4">{step.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed mt-3">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-neutral-100 shadow-lg p-10 lg:p-14"
          >
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-neutral-900 mb-4">Have a Custom Project in Mind?</h3>
            <p className="text-neutral-500 max-w-lg mx-auto text-sm mb-8">
              We work with you to understand your lifestyle needs and build a custom home within your budget framework.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-md"
              >
                Book Consultation
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+919995365128"
                className="inline-flex items-center gap-2 border border-neutral-200 hover:border-brand-300 text-neutral-700 hover:text-brand-600 text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300"
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
