import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Calendar, Tag, Package } from 'lucide-react';
import { projects, categories } from '../data/projects';

// Color sets for placeholder cards — Y2K palette
const PLACEHOLDER_COLORS = [
  { bg: '#E8152A', text: '#F5EDD8', accent: '#FFE500' },
  { bg: '#FFE500', text: '#0D0D0D', accent: '#E8152A' },
  { bg: '#1228CC', text: '#F5EDD8', accent: '#FFE500' },
  { bg: '#0D0D0D', text: '#F5EDD8', accent: '#E8152A' },
  { bg: '#F5EDD8', text: '#0D0D0D', accent: '#1228CC' },
  { bg: '#9B30FF', text: '#F5EDD8', accent: '#FFE500' },
  { bg: '#2ECC40', text: '#0D0D0D', accent: '#E8152A' },
  { bg: '#E8152A', text: '#F5EDD8', accent: '#1228CC' },
];

// Memphis SVG patterns for placeholders
function PlaceholderCard({ project, index, colorSet }) {
  const { bg, text, accent } = colorSet;

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{ background: bg, minHeight: '100%' }}
    >
      {/* Memphis background pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        {/* Squiggles */}
        <path d="M0 30 Q15 15 30 30 Q45 45 60 30 Q75 15 90 30" stroke={text} strokeWidth="2" fill="none" />
        <path d="M0 70 Q15 55 30 70 Q45 85 60 70 Q75 55 90 70" stroke={text} strokeWidth="2" fill="none" />
        {/* Dots */}
        <circle cx="20" cy="20" r="4" fill={accent} />
        <circle cx="80" cy="50" r="6" fill={accent} />
        <circle cx="50" cy="80" r="3" fill={accent} />
        {/* Triangle */}
        <polygon points="130,10 145,35 115,35" fill={accent} opacity="0.6" />
        {/* Rectangle */}
        <rect x="100" y="60" width="20" height="20" fill={text} opacity="0.15" transform="rotate(15 110 70)" />
        {/* Star */}
        <text x="10" y="100" fontSize="24" fill={accent} opacity="0.5">★</text>
        <text x="120" y="30" fontSize="16" fill={text} opacity="0.3">◆</text>
      </svg>

      {/* Center number */}
      <span
        className="relative z-10 font-display text-8xl leading-none select-none"
        style={{ color: text, opacity: 0.15 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Category tag floating */}
      <div
        className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.25em] uppercase px-2 py-1 border-2"
        style={{ borderColor: text, color: text, background: 'transparent' }}
      >
        {project.tag}
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-condensed font-black text-lg leading-tight uppercase" style={{ color: text }}>
          {project.title}
        </p>
        <p className="font-mono text-[9px] tracking-widest uppercase mt-1 opacity-70" style={{ color: text }}>
          {project.client}
        </p>
      </div>

      {/* Year stamp */}
      <div
        className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest opacity-60"
        style={{ color: text }}
      >
        {project.year}
      </div>
    </div>
  );
}

