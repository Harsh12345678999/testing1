// ProductList.js
import React from 'react';
import "./getAllProduct.css"
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2 className='product-T'>Product List</h2>
      <ul className='product-vertical'>
        {products.map(product => (
          <li className="product-item" key={product._id}>
            <Link to={`/product/${product._id}`}  style={{ textDecoration: 'none' }}>
              <h3 className="product-name">Name: {product.name}</h3>
              <p className="product-price">Price: ₹ {product.price}</p>
              <p className="product-description">Description: {product.description}</p>
              <p className="product-category">Category: {product.category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
