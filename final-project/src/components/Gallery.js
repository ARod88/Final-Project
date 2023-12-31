import React, { useState, useEffect } from "react";
import './Gallery.css';

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your Express API
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='gallery  style={{ backgroundImage: `url(${blackandwhite})`}}'>
      {products.map((product) => (
        <div key={product._id} className='product-card'>
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Gallery.css'




// const Gallery = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from your Express API
//     app.get("http://localhost:5000/api/products").then((response) => {
//       setProducts(response.data);
//     });
//   }, []);

//   return (
//     <div className='gallery'>
//       {products.map((product) => (
//         <div key={product._id} className='product-card'>
//           <img src={product.imageUrl} alt={product.name} />
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;
