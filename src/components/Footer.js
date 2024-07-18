// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box component="footer" py={3} textAlign="center">
      <Typography variant="body2">
        © 2024 melbin joseph All rights reserved.
      </Typography>
      <Typography variant="body2">
        Follow Me
        <Box component="span" mx={1}>
          <Divider orientation="vertical" flexItem />
        </Box>
        <Link href="https://github.com/melbin726/" target="_blank">
          <GitHubIcon sx={{ mr: 1 ,color: 'white'}} />
        </Link>
        <Link href="https://www.linkedin.com/in/melbin-joseph-96640a252/" target="_blank">
          <LinkedInIcon sx={{ mx: 1 ,color: 'white'}} />
        </Link>
        <Link href=" https://x.com/Melbin?s=08" target="_blank">
          <TwitterIcon sx={{ ml: 1,color: 'white' }} />
        </Link>
        <Link href="https://www.instagram.com/___melbin_/?igsh=MXFmcHN4NzYwajM0eA%3D%3D" target="_blank" sxcolor={'white'}>
          <InstagramIcon sx={{ ml: 1 , color: 'white'}} />
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
