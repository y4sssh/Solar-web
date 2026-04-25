import React from 'react';
import { motion } from 'framer-motion';
import SolarPanelIcon from '@mui/icons-material/SolarPanel';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FactoryIcon from '@mui/icons-material/Factory';
import OpacityIcon from '@mui/icons-material/Opacity';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BuildIcon from '@mui/icons-material/Build';

const services = [
  {
    icon: <SolarPanelIcon />,
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
        background: 'linear-gradient(180deg, #121225 0%, #0a0a1a 100%)',
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              style={{
                padding: '40px',
                background: 'rgba(26, 26, 58, 0.5)',
                borderRadius: '20px',
                border: '1px solid rgba(249, 168, 37, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <motion.div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(249, 168, 37, 0.2) 0%, rgba(255, 143, 0, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  color: '#f9a825',
                  fontSize: '2rem',
                }}
                whileHover={{ scale: 1.1, background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)' }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: '#b0b0b0', marginBottom: '25px', lineHeight: 1.7 }}>{service.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(249, 168, 37, 0.1)',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      color: '#f9a825',
                      border: '1px solid rgba(249, 168, 37, 0.2)',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ color: '#f9a825' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '25px',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Get Quote →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '100px' }}
        >
          <h3 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '60px' }}>
            How It <span style={{ color: '#f9a825' }}>Works</span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', position: 'relative' }}>
            {[
              { step: '01', title: 'Site Survey', description: 'We analyze your property and energy requirements' },
              { step: '02', title: 'System Design', description: 'Custom solar solution designed for maximum efficiency' },
              { step: '03', title: 'Installation', description: 'Professional installation by certified technicians' },
              { step: '04', title: 'Go Live', description: 'System activated with 24/7 monitoring support' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                style={{ textAlign: 'center', position: 'relative' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#0a0a1a',
                }}>
                  {item.step}
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>{item.description}</p>
                {index < 3 && (
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    right: '-10px',
                    width: '20px',
                    height: '2px',
                    background: 'rgba(249, 168, 37, 0.3)',
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
      `}</style>
    </section>
  );
};

export default Services;