import React from "react";
import "./subheading.css";
import paint from "../../assets/paint.svg";
const Subheading = ({ label }) => {
  return (
    <div className="subheading">
      <h1>{label}</h1>
      <img src={paint} alt="Subheading detail" />
    </div>
  );
};

export default Subheading;
