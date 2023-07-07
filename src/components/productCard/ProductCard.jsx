import React from "react";
import "./productCard.css";
import arrow from "../../assets/arrow.svg";

const ProductCard = ({ productName, productImg }) => {
  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src={productImg} alt="Product" />
      </div>
      <div className="productCard__content">
        <div className="productCard__content--text">
          <h4>{productName}</h4>
          <p>Explore Now!</p>
        </div>
        <div className="productCard__content--arrow">
          <img src={arrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
