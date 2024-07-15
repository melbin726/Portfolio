// src/pages/Portfolio.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Portfolio() {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" component="h1">
          My Projects
        </Typography>
        <Typography variant="body1" component="p">
          Here are some of my recent projects...
        </Typography>
      </Box>
    </Container>
  );
}

export default Portfolio;
