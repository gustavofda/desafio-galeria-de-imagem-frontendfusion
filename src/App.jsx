// src/App.jsx
import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import SearchBar from './components/SearchBar';
import { FavoritesProvider } from './context/FavoritesContext';
import { DownloadsProvider } from './context/DownloadsContext';

const App = () => {
  const [filter, setFilter] = useState('all');

  return (
    <FavoritesProvider>
      <DownloadsProvider>
        <header>
          <h1>Galeria de Imagens</h1>
          <nav>
            <a href="/">Inicio</a>
            <a href="/downloads">Downloads</a>
            <a href="/favorites">Favoritos</a>
          </nav>
          <div className="search-container">
            <SearchBar onSearch={(query) => setFilter(query)} />
          </div>
        </header>
        <main className="main-container">
          <ImageGrid filter={filter} />
        </main>
      </DownloadsProvider>
    </FavoritesProvider>
  );
};

export default App;