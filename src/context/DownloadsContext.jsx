import React, { createContext, useContext, useState } from 'react';

const DownloadsContext = createContext();

export const useDownloads = () => {
  const context = useContext(DownloadsContext);
  if (!context) {
    throw new Error('useDownloads must be used within a DownloadsProvider');
  }
  return context;
};

export const DownloadsProvider = ({ children }) => {
  const [downloads, setDownloads] = useState([]);

  const addDownload = (image) => {
    setDownloads((prev) => [...prev, image]);
  };

  const removeDownload = (id) => {
    setDownloads((prev) => prev.filter((download) => download.id !== id));
  };

  return (
    <DownloadsContext.Provider value={{ downloads, addDownload, removeDownload }}>
      {children}
    </DownloadsContext.Provider>
  );
};
