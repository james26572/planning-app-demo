import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { useFormContext } from '../FormContext';  // Adjust the path as necessary

const ConfirmationPage: React.FC = () => {
  const { formData } = useFormContext();

  return (
    <Box sx={{ padding: 3, maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>Confirmation</Typography>
      <Divider sx={{ mb: 3 }} />

      {Object.entries(formData).map(([key, value]) => (
  <Box key={key} sx={{ mb: 2 }}>
    <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>{key}</Typography>
    <Typography>{String(value)}</Typography>  {/* Ensure value is displayed as string */}
    <Divider sx={{ mt: 1 }} />
  </Box>
))}


      <Button variant="contained" sx={{ mt: 4, bgcolor: '#4caf50' }}>Submit Application</Button>
    </Box>
  );
};

export default ConfirmationPage;
