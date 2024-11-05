import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#1A1A2E', color: '#FFFF' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography color="inherit" variant='h6' component={NavLink} sx={{
            textDecoration: 'none', // Elimina el subrayado
        fontWeight: 700}} to="/">LegalTech</Typography>
                </Box>

                {/* <Typography variant="h6" sx={{ flexGrow: 1, fontWeight:700 }}>
                    LegalTech
                </Typography> */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={NavLink} to="/login">Ingresar</Button>
                    <Button color="primary" variant='contained' component={NavLink} to="/register">Registrarse</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
