import React from 'react';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';

const About = () => {
  const features = [
    { icon: <TrendingUpIcon />, title: 'Efficiency First', description: 'Maximum energy output with cutting-edge panel technology' },
    { icon: <VerifiedUserIcon />, title: 'Trusted Warranty', description: 'Industry-leading 25-year performance warranty' },
    { icon: <GroupsIcon />, title: 'Expert Team', description: '300+ certified solar engineers and technicians' },
    { icon: <CheckCircleIcon />, title: 'Quality Assured', description: 'ISO 9001:2015 certified manufacturing processes' },
  ];

  const timeline = [
    { year: '1993', title: 'Founded', description: 'Started with a vision to revolutionize energy' },
    { year: '2007', title: 'IPO Launch', description: 'Listed on BSE and NSE' },
    { year: '2015', title: 'Global Expansion', description: 'Expanded operations to 50+ countries' },
    { year: '2024', title: '5 GW+ Milestone', description: 'Achieved 5+ GW installed capacity' },
  ];

  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #121225 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(249, 168, 37, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 143, 0, 0.05) 0%, transparent 50%)',
      }} />

      <div className="container section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: '#f9a825',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
            }}
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Pioneering Solar Excellence Since 1993
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Waaree Solar is a global leader in solar PV manufacturing, with operations spanning across 50+ countries. Our mission is to power the world with clean, sustainable energy.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ position: 'relative' }}>
              <motion.div
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a4a 100%)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(249, 168, 37, 0.2)',
                }}
              >
                <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%' }}>
                  <rect width="400" height="300" fill="#121225" />
                  <defs>
                    <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f9a825" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ff8f00" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {/* Factory Building */}
                  <rect x="50" y="100" width="300" height="150" fill="#1a1a3a" stroke="rgba(249, 168, 37, 0.3)" strokeWidth="2" />
                  {/* Windows */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <rect key={i} x={80 + i * 60} y="130" width="40" height="30" fill="url(#solarGrad)" rx="2" />
                  ))}
                  {/* Logo */}
                  <circle cx="200" cy="180" r="30" fill="none" stroke="#f9a825" strokeWidth="2" />
                  <circle cx="200" cy="165" r="5" fill="#f9a825" />
                  <circle cx="200" cy="195" r="5" fill="#f9a825" />
                  <circle cx="185" cy="180" r="5" fill="#f9a825" />
                  <circle cx="215" cy="180" r="5" fill="#f9a825" />
                  <circle cx="200" cy="180" r="10" fill="#f9a825" />
                  {/* Text */}
                  <text x="200" y="280" textAnchor="middle" fill="#b0b0b0" fontSize="14">WAAREE SOLAR</text>
                </svg>
              </motion.div>
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '-20px',
                  padding: '30px',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(249, 168, 37, 0.3)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0a0a1a' }}>5+</h3>
                <p style={{ fontSize: '0.9rem', color: '#0a0a1a', fontWeight: 500 }}>GW Installed</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px' }}>
              Leading the <span style={{ color: '#f9a825' }}>Solar Revolution</span>
            </h3>
            <p style={{ color: '#b0b0b0', marginBottom: '30px', lineHeight: 1.8 }}>
              Waaree Solar Technologies Ltd. is India&apos;s largest solar PV manufacturer with a capacity of 12 GW. We specialize in manufacturing high-efficiency solar panels, offering end-to-end solar energy solutions from concept to commissioning.
            </p>
            <p style={{ color: '#b0b0b0', marginBottom: '40px', lineHeight: 1.8 }}>
              Our commitment to quality and innovation has made us a trusted partner for utility-scale solar projects, commercial & industrial installations, and residential solutions across the globe.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    padding: '20px',
                    background: 'rgba(249, 168, 37, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(249, 168, 37, 0.1)',
                  }}
                >
                  <div style={{ color: '#f9a825', fontSize: '1.5rem' }}>{feature.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '5px' }}>{feature.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#b0b0b0' }}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '80px' }}
        >
          <h3 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '50px' }}>
            Our <span style={{ color: '#f9a825' }}>Journey</span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                style={{
                  textAlign: 'center',
                  padding: '30px',
                  background: 'rgba(249, 168, 37, 0.05)',
                  borderRadius: '20px',
                  border: '1px solid rgba(249, 168, 37, 0.1)',
                  position: 'relative',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#0a0a1a',
                }}>
                  {item.year}
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
          .container > div:first-of-type > div:last-child {
            order: -1;
          }
        }
        @media (max-width: 768px) {
          .container > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          .section-title {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;