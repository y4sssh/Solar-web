import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    state: '',
    city: '',
    pincode: '',
    inquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #121225 0%, #0a0a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 168, 37, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
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
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            Have questions? Our expert team is here to help you with all your solar energy needs.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '30px' }}>
              Let&apos;s <span style={{ color: '#f9a825' }}>Connect</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <motion.div
                whileHover={{ x: 10 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '25px',
                  background: 'rgba(249, 168, 37, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(249, 168, 37, 0.1)',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <LocationOnIcon style={{ color: '#0a0a1a', fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '5px' }}>Registered Office</h4>
                  <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>
                    602, Western Edge - I, Off Western Express Highway,<br />
                    Borivali (E), Mumbai, Maharashtra, India.<br />
                    Pin Code: 400066
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '25px',
                  background: 'rgba(249, 168, 37, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(249, 168, 37, 0.1)',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <PhoneIcon style={{ color: '#0a0a1a', fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '5px' }}>Toll Free</h4>
                  <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>
                    1800-2121-321<br />
                    Mon-Sat: 9AM to 6PM
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '25px',
                  background: 'rgba(249, 168, 37, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(249, 168, 37, 0.1)',
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <EmailIcon style={{ color: '#0a0a1a', fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '5px' }}>Email</h4>
                  <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>
                    info@waaree.com<br />
                    careers@waaree.com
                  </p>
                </div>
              </motion.div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '20px' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '15px' }}>
                {['L', 'T', 'F', 'I', 'Y'].map((social, i) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1, background: '#f9a825' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: 'rgba(249, 168, 37, 0.1)',
                      border: '1px solid rgba(249, 168, 37, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                    }}
                  >
                    {social}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '40px',
              background: 'rgba(26, 26, 58, 0.5)',
              borderRadius: '30px',
              border: '1px solid rgba(249, 168, 37, 0.1)',
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '60px 0' }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px',
                  fontSize: '3rem',
                  color: '#0a0a1a',
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '15px' }}>
                  Thank You!
                </h3>
                <p style={{ color: '#b0b0b0' }}>
                  Your inquiry has been submitted. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>
                  Send Us a <span style={{ color: '#f9a825' }}>Message</span>
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        background: 'rgba(249, 168, 37, 0.05)',
                        border: '1px solid rgba(249, 168, 37, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        background: 'rgba(249, 168, 37, 0.05)',
                        border: '1px solid rgba(249, 168, 37, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        background: 'rgba(249, 168, 37, 0.05)',
                        border: '1px solid rgba(249, 168, 37, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        background: 'rgba(249, 168, 37, 0.05)',
                        border: '1px solid rgba(249, 168, 37, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        background: 'rgba(249, 168, 37, 0.05)',
                        border: '1px solid rgba(249, 168, 37, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        background: 'rgba(249, 168, 37, 0.05)',
                        border: '1px solid rgba(249, 168, 37, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>Pin Code</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        background: 'rgba(249, 168, 37, 0.05)',
                        border: '1px solid rgba(249, 168, 37, 0.2)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>Enquire About *</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      background: 'rgba(249, 168, 37, 0.05)',
                      border: '1px solid rgba(249, 168, 37, 0.2)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                  >
                    <option value="" style={{ color: '#b0b0b0' }}>Select Inquiry Type</option>
                    <option value="Utility" style={{ color: '#fff' }}>Utility/Ground Mount</option>
                    <option value="Floating" style={{ color: '#fff' }}>Floating Solar</option>
                    <option value="Rooftop" style={{ color: '#fff' }}>Rooftop</option>
                    <option value="Operation" style={{ color: '#fff' }}>Operation & Maintenance</option>
                    <option value="SolarPanel" style={{ color: '#fff' }}>Solar Panel & Module</option>
                  </select>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#b0b0b0' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      background: 'rgba(249, 168, 37, 0.05)',
                      border: '1px solid rgba(249, 168, 37, 0.2)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{ width: '100%', cursor: 'pointer' }}
                >
                  Submit Inquiry
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .container > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .container > div:nth-child(4) > form > div:first-of-type,
          .container > div:nth-child(4) > form > div:nth-of-type(2),
          .container > div:nth-child(4) > form > div:nth-of-type(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;