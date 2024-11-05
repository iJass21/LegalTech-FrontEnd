import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './Chatbot';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import theme from './theme/theme';

import '@fontsource/noto-kufi-arabic';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ pl: { xs: 0, md: 22 }, pr: { xs: 0, md: 22 } }}>
          <Navbar />

          <Routes>
            {/* Define las rutas aquí */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/test-user" element={<Dashboard />} />
            {/* <Route path="/admin" element={<Admin />} />
            <Route path="/clinica-juridica" element={<ClinicaJuridica />} /> */}
            <Route path="/about" element={<div>About Page</div>} /> {/* Ejemplo de una página About */}

          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
