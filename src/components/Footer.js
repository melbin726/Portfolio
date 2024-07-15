// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box component="footer" py={3} textAlign="center">
      <Typography variant="body2">
        © 2024 MELBIN JOSEPH. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Follow Me
        <Box component="span" mx={1}>
          <Divider orientation="vertical" flexItem />
        </Box>
        <Link href="https://github.com/melbin726/" target="_blank">
          <GitHubIcon sx={{ mr: 1 }} />
        </Link>
        <Link href="https://www.linkedin.com/in/melbin-joseph-96640a252/" target="_blank">
          <LinkedInIcon sx={{ mx: 1 }} />
        </Link>
        <Link href=" https://x.com/Melbin?s=08" target="_blank">
          <TwitterIcon sx={{ ml: 1 }} />
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
