import React from 'react';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Our Clients', href: '/our-clients' },
      { name: 'Why RTL', href: '/why-rtl' },
    ],
    ourProjects: [
      { name: 'Our Projects', href: '/our-project' },
    ],
    decarbonisation: {
      energyGeneration: [
        { name: 'Utility/ Ground mount solution', href: '/energy-generation/utility' },
        { name: 'Floating Solar', href: '/energy-generation/floating-solar' },
        { name: 'Rooftop', href: '/energy-generation/commercial-and-industrial-roof-top' },
        { name: 'Asset Management', href: '/energy-generation/asset-management' },
      ],
      netZero: [
        { name: 'Green hydrogen', href: '/net-zero-solutions/green-hydrogen' },
        { name: 'Energy Storage', href: '/net-zero-solutions/energy-storage' },
      ],
    },
    resources: [
      { name: 'Blogs', href: '/blogs' },
      { name: 'Download Center', href: '/download-center' },
      { name: 'Savings Calculator', href: '/savings-calculator' },
      { name: 'Media', href: '/press-release' },
      { name: 'Events', href: '/events' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
    people: [
      { name: 'Life At Waaree', href: '/life-at-waaree' },
      { name: 'Career', href: '/careers' },
    ],
    investorRelations: [
      { name: 'Corporate Announcements', href: '/investors/corporate-announcements' },
      { name: 'Corporate Governance', href: '/investors/corporate-governance' },
      { name: 'Composition of Board & Committees', href: '/investors/composition-of-board-committees' },
      { name: 'Code and Policies', href: '/investors/code-and-policies' },
      { name: 'Subsidiary Information', href: '/investors/subsidiary-information' },
      { name: 'Investor KYC Documents', href: '/investors/investor-kyc-documents' },
      { name: 'Presentation & Transcript', href: '/investors/presentation-transcript' },
      { name: 'Notice of Postal Ballot', href: '/investors/notice-of-postal-ballot' },
      { name: 'Press Release', href: '/investors/press-release' },
      { name: 'Agreement', href: '/investors/agreement' },
      { name: 'Unpaid dividend-2025', href: '/investors/unpaid-dividend-2025' },
      { name: 'Disclosure Under Regulation', href: '/investors/disclosure-under-regulation' },
    ],
    contact: [
      { name: 'Enquiry', href: '/enquiry' },
      { name: 'Grievance', href: '/grievance' },
    ],
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, name: 'LinkedIn', href: 'https://in.linkedin.com/company/waaree-rtl' },
    { icon: <TwitterIcon />, name: 'Twitter', href: 'https://x.com/waaree_rtl' },
    { icon: <FacebookIcon />, name: 'Facebook', href: 'https://www.facebook.com/waareertl/' },
    { icon: <InstagramIcon />, name: 'Instagram', href: 'https://www.instagram.com/waaree_renewable_technologies/' },
    { icon: <YouTubeIcon />, name: 'YouTube', href: 'https://www.youtube.com/channel/UC2q8Mxn83c5MyOv2PCbLeiw' },
  ];

  const linkStyle = {
    color: '#b0b0b0',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '0.95rem',
  };

  return (
    <footer
      style={{
        background: '#0a0a1a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        background: '#121225',
        borderRadius: '50% 50% 0 0 / 30px 30px 0 0',
        transform: 'translateY(-99px)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '60px' }}>
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}
            >
              <div style={{ width: '50px', height: '50px' }}>
                <svg viewBox="0 0 50 50" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f9a825" />
                      <stop offset="100%" stopColor="#ff8f00" />
                    </linearGradient>
                  </defs>
                  <circle cx="25" cy="25" r="22" fill="none" stroke="url(#footerGradient)" strokeWidth="2" />
                  <circle cx="25" cy="8" r="4" fill="url(#footerGradient)" />
                  <circle cx="25" cy="42" r="4" fill="url(#footerGradient)" />
                  <circle cx="8" cy="25" r="4" fill="url(#footerGradient)" />
                  <circle cx="42" cy="25" r="4" fill="url(#footerGradient)" />
                  <circle cx="25" cy="25" r="8" fill="url(#footerGradient)" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
                  WAAREE <span style={{ color: '#f9a825' }}>RTL</span>
                </h3>
                <p style={{ fontSize: '0.7rem', color: '#b0b0b0', letterSpacing: '2px' }}>RENEWABLE TECHNOLOGIES</p>
              </div>
            </motion.div>

            <p style={{ color: '#b0b0b0', marginBottom: '30px', lineHeight: 1.8 }}>
              Waaree Renewable Technologies Limited (WRTL), a subsidiary of Waaree Energies, delivers end-to-end renewable energy EPC solutions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <LocationOnIcon style={{ color: '#f9a825', fontSize: '1.3rem', marginTop: '3px' }} />
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>
                  602, Western Edge - I, Off Western Express Highway,<br />
                  Borivali (E), Mumbai, Maharashtra, India. Pin Code: 400066
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <PhoneIcon style={{ color: '#f9a825', fontSize: '1.3rem' }} />
                <a href="tel:18002121321" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  Toll Free - 1800-2121-321
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <EmailIcon style={{ color: '#f9a825', fontSize: '1.3rem' }} />
                <a href="mailto:info@waareertl.com" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
                  info@waareertl.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Our Projects</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {footerLinks.ourProjects.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Decarbonisation Solution</h4>
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '15px', color: '#f9a825' }}>Energy Generation</h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {footerLinks.decarbonisation.energyGeneration.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '15px', color: '#f9a825' }}>Net Zero</h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {footerLinks.decarbonisation.netZero.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Resource</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>People</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {footerLinks.people.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Investor Relations</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {footerLinks.investorRelations.slice(0, 6).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '25px', color: '#fff' }}>Contact</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{
          padding: '30px 0',
          borderTop: '1px solid rgba(249, 168, 37, 0.2)',
          borderBottom: '1px solid rgba(249, 168, 37, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '15px', color: '#fff' }}>Follow us on</h4>
            <div style={{ display: 'flex', gap: '15px' }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, background: '#f9a825' }}
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
                    textDecoration: 'none',
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/terms-and-conditions" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
              Terms & Conditions
            </a>
            <a href="/privacy-policy" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = '#f9a825')} onMouseLeave={(e) => (e.target.style.color = '#b0b0b0')}>
              Privacy Policy
            </a>
          </div>
        </div>

        <div style={{
          padding: '30px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
            © {currentYear} Waaree Renewable Technologies Limited. All Rights Reserved.
          </p>
          <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
            CIN: L93000MH1999PLC120470
          </p>
        </div>
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 5px 20px rgba(249, 168, 37, 0.4)',
          zIndex: 1000,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a0a1a">
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      </motion.button>

      <style>{`
        @media (max-width: 1024px) {
          .container > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
          .container > div:nth-child(3) {
            flex-direction: column !important;
            text-align: center;
          }
          .container > div:nth-child(4) {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;