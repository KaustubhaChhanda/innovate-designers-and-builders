import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { galleryCategories } from './projectsData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);

  const categoryNames = {
    'all': 'All Spaces',
    'box-type': 'Box Type',
    'colonial': 'Colonial',
    'contemporary': 'Contemporary',
    'curved-roof': 'Curved Roof',
    'single-storey': 'Single Storey',
    'traditional-contemporary': 'Traditional Mix',
    'western-type': 'Western',
    'interior': 'Interior'
  };

  const getAllImages = () => {
    let all = [];
    Object.keys(galleryCategories).forEach(cat => {
      all = [...all, ...galleryCategories[cat].map(img => ({ ...img, category: cat }))];
    });
    return all;
  };

  const imagesToDisplay = activeCategory === 'all'
    ? getAllImages()
    : (galleryCategories[activeCategory] || []).map(img => ({ ...img, category: activeCategory }));

  const openLightbox = (index) => {
    setLightboxImages(imagesToDisplay);
    setLightboxIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const cleanImageTitle = (title, cat) => {
    let clean = title
      .replace(/innovate-builders-/gi, '')
      .replace(new RegExp(cat + '-', 'gi'), '')
      .replace(/-1024x555/gi, '')
      .replace(/-300x163/gi, '')
      .replace(/-/g, ' ');
    return clean.replace(/\b\w/g, c => c.toUpperCase());
  };

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
              Photo Gallery
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Design & Architecture <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Browse our actual completed home elevations and modular interior designing projects across Kerala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter & Grid ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-5xl mx-auto">
            {Object.keys(categoryNames).map((catKey) => {
              const isActive = activeCategory === catKey;
              // Fully static class strings — Tailwind v4 requires complete class names for purging
              const pillColors = {
                'all': {
                  active:   'bg-brand-50 border-brand-400 text-brand-700',
                  inactive: 'bg-brand-50/0 border-neutral-200 text-neutral-500 hover:border-brand-400 hover:text-brand-700 hover:bg-brand-50',
                },
                'interior': {
                  active:   'bg-emerald-50 border-emerald-400 text-emerald-700',
                  inactive: 'bg-emerald-50/0 border-neutral-200 text-neutral-500 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50',
                },
                'box-type': {
                  active:   'bg-blue-50 border-blue-400 text-blue-700',
                  inactive: 'bg-blue-50/0 border-neutral-200 text-neutral-500 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50',
                },
                'colonial': {
                  active:   'bg-amber-50 border-amber-400 text-amber-700',
                  inactive: 'bg-amber-50/0 border-neutral-200 text-neutral-500 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50',
                },
                'contemporary': {
                  active:   'bg-indigo-50 border-indigo-400 text-indigo-700',
                  inactive: 'bg-indigo-50/0 border-neutral-200 text-neutral-500 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50',
                },
                'curved-roof': {
                  active:   'bg-rose-50 border-rose-400 text-rose-700',
                  inactive: 'bg-rose-50/0 border-neutral-200 text-neutral-500 hover:border-rose-400 hover:text-rose-700 hover:bg-rose-50',
                },
                'single-storey': {
                  active:   'bg-teal-50 border-teal-400 text-teal-700',
                  inactive: 'bg-teal-50/0 border-neutral-200 text-neutral-500 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50',
                },
                'traditional-contemporary': {
                  active:   'bg-orange-50 border-orange-400 text-orange-700',
                  inactive: 'bg-orange-50/0 border-neutral-200 text-neutral-500 hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50',
                },
                'western-type': {
                  active:   'bg-violet-50 border-violet-400 text-violet-700',
                  inactive: 'bg-violet-50/0 border-neutral-200 text-neutral-500 hover:border-violet-400 hover:text-violet-700 hover:bg-violet-50',
                },
              };
              const c = pillColors[catKey] || pillColors['all'];
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategory(catKey)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer border ${
                    isActive ? `${c.active} scale-105 shadow-sm` : c.inactive
                  }`}
                >
                  {categoryNames[catKey]}
                </button>
              );
            })}
          </div>



          {/* Count Label */}
          <div className="text-right text-[11px] text-neutral-400 mb-4 font-medium uppercase tracking-wider">
            {imagesToDisplay.length} Assets in {categoryNames[activeCategory]}
          </div>

          {/* Photos Grid */}
          {imagesToDisplay.length === 0 ? (
            <div className="bg-white rounded-2xl border border-neutral-100 p-16 text-center max-w-md mx-auto">
              <ImageIcon className="mx-auto text-neutral-300 mb-4" size={48} />
              <h3 className="text-xl font-heading font-bold text-neutral-800 mb-2">No Assets Found</h3>
              <p className="text-sm text-neutral-500">Please check back later, we are updating our galleries.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <AnimatePresence mode="popLayout">
                {imagesToDisplay.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.01 }}
                    className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3] bg-neutral-100"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-[0.45]"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-neutral-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-[9px] text-amber-400 uppercase font-extrabold tracking-widest mb-1">
                        {categoryNames[image.category]}
                      </span>
                      <h4 className="text-xs font-heading font-bold text-white leading-snug line-clamp-2 pr-6">
                        {cleanImageTitle(image.title, image.category)}
                      </h4>
                      <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white shadow-sm">
                        <ZoomIn size={12} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-20 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <div className="relative max-w-5xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightboxIndex}
                src={lightboxImages[lightboxIndex].src}
                alt={lightboxImages[lightboxIndex].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <span className="text-[10px] uppercase tracking-widest text-brand-400 font-bold block mb-1">
                  {categoryNames[lightboxImages[lightboxIndex].category]}
                </span>
                <p className="text-sm font-semibold text-white">
                  {cleanImageTitle(lightboxImages[lightboxIndex].title, lightboxImages[lightboxIndex].category)}
                </p>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  {lightboxIndex + 1} / {lightboxImages.length}
                </span>
              </div>

              {/* Close */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-brand-500 text-white flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 z-20 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
