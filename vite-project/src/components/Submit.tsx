import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SubmitComponent = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',width:'100vw', bgcolor: '#eef7e5' }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#2d5b29' }}>
        Thank You for Your Application!
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
        Your application has been successfully submitted. You will hear back from us shortly.
      </Typography>
      <Button variant="contained" sx={{ bgcolor: '#4caf50', color: '#fff', borderRadius: '16px' }} onClick={handleHomeRedirect}>
        Return to Home
      </Button>
    </Box>
  );
};

export default SubmitComponent;
