import React from 'react';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Leadership', href: '#team' },
      { name: 'Our Clients', href: '#projects' },
      { name: 'Careers', href: '#contact' },
      { name: 'Investor Relations', href: '#' },
    ],
    services: [
      { name: 'Utility Solar', href: '#services' },
      { name: 'Commercial Rooftop', href: '#services' },
      { name: 'Residential Solar', href: '#services' },
      { name: 'Floating Solar', href: '#services' },
      { name: 'Energy Storage', href: '#services' },
    ],
    resources: [
      { name: 'Blogs', href: '#' },
      { name: 'Case Studies', href: '#projects' },
      { name: 'Download Center', href: '#' },
      { name: 'Media', href: '#' },
      { name: 'Events', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Grievance', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, name: 'LinkedIn', href: '#' },
    { icon: <TwitterIcon />, name: 'Twitter', href: '#' },
    { icon: <FacebookIcon />, name: 'Facebook', href: '#' },
    { icon: <InstagramIcon />, name: 'Instagram', href: '#' },
    { icon: <YouTubeIcon />, name: 'YouTube', href: '#' },
  ];

  return (
    <footer
      style={{
        background: '#0a0a1a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Wave */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        background: '#121225',
        borderRadius: '50% 50% 0 0 / 30px 30px 0 0',
        transform: 'translateY(-99px)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        {/* Main Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '50px', marginBottom: '60px' }}>
          {/* Company Info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}
            >
              <div style={{ width: '50px', height: '50px' }}>
                <svg viewBox="0 0 50 50" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f9a825" />
                      <stop offset="100%" stopColor="#ff8f00" />
                    </linearGradient>
                  </defs>
                  <circle cx="25" cy="25" r="22" fill="none" stroke="url(#footerGradient)" strokeWidth="2" />
                  <circle cx="25" cy="8" r="4" fill="url(#footerGradient)" />
                  <circle cx="25" cy="42" r="4" fill="url(#footerGradient)" />
                  <circle cx="8" cy="25" r="4" fill="url(#footerGradient)" />
                  <circle cx="42" cy="25" r="4" fill="url(#footerGradient)" />
                  <circle cx="25" cy="25" r="8" fill="url(#footerGradient)" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
                  WAAREE <span style={{ color: '#f9a825' }}>SOLAR</span>
                </h3>
                <p style={{ fontSize: '0.7rem', color: '#b0b0b0', letterSpacing: '2px' }}>POWERING FUTURE</p>
              </div>
            </motion.div>

            <p style={{ color: '#b0b0b0', marginBottom: '30px', lineHeight: 1.8 }}>
              Waaree Solar is a global leader in solar PV manufacturing with operations spanning across 50+ countries. Our mission is to power the world with clean, sustainable energy.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <LocationOnIcon style={{ color: '#f9a825', fontSize: '1.3rem', marginTop: '3px' }} />
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>
                  602, Western Edge - I, Off Western Express Highway,<br />
                  Borivali (E), Mumbai, Maharashtra, India. 400066
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <PhoneIcon style={{ color: '#f9a825', fontSize: '1.3rem' }} />
                <a href="tel:18002121321" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  1800-2121-321
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <EmailIcon style={{ color: '#f9a825', fontSize: '1.3rem' }} />
                <a href="mailto:info@waaree.com" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  info@waaree.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f9a825')}
                    onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f9a825')}
                    onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Resources</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f9a825')}
                    onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div style={{
          padding: '30px 0',
          borderTop: '1px solid rgba(249, 168, 37, 0.2)',
          borderBottom: '1px solid rgba(249, 168, 37, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '15px' }}>Follow us on</h4>
            <div style={{ display: 'flex', gap: '15px' }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, background: '#f9a825' }}
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'rgba(249, 168, 37, 0.1)',
                    border: '1px solid rgba(249, 168, 37, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#f9a825')}
                onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          padding: '30px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
            © {currentYear} Waaree Solar. All Rights Reserved.
          </p>
          <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
            CIN: L93000MH1999PLC120470
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 5px 20px rgba(249, 168, 37, 0.4)',
          zIndex: 1000,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a0a1a">
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      </motion.button>

      <style>{`
        @media (max-width: 1024px) {
          .container > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
          .container > div:nth-child(3) {
            flex-direction: column !important;
            text-align: center;
          }
          .container > div:nth-child(4) {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;