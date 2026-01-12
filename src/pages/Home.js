import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography, Button, Card, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Code, PlayArrow, Refresh, School } from '@mui/icons-material';
import { useThemeContext } from '../ThemeContext';
import PhysicsWorld, { usePhysics } from '../components/PhysicsWorld';
import PhysicsObject from '../components/PhysicsObject';
import { portfolioData } from '../data/portfolioData';

// --- Styled Components ---

const BentoCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(20, 20, 20, 0.6)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '24px',
  height: '100%',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  // No hover effects here because physics handles interaction when enabled
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '12px 30px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  borderRadius: '8px',
  fontWeight: 500,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
  border: 'none',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(90deg, #fff, #bbb)'
    : 'linear-gradient(90deg, #333, #000)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
}));

// --- Internal Components ---

const GravityControl = () => {
  const { toggleGravity, gravityEnabled } = usePhysics() || {};

  // Safety check: if context is missing (e.g. during initial render before provider), return null
  if (!toggleGravity) return null;

  return (
    <Box sx={{ position: 'fixed', bottom: 40, right: 40, zIndex: 1000 }}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ActionButton
          variant="contained"
          color={gravityEnabled ? "error" : "primary"}
          onClick={toggleGravity}
          startIcon={gravityEnabled ? <Refresh /> : <PlayArrow />}
          sx={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
        >
          {gravityEnabled ? "Reset Gravity" : "Break Gravity"}
        </ActionButton>
      </motion.div>
      {!gravityEnabled && (
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1, opacity: 0.7 }}>
          Click to shatter the site!
        </Typography>
      )}
    </Box>
  );
};

