import React from "react";
import "./footer.css";
import CTA from "../../components/cta/CTA";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__cta">
        <CTA />
      </div>
      <div className="footer__content">
        <div className="footer__content__main">
          <h1>FASHION</h1>
          <p>Complete your style with awesome clothes from us.</p>
          <div className="footer__content__main__socials">
            <div className="footer__content__main__socials__box">
              <BiLogoFacebook />
            </div>
            <div className="footer__content__main__socials__box">
              <BiLogoInstagram />
            </div>
            <div className="footer__content__main__socials__box">
              <BiLogoTwitter />
            </div>
            <div className="footer__content__main__socials__box">
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
        <div className="footer__content__company">
          <h5>Company</h5>
          <p>About</p>
          <p>Contact Us</p>
          <p>Support</p>
          <p>Careers</p>
        </div>
        <div className="footer__content__quickLink">
          <h5>Quick Link</h5>
          <p>Share Location</p>
          <p>Orders Tracking</p>
          <p>Size Guide</p>
          <p>FAQs</p>
        </div>
        <div className="footer__content__legal">
          <h5>Legal</h5>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
