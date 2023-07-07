import React from "react";
import "./downloadApp.css";
import phone from "../../assets/phone.png";
import google from "../../assets/playStore.png";
import apple from "../../assets/appStore.png";

const DownloadApp = () => {
  return (
    <div className="downloadApp">
      <div className="downloadApp__content">
        <h1>DOWNLOAD APP & GET THE VOUCHER!</h1>
        <p>
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div className="downloadApp__content__buttons">
          <img src={google} alt="Google Play Store" />
          <img src={apple} alt="Apple App Store" />
        </div>
      </div>
      <div className="downloadApp__img">
        <img src={phone} alt="Phone" />
      </div>
    </div>
  );
};

export default DownloadApp;