// --- Main Page Component ---
const Home = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  // We use this key to force re-render when resetting gravity
  // Ideally, resetting gravity means reloading the page or resetting state, 
  // currently our simple implementation might need a reload to "un-stick" things cleanly 
  // if we don't have a "reset" mechanism in physics.
  // For now, let's keep it simple.

  return (
    <PhysicsWorld>
      <GravityControl />

      <Container maxWidth="xl" sx={{ pt: 12, pb: 10, minHeight: '100vh' }}>

        {/* Helper Instructions */}
        <Box mb={4} textAlign="center" sx={{ opacity: 0.6 }}>
          <Typography variant="body2">
            Welcome to my interactive portfolio. consistent with the theme, content is organized in blocks.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* 1. Hero Profile Card (Large) */}
          <Grid item xs={12} md={8}>
            <PhysicsObject bodyOptions={{ restitution: 0.5, density: 0.005 }} style={{ height: '100%' }}>
              <BentoCard>
                <Grid container sx={{ height: '100%' }}>
                  <Grid item xs={12} md={7} sx={{ p: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h6" color="primary" gutterBottom fontWeight="bold">
                      {portfolioData.personal.title}
                    </Typography>
                    <HeroTitle variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
                      {portfolioData.personal.name}
                    </HeroTitle>
                    <Typography variant="h5" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                      {portfolioData.personal.tagline}
                    </Typography>
                    <Box display="flex" gap={2}>
                      <ActionButton variant="contained" onClick={() => navigate('/contact')}>
                        Contact Me
                      </ActionButton>
                      <ActionButton variant="outlined" onClick={() => navigate('/about')}>
                        See More
                      </ActionButton>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5} sx={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
                    <Box
                      component="img"
                      src={portfolioData.personal.avatar}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute'
                      }}
                    />
                  </Grid>
                </Grid>
              </BentoCard>
            </PhysicsObject>
          </Grid>

          {/* 2. Quick Stats / Social (Small Column) */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={3} direction="column" sx={{ height: '100%' }}>
              <Grid item xs={6}>
                <PhysicsObject bodyOptions={{ restitution: 0.8 }} style={{ height: '100%' }}>
                  <BentoCard sx={{ p: 4, justifyContent: 'center', alignItems: 'center', background: theme === 'dark' ? '#2c2c2e' : '#f5f5f7' }}>
                    <LinkedIn sx={{ fontSize: 40, mb: 1, color: '#0077b5' }} />
                    <Typography fontWeight="bold">Connect on LinkedIn</Typography>
                  </BentoCard>
                </PhysicsObject>
              </Grid>
              <Grid item xs={6}>
                <PhysicsObject bodyOptions={{ restitution: 0.8 }} style={{ height: '100%' }}>
                  <BentoCard sx={{ p: 4, justifyContent: 'center', alignItems: 'center', background: theme === 'dark' ? '#2c2c2e' : '#f5f5f7' }}>
                    <GitHub sx={{ fontSize: 40, mb: 1 }} />
                    <Typography fontWeight="bold">Check my Code</Typography>
                  </BentoCard>
                </PhysicsObject>
              </Grid>
            </Grid>
          </Grid>

          {/* 3. Skills Ticker (Full Width) */}
          <Grid item xs={12}>
            <PhysicsObject bodyOptions={{ density: 0.002 }}>
              <BentoCard sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>Core Technologies</Typography>
                <Box display="flex" flexWrap="wrap" gap={1.5}>
                  {portfolioData.skills.frontend.concat(portfolioData.skills.backend).slice(0, 10).map((skill) => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </Box>
              </BentoCard>
            </PhysicsObject>
          </Grid>

          {/* 4. Featured Project (Medium) */}
          <Grid item xs={12} md={6}>
            <PhysicsObject bodyOptions={{ restitution: 0.4 }} style={{ height: '100%' }}>
              <BentoCard sx={{ p: 4 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="overline" color="text.secondary">Featured Project</Typography>
                  <Code />
                </Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {portfolioData.projects[0].title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {portfolioData.projects[0].description}
                </Typography>
                <Box mt="auto">
                  {portfolioData.projects[0].technologies.map(t => (
                    <Typography key={t} variant="caption" sx={{ mr: 2, border: '1px solid', px: 1, borderRadius: 1 }}>{t}</Typography>
                  ))}
                </Box>
              </BentoCard>
            </PhysicsObject>
          </Grid>

          {/* 5. Experience Highlight (Medium) */}
          <Grid item xs={12} md={6}>
            <PhysicsObject bodyOptions={{ restitution: 0.4 }} style={{ height: '100%' }}>
              <BentoCard sx={{ p: 4, background: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)', color: 'white' }}>
                <Typography variant="overline" sx={{ opacity: 0.8 }}>Current Role</Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {portfolioData.experience[0].company}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
                  {portfolioData.experience[0].title}
                </Typography>
                <Typography variant="body1">
                  {portfolioData.experience[0].shortDescription}
                </Typography>
              </BentoCard>
            </PhysicsObject>
          </Grid>

          {/* 6. Education (Small) */}
          <Grid item xs={12} md={4}>
            <PhysicsObject bodyOptions={{ restitution: 0.6 }}>
              <BentoCard sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom><School sx={{ mr: 1, verticalAlign: 'middle' }} /> Education</Typography>
                {portfolioData.education.map((edu, i) => (
                  <Box key={i} mb={2}>
                    <Typography variant="subtitle2" fontWeight="bold">{edu.degree}</Typography>
                    <Typography variant="caption" color="text.secondary">{edu.school}</Typography>
                  </Box>
                ))}
              </BentoCard>
            </PhysicsObject>
          </Grid>

          {/* 7. What I Do (Medium) */}
          <Grid item xs={12} md={8}>
            <PhysicsObject bodyOptions={{ restitution: 0.5 }}>
              <BentoCard sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>What I Do</Typography>
                <Grid container spacing={2}>
                  {portfolioData.services.map((s, i) => (
                    <Grid item xs={12} sm={4} key={i}>
                      <Box>
                        <Box sx={{ color: 'primary.main', mb: 1 }}>{s.icon}</Box>
                        <Typography variant="subtitle1" fontWeight="Bold">{s.title}</Typography>
                        <Typography variant="caption" color="text.secondary">{s.description}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </BentoCard>
            </PhysicsObject>
          </Grid>

        </Grid>
      </Container>
    </PhysicsWorld>
  );
};

export default Home;