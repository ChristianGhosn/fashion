import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" />
        <h1 className="logo--text">FASHION</h1>
      </div>
      <div className="nav__navigation">
        <ul className="nav__navigation__list">
          <li className="p__regularText">
            <a href="#catalogue">CATALOGUE</a>
          </li>
          <li className="p__regularText">
            <a href="#fashion">FASHION</a>
          </li>
          <li className="p__regularText">
            <a href="#favorite">FAVORITE</a>
          </li>
          <li className="p__regularText">
            <a href="#lifestyle">LIFESTYLE</a>
          </li>
          <button className="custom__button" type="button">
            SIGN UP
          </button>
        </ul>
      </div>

      <div className="nav__smallscreen">
        <GiHamburgerMenu
          fontSize={27}
          onClick={() => {
            setToggleNav(true);
          }}
        />
      </div>
      {toggleNav && (
        <div className="nav__smallscreen__overlay">
          <AiOutlineClose
            fontSize={27}
            className="overlay__close"
            onClick={() => {
              setToggleNav(false);
            }}
          />
          <ul className="nav__navigation--smallscreen__list">
            <li className="p__regularText text--white">
              <a href="#catalogue">CATALOGUE</a>
            </li>
            <li className="p__regularText text--white">
              <a href="#fashion">FASHION</a>
            </li>
            <li className="p__regularText text--white">
              <a href="#favorite">FAVORITE</a>
            </li>
            <li className="p__regularText text--white">
              <a href="#lifestyle">LIFESTYLE</a>
            </li>
            <button className="custom__button--reverse" type="button">
              SIGN UP
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
