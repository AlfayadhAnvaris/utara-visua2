import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#packages', label: 'Packages' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white border-b-[3px] border-brand-black py-2'
            : 'bg-white/90 backdrop-blur-sm py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick('#hero')} className="group" id="nav-logo-btn">
            <img
              src={logoImg}
              alt="Utara Visua"
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    id={`nav-${link.label.toLowerCase()}`}
                    className={`font-mono text-[11px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-150 border-2 ${isActive
                        ? 'bg-brand-black text-white border-brand-black'
                        : 'text-brand-black border-transparent hover:border-brand-black'
                      }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/628975187077"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-wa"
            className="hidden md:flex btn-punk text-xs py-2.5 px-5"
          >
            ORDER NOW
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            id="nav-mobile-toggle"
            className="md:hidden w-10 h-10 border-2 border-brand-black flex items-center justify-center bg-white hover:bg-brand-black hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-8 flex flex-col"
            id="mobile-menu"
            style={{ borderBottom: '3px solid #1228CC' }}
          >
            {/* Memphis decorative dots */}
            <div className="absolute top-24 right-8 flex gap-2">
              {['bg-brand-red', 'bg-brand-blue', 'bg-brand-blue'].map((c, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${c} border border-brand-black`} />
              ))}
            </div>

            <ul className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-display text-6xl text-brand-black hover:text-brand-red transition-colors duration-150 text-left w-full leading-none py-1"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/628975187077"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-punk w-full justify-center"
            >
              ORDER SEKARANG
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
