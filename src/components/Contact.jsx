import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Mail, MapPin } from 'lucide-react';

// Custom Instagram SVG
function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const steps = [
  { num: '01', text: 'Hubungi kami via WhatsApp' },
  { num: '02', text: 'Ceritakan kebutuhan & brief' },
  { num: '03', text: 'Kami proses & kirim draft' },
  { num: '04', text: 'Revisi hingga kamu puas ✓' },
];

const socials = [
  {
    id: 'wa',
    label: 'WhatsApp',
    handle: '08975187077',
    href: 'https://wa.me/628975187077',
    icon: <MessageCircle size={18} />,
    bg: '#25D366',
    text: '#1228CC',
  },
  {
    id: 'ig',
    label: 'Instagram',
    handle: '@utaravisua.id',
    href: 'https://instagram.com/utaravisua.id',
    icon: <InstagramIcon size={18} />,
    bg: '#E8152A',
    text: '#FFFFFF',
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'utaravisuaid@gmail.com',
    href: 'mailto:utaravisuaid@gmail.com',
    icon: <Mail size={18} />,
    bg: '#1228CC',
    text: '#FFFFFF',
  },
  {
    id: 'location',
    label: 'Location',
    handle: 'Padang, Limau Manih',
    href: '#',
    icon: <MapPin size={18} />,
    bg: '#FFFFFF',
    text: '#1228CC',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white border-t-[3px] border-brand-black overflow-hidden">

      {/* Memphis diagonal stripe accent top */}
      <div className="h-3 bg-brand-black"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #E8152A 0, #E8152A 10px, #1228CC 10px, #1228CC 20px)',
        }}
      />

      {/* Memphis bg shapes */}
      <div className="absolute top-20 right-0 w-48 h-48 bg-brand-blue/20 border-[3px] border-brand-blue/30 rounded-full translate-x-16 pointer-events-none" />
      <div className="absolute bottom-16 left-0 w-32 h-32 bg-brand-red/15 rotate-12 -translate-x-8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 py-20" data-aos="fade-right">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[3px] bg-brand-red" />
            <span className="section-label text-brand-gray">Get In Touch</span>
          </div>
          <h2 className="font-condensed font-black text-7xl sm:text-8xl md:text-9xl text-brand-black leading-none uppercase">
            HUBUNGI
            <br />
            <span style={{ WebkitTextStroke: '3px #1228CC', color: 'transparent' }}>KAMI</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <p className="font-body text-brand-black/70 text-lg leading-relaxed">
              Konsultasi pertama{' '}
              <span
                className="font-condensed font-black text-2xl text-white px-2 inline-block bg-brand-red border-2 border-brand-black"
              >
                GRATIS
              </span>
              {' '}— langsung bahas kebutuhan brand-mu.
            </p>

            {/* Steps — zine numbered list */}
            <div className="space-y-0 border-[3px] border-brand-black">
              {steps.map(({ num, text }, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-0 border-b-[2px] border-brand-black last:border-b-0 group hover:bg-brand-black transition-colors duration-150 cursor-default"
                >
                  <span className="font-display text-3xl text-brand-black/20 group-hover:text-brand-blue w-16 text-center py-4 border-r-[2px] border-brand-black shrink-0 transition-colors duration-150">
                    {num}
                  </span>
                  <p className="font-body text-brand-black group-hover:text-white text-sm px-5 transition-colors duration-150">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* WA Button — big */}
            <a
              href="https://wa.me/628975187077"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-main-wa"
              className="btn-wa w-full justify-center text-base py-5"
            >
              <MessageCircle size={20} />
              CHAT DI WHATSAPP
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="section-label text-brand-gray mb-6">Temukan Kami</p>

            {socials.map((s, i) => (
              <motion.a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`contact-social-${s.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                whileHover={{ x: -4 }}
                className="flex items-center gap-4 border-[3px] border-brand-black p-5 group"
                style={{
                  background: s.bg,
                  color: s.text,
                  boxShadow: '4px 4px 0 #1228CC',
                  transition: 'box-shadow 0.15s, transform 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '6px 6px 0 #1228CC')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0 #1228CC')}
              >
                <div
                  className="w-10 h-10 border-2 flex items-center justify-center shrink-0"
                  style={{ borderColor: s.text }}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-70 mb-0.5">{s.label}</p>
                  <p className="font-condensed font-black text-lg truncate">{s.handle}</p>
                </div>
                <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 shrink-0" />
              </motion.a>
            ))}

            {/* Zine quote block */}
            <div
              className="border-[3px] border-brand-black bg-brand-black text-white p-6 mt-4"
              style={{ boxShadow: '5px 5px 0 #E8152A' }}
            >
              <p className="font-condensed font-black text-2xl sm:text-3xl leading-tight">
                "JANGAN BIARKAN<br />
                BRAND-MU
                <span className="text-brand-red"> TIDAK</span>
                <span className="text-brand-blue"> TERLIHAT."</span>
              </p>
              <p className="font-mono text-white/40 text-[9px] tracking-widest uppercase mt-3">
                — Utara Visua, {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal stripe */}
      <div className="h-3 bg-brand-black"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #1228CC 0, #1228CC 10px, #1228CC 10px, #1228CC 20px)',
        }}
      />
    </section>
  );
}
