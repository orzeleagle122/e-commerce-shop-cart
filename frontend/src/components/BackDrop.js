import React from "react";
import "./BackDrop.css";

const BackDrop = ({ show }) => {
  return show && <div className="backdrop"></div>;
};

export default BackDrop;
