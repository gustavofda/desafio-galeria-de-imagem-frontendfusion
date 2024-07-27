import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import axios from 'axios';

const ImageGrid = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        // A API Picsum não suporta busca por termos, então isso será removido
        const response = await axios.get('https://picsum.photos/v2/list');
        setImages(response.data); // Ajusta a estrutura conforme a resposta da API
      } catch (error) {
        setError('Erro ao buscar imagens.');
        console.error('Erro ao buscar imagens:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="image-grid">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;