function ProjectModal({ project, colorSet, onClose }) {
  const { bg, text, accent } = colorSet;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(13,13,13,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
      id="project-modal-backdrop"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto border-[3px] border-brand-black bg-brand-cream"
        style={{ boxShadow: '10px 10px 0 #0D0D0D' }}
        id="project-modal-content"
      >
        {/* Close */}
        <button
          onClick={onClose}
          id="project-modal-close"
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-black text-brand-cream flex items-center justify-center hover:bg-brand-red transition-colors duration-150 border-2 border-brand-black"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Placeholder "image" */}
          <div className="relative overflow-hidden aspect-square md:aspect-auto" style={{ minHeight: 280 }}>
            <PlaceholderCard project={project} index={project.id - 1} colorSet={colorSet} />
          </div>

          {/* Details */}
          <div className="p-7 flex flex-col gap-5">
            <div
              className="inline-block self-start font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 border-2 border-brand-black"
              style={{ background: bg, color: text }}
            >
              {project.tag}
            </div>

            <div>
              <h2 className="font-condensed font-black text-3xl sm:text-4xl text-brand-black leading-tight uppercase">
                {project.title}
              </h2>
              <p className="font-mono text-brand-gray text-xs tracking-widest uppercase mt-1.5">
                {project.client}
              </p>
            </div>

            <div className="h-[2px] bg-brand-black" />

            <p className="font-body text-brand-black/80 text-sm leading-relaxed">{project.description}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="border-2 border-brand-black p-3">
                <p className="font-mono text-[9px] tracking-widest text-brand-gray uppercase mb-1">Tahun</p>
                <p className="font-condensed font-black text-xl text-brand-black">{project.year}</p>
              </div>
              <div className="border-2 border-brand-black p-3">
                <p className="font-mono text-[9px] tracking-widest text-brand-gray uppercase mb-1">Kategori</p>
                <p className="font-condensed font-black text-xl text-brand-black">{project.category}</p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[9px] tracking-widest text-brand-gray uppercase mb-2">Deliverables</p>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((d) => (
                  <span key={d} className="font-mono text-[9px] tracking-widest px-2.5 py-1.5 border-2 border-brand-black text-brand-black uppercase">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-[2px] bg-brand-black mt-auto" />

            <a
              href="https://wa.me/6289514448174"
              target="_blank"
              rel="noopener noreferrer"
              id="modal-cta-wa"
              className="btn-punk w-full justify-center"
            >
              ORDER PROJECT SERUPA
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedColorSet, setSelectedColorSet] = useState(null);

  const filtered =
    activeCategory === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleOpen = (project, colorSet) => {
    setSelectedProject(project);
    setSelectedColorSet(colorSet);
  };

  return (
    <section id="portfolio" className="relative py-20 bg-brand-cream overflow-hidden">
      {/* Top torn/border accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-black" />

      {/* Memphis decorative shape bg */}
      <div className="absolute top-12 right-0 w-40 h-40 bg-brand-yellow/25 border-[3px] border-brand-yellow/40 rotate-12 -translate-y-12 translate-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[3px] bg-brand-red" />
            <span className="section-label text-brand-gray">Our Work</span>
          </div>
          <h2 className="font-condensed font-black text-7xl sm:text-8xl md:text-9xl text-brand-black leading-none uppercase">
            PORTO<br />
            <span
              className="text-brand-cream"
              style={{
                WebkitTextStroke: '3px #0D0D0D',
              }}
            >
              FOLIO
            </span>
          </h2>
          <p className="font-body text-brand-black/60 mt-4 max-w-md text-sm leading-relaxed">
            Koleksi karya terbaik kami untuk berbagai brand UMKM — fashion, F&B, hingga event.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border-2 border-brand-black transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-brand-black text-brand-cream'
                  : 'bg-transparent text-brand-black hover:bg-brand-black hover:text-brand-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const colorSet = PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleOpen(project, colorSet)}
                  id={`project-card-${project.id}`}
                  className="group relative cursor-pointer border-[3px] border-brand-black overflow-hidden -mt-[3px] -ml-[3px]"
                  style={{ aspectRatio: '3/4' }}
                  whileHover={{ zIndex: 10, scale: 1.02 }}
                >
                  <PlaceholderCard project={project} index={i} colorSet={colorSet} />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-cream border-2 border-brand-black px-4 py-2 flex items-center gap-2"
                      style={{ boxShadow: '3px 3px 0 #0D0D0D' }}>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-brand-black">Detail</span>
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14 pt-10 border-t-[3px] border-brand-black"
        >
          <p className="font-mono text-brand-black/50 text-xs tracking-widest uppercase mb-5">
            PUNYA PROJECT YANG INGIN DIVISUALKAN?
          </p>
          <a
            href="https://wa.me/6289514448174"
            target="_blank"
            rel="noopener noreferrer"
            id="portfolio-cta-wa"
            className="btn-punk"
          >
            DISKUSI PROJECT KAMU
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && selectedColorSet && (
          <ProjectModal
            project={selectedProject}
            colorSet={selectedColorSet}
            onClose={() => { setSelectedProject(null); setSelectedColorSet(null); }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
