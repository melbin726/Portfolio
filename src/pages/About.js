import React from 'react';
import { Container, Typography, Box, Grid, LinearProgress, Avatar, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Code, Work, Timeline, Star, TrendingUp } from '@mui/icons-material';

const PageContainer = styled(Box)({
  minHeight: '100vh',
  // Subtle radial gradient from center to edges, light gray to white for the page background
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #ffffff 75%)',
  color: '#333333', // Default text color is dark gray
  paddingTop: '100px',
  paddingBottom: '60px',
  position: 'relative',
  overflow: 'hidden',
  // Removed the ::before pattern for cleaner gradients
});

const GlassCard = styled(Card)({
  // Always apply a subtle radial gradient for depth
  background: 'radial-gradient(circle at top left, #ffffff 0%, #f9f9f9 100%)',
  backdropFilter: 'blur(5px)', // Less blur as background is light
  border: '1px solid rgba(0, 0, 0, 0.04)', // Even lighter border
  borderRadius: '15px', // Consistent border radius
  transition: 'all 0.3s ease',
  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.04)', // Very light initial shadow
  '&:hover': {
    transform: 'translateY(-5px)', // Consistent lift
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)', // More prominent but still light shadow on hover
    background: 'radial-gradient(circle at top left, #ffffff 0%, #f0f0f0 100%)', // Subtle gradient change on hover
    border: '1px solid rgba(0, 0, 0, 0.08)', // Slightly more defined border on hover
  },
  '&:active': { // For touch devices
    transform: 'translateY(-1px)', // Simulating a soft press
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    background: 'radial-gradient(circle at top left, #f0f0f0 0%, #ffffff 100%)',
  },
});

const StyledAvatar = styled(Avatar)({
  width: 200,
  height: 200,
  border: '4px solid rgba(0, 0, 0, 0.1)', // Lighter border
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)', // Lighter shadow
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)', // More prominent but still light shadow
  },
  '&:active': { // For touch devices
    transform: 'scale(1)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  },
});

const SkillCard = styled(GlassCard)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const SkillIcon = styled(Box)({
  // Subtle white to light gray radial gradient for depth
  width: '50px',
  height: '50px',
  borderRadius: '50%', // Circular icons
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #e8e8e8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  border: '1px solid rgba(0, 0, 0, 0.08)', // Softer border
  color: '#333333', // Dark gray icon color
  transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)', // Very subtle shadow
  '&:hover': {
    background: 'radial-gradient(circle at center, #e0e0e0 0%, #d0d0d0 100%)', // Darker gradient on hover
    transform: 'scale(1.08)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  '&:active': { // For touch devices
    background: 'radial-gradient(circle at center, #d0d0d0 0%, #e0e0e0 100%)',
    transform: 'scale(1)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

const AnimatedLinearProgress = styled(LinearProgress)({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(0, 0, 0, 0.1)', // Lighter background for the track
  '& .MuiLinearProgress-bar': {
    // Black to dark gray gradient for the progress bar
    background: 'linear-gradient(90deg, #333333, #000000)',
    borderRadius: 4,
  },
});

const TimelineItem = styled(motion.div)({
  position: 'relative',
  paddingLeft: '40px',
  marginBottom: '30px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '15px',
    top: '8px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    // Black to dark gray gradient for timeline dots
    background: 'linear-gradient(135deg, #333333, #000000)',
    border: '2px solid #ffffff', // White border for contrast
    boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.08)', // Subtle shadow
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '19px',
    top: '25px',
    width: '2px',
    height: 'calc(100% + 10px)',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1), transparent)', // Subtle black line
  },
  '&:last-child::after': {
    display: 'none',
  },
});

const ProjectCardStyled = styled(GlassCard)({ // Renamed to avoid conflict with Portfolio ProjectCard
  height: '100%',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
  },
});

const StyledChip = styled(Chip)({
  // Subtle light gray background with soft border
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  color: '#333333', // Dark gray text
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)', // Slightly darker on hover
    transform: 'scale(1.05)',
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transform: 'scale(1)',
  },
});

const SectionTitleIcon = styled(Box)({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'radial-gradient(circle at center, #e0e0e0 0%, #d0d0d0 100%)', // Light gradient for section icons
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000', // Black icon color
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
});


const skills = [
  { name: 'React JS', level: 80, icon: <Code /> },
  { name: 'C#', level: 70, icon: <Code /> },
  { name: 'SQL', level: 85, icon: <Code /> },
  { name: 'JavaScript', level: 80, icon: <Code /> },
  { name: 'Python', level: 60, icon: <Code /> },
  { name: 'Java', level: 75, icon: <Code /> },
];

const projects = [
  {
    title: 'Cambridge Dashboard Enhancements',
    company: 'Talview',
    description: 'Enhanced the Cambridge Dashboard with improved UI/UX using React.js, focusing on better user interface and functionality.',
    technologies: ['React.js', 'JavaScript', 'CSS'],
  },
  {
    title: 'GrocerEase',
    company: 'MicroGenesis TechSoft',
    description: 'Developed comprehensive features including backend services with C# and database management with PostgreSQL.',
    technologies: ['C#', 'PostgreSQL', 'React.js'],
  },
  {
    title: 'College Placement Portal',
    company: 'Team Project',
    description: 'Worked on frontend and database components for a comprehensive college placement management system.',
    technologies: ['React.js', 'SQL', 'JavaScript'],
  },
  {
    title: 'OLX Clone',
    company: 'Personal Project',
    description: 'Developed a functional OLX clone to practice and improve web development skills with modern technologies.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Netflix Clone',
    company: 'Personal Project',
    description: 'Created a Netflix clone to enhance understanding of front-end technologies and streaming functionalities.',
    technologies: ['React.js', 'API Integration', 'CSS'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
};

const About = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 2,
              // Black to dark gray gradient for the main heading text
              background: 'linear-gradient(45deg, #000000, #333333)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="#666666" // Medium gray for sub-heading
            sx={{
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Passionate developer crafting innovative solutions with modern technologies
          </Typography>
        </motion.div>

        {/* Main About Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box display="flex" justifyContent="center" mb={3}>
                  <StyledAvatar
                    alt="Melbin Joseph"
                    src="/IMG_6049.JPG"
                  />
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <GlassCard>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom color="#333333"> {/* Dark gray for heading */}
                      Web Developer & Software Engineer
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#666666" // Medium gray for body text
                      paragraph
                      sx={{ lineHeight: 1.7 }}
                    >
                      I am currently working as part of the development team at Kristu Jayanti Software Development Center (KJSDC), contributing to the college’s internal ERP solution. My role focuses on building responsive and modular front-end interfaces using Angular and Tailwind CSS, ensuring smooth integration and user-friendly design across different modules.
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#666666" // Medium gray for body text
                      paragraph
                      sx={{ lineHeight: 1.7 }}
                    >
                      I began at KJSDC as a software development intern from September to December 2024, and transitioned into a full-time role in January 2025. During this time, I’ve collaborated closely with backend and UI teams to deliver cohesive, production-ready components that meet real-world needs.
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#666666" // Medium gray for body text
                      paragraph
                      sx={{ lineHeight: 1.7 }}
                    >
                      I hold a Master's degree in Computer Applications from Kristu Jayanti College, Bengaluru. With hands-on experience in technologies such as Angular, React.js, C#, PostgreSQL, and Java, I bring a well-rounded understanding of full-stack development and a commitment to clean, scalable code.
                    </Typography>
                  </CardContent>
                </GlassCard>
              </motion.div>
            </Grid>

          </Grid>
        </motion.div>

        {/* Work Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2, color: '#000000' }} 
          >
            <SectionTitleIcon><Timeline /></SectionTitleIcon> Work Experience
          </Typography>
          <GlassCard sx={{ mb: 6 }}>
            <CardContent sx={{ p: 4 }}>

              {/* KJSDC Full-Time */}
              <TimelineItem
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" fontWeight="bold" color="#333333"> {/* Dark gray for title */}
                  Software Development Engineer
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom> {/* Medium gray for date/company */}
                  Kristu Jayanti Software Development Center • Dec 2024 – Present
                </Typography>
                <Typography variant="body2" color="#666666"> {/* Medium gray for description */}
                  Working as a full-time developer focusing on end-to-end web application development using Angular, Java, and other technologies.
                </Typography>
              </TimelineItem>

              {/* KJSDC Internship */}
              <TimelineItem
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" fontWeight="bold" color="#333333">
                  Software Developer Internship
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom>
                  Kristu Jayanti Software Development Center • Sep 2024 – Nov 2024
                </Typography>
                <Typography variant="body2" color="#666666">
                  Interned as part of the software team building internal applications with Java Spring Boot and Angular.
                </Typography>
              </TimelineItem>

              {/* MicroGenesis */}
              <TimelineItem
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" fontWeight="bold" color="#333333">
                  Software Developer Internship
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom>
                  MicroGenesis TechSoft • April 2023 – Aug 2023
                </Typography>
                <Typography variant="body2" color="#666666">
                  Worked on GrocerEase application with C# backend services and PostgreSQL database management.
                </Typography>
              </TimelineItem>

              {/* Talview */}
              <TimelineItem
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" fontWeight="bold" color="#333333">
                  Software Developer Internship
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom>
                  Talview • January 2023
                </Typography>
                <Typography variant="body2" color="#666666">
                  Enhanced Cambridge Dashboard with React.js, focusing on UI/UX improvements.
                </Typography>
              </TimelineItem>

            </CardContent>
          </GlassCard>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2, color: '#000000' }} 
          >
            <SectionTitleIcon><TrendingUp /></SectionTitleIcon> Skills & Expertise
          </Typography>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard>
                    <CardContent sx={{ p: 3 }}>
                      <SkillIcon>
                        {skill.icon}
                      </SkillIcon>
                      <Typography variant="h6" fontWeight="bold" color="#333333" gutterBottom> {/* Dark gray for skill name */}
                        {skill.name}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Box display="flex" justifyContent="space-between" mb={1}>
                          <Typography variant="body2" color="#666666"> {/* Medium gray for text */}
                            Proficiency
                          </Typography>
                          <Typography variant="body2" color="#666666"> {/* Medium gray for percentage */}
                            {skill.level}%
                          </Typography>
                        </Box>
                        <AnimatedLinearProgress
                          variant="determinate"
                          value={skill.level}
                        />
                      </Box>
                    </CardContent>
                  </SkillCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2, color: '#000000' }} 
          >
            <SectionTitleIcon><Work /></SectionTitleIcon> Featured Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCardStyled> {/* Using renamed styled component */}
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <Star sx={{ color: '#FFD700' }} /> {/* Keeping gold star as a highlight */}
                        <Typography variant="h6" fontWeight="bold" color="#333333"> {/* Dark gray for title */}
                          {project.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="#666666" gutterBottom> {/* Medium gray for company */}
                        {project.company}
                      </Typography>
                      <Typography variant="body1" color="#666666" paragraph sx={{ lineHeight: 1.6 }}> {/* Medium gray for description */}
                        {project.description}
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                        {project.technologies.map((tech) => (
                          <StyledChip key={tech} label={tech} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </ProjectCardStyled>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </PageContainer>
  );
};

export default About;