import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: 350,
  width: 320,
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const teamsData = [
  {
    name: 'Nira',
    description: 'AUV Society',
    image: '/teams/nira/logo.png',
    link: '/teams/nira',
  },
  {
    name: 'Team Astra',
    description: 'SAE Club',
    image: '/teams/astra/logo.png',
    link: '/teams/astra',
  },
  {
    name: 'Revolt Racers',
    description: 'SAE Club',
    image: '/teams/revolt/logo.png',
    link: '/teams/revolt',
  },
  {
    name: 'Team Shunya',
    description: 'Mars Club',
    image: '/teams/shunya/logo.png',
    link: '/teams/shunya',
  },
  {
    name: 'Team TAD',
    description: 'TAD Club',
    image: '/teams/tad/logo.png',
    link: '/teams/tad',
  },
];

function Teams() {
  return (
    <Box sx={{ 
      py: 8, 
      pt: { xs: 12, sm: 14, md: 16 },
      pb: 8, 
      bgcolor: 'background.default' 
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Competitive Teams
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Our competitive teams represent the institute in various national and international competitions.
            These teams work on cutting-edge projects and showcase our technical excellence on global platforms.
          </Typography>
        </Box>

        {/* Teams Grid */}
        <Grid 
          container 
          spacing={3} 
          justifyContent="center"
          sx={{ 
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 1, sm: 2, md: 3 }
          }}
        >
          {teamsData.map((team) => (
            <Grid 
              item 
              key={team.name} 
              xs={12} 
              sm={6} 
              md={3}
              sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <StyledCard sx={{ 
                width: '100%', 
                maxWidth: '330px',
                bgcolor: 'background.paper',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 8px 24px rgba(0,0,0,0.4)' : theme.shadows[8],
                },
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  width: 200,
                  height: 200,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'white',
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : 2,
                  borderRadius: 2,
                }}>
                  <CardMedia
                    component="img"
                    image={team.image}
                    alt={team.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 2,
                      objectFit: 'contain',
                      objectPosition: 'center',
                      p: 3,
                    }}
                  />
                </Box>
                <CardContent sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'space-between',
                  bgcolor: 'background.paper',
                  py: 2
                }}>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        fontWeight: 'bold',
                        color: 'text.primary',
                        textAlign: 'center',
                        maxWidth: '100%',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        mb: 1,
                      }}
                    >
                      {team.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {team.description}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    href={team.link}
                    size="small"
                    sx={{
                      mt: 'auto',
                      height: 40,
                      background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                      color: 'white',
                      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                      '&:hover': {
                        bgcolor: 'primary.dark'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Teams; 