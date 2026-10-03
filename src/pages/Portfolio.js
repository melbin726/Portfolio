import React, { useState } from 'react';
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
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Github,
} from 'lucide-react';
import { useThemeContext } from '../ThemeContext';
import { portfolioData } from '../data/portfolioData';

// Styled Components
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
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(37, 99, 235, 0.3)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.15)'
      : '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 25px rgba(37, 99, 235, 0.12)',
  },
}));

const TechPill = styled(Chip)(({ theme }) => ({
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.78rem',
  fontWeight: 500,
  borderRadius: '6px',
  padding: '2px 4px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.07)',
  color: theme.palette.mode === 'dark' ? '#7DD3FC' : '#1D4ED8',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.18)',
}));

const ArchLayer = styled(Paper)(({ theme }) => ({
  padding: '16px 20px',
  borderRadius: '12px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
}));

const categories = ['All', 'Enterprise', 'Full Stack', 'Analytics & UI', 'Security & Tools'];

function Portfolio() {
  const { isDarkMode } = useThemeContext();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { projects, kjusysDetails } = portfolioData;

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 12, md: 16 }, pb: 12, position: 'relative' }}>
      
      {/* Ambient background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: '10%',
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
        
        {/* Header */}
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
            <Terminal size={15} />
            Production Software Systems
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
            Engineering Portfolio & Projects
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
            Institutional enterprise ERP modules at KJSDC, supply chain platforms, candidate analytics dashboards, and open-source systems.
          </Typography>
        </Box>

        {/* ======================================================== */}
        {/* FLAGSHIP ERP ARCHITECTURAL CASE STUDY (KJUSYS) */}
        {/* ======================================================== */}
        <Box id="kjusys-erp" sx={{ mb: { xs: 8, md: 12 } }}>
          <GlassCard sx={{ p: { xs: 3.5, sm: 5, md: 6 } }}>
            
            {/* Header Badge & Title */}
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={2} mb={3}>
              <Box>
                <Chip
                  icon={<Building2 size={16} />}
                  label="FLAGSHIP ENTERPRISE SYSTEM • KJSDC"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 1.5, letterSpacing: '0.02em' }}
                />
                <Typography variant="h2" fontWeight={850} sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 1 }}>
                  {kjusysDetails.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" fontWeight={550}>
                  {kjusysDetails.tagline}
                </Typography>
              </Box>

              <Box display="flex" gap={1.5}>
                <Button
                  component="a"
                  href="https://github.com/melbin726/Visitor_Gate_Pass"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="small"
                  startIcon={<Github size={16} />}
                  sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}
                >
                  Visitor Module Code
                </Button>
                <Button
                  component="a"
                  href="https://kristujayanti.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="small"
                  endIcon={<ExternalLink size={15} />}
                  sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 650 }}
                >
                  Institution Portal
                </Button>
              </Box>
            </Box>

            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.05rem', mb: 4 }}>
              As a core Software Development Engineer at the <strong>Kristu Jayanti Software Development Centre (KJSDC)</strong>, I engineer production-grade modules for <strong>KJUSYS</strong>, the institutional ERP that runs all academic, operational, security, and administrative workflows for over 12,000+ students and 600+ faculty members.
            </Typography>

            {/* Architecture Highlights & Layers */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
              
              {/* Left Column: Architectural Flow */}
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight={750} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Layers size={22} color="#3B82F6" /> Multi-Tier Architecture & Engineering
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                  KJUSYS is engineered with clear separation of concerns, ensuring high throughput, zero downtime during semester registrations, and strict institutional privacy compliance.
                </Typography>

                <Stack spacing={1.5}>
                  <ArchLayer>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        1. Client & Presentation Tier
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Modular Angular Architecture • Tailwind CSS Design Tokens • RxJS Observables & Signals
                      </Typography>
                    </Box>
                    <TechPill label="Angular" />
                  </ArchLayer>

                  <ArchLayer>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        2. Security & Access Gateways (RBAC)
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        JWT Token Authentication • Granular Institutional Claims • Route Guards
                      </Typography>
                    </Box>
                    <TechPill label="Zero-Trust RBAC" />
                  </ArchLayer>

                  <ArchLayer>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        3. Business Logic & Microservices
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Java Spring Boot REST Services • C# Modules • Idempotent API Contracts
                      </Typography>
                    </Box>
                    <TechPill label="Java Spring" />
                  </ArchLayer>

                  <ArchLayer>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        4. Relational Persistence & Integrity
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        PostgreSQL Normalized (3NF) • Transaction Isolation • Connection Pooling
                      </Typography>
                    </Box>
                    <TechPill label="PostgreSQL" />
                  </ArchLayer>
                </Stack>
              </Grid>

              {/* Right Column: Key Architectural Highlights */}
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight={750} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShieldCheck size={22} color="#10B981" /> System Design & Resilience
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                  Key technical challenges solved to maintain institutional SLA and sub-second response times:
                </Typography>

                <Stack spacing={2}>
                  {(kjusysDetails?.architecturalHighlights || []).map((arch, i) => (
                    <Box
                      key={i}
                      sx={{
                        p: 2,
                        borderRadius: '12px',
                        bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.06)' : 'rgba(37, 99, 235, 0.04)',
                        border: isDarkMode ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid rgba(37, 99, 235, 0.12)',
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                        <CheckCircle2 size={16} color="#10B981" />
                        <Typography variant="subtitle2" fontWeight={700}>
                          {arch.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ pl: 3, lineHeight: 1.6, fontSize: '0.875rem' }}>
                        {arch.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>

            </Grid>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            {/* Modules Showcase */}
            <Typography variant="h5" fontWeight={750} gutterBottom sx={{ mb: 3 }}>
              Specific Modules Engineered in KJUSYS
            </Typography>

            <Grid container spacing={3}>
              {(kjusysDetails?.modules || []).map((mod, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: '14px',
                      bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.05)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
                      <Typography variant="subtitle1" fontWeight={750}>
                        {mod.title}
                      </Typography>
                      <Chip label={mod.tag} size="small" sx={{ fontSize: '0.7rem', height: 22 }} />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.7, mb: 2 }}>
                      {mod.desc}
                    </Typography>
                    <Box display="flex" gap={1} flexWrap="wrap">
                      {(mod?.tech || []).map((t) => (
                        <TechPill key={t} label={t} />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

          </GlassCard>
        </Box>

        {/* ======================================================== */}
        {/* ALL PROJECTS CATALOGUE WITH CATEGORY FILTER */}
        {/* ======================================================== */}
        <Box sx={{ mb: 6 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2} mb={4}>
            <Box>
              <Typography variant="h3" fontWeight={850} sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                All Software Engineering Projects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Filter by architecture domain or review technical repositories
              </Typography>
            </Box>

            {/* Filter Tabs */}
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
                p: 0.5,
                borderRadius: '12px',
                bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  size="small"
                  sx={{
                    px: 2,
                    py: 0.6,
                    borderRadius: '8px',
                    fontWeight: selectedCategory === cat ? 700 : 500,
                    textTransform: 'none',
                    fontSize: '0.85rem',
                    color: selectedCategory === cat ? '#ffffff' : 'text.secondary',
                    bgcolor: selectedCategory === cat ? 'primary.main' : 'transparent',
                    '&:hover': {
                      bgcolor: selectedCategory === cat ? 'primary.dark' : (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'),
                    }
                  }}
                >
                  {cat}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Project Cards Grid */}
          <Grid container spacing={3.5}>
            <AnimatePresence>
              {(filteredProjects || []).map((project, idx) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    style={{ height: '100%' }}
                  >
                    <GlassCard sx={{ p: 4 }}>
                      
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Chip
                          label={project.badge}
                          size="small"
                          sx={{
                            fontWeight: 650,
                            fontSize: '0.75rem',
                            bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.15)' : 'rgba(37, 99, 235, 0.08)',
                            color: isDarkMode ? '#7DD3FC' : '#1D4ED8',
                          }}
                        />
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>
                          {project.role}
                        </Typography>
                      </Box>

                      <Typography variant="h5" fontWeight={750} gutterBottom sx={{ fontSize: '1.35rem' }}>
                        {project.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7, flex: 1, mb: 2 }}>
                        {project.fullDesc}
                      </Typography>

                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '8px',
                          bgcolor: isDarkMode ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.03)',
                          mb: 2.5,
                          borderLeft: '3px solid',
                          borderColor: 'primary.main',
                        }}
                      >
                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block' }}>
                          BUSINESS / TECHNICAL IMPACT:
                        </Typography>
                        <Typography variant="body2" fontWeight={650} color="primary">
                          {project.impact}
                        </Typography>
                      </Box>

                      <Box display="flex" flexWrap="wrap" gap={0.8} mb={3}>
                        {(project?.technologies || []).map((t) => (
                          <TechPill key={t} label={t} />
                        ))}
                      </Box>

                      <Box display="flex" justifyContent="space-between" alignItems="center" pt={2} borderTop="1px solid" borderColor="divider">
                        <Box display="flex" gap={1}>
                          {project.githubLink && (
                            <Button
                              component="a"
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              startIcon={<Github size={16} />}
                              sx={{ textTransform: 'none', color: 'text.primary', fontWeight: 650 }}
                            >
                              GitHub Code
                            </Button>
                          )}
                          {project.liveLink && (
                            <Button
                              component="a"
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              endIcon={<ExternalLink size={14} />}
                              sx={{ textTransform: 'none', color: 'primary.main', fontWeight: 650 }}
                            >
                              Live Portal
                            </Button>
                          )}
                        </Box>

                        <Chip
                          label={project.category}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.72rem' }}
                        />
                      </Box>

                    </GlassCard>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

export default Portfolio;