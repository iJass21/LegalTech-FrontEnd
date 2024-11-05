import React, { useRef } from 'react';
import { Box, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatMessages({ messages, input, setInput, sendMessage }) {
    const messagesEndRef = useRef(null);

    return (
        <Box
            sx={{
                borderRadius: 2,
                p: 2,
                maxWidth: { xs: '100%', md: '60%' },
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: { xs: '65vh', md: '70vh' },
                border: '4px solid #4e73ca',
                boxShadow: '1px 1px 30px 5px rgba(78, 115, 202, 1)',
                mt: { xs: 2, md: 0 },
            }}
        >
            <List sx={{ flexGrow: 1, overflow: 'auto' }}>
                {messages.map((msg, index) => (
                    <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <Box
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                bgcolor: msg.sender === 'user' ? 'primary.main' : 'secondary.main',
                                color: 'white',
                                maxWidth: { xs: '100%', md: '70%' },
                            }}
                        >
                            <ListItemText primary={msg.text} />
                        </Box>
                    </ListItem>
                ))}
                <div ref={messagesEndRef} />
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center', borderTop: '2px solid #4e73ca', pt: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton color="primary" onClick={sendMessage}>
                                <SendIcon />
                            </IconButton>
                        ),
                    }}
                    sx={{
                        input: {
                            color: 'white',
                        },
                    }}
                    focused
                />
            </Box>
        </Box>
    );
}

export default ChatMessages;
