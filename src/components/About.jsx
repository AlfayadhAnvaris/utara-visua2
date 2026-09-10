import { motion } from 'framer-motion';
import { team } from '../data/team';

// Silhouette placeholder avatar — pure SVG, no photos/emojis
function AvatarPlaceholder({ index }) {
  const colors = [
    { bg: '#E8152A', fill: '#F5EDD8' },
    { bg: '#1228CC', fill: '#F5EDD8' },
    { bg: '#FFE500', fill: '#0D0D0D' },
    { bg: '#0D0D0D', fill: '#F5EDD8' },
    { bg: '#9B30FF', fill: '#F5EDD8' },
    { bg: '#2ECC40', fill: '#0D0D0D' },
    { bg: '#E8152A', fill: '#FFE500' },
    { bg: '#1228CC', fill: '#FFE500' },
  ];
  const { bg, fill } = colors[index % colors.length];

  return (
    <div
      className="w-20 h-20 border-[3px] border-brand-black overflow-hidden flex items-end justify-center"
      style={{ background: bg }}
    >
      {/* Human silhouette SVG */}
      <svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="95" rx="22" ry="18" fill={fill} opacity="0.9" />
        {/* Head */}
        <circle cx="40" cy="52" r="14" fill={fill} opacity="0.9" />
        {/* Collar */}
        <path d="M28 68 Q40 75 52 68" stroke={fill} strokeWidth="2" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
}

const targets = [
  { label: 'UMKM Food & Beverages', mark: '01' },
  { label: 'Fashion & Apparel', mark: '02' },
  { label: 'Event & Festival', mark: '03' },
];

const values = [
  { mark: 'A', title: 'FAST DELIVERY', desc: 'Hasil cepat tanpa kompromi kualitas.' },
  { mark: 'B', title: 'ON-BRAND', desc: 'Setiap desain sesuai karakter brand-mu.' },
  { mark: 'C', title: 'FULL TEAM', desc: 'Desainer, copywriter, QC dalam satu paket.' },
];

// Memphis squiggle divider
function SquiggleDivider({ color = '#0D0D0D' }) {
  return (
    <svg width="100%" height="16" viewBox="0 0 400 16" preserveAspectRatio="none" fill="none">
      <path
        d="M0 8 Q12.5 0 25 8 Q37.5 16 50 8 Q62.5 0 75 8 Q87.5 16 100 8 Q112.5 0 125 8 Q137.5 16 150 8 Q162.5 0 175 8 Q187.5 16 200 8 Q212.5 0 225 8 Q237.5 16 250 8 Q262.5 0 275 8 Q287.5 16 300 8 Q312.5 0 325 8 Q337.5 16 350 8 Q362.5 0 375 8 Q387.5 16 400 8"
        stroke={color} strokeWidth="2.5" strokeLinecap="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">

      {/* ── Block 1: Black bg — Who We Are ── */}
      <div className="bg-brand-black text-brand-cream py-20 border-b-[3px] border-brand-black relative overflow-hidden">
        {/* Memphis bg shapes */}
        <div className="absolute top-8 right-8 w-32 h-32 rounded-full border-[3px] border-brand-yellow/30 pointer-events-none" />
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-brand-red/20 rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-7"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-[3px] bg-brand-red" />
                  <span className="section-label text-brand-gray">Who We Are</span>
                </div>
                <h2 className="font-condensed font-black text-7xl sm:text-8xl text-brand-cream leading-none uppercase">
                  TENTANG
                  <br />
                  <span style={{ WebkitTextStroke: '2px #F5EDD8', color: 'transparent' }}>KAMI</span>
                </h2>
              </div>

              <div className="bg-brand-red border-[3px] border-brand-yellow p-5">
                <p className="font-mono text-[10px] tracking-[0.3em] text-brand-yellow uppercase mb-3">
                  UTARA VISUA.ID
                </p>
                <p className="font-body text-brand-cream text-base leading-relaxed">
                  Digital Creative Agency yang membantu UMKM menyampaikan pesan promosi melalui desain poster digital yang{' '}
                  <strong>menarik, komunikatif,</strong> dan sesuai karakter brand-mu.
                </p>
              </div>

              <div className="space-y-0">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start border-b border-brand-cream/10 py-4 group"
                  >
                    <span className="font-display text-4xl text-brand-yellow/30 group-hover:text-brand-yellow transition-colors duration-300 w-8 shrink-0">
                      {v.mark}
                    </span>
                    <div>
                      <p className="font-condensed font-black text-lg text-brand-cream tracking-wide uppercase">{v.title}</p>
                      <p className="font-body text-brand-cream/60 text-sm mt-0.5">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Target + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Big quote — Punk editorial */}
              <div
                className="border-[3px] border-brand-cream/20 p-7 bg-brand-cream/5 relative"
              >
                <span className="font-display text-8xl text-brand-yellow/20 absolute top-0 left-4 leading-none">"</span>
                <p className="font-condensed font-black text-3xl sm:text-4xl text-brand-cream leading-tight mt-4">
                  UTARAKAN IDEMU,
                  <span className="text-brand-red"> VISUALKAN</span>
                  <span className="text-brand-yellow"> PESANMU.</span>
                </p>
              </div>

              {/* Target Clients */}
              <div>
                <p className="section-label text-brand-gray mb-4">Target Client</p>
                <div className="space-y-2">
                  {targets.map((t, i) => (
                    <motion.div
                      key={t.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.15 }}
                      className="flex items-center gap-4 border-[2px] border-brand-cream/10 bg-brand-cream/5 px-5 py-4 hover:border-brand-yellow hover:bg-brand-yellow/10 transition-all duration-200 group cursor-default"
                    >
                      <span className="font-mono text-[10px] text-brand-yellow/60 group-hover:text-brand-yellow w-6 transition-colors">{t.mark}</span>
                      <p className="font-condensed font-black text-xl text-brand-cream group-hover:text-brand-yellow transition-colors duration-200">{t.label}</p>
                      <span className="ml-auto text-brand-cream/20 group-hover:text-brand-yellow text-lg transition-colors">→</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: '2023', l: 'Berdiri', c: 'bg-brand-red' },
                  { n: '8', l: 'Tim Aktif', c: 'bg-brand-blue' },
                  { n: '50+', l: 'Projects', c: 'bg-brand-yellow text-brand-black' },
                  { n: 'UMKM', l: 'Focus', c: 'bg-brand-cream text-brand-black' },
                ].map(({ n, l, c }) => (
                  <div key={l} className={`${c} border-[3px] border-brand-cream/20 p-4`}>
                    <p className="font-display text-3xl leading-none">{n}</p>
                    <p className="font-mono text-[9px] tracking-widest uppercase mt-1 opacity-70">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Squiggle divider ── */}
      <div className="bg-brand-red py-1">
        <SquiggleDivider color="#FFE500" />
      </div>

      {/* ── Block 2: Cream bg — Team ── */}
      <div className="bg-brand-cream py-20 border-t-[3px] border-brand-black">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-[3px] bg-brand-black" />
              <span className="section-label text-brand-gray">The Crew</span>
            </div>
            <h3 className="font-condensed font-black text-7xl sm:text-8xl text-brand-black leading-none uppercase">
              THE
              <span
                className="ml-3"
                style={{ WebkitTextStroke: '3px #0D0D0D', color: 'transparent' }}
              >
                TEAM
              </span>
            </h3>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
            {team.map((member, i) => {
              const bgColors = ['#E8152A','#1228CC','#FFE500','#0D0D0D','#9B30FF','#2ECC40','#E8152A','#1228CC'];
              const textColors = ['#F5EDD8','#F5EDD8','#0D0D0D','#F5EDD8','#F5EDD8','#0D0D0D','#FFE500','#FFE500'];
              const bg = bgColors[i % bgColors.length];
              const txtColor = textColors[i % textColors.length];

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="group border-[3px] border-brand-black -mt-[3px] -ml-[3px] p-5 flex flex-col items-center text-center gap-4 cursor-default transition-all duration-200 hover:z-10 hover:scale-105 relative"
                  style={{ background: bg }}
                >
                  {/* Avatar Placeholder */}
                  <AvatarPlaceholder index={i} />

                  {/* Name & Role */}
                  <div>
                    <p className="font-condensed font-black text-xl leading-none uppercase" style={{ color: txtColor }}>
                      {member.name}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase mt-1.5 opacity-70" style={{ color: txtColor }}>
                      {member.role}
                    </p>
                  </div>

                  {/* Index number watermark */}
                  <span
                    className="absolute bottom-2 right-3 font-display text-5xl leading-none opacity-10"
                    style={{ color: txtColor }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
