import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Sidebar from './SideBar';
import RightSideBar from './RightSideBar';
import { useFormContext } from '../FormContext';
import { useNavigate } from 'react-router-dom';

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface SectionProps {
  title: string;
  fields: Field[];
  nextPath: string;
}

const SectionComponent: React.FC<SectionProps> = ({ title, fields, nextPath }) => {
  const { formData, updateFormData } = useFormContext();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') {
      updateFormData({ [e.target.name]: e.target.files ? e.target.files[0] : null });
    } else if (e.target.type === 'checkbox') {
      updateFormData({ [e.target.name]: e.target.checked });
    } else {
      updateFormData({ [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(nextPath);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', bgcolor: '#eef7e5' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2d5b29', mb: 3 }}>
            {title}
          </Typography>
          {fields.map((field) => (
            <Box key={field.name} sx={{ mb: 3, bgcolor: '#eaf4e0', padding: 3, borderRadius: '24px', boxShadow: 1 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {field.label}
              </Typography>
              {field.type === 'file' ? (
                <input type="file" name={field.name} onChange={handleChange} />
              ) : field.type === 'checkbox' ? (
                <label>
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={formData[field.name] || false}
                    onChange={handleChange}
                  />
                  {field.label}
                </label>
              ) : (
                <TextField
                  fullWidth
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  sx={{ bgcolor: 'white', borderRadius: '8px' }}
                />
              )}
            </Box>
          ))}
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: '#4caf50', color: '#fff', borderRadius: '16px' }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Box>
      </Box>
      <RightSideBar />
    </Box>
  );
};

export default SectionComponent;
