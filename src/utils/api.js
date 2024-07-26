// Função para buscar imagens da API
export const fetchImages = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list');
      if (!response.ok) {
        throw new Error('Erro ao buscar imagens');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      return [];
    }
  };
  