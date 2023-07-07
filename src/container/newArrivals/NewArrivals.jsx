import React from "react";
import "./newArrivals.css";
import Subheading from "../../components/subheading/Subheading.jsx";
import ProductCard from "../../components/productCard/ProductCard";
import hoodies from "../../assets/hoodies.png";
import coats from "../../assets/coats.png";
import tees from "../../assets/tees.png";

const NewArrivals = () => {
  return (
    <div className="newArrivals">
      <Subheading label="New Arrivals" />
      <div className="newArrivals__products">
        <div className="newArrivals__products__product">
          <ProductCard
            productImg={hoodies}
            productName="Hoodies & Sweatshirts"
          />
        </div>
        <div className="newArrivals__products__product">
          <ProductCard
            className="newArrivals__products__product"
            productImg={coats}
            productName="Coats & Parkas"
          />
        </div>{" "}
        <div className="newArrivals__products__product">
          <ProductCard
            className="newArrivals__products__product"
            productImg={tees}
            productName="Tee's & T-Shirt"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
