import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchImages = (query = '') => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=1&limit=100`);
        setImages(response.data.filter(image => image.author.toLowerCase().includes(query.toLowerCase())));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  return { images, loading, error };
};

export default useFetchImages;