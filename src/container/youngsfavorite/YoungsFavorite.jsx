import React from "react";
import "./youngsfavorite.css";
import Subheading from "../../components/subheading/Subheading";
import ProductCard from "../../components/productCard/ProductCard";
import trending from "../../assets/trending.png";
import under40 from "../../assets/under40.png";

const YoungsFavorite = () => {
  return (
    <div className="youngsfavorite">
      <div className="youngsfavorite__heading">
        <Subheading label="Young's Favorite" />
      </div>
      <div className="youngsfavorite__content">
        <div className="youngsfavorite__content__card">
          <ProductCard
            productImg={trending}
            productName="Trending on Instagram"
          />
        </div>
        <div className="youngsfavorite__content__card">
          <ProductCard productImg={under40} productName="All Under $40" />
        </div>
      </div>
    </div>
  );
};

export default YoungsFavorite;
