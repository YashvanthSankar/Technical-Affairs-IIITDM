import React from 'react';
import { Box } from '@mui/material';

// Import section components
import Hero from '../components/Hero';
import About from '../components/About';
import OurFamily from '../components/OurFamily';
import Achievements from '../components/Achievements';
import Techfest from '../components/Techfest';
import Sponsors from '../components/Sponsors';

function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Render the section components */}
      <Hero />
      <About />
      <OurFamily />
      <Achievements />
      <Techfest />
      <Sponsors />
    </Box>
  );
}

export default Home; 