import React from 'react';

function GalleryImages() {
  const images = [
    {
      title: 'Title 1',
      src: 'img.jpg',
      alt: 'rug1',
      description: 'Description for rug 1',
      price: '$100',
    },
    {
      title: 'Title 2',
      src: 'img2.jpg',
      alt: 'rug2',
      description: 'Description for rug 2',
      price: '$100',
    },
    {
      title: 'Title 3',
      src: 'img3.jpg',
      alt: 'rug3',
      description: 'Description for rug 3',
      price: '$100',
    },
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
          <p>{image.price}</p>
        </div>
      ))}
    </div>
  );
}

export default GalleryImages;
