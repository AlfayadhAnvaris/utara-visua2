import { MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

// Custom Instagram SVG
function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="footer" className="bg-brand-black border-t-[3px] border-brand-black">

      {/* Stripe top accent */}
      <div
        className="h-4 bg-brand-yellow border-b-[3px] border-brand-black"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #FFE500 0, #FFE500 24px, #E8152A 24px, #E8152A 48px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand Column */}
          <div className="space-y-5">
            {/* Logo — white bg card */}
            <div
              className="inline-block bg-white border-[3px] border-brand-cream/20 px-5 py-3"
              style={{ boxShadow: '4px 4px 0 #E8152A' }}
            >
              <img src={logoImg} alt="Utara Visua" className="h-10 w-auto object-contain" />
            </div>
            <p className="font-body text-brand-cream/60 text-sm leading-relaxed max-w-xs">
              Digital Creative Agency untuk UMKM yang ingin tampil lebih profesional.
            </p>
            {/* Big quote */}
            <p className="font-condensed font-black text-2xl text-brand-red leading-tight">
              "UTARAKAN IDEMU,<br />
              <span className="text-brand-yellow">VISUALKAN PESANMU."</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-brand-cream/40 uppercase mb-6">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="font-condensed font-black text-xl text-brand-cream hover:text-brand-yellow transition-colors duration-150 text-left flex items-center gap-2 group"
                  >
                    <span className="w-4 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-brand-cream/40 uppercase mb-6">
              Social
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/6289514448174"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-wa-link"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border-2 border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-brand-black transition-all duration-150">
                  <MessageCircle size={14} />
                </div>
                <span className="font-body text-brand-cream/60 group-hover:text-brand-cream text-sm transition-colors">+62 895-1444-8174</span>
              </a>

              <a
                href="https://instagram.com/utara.visua"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-ig-link"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border-2 border-brand-red/30 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-brand-cream transition-all duration-150">
                  <InstagramIcon size={14} />
                </div>
                <span className="font-body text-brand-cream/60 group-hover:text-brand-cream text-sm transition-colors">@utara.visua</span>
              </a>
            </div>

            {/* DIY stamp */}
            <div className="mt-8 inline-block">
              <div
                className="border-[3px] border-brand-yellow/50 px-5 py-3 rotate-[-4deg] inline-block"
                style={{ boxShadow: '3px 3px 0 #E8152A' }}
              >
                <p className="font-display text-brand-yellow text-base tracking-[0.3em]">CERTIFIED</p>
                <p className="font-mono text-brand-yellow/50 text-[9px] tracking-[0.35em]">UTARA VISUA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-brand-cream/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="font-mono text-brand-cream/30 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Utara Visua. All rights reserved.
          </p>
          <p className="font-mono text-brand-cream/20 text-[10px] tracking-widest uppercase">
            Made for UMKM Indonesia ★
          </p>
        </div>
      </div>
    </footer>
  );
}
