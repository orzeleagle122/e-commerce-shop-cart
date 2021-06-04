import React from "react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__img">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="img"
          />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price 4999xl</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            suscipit nunc. Etiam sed neque nibh. Nullam in malesuada nisl, nec
            ullamcorper erat. Proin faucibus turpis a libero consectetur, ac
            posuere augue volutpat. Cras suscipit consequat urna, in ultrices
            tellus porta lacinia. Duis massa felis, luctus nec pretium et,
            aliquet vel ligula. Fusce venenatis nunc eget augue fermentum
            aliquet. Maecenas sem magna, tincidunt sit amet laoreet id,
            fringilla a arcu. Pellentesque ut dapibus libero. Sed at est id nunc
            ultricies ornare ac hendrerit nunc. Ut quis est libero. Donec
            posuere erat a condimentum consequat. Aliquam facilisis auctor
            finibus. Cras lacinia mauris eget hendrerit tempus.
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$49999xl</span>
          </p>
          <p>
            status: <span>in stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
