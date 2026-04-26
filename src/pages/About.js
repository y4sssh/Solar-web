import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            sx={{ py: 4 }}
        >
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: '#1976d2' }}>
                    About SolarWaaree
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <motion.img
                            src="/about.jpg"
                            alt="About solar"
                            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#424242' }}>
                                Our Mission
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, color: '#424242' }}>
                                To accelerate the world's transition to sustainable energy by providing affordable, reliable, and efficient solar solutions.
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 3, color: '#424242' }}>
                                Our Vision
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, color: '#424242' }}>
                                A future where every home and business is powered by clean, renewable solar energy.
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 3, color: '#424242' }}>
                                Our Values
                            </Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="body2" sx={{ mb: 1, color: '#424242', fontWeight: 500 }}>
                                    Innovation
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We continuously innovate to bring the latest solar technologies to our customers.
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1, color: '#424242', fontWeight: 500 }}>
                                    Integrity
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We operate with honesty and transparency in all our dealings.
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1, color: '#424242', fontWeight: 500 }}>
                                    Sustainability
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We are committed to environmental stewardship and sustainable practices.
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </motion.section>
    );
};

export default About;