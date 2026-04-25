import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 10, 26, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(249, 168, 37, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: scrolled ? '15px 0' : '25px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ width: '50px', height: '50px' }}
          >
            <svg viewBox="0 0 50 50" style={{ width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f9a825" />
                  <stop offset="100%" stopColor="#ff8f00" />
                </linearGradient>
              </defs>
              <circle cx="25" cy="25" r="22" fill="none" stroke="url(#navGradient)" strokeWidth="2" />
              <circle cx="25" cy="8" r="4" fill="url(#navGradient)" />
              <circle cx="25" cy="42" r="4" fill="url(#navGradient)" />
              <circle cx="8" cy="25" r="4" fill="url(#navGradient)" />
              <circle cx="42" cy="25" r="4" fill="url(#navGradient)" />
              <circle cx="14" cy="14" r="3" fill="url(#navGradient)" />
              <circle cx="36" cy="36" r="3" fill="url(#navGradient)" />
              <circle cx="14" cy="36" r="3" fill="url(#navGradient)" />
              <circle cx="36" cy="14" r="3" fill="url(#navGradient)" />
              <circle cx="25" cy="25" r="8" fill="url(#navGradient)" />
            </svg>
          </motion.div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
              WAAREE <span style={{ color: '#f9a825' }}>SOLAR</span>
            </h1>
            <p style={{ fontSize: '0.7rem', color: '#b0b0b0', letterSpacing: '2px' }}>POWERING FUTURE</p>
          </div>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div className="desktop-menu" style={{ display: 'flex', gap: '30px' }}>
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ color: '#f9a825' }}
                style={{
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  position: 'relative',
                  textDecoration: 'none',
                }}
              >
                {link.name}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #f9a825, #ff8f00)',
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="tel:18002121321"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 25px',
              background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
              borderRadius: '50px',
              textDecoration: 'none',
            }}
          >
            <PhoneIcon style={{ color: '#0a0a1a', fontSize: '1.2rem' }} />
            <span style={{ color: '#0a0a1a', fontWeight: 600, fontSize: '0.9rem' }}>1800-212-1321</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? (
              <CloseIcon style={{ color: '#fff', fontSize: '2rem' }} />
            ) : (
              <MenuIcon style={{ color: '#fff', fontSize: '2rem' }} />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              maxWidth: '400px',
              height: '100vh',
              background: '#0a0a1a',
              padding: '100px 40px',
              zIndex: 999,
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                style={{
                  display: 'block',
                  color: '#fff',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(249, 168, 37, 0.1)',
                  cursor: 'pointer',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-menu {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;