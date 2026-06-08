import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, X, Film, Video } from 'lucide-react';
import { youtubeProjects } from './projectsData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Budget Home', 'Economical Home', 'Semi Economical Home', 'Luxury Home'];

  const filteredProjects = activeTab === 'All'
    ? youtubeProjects
    : youtubeProjects.filter(project => project.category === activeTab);

  const cleanTitle = (title) => {
    return title
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/I/g, '|');
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
              Video Portfolio
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Construction <span className="text-gradient-gold">Showcases</span>
            </h1>
            <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Explore walk-through project videos detailing our house and villa constructions across Kerala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter & Grid ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((tab) => {
              const isActive = activeTab === tab;
              // Pick border focus colors
              const tabColorMap = {
                'All': 'from-brand-600 to-amber-500 shadow-brand-500/20',
                'Budget Home': 'from-emerald-600 to-teal-500 shadow-emerald-500/20',
                'Economical Home': 'from-royal-600 to-blue-500 shadow-royal-500/20',
                'Semi Economical Home': 'from-indigo-600 to-purple-500 shadow-indigo-500/20',
                'Luxury Home': 'from-amber-600 to-orange-500 shadow-amber-500/20'
              };
              const gradient = tabColorMap[tab] || 'from-brand-600 to-amber-500 shadow-brand-500/20';
              
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? `bg-gradient-to-r ${gradient} text-white border-transparent shadow-lg scale-105`
                      : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Videos Grid */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white rounded-2xl border border-neutral-100 p-16 text-center max-w-md mx-auto">
              <Film className="mx-auto text-neutral-300 mb-4" size={48} />
              <h3 className="text-xl font-heading font-bold text-neutral-800 mb-2">No Videos Found</h3>
              <p className="text-sm text-neutral-500">We will upload project walkthrough videos for this category soon.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="bg-white rounded-2xl border border-neutral-100 overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-neutral-200/60 hover:border-brand-200 transition-all duration-300"
                    onClick={() => setSelectedVideo(project.id)}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                      <img
                        src={`https://i.ytimg.com/vi/${project.id}/hqdefault.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const img = e.target;
                          const id = project.id;
                          // Cascade: hqdefault -> mqdefault -> sddefault
                          if (img.src.includes('hqdefault')) {
                            img.src = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
                          } else if (img.src.includes('mqdefault')) {
                            img.src = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;
                          } else if (!img.src.includes('sddefault')) {
                            img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                          }
                        }}
                      />

                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Play fill="currentColor" size={18} className="ml-1" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm rounded-full ${
                        project.category === 'Budget Home' ? 'bg-emerald-50/90 text-emerald-700 border border-emerald-250/50' :
                        project.category === 'Economical Home' ? 'bg-royal-50/90 text-royal-700 border border-royal-250/50' :
                        project.category === 'Semi Economical Home' ? 'bg-indigo-50/90 text-indigo-700 border border-indigo-250/50' :
                        'bg-amber-50/90 text-amber-700 border border-amber-250/50'
                      }`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <h3 className="font-heading text-[15px] font-semibold text-neutral-800 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2 mb-3">
                        {cleanTitle(project.title)}
                      </h3>

                      <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Video size={11} /> Watch Video
                        </span>
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-brand-500 flex items-center gap-1 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          YouTube <ExternalLink size={9} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── Video Modal ─── */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-brand-500 text-white flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <X size={18} />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="Project Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
