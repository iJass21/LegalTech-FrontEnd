import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ExpertForm from './ExpertForm';

function HeaderSection({ type, setType }) {
    return (
        <Box
            sx={{
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' },
                pr: { xs: 3, md: 10 },
                pl: { xs: 3, md: 0 },
            }}
        >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                Bienvenido a LEGALTECH
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mb: 2, mt: 2 }}>
                Únete a Nosotros!
            </Button>
            <ExpertForm type={type} setType={setType} />
        </Box>
    );
}

export default HeaderSection;
