export const achievements = [
  {
    id: 1,
    title: 'First Place in Robotics Competition held in Mumbai, Maharashtra',
    description: 'Won first place in the regional robotics competition',
    year: '2024',
    club: 'Robotics Club',
    logo: '/clubs/robotics/logo.png',
  },
  {
    id: 2,
    title: 'Best Project Award',
    description: 'Received best project award for innovative web application',
    year: '2024',
    club: 'Coding Club',
    logo: '/images/coding-club-logo.png',
  },
  {
    id: 3,
    title: 'National Championship',
    description: 'Won the national championship in Mars Rover competition',
    year: '2023',
    club: 'Mars Club',
    logo: '/clubs/mars/logo.png',
  },
];

// Helper function to get achievements by club
export const getAchievementsByClub = (club) => {
  if (club === 'all') return achievements;
  return achievements.filter(achievement => achievement.club === club);
};

// Helper function to get achievements by year
export const getAchievementsByYear = (year) => {
  if (year === 'all') return achievements;
  return achievements.filter(achievement => achievement.year === year);
};

// Helper function to get unique years
export const getUniqueYears = () => {
  const years = new Set(achievements.map(a => a.year));
  return Array.from(years).sort((a, b) => b - a);
};

// Helper function to get unique clubs
export const getUniqueClubs = () => {
  const clubs = new Set(achievements.map(a => a.club));
  return Array.from(clubs).sort();
}; 