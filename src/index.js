import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styleguide.scss";
import "./style.scss";
import 'simplebar-react/dist/simplebar.min.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2980b9',
    },
    secondary: {
      main: '#E74C3C',
    },
    success: {
      main: '#58D68D',
    },
    menu:{
      main:"#85929E"
    }
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

);


