import React, { useState, useEffect, useCallback } from 'react';
import CloseIcon from './icons/CloseIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface LightboxProps {
  images: { src: string; label: string; }[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, goToPrevious, goToNext]);

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 animate-fade-in" 
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery"
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {/* Previous Button */}
        <button 
            onClick={goToPrevious} 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-red-600 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 transition-all z-10 m-2"
            aria-label="Previous image"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </button>

        {/* Image Display */}
        <div className="relative max-w-screen-lg max-h-[90vh] flex flex-col items-center justify-center">
          <img src={images[currentIndex].src} alt={`${images[currentIndex].label} for project, image ${currentIndex + 1}`} className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"/>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-1 rounded-full text-center">
            <p className="text-md font-semibold">{images[currentIndex].label}</p>
          </div>
        </div>

        {/* Next Button */}
        <button 
            onClick={goToNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-red-600 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 transition-all z-10 m-2"
            aria-label="Next image"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>

        {/* Close Button */}
        <button 
            onClick={onClose} 
            className="absolute top-0 right-0 text-white bg-red-600 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 transition-all m-4"
            aria-label="Close gallery"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;