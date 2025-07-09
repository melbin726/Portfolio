// src/pages/Resume.js
import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button, Grid, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { 
  Download, 
  Work, 
  School, 
  Code, 
  Psychology, 
  Timeline,
  Star,
  Language,
  EmojiEvents,
  Visibility
} from '@mui/icons-material';

const HeroSection = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  paddingTop: '120px',
  paddingBottom: '60px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'circles\' patternUnits=\'userSpaceOnUse\' width=\'50\' height=\'50\'><circle cx=\'25\' cy=\'25\' r=\'1\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23circles)\'></rect></svg>")',
  },
});

const AnimatedTypography = styled(motion(Typography))({
  position: 'relative',
  zIndex: 1,
});

const GradientButton = styled(Button)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: '30px',
  padding: '12px 32px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 24px rgba(102, 126, 234, 0.4)',
  },
});

const OutlineButton = styled(Button)({
  border: '2px solid rgba(255, 255, 255, 0.8)',
  color: 'white',
  borderRadius: '30px',
  padding: '10px 32px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid white',
    transform: 'translateY(-3px)',
  },
});

const SectionContainer = styled(Paper)({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#FFFFFF',
  padding: '30px',
  marginTop: '30px',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
  },
});

const SkillCard = styled(Card)({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
});

const SkillChip = styled(Chip)({
  background: 'rgba(255, 255, 255, 0.2)',
  color: 'white',
  margin: '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.3)',
    transform: 'scale(1.05)',
  },
});

const IconWrapper = styled(Box)({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ffffff20, #ffffff10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
});

const MainContainer = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  minHeight: '100vh',
  paddingBottom: '40px',
});

function Resume() {
  const [activeSection, setActiveSection] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skills = {
    frontend: ['React.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Java', 'C#', 'SQL', 'PostgreSQL', 'Node.js', 'REST APIs'],
    tools: ['Git', 'Visual Studio Code', 'IntelliJ IDEA', 'Postman', 'Docker'],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile/Scrum', 'Project Management']
  };

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Kristu Jayanti Software Development Center',
      duration: '2023 - Present',
      description: 'Developing dynamic web applications using Angular, Tailwind CSS, and Java. Creating seamless user experiences and scalable solutions.',
      achievements: ['Built responsive web applications', 'Implemented modern UI/UX designs', 'Collaborated with cross-functional teams']
    }
  ];

  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Melbin_Joseph_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    // Replace with your actual resume file path for preview
    const resumeUrl = '/path-to-your-resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <MainContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <AnimatedTypography
              variant="h2"
              component="h1"
              fontWeight="bold"
              textAlign="center"
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                mb: 3,
                background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Resume
            </AnimatedTypography>
            <AnimatedTypography
              variant="h6"
              textAlign="center"
              sx={{ 
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Explore my professional journey, technical skills, and achievements in software engineering
            </AnimatedTypography>
            <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton
                  startIcon={<Download />}
                  onClick={handleDownload}
                  size="large"
                >
                  Download Resume
                </GradientButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <OutlineButton
                  startIcon={<Visibility />}
                  onClick={handlePreview}
                  size="large"
                >
                  Preview Resume
                </OutlineButton>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <IconWrapper>
                  <Work sx={{ fontSize: 28, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: 'white' }}>
                  Professional Experience
                </Typography>
              </Box>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box mb={3} p={3} 
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" color="rgba(255, 255, 255, 0.8)" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" gutterBottom>
                      {exp.duration}
                    </Typography>
                    <Typography variant="body1" color="rgba(255, 255, 255, 0.9)" paragraph>
                      {exp.description}
                    </Typography>
                    <Box>
                      {exp.achievements.map((achievement, idx) => (
                        <Box key={idx} display="flex" alignItems="center" mb={1}>
                          <Star sx={{ fontSize: 16, color: '#FFD700', mr: 1 }} />
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </SectionContainer>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={4}>
                <IconWrapper>
                  <Code sx={{ fontSize: 28, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: 'white' }}>
                  Technical Skills
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {Object.entries(skills).map(([category, skillList], index) => (
                  <Grid item xs={12} sm={6} md={6} key={category}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <SkillCard>
                        <CardContent>
                          <Typography 
                            variant="h6" 
                            fontWeight="bold" 
                            color="white" 
                            gutterBottom
                            sx={{ textTransform: 'capitalize' }}
                          >
                            {category === 'frontend' ? 'Frontend' : 
                             category === 'backend' ? 'Backend' : 
                             category === 'tools' ? 'Tools & Technologies' : 'Soft Skills'}
                          </Typography>
                          <Box>
                            {skillList.map((skill, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                style={{ display: 'inline-block' }}
                              >
                                <SkillChip
                                  label={skill}
                                  size="small"
                                  variant="outlined"
                                />
                              </motion.div>
                            ))}
                          </Box>
                        </CardContent>
                      </SkillCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </SectionContainer>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <IconWrapper>
                  <School sx={{ fontSize: 28, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: 'white' }}>
                  Education
                </Typography>
              </Box>
              
              <Box p={3} 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                  Bachelor of Computer Applications
                </Typography>
                <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" gutterBottom>
                  Kristu Jayanti College
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
                  2021 - 2024
                </Typography>
              </Box>
            </SectionContainer>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionContainer sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
              Ready to Collaborate?
            </Typography>
            <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" paragraph>
              I'm always open to discussing new opportunities and exciting projects.
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} mt={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <GradientButton
                  startIcon={<Download />}
                  onClick={handleDownload}
                  size="large"
                >
                  Download Full Resume
                </GradientButton>
              </motion.div>
            </Box>
          </SectionContainer>
        </motion.div>
      </Container>
    </MainContainer>
  );
}

export default Resume;