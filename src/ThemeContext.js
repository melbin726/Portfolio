// src/ThemeContext.js
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Default to light mode (fresh, vibrant, not heavy black), and persist preference
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme_mode');
    return saved ? saved : 'light';
  });

  const toggleTheme = () => {
    setMode((prevMode) => {
      const nextMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme_mode', nextMode);
      return nextMode;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#2563EB' : '#38BDF8',
            light: mode === 'light' ? '#3B82F6' : '#7DD3FC',
            dark: mode === 'light' ? '#1D4ED8' : '#0284C7',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: mode === 'light' ? '#059669' : '#34D399',
            light: mode === 'light' ? '#10B981' : '#6EE7B7',
            dark: mode === 'light' ? '#047857' : '#059669',
            contrastText: '#FFFFFF',
          },
          background: {
            default: mode === 'light' ? '#F8FAFC' : '#0F172A', // Slate 900 instead of pitch black
            paper: mode === 'light' ? '#FFFFFF' : '#1E293B',   // Slate 800 for cards
            subtle: mode === 'light' ? '#F1F5F9' : '#1A2338',
          },
          text: {
            primary: mode === 'light' ? '#0F172A' : '#F8FAFC',
            secondary: mode === 'light' ? '#475569' : '#94A3B8',
          },
          divider: mode === 'light' ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.1)',
          accent: {
            gradient: mode === 'light'
              ? 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)'
              : 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
            emerald: mode === 'light'
              ? 'linear-gradient(135deg, #059669 0%, #0284C7 100%)'
              : 'linear-gradient(135deg, #34D399 0%, #38BDF8 100%)',
          },
        },
        shape: {
          borderRadius: 14,
        },
        typography: {
          fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'sans-serif'
          ].join(','),
          h1: {
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          },
          h2: {
            fontWeight: 750,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
          },
          h3: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
          },
          h4: {
            fontWeight: 650,
            letterSpacing: '-0.015em',
          },
          h5: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
          },
          h6: {
            fontWeight: 600,
          },
          body1: {
            lineHeight: 1.7,
            letterSpacing: '-0.005em',
          },
          body2: {
            lineHeight: 1.6,
          },
          button: {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.01em',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '10px',
                padding: '9px 20px',
                boxShadow: 'none',
                transition: 'all 0.2s ease',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mode, isDarkMode: mode === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};
