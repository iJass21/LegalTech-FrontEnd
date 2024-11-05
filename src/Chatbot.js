import React, { useState, useRef, useEffect } from 'react';
import { TextField, Paper, Typography, List, ListItem, ListItemText, Box, IconButton, Radio, RadioGroup, FormControlLabel, FormControl, Divider, Chip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GavelIcon from '@mui/icons-material/Gavel';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [type, setType] = useState('1');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput(''); // Vaciar el input
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input, type: type }),
      });

      const data = await response.json();
      simulateTyping(data.answer);
    } catch (error) {
      console.error('Error:', error);
      const botMessage = { text: 'Lo siento, hubo un error al procesar tu pregunta.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }
  };

  const simulateTyping = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        const currentText = text.substring(0, index + 1);
        const botMessage = { text: currentText, sender: 'bot' };
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages];
          if (newMessages[newMessages.length - 1].sender === 'bot') {
            newMessages[newMessages.length - 1] = botMessage;
          } else {
            newMessages.push(botMessage);
          }
          return newMessages;
        });
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 10); // Ajusta este valor para controlar la velocidad de la escritura
  };

  return (
    <Box sx={{ display: 'flex', height: '94vh', justifyContent: 'center', alignItems: 'center', p: 2 }}>
      <Paper sx={{ padding: 2, maxWidth: 1350, width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', margin: '10px' }}>
        <Typography variant="h5" gutterBottom>
          <Divider color="primary.main">
            <Chip sx={{ p: 3 }} icon={<GavelIcon sx={{ pr: 2 }} />} label="DefensorIA" size="large" color="primary" fontWeight="700" variant="outlined" />
          </Divider>
        </Typography>

        <Box sx={{ display: 'flex', height: '86vh', mt: 1.5 }}>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '40%' }, alignItems: 'center' }}>
            <Typography variant='h4' sx={{ p: 3, backgroundColor: 'secondary.default', borderRadius: 2, mb: 4, textAlign: 'justify' }}>
              ¡Ten una conversación con{' '}

              <Box component="span" sx={{ fontWeight: 'bold' }}>
                DefensorIA
              </Box>
              ! Selecciona un tema de interés para resolver tus dudas legales.
            </Typography>
            <img src="/abogado16.png" alt="imagen" style={{ maxWidth: '20vw', height: '30vh' }} />
            <FormControl component="fieldset" sx={{ alignItems: 'center', mt:2 }}>
              <Typography sx={{ mb: 1, color: "primary.main", fontWeight: 700 }}>Abogado Experto</Typography>
              <RadioGroup
                aria-label="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <FormControlLabel value="1" control={<Radio sx={{ color: 'primary.main'}} />} label="Delincuencia" />
                <FormControlLabel value="2" control={<Radio sx={{ color: 'primary.main' }} />} label="Empresas" />
                <FormControlLabel value="3" control={<Radio sx={{ color: 'primary.main' }} />} label="Familia" />
                <FormControlLabel value="4" control={<Radio sx={{ color: 'primary.main' }} />} label="Trabajo" />
                <FormControlLabel value="5" control={<Radio sx={{ color: 'primary.main' }} />} label="Salud" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />

          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: { xs: '100%', sm: '60%' } }}>
            <List sx={{ flexGrow: 1, overflow: 'auto', height: '50vh' }}>
              {messages.map((msg, index) => (
                <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  <Box
                    sx={{
                      pt: 1,
                      pb: 1,
                      pl: 2.5,
                      pr: 2.5,
                      borderRadius: 2.5,
                      bgcolor: msg.sender === 'user' ? 'primary.main' : 'secondary.main',
                      color: msg.sender === 'user' ? 'white' : 'black',
                      maxWidth: '70%',
                    }}
                  >
                    <ListItemText primary={msg.text} />
                  </Box>
                </ListItem>
              ))}
              {isTyping && (
                <ListItem sx={{ justifyContent: 'flex-start' }}>
                  <Box
                    sx={{
                      pt: 1,
                      pb: 1,
                      pl: 2.5,
                      pr: 2.5,
                      borderRadius: 2.5,
                      color: 'black',
                      maxWidth: '70%',
                    }}
                  >
                    <ListItemText primary="Escribiendo..." />
                  </Box>
                </ListItem>
              )}
              <div ref={messagesEndRef} />
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 2, borderTop: '1px solid #ccc' }}>
              <TextField
                fullWidth
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); // Prevenir el comportamiento por defecto del Enter
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
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Chatbot;
