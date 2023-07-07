import React from "react";
import "./sale.css";
import sale from "../../assets/sale.png";

const Sale = () => {
  return (
    <div className="sale">
      <div className="sale__img">
        <img src={sale} alt="Sale" />
      </div>
      <div className="sale__content">
        <div className="sale__content__title">
          <h1>PAYDAY SALE NOW</h1>
        </div>
        <div className="sale__content__description">
          <p>
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
        </div>
        <div className="sale__content__tc">
          <p>1 June - 10 June 2021</p>
          <span>*Terms & Conditions apply</span>
        </div>
        <button className="custom__button">Shop Now</button>
      </div>
    </div>
  );
};

export default Sale;
