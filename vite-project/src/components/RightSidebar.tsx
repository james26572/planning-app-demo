import React from 'react';
import { Box,  List, ListItem, ListItemButton, ListItemText,  } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const sections = [
  { label: 'Application Details', path: '/apply' },
  { label: 'Property Description', path: '/property-description' },
  { label: 'Legal Interest', path: '/legal-interest' },
  { label: 'Development Details', path: '/development-details' },
  { label: 'Drawings', path: '/drawings' },
  { label: 'Confirmation', path: '/confirmation' },
];

const RightSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 400, bgcolor: '#eaf4e0', borderRadius: '24px', boxShadow: 1, padding: 2 }}>
      
      <List>
        {sections.map((section, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => navigate(section.path)}
              sx={{
                padding: '8px 12px',
                borderRadius: '8px',
                bgcolor: location.pathname === section.path ? '#d9f2d9' : 'transparent',
                '&:hover': { backgroundColor: '#c8e6c9' },
              }}
            >
              <ListItemText primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: location.pathname === section.path ? 'bold' : 'normal' }} primary={section.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RightSidebar;
