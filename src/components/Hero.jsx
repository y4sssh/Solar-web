import React from 'react';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const stats = [
    { number: '5+', label: 'GWInstalled Capacity' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Countries' },
    { number: '1000+', label: 'Projects' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a0a1a 0%, #121225 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 168, 37, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 143, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating Solar Panels */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${20 + i * 15}%`,
            left: `${60 + i * 8}%`,
            width: '60px',
            height: '40px',
            background: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a4a 100%)',
            borderRadius: '5px',
            border: '1px solid rgba(249, 168, 37, 0.3)',
            transform: 'rotate(-15deg)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [-15, -10, -15],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 60 40" style={{ width: '100%', height: '100%' }}>
            {[10, 20, 30, 40, 50].map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="40"
                stroke="rgba(249, 168, 37, 0.3)"
                strokeWidth="1"
              />
            ))}
            {[10, 20, 30].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="60"
                y2={y}
                stroke="rgba(249, 168, 37, 0.3)"
                strokeWidth="1"
              />
            ))}
          </svg>
        </motion.div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', minHeight: 'calc(100vh - 100px)' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  background: 'rgba(249, 168, 37, 0.1)',
                  borderRadius: '50px',
                  border: '1px solid rgba(249, 168, 37, 0.3)',
                  color: '#f9a825',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  marginBottom: '20px',
                }}
              >
                ☀️ India's Leading Solar Company
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              Powering a{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Greener
              </span>{' '}
              <br />
              Future with
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Solar Energy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '1.2rem',
                color: '#b0b0b0',
                marginBottom: '40px',
                maxWidth: '500px',
              }}
            >
              Leading the solar revolution with cutting-edge technology and sustainable energy solutions. Join us in creating a cleaner, brighter tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
              >
                Our Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, background: 'rgba(249, 168, 37, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
                style={{ cursor: 'pointer' }}
              >
                Get Quote
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                display: 'flex',
                gap: '40px',
                marginTop: '60px',
                paddingTop: '30px',
                borderTop: '1px solid rgba(249, 168, 37, 0.2)',
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ position: 'relative' }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
              }}
            >
              {/* Animated Solar System */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  boxShadow: '0 0 60px rgba(249, 168, 37, 0.5)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(249, 168, 37, 0.5)',
                    '0 0 100px rgba(249, 168, 37, 0.8)',
                    '0 0 60px rgba(249, 168, 37, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                  <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
                </motion.div>
              </motion.div>

              {/* Orbiting Elements */}
              {[150, 200, 280].map((distance, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: i === 1 ? '#f9a825' : 'rgba(249, 168, 37, 0.3)',
                    border: i === 1 ? '2px solid #fff' : '1px solid rgba(249, 168, 37, 0.5)',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + i * 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    ...arguments.callee?.style,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: `${distance}px`,
                      height: `${distance}px`,
                      borderRadius: '50%',
                      border: `1px solid rgba(249, 168, 37, ${0.2 - i * 0.05})`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Solar Panel Graphic */}
            <motion.div
              style={{
                width: '100%',
                maxWidth: '500px',
                margin: '0 auto',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <svg viewBox="0 0 500 500" style={{ width: '100%', height: 'auto' }}>
                <defs>
                  <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a237e" />
                    <stop offset="100%" stopColor="#0d47a1" />
                  </linearGradient>
                  <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f9a825" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff8f00" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                
                {/* Panel Frame */}
                <rect x="50" y="100" width="400" height="300" rx="10" fill="none" stroke="rgba(249, 168, 37, 0.3)" strokeWidth="2" />
                
                {/* Solar Cells Grid */}
                {[...Array(8)].map((_, row) =>
                  [...Array(6)].map((_, col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={70 + col * 65}
                      y={115 + row * 40}
                      width="58"
                      height="33"
                      rx="2"
                      fill="url(#panelGradient)"
                      stroke="url(#gridGradient)"
                      strokeWidth="1"
                    />
                  ))
                )}
                
                {/* Reflection */}
                <rect x="50" y="100" width="400" height="150" rx="10" fill="url(#reflectionGradient)" opacity="0.1" />
                
                {/* Mounting Structure */}
                <rect x="230" y="400" width="40" height="60" fill="rgba(249, 168, 37, 0.3)" />
                <rect x="200" y="460" width="100" height="10" rx="2" fill="rgba(249, 168, 37, 0.5)" />
                
                {/* Glow Effect */}
                <rect x="50" y="100" width="400" height="300" rx="10" fill="none" stroke="rgba(249, 168, 37, 0.2)" strokeWidth="5" filter="blur(10px)" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <KeyboardArrowDownIcon style={{ color: '#f9a825', fontSize: '3rem' }} />
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .container > div > div:first-child {
            order: 2;
          }
          .container > div > div:last-child {
            order: 1;
          }
          h1 {
            font-size: 3rem !important;
          }
          p {
            max-width: 100% !important;
            margin: 0 auto 40px !important;
          }
          .container > div > div:first-child > div:last-child {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          .container > div > div > div:nth-child(4) {
            flex-wrap: wrap;
            justify-content: center;
          }
          .container > div > div > div:nth-child(5) {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;