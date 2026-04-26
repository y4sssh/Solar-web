import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
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
                    Contact Us
                </Typography>
                <Paper sx={{ p: 4, boxShadow: 3 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, color: '#424242' }}>
                                    Get In Touch
                                </Typography>
                                <form>
                                    <TextField
                                        label="Full Name"
                                        variant="outlined"
                                        sx={{ mb: 2, width: '100%' }}
                                        required
                                    />
                                    <TextField
                                        label="Email Address"
                                        variant="outlined"
                                        sx={{ mb: 2, width: '100%' }}
                                        type="email"
                                        required
                                    />
                                    <TextField
                                        label="Phone Number"
                                        variant="outlined"
                                        sx={{ mb: 2, width: '100%' }}
                                        type="tel"
                                    />
                                    <TextField
                                        label="Message"
                                        variant="outlined"
                                        sx={{ mb: 2, width: '100%' }}
                                        multiline
                                        rows={4}
                                        required
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ px: 4, py: 2, fontSize: '1rem' }}
                                        type="submit"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <motion.img
                                src="/contact.jpg"
                                alt="Contact"
                                sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </motion.section>
    );
};

export default Contact;