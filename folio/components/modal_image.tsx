import React, { useState } from 'react';
import "../styles/global.css";

interface ImageModalProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  width,
  height,
  className = ''
}) => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="image-modal">
      <div className={`subcontainer-image ${className}`} onClick={toggleImage}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="subcontainer-image"
        />
      </div>

      {showImage && (
        <div className="modal-overlay" onClick={toggleImage}>
          <div className="modal-content">
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="subcontainer-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
