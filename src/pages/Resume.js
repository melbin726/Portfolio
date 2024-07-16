// src/pages/Resume.js
import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

const SectionContainer = styled(Paper)({
  backgroundColor: '#000000', // Black background
  color: '#FFFFFF', // White text
  padding: '20px',
  marginTop: '20px',
  borderRadius: '15px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Box shadow for a 3D effect
});

const ResumeButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#FFFFFF', // White background for the button
  color: '#000000', // Black text
  '&:hover': {
    backgroundColor: '#F0F0F0', // Lighter grey on hover
  },
});

function Resume() {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" component="h1" style={{ color: '#FFFFFF', textAlign: 'center' }}>
          My Resume
        </Typography>
        <SectionContainer>
          <Typography variant="body1" component="p" gutterBottom>
            Below you can find a link to download my resume. It provides detailed information about my professional experience, education, skills, and projects.
          </Typography>
          <ResumeButton
            variant="contained"
            href="https://drive.google.com/file/d/1yxTmgz4TYJo-xFheg2bCurP7mY-0_gr7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </ResumeButton>
        </SectionContainer>
      </Box>
    </Container>
  );
}

export default Resume;
