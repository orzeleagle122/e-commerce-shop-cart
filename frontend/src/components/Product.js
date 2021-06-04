import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div className="products">
      <img
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        alt="productname"
      />
      <div className="products__info">
        <p className="info__name"></p>
        <p className="info__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
          suscipit nunc. Etiam sed neque nibh. Nullam in malesuada nisl, nec
          ullamcorper erat. Proin faucibus turpis a libero consectetur, ac
          posuere augue volutpat. Cras suscipit consequat urna, in ultrices
          tellus porta lacinia. Duis massa felis, luctus nec pretium et, aliquet
          vel ligula. Fusce venenatis nunc eget augue fermentum aliquet.
          Maecenas sem magna, tincidunt sit amet laoreet id, fringilla a arcu.
          Pellentesque ut dapibus libero. Sed at est id nunc ultricies ornare ac
          hendrerit nunc. Ut quis est libero. Donec posuere erat a condimentum
          consequat. Aliquam facilisis auctor finibus. Cras lacinia mauris eget
          hendrerit tempus.
        </p>
        <p className="info__price">$499</p>
        <Link to={`/products/${1111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
