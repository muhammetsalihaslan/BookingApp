import React from "react";
import "./currency.css";

const Currency = () => {
  return (
    <div className="currency">
      <h2 className="has2">Select your currency</h2>
      <h4 style={{ marginLeft: "10px", marginTop: "10px" }}>Suggest For You</h4>
      <div className="Scurrency">
        <div className="para">
          <span>Turkish Lira</span>
          <span>TRY</span>
        </div>
        <div className="para">
          <span>Euro</span>
          <span>EUR</span>
        </div>
        <div className="para">
          <span>Saudi Arabian Riyal</span>
          <span>SAR</span>
        </div>
        <div className="para">
          <span>U.S. Dollar</span>
          <span>USD</span>
        </div>
        <div className="para">
          <span>Paund Sterling</span>
          <span>GBP</span>
        </div>
        <div className="para">
          <span>Canadian Dollar</span>
          <span>CAD</span>
        </div>
      </div>
      <h4 style={{ marginLeft: "10px", marginTop: "10px" }}>All Currencies</h4>
      <div className="Acurrency">
        <div className="para">
          <span>Euro</span>
          <span>EUR</span>
        </div>
        <div className="para">
          <span>Turkish Liras</span>
          <span>TRY</span>
        </div>
        <div className="para">
          <span>Saudi Arabian Riyal</span>
          <span>SAR</span>
        </div>
        <div className="para">
          <span>U.S. Dollar</span>
          <span>USD</span>
        </div>
        <div className="para">
          <span>Paund Sterling</span>
          <span>GBP</span>
        </div>
        <div className="para">
          <span>Canadian Dollar</span>
          <span>CAD</span>
        </div>
      </div>
    </div>
  );
};

export default Currency;
