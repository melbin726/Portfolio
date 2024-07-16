// src/pages/About.js
import React from 'react';
import { Container, Typography, Box, Grid, Paper, LinearProgress, Avatar } from '@mui/material';
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
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
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
              I am a web developer with expertise in React.js, C#, and PostgreSQL. I am pursuing a Master's degree in Computer Applications from Kristu Jayanti College, Bengaluru, where I have been developing my skills in modern web development and database management.              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
              Experienced web developer with a demonstrated history of working on real-world projects. Skilled in React.js, C#, and PostgreSQL, I bring a comprehensive understanding of both front-end and back-end development. My strong technical background, combined with hands-on experience, makes me a proficient and adaptable technology professional.              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Work Timeline:</strong>
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Software Engineer Internship:</strong> Highradius (01-01-2022)
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Full Stack Engineer:</strong> Highradius (01-05-2022)
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Software Engineer Internship:</strong> Talview (01-01-2023)
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <strong>Backend Engineer:</strong> Talview (01-05-2022)
              </Typography>
            </Grid>
          </Grid>
        </Paper>

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
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <SkillProgress skill="Python" level={90} />
            <SkillProgress skill="Node.js" level={85} />
            <SkillProgress skill="JavaScript" level={80} />
            <SkillProgress skill="React" level={60} />
            <SkillProgress skill="Java" level={85} />
          </Paper>
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
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>College Placement Portal:</strong> Worked on frontend and database parts for a team project during MCA.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>OLX Clone:</strong> Developed a functional OLX clone to practice and improve skills in web development.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <strong>Netflix Clone:</strong> Created a Netflix clone to enhance understanding of front-end technologies and streaming functionalities.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
