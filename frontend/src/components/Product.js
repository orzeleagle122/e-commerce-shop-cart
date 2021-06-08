import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product: { imageUrl, name, price, description, _id } }) => {
  return (
    <div className="products">
      <img src={imageUrl} alt={name} />
      <div className="products__info">
        <p className="info__name">{name}</p>
        <p className="info__desc">{description.substring(0, 100)}...</p>
        <p className="info__price">${price}</p>
        <Link to={`/products/${_id}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
