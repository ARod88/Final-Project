import React from "react";

function GalleryProduct ({ src, alt, title, price, description }){
    return(
        <div className="gallery-pro">
            <a target="_blank" href={src}>
                <img src={src} alt={alt} />
            </a>

            <div className="info">
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default GalleryProduct;