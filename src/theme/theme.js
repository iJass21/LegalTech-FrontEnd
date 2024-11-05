import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5283f7',// Color principal //4e73ca
        },
        secondary: {
            main: '#aa7de3', //8775c8
            default: '#dae1e1'
        },
    },
    typography: { 
        fontFamily: 'Noto Kufi Arabic, Arial, sans-serif', // Fuente por defecto
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#1A1A2E', 
                    color: '#FFFF'
                },
            },
        },
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: '#5dc865', // Color de fondo del botón por defecto
        //             color: '#f7fafb', // Color del texto
        //             // No sobrescribas el comportamiento de hover para que Material UI aplique el estilo por defecto
        //         },
        //     },
        // },
    },
});

export default theme;
