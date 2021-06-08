import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({
  product: { name, imageUrl, price, countInStock, qty, _id },
  handleQtyChange,
  handleRemoveFromCart,
}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={imageUrl} alt={name} />
      </div>
      <Link to={`/product/${_id}`} className="cartitem__name">
        <p>{name}</p>
      </Link>

      <p className="cartitem__price">${price}</p>

      <select
        className="cartitem__select"
        value={qty}
        onChange={(e) => handleQtyChange(_id, e.target.value)}
      >
        {[...Array(countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cartitem__deleteButton"
        onClick={() => handleRemoveFromCart(_id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
