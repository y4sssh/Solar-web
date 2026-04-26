import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Solar Farm Project',
            image: '/project1.jpg',
            description: 'A 50MW solar farm providing clean energy to 15,000 homes.',
            location: 'California, USA',
            capacity: '50 MW'
        },
        {
            id: 2,
            title: 'Rooftop Solar Installation',
            image: '/project2.jpg',
            description: 'Commercial rooftop solar system for a manufacturing facility.',
            location: 'Germany',
            capacity: '5 MW'
        },
        {
            id: 3,
            title: 'Solar Mini-Grid',
            image: '/project3.jpg',
            description: 'Off-grid solar solution for a rural community.',
            location: 'Kenya',
            capacity: '100 kW'
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            sx={{ py: 4, bgcolor: '#f5f5f5' }}
        >
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: '#1976d2' }}>
                    Our Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: project.id * 0.1 }}
                            sx={{ xs: 12, sm: 6, md: 4 }}
                        >
                            <Card sx={{ height: '100%', boxShadow: 2, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{ borderRadius: 1 }}
                                />
                                <CardContent sx={{ flexGrow: 1, px: 3, py: 2 }}>
                                    <Typography variant="h5" component="div" sx={{ mb: 2, color: '#1976d2' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 2, color: '#424242' }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ mb: 2, color: '#666', fontSize: '0.9rem' }}>
                                        <Typography variant="body2" sx={{ mr: 2 }}>
                                            <strong>Location:</strong> {project.location}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Capacity:</strong> {project.capacity}
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        sx={{ mb: 2 }}
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Grid>
            </Container>
        </motion.section>
    );
};

export default Projects;