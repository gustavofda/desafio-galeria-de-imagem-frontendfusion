import React from 'react';

const ImageDetailModal = ({ image, onClose }) => (
  <div className="image-detail-modal">
    <div className="modal-content">
      <button onClick={onClose} className="close">×</button>
      <img src={image.download_url} alt={image.author} className="w-full h-96 object-cover rounded" />
      <p className="mt-2"><strong>Author:</strong> {image.author}</p>
      <p><strong>Dimensions:</strong> {image.width} x {image.height}</p>
    </div>
  </div>
);

export default ImageDetailModal;
