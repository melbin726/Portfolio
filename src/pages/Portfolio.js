import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';

const ProjectBox = styled(Paper)({
  backgroundColor: '#000000', // Black background
  color: '#FFFFFF', // White text
  padding: '20px',
  marginTop: '20px',
  borderRadius: '15px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Box shadow for a 3D effect
});

const projects = [
  {
    title: 'Cambridge Dashboard Enhancements',
    description: 'Worked on enhancing the Cambridge Dashboard, focusing on improving user interface and functionality using React.js during my internship at Talview.',
    technologies: 'React.js, SQL, Material UI',
  },
  {
    title: 'GrocerEase',
    description: 'Developed features for the GrocerEase application, which included implementing backend services with C# and managing databases with PostgreSQL during my internship at MicroGenesis TechSoft.',
    technologies: 'C#, PostgreSQL, React.js',
  },
  {
    title: 'College Placement Portal',
    description: 'Worked on frontend and database parts for a team project during MCA.',
    technologies: 'React.js, SQL',
  },
  {
    title: 'OLX Clone',
    description: 'Developed a functional OLX clone to practice and improve skills in web development.',
    technologies: 'React.js, PostgreSQL',
  },
  {
    title: 'Netflix Clone',
    description: 'Created a Netflix clone to enhance understanding of front-end technologies and streaming functionalities.',
    technologies: 'React.js, PostgreSQL',
  },
];

function Portfolio() {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" component="h1" style={{ color: '#FFFFFF' }}>
          My Projects
        </Typography>
        <Typography variant="body1" component="p" style={{ color: '#FFFFFF', marginTop: '10px' }}>
          Here are some of my recent projects...
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ProjectBox>
                <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p" style={{ color: '#BBBBBB', marginTop: '10px' }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" component="p" style={{ color: '#BBBBBB', marginTop: '10px' }}>
                  <strong>Technologies Used:</strong> {project.technologies}
                </Typography>
              </ProjectBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Portfolio;
