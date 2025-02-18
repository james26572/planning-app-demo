import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidebar from './SideBar';

const Support: React.FC = () => (
  <Box sx={{ display: 'flex', height: '100vh',width:'100vw', bgcolor: '#e8f5e9' }}>
    <Sidebar />
    <Box sx={{ flexGrow: 1, p: 4, bgcolor: '#f1f8e9', borderRadius: '16px', boxShadow: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, color: '#2e7d32', fontWeight: 'bold' }}>Support</Typography>
      {faqData.map((item, index) => (
        <Accordion key={index} sx={{ mb: 2, bgcolor: '#a5d6a7' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: '#81c784', color: '#1b5e20', fontWeight: 'bold' }}>
            {item.question}
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: '#c8e6c9' }}>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Box>
);

const faqData = [
  { question: 'How do I submit my application?', answer: 'You can submit your application after filling all sections and clicking Submit on the Confirmation page.' },
  { question: 'What file formats are accepted for uploads?', answer: 'We accept PDF, PNG, and JPEG formats for drawings and documents.' },
  { question: 'Can I edit my application after submission?', answer: 'No, once submitted, you cannot edit your application. Contact support for assistance.' },
  { question: 'How long does the review process take?', answer: 'The review process typically takes 4-6 weeks, depending on the complexity.' },
  { question: 'Who can I contact for further support?', answer: 'You can reach our support team at support@planeire.ie or call +353-123-4567.' },
];

export default Support;
