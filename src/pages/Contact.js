import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  IconButton
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email
} from '@mui/icons-material';

// Team member data
const teamData = {
  secretary: {
    name: "Secretary Name",
    position: "Technical Affairs Secretary",
    image: "/path-to-secretary-image.jpg",
    email: "secretary@example.com",
    linkedin: "https://linkedin.com/in/secretary"
  },
  jointSecretary: {
    name: "Joint Secretary Name",
    position: "Technical Affairs Joint Secretary",
    image: "/path-to-joint-secretary-image.jpg",
    email: "joint.secretary@example.com",
    linkedin: "https://linkedin.com/in/joint-secretary"
  },
  coreTeam: [
    {
      name: "Core Member 1",
      position: "Position 1",
      image: "/path-to-core-team-image.jpg",
      email: "member1@example.com",
      linkedin: "https://linkedin.com/in/member1"
    },
    {
      name: "Avula Varshini",
      position: "Tech Development team",
      image: "/path-to-core-team-image.jpg",
      email: "member2@example.com",
      linkedin: "https://linkedin.com/in/member2"
    },
    {
      name: "Core Member 3",
      position: "Position 3",
      image: "/path-to-core-team-image.jpg",
      email: "member3@example.com",
      linkedin: "https://linkedin.com/in/member3"
    },
    {
      name: "Core Member 4",
      position: "Position 4",
      image: "/path-to-core-team-image.jpg",
      email: "member4@example.com",
      linkedin: "https://linkedin.com/in/member4"
    },
    {
      name: "Core Member 5",
      position: "Position 5",
      image: "/path-to-core-team-image.jpg",
      email: "member5@example.com",
      linkedin: "https://linkedin.com/in/member5"
    },
    {
      name: "Core Member 6",
      position: "Position 6",
      image: "/path-to-core-team-image.jpg",
      email: "member6@example.com",
      linkedin: "https://linkedin.com/in/member6"
    },
    {
      name: "Core Member 7",
      position: "Position 7",
      image: "/path-to-core-team-image.jpg",
      email: "member7@example.com",
      linkedin: "https://linkedin.com/in/member7"
    },
    {
      name: "Core Member 8",
      position: "Position 8",
      image: "/path-to-core-team-image.jpg",
      email: "member8@example.com",
      linkedin: "https://linkedin.com/in/member8"
    },
    {
      name: "Core Member 9",
      position: "Position 9",
      image: "/path-to-core-team-image.jpg",
      email: "member9@example.com",
      linkedin: "https://linkedin.com/in/member9"
    },
    {
      name: "Core Member 10",
      position: "Position 10",
      image: "/path-to-core-team-image.jpg",
      email: "member10@example.com",
      linkedin: "https://linkedin.com/in/member10"
    }
  ]
};

const socialMediaLinks = {
  facebook: 'https://facebook.com/technicalaffairs',
  twitter: 'https://twitter.com/technicalaffairs',
  instagram: 'https://instagram.com/technicalaffairs',
  linkedin: 'https://linkedin.com/company/technicalaffairs',
  youtube: 'https://youtube.com/technicalaffairs'
};

function Contact() {
  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    width: '100%',
    minWidth: '140px',
    maxWidth: '140px',
  };

  const imageStyle = {
    height: 160,
    objectFit: 'cover',
    width: '100%',
  };

  const nameStyle = {
    fontSize: {
      xs: '0.7rem',
      sm: '0.8rem',
      md: '0.9rem'
    },
    width: '100%',
    textAlign: 'center',
    wordWrap: 'break-word',
    padding: '0 4px'
  };

  const descriptionStyle = {
    fontSize: {
      xs: '0.6rem',
      sm: '0.7rem',
      md: '0.8rem'
    },
    width: '100%',
    textAlign: 'center',
    wordWrap: 'break-word',
    padding: '0 4px'
  };

  const titleStyle = {
    background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      {/* Secretary Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={titleStyle}
        >
          Technical Affairs Secretary
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', width: '140px' }}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={teamData.secretary.image}
                alt={teamData.secretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={nameStyle}
                >
                  {teamData.secretary.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={descriptionStyle}
                >
                  {teamData.secretary.position}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                  <IconButton 
                    size="small" 
                    href={`mailto:${teamData.secretary.email}`}
                    color="primary"
                  >
                    <Email fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    href={teamData.secretary.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <LinkedIn fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Joint Secretary Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={titleStyle}
        >
          Technical Affairs Joint Secretary
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', width: '140px' }}>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                image={teamData.jointSecretary.image}
                alt={teamData.jointSecretary.name}
                sx={imageStyle}
              />
              <CardContent sx={{ py: 1, px: 1 }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={nameStyle}
                >
                  {teamData.jointSecretary.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={descriptionStyle}
                >
                  {teamData.jointSecretary.position}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                  <IconButton 
                    size="small" 
                    href={`mailto:${teamData.jointSecretary.email}`}
                    color="primary"
                  >
                    <Email fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    href={teamData.jointSecretary.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <LinkedIn fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Core Team Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={titleStyle}
        >
          Core Team
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {teamData.coreTeam.map((member, index) => (
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', width: '140px' }} key={index}>
              <Card sx={cardStyle}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={imageStyle}
                />
                <CardContent sx={{ py: 1, px: 1 }}>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={nameStyle}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={descriptionStyle}
                  >
                    {member.position}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <IconButton 
                      size="small" 
                      href={`mailto:${member.email}`}
                      color="primary"
                    >
                      <Email fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      <LinkedIn fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Media Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={titleStyle}
        >
          Connect With Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton 
            color="primary" 
            href={socialMediaLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTube fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact; 