import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from './components';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);