import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  Chip,
  Stack,
  IconButton,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/system';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  CheckCircle2,
  Building2,
  Layers,
  Code2,
  Database,
  Smartphone,
  Award,
  ExternalLink,
} from 'lucide-react';
import { useThemeContext } from '../ThemeContext';
import { portfolioData } from '../data/portfolioData';

// --- Styled Components ---

const GlassCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(30, 41, 59, 0.75)'
    : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.09)'
    : '1px solid rgba(15, 23, 42, 0.08)',
  borderRadius: '18px',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 24px -8px rgba(0, 0, 0, 0.35)'
    : '0 8px 24px -8px rgba(15, 23, 42, 0.05)',
  '&:hover': {
    borderColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(37, 99, 235, 0.3)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 16px 32px -12px rgba(0, 0, 0, 0.45), 0 0 20px rgba(56, 189, 248, 0.12)'
      : '0 16px 32px -12px rgba(15, 23, 42, 0.08), 0 0 20px rgba(37, 99, 235, 0.1)',
  },
}));

const StatBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(30, 41, 59, 0.6)'
    : 'rgba(241, 245, 249, 0.85)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.08)'
    : '1px solid rgba(15, 23, 42, 0.06)',
  borderRadius: '14px',
  padding: '16px 12px',
  textAlign: 'center',
  height: '100%',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const TechPill = styled(Chip)(({ theme }) => ({
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.75rem',
  fontWeight: 500,
  borderRadius: '6px',
  padding: '1px 3px',
  height: '24px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.07)',
  color: theme.palette.mode === 'dark' ? '#7DD3FC' : '#1D4ED8',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.18)',
}));

const SectionBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 12px',
  borderRadius: '24px',
  fontSize: '0.78rem',
  fontWeight: 650,
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  marginBottom: '12px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)',
  color: theme.palette.primary.main,
  border: theme.palette.mode === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.2)',
}));

