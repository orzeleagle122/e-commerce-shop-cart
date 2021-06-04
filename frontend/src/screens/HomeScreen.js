import React from "react";
import Product from "../components/Product";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <h2 classname="homescreen__title">Lattttest Products</h2>
      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
