import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta">
      <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
      <p>Type your email down below and be young wild generation</p>
      <div className="cta__input">
        <input type="email" placeholder="Add your email here" />
        <button className="custom__button">SEND</button>
      </div>
    </div>
  );
};

export default CTA;
