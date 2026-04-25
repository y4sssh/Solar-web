import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#0a0a1a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          position: 'relative',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f9a825" />
              <stop offset="100%" stopColor="#ff8f00" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#solarGradient)"
            strokeWidth="3"
            strokeDasharray="10 5"
          />
          <circle cx="50" cy="20" r="8" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="50" cy="80" r="8" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="20" cy="50" r="8" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="80" cy="50" r="8" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="28" cy="28" r="6" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="72" cy="72" r="6" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="28" cy="72" r="6" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="72" cy="28" r="6" fill="url(#solarGradient)">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="1s"
              repeatCount="Infinity"
            />
          </circle>
          <circle cx="50" cy="50" r="15" fill="url(#solarGradient)" />
        </motion.svg>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginTop: '30px',
          background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        WAAREE SOLAR
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          color: '#b0b0b0',
          marginTop: '10px',
          fontSize: '1rem',
        }}
      >
        Powering a Greener Future
      </motion.p>
    </motion.div>
  );
};

export default Preloader;