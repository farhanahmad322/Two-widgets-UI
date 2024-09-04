import { useState, useRef } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { id: 1, src: 'image4.jpg' },
    { id: 2, src: 'image4.jpg' },
    { id: 3, src: 'image4.jpg' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastAddedId, setLastAddedId] = useState(null);
  const [galleryEffect, setGalleryEffect] = useState(false);

  
  const imageRefs = useRef([]);

  const addImage = () => {
    const newImage = {
      id: images.length + 1,
      src: 'image5.jpg', 
    };

    setImages([...images, newImage]);
    setLastAddedId(newImage.id);
    setGalleryEffect(true);

    setTimeout(() => {
      setLastAddedId(null);
      setGalleryEffect(false);
    }, 1000);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      
      imageRefs.current[newIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      
      imageRefs.current[newIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  return (
    <div
      className={`bg-gray-800 p-4 rounded-lg shadow-3xl text-white transition-all duration-500 ${
        galleryEffect ? 'ring-4 ring-yellow-500' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <button className="bg-black py-2 px-4 rounded shadow-2xl">Gallery</button>
        <div className="flex items-center space-x-2">
          <button
            className="bg-black py-2 px-4 rounded shadow-2xl hover:bg-gray-700"
            onClick={addImage}
          >
            + ADD IMAGE
          </button>
          <button
            className="bg-black py-2 px-3 rounded shadow-2xl transition-transform duration-300 hover:bg-gray-700"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>
          <button
            className="bg-black py-2 px-3 rounded shadow-2xl transition-transform duration-300 hover:bg-gray-700"
            onClick={handleNext}
            disabled={currentIndex >= images.length - 3}
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-hidden transition-all duration-500 ease-in-out">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div
            key={image.id}
            ref={(el) => (imageRefs.current[index + currentIndex] = el)} 
            className={`bg-gray-700 rounded h-32 transform transition-transform duration-500 hover:scale-105 ${
              image.id === lastAddedId ? 'animate-pulse' : ''
            }`}
          >
            <img
              src={image.src}
              alt={`Gallery ${image.id}`}
              className="w-full h-full object-cover rounded hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
