import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { MdSearch, MdHome, MdSettings, MdHelpOutline, MdInfo, MdNoteAdd } from 'react-icons/md';
import IrishFlagIcon from './assets/irish-flag-icon.png';


const ApplicationFormWithExactStyle: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#eef7e5' }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: 250,
          bgcolor: '#ffffff',
          flexShrink: 0,
          padding: 2,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Irish Flag Icon and Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <img
          src={IrishFlagIcon} // Replace with your file path
          alt="Irish Flag Icon"
          style={{ width: '64px', height: '64px' }} // Adjust size as needed
        />
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#2d5b29' }}
        >
          
          PlanÉire
        </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <List>
          {[
            { text: 'Home', icon: <MdHome style={{ fontSize: '1.5rem', color: '#4caf50' }} /> },
            { text: 'Apply', icon: <MdNoteAdd style={{ fontSize: '1.5rem', color: '#4caf50' }} /> },
            { text: 'Support', icon: <MdHelpOutline style={{ fontSize: '1.5rem', color: '#4caf50' }} /> },
            { text: 'Settings', icon: <MdSettings style={{ fontSize: '1.5rem', color: '#4caf50' }} /> },
            { text: 'About', icon: <MdInfo style={{ fontSize: '1.5rem', color: '#4caf50' }} /> },
          ].map(({ text, icon }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                {icon}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Seamless Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
            bgcolor: 'inherit',
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#2d5b29' }}
          >
            Apply
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: 'white',
              borderRadius: '24px',
            }}
          >
            <MdSearch style={{ fontSize: '24px', color: '#4caf50' }} />
            <TextField
              variant="standard"
              placeholder="Search PlanÉire"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                flexGrow: 1,
                bgcolor: 'white',
                borderRadius: '24px',
              }}
            />
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body1" sx={{ fontSize: '1rem', color: '#2d5b29' }}>
              John Smith
            </Typography>
            <Button
              variant="text"
              sx={{
                color: '#4caf50',
                textTransform: 'none',
              }}
            >
              MyGov
            </Button>
          </Box>
        </Box>

        {/* Content Layout */}
        <Box sx={{ display: 'flex', flexGrow: 1, gap: 3, padding: 3 }}>
          {/* Main Content */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Applicant's Details Section */}
            <Box
              sx={{
                bgcolor: '#eaf4e0',
                padding: 3,
                borderRadius: '24px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', fontSize: '1.2rem', mb: 2 }}
              >
                Applicant's Details
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#2d5b29' }}>
                You cannot edit this field. If this is not you, please{' '}
                <span
                  style={{
                    color: '#4caf50',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  sign out
                </span>
                . This must be your legal name and address, not an agent.
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Mr.',
                  'John',
                  'Smith',
                  '1 Patrick Street',
                  'Ballymore',
                  'Co. Tipperary',
                  'X12 AB34',
                ].map((value, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={value}
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        bgcolor: 'rgba(76, 175, 80, 0.2)',
                        borderRadius: '12px',
                        input: {
                          color: '#ffffff',
                          fontWeight: 'normal',
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Type of Application Section */}
            <Box
              sx={{
                bgcolor: '#eaf4e0',
                padding: 3,
                borderRadius: '24px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', fontSize: '1.2rem', mb: 2 }}
              >
                Type of Application
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {[
                  'Permission',
                  'Retention Permission',
                  'Outline Permission',
                  'Permission on foot of Outline Permission',
                ].map((type, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    sx={{
                      color: '#4caf50',
                      borderColor: '#4caf50',
                      borderRadius: '12px',
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#ffffff',
                      },
                    }}
                  >
                    {type}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Postal Address Section */}
            <Box
              sx={{
                bgcolor: '#eaf4e0',
                padding: 3,
                borderRadius: '24px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', fontSize: '1.2rem', mb: 2 }}
              >
                Postal Address
              </Typography>
              <Grid container spacing={2}>
                {[
                  'House No. (Optional)',
                  'Street',
                  'City',
                  'County',
                  'Eircode',
                ].map((placeholder, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder={placeholder}
                      sx={{
                        bgcolor: 'rgba(76, 175, 80, 0.2)',
                        borderRadius: '12px',
                        input: {
                          color: '#2d5b29',
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#4caf50',
                color: '#ffffff',
                py: 2,
                fontSize: '1rem',
                borderRadius: '16px',
                textTransform: 'none',
              }}
            >
              Continue
            </Button>
          </Box>

          {/* Right Sidebar */}
          <Box
            sx={{
              width: 400,
              bgcolor: '#eaf4e0',
              borderRadius: '24px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              Application Details
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List sx={{ padding: 0 }}>
              {[
                'Property Description',
                'Legal Interest',
                'Existing Buildings on Site',
                'Purpose of Property',
                'Fees',
                'Previous Applications',
                'Development Details',
                'Site History',
                'Statutory Notices',
                'Pre-Planning Consultation',
                'Local Council Considerations',
                'Water and Drainage',
                'Drawings',
                'Contact Details',
                'Confirmation',
              ].map((text, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    padding: 0,
                  }}
                >
                  <ListItemButton
                    sx={{
                      padding: '4px 8px',
                      '&:hover': {
                        backgroundColor: '#d9f2d9',
                      },
                      borderRadius: '8px',
                    }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: '0.75rem',
                        lineHeight: 1.2,
                      }}
                      primary={text}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationFormWithExactStyle;
