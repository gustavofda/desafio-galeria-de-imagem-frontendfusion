// src/pages/FavoritesPage.jsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import ImageCard from '../components/ImageCard';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="main-container">
      <h2>Favoritos</h2>
      <div className="image-grid">
        {favorites.length > 0 ? (
          favorites.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))
        ) : (
          <p>Você ainda não tem favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;