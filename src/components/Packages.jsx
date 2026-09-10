import { motion } from 'framer-motion';
import { Check, X, MessageCircle } from 'lucide-react';
import { packages } from '../data/packages';

const cardStyles = [
  {
    bg: 'bg-brand-cream',
    text: 'text-brand-black',
    badge: 'punk-tag-fill-blue',
    btn: 'btn-punk-outline',
    border: 'border-brand-black',
    shadow: '5px 5px 0 #0D0D0D',
    checkColor: 'text-brand-blue',
    accent: '#1228CC',
  },
  {
    bg: 'bg-brand-red',
    text: 'text-brand-cream',
    badge: 'punk-tag-fill-yellow',
    btn: 'btn-punk-yellow',
    border: 'border-brand-black',
    shadow: '5px 5px 0 #FFE500',
    checkColor: 'text-brand-yellow',
    accent: '#FFE500',
  },
  {
    bg: 'bg-brand-black',
    text: 'text-brand-cream',
    badge: 'punk-tag-fill-red',
    btn: 'btn-punk',
    border: 'border-brand-cream/30',
    shadow: '5px 5px 0 #E8152A',
    checkColor: 'text-brand-red',
    accent: '#E8152A',
  },
];

// Starburst decoration
function StarBurst({ size = 50, color = '#FFE500' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path
        d="M30 2L34 22L52 10L38 26L58 30L38 34L52 50L34 38L30 58L26 38L8 50L22 34L2 30L22 26L8 10L26 22Z"
        fill={color} stroke="#0D0D0D" strokeWidth="2"
      />
    </svg>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden bg-brand-yellow border-t-[3px] border-brand-black">

      {/* Memphis polka dot bg */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0D0D0D 2px, transparent 2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative starbursts */}
      <motion.div
        animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 hidden md:block"
      >
        <StarBurst size={64} color="#E8152A" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <StarBurst size={48} color="#1228CC" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-5 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[3px] bg-brand-black" />
            <span className="section-label text-brand-black/60">Pricing</span>
          </div>
          <h2 className="font-condensed font-black text-7xl sm:text-8xl md:text-9xl text-brand-black leading-none uppercase">
            PAKET
            <br />
            <span style={{ WebkitTextStroke: '3px #0D0D0D', color: 'transparent' }}>
              LAYANAN
            </span>
          </h2>
          <p className="font-body text-brand-black/60 mt-4 max-w-md text-sm leading-relaxed">
            Pilih paket sesuai kebutuhan. Semua termasuk konsultasi gratis sebelum mulai.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => {
            const style = cardStyles[i] || cardStyles[0];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
                id={`package-card-${pkg.id}`}
                className={`relative ${style.bg} ${style.text} border-[3px] border-brand-black p-7 flex flex-col gap-5`}
                style={{ boxShadow: style.shadow }}
              >
                {/* Popular badge */}
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="punk-tag-fill-yellow text-xs px-4 py-1.5 font-black">
                      ★ POPULER ★
                    </span>
                  </div>
                )}

                {/* Package number watermark */}
                <span
                  className="absolute top-4 right-5 font-display text-7xl leading-none opacity-10"
                  style={{ color: style.accent }}
                >
                  {pkg.id}
                </span>

                {/* Header */}
                <div>
                  <span className={`${style.badge} text-xs mb-4 inline-block`}>{pkg.tagline}</span>
                  <h3 className="font-condensed font-black text-5xl leading-none uppercase mt-2">
                    {pkg.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-[2px] bg-current opacity-15" />

                {/* Feature List */}
                <ul className="space-y-2.5 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check size={14} className={`shrink-0 ${style.checkColor}`} />
                      ) : (
                        <X size={14} className="shrink-0 opacity-30" />
                      )}
                      <span className={`font-body text-sm ${!feature.included ? 'opacity-30 line-through' : ''}`}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="font-body text-xs opacity-60 leading-relaxed border-t border-current/10 pt-4">
                  {pkg.description}
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/6289514448174"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`package-cta-${pkg.id}`}
                  className={`${style.btn} w-full justify-center`}
                >
                  <MessageCircle size={15} />
                  ORDER NOW
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-mono text-brand-black/50 text-[10px] tracking-widest uppercase mt-12"
        >
          * Harga menyesuaikan kompleksitas project. Hubungi kami untuk detail.
        </motion.p>
      </div>
    </section>
  );
}
