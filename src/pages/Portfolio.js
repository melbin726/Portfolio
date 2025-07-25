import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, Chip, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Launch,
  GitHub,
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
  // Subtle radial gradient from center to edges, light gray to white
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #ffffff 75%)',
  color: '#333333', // Dark gray text for contrast
  padding: '80px 0 60px',
  marginTop: '64px', // Space for fixed header
  position: 'relative',
  overflow: 'hidden',
  // Removed the ::before pattern for cleaner gradients
});

const ProjectsContainer = styled(Box)({
  // Subtle linear gradient, slightly darker gray to lighter gray
  background: 'linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)',
  minHeight: '100vh',
  padding: '40px 0',
  color: '#333333', // Default text color for this section
});

const ProjectCard = styled(motion(Paper))({
  // Always apply a subtle radial gradient for depth
  background: 'radial-gradient(circle at top left, #ffffff 0%, #f9f9f9 100%)',
  backdropFilter: 'blur(5px)', // Less blur as background is light
  border: '1px solid rgba(0, 0, 0, 0.04)', // Even lighter border
  borderRadius: '15px', // Consistent border radius
  padding: '24px',
  height: '100%',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.04)', // Very light initial shadow
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)', // More prominent but still light shadow on hover
    background: 'radial-gradient(circle at top left, #ffffff 0%, #f0f0f0 100%)', // Subtle gradient change on hover
    border: '1px solid rgba(0, 0, 0, 0.08)', // Slightly more defined border on hover
  },
  '&:active': { // For touch devices
    transform: 'translateY(-2px)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    background: 'radial-gradient(circle at top left, #f0f0f0 0%, #ffffff 100%)', // Simulating a slight press
  },
});

