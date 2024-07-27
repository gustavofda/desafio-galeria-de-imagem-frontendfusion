import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (image) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === image.id)) {
        return [...prevFavorites, image];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);



