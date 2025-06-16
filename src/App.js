import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Teams from './pages/Teams';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Box } from '@mui/material';

// Import club pages
import MarsClub from './pages/clubs/MarsClub';
import CSClub from './pages/clubs/CSClub';
import DevClub from './pages/clubs/DevClub';
import AUVSociety from './pages/clubs/AUVSociety';
import TAD from './pages/clubs/TAD';
import RoboticsClub from './pages/clubs/RoboticsClub';
import SAECollegiateClub from './pages/clubs/SAECollegiateClub';

// Import team pages
import Nira from './pages/teams/Nira';
import Astra from './pages/teams/Astra';
import Revolt from './pages/teams/Revolt';
import Shunya from './pages/teams/Shunya';
import Tad from './pages/teams/Tad';
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', overflowX: 'hidden' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/mars" element={<MarsClub />} />
            <Route path="/clubs/cs" element={<CSClub />} />
            <Route path="/clubs/dev" element={<DevClub />} />
            <Route path="/clubs/auv" element={<AUVSociety />} />
            <Route path="/clubs/tad" element={<TAD />} />
            <Route path="/clubs/robotics" element={<RoboticsClub />} />
            <Route path="/clubs/sae" element={<SAECollegiateClub />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/nira" element={<Nira />} />
            <Route path="/teams/astra" element={<Astra />} />
            <Route path="/teams/revolt" element={<Revolt />} />
            <Route path="/teams/shunya" element={<Shunya />} />
            <Route path="/teams/tad" element={<Tad />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
