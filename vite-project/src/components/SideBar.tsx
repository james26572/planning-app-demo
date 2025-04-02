// Sidebar.tsx
import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { MdHome, MdNoteAdd, MdHelpOutline, MdSettings, MdInfo } from 'react-icons/md';
import IrishFlagIcon from '../assets/PlanÉire.png';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: '#ffffff',
        flexShrink: 0,
        padding: 2,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <img src={IrishFlagIcon} alt="Irish Flag Icon" style={{ width: '64px', height: '64px' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#2d5b29' }}>PlanÉire</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        {[
          { text: 'Home', path: '/', icon: <MdHome /> },
          { text: 'Apply', path: '/apply', icon: <MdNoteAdd /> },
          { text: 'Support', path: '/support', icon: <MdHelpOutline /> },
          { text: 'Settings', path: '/settings', icon: <MdSettings /> },
          { text: 'About', path: '/about', icon: <MdInfo /> },
        ].map(({ text, path, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={path} sx={{ borderRadius: '8px', display: 'flex', alignItems: 'center', gap: 1 }}>
              {icon}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
