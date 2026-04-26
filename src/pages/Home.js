import React from 'react';
import { Box, Typography, Container, Button, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            sx={{ py: 4, bgcolor: '#f5f5f5' }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Typography variant="h3" sx={{ mb: 2, color: '#1976d2' }}>
                                Powering Tomorrow with Solar Energy
                            </Typography>
                            <Typography variant="h1" sx={{ mb: 3, fontWeight: 600 }}>
                                Clean, Renewable, Affordable
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: '#424242' }}>
                                We provide end-to-end solar solutions for residential, commercial, and industrial projects.
                                Our mission is to make solar energy accessible to everyone.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ px: 4, py: 2, fontSize: '1rem' }}
                                startIcon={<svg> {/* Solar icon placeholder */}</svg>}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <motion.img
                            src="/solar-hero.jpg"
                            alt="Solar panels"
                            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </motion.section>
    );
};

export default Home;