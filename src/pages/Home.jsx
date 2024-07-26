import React from 'react';
import useFetchImages from '../hooks/useFetchImages';
import ImageGrid from '../components/ImageGrid';

const Home = () => {
  const { images, loading } = useFetchImages();

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Galeria de Imagens</h1>
      <ImageGrid images={images} />
    </div>
  );
};

export default Home;