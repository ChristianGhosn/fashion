import React from "react";
import "./brands.css";
import hm from "../../assets/h&m.svg";
import obey from "../../assets/obey.svg";
import shopify from "../../assets/shopify.svg";
import lacoste from "../../assets/lacoste.svg";
import levis from "../../assets/levis.svg";
import amazon from "../../assets/amazon.svg";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands__item">
        <img src={hm} alt="H&M Brand" />
      </div>
      <div className="brands__item">
        <img src={obey} alt="OBEY Brand" />
      </div>
      <div className="brands__item">
        <img src={shopify} alt="Shopify Brand" />
      </div>
      <div className="brands__item">
        <img src={lacoste} alt="Lacoste Brand" />
      </div>
      <div className="brands__item">
        <img src={levis} alt="Levis Brand" />
      </div>
      <div className="brands__item">
        <img src={amazon} alt="Amazon Brand" />
      </div>
    </div>
  );
};

export default Brands;