const ProjectIcon = styled(Box)({
  // Subtle white to light gray radial gradient for depth
  width: '60px',
  height: '60px',
  borderRadius: '15px', // Consistent border radius
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
    transform: 'scale(1.08)', // Slightly more pronounced scale
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  '&:active': { // For touch devices
    background: 'radial-gradient(circle at center, #d0d0d0 0%, #e0e0e0 100%)',
    transform: 'scale(1)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

const TechChip = styled(Chip)({
  // Subtle light gray background with soft border
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  color: '#333333', // Dark gray text
  border: '1px solid rgba(0, 0, 0, 0.1)',
  margin: '4px',
  fontSize: '0.75rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)', // Slightly darker on hover
    transform: 'scale(1.05)',
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transform: 'scale(1)',
  },
});

const FilterButton = styled(Button)({
  color: '#333333', // Dark gray text
  border: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border
  borderRadius: '25px',
  padding: '8px 20px',
  margin: '0 8px 8px 0',
  textTransform: 'none',
  background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)', // Default light gradient
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // Subtle shadow
  '&:hover': {
    background: 'linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%)', // Darker gradient on hover
    border: '1px solid rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  '&:active': { // For touch devices
    background: 'linear-gradient(135deg, #d0d0d0 0%, #e0e0e0 100%)',
    transform: 'translateY(0)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

const ActiveFilterButton = styled(FilterButton)({
  // Active state uses a slightly more prominent gradient and shadow
  background: 'linear-gradient(135deg, #d0d0d0 0%, #c0c0c0 100%)',
  border: '1px solid rgba(0, 0, 0, 0.3)',
  color: '#000000', // Black text for active
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  '&:hover': { // Keep hover effect on active button distinct
    background: 'linear-gradient(135deg, #c0c0c0 0%, #b0b0b0 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
  },
});

const ViewToggle = styled(IconButton)({
  color: '#666666', // Medium gray for icons
  backgroundColor: 'rgba(0, 0, 0, 0.03)', // Subtle background
  border: '1px solid rgba(0, 0, 0, 0.08)', // Subtle border
  margin: '0 4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Slightly more visible on hover
    color: '#000000', // Black on hover
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'scale(0.95)', // Slight press effect
  },
});

const ProjectLinkButton = styled(IconButton)({
  color: '#666666', // Medium gray for icons
  backgroundColor: 'rgba(0, 0, 0, 0.03)', // Subtle background
  border: '1px solid rgba(0, 0, 0, 0.08)', // Subtle border
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Slightly more visible on hover
    color: '#000000', // Black on hover
    borderColor: 'rgba(0,0,0,0.15)', // Darker border on hover
    transform: 'translateY(-2px)', // Consistent lift
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0)',
    boxShadow: 'none',
  },
});

const CallToActionContainedButton = styled(Button)({
  // Sleek black to dark grey gradient
  background: 'linear-gradient(135deg, #222222 0%, #000000 100%)',
  color: 'white',
  borderRadius: '30px',
  padding: '12px 32px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', // Always has a shadow for depth
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #111111 0%, #000000 100%)', // Darker on hover
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
  '&:active': { // Add active state for touch devices
    background: 'linear-gradient(135deg, #000000 0%, #111111 100%)', // Slightly inverted/darker on press
    transform: 'translateY(0)', // Resets on press
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)',
  },
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
    liveLink: '#', // Add actual links here
    githubLink: '#', // Add actual links here
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
    liveLink: '#',
    githubLink: '#',
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
    liveLink: '#',
    githubLink: '#',
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
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Netflix Clone',
    description: 'Created a streaming platform clone with movie Browse, user profiles, and responsive design to understand modern web development patterns.',
    technologies: ['React.js', 'PostgreSQL', 'CSS3', 'API Integration'],
    category: 'Personal',
    icon: <Movie sx={{ fontSize: 28 }} />,
    status: 'Completed',
    duration: '4 weeks',
    role: 'Solo Developer',
    liveLink: '#',
    githubLink: '#',
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
                mb: 3,
                color: '#000000' // Pure black for main heading
              }}
            >
              My Projects
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="#666666" // Medium gray for sub-heading
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
                    // Apply subtle background even when not active
                    backgroundColor: viewMode === 'grid' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                    color: viewMode === 'grid' ? '#000000' : '#666666', // Black if active, medium gray if not
                    border: viewMode === 'grid' ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <ViewModule />
                </ViewToggle>
                <ViewToggle
                  onClick={() => setViewMode('list')}
                  sx={{
                    // Apply subtle background even when not active
                    backgroundColor: viewMode === 'list' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                    color: viewMode === 'list' ? '#000000' : '#666666', // Black if active, medium gray if not
                    border: viewMode === 'list' ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid rgba(0, 0, 0, 0.08)',
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
              key={filter + viewMode} // Key includes viewMode for re-animation on view change
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
                              color="#333333" // Dark gray for title
                              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                            >
                              {project.title}
                            </Typography>
                            <Chip
                              label={project.status}
                              size="small"
                              sx={{
                                // Consistent subtle chip styling
                                backgroundColor: project.status === 'Completed' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                                color: project.status === 'Completed' ? '#4CAF50' : '#FFC107', // Original vibrant color for status
                                border: `1px solid ${project.status === 'Completed' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 193, 7, 0.2)'}`,
                                fontWeight: 500,
                              }}
                            />
                          </Box>

                          <Typography
                            variant="body1"
                            color="#666666" // Medium gray for description
                            paragraph
                            sx={{ lineHeight: 1.6 }}
                          >
                            {project.description}
                          </Typography>

                          <Box mb={2}>
                            <Typography
                              variant="body2"
                              color="#666666" // Medium gray for meta info
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
                            {project.liveLink && ( // Conditionally render if link exists
                              <ProjectLinkButton
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View Live Project"
                              >
                                <Launch />
                              </ProjectLinkButton>
                            )}
                            {project.githubLink && ( // Conditionally render if link exists
                              <ProjectLinkButton
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View GitHub Repository"
                              >
                                <GitHub />
                              </ProjectLinkButton>
                            )}
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
                color="#666666" // Medium gray for text
                sx={{ mb: 2 }}
              >
                Have a project in mind?
              </Typography>
              <CallToActionContainedButton
                href="https://www.instagram.com/___melbin_/?igsh=MZFmcHN4NzYwajM0eA%3D%3D"
                size="large"
              >
                Let's Work Together
              </CallToActionContainedButton>
            </Box>
          </motion.div>
        </Container>
      </ProjectsContainer>
    </Box>
  );
}

export default Portfolio;