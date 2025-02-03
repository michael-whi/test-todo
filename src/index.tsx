import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/index.scss';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';

const root = document.getElementById('root') as HTMLElement;

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <ThemeProvider theme={createTheme({cssVariables: true})}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}