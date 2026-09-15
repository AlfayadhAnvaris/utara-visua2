import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import logoImg from '../assets/logo.png';

// Memphis / Y2K decorative SVG shapes
function StarBurst({ size = 60, color = '#E8152A', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className}>
      <path
        d="M30 2L34 22L52 10L38 26L58 30L38 34L52 50L34 38L30 58L26 38L8 50L22 34L2 30L22 26L8 10L26 22Z"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
      />
    </svg>
  );
}

function Squiggle({ color = '#0D0D0D', width = 80 }) {
  return (
    <svg width={width} height="16" viewBox={`0 0 ${width} 16`} fill="none">
      <path
        d={`M0 8 Q${width * 0.083} 0 ${width * 0.167} 8 Q${width * 0.25} 16 ${width * 0.333} 8 Q${width * 0.417} 0 ${width * 0.5} 8 Q${width * 0.583} 16 ${width * 0.667} 8 Q${width * 0.75} 0 ${width * 0.833} 8 Q${width * 0.917} 16 ${width} 8`}
        stroke={color} strokeWidth="3" strokeLinecap="round"
      />
    </svg>
  );
}

const MARQUEE_ITEMS = [
  '★ DESIGN POSTER', '// DIGITAL AGENCY', '★ VISUAL CREATOR',
  '// BRAND IDENTITY', '★ CETAK PREMIUM', '// UMKM GROWTH',
  '★ DESIGN POSTER', '// DIGITAL AGENCY', '★ VISUAL CREATOR',
  '// BRAND IDENTITY', '★ CETAK PREMIUM', '// UMKM GROWTH',
];

const MARQUEE_ITEMS_2 = [
  '◆ UTARA VISUA', '— SINCE 2026', '◆ MALANG', '— INDONESIA',
  '◆ 5 PROJECTS', '— CREATIVE STUDIO', '◆ UTARA VISUA', '— SINCE 2026',
  '◆ MALANG', '— INDONESIA', '◆ 5 PROJECTS', '— CREATIVE STUDIO',
];

export default function Hero() {
  const handleScrollDown = () =>
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-16">

      {/* ── Memphis background shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Big red circle top-right */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-red/20 border-[3px] border-brand-red/30" />
        {/* Yellow square bottom-left */}
        <div className="absolute bottom-40 -left-12 w-48 h-48 bg-brand-blue/30 border-[3px] border-brand-blue rotate-12" />
        {/* Blue triangle */}
        <div className="absolute top-1/3 right-8 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-brand-blue/20" />
        {/* Halftone dots strip */}
        <div
          className="absolute left-0 right-0 bottom-24 h-16 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #0D0D0D 2px, transparent 2px)',
            backgroundSize: '16px 16px',
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col flex-1 justify-center items-center text-center px-5 py-16">

        {/* Floating decorative stars */}
        <motion.div
          animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-28 left-8 md:left-24 hidden sm:block"
        >
          <StarBurst size={44} color="#FFE500" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute top-36 right-8 md:right-24 hidden sm:block"
        >
          <StarBurst size={36} color="#1228CC" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-36 left-16 hidden md:block"
        >
          <StarBurst size={28} color="#E8152A" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5 max-w-4xl mx-auto"
        >

          {/* Top badge — DIY Zine style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="punk-tag-fill-red">
              ★ Digital Creative Agency ★
            </span>
          </motion.div>

          {/* LOGO — main hero focal point */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Logo on a white card with thick border — zine style */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative inline-block bg-white border-[3px] border-brand-black px-8 py-6"
              style={{ boxShadow: '8px 8px 0 #0D0D0D' }}
            >
              <img
                src={logoImg}
                alt="Utara Visua"
                className="w-56 sm:w-72 md:w-80 h-auto object-contain"
              />
              {/* Small corner decorations */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-red border border-brand-black" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand-blue border border-brand-black" />
            </motion.div>
          </motion.div>

          {/* Tagline — Editorial bold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-1"
          >
            <h1 className="font-condensed font-black text-5xl sm:text-6xl md:text-7xl text-brand-black leading-none tracking-tight uppercase">
              UTARAKAN
              <span className="text-brand-red"> IDEMU</span>
              <br />
              <span className="relative inline-block">
                VISUALKAN <span className="text-brand-red"></span>
                {/* Underline squiggle */}
                <span className="absolute -bottom-3 left-0 right-0 flex justify-center">
                  <Squiggle color="#E8152A" width={280} />
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Sub tagline */}


          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-brand-black/70 text-sm max-w-sm leading-relaxed"
          >
            Kami bantu UMKM kamu bicara lewat desain poster yang{' '}
            <strong className="text-brand-black">komunikatif & berkarakter</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              id="hero-cta-portfolio"
              className="btn-punk"
            >
              LIHAT KARYA KAMI
            </button>
            <a
              href="https://wa.me/628975187077"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-wa"
              className="btn-punk-outline"
            >
              ORDER SEKARANG
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Marquee Ticker Row 1 — Black bg ── */}
      <div className="relative z-10 bg-brand-black border-t-[3px] border-b-[3px] border-brand-black py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="font-condensed font-black text-white text-lg tracking-[0.2em] px-6 whitespace-nowrap uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee Ticker Row 2 — Red bg ── */}
      <div className="relative z-10 bg-brand-red border-b-[3px] border-brand-black py-2.5 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track-rev">
            {MARQUEE_ITEMS_2.map((item, i) => (
              <span key={i} className="font-mono text-white text-xs tracking-[0.25em] px-5 whitespace-nowrap uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll CTA */}
      <button
        onClick={handleScrollDown}
        id="hero-scroll-down"
        className="absolute bottom-36 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-black/40 hover:text-brand-black transition-colors duration-300"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.div>
      </button>
    </section>
  );
}
