import React from 'react';
import { motion } from 'framer-motion';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FactoryIcon from '@mui/icons-material/Factory';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BuildIcon from '@mui/icons-material/Build';

const services = [
  {
    icon: <WbSunnyIcon />,
    title: 'Utility Scale Solar',
    description: 'Large-scale solar power plants for utilities and independent power producers. From 1MW to 1000+ MW installations.',
    features: ['Ground Mount Systems', 'Tracking Systems', 'Hybrid Solutions', 'Grid Connectivity'],
  },
  {
    icon: <HomeWorkIcon />,
    title: 'Commercial & Industrial',
    description: 'Rooftop and canopy solar solutions for factories, warehouses, and commercial buildings. Reduce energy costs by up to 90%.',
    features: ['Rooftop Installation', 'Solar Canopies', 'Car Parking Solutions', 'Energy Management'],
  },
  {
    icon: <HomeWorkIcon />,
    title: 'Residential Solar',
    description: 'Home solar systems for clean, renewable energy. Government subsidies available. Payback period of 4-6 years.',
    features: ['On-Grid Systems', 'Off-Grid Systems', 'Hybrid Systems', 'Battery Storage'],
  },
  {
    icon: <FactoryIcon />,
    title: 'Floating Solar',
    description: 'Innovative floating solar solutions for water bodies. Reduces water evaporation and maximizes land utilization.',
    features: ['Reservoir Solutions', 'Lake Installations', 'Canal Covers', 'Marine Grade Equipment'],
  },
  {
    icon: <BatteryChargingFullIcon />,
    title: 'Energy Storage',
    description: 'Advanced battery storage solutions for continuous power supply. Lithium-ion and other cutting-edge technologies.',
    features: ['Grid Storage', 'UPS Systems', 'Backup Power', 'Peak Shaving'],
  },
  {
    icon: <BuildIcon />,
    title: 'Operations & Maintenance',
    description: 'Comprehensive O&M services ensuring optimal performance. 24/7 monitoring and support.',
    features: ['Remote Monitoring', 'Preventive Maintenance', 'Performance Audits', 'Quick Support'],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #121225 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249, 168, 37, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
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
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Complete Solar Energy Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            From concept to commissioning, we provide end-to-end solar solutions tailored to your energy needs. Our expert team ensures maximum efficiency and minimum downtime.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.02 }}
              style={{
                padding: '32px',
                background: 'rgba(26, 26, 58, 0.3)',
                borderRadius: '24px',
                border: '1px solid rgba(249, 168, 37, 0.15)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Glowing border effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '24px',
                padding: '2px',
                background: 'linear-gradient(45deg, transparent, rgba(249, 168, 37, 0.6), transparent)',
                pointerEvents: 'none',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskClip: 'text',
                opacity: 0,
                transition: 'opacity 0.4s ease'
              }}></div>

              <motion.div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, rgba(249, 168, 37, 0.15) 0%, rgba(255, 143, 0, 0.08) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  color: '#f9a825',
                  fontSize: '2.2rem',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 8px 32px rgba(249, 168, 37, 0.2)'
                }}
                whileHover={{
                  scale: 1.1,
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  boxShadow: '0 12px 40px rgba(249, 168, 37, 0.4)'
                }}
                transition={{ duration: 0.4 }}
              >
                {service.icon}
              </motion.div>

              <h3 style={{
                fontSize: '1.7rem',
                fontWeight: 800,
                marginBottom: '16px',
                letterSpacing: '-0.5px',
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#e0e0e0',
                marginBottom: '24px',
                lineHeight: 1.8,
                fontSize: '1rem'
              }}>
                {service.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    style={{
                      padding: '10px 18px',
                      background: 'rgba(249, 168, 37, 0.12)',
                      borderRadius: '24px',
                      fontSize: '0.9rem',
                      color: '#f9a825',
                      border: '1px solid rgba(249, 168, 37, 0.25)',
                      fontWeight: 500,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{
                  color: '#fff',
                  background: 'rgba(249, 168, 37, 0.2)'
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '16px',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  padding: '12px 24px',
                  background: 'rgba(249, 168, 37, 0.1)',
                  borderRadius: '50px',
                  border: '1px solid rgba(249, 168, 37, 0.2)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px'
                }}
              >
                Get Quote →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '120px' }}
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
            How It <span style={{
              background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Works</span>
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            position: 'relative'
          }}>
            {[
              { step: '01', title: 'Site Survey', description: 'We analyze your property and energy requirements' },
              { step: '02', title: 'System Design', description: 'Custom solar solution designed for maximum efficiency' },
              { step: '03', title: 'Installation', description: 'Professional installation by certified technicians' },
              { step: '04', title: 'Go Live', description: 'System activated with 24/7 monitoring support' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
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
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Step number with enhanced styling */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#0a0a1a',
                  boxShadow: '0 8px 25px rgba(249, 168, 37, 0.3)',
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}>
                  {item.step}
                  {/* Animated glow effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    right: '-8px',
                    bottom: '-8px',
                    borderRadius: '50%',
                    background: 'linear-gradient(60deg, rgba(249, 168, 37, 0.4), rgba(255, 143, 0, 0.3))',
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                  }}></div>
                </div>

                <h4 style={{
                  fontSize: '1.5rem',
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
                {index < 3 && (
                  <div style={{
                    position: 'absolute',
                    top: '48px',
                    right: '-12px',
                    width: '24px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #f9a825, transparent)',
                    animation: 'flow 2s linear infinite'
                  }} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
            Ready to Switch to Solar?
          </h3>
          <p style={{ color: '#b0b0b0', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
            Get a free consultation and custom quote for your solar installation. Our team will help you maximize your savings.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Quote
          </motion.button>
        </motion.div>
      </div>

      <style>{`
         @media (max-width: 1024px) {
           .container > div:nth-child(3) {
             grid-template-columns: repeat(2, 1fr) !important;
           }
           .container > div:nth-child(5) {
             grid-template-columns: repeat(2, 1fr) !important;
           }
         }
         @media (max-width: 768px) {
           .container > div:nth-child(3) {
             grid-template-columns: 1fr !important;
           }
           .container > div:nth-child(5) {
             grid-template-columns: 1fr !important;
           }
         }
         
         @keyframes flow {
           0% {
             background-position: 0% 50%;
           }
           50% {
             background-position: 100% 50%;
           }
           100% {
             background-position: 0% 50%;
           }
         }
       `}</style>
    </section>
  );
};

export default Services;