const Home = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();
  const { personal, skills, kjusysDetails, projects, certifications } = portfolioData;
  const stats = portfolioData.stats || personal?.stats || [];

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 15 }, pb: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient lighting */}
      <Box
        sx={{
          position: 'absolute',
          top: '3%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '90vw', md: '70vw' },
          height: { xs: '300px', md: '420px' },
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.04) 50%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(70px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
        
        {/* ======================================================== */}
        {/* 1. HERO SECTION (Uncluttered, Mobile-First) */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 5, md: 9 } }}>
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
            
            {/* Mobile-Only Avatar Header (clean, compact) */}
            <Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 1 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  src={personal.avatar}
                  alt={personal.name}
                  sx={{
                    width: 105,
                    height: 105,
                    border: '3px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)',
                  }}
                  imgProps={{
                    style: {
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 2,
                    right: 2,
                    bgcolor: '#10B981',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: '2px solid #FFFFFF',
                  }}
                />
              </Box>
            </Grid>

            {/* Main Text Content */}
            <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              
              {/* Status Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.8,
                  py: 0.5,
                  borderRadius: '30px',
                  bgcolor: isDarkMode ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                <span className="status-dot"></span>
                <Typography variant="caption" sx={{ color: isDarkMode ? '#34D399' : '#047857', fontWeight: 650, fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
                  Software Developer @ KJSDC
                </Typography>
              </Box>

              {/* Name */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.6rem' },
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  mb: 1.5,
                }}
              >
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: isDarkMode
                      ? 'linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #C084FC 100%)'
                      : 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #7C3AED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {personal.name}
                </Box>
              </Typography>

              {/* Headline */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 650,
                  color: 'primary.main',
                  lineHeight: 1.35,
                  fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.3rem' },
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                {personal.headline}
              </Typography>

              {/* Bio summary */}
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  mb: { xs: 3, md: 3.5 },
                  fontSize: { xs: '0.925rem', sm: '1rem' },
                  maxWidth: { md: 560 },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                {personal.shortBio} 2 years of hands-on experience building clean production modules for <strong>KJUSYS ERP</strong> and full-stack web applications.
              </Typography>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 2 }}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: { xs: 2.5, md: 3 } }}
              >
                <Button
                  variant="contained"
                  onClick={() => { navigate('/portfolio'); window.scrollTo(0, 0); }}
                  endIcon={<ArrowRight size={16} />}
                  sx={{
                    py: { xs: 1, sm: 1.2 },
                    px: { xs: 2.2, sm: 3 },
                    fontSize: { xs: '0.88rem', sm: '0.95rem' },
                    fontWeight: 650,
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  }}
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => { navigate('/resume'); window.scrollTo(0, 0); }}
                  startIcon={<FileText size={16} />}
                  sx={{
                    py: { xs: 1, sm: 1.2 },
                    px: { xs: 2, sm: 2.8 },
                    fontSize: { xs: '0.88rem', sm: '0.95rem' },
                    fontWeight: 650,
                    borderRadius: '10px',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.15)',
                    color: 'text.primary',
                  }}
                >
                  Resume
                </Button>
              </Stack>

              {/* Profiles Row */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                gap={{ xs: 1, sm: 2 }}
                flexWrap="wrap"
              >
                <Button
                  component="a"
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  startIcon={<Github size={15} />}
                  sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.82rem', fontWeight: 600 }}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  startIcon={<Linkedin size={15} />}
                  sx={{ color: 'text.secondary', textTransform: 'none', fontSize: '0.82rem', fontWeight: 600 }}
                >
                  LinkedIn (500+)
                </Button>
              </Box>
            </Grid>

            {/* Desktop-Only Portrait Card */}
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ position: 'relative', mx: 'auto', maxWidth: 360 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -3,
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #059669 100%)',
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
                      height: 380,
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                    }}
                  />
                  <Box sx={{ p: 2, bgcolor: isDarkMode ? 'rgba(30, 41, 59, 0.95)' : '#F8FAFC' }}>
                    <Typography variant="subtitle2" fontWeight={750}>
                      Melbin Joseph
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Software Developer • MCA (Kristu Jayanti)
                    </Typography>
                    <Box display="flex" gap={0.8} mt={1} flexWrap="wrap">
                      <TechPill label="Angular" />
                      <TechPill label="Tailwind CSS" />
                      <TechPill label="React" />
                      <TechPill label="Java Spring" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Box>

        {/* ======================================================== */}
        {/* 2. STATS BAR (Compact 2x2 on Mobile, Clean on Desktop) */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            {stats.map((stat, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <StatBox>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 850,
                      fontSize: { xs: '1.4rem', sm: '1.75rem' },
                      mb: 0.3,
                      color: 'primary.main',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' }, mb: 0.2 }}>
                    {stat.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem', display: 'block' }}>
                    {stat.helper}
                  </Typography>
                </StatBox>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ======================================================== */}
        {/* 3. FEATURED WORK: KJUSYS ERP (Realistic & Grounded) */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
          <Box textAlign={{ xs: 'center', md: 'left' }} mb={3}>
            <SectionBadge>
              <Building2 size={13} />
              Core Production Work
            </SectionBadge>
            <Typography variant="h3" fontWeight={850} sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              KJUSYS ERP System (KJSDC)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Internal management platform powering Kristu Jayanti Autonomous College for 12,000+ campus users
            </Typography>
          </Box>

          <GlassCard sx={{ p: { xs: 2.5, sm: 4 } }}>
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              
              <Grid item xs={12} md={7}>
                <Typography variant="h5" fontWeight={750} gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.45rem' } }}>
                  Frontend Development & Campus Modules
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                  At Kristu Jayanti Software Development Centre (KJSDC), I build modular front-end interfaces using <strong>Angular</strong> and <strong>Tailwind CSS</strong>, connecting them with backend REST APIs built with <strong>Java (Spring Boot)</strong> and <strong>PostgreSQL</strong> databases.
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ color: 'text.primary' }}>
                    Key Contributions:
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={0.8}>
                    <Box display="flex" alignItems="flex-start" gap={1}>
                      <CheckCircle2 size={16} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <Typography variant="body2" color="text.secondary">
                        <strong>Visitor Gate Pass System:</strong> Built digital visitor logging, real-time security tracking, and host notifications.
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="flex-start" gap={1}>
                      <CheckCircle2 size={16} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <Typography variant="body2" color="text.secondary">
                        <strong>Student & Faculty Modules:</strong> Developed responsive views for course registrations, CIA marks, and daily attendance.
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="flex-start" gap={1}>
                      <CheckCircle2 size={16} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <Typography variant="body2" color="text.secondary">
                        <strong>Modular UI Kit:</strong> Built reusable Tailwind CSS components, standardizing tables, inputs, and modals across modules.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box display="flex" gap={0.8} flexWrap="wrap" mb={2.5}>
                  {["Angular", "TypeScript", "Tailwind CSS", "Java REST APIs", "PostgreSQL"].map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </Box>

                <Button
                  onClick={() => { navigate('/portfolio'); window.scrollTo(0, 0); }}
                  variant="outlined"
                  size="small"
                  endIcon={<ArrowRight size={14} />}
                  sx={{ borderRadius: '8px', fontWeight: 650 }}
                >
                  View All Project Details
                </Button>
              </Grid>

              {/* Module Highlights Grid */}
              <Grid item xs={12} md={5}>
                <Stack spacing={1.5}>
                  {(kjusysDetails?.modules || []).map((mod, i) => (
                    <Box
                      key={i}
                      sx={{
                        p: 1.8,
                        borderRadius: '12px',
                        bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.4}>
                        <Typography variant="subtitle2" fontWeight={750} sx={{ fontSize: '0.9rem' }}>
                          {mod.title}
                        </Typography>
                        <Chip label={mod.tag} size="small" sx={{ fontSize: '0.68rem', height: 20 }} />
                      </Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.5 }}>
                        {mod.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>

            </Grid>
          </GlassCard>
        </Box>

        {/* ======================================================== */}
        {/* 4. SOFTWARE ENGINEERING PRINCIPLES (Clean, 4 Grounded Cards) */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
          <Box textAlign={{ xs: 'center', md: 'left' }} mb={3}>
            <SectionBadge>
              <Code2 size={13} />
              Best Practices
            </SectionBadge>
            <Typography variant="h3" fontWeight={850} sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              Engineering Principles
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Core concepts I follow when developing web applications and database systems
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5 }}>
            {skills.theories.map((theory, idx) => {
              const icons = [
                <Layers size={20} color="#2563EB" />,
                <Code2 size={20} color="#7C3AED" />,
                <Database size={20} color="#10B981" />,
                <Smartphone size={20} color="#EA580C" />,
              ];

              return (
                <Grid item xs={12} sm={6} key={idx}>
                  <GlassCard sx={{ p: { xs: 2.2, sm: 3 }, height: '100%' }}>
                    <Box display="flex" alignItems="center" gap={1.2} mb={1}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        {icons[idx % icons.length]}
                      </Box>
                      <Typography variant="subtitle1" fontWeight={750}>
                        {theory.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.88rem' }}>
                      {theory.desc}
                    </Typography>
                  </GlassCard>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* ======================================================== */}
        {/* 5. VERIFIED LICENSES & CERTIFICATIONS */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
          <Box textAlign={{ xs: 'center', md: 'left' }} mb={3}>
            <SectionBadge>
              <Award size={13} />
              Credentials
            </SectionBadge>
            <Typography variant="h3" fontWeight={850} sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              Certifications & Training
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5 }}>
            {certifications.map((cert, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <GlassCard sx={{ p: { xs: 2.2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={750}>
                        {cert.title}
                      </Typography>
                      <Typography variant="caption" color="primary" fontWeight={650}>
                        {cert.issuer} • {cert.issued}
                      </Typography>
                    </Box>
                    <Chip label="Verified" size="small" color="success" sx={{ fontSize: '0.68rem', height: 20 }} />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.86rem', flex: 1, mb: 1.5 }}>
                    {cert.highlight}
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" pt={1.5} borderTop="1px solid" borderColor="divider">
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '0.72rem' }}>
                      ID: {cert.credentialId.slice(0, 16)}...
                    </Typography>
                    <Button
                      component="a"
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      endIcon={<ExternalLink size={12} />}
                      sx={{ textTransform: 'none', fontWeight: 650, fontSize: '0.8rem', p: 0 }}
                    >
                      Verify
                    </Button>
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ======================================================== */}
        {/* 6. PROJECTS SUMMARY (Clean, Skimmable Cards) */}
        {/* ======================================================== */}
        <Box sx={{ mb: { xs: 5, md: 8 } }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-end" mb={3} flexWrap="wrap" gap={1}>
            <Box>
              <SectionBadge>
                <Code2 size={13} />
                Work Highlights
              </SectionBadge>
              <Typography variant="h3" fontWeight={850} sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Featured Projects
              </Typography>
            </Box>
            <Button
              onClick={() => { navigate('/portfolio'); window.scrollTo(0, 0); }}
              size="small"
              endIcon={<ArrowRight size={14} />}
              sx={{ fontWeight: 650, fontSize: '0.88rem' }}
            >
              All Projects ({projects.length})
            </Button>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5 }}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} key={project.id}>
                <GlassCard sx={{ p: { xs: 2.2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Chip
                      label={project.badge}
                      size="small"
                      sx={{
                        fontWeight: 650,
                        fontSize: '0.72rem',
                        height: 22,
                        bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.15)' : 'rgba(37, 99, 235, 0.08)',
                        color: isDarkMode ? '#7DD3FC' : '#1D4ED8',
                      }}
                    />
                    <Typography variant="caption" color="text.secondary" fontWeight={550}>
                      {project.role}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle1" fontWeight={750} gutterBottom sx={{ fontSize: '1.1rem' }}>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6, fontSize: '0.88rem', flex: 1 }}>
                    {project.shortDesc}
                  </Typography>

                  <Box display="flex" flexWrap="wrap" gap={0.6} mb={2}>
                    {project.technologies.slice(0, 5).map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </Box>

                  <Box display="flex" justifyContent="space-between" alignItems="center" pt={1.5} borderTop="1px solid" borderColor="divider">
                    <Button
                      onClick={() => { navigate('/portfolio'); window.scrollTo(0, 0); }}
                      size="small"
                      endIcon={<ArrowRight size={12} />}
                      sx={{ fontWeight: 650, fontSize: '0.8rem', p: 0 }}
                    >
                      Details
                    </Button>
                    {project.githubLink && (
                      <IconButton
                        component="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </IconButton>
                    )}
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ======================================================== */}
        {/* 7. CALL TO ACTION (Compact & Clean) */}
        {/* ======================================================== */}
        <Box
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: '20px',
            textAlign: 'center',
            bgcolor: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(238, 242, 255, 0.85)',
            border: isDarkMode ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.2)',
          }}
        >
          <Typography variant="h4" fontWeight={850} sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem' }, mb: 1 }}>
            Let's Connect & Collaborate
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto', mb: 3, lineHeight: 1.6 }}>
            {personal.status}. Open to exciting developer opportunities and web engineering projects.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
            <Button
              variant="contained"
              onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
              endIcon={<ArrowRight size={16} />}
              sx={{
                py: 1.2,
                px: 3,
                fontSize: '0.92rem',
                fontWeight: 650,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="mailto:melmelbin2007@gmail.com"
              sx={{
                py: 1.2,
                px: 2.5,
                fontSize: '0.92rem',
                fontWeight: 650,
                borderRadius: '10px',
              }}
            >
              Email Directly
            </Button>
          </Stack>
        </Box>

      </Container>
    </Box>
  );
};

export default Home;