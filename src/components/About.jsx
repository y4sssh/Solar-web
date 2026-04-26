import React from 'react';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';

const About = () => {
  const features = [
    { icon: <TrendingUpIcon />, title: 'Efficiency First', description: 'Maximum energy output with cutting-edge panel technology', color: '#f9a825' },
    { icon: <VerifiedUserIcon />, title: 'Trusted Warranty', description: 'Industry-leading 25-year performance warranty', color: '#00d4ff' },
    { icon: <GroupsIcon />, title: 'Expert Team', description: '300+ certified solar engineers and technicians', color: '#4caf50' },
    { icon: <CheckCircleIcon />, title: 'Quality Assured', description: 'ISO 9001:2015 certified manufacturing processes', color: '#ff5722' },
  ];

  const timeline = [
    { year: '1993', title: 'Founded', description: 'Started with a vision to revolutionize energy', color: '#f9a825' },
    { year: '2007', title: 'IPO Launch', description: 'Listed on BSE and NSE', color: '#00d4ff' },
    { year: '2015', title: 'Global Expansion', description: 'Expanded operations to 50+ countries', color: '#4caf50' },
    { year: '2024', title: '5 GW+ Milestone', description: 'Achieved 5+ GW installed capacity', color: '#ff5722' },
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
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: '#f9a825',
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(249, 168, 37, 0.1) 0%, rgba(255, 143, 0, 0.05) 100%)',
              padding: '8px 20px',
              borderRadius: '50px',
              border: '1px solid rgba(249, 168, 37, 0.2)'
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
            style={{
              fontSize: '3.5rem',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              padding: '0 15px',
              borderRadius: '10px',
              marginBottom: '15px'
            }}
          >
            Pioneering <span style={{
              background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Solar Excellence</span> Since 1993
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{
              margin: '0 auto',
              maxWidth: '700px',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#e0e0e0'
            }}
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '18px',
                    padding: '24px',
                    background: 'rgba(26, 26, 58, 0.3)',
                    borderRadius: '20px',
                    border: '1px solid rgba(249, 168, 37, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Feature icon with enhanced styling */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, rgba(${parseInt(feature.color.slice(1, 3), 16)}, ${parseInt(feature.color.slice(3, 5), 16)}, ${parseInt(feature.color.slice(5, 7), 16)}, 0.15) 0%, rgba(${parseInt(feature.color.slice(1, 3), 16)}, ${parseInt(feature.color.slice(3, 5), 16)}, ${parseInt(feature.color.slice(5, 7), 16)}, 0.05) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s ease',
                    boxShadow: '0 8px 25px rgba(${parseInt(feature.color.slice(1, 3), 16)}, ${parseInt(feature.color.slice(3, 5), 16)}, ${parseInt(feature.color.slice(5, 7), 16)}, 0.2)'
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontWeight: 700,
                      marginBottom: '8px',
                      fontSize: '1.2rem',
                      color: feature.color,
                      letterSpacing: '-0.5px',
                      display: 'inline-block',
                      background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#e0e0e0',
                      lineHeight: 1.7
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '100px' }}
        >
          <h3 style={{
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 800,
            marginBottom: '50px',
            background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            padding: '0 15px',
            borderRadius: '10px'
          }}>
            Our <span style={{
              background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Journey</span>
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  background: 'rgba(26, 26, 58, 0.2)',
                  borderRadius: '24px',
                  padding: '28px',
                  border: '1px solid rgba(249, 168, 37, 0.15)',
                  transition: 'all 0.4s ease',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden'
                }}
              >
                {/* Enhanced year circle */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#0a0a1a',
                  boxShadow: '0 8px 25px rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.3)',
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}>
                  {item.year}
                  {/* Animated glow effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    right: '-8px',
                    bottom: '-8px',
                    borderRadius: '50%',
                    background: `linear-gradient(60deg, rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.4), rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.3))`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                  }}></div>
                </div>

                <h4 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: '#fff',
                  letterSpacing: '-0.3px'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#e0e0e0',
                  lineHeight: 1.7
                }}>
                  {item.description}
                </p>
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
         
         @keyframes pulseGlow {
           0%, 100% {
             box-shadow: 0 0 0 rgba(${parseInt('#f9a825'.slice(1, 3), 16)}, ${parseInt('#f9a825'.slice(3, 5), 16)}, ${parseInt('#f9a825'.slice(5, 7), 16)}, 0.4);
           }
           50% {
             box-shadow: 0 0 20px rgba(${parseInt('#f9a825'.slice(1, 3), 16)}, ${parseInt('#f9a825'.slice(3, 5), 16)}, ${parseInt('#f9a825'.slice(5, 7), 16)}, 0.6);
           }
         }
         
         @keyframes float {
           0%, 100% {
             transform: translateY(0px);
           }
           50% {
             transform: translateY(-10px);
           }
         }
         
         @keyframes rotateSlow {
           from {
             transform: rotate(0deg);
           }
           to {
             transform: rotate(360deg);
           }
         }
       `}</style>
    </section>
  );
};

export default About;