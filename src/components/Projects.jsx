import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const projects = [
  {
    id: 1,
    name: 'Kaustubh Solar Evolution',
    location: 'Amravati, Maharashtra',
    capacity: '3.5 kW',
    type: 'Rooftop',
    client: 'Mr. Prince Hirekhan',
    technology: 'N-Type Topcon DCR Bifacial Panel',
    inverter: 'String Inverter',
    modules: '6 Nos. WAAREE',
    cost: '₹1,83,600',
    subsidy: '₹78,000',
    warranty: '30 Years',
    description: 'Rooftop Solar EPC Project with N-Type Topcon DCR Bifacial Panels',
  },
  {
    id: 2,
    name: 'Jindal Renewables',
    location: 'Bikaner, Rajasthan',
    capacity: '2012 MW',
    type: 'Ground Mount',
    image: 'solar-farm-1',
  },
  {
    id: 2,
    name: 'Greenko AP01 IREP',
    location: 'Andhra Pradesh',
    capacity: '980 MW',
    type: 'Ground Mount',
    image: 'solar-farm-2',
  },
  {
    id: 3,
    name: 'Acciona ISTS Solar Plant',
    location: 'Madhya Pradesh',
    capacity: '412.5 MW',
    type: 'Ground Mount',
    image: 'solar-farm-3',
  },
  {
    id: 4,
    name: 'Masaya Solar',
    location: 'Gujarat',
    capacity: '210 MW',
    type: 'Ground Mount',
    image: 'solar-farm-4',
  },
  {
    id: 5,
    name: 'Continuum Green Energy',
    location: 'Tamil Nadu',
    capacity: '140 MW',
    type: 'Ground Mount',
    image: 'solar-farm-5',
  },
  {
    id: 6,
    name: 'Waaneep Solar Pvt Ltd',
    location: 'Maharashtra',
    capacity: '100 MW',
    type: 'Ground Mount',
    image: 'solar-farm-6',
  },
  {
    id: 7,
    name: 'Song Giang Solar Power',
    location: 'Vietnam',
    capacity: '49 MW',
    type: 'Ground Mount',
    image: 'solar-farm-7',
  },
  {
    id: 8,
    name: 'Rajasthan Solar Park',
    location: 'Rajasthan',
    capacity: '500 MW',
    type: 'Utility',
    image: 'solar-farm-8',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.type === filter);

  const categories = ['All', 'Ground Mount', 'Floating', 'Rooftop', 'Utility'];

  return (
    <section
      id="projects"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #121225 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 168, 37, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

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
            Our Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Powering Nations With Clean Energy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Transforming energy landscapes with projects strategically planned, executed, and managed across global markets and industries.
          </motion.p>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            marginBottom: '60px',
          }}
        >
          {[
            { value: '5+', label: 'GW Total Capacity', sublabel: 'Installed Worldwide' },
            { value: '50+', label: 'Countries', sublabel: 'Global Presence' },
            { value: '1000+', label: 'Projects', sublabel: 'Successfully Delivered' },
            { value: '25', label: 'Years', sublabel: 'Of Excellence' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              style={{
                padding: '30px',
                background: 'rgba(249, 168, 37, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(249, 168, 37, 0.1)',
                textAlign: 'center',
              }}
            >
              <h3 style={{
                fontSize: '3rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.value}
              </h3>
              <p style={{ fontWeight: 600, marginBottom: '5px' }}>{stat.label}</p>
              <p style={{ fontSize: '0.85rem', color: '#b0b0b0' }}>{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '60px',
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                padding: '14px 32px',
                background: filter === category
                  ? 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)'
                  : 'rgba(26, 26, 58, 0.3)',
                border: filter === category
                  ? 'none'
                  : '1px solid rgba(249, 168, 37, 0.2)',
                borderRadius: '55px',
                color: filter === category ? '#0a0a1a' : '#e0e0e0',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(5px)',
                letterSpacing: '0.5px'
              }}
            >
              {category}
              {/* Animated underline effect */}
              <div style={{
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #f9a825, transparent)',
                transition: 'width 0.4s ease'
              }}></div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.02 }}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(26, 26, 58, 0.3)',
                border: '1px solid rgba(249, 168, 37, 0.15)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Enhanced Project Image */}
              <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a5a 100%)',
                transition: 'all 0.4s ease',
                transform: 'translateY(0px)'
              }}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                     linear-gradient(rgba(249, 168, 37, 0.03) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(249, 168, 37, 0.03) 1px, transparent 1px)
                   `,
                  backgroundSize: '40px 40px',
                  opacity: 0.3,
                  animation: 'gridMove 20s linear infinite'
                }}>
                </div>
                <svg viewBox="0 0 100 100" style={{
                  width: '100%',
                  height: '100%',
                  opacity: 0.4,
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}>
                  <rect width="100" height="100" fill="#121225" />
                  {[10, 30, 50, 70, 90].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#f9a825" strokeWidth="1" opacity="0.2" />
                  ))}
                  {[10, 30, 50, 70, 90].map((y) => (
                    <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#f9a825" strokeWidth="1" opacity="0.2" />
                  ))}
                  <circle cx="50" cy="50" r="18" fill="none" stroke="url(#projectGradient)" strokeWidth="2">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
                  </circle>
                  <defs>
                    <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f9a825" />
                      <stop offset="100%" stopColor="#ff8f00" />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  padding: '10px 18px',
                  background: 'linear-gradient(135deg, rgba(249, 168, 37, 0.2) 0%, rgba(255, 143, 0, 0.1) 100%)',
                  borderRadius: '16px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#0a0a1a',
                  boxShadow: '0 4px 12px rgba(249, 168, 37, 0.3)',
                  border: '1px solid rgba(249, 168, 37, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  {project.type}
                </div>
              </div>

              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>
                  {project.name}
                </h4>
                {project.client && (
                  <p style={{ color: '#f9a825', fontSize: '0.9rem', marginBottom: '8px' }}>
                    Client: {project.client}
                  </p>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#b0b0b0' }}>
                  <LocationOnIcon style={{ fontSize: '1.2rem', color: '#f9a825' }} />
                  <span style={{ fontSize: '0.9rem' }}>{project.location}</span>
                </div>
                {project.description && (
                  <p style={{ color: '#b0b0b0', fontSize: '0.85rem', marginTop: '10px' }}>
                    {project.description}
                  </p>
                )}
                <div style={{
                  marginTop: '15px',
                  paddingTop: '15px',
                  borderTop: '1px solid rgba(249, 168, 37, 0.2)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                }}>
                  <div>
                    <span style={{ color: '#b0b0b0', fontSize: '0.8rem' }}>Capacity</span>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{project.capacity}</p>
                  </div>
                  {project.cost && (
                    <div>
                      <span style={{ color: '#b0b0b0', fontSize: '0.8rem' }}>Cost</span>
                      <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f9a825' }}>{project.cost}</p>
                    </div>
                  )}
                </div>
                {project.warranty && (
                  <div style={{ marginTop: '10px', padding: '8px 12px', background: 'rgba(249,168,37,0.1)', borderRadius: '8px' }}>
                    <span style={{ color: '#b0b0b0', fontSize: '0.8rem' }}>Warranty: </span>
                    <span style={{ color: '#f9a825', fontWeight: 600 }}>{project.warranty}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '80px',
            padding: '50px',
            background: 'linear-gradient(135deg, rgba(249, 168, 37, 0.1) 0%, rgba(255, 143, 0, 0.05) 100%)',
            borderRadius: '30px',
            border: '1px solid rgba(249, 168, 37, 0.2)',
          }}
        >
          <h3 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
            Our <span style={{ color: '#f9a825' }}>Global Reach</span>
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}>
            {['All States', 'Vietnam', 'USA', 'Germany', 'Australia', 'Japan'].map((country, index) => (
              <motion.span
                key={country}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                style={{
                  padding: '15px 30px',
                  background: 'rgba(249, 168, 37, 0.1)',
                  borderRadius: '15px',
                  border: '1px solid rgba(249, 168, 37, 0.2)',
                  fontWeight: 500,
                  color: '#b0b0b0',
                }}
              >
                {country}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '60px',
            padding: '60px',
            background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
            borderRadius: '30px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0a0a1a', marginBottom: '15px' }}>
            Have Questions? Let&apos;s Work Together!
          </h3>
          <p style={{ color: '#0a0a1a', opacity: 0.8, marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
            Contact us today to discuss your solar project requirements. Our expert team will provide you with the best solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, background: '#0a0a1a', color: '#f9a825' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '18px 50px',
              background: '#0a0a1a',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      <style>{`
         @media (max-width: 1024px) {
           .container > div:nth-child(4) {
             grid-template-columns: repeat(2, 1fr) !important;
           }
           .container > div:nth-child(6) > div:first-child {
             grid-template-columns: repeat(2, 1fr) !important;
           }
         }
         @media (max-width: 768px) {
           .container > div:nth-child(4) {
             grid-template-columns: 1fr !important;
           }
           .container > div:nth-child(5) {
             grid-template-columns: 1fr !important;
           }
           .container > div:nth-child(6) > div:first-child {
             grid-template-columns: 1fr !important;
           }
         }
         
         @keyframes gridMove {
           0% {
             background-position: 0 0;
           }
           100% {
             background-position: 40px 40px;
           }
         }
         
         @keyframes pulseGlow {
           0%, 100% {
             box-shadow: 0 0 0 rgba(249, 168, 37, 0.4);
           }
           50% {
             box-shadow: 0 0 20px rgba(249, 168, 37, 0.6);
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

export default Projects;