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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '100px',
            padding: '32px',
            background: 'rgba(26, 26, 58, 0.3)',
            borderRadius: '24px',
            border: '1px solid rgba(249, 168, 37, 0.15)',
            transition: 'all 0.4s ease',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {[
            { number: '500+', label: 'Business Clients', color: '#f9a825' },
            { number: '10,000+', label: 'Residential Installations', color: '#00d4ff' },
            { number: '98%', label: 'Customer Satisfaction', color: '#4caf50' },
            { number: '4.9', label: 'Average Rating', color: '#ff5722' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                padding: '24px',
                background: 'rgba(26, 26, 58, 0.2)',
                border: '1px solid rgba(249, 168, 37, 0.15)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, rgba(${parseInt(stat.color.slice(1, 3), 16)}, ${parseInt(stat.color.slice(3, 5), 16)}, ${parseInt(stat.color.slice(5, 7), 16)}, 0.15) 0%, rgba(${parseInt(stat.color.slice(1, 3), 16)}, ${parseInt(stat.color.slice(3, 5), 16)}, ${parseInt(stat.color.slice(5, 7), 16)}, 0.05) 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                transition: 'all 0.4s ease',
                boxShadow: '0 8px 25px rgba(${parseInt(stat.color.slice(1, 3), 16)}, ${parseInt(stat.color.slice(3, 5), 16)}, ${parseInt(stat.color.slice(5, 7), 16)}, 0.2)'
              }}>
                <h3 style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '8px'
                }}>
                  {stat.number}
                </h3>
              </div>
              <p style={{
                fontWeight: 600,
                marginBottom: '4px',
                fontSize: '1.1rem',
                color: stat.color,
                letterSpacing: '-0.5px'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.02 }}
              style={{
                padding: '28px',
                background: 'rgba(26, 26, 58, 0.3)',
                borderRadius: '24px',
                border: '1px solid rgba(249, 168, 37, 0.15)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Rating Stars with enhanced styling */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    style={{
                      color: '#f9a825',
                      fontSize: '1.4rem',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                color: '#e0e0e0',
                lineHeight: 1.8,
                marginBottom: '24px',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                position: 'relative'
              }}>
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', paddingTop: '20px', borderTop: '1px solid rgba(249, 168, 37, 0.2)' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#0a0a1a',
                  boxShadow: '0 8px 25px rgba(249, 168, 37, 0.3)',
                  transition: 'all 0.4s ease'
                }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 style={{
                    fontWeight: 700,
                    marginBottom: '4px',
                    fontSize: '1.1rem',
                    color: '#fff',
                    letterSpacing: '-0.3px'
                  }}>
                    {testimonial.name}
                  </h5>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#e0e0e0',
                    lineHeight: 1.6
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '100px',
            padding: '48px',
            background: 'linear-gradient(135deg, rgba(249, 168, 37, 0.15) 0%, rgba(255, 143, 0, 0.08) 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(249, 168, 37, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 800,
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              padding: '0 15px',
              borderRadius: '10px'
            }}>
              Ready to Join <span style={{
                background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Our Success Story</span>?
            </h3>
            <p style={{
              color: '#e0e0e0',
              maxWidth: '450px',
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}>
              Get in touch with our team today for a free consultation and custom quote.
            </p>
          </div>
          <motion.button
            whileHover={{
              scale: 1.08,
              background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
              color: '#0a0a1a',
              boxShadow: '0 8px 25px rgba(249, 168, 37, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              padding: '16px 36px',
              borderRadius: '50px',
              letterSpacing: '0.5px',
              transition: 'all 0.4s ease'
            }}
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
         
         @keyframes shimmer {
           0% {
             background-position: -200% 0;
           }
           100% {
             background-position: 200% 0;
           }
         }
       `}</style>
    </section>
  );
};

export default Testimonials;