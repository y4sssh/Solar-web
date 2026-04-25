import React from 'react';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    name: 'John Mitchell',
    role: 'CTO, Green Energy Corp',
    image: 'testimonial-1',
    quote: 'Waaree Solar has been instrumental in transforming our energy infrastructure. Their professional approach and quality products are unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Director, SolarTech Solutions',
    image: 'testimonial-2',
    quote: 'Working with Waaree was a game-changer for our company. The ROI on our solar installation exceeded expectations within just 3 years.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Plant Manager, Industrial Factory',
    image: 'testimonial-3',
    quote: 'The team delivered our 50MW project ahead of schedule with zero compromises on quality. Their O&M support has been exceptional.',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'CEO, EcoBuild Properties',
    image: 'testimonial-4',
    quote: 'Waaree transformed our residential projects. Our customers love the solar solutions and we have reduced our carbon footprint significantly.',
    rating: 5,
  },
  {
    name: 'David Kumar',
    role: 'Operations Director, TechFactory',
    image: 'testimonial-5',
    quote: 'The battery storage solution from Waaree has given us energy independence. Our factory now runs 24/7 without any power cuts.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Sustainability Lead, Global Corp',
    image: 'testimonial-6',
    quote: 'Waaree helped us achieve our ESG goals ahead of schedule. Their expertise in large-scale installations is truly remarkable.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #121225 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249, 168, 37, 0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Words From Our Customers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Join thousands of satisfied customers who have made the switch to solar energy with Waaree.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            marginBottom: '80px',
            padding: '40px',
            background: 'rgba(249, 168, 37, 0.05)',
            borderRadius: '30px',
            border: '1px solid rgba(249, 168, 37, 0.1)',
          }}
        >
          {[
            { number: '500+', label: 'Business Clients' },
            { number: '10,000+', label: 'Residential Installations' },
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '4.9', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              style={{ textAlign: 'center' }}
            >
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.number}
              </h3>
              <p style={{ color: '#b0b0b0' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              style={{
                padding: '35px',
                background: '#1a1a3a',
                borderRadius: '20px',
                border: '1px solid rgba(249, 168, 37, 0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Rating Stars */}
              <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} style={{ color: '#f9a825', fontSize: '1.2rem' }} />
                ))}
              </div>

              {/* Quote */}
              <p style={{ 
                color: '#b0b0b0', 
                lineHeight: 1.7, 
                marginBottom: '25px',
                fontStyle: 'italic',
              }}>
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingTop: '20px', borderTop: '1px solid rgba(249, 168, 37, 0.1)' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#0a0a1a',
                }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 style={{ fontWeight: 600, marginBottom: '3px' }}>{testimonial.name}</h5>
                  <p style={{ fontSize: '0.85rem', color: '#b0b0b0' }}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '10px' }}>
              Ready to Join Our Success Story?
            </h3>
            <p style={{ color: '#b0b0b0', maxWidth: '400px' }}>
              Get in touch with our team today for a free consultation and custom quote.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .container > div:nth-child(4) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .container > div:nth-child(6) {
            flex-direction: column !important;
            text-align: center;
          }
        }
        @media (max-width: 768px) {
          .container > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
          .container > div:nth-child(3) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;