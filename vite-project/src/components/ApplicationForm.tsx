import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, MenuItem,  Snackbar } from '@mui/material';

import Sidebar from './SideBar';
import RightSideBar from './RightSideBar';
import { useFormContext } from '../FormContext';


import { useNavigate } from 'react-router-dom';



const ApplicationForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    ['title', 'firstName', 'lastName', 'applicationType', 'houseNo', 'street', 'city', 'county', 'eircode'].forEach((field) => {
      if (!formData[field]) tempErrors[field] = `${field} is required`;
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate('/property-description'); 
    }
    
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh',width:'100vw', bgcolor: '#eef7e5' }}>
      <Sidebar />
     <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
           <Box sx={{ width: '100%', padding: 3 }}>
     
             
             <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
             <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2d5b29', mb: 3 }}>Apply</Typography>
               <Box sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Applicant's Details</Typography>
              <Grid container spacing={2}>
                {['title', 'firstName', 'lastName'].map((field, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <TextField  fullWidth name={field} placeholder={field} value={formData[field]} onChange={handleChange} error={!!errors[field]} helperText={errors[field]} sx={{ bgcolor: 'white', borderRadius: '8px' }} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Type of Application</Typography>
            <TextField
                select
                fullWidth
                name="applicationType"
                label="Select Application Type"
                value={formData.applicationType || ''}
                onChange={handleChange}
                error={!!errors.applicationType}
                helperText={errors.applicationType}
                sx={{ bgcolor: 'white', borderRadius: '8px' }}
                >
                {['Permission', 'Retention Permission', 'Outline Permission', 'Permission on foot of Outline Permission'].map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
                </TextField>

            </Box>
            <Box sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Postal Address</Typography>
              <Grid container spacing={2}>
                {['houseNo', 'street', 'city', 'county', 'eircode'].map((field, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <TextField fullWidth name={field} placeholder={field} value={formData[field]} onChange={handleChange} error={!!errors[field]} helperText={errors[field]} sx={{ bgcolor: 'white', borderRadius: '8px' }} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: '#4caf50', color: '#fff', borderRadius: '16px' }} onClick={handleSubmit}>Continue</Button>
          </Box>
         
        </Box>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} message="Application submitted successfully!" />
      <RightSideBar/>
    </Box>
  );
};

export default ApplicationForm;