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
      <section className="pt-32 pb-16 bg-surface-muted bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Photo Gallery</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mt-3 text-gradient">Architectural & Interior Gallery</h1>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
              Browse our actual completed home elevations and modular interior designing projects across Kerala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter & Grid ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(categoryNames).map((catKey) => (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === catKey
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-200'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-800'
                }`}
              >
                {categoryNames[catKey]}
              </button>
            ))}
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
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-[9px] text-brand-400 uppercase font-bold tracking-widest mb-1">
                        {categoryNames[image.category]}
                      </span>
                      <h4 className="text-xs font-heading font-semibold text-white leading-snug line-clamp-2 pr-6">
                        {cleanImageTitle(image.title, image.category)}
                      </h4>
                      <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70">
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
