// src/pages/About.js
import React from 'react';
import { Container, Typography, Box, Grid, LinearProgress, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const AnimatedTypography = styled(motion(Typography))({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const SkillProgress = ({ skill, level }) => (
  <Box mb={2}>
    <Typography variant="body1" component="p" gutterBottom>
      {skill}
    </Typography>
    <LinearProgress variant="determinate" value={level} />
  </Box>
);

const SectionContainer = styled(Box)({
  backgroundColor: '#000000', // Black background
  color: '#FFFFFF', // White text
  padding: '20px',
  marginTop: '20px',
  borderRadius: '15px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Box shadow for a 3D effect
});

const About = () => {
  return (
    <Container>
      <Box mt={5}>
        <AnimatedTypography
          variant="h3"
          component="h1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </AnimatedTypography>
        <SectionContainer>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Avatar
                alt="Melbin Joseph"
                src="/DSC_0382.jpg" // Update this path with the correct path to your photo
                style={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" component="p" gutterBottom>
                I am a web developer with expertise in React.js, C#, and PostgreSQL. I am pursuing a Master's degree in Computer Applications from Kristu Jayanti College, Bengaluru, where I have been developing my skills in modern web development and database management.
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                Experienced web developer with a demonstrated history of working on real-world projects. Skilled in React.js, C#, and PostgreSQL, I bring a comprehensive understanding of both front-end and back-end development. My strong technical background, combined with hands-on experience, makes me a proficient and adaptable technology professional.
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Work Timeline:</strong>
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Software Engineer Internship:</strong> Talview (01-01-2023)
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Software Developer Internship:</strong> Talview (Present)
              </Typography>
            </Grid>
          </Grid>
        </SectionContainer>

        <Box mt={5}>
          <AnimatedTypography
            variant="h4"
            component="h2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Skills
          </AnimatedTypography>
          <SectionContainer>
            <SkillProgress skill="React JS" level={80} />
            <SkillProgress skill="C#" level={70} />
            <SkillProgress skill="SQL" level={85} />
            <SkillProgress skill="JavaScript" level={80} />
            <SkillProgress skill="Python" level={60} />
            <SkillProgress skill="Java" level={75} />
          </SectionContainer>
        </Box>

        <Box mt={5}>
          <AnimatedTypography
            variant="h4"
            component="h2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Projects
          </AnimatedTypography>
          <SectionContainer>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>Cambridge Dashboard Enhancements (Talview):</strong> Worked on enhancing the Cambridge Dashboard, focusing on improving user interface and functionality using React.js during my internship at Talview.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>GrocerEase (MicroGenesis TechSoft):</strong> Developed features for the GrocerEase application, which included implementing backend services with C# and managing databases with PostgreSQL during my internship at MicroGenesis TechSoft.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>College Placement Portal:</strong> Worked on frontend and database parts for a team project during MCA.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>OLX Clone:</strong> Developed a functional OLX clone to practice and improve skills in web development.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>Netflix Clone:</strong> Created a Netflix clone to enhance understanding of front-end technologies and streaming functionalities.
            </Typography>
          </SectionContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
