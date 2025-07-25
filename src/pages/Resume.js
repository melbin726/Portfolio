import React, { useRef } from 'react';
import { Container, Typography, Box, Paper, Button, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import {
  Download,
  Work,
  School,
  Code,
  Star,
  Visibility,
  Email,
  Phone,
  LocationOn,
  Person
} from '@mui/icons-material';

const MainContainer = styled(Box)({
  minHeight: '100vh',
  // Subtle radial gradient from center to edges, light gray to white for the page background
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #ffffff 75%)',
  color: '#333333', // Default text color is dark gray
  paddingBottom: '40px',
});

const HeroSection = styled(Box)({
  // Subtle radial gradient from center to edges, light gray to white
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #ffffff 75%)',
  color: '#333333', // Dark gray text for contrast
  paddingTop: '120px',
  paddingBottom: '60px',
  position: 'relative',
  overflow: 'hidden',
  // Removed the ::before pattern
});

const AnimatedTypography = styled(motion(Typography))({
  position: 'relative',
  zIndex: 1,
});

const GradientButton = styled(Button)({
  // Sleek black to dark grey gradient
  background: 'linear-gradient(135deg, #222222 0%, #000000 100%)',
  color: 'white',
  borderRadius: '30px',
  padding: '12px 32px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
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

const OutlineButton = styled(Button)({
  // Always apply a subtle light gray gradient
  background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  color: '#333333', // Dark gray text
  borderRadius: '30px',
  padding: '10px 32px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  backdropFilter: 'blur(5px)', // Slightly less blur
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // Always has a subtle shadow
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%)', // Darker gradient on hover
    borderColor: 'rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  '&:active': { // For touch devices
    background: 'linear-gradient(135deg, #d0d0d0 0%, #e0e0e0 100%)', // Slightly inverted/darker on press
    transform: 'translateY(0)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

const SectionContainer = styled(Paper)({
  // Always apply a subtle radial gradient for depth
  background: 'radial-gradient(circle at top left, #ffffff 0%, #f9f9f9 100%)',
  backdropFilter: 'blur(5px)', // Less blur as background is light
  border: '1px solid rgba(0, 0, 0, 0.04)', // Even lighter border
  color: '#333333', // Default text color is dark gray
  padding: '30px',
  marginTop: '30px',
  borderRadius: '15px', // Consistent border radius
  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.04)', // Very light initial shadow
  transition: 'all 0.3s ease',
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

const SkillCard = styled(Card)({
  // Always apply a subtle radial gradient for depth (same as SectionContainer but for smaller cards)
  background: 'radial-gradient(circle at top left, #ffffff 0%, #f9f9f9 100%)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(0, 0, 0, 0.04)',
  borderRadius: '15px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.04)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
    background: 'radial-gradient(circle at top left, #ffffff 0%, #f0f0f0 100%)',
    border: '1px solid rgba(0, 0, 0, 0.08)',
  },
  '&:active': {
    transform: 'translateY(-2px)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    background: 'radial-gradient(circle at top left, #f0f0f0 0%, #ffffff 100%)',
  },
});

const SkillChip = styled(Chip)({
  // Subtle light gray background with soft border
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  color: '#333333', // Dark gray text
  border: '1px solid rgba(0, 0, 0, 0.1)',
  margin: '4px',
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



const StyledAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  border: '4px solid rgba(0, 0, 0, 0.1)', // Lighter border
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)', // Lighter shadow
  marginBottom: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)', // Subtle scale on hover
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)', // More prominent but still light shadow
  },
  '&:active': { // For touch devices
    transform: 'scale(0.98)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
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

// Styles for individual experience/project/education items inside SectionContainer
const InnerItemBox = styled(Box)({
  background: 'radial-gradient(circle at top left, #ffffff 0%, #f9f9f9 100%)', // Subtle card-like background
  borderRadius: '10px', // Slightly less rounded than main cards for nesting
  border: '1px solid rgba(0, 0, 0, 0.06)', // Very light border
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)', // Very subtle shadow
  padding: '20px', // Reduced padding slightly
  marginBottom: '20px',
  transition: 'all 0.3s ease',
  '&:last-child': {
    marginBottom: 0,
  },
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
});


const PrintableResume = styled('div')({
  position: 'absolute',
  left: '-9999px',
  top: '0',
  width: '210mm',
  minHeight: '297mm',
  padding: '20mm',
  background: 'white',
  color: 'black',
  fontFamily: 'Arial, sans-serif',
  fontSize: '12px',
  lineHeight: '1.4',
  '@media print': {
    position: 'static',
    left: 'auto',
    boxShadow: 'none',
  },
  // Basic styles for printable resume to match the black and white theme
  'h1, h2, h3, h4, h5, h6': {
    color: '#000000',
    margin: '0 0 5px 0',
  },
  'p, ul, li': {
    color: '#333333',
    margin: '0 0 5px 0',
  },
  '.header': {
    textAlign: 'center',
    borderBottom: '2px solid #333',
    paddingBottom: '20px',
    marginBottom: '30px',
  },
  '.section': {
    marginBottom: '30px',
  },
  '.section-title': {
    color: '#333',
    borderBottom: '1px solid #ccc',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  '.contact-info': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  '.skill-category': {
    marginBottom: '15px',
  },
  '.skills-list': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
  },
  '.skill-tag': {
    background: '#e0e0e0', // Light gray background for print chips
    padding: '3px 8px',
    borderRadius: '3px',
    fontSize: '11px',
    color: '#333333', // Dark gray text for print chips
  },
  '.experience-item, .project-item': {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  '.experience-title': {
    fontWeight: 'bold',
    color: '#333',
  },
  '.experience-company': {
    fontStyle: 'italic',
    color: '#666',
  },
  '.experience-duration': {
    color: '#888',
    fontSize: '11px',
  },
 
});

function Resume() {
  const printRef = useRef();

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
    frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Angular', 'Tailwind CSS'], // Added Angular, Tailwind
    backend: ['C#', 'SQL', 'PostgreSQL', 'REST APIs', 'Java', 'Spring Boot'], // Added Java, Spring Boot
    tools: ['Git', 'Visual Studio Code', 'IntelliJ IDEA', 'Postman', 'PowerBI', 'Excel', 'Jira'], // Added Jira
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Quick Learner', 'Creative & Innovative']
  };

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Kristu Jayanti Software Development Center (KJSDC)',
      duration: 'Jan 2025 – Present (Internship: Sep 2024 – Dec 2024)',
      description:
        'Part of the development team building an internal ERP solution for the college using Angular, Tailwind CSS, and Java. Focused on frontend integration, responsive UI, and component development.',
      achievements: [
        'Built responsive and dynamic interfaces using Angular & Tailwind CSS for critical ERP modules.',
        'Integrated complex frontend components with Java Spring Boot REST APIs.',
        'Collaborated effectively with cross-functional teams, adhering to agile methodologies to deliver timely solutions.',
        'Contributed to the improvement of user experience by optimizing UI performance and responsiveness.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'MicroGenesis TechSoft Pvt Ltd',
      duration: 'Apr 2023 – Aug 2023',
      description:
        'Worked on GrocerEase application focusing on backend development using C# and PostgreSQL, along with frontend components in React.js.',
      achievements: [
        'Developed scalable features for a grocery management application, enhancing inventory tracking and user management.',
        'Designed and integrated robust backend APIs using C# and Entity Framework.',
        'Optimized PostgreSQL queries, leading to significant improvements in data retrieval performance.',
        'Participated in code reviews and contributed to maintainable code practices.',
      ],
    },
    {
      title: 'React Developer Intern',
      company: 'Talview',
      duration: 'Jan 2023',
      description:
        'Contributed to the Cambridge Dashboard Enhancement project using React.js and Material UI, with a focus on improving UI and usability.',
      achievements: [
        'Enhanced UI components and implemented new features using React.js and Material UI.',
        'Worked on improving dashboard data visualizations for better user insights.',
        'Gained practical experience in a professional development environment.',
      ],
    },
  ];


  const projects = [
    {
      title: 'College Placement Portal',
      description: 'Developed key frontend and database components for a comprehensive college placement management system, improving student-recruiter interaction.',
      technologies: ['React.js', 'SQL', 'Material UI', 'Node.js', 'Express.js']
    },
    {
      title: 'OLX Clone',
      description: 'Built a full-stack OLX clone, implementing user authentication, product listings, and search functionality to simulate a real-world marketplace.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Node.js', 'MongoDB']
    },
    {
      title: 'Netflix Clone',
      description: 'Created a Netflix clone to deepen understanding of front-end technologies, API integration for movie data, and responsive design for various devices.',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'API Integration']
    }
  ];

  const handleDownload = () => {
    // A more robust way to handle printing without DOM manipulation, if supported
    // For wider browser compatibility, the original DOM manipulation approach might still be preferred by some.
    const printContent = printRef.current;
    if (window.PrintJS) { // If you have PrintJS or a similar library
      window.PrintJS({
        printable: printContent,
        type: 'html',
        css: '/print-resume.css', // You could put print styles in a separate CSS file
        scanStyles: false
      });
    } else {
      // Fallback to simpler window.print()
      const originalContents = document.body.innerHTML;
      const printContents = printContent.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reloads to restore original state
    }
  };

  const handlePreview = () => {
    const printContent = printRef.current;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Melbin Joseph Resume Preview</title>
          <style>
            /* Inline styles for preview to ensure consistent rendering */
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; color: black; }
            h1, h2, h3, h4, h5, h6 { color: #000000; margin: 0 0 5px 0; }
            p, ul, li { color: #333333; margin: 0 0 5px 0; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
            .section { margin-bottom: 30px; }
            .section-title { color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 15px; }
            .contact-info { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
            .skill-category { margin-bottom: 15px; }
            .skills-list { display: flex; flex-wrap: wrap; gap: 5px; }
            .skill-tag { background: #e0e0e0; padding: 3px 8px; border-radius: 3px; font-size: 11px; color: #333333; }
            .experience-item, .project-item { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
            .experience-title { font-weight: bold; color: #333; }
            .experience-company { font-style: italic; color: #666; }
            .experience-duration { color: #888; font-size: 11px; }
            ul { list-style: disc; padding-left: 20px; }
            li { margin-bottom: 5px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <MainContainer>
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <StyledAvatar
                alt="Melbin Joseph"
                src="/IMG_6049.JPG"
              />
              <AnimatedTypography
                variant="h2"
                component="h1"
                fontWeight="bold"
                textAlign="center"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  mb: 1,
                  // Black to dark gray gradient for the name
                  background: 'linear-gradient(45deg, #000000, #333333)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Melbin Joseph
              </AnimatedTypography>
              <AnimatedTypography
                variant="h5"
                textAlign="center"
                sx={{
                  mb: 2,
                  color: '#666666', // Medium gray for title
                  fontWeight: 500
                }}
              >
                MCA - Software Engineer
              </AnimatedTypography>
              <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} mb={4}>
                <Box display="flex" alignItems="center">
                  <Email sx={{ mr: 1, color: '#666666' }} /> {/* Medium gray icons */}
                  <Typography variant="body2" color="#666666">22mcaa40@kristujayanti.com</Typography> {/* Medium gray text */}
                </Box>
                <Box display="flex" alignItems="center">
                  <Phone sx={{ mr: 1, color: '#666666' }} /> {/* Medium gray icons */}
                  <Typography variant="body2" color="#666666">+91 6282696352</Typography> {/* Medium gray text */}
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOn sx={{ mr: 1, color: '#666666' }} /> {/* Medium gray icons */}
                  <Typography variant="body2" color="#666666">Bengaluru, Karnataka</Typography> {/* Medium gray text */}
                </Box>
              </Box>
            </Box>
            <AnimatedTypography
              variant="h6"
              textAlign="center"
              sx={{
                mb: 4,
                color: '#666666', // Medium gray for description
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Enthusiastic Software Engineer with expertise in React.js, C#, and full-stack development
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <SectionTitleIcon> {/* Use the new SectionTitleIcon */}
                  <Person sx={{ fontSize: 28 }} />
                </SectionTitleIcon>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: '#000000' }}> {/* Pure black for heading */}
                  Objective
                </Typography>
              </Box>
              <Typography variant="body1" color="#666666" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}> {/* Medium gray text */}
                Enthusiastic about launching my career in an organization that fosters continuous learning and provides abundant opportunities for professional development. Eager to contribute positivity to a team that values innovation and growth.
              </Typography>
            </SectionContainer>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <SectionTitleIcon> {/* Use the new SectionTitleIcon */}
                  <Work sx={{ fontSize: 28 }} />
                </SectionTitleIcon>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: '#000000' }}> {/* Pure black for heading */}
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
                  <InnerItemBox> {/* Use the new InnerItemBox */}
                    <Typography variant="h5" fontWeight="bold" color="#333333" gutterBottom> {/* Dark gray for title */}
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" color="#666666" gutterBottom> {/* Medium gray for company */}
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="#999999" gutterBottom> {/* Lighter gray for duration */}
                      {exp.duration}
                    </Typography>
                    <Typography variant="body1" color="#666666" paragraph> {/* Medium gray for description */}
                      {exp.description}
                    </Typography>
                    <Box>
                      {exp.achievements.map((achievement, idx) => (
                        <Box key={idx} display="flex" alignItems="center" mb={1}>
                          <Star sx={{ fontSize: 16, color: '#FFD700', mr: 1 }} /> {/* Keeping gold star */}
                          <Typography variant="body2" color="#666666"> {/* Medium gray for achievement text */}
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </InnerItemBox>
                </motion.div>
              ))}
            </SectionContainer>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={4}>
                <SectionTitleIcon> {/* Use the new SectionTitleIcon */}
                  <Code sx={{ fontSize: 28 }} />
                </SectionTitleIcon>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: '#000000' }}> {/* Pure black for heading */}
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
                            color="#333333" // Dark gray for category title
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
                                transition={{ delay: idx * 0.05 }}
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <SectionTitleIcon> {/* Use the new SectionTitleIcon */}
                  <Code sx={{ fontSize: 28 }} />
                </SectionTitleIcon>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: '#000000' }}> {/* Pure black for heading */}
                  Projects
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {projects.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <InnerItemBox sx={{ height: '100%' }}> {/* Use InnerItemBox */}
                        <Typography variant="h6" fontWeight="bold" color="#333333" gutterBottom> {/* Dark gray for title */}
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="#666666" paragraph> {/* Medium gray for description */}
                          {project.description}
                        </Typography>
                        <Box>
                          {project.technologies.map((tech, idx) => (
                            <SkillChip
                              key={idx}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{ mr: 1, mb: 1 }}
                            />
                          ))}
                        </Box>
                      </InnerItemBox>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </SectionContainer>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <SectionTitleIcon> {/* Use the new SectionTitleIcon */}
                  <School sx={{ fontSize: 28 }} />
                </SectionTitleIcon>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: '#000000' }}> {/* Pure black for heading */}
                  Education
                </Typography>
              </Box>

              <InnerItemBox> {/* Use InnerItemBox */}
                <Typography variant="h6" fontWeight="bold" color="#333333" gutterBottom>
                  Master of Computer Applications (MCA)
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom>
                  Kristu Jayanti College, Bengaluru
                </Typography>
                <Typography variant="body2" color="#999999" gutterBottom>
                  2024 - 67%
                </Typography>
              </InnerItemBox>

              <InnerItemBox> {/* Use InnerItemBox */}
                <Typography variant="h6" fontWeight="bold" color="#333333" gutterBottom>
                  Bachelor of Science - Computer Science, Mathematics and Statistics
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom>
                  Kristu Jayanti College, Bengaluru
                </Typography>
                <Typography variant="body2" color="#999999">
                  2022 - CGPA 7.2
                </Typography>
              </InnerItemBox>

              <InnerItemBox> {/* Added for consistency with previous changes */}
                <Typography variant="h6" fontWeight="bold" color="#333333" gutterBottom>
                  Plus Two - Computer Science
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom>
                  St.Joseph HSS Vayattuparamba Kannur
                </Typography>
                <Typography variant="body2" color="#999999">
                  2019 - 75%
                </Typography>
              </InnerItemBox>

              <InnerItemBox> {/* Added for consistency with previous changes */}
                <Typography variant="h6" fontWeight="bold" color="#333333" gutterBottom>
                  Class 10
                </Typography>
                <Typography variant="body1" color="#666666" gutterBottom>
                  Government High School Rayarome, Kannur
                </Typography>
                <Typography variant="body2" color="#999999">
                  2017 - 80%
                </Typography>
              </InnerItemBox>

            </SectionContainer>
          </motion.div>
        </motion.div>

        {/* Additional Qualifications and Personal Strengths - Added for completeness based on PrintableResume*/}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <SectionTitleIcon>
                  <Star sx={{ fontSize: 28 }} /> {/* Using Star for additional qual for now */}
                </SectionTitleIcon>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: '#000000' }}>
                  Additional Qualifications
                </Typography>
              </Box>
              <InnerItemBox>
                <Typography variant="body1" color="#666666">
                  <ul>
                    <li>Python Fundamentals for Beginners from Great Learning (2021)</li>
                    <li>Instagram Marketing Fundamentals from Great Learning (2021)</li>
                    <li>Introduction to Internet of Things from Great Learning (2021)</li>
                  </ul>
                </Typography>
              </InnerItemBox>
            </SectionContainer>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer>
              <Box display="flex" alignItems="center" mb={3}>
                <SectionTitleIcon>
                  <Person sx={{ fontSize: 28 }} /> {/* Using Person for Personal Strengths */}
                </SectionTitleIcon>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: '#000000' }}>
                  Personal Strengths
                </Typography>
              </Box>
              <InnerItemBox>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <SkillChip label="Teamwork" size="small" variant="outlined" />
                  <SkillChip label="Creative & Innovative" size="small" variant="outlined" />
                  <SkillChip label="Honest & Hard working" size="small" variant="outlined" />
                  <SkillChip label="Quick learner" size="small" variant="outlined" />
                  <SkillChip label="Problem Solving" size="small" variant="outlined" />
                  <SkillChip label="Communication" size="small" variant="outlined" />
                </Box>
              </InnerItemBox>
            </SectionContainer>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionContainer sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="h5" fontWeight="bold" color="#333333" gutterBottom> {/* Dark gray for heading */}
                Ready to Collaborate?
              </Typography>
              <Typography variant="body1" color="#666666" paragraph> {/* Medium gray for text */}
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
        </motion.div>
      </Container>

      {/* Printable Resume Content (hidden by default) */}
      <PrintableResume ref={printRef}>
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '28px', color: '#000' }}>MELBIN JOSEPH</h1>
          <h2 style={{ margin: '5px 0', fontSize: '18px', color: '#333' }}>MCA - Software Engineer</h2>
          <div className="contact-info" style={{ flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <span style={{ color: '#666' }}>📧 22mcaa40@kristujayanti.com</span>
            <span style={{ color: '#666' }}>📞 +91 6282696352</span>
            <span style={{ color: '#666' }}>📍 Bengaluru, Karnataka</span>
            <span style={{ color: '#666' }}>🔗 LinkedIn: linkedin.com/in/melbin-joseph-9</span> {/* Ensure this is a valid link */}
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">OBJECTIVE</h3>
          <p>Enthusiastic about launching my career in an organization that fosters continuous learning and provides abundant opportunities for professional development. Eager to contribute positivity to a team that values innovation and growth.</p>
        </div>

        <div className="section">
          <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>

          <div className="experience-item">
            <div className="experience-title">Software Development Engineer</div>
            <div className="experience-company">Kristu Jayanti Software Development Center (KJSDC)</div>
            <div className="experience-duration">Jan 2025 – Present (Internship: Sep 2024 – Dec 2024)</div>
            <p>Part of the development team building an internal ERP solution for the college using Angular, Tailwind CSS, and Java. Focused on frontend integration, responsive UI, and component development.</p>
            <ul>
              <li>Built responsive and dynamic web applications using Angular & Tailwind CSS for critical ERP modules.</li>
              <li>Integrated complex frontend components with Java Spring Boot REST APIs.</li>
              <li>Collaborated effectively with cross-functional teams, adhering to agile methodologies to deliver timely solutions.</li>
              <li>Contributed to the improvement of user experience by optimizing UI performance and responsiveness.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-title">Software Developer Intern</div>
            <div className="experience-company">MicroGenesis TechSoft Pvt Ltd</div>
            <div className="experience-duration">Apr 2023 – Aug 2023</div>
            <p>Worked on GrocerEase application using C#, PostgreSQL, and React.js. Gained strong understanding of backend services and API communication.</p>
            <ul>
              <li>Developed scalable features for a grocery management application, enhancing inventory tracking and user management.</li>
              <li>Designed and integrated robust backend APIs using C# and Entity Framework.</li>
              <li>Optimized PostgreSQL queries, leading to significant improvements in data retrieval performance.</li>
              <li>Participated in code reviews and contributed to maintainable code practices.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-title">React Developer Intern</div>
            <div className="experience-company">Talview</div>
            <div className="experience-duration">Jan 2023</div>
            <p>Enhanced the Cambridge Dashboard using React.js, SQL, and Material UI with a focus on UI/UX improvements.</p>
            <ul>
              <li>Implemented UI enhancements and new features using React.js and Material UI.</li>
              <li>Worked on improving dashboard data visualizations for better user insights.</li>
              <li>Gained practical experience in a professional development environment.</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">TECHNICAL SKILLS</h3>
          <div className="skill-category">
            <strong>Frontend:</strong>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Material UI</span>
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="skill-category">
            <strong>Backend:</strong>
            <div className="skills-list">
              <span className="skill-tag">C#</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Spring Boot</span>
            </div>
          </div>
          <div className="skill-category">
            <strong>Tools:</strong>
            <div className="skills-list">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Visual Studio Code</span>
              <span className="skill-tag">IntelliJ IDEA</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">PowerBI</span>
              <span className="skill-tag">Excel</span>
              <span className="skill-tag">Jira</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">PROJECTS</h3>
          <div className="project-item">
            <div className="experience-title">College Placement Portal</div>
            <p>Developed key frontend and database components for a comprehensive college placement management system, improving student-recruiter interaction.</p>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Material UI</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
            </div>
          </div>

          <div className="project-item">
            <div className="experience-title">OLX Clone</div>
            <p>Built a full-stack OLX clone, implementing user authentication, product listings, and search functionality to simulate a real-world marketplace.</p>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          <div className="project-item">
            <div className="experience-title">Netflix Clone</div>
            <p>Created a Netflix clone to deepen understanding of front-end technologies, API integration for movie data, and responsive design for various devices.</p>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">API Integration</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">EDUCATION</h3>
          <div className="experience-item">
            <div className="experience-title">Master of Computer Applications (MCA)</div>
            <div className="experience-company">Kristu Jayanti College, Bengaluru</div>
            <div className="experience-duration">2024 - 67%</div>
          </div>

          <div className="experience-item">
            <div className="experience-title">Bachelor of Science - Computer Science, Mathematics and Statistics</div>
            <div className="experience-company">Kristu Jayanti College, Bengaluru</div>
            <div className="experience-duration">2022 - CGPA 7.2</div>
          </div>

          <div className="experience-item">
            <div className="experience-title">Plus Two - Computer Science</div>
            <div className="experience-company">St.Joseph HSS Vayattuparamba Kannur</div>
            <div className="experience-duration">2019 - 75%</div>
          </div>

          <div className="experience-item">
            <div className="experience-title">Class 10</div>
            <div className="experience-company">Government High School Rayarome, Kannur</div>
            <div className="experience-duration">2017 - 80%</div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">ADDITIONAL QUALIFICATIONS</h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
            <li>Python Fundamentals for Beginners from Great Learning (2021)</li>
            <li>Instagram Marketing Fundamentals from Great Learning (2021)</li>
            <li>Introduction to Internet of Things from Great Learning (2021)</li>
          </ul>
        </div>

        <div className="section">
          <h3 className="section-title">PERSONAL STRENGTHS</h3>
          <div className="skills-list">
            <span className="skill-tag">Teamwork</span>
            <span className="skill-tag">Creative & Innovative</span>
            <span className="skill-tag">Honest & Hard working</span>
            <span className="skill-tag">Quick learner</span>
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Communication</span>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">PERSONAL DETAILS</h3>
          <p><strong>Date of Birth:</strong> 02/07/2001</p>
          <p><strong>Nationality:</strong> Indian</p>
          <p><strong>PAN No:</strong> CIEPJ2857A</p>
          <p><strong>Languages:</strong> English (S/R/W), Hindi (S), Malayalam (S/R/W)</p>
        </div>
      </PrintableResume>
    </MainContainer>
  );
}

export default Resume;