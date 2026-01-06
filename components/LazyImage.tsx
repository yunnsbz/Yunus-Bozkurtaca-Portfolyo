
import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, containerClassName = "", onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Kaynak değiştiğinde (src) durumları sıfırla
    setIsLoaded(false);
    setError(false);

    const img = new Image();
    img.src = src;
    
    // Eğer görsel zaten tarayıcı önbelleğindeyse hemen göster
    if (img.complete) {
      setIsLoaded(true);
    } else {
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton / Placeholder - Sadece görsel henüz hazır değilse göster */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200/20 animate-pulse flex items-center justify-center backdrop-blur-sm">
          <div className="w-12 h-12 text-white/10">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white/30 text-xs italic">
          Failed To Load Image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onClick={onClick}
          className={`transition-opacity duration-300 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
    </div>
  );
};

export default LazyImage;
