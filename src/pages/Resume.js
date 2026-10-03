import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  Button,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import { styled } from '@mui/system';
import {
  Printer,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Building2,
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
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
}));

const TechPill = styled(Chip)(({ theme }) => ({
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.8rem',
  fontWeight: 500,
  borderRadius: '6px',
  padding: '3px 6px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.07)',
  color: theme.palette.mode === 'dark' ? '#7DD3FC' : '#1D4ED8',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.18)',
}));

function Resume() {
  const { isDarkMode } = useThemeContext();
  const { personal, experience, education, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 12, md: 16 }, pb: 12 }}>
      <Container maxWidth="md">
        
        {/* Top Control Bar (Hidden during print) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            mb: 4,
            '@media print': { display: 'none' }
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight={850}>
              Executive Engineering Resume
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Standardized ATS-friendly format • Ready for print & archival
            </Typography>
          </Box>

          <Box display="flex" gap={1.5}>
            <Button
              variant="contained"
              startIcon={<Printer size={17} />}
              onClick={handlePrint}
              sx={{
                borderRadius: '10px',
                fontWeight: 650,
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              }}
            >
              Print / Save PDF
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="mailto:melmelbin2007@gmail.com"
              sx={{ borderRadius: '10px', fontWeight: 650 }}
            >
              Contact Melbin
            </Button>
          </Box>
        </Box>

        {/* Main Printable Resume Paper */}
        <GlassCard sx={{ p: { xs: 3.5, sm: 6 }, '@media print': { boxShadow: 'none', border: 'none', p: 0 } }}>
          
          {/* Header */}
          <Box sx={{ pb: 3, borderBottom: '2px solid', borderColor: 'divider', mb: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={2}>
              <Box>
                <Typography variant="h3" fontWeight={850} sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, letterSpacing: '-0.02em', mb: 0.5 }}>
                  {personal.name}
                </Typography>
                <Typography variant="h6" color="primary" fontWeight={700} sx={{ mb: 1 }}>
                  {personal.role} • {personal.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 650, lineHeight: 1.6 }}>
                  {personal.headline}. {personal.shortBio}
                </Typography>
              </Box>

              {/* Contact Details */}
              <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                <Box display="flex" alignItems="center" gap={1} mb={0.5} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
                  <Mail size={15} color="#64748B" />
                  <Typography variant="body2" color="text.secondary">
                    {personal.email}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1} mb={0.5} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
                  <Phone size={15} color="#64748B" />
                  <Typography variant="body2" color="text.secondary">
                    {personal.phone}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1} mb={0.5} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
                  <MapPin size={15} color="#64748B" />
                  <Typography variant="body2" color="text.secondary">
                    {personal.location}
                  </Typography>
                </Box>
                <Box display="flex" gap={1} mt={1} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
                  <Typography
                    component="a"
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="caption"
                    sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 650 }}
                  >
                    github.com/melbin726
                  </Typography>
                  <Typography variant="caption" color="text.secondary">•</Typography>
                  <Typography
                    component="a"
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="caption"
                    sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 650 }}
                  >
                    LinkedIn
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Section: Professional Experience */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight={800} color="primary" sx={{ letterSpacing: '0.04em', textTransform: 'uppercase', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Briefcase size={18} /> Professional Experience
            </Typography>

            <Stack spacing={3}>
              {(experience || []).map((exp, idx) => (
                <Box key={idx}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" mb={0.5}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={750}>
                        {exp.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight={600}>
                        {exp.company} — {exp.location}
                      </Typography>
                    </Box>
                    <Chip
                      label={exp.duration}
                      size="small"
                      sx={{
                        fontWeight: 650,
                        fontSize: '0.75rem',
                        bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)',
                      }}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ my: 0.8, fontStyle: 'italic' }}>
                    {exp.description}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                    {(exp?.bullets || []).map((bullet, bIdx) => (
                      <Typography component="li" variant="body2" color="text.secondary" key={bIdx} sx={{ mb: 0.6, lineHeight: 1.6 }}>
                        {bullet}
                      </Typography>
                    ))}
                  </Box>

                  <Box display="flex" gap={0.8} flexWrap="wrap" mt={1.5}>
                    {(exp?.skills || []).map((tech) => (
                      <TechPill key={tech} label={tech} size="small" />
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 3, borderColor: 'divider' }} />

          {/* Section: Flagship Project & Enterprise Systems */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight={800} color="primary" sx={{ letterSpacing: '0.04em', textTransform: 'uppercase', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Building2 size={18} /> Flagship Enterprise Systems
            </Typography>

            <Box sx={{ mb: 2.5 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                <Typography variant="subtitle1" fontWeight={750}>
                  KJUSYS Enterprise Resource Planning (ERP) Platform
                </Typography>
                <Chip label="12,000+ Daily Users" color="primary" size="small" sx={{ fontSize: '0.7rem' }} />
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                Campus-wide digital infrastructure powering academic administration, visitor gate pass management, student assessments, and faculty workflows across 15+ departments at Kristu Jayanti Autonomous College.
              </Typography>
              <Box display="flex" gap={0.8} flexWrap="wrap">
                {["Angular", "TypeScript", "Tailwind CSS", "Java REST APIs", "Spring Boot", "PostgreSQL", "RBAC Security"].map((t) => (
                  <TechPill key={t} label={t} size="small" />
                ))}
              </Box>
            </Box>

            <Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                <Typography variant="subtitle1" fontWeight={750}>
                  GrocerEase E-Commerce & Supply Chain Engine
                </Typography>
                <Chip label="MicroGenesis TechSoft" variant="outlined" size="small" sx={{ fontSize: '0.7rem' }} />
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                Constructed high-speed backend services in C# .NET with normalized PostgreSQL schemas (3NF) and real-time inventory tracking.
              </Typography>
              <Box display="flex" gap={0.8} flexWrap="wrap">
                {["C#", ".NET Core", "PostgreSQL", "React.js", "Entity Framework"].map((t) => (
                  <TechPill key={t} label={t} size="small" />
                ))}
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3, borderColor: 'divider' }} />

          {/* Section: Licenses & Certifications */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight={800} color="primary" sx={{ letterSpacing: '0.04em', textTransform: 'uppercase', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Award size={18} /> Licenses & Certifications
            </Typography>

            <Stack spacing={2}>
              {(certifications || []).map((cert, idx) => (
                <Box key={idx} display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={1}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={750}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.issuer} • Issued {cert.issued} (Credential ID: {cert.credentialId})
                    </Typography>
                  </Box>
                  <Chip label="Verified" size="small" color="success" sx={{ fontSize: '0.7rem' }} />
                </Box>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 3, borderColor: 'divider' }} />

          {/* Section: Formal Education */}
          <Box>
            <Typography variant="h6" fontWeight={800} color="primary" sx={{ letterSpacing: '0.04em', textTransform: 'uppercase', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <GraduationCap size={18} /> Education
            </Typography>

            <Stack spacing={2}>
              {(education || []).map((edu, idx) => (
                <Box key={idx} display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={1}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={750}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.institution}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    <Typography variant="subtitle2" fontWeight={700} color="primary">
                      {edu.grade}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {edu.duration}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

        </GlassCard>

      </Container>
    </Box>
  );
}

export default Resume;