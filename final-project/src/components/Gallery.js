import React from 'react';
import GalleryProduct from './GalleryProduct';

function Gallery () {


    
    return (
        <div className="responsive">
          <div className="gallery">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <a target="_blank" href={image.src}>
                  <img src={image.src} alt={image.alt} />
                </a>
                <div className="desc">
                  {image.description}
                  <br />
                  Price: {image.price}
                  <br />
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }


export default Gallery