import React from 'react';
import ReactDOM from 'react-dom/client';
import MainComponent from './components/MainComponent';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);
