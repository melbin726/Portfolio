import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Chip,
  Button,
  Divider,
  Stack,
  LinearProgress,
} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  Database,
  GraduationCap,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { useThemeContext } from '../ThemeContext';
import { portfolioData } from '../data/portfolioData';

const GlassCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(30, 41, 59, 0.75)'
    : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.09)'
    : '1px solid rgba(15, 23, 42, 0.08)',
  borderRadius: '20px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
  '&:hover': {
    borderColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(37, 99, 235, 0.3)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.15)'
      : '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 25px rgba(37, 99, 235, 0.12)',
  },
}));

const TechPill = styled(Chip)(({ theme }) => ({
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.8rem',
  fontWeight: 500,
  borderRadius: '6px',
  padding: '4px 6px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.07)',
  color: theme.palette.mode === 'dark' ? '#7DD3FC' : '#1D4ED8',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.18)',
}));

const TimelineItemBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: '32px',
  paddingBottom: '36px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '7px',
    top: '6px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 4px ${theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(37, 99, 235, 0.15)'}`,
    zIndex: 2,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '12px',
    top: '18px',
    width: '2px',
    height: '100%',
    backgroundColor: theme.palette.divider,
    zIndex: 1,
  },
  '&:last-child::after': {
    display: 'none',
  },
}));

function About() {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();
  const { personal, experience, education, skills, certifications } = portfolioData;

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 12, md: 16 }, pb: 12, position: 'relative' }}>
      
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '15%',
          width: '500px',
          height: '500px',
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(90px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Badge */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.6,
              borderRadius: '30px',
              bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)',
              color: 'primary.main',
              border: isDarkMode ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.2)',
              mb: 2,
              fontSize: '0.825rem',
              fontWeight: 650,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            <Sparkles size={15} />
            Background & Technical Profile
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
              fontWeight: 850,
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            About Melbin Joseph
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 720,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            {personal.headline}
          </Typography>
        </Box>

        {/* ======================================================== */}
        {/* 1. EXECUTIVE BIO & PORTRAIT */}
        {/* ======================================================== */}
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" sx={{ mb: { xs: 5, md: 8 } }}>
          
          {/* Portrait Column */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', mx: 'auto', maxWidth: { xs: 260, sm: 320, md: '100%' } }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: -3,
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)',
                  filter: 'blur(14px)',
                  opacity: isDarkMode ? 0.35 : 0.2,
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  bgcolor: isDarkMode ? '#1E293B' : '#FFFFFF',
                  border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(15, 23, 42, 0.08)',
                  boxShadow: isDarkMode ? '0 20px 40px -12px rgba(0, 0, 0, 0.6)' : '0 20px 40px -12px rgba(15, 23, 42, 0.1)',
                }}
              >
                <Box
                  component="img"
                  src={personal.fullPhoto || personal.avatar}
                  alt="Melbin Joseph"
                  sx={{
                    width: '100%',
                    height: { xs: 280, sm: 340, md: 420 },
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />
                <Box
                  sx={{
                    p: 2,
                    bgcolor: isDarkMode ? 'rgba(30, 41, 59, 0.95)' : '#F8FAFC',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={750}>
                    Melbin Joseph
                  </Typography>
                  <Typography variant="body2" color="primary" fontWeight={650} gutterBottom>
                    Software Development Engineer @ KJSDC
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Bengaluru, Karnataka, India • {personal.connections}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Narrative Column */}
          <Grid item xs={12} md={7}>
            <GlassCard sx={{ p: { xs: 2.5, sm: 4 } }}>
              <Typography variant="h4" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Engineering Scalable Web Solutions
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.025rem' }}>
                As a <strong>Software Developer at KJSDC</strong>, I specialize in building scalable, user-friendly web applications. My core expertise lies in leveraging <strong>Angular</strong> for robust front-end development, <strong>Tailwind CSS</strong> for efficient and aesthetic UI/UX, and seamless API integration.
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.025rem' }}>
                I am driven by the goal of optimizing performance and crafting impactful, seamless digital experiences. Passionate about problem-solving and continuous learning, I thrive on complex technical challenges to deliver innovative solutions across institutional enterprise platforms.
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.025rem' }}>
                I hold a <strong>Master of Computer Applications (MCA)</strong> degree in Computer Software Engineering from <strong>Kristu Jayanti University</strong>. With professional engineering experience spanning <strong>Angular & Tailwind CSS</strong> at KJSDC, <strong>C# & PostgreSQL</strong> at MicroGenesis TechSoft, and <strong>React.js</strong> at Talview, I bring a solid full-stack foundation.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                <Button
                  onClick={() => { navigate('/portfolio'); window.scrollTo(0, 0); }}
                  variant="contained"
                  endIcon={<ArrowRight size={16} />}
                  sx={{ borderRadius: '10px', fontWeight: 650 }}
                >
                  View KJUSYS ERP & Projects
                </Button>
                <Button
                  onClick={() => { navigate('/resume'); window.scrollTo(0, 0); }}
                  variant="outlined"
                  sx={{ borderRadius: '10px', fontWeight: 650 }}
                >
                  View Resume
                </Button>
              </Stack>
            </GlassCard>
          </Grid>

        </Grid>

        {/* ======================================================== */}
        {/* 2. LICENSES & CERTIFICATIONS */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="overline" color="primary" fontWeight={750} sx={{ letterSpacing: '0.08em' }}>
              ACCREDITED ACHIEVEMENTS
            </Typography>
            <Typography variant="h3" fontWeight={850} sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 1 }}>
              Licenses & Certifications
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {(certifications || []).map((cert, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <GlassCard sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Box display="flex" gap={1.5} alignItems="center">
                      <Award size={26} color="#3B82F6" />
                      <Box>
                        <Typography variant="h6" fontWeight={750}>
                          {cert.title}
                        </Typography>
                        <Typography variant="body2" color="primary" fontWeight={650}>
                          {cert.issuer} • Issued {cert.issued}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip label="Verified" size="small" color="success" sx={{ fontSize: '0.7rem', height: 22 }} />
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7, flex: 1 }}>
                    {cert.highlight}
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" pt={2} borderTop="1px solid" borderColor="divider">
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
                      ID: {cert.credentialId}
                    </Typography>
                    <Button
                      component="a"
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      endIcon={<ExternalLink size={14} />}
                      sx={{ textTransform: 'none', fontWeight: 650 }}
                    >
                      Show Credential
                    </Button>
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ======================================================== */}
        {/* 3. TECHNICAL MATRIX */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography variant="h3" fontWeight={850} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 4, textAlign: 'center' }}>
            Technical Skill Competencies
          </Typography>

          <Grid container spacing={4}>
            
            {/* Frontend Matrix */}
            <Grid item xs={12} md={6}>
              <GlassCard sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" fontWeight={750} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 3 }}>
                  <Code2 size={22} color="#3B82F6" /> Frontend Technologies
                </Typography>
                <Stack spacing={2.5}>
                  {(skills?.frontend || []).map((item) => (
                    <Box key={item.name}>
                      <Box display="flex" justifyContent="space-between" mb={0.5}>
                        <Typography variant="subtitle2" fontWeight={700}>
                          {item.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={650}>
                          {item.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.level}
                        sx={{
                          height: 7,
                          borderRadius: 4,
                          bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: 'linear-gradient(90deg, #2563EB, #38BDF8)',
                          }
                        }}
                      />
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </GlassCard>
            </Grid>

            {/* Backend & Databases Matrix */}
            <Grid item xs={12} md={6}>
              <GlassCard sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" fontWeight={750} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 3 }}>
                  <Database size={22} color="#10B981" /> Backend & Relational Databases
                </Typography>

                <Stack spacing={2.5} sx={{ mb: 4 }}>
                  {(skills?.backend || []).map((item) => (
                    <Box key={item.name}>
                      <Box display="flex" justifyContent="space-between" mb={0.5}>
                        <Typography variant="subtitle2" fontWeight={700}>
                          {item.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={650}>
                          {item.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.level}
                        sx={{
                          height: 7,
                          borderRadius: 4,
                          bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: 'linear-gradient(90deg, #10B981, #34D399)',
                          }
                        }}
                      />
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Divider sx={{ my: 2, borderColor: 'divider' }} />

                <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ color: 'text.primary' }}>
                  Tools & Production Environments
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                  {(skills?.tools || []).map((tool) => (
                    <TechPill key={tool} label={tool} />
                  ))}
                </Box>
              </GlassCard>
            </Grid>

          </Grid>
        </Box>

        {/* ======================================================== */}
        {/* 4. CAREER JOURNEY TIMELINE */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography variant="h3" fontWeight={850} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 4, textAlign: 'center' }}>
            Professional Career Timeline
          </Typography>

          <GlassCard sx={{ p: { xs: 3.5, sm: 5 } }}>
            <Box sx={{ maxWidth: 840, mx: 'auto' }}>
              {(experience || []).map((exp, idx) => (
                <TimelineItemBox key={idx}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={1} mb={0.5}>
                    <Typography variant="h6" fontWeight={750}>
                      {exp.title}
                    </Typography>
                    <Chip
                      label={exp.duration}
                      size="small"
                      sx={{
                        fontWeight: 650,
                        fontSize: '0.75rem',
                        bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.15)' : 'rgba(37, 99, 235, 0.08)',
                        color: 'primary.main',
                      }}
                    />
                  </Box>
                  <Typography variant="subtitle2" color="primary" fontWeight={650} gutterBottom>
                    {exp.company} • {exp.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7, mt: 1 }}>
                    {exp.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2.5, mb: 2, mt: 0 }}>
                    {(exp?.bullets || []).map((b, bIdx) => (
                      <Typography component="li" variant="body2" color="text.secondary" key={bIdx} sx={{ mb: 0.8, lineHeight: 1.6 }}>
                        {b}
                      </Typography>
                    ))}
                  </Box>
                  <Box display="flex" gap={0.8} flexWrap="wrap">
                    {(exp?.skills || []).map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </Box>
                </TimelineItemBox>
              ))}
            </Box>
          </GlassCard>
        </Box>

        {/* ======================================================== */}
        {/* 5. FORMAL EDUCATION */}
        {/* ======================================================== */}
        <Box>
          <Typography variant="h3" fontWeight={850} gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 4, textAlign: 'center' }}>
            Academic Background
          </Typography>

          <Grid container spacing={3.5}>
            {(education || []).map((edu, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <GlassCard sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                    <GraduationCap size={30} color="#2563EB" />
                    <Box>
                      <Typography variant="h5" fontWeight={750} sx={{ fontSize: '1.25rem' }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" fontWeight={650}>
                        {edu.duration} • {edu.grade}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="subtitle2" color="primary" fontWeight={650} gutterBottom>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, flex: 1, mt: 1 }}>
                    <strong>Core Focus:</strong> {edu.highlights}
                  </Typography>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

export default About;