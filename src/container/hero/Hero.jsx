import React from "react";
import "./hero.css";
import hero from "../../assets/hero-img.png";
import paint from "../../assets/paint.svg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero__content">
          <div className="hero__content__title">
            <h1>LET'S EXPLORE UNIQUE CLOTHES.</h1>
          </div>
          <div className="hero__content__text">
            <p>Live for Influential and Innovative fashion!</p>
          </div>
          <div className="hero__content__button">
            <img src={paint} alt="button design add-on" />
            <button className="custom__button">Shop Now</button>
          </div>
        </div>
        <div className="hero__img">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
