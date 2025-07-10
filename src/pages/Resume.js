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

const StyledAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  border: '4px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  marginBottom: '20px',
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
    frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Material UI'],
    backend: ['C#', 'SQL', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'Visual Studio Code', 'IntelliJ IDEA', 'Postman', 'PowerBI', 'Excel'],
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
        'Built responsive and dynamic interfaces using Angular & Tailwind CSS',
        'Integrated REST APIs built with Java Spring Boot',
        'Collaborated with cross-functional teams to deliver ERP modules',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'MicroGenesis TechSoft Pvt Ltd',
      duration: 'Apr 2023 – Aug 2023',
      description:
        'Worked on GrocerEase application focusing on backend development using C# and PostgreSQL, along with frontend components in React.js.',
      achievements: [
        'Developed scalable features for a grocery management application',
        'Integrated and tested backend APIs using C#',
        'Optimized PostgreSQL queries for improved performance',
      ],
    },
    {
      title: 'React Developer Intern',
      company: 'Talview',
      duration: 'Jan 2023',
      description:
        'Contributed to the Cambridge Dashboard Enhancement project using React.js and Material UI, with a focus on improving UI and usability.',
      achievements: [
        'Enhanced UI components using React.js and Material UI',
        'Worked on dashboard data visualizations',
      ],
    },
  ];
  

  const projects = [
    {
      title: 'College Placement Portal',
      description: 'Worked on frontend and database parts for a team project during MCA.',
      technologies: ['React.js', 'SQL', 'Material UI']
    },
    {
      title: 'OLX Clone',
      description: 'Developed a functional OLX clone to practice and improve skills in web development.',
      technologies: ['React.js', 'JavaScript', 'CSS3']
    },
    {
      title: 'Netflix Clone',
      description: 'Created a Netflix clone to enhance understanding of front-end technologies and streaming functionalities.',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3']
    }
  ];

  const handleDownload = () => {
    const printContent = printRef.current;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  const handlePreview = () => {
    const printContent = printRef.current;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Melbin Joseph Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
            .section { margin-bottom: 30px; }
            .section-title { color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 15px; }
            .contact-info { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
            .skill-category { margin-bottom: 15px; }
            .skills-list { display: flex; flex-wrap: wrap; gap: 5px; }
            .skill-tag { background: #f0f0f0; padding: 3px 8px; border-radius: 3px; font-size: 11px; }
            .experience-item, .project-item { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
            .experience-title { font-weight: bold; color: #333; }
            .experience-company { font-style: italic; color: #666; }
            .experience-duration { color: #888; font-size: 11px; }
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
                  background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
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
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500
                }}
              >
                MCA - Software Engineer
              </AnimatedTypography>
              <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} mb={4}>
                <Box display="flex" alignItems="center">
                  <Email sx={{ mr: 1 }} />
                  <Typography variant="body2">22mcaa40@kristujayanti.com</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Phone sx={{ mr: 1 }} />
                  <Typography variant="body2">+91 6282696352</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOn sx={{ mr: 1 }} />
                  <Typography variant="body2">Bengaluru, Karnataka</Typography>
                </Box>
              </Box>
            </Box>
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
                <IconWrapper>
                  <Person sx={{ fontSize: 28, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: 'white' }}>
                  Objective
                </Typography>
              </Box>
              <Typography variant="body1" color="rgba(255, 255, 255, 0.9)" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
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
                  <Code sx={{ fontSize: 28, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: 'white' }}>
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
                      <Box p={3} 
                        sx={{ 
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '15px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          height: '100%'
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" paragraph>
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
                      </Box>
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
                <IconWrapper>
                  <School sx={{ fontSize: 28, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h4" fontWeight="bold" sx={{ ml: 2, color: 'white' }}>
                  Education
                </Typography>
              </Box>
              
              <Box mb={3} p={3} 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                  Master of Computer Applications (MCA)
                </Typography>
                <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" gutterBottom>
                  Kristu Jayanti College, Bengaluru
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" gutterBottom>
                  2024 - 67%
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
                  Bachelor of Science - Computer Science, Mathematics and Statistics
                </Typography>
                <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" gutterBottom>
                  Kristu Jayanti College, Bengaluru
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
                  2022 - CGPA 7.2
                </Typography>
              </Box>
            </SectionContainer>
          </motion.div>
        </motion.div>

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

      <PrintableResume ref={printRef}>
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '24px', color: '#333' }}>MELBIN JOSEPH</h1>
          <h2 style={{ margin: '5px 0', fontSize: '16px', color: '#666' }}>MCA - Software Engineer</h2>
          <div className="contact-info">
            <span>📧 22mcaa40@kristujayanti.com</span>
            <span>📞 +91 6282696352</span>
            <span>📍 Bengaluru, Karnataka</span>
            <span>🔗 LinkedIn: linkedin.com/in/melbin-joseph-9</span>
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
    <p>Contributing to the college's ERP system as part of the development team. Working with Angular, Tailwind CSS, and Java to build modular and responsive web interfaces.</p>
    <ul>
      <li>Built responsive and dynamic web applications using Angular</li>
      <li>Integrated frontend with backend REST APIs built on Java</li>
      <li>Collaborated with cross-functional teams to develop scalable ERP modules</li>
    </ul>
  </div>

  <div className="experience-item">
    <div className="experience-title">Software Developer Intern</div>
    <div className="experience-company">MicroGenesis TechSoft Pvt Ltd</div>
    <div className="experience-duration">Apr 2023 – Aug 2023</div>
    <p>Worked on GrocerEase application using C#, PostgreSQL, and React.js. Gained strong understanding of backend services and API communication.</p>
    <ul>
      <li>Developed scalable features and modules for a grocery management application</li>
      <li>Integrated and tested API endpoints using C#</li>
      <li>Improved PostgreSQL queries for optimized performance</li>
    </ul>
  </div>

  <div className="experience-item">
    <div className="experience-title">React Developer Intern</div>
    <div className="experience-company">Talview</div>
    <div className="experience-duration">Jan 2023</div>
    <p>Enhanced the Cambridge Dashboard using React.js, SQL, and Material UI with a focus on UI/UX improvements.</p>
    <ul>
      <li>Implemented UI enhancements using React.js and Material UI</li>
      <li>Collaborated on improving data visualization features</li>
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
            </div>
          </div>
          <div className="skill-category">
            <strong>Backend:</strong>
            <div className="skills-list">
              <span className="skill-tag">C#</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">REST APIs</span>
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
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">PROJECTS</h3>
          <div className="project-item">
            <div className="experience-title">College Placement Portal</div>
            <p>Worked on frontend and database parts for a team project during MCA.</p>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Material UI</span>
            </div>
          </div>

          <div className="project-item">
            <div className="experience-title">OLX Clone</div>
            <p>Developed a functional OLX clone to practice and improve skills in web development.</p>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>

          <div className="project-item">
            <div className="experience-title">Netflix Clone</div>
            <p>Created a Netflix clone to enhance understanding of front-end technologies and streaming functionalities.</p>
            <div className="skills-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
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
          <ul>
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