import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '4.5', label: 'GW', suffix: 'Projects Completed', color: '#f9a825' },
    { number: '10', label: 'Mn+', suffix: 'Safe Manhours', color: '#00bcd4' },
    { number: '10K', label: '+', suffix: 'Rooftop Projects', color: '#4caf50' },
    { number: '15', label: '+', suffix: 'Years Experience', color: '#ff5722' },
  ];

  const services = [
    { name: 'Utility/Ground Mount', icon: '☀️' },
    { name: 'Floating Solar', icon: '🌊' },
    { name: 'Rooftop Solar', icon: '🏢' },
    { name: 'Asset Management', icon: '📊' },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'var(--gradient-dark)',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* 3D Animated Background Grid */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(249, 168, 37, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 168, 37, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'top center',
          y: y1,
        }}
      />

      {/* Animated Glow Orbs */}
      <motion.div
        style={{
          position: 'absolute',
          top: '5%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 168, 37, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          y: y2,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: i % 2 === 0 ? '#f9a825' : '#00d4ff',
            left: `${5 + (i * 7)}%`,
            top: `${15 + (i % 4) * 20}%`,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Floating Solar Panel Cards - 3D Effect */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${25 + i * 18}%`,
            right: `${8 + i * 5}%`,
            width: '70px',
            height: '45px',
            background: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a4a 100%)',
            borderRadius: '6px',
            border: '1px solid rgba(249, 168, 37, 0.25)',
            transform: 'rotate(-12deg)',
            perspective: '500px',
            transformStyle: 'preserve-3d',
          }}
          animate={{
            y: [0, -25, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, -10, 0],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          <svg viewBox="0 0 70 45" style={{ width: '100%', height: '100%' }}>
            {[12, 24, 36, 48].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="45" stroke="rgba(249, 168, 37, 0.25)" strokeWidth="1" />
            ))}
            {[12, 24, 36].map((y) => (
              <line key={y} x1="0" y1={y} x2="70" y2={y} stroke="rgba(249, 168, 37, 0.25)" strokeWidth="1" />
            ))}
          </svg>
        </motion.div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', minHeight: 'calc(100vh - 140px)', padding: '40px 0' }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 22px',
                  background: 'rgba(249, 168, 37, 0.12)',
                  borderRadius: '50px',
                  border: '1px solid rgba(249, 168, 37, 0.3)',
                  color: '#f9a825',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>☀️</span>
                India's Leading Solar EPC Company
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontSize: '4.2rem',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '20px',
                color: '#fff',
                letterSpacing: '-1px'
              }}
            >
              Scalable <br />
              <span style={{
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                padding: '0 5px'
              }}>
                Renewable
              </span>{' '}
              Solutions <br />
              <span style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #0097a7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                padding: '0 5px'
              }}>
                Built For Impact
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{
                fontSize: '1.25rem',
                color: '#e0e0e0',
                marginBottom: '30px',
                maxWidth: '550px',
                lineHeight: 1.8,
                fontWeight: 400
              }}
            >
              Waaree Renewable Technologies Limited (WRTL), a subsidiary of Waaree Energies, delivers end-to-end renewable energy EPC solutions. From design to installation, we're backed by strong asset management services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}
            >
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 15px 45px rgba(249, 168, 37, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#services')}
                style={{
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  color: '#0a0a1a',
                  border: 'none',
                  padding: '18px 42px',
                  borderRadius: '55px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 10px 35px rgba(249, 168, 37, 0.4)',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
              >
                Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, background: 'rgba(249, 168, 37, 0.2)', boxShadow: '0 5px 20px rgba(249, 168, 37, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#calculator')}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '2px solid rgba(249, 168, 37, 0.5)',
                  padding: '16px 40px',
                  borderRadius: '55px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
              >
                Calculate Savings
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '30px',
                paddingTop: '40px',
                borderTop: '1px solid rgba(249, 168, 37, 0.2)',
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  style={{
                    textAlign: 'center',
                    padding: '20px',
                    background: 'rgba(249, 168, 37, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(249, 168, 37, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(249, 168, 37, 0.1)', borderColor: 'rgba(249, 168, 37, 0.2)' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      fontSize: '2.8rem',
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                      padding: '5px 10px',
                      borderRadius: '10px'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: stat.color,
                      letterSpacing: '0.5px'
                    }}>
                      {stat.label}
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#6b6b7b', marginTop: '5px' }}>{stat.suffix}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - 3D Solar Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Central Sun with Glow */}
            <motion.div
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #f9a825 0%, #ff8f00 70%)',
                boxShadow: '0 0 80px rgba(249, 168, 37, 0.6), 0 0 120px rgba(249, 168, 37, 0.3)',
              }}
              animate={{
                boxShadow: [
                  '0 0 80px rgba(249, 168, 37, 0.6), 0 0 120px rgba(249, 168, 37, 0.3)',
                  '0 0 100px rgba(249, 168, 37, 0.8), 0 0 160px rgba(249, 168, 37, 0.5)',
                  '0 0 80px rgba(249, 168, 37, 0.6), 0 0 120px rgba(249, 168, 37, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
              >
                <div style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '10px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 15px #fff' }} />
              </motion.div>
            </motion.div>

            {/* Orbital Rings */}
            {[180, 240, 320].map((size, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius: '50%',
                  border: `1px solid rgba(249, 168, 37, ${0.15 - i * 0.04})`,
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            {/* Orbiting Planets */}
            {[120, 180, 260].map((orbit, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: 16 - i * 3,
                  height: 16 - i * 3,
                  borderRadius: '50%',
                  background: i === 1 ? '#f9a825' : `rgba(249, 168, 37, ${0.4 + i * 0.2})`,
                  border: i === 1 ? '2px solid #fff' : 'none',
                  boxShadow: i === 1 ? '0 0 20px rgba(249, 168, 37, 0.8)' : 'none',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 6 + i * 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${-i * 120}deg) translateY(-${orbit}px) rotate(${i * 120}deg)`,
                  }}
                />
              </motion.div>
            ))}

            {/* Main 3D Solar Panel */}
            <motion.div
              style={{
                width: '100%',
                maxWidth: '380px',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, rotateY: -30 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <svg viewBox="0 0 400 400" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 60px rgba(249, 168, 37, 0.3))' }}>
                <defs>
                  <linearGradient id="panelGrad3d" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a237e" />
                    <stop offset="100%" stopColor="#0d47a1" />
                  </linearGradient>
                  <linearGradient id="gridGrad3d" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f9a825" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ff8f00" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="mountGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f9a825" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#f9a825" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Panel Frame */}
                <motion.rect
                  x="40" y="80" width="320" height="240" rx="8"
                  fill="none"
                  stroke="rgba(249, 168, 37, 0.4)"
                  strokeWidth="3"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Solar Cells Grid */}
                {[...Array(6)].map((_, row) =>
                  [...Array(8)].map((_, col) => (
                    <motion.rect
                      key={`${row}-${col}`}
                      x={55 + col * 40}
                      y={95 + row * 35}
                      width="35"
                      height="28"
                      rx="3"
                      fill="url(#panelGrad3d)"
                      stroke="url(#gridGrad3d)"
                      strokeWidth="1"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: row * 0.1 + col * 0.05 }}
                    />
                  ))
                )}

                {/* Reflection overlay */}
                <rect x="40" y="80" width="320" height="120" rx="8" fill="url(#reflectionGrad)" opacity="0.15" />

                {/* Mounting Structure */}
                <polygon points="180,320 150,380 250,380 220,320" fill="url(#mountGrad)" />
                <rect x="140" y="375" width="120" height="12" rx="3" fill="rgba(249, 168, 37, 0.5)" />

                {/* Glow Effect */}
                <rect x="40" y="80" width="320" height="240" rx="8" fill="none" stroke="rgba(249, 168, 37, 0.15)" strokeWidth="8" filter="blur(15px)" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '35px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span style={{ fontSize: '0.75rem', color: '#6b6b7b', letterSpacing: '2px' }}>SCROLL</span>
        <KeyboardArrowDownIcon style={{ color: '#f9a825', fontSize: '2.2rem' }} />
      </motion.div>

      <style>{`
        @media (max-width: 1100px) {
          .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 50px !important;
          }
          .container > div > div:first-child {
            order: 2;
          }
          .container > div > div:last-child {
            order: 1;
          }
          h1 {
            font-size: 2.8rem !important;
            text-align: center;
          }
          p {
            max-width: 100% !important;
            margin: 0 auto 35px !important;
          }
          .container > div > div:first-child > div:nth-child(4) {
            justify-content: center;
          }
          .container > div > div:first-child > div:nth-child(5) {
            grid-template-columns: repeat(2, 1fr) !important;
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 2.2rem !important;
          }
          .container > div > div:first-child > div:nth-child(5) {
            grid-template-columns: 1fr 1fr !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;