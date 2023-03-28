import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, quantity, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="product images." />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <p className="seller-name">Manufacturer: {seller}</p>
        <p className="seller-name">Rating: {ratings} star</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
