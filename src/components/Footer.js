import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <motion.footer
            sx={{ bgcolor: '#0a0a1a', color: '#fff', py: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" gutterBottom style={{
                            background: 'linear-gradient(135deg, #f9a825 0%, #ff8f00 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            padding: '0 10px',
                            display: 'inline-block',
                            borderRadius: '5px'
                        }}>
                            WAAREE <span style={{
                                background: 'linear-gradient(135deg, #ff8f00 0%, #f9a825 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>RTL</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{
                            fontSize: '0.95rem',
                            lineHeight: 1.6
                        }}>
                            Leading the way in solar energy solutions for a sustainable future.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" gutterBottom style={{
                            color: '#f9a825',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                        }}>
                            Quick Links
                        </Typography>
                        <Box>
                            <MuiLink href="/" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                Home
                            </MuiLink>
                            <MuiLink href="/about" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                About
                            </MuiLink>
                            <MuiLink href="/projects" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                Projects
                            </MuiLink>
                            <MuiLink href="/contact" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                Contact
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" gutterBottom style={{
                            color: '#f9a825',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                        }}>
                            Services
                        </Typography>
                        <Box>
                            <MuiLink href="#" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                Solar Panel Installation
                            </MuiLink>
                            <MuiLink href="#" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                Maintenance & Support
                            </MuiLink>
                            <MuiLink href="#" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                Energy Consulting
                            </MuiLink>
                            <MuiLink href="#" underline="none" color="text.secondary" sx={{ mb: 1.5, display: 'block' }} style={{
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}>
                                Financing Options
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5" gutterBottom style={{
                            color: '#f9a825',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                        }}>
                            Contact Us
                        </Typography>
                        <Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }} style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.6
                            }}>
                                602, Western Edge - I, Off Western Express Highway,<br />
                                Nagpur, Maharashtra, India.<br />
                                Pin Code: 400066
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }} style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.6
                            }}>
                                Phone: +91-9168031615<br />
                                Mon-Sat: 9AM to 6PM
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }} style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.6
                            }}>
                                Email: kaustubhsolarevolution@gmail.com<br />
                                careers@waaree.com
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                <a href="https://facebook.com/solarwaaree" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', fontSize: 1.5 }}>
                                    <FacebookIcon />
                                </a>
                                <a href="https://twitter.com/solarwaaree" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', fontSize: 1.5 }}>
                                    <TwitterIcon />
                                </a>
                                <a href="https://linkedin.com/company/solarwaaree" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', fontSize: 1.5 }}>
                                    <LinkedInIcon />
                                </a>
                                <a href="https://instagram.com/solarwaaree" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', fontSize: 1.5 }}>
                                    <InstagramIcon />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Typography variant="caption" color="text.secondary" style={{
                        fontSize: '0.85rem',
                        letterSpacing: '0.5px'
                    }}>
                        © {new Date().getFullYear()} WAAREE RTL. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </motion.footer>
    );
};

export default Footer;