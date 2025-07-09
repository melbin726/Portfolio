import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, Chip, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Launch, 
  GitHub, 
  Code, 
  Storage, 
  Web, 
  Dashboard,
  ShoppingCart,
  School,
  Storefront,
  Movie,
  FilterList,
  ViewModule,
  ViewList
} from '@mui/icons-material';

// Styled components
const HeroSection = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '80px 0 60px',
  marginTop: '64px',
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

const ProjectCard = styled(motion(Paper))({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  padding: '24px',
  height: '100%',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
});

const ProjectIcon = styled(Box)({
  width: '60px',
  height: '60px',
  borderRadius: '15px',
  background: 'linear-gradient(135deg, #ffffff20, #ffffff10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
});

const TechChip = styled(Chip)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  margin: '4px',
  fontSize: '0.75rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
  },
});

const FilterButton = styled(Button)({
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '25px',
  padding: '8px 20px',
  margin: '0 8px 8px 0',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
  },
});

const ActiveFilterButton = styled(FilterButton)({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.5)',
});

const ViewToggle = styled(IconButton)({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const ProjectsContainer = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  minHeight: '100vh',
  padding: '40px 0',
});

// Project data with enhanced information
const projects = [
  {
    id: 1,
    title: 'Cambridge Dashboard Enhancements',
    description: 'Enhanced the Cambridge Dashboard with improved user interface and functionality, focusing on user experience and performance optimization using modern React.js patterns.',
    technologies: ['React.js', 'SQL', 'Material UI', 'JavaScript', 'API Integration'],
    category: 'Professional',
    icon: <Dashboard sx={{ fontSize: 28 }} />,
    status: 'Completed',
    duration: '3 months',
    role: 'Frontend Developer',
  },
  {
    id: 2,
    title: 'GrocerEase',
    description: 'Developed a comprehensive grocery management application with backend services and database management, featuring real-time inventory tracking and user management.',
    technologies: ['C#', 'PostgreSQL', 'React.js', 'REST API', 'Entity Framework'],
    category: 'Professional',
    icon: <ShoppingCart sx={{ fontSize: 28 }} />,
    status: 'In Progress',
    duration: '4 months',
    role: 'Full Stack Developer',
  },
  {
    id: 3,
    title: 'College Placement Portal',
    description: 'Collaborated on a team project to build a placement portal system for college students, handling frontend components and database design.',
    technologies: ['React.js', 'SQL', 'Node.js', 'Express'],
    category: 'Academic',
    icon: <School sx={{ fontSize: 28 }} />,
    status: 'Completed',
    duration: '2 months',
    role: 'Team Developer',
  },
  {
    id: 4,
    title: 'OLX Clone',
    description: 'Built a fully functional marketplace clone with user authentication, product listings, search functionality, and responsive design.',
    technologies: ['React.js', 'PostgreSQL', 'Node.js', 'JWT'],
    category: 'Personal',
    icon: <Storefront sx={{ fontSize: 28 }} />,
    status: 'Completed',
    duration: '6 weeks',
    role: 'Solo Developer',
  },
  {
    id: 5,
    title: 'Netflix Clone',
    description: 'Created a streaming platform clone with movie browsing, user profiles, and responsive design to understand modern web development patterns.',
    technologies: ['React.js', 'PostgreSQL', 'CSS3', 'API Integration'],
    category: 'Personal',
    icon: <Movie sx={{ fontSize: 28 }} />,
    status: 'Completed',
    duration: '4 weeks',
    role: 'Solo Developer',
  },
];

const categories = ['All', 'Professional', 'Academic', 'Personal'];

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              fontWeight="bold" 
              textAlign="center" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                mb: 3
              }}
            >
              My Projects
            </Typography>
            <Typography 
              variant="h6" 
              textAlign="center" 
              color="rgba(255, 255, 255, 0.8)"
              sx={{ 
                maxWidth: '600px', 
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                lineHeight: 1.6
              }}
            >
              Explore my journey through code - from professional applications to personal experiments,
              each project represents a step in my continuous learning and growth as a developer.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Projects Section */}
      <ProjectsContainer>
        <Container maxWidth="lg">
          {/* Filter and View Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box 
              display="flex" 
              justifyContent="space-between" 
              alignItems="center" 
              mb={4}
              flexWrap="wrap"
              gap={2}
            >
              <Box>
                {categories.map((category) => {
                  const ButtonComponent = filter === category ? ActiveFilterButton : FilterButton;
                  return (
                    <ButtonComponent
                      key={category}
                      onClick={() => setFilter(category)}
                      startIcon={<FilterList />}
                    >
                      {category}
                    </ButtonComponent>
                  );
                })}
              </Box>
              
              <Box>
                <ViewToggle 
                  onClick={() => setViewMode('grid')}
                  sx={{ 
                    backgroundColor: viewMode === 'grid' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)' 
                  }}
                >
                  <ViewModule />
                </ViewToggle>
                <ViewToggle 
                  onClick={() => setViewMode('list')}
                  sx={{ 
                    backgroundColor: viewMode === 'list' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)' 
                  }}
                >
                  <ViewList />
                </ViewToggle>
              </Box>
            </Box>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Grid container spacing={3}>
                {filteredProjects.map((project, index) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={viewMode === 'grid' ? 6 : 12} 
                    key={project.id}
                  >
                    <motion.div variants={itemVariants}>
                      <ProjectCard
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        sx={{
                          display: 'flex',
                          flexDirection: viewMode === 'list' ? 'row' : 'column',
                          alignItems: viewMode === 'list' ? 'center' : 'stretch',
                          gap: viewMode === 'list' ? 3 : 0,
                        }}
                      >
                        {viewMode === 'grid' && (
                          <ProjectIcon>
                            {project.icon}
                          </ProjectIcon>
                        )}
                        
                        <Box flex={1}>
                          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                            <Typography 
                              variant="h5" 
                              fontWeight="bold" 
                              color="white"
                              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                            >
                              {project.title}
                            </Typography>
                            <Chip 
                              label={project.status} 
                              size="small"
                              sx={{
                                backgroundColor: project.status === 'Completed' ? 'rgba(76, 175, 80, 0.3)' : 'rgba(255, 193, 7, 0.3)',
                                color: 'white',
                                border: `1px solid ${project.status === 'Completed' ? 'rgba(76, 175, 80, 0.5)' : 'rgba(255, 193, 7, 0.5)'}`,
                              }}
                            />
                          </Box>
                          
                          <Typography 
                            variant="body1" 
                            color="rgba(255, 255, 255, 0.8)" 
                            paragraph
                            sx={{ lineHeight: 1.6 }}
                          >
                            {project.description}
                          </Typography>
                          
                          <Box mb={2}>
                            <Typography 
                              variant="body2" 
                              color="rgba(255, 255, 255, 0.7)"
                              sx={{ mb: 1 }}
                            >
                              <strong>Role:</strong> {project.role} | <strong>Duration:</strong> {project.duration}
                            </Typography>
                          </Box>
                          
                          <Box mb={3}>
                            {project.technologies.map((tech, techIndex) => (
                              <TechChip 
                                key={techIndex} 
                                label={tech} 
                                size="small"
                              />
                            ))}
                          </Box>
                          
                          <Box display="flex" gap={2}>
                            <IconButton 
                              sx={{ 
                                color: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }
                              }}
                            >
                              <Launch />
                            </IconButton>
                            <IconButton 
                              sx={{ 
                                color: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }
                              }}
                            >
                              <GitHub />
                            </IconButton>
                          </Box>
                        </Box>
                      </ProjectCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box textAlign="center" mt={8}>
              <Typography 
                variant="h6" 
                color="rgba(255, 255, 255, 0.8)"
                sx={{ mb: 2 }}
              >
                Have a project in mind?
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #ffffff20, #ffffff10)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '30px',
                  padding: '12px 32px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ffffff30, #ffffff20)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Let's Work Together
              </Button>
            </Box>
          </motion.div>
        </Container>
      </ProjectsContainer>
    </Box>
  );
}

export default Portfolio;