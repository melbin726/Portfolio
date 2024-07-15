// src/pages/Resume.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Resume() {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" component="h1">
          My Resume
        </Typography>
        <Typography variant="body1" component="p">
          Download my resume <a href="https://drive.google.com/file/d/1yxTmgz4TYJo-xFheg2bCurP7mY-0_gr7/view?usp=drive_link" target="_blank">here</a>.
        </Typography>
      </Box>
    </Container>
  );
}

export default Resume;
