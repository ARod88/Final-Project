import React, { useEffect, useState } from 'react';
import GalleryImages from './galleryImages';

function Gallery () {
  const [rugs, setRugs] = useState([]);

    useEffect(() => {
    fetch('/api/rugs')
    .then((response) => response.json())
    // .then((datat) => setRugs(data.rugs))
    .catch((error) => console.error('Error fetching data:', error));
  }, []);
    return (
        <div className="responsive">
          <div className="gallery">
            <GalleryImages  />
       
        </div>
         </div>
      );
    }


export default Gallery