import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useDownloads } from '../context/DownloadsContext';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const ImageCard = ({ image }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { downloads, addDownload } = useDownloads();

  const isFavorite = favorites.some((fav) => fav.id === image.id);
  const isDownloaded = downloads.some((download) => download.id === image.id);

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(image.id);
    } else {
      addFavorite(image);
    }
  };

  const handleDownloadToggle = (e) => {
    e.preventDefault();
    if (!isDownloaded) {
      const link = document.createElement('a');
      link.href = image.download_url;
      link.download = `image-${image.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      addDownload(image);
    }
  };

  return (
    <div className="relative image-card">
      <img src={image.download_url} alt={image.author} className="w-full h-auto rounded" />
      <div className="absolute top-0 right-0 p-2 flex gap-2">
        <IconButton onClick={handleFavoriteToggle} color={isFavorite ? 'secondary' : 'default'}>
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={handleDownloadToggle}>
          <DownloadIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageCard;