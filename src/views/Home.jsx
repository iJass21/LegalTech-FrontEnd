import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeaderSection from '../components/HeaderSection';
import ExpertForm from '../components/ExpertForm';
import ChatMessages from '../components/ChatMessages';

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [type, setType] = useState('1');
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { text: input, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');

        try {
            const response = await fetch('http://localhost:5000/api/question', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input, type }),
            });
            const data = await response.json();
            simulateTyping(data.answer);
        } catch (error) {
            console.error('Error:', error);
            const botMessage = { text: 'Lo siento, hubo un error al procesar tu pregunta.', sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
    };

    const simulateTyping = (text) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                const botMessage = { text: text.substring(0, index + 1), sender: 'bot' };
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
            }
        }, 10);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                height: 'auto',
                gap: 2,
                px: 2,
                mt: 10,
                mb: 10,
            }}
        >
            <HeaderSection type={type} setType={setType} />
                
            <ChatMessages messages={messages} input={input} setInput={setInput} sendMessage={sendMessage} />
        </Box>
    );
}

export default ChatWindow;
