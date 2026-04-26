import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalculateIcon from '@mui/icons-material/Calculate';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Calculator', href: '#calculator' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    const theme = newMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setDarkMode(savedTheme === 'dark');
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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
          onClick={() => scrollToSection('#home')}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ width: '48px', height: '48px', position: 'relative' }}
          >
            <svg viewBox="0 0 50 50" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 6px rgba(249, 168, 37, 0.4))' }}>
              <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f9a825" />
                  <stop offset="100%" stopColor="#ff8f00" />
                </linearGradient>
              </defs>
              <circle cx="25" cy="25" r="20" fill="none" stroke="url(#navGradient)" strokeWidth="2.5" />
              <circle cx="25" cy="8" r="3.5" fill="url(#navGradient)">
                <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="25" cy="42" r="3.5" fill="url(#navGradient)">
                <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite" begin="0.45s" />
              </circle>
              <circle cx="8" cy="25" r="3.5" fill="url(#navGradient)">
                <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite" begin="0.9s" />
              </circle>
              <circle cx="42" cy="25" r="3.5" fill="url(#navGradient)">
                <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite" begin="1.35s" />
              </circle>
              <circle cx="25" cy="25" r="9" fill="url(#navGradient)" opacity="0.85">
                <animate attributeName="r" values="9;11;9" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </svg>
          </motion.div>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.5px'
            }}>
              WAAREE <span style={{
                background: 'linear-gradient(135deg, #ff8f00 0%, #f9a825 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>RTL</span>
            </h1>
            <p style={{
              fontSize: '0.7rem',
              color: '#b0b0b0',
              letterSpacing: '2px',
              margin: 0,
              fontWeight: 500
            }}>RENEWABLE TECHNOLOGIES</p>
          </div>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <div className="desktop-menu" style={{ display: 'flex', gap: '8px' }}>
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
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ y: -3 }}
                style={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  position: 'relative',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.background = darkMode ? 'rgba(249, 168, 37, 0.1)' : 'rgba(249, 168, 37, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.div
            style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
          >
            <motion.a
              href="tel:18002121321"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(249, 168, 37, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 5px 20px rgba(249, 168, 37, 0.3)',
              }}
            >
              <PhoneIcon style={{ color: '#0a0a1a', fontSize: '1rem' }} />
              <span style={{ color: '#0a0a1a', fontWeight: 600, fontSize: '0.8rem' }}>Toll Free</span>
            </motion.a>

            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)',
                border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {darkMode ? (
                <LightModeIcon style={{ color: '#fff', fontSize: '1.3rem' }} />
              ) : (
                <DarkModeIcon style={{ color: '#0a0a1a', fontSize: '1.3rem' }} />
              )}
            </motion.button>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px',
            }}
          >
            {mobileMenuOpen ? (
              <CloseIcon style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }} />
            ) : (
              <MenuIcon style={{ color: 'var(--text-primary)', fontSize: '1.8rem' }} />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%', transition: { duration: 0.3 } }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              maxWidth: '350px',
              height: '100vh',
              background: darkMode ? 'linear-gradient(180deg, #0a0a1a 0%, #121225 100%)' : 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              padding: '90px 30px 40px',
              zIndex: 999,
              borderLeft: '1px solid var(--glass-border)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  style={{
                    display: 'block',
                    color: '#fff',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    padding: '15px 20px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(249, 168, 37, 0.15)';
                    e.currentTarget.style.color = '#f9a825';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: '40px',
                padding: '20px',
                background: 'rgba(249, 168, 37, 0.1)',
                borderRadius: '15px',
                border: '1px solid rgba(249, 168, 37, 0.2)',
              }}
            >
              <p style={{ color: '#f9a825', fontSize: '0.85rem', fontWeight: 600, marginBottom: '10px' }}>
                Toll Free Number
              </p>
              <a href="tel:18002121321" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, textDecoration: 'none' }}>
                1800-212-1321
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;