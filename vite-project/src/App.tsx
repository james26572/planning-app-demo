import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationForm from './components/ApplicationForm';
import PropertyDescription from './components/PropertyDescription';
import Support from './components/Support'
import Sidebar from './components/SideBar';
import { Box, Typography } from '@mui/material';
import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LegalInterest,
  DevelopmentDetails,
  DrawingsSection,
  ConfirmationSection,} from './components/RemainingComponents';
import SubmitComponent from './components/Submit';



// Mock planning permission data
const planningData = [
  { id: 1, name: 'John Doe', type: 'New Build', status: 'Pending', coords: [53.3498, -6.2603] },
  { id: 2, name: 'Acme Ltd.', type: 'Commercial Expansion', status: 'Approved', coords: [53.345, -6.267] },
  { id: 3, name: 'Jane Smith', type: 'Extension', status: 'Rejected', coords: [53.355, -6.251] },
  { id: 4, name: 'GreenEnergy Co.', type: 'Solar Farm', status: 'Pending', coords: [53.341, -6.274] },
];

const SetViewOnLoad = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  map.setView(coords, 12);
  return null;
};
const Home: React.FC = () => (
  <Box sx={{ display: 'flex', height: '100vh' }}>
    <Sidebar />
    <Box sx={{ flexGrow: 1, height: '100vh', width: 'calc(100vw - 250px)', display: 'flex', flexDirection: 'column', bgcolor: '#f0f4f8', p: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', color: '#2d5b29', bgcolor: '#eaf4e0', p: 2, borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        View Planning Applications
      </Typography>
      <Box sx={{ flexGrow: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <MapContainer style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SetViewOnLoad coords={[53.3498, -6.2603]} />
          {planningData.map((item) => (
            <Marker key={item.id} position={item.coords}>
              <Popup>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                <Typography variant="body2">Type: {item.type}</Typography>
                <Typography variant="body2">Status: {item.status}</Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  </Box>
);




const Settings: React.FC = () => (
  <Box sx={{ display: 'flex', height: '100vh' }}>
    <Sidebar />
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4">Settings</Typography>
      <Typography>Here you can adjust your preferences and account settings.</Typography>
    </Box>
  </Box>
);

const About: React.FC = () => (
  <Box sx={{ display: 'flex', height: '100vh' }}>
    <Sidebar />
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4">About</Typography>
      <Typography>Information about the PlanÉire application.</Typography>
    </Box>
  </Box>
);

const App: React.FC = () => (
 
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/support" element={<Support />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply" element={<ApplicationForm/>} />
      <Route path="/property-description" element={<PropertyDescription />} />
      <Route path="/legal-interest" element={<LegalInterest/>}/>      
      <Route path="/development-details" element={<DevelopmentDetails/>}/>
      <Route path="/drawings" element={<DrawingsSection/>}/>
      <Route path="/confirmation" element={<ConfirmationSection />} />  
      <Route path="/submit"  element={<SubmitComponent/>}/>
    </Routes>
  </Router>

);

export default App;
