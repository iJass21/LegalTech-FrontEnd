import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ChatIcon from '@mui/icons-material/Chat';
import LanguageIcon from '@mui/icons-material/Language';
import SpeedIcon from '@mui/icons-material/Speed';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#0e1a2b', color: '#fff', p: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <CodeIcon fontSize="large" sx={{ color: '#fff' }} />
                            <Typography variant="h6" sx={{ mt: 1, color: '#fff' }}>
                                Embed anywhere
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                Paste our iframe code anywhere on any site to stream your custom AI-powered bot wherever you'd like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <ChatIcon fontSize="large" sx={{ color: '#fff' }} />
                            <Typography variant="h6" sx={{ mt: 1, color: '#fff' }}>
                                Chatbot
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                Stop responding to the same questions over and over. Place our AI chatbot on your website for automated responses.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <LanguageIcon fontSize="large" sx={{ color: '#fff' }} />
                            <Typography variant="h6" sx={{ mt: 1, color: '#fff' }}>
                                Dedicated webpage
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                Share your chatbot with anyone using a simple URL.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <SpeedIcon fontSize="large" sx={{ color: '#fff' }} />
                            <Typography variant="h6" sx={{ mt: 1, color: '#fff' }}>
                                Hyperspeed iteration
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                Add, remove, and update data sources in real time for optimal performance.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <LockIcon fontSize="large" sx={{ color: '#fff' }} />
                            <Typography variant="h6" sx={{ mt: 1, color: '#fff' }}>
                                Public or private
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                Keep your bot private or share it with the world. Manage your settings to suit your needs.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <StorageIcon fontSize="large" sx={{ color: '#fff' }} />
                            <Typography variant="h6" sx={{ mt: 1, color: '#fff' }}>
                                Multiple data sources
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                Train your AI on docs, PDFs, and more. Manage all your sources in one place.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
