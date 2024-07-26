import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FavoritesProvider } from './context/FavoritesContext';
import { DownloadsProvider } from './context/DownloadsContext';

ReactDOM.render(
  <React.StrictMode>
    <FavoritesProvider>
      <DownloadsProvider> 
        <App />
      </DownloadsProvider>
    </FavoritesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
