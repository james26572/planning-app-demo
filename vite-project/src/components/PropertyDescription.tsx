import React from 'react';
import { Box, Typography, TextField, Button, Grid,  } from '@mui/material';
import Sidebar from './SideBar';
import { useNavigate } from 'react-router-dom';
import RightSideBar from './RightSideBar';
import { useFormContext } from '../FormContext';

const PropertyDescription: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/legal-interest');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh',width:'100vw', bgcolor: '#eef7e5' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', padding: 3 }}>

        
        <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2d5b29', mb: 3 }}>Property Description</Typography>
          <Box sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Nature of Property</Typography>
            <TextField fullWidth multiline rows={4} name="natureOfProperty" placeholder="Describe the nature of the property" value={formData.natureOfProperty} onChange={handleChange} sx={{ bgcolor: 'white', borderRadius: '8px' }} />
          </Box>

          <Box sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Number of Buildings</Typography>
            <TextField fullWidth type="number" name="numberOfBuildings" placeholder="Number of Buildings" value={formData.numberOfBuildings} onChange={handleChange} sx={{ bgcolor: 'white', borderRadius: '8px' }} />
          </Box>

          <Box sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Building Height</Typography>
            <TextField fullWidth type="number" name="buildingHeight" placeholder="Building Height (m)" value={formData.buildingHeight} onChange={handleChange} sx={{ bgcolor: 'white', borderRadius: '8px' }} />
          </Box>

          <Box sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Protected Structures</Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant={formData.protectedStructures === 'yes' ? 'contained' : 'outlined'} onClick={() => updateFormData({ ...formData, protectedStructures: 'yes' })}>Yes</Button>
              </Grid>
              <Grid item>
                <Button variant={formData.protectedStructures === 'no' ? 'contained' : 'outlined'} onClick={() => updateFormData({ ...formData, protectedStructures: 'no' })}>No</Button>
              </Grid>
            </Grid>
          </Box>

          <Button variant="contained" fullWidth sx={{ bgcolor: '#4caf50', color: '#fff', borderRadius: '24x' }} onClick={handleSubmit}>Continue</Button>
        </Box>
       
        </Box>
        
      </Box>
      <RightSideBar/>
    </Box>
  );
};

export default PropertyDescription;
