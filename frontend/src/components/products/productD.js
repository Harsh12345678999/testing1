import React from 'react';
import "./productDetials.css"

const ProductD = ({ productDetails }) => {


  if (!productDetails) {
    return <p>No product details available</p>;
  }

  const { name, price, description, category, ratings } = productDetails;


  return (
    <>
      <div className="product-item">
        <h2  className="product-name">Name : {name}</h2>
        <p className="product-price">Price: ₹ {price}</p>
        <p className="product-description">Description: {description}</p>
        <p className="product-category">Category: {category}</p>
        <p>Ratings: {ratings}</p>
      </div>
    </>

  );
};

export default ProductD;
