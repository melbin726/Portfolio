// src/ThemeContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme  } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // Set initial mode to light

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'light' ? '#ffffff' : '#000000', // Pure white or black
            paper: mode === 'light' ? '#f8f8f8' : '#111111', // Very light gray or very dark gray
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#ffffff', // Black on white, white on black
            secondary: mode === 'light' ? '#333333' : '#cccccc', // Dark gray on white, light gray on black
          },
        },
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"SF Pro Display"',
            '"SF Pro Text"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
          ].join(','),
          h1: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
          },
          h2: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
          },
          h3: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
          },
          h4: {
            fontWeight: 500,
          },
          h5: {
            fontWeight: 500,
          },
          h6: {
            fontWeight: 500,
          },
          body1: {
            fontWeight: 400,
            lineHeight: 1.6,
          },
          body2: {
            fontWeight: 400,
            lineHeight: 1.5,
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
