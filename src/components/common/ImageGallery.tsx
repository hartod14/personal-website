"use client"

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

interface ImageGalleryProps {
  images: string[];
  title: string;
  initialIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, initialIndex = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openZoom = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  if (!images || images.length === 0) {
    return null; // Or a placeholder if no images are provided
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
      <Image
        src={images[currentIndex]}
        alt={`${title} Image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={openZoom}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 z-10"
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 z-10"
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          </button>
        </>
      )}

      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeZoom} // Close on overlay click
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking on the image itself */}
            <Image
              src={images[currentIndex]}
              alt={`${title} Zoomed Image`}
              width={1200} // Adjust as needed for desired zoom size
              height={800} // Adjust as needed
              objectFit="contain"
              className="max-w-full max-h-[90vh]"
            />
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200"
              aria-label="Close zoom"
            >
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 