import React from 'react';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const team = [
  {
    name: 'Hitesh P. Patel',
    role: 'Chairman & Managing Director',
    image: 'team-1',
  },
  {
    name: 'Kunal P. Mehta',
    role: 'Chief Executive Officer',
    image: 'team-2',
  },
  {
    name: 'Rajesh S. Sharma',
    role: 'Chief Operating Officer',
    image: 'team-3',
  },
  {
    name: 'Priya A. Desai',
    role: 'Chief Technology Officer',
    image: 'team-4',
  },
  {
    name: 'Anil R. Joshi',
    role: 'VP - Operations',
    image: 'team-5',
  },
  {
    name: 'Sneha M. Rao',
    role: 'Head - Business Development',
    image: 'team-6',
  },
];

const Team = () => {
  return (
    <section
      id="team"
      style={{
        background: 'linear-gradient(180deg, #121225 0%, #0a0a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Meet the Solar Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Our team of 300+ certified professionals brings decades of combined experience in solar energy solutions.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#1a1a3a',
                border: '1px solid rgba(249, 168, 37, 0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Profile Image Placeholder */}
              <div style={{
                height: '280px',
                background: 'linear-gradient(180deg, #1a1a3a 0%, #2a2a5a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', opacity: 0.5 }}>
                  <circle cx="50" cy="35" r="20" fill="rgba(249, 168, 37, 0.3)" />
                  <ellipse cx="50" cy="90" rx="35" ry="30" fill="rgba(249, 168, 37, 0.2)" />
                </svg>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, transparent 50%, rgba(10, 10, 26, 0.8) 100%)',
                }} />
              </div>

              <div style={{ padding: '25px', position: 'relative' }}>
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1, background: '#0077b5' }}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(249, 168, 37, 0.2)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                    }}
                  >
                    <LinkedInIcon />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, background: '#1da1f2' }}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(249, 168, 37, 0.2)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                    }}
                  >
                    <TwitterIcon />
                  </motion.button>
                </motion.div>

                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '5px' }}>
                  {member.name}
                </h4>
                <p style={{ color: '#f9a825', fontSize: '0.95rem', fontWeight: 500 }}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '80px',
            padding: '60px',
            background: 'linear-gradient(135deg, rgba(249, 168, 37, 0.1) 0%, rgba(255, 143, 0, 0.05) 100%)',
            borderRadius: '30px',
            border: '1px solid rgba(249, 168, 37, 0.2)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
            Join Our <span style={{ color: '#f9a825' }}>Team</span>
          </h3>
          <p style={{ color: '#b0b0b0', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
            Be part of the solar revolution. We&apos;re always looking for talented individuals to join our mission.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => window.open('mailto:careers@waaree.com')}
          >
            View Careers
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .container > div:first-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;