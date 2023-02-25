import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Currency = () => {
  return (
    <div className="currency">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close"
        // onClick={() => setOpen(false)}
      />
      <h2>Select your currency</h2>
      <div className="Scurrency">
        <h4>Suggest For You</h4>
        <div>
          <span>Turkish Lira</span>
          <span>TRY</span>
        </div>
        <div>
          <span>Euro</span>
          <span>EUR</span>
        </div>
        <div>
          <span>Saudi Arabian Riyal</span>
          <span>SAR</span>
        </div>
        <div>
          <span>U.S. Dollar</span>
          <span>USD</span>
        </div>
        <div>
          <span>Paund Sterling</span>
          <span>GBP</span>
        </div>
        <div>
          <span>Canadian Dollar</span>
          <span>CAD</span>
        </div>
      </div>
      <div className="Acurrency">
        <h4>All Currencies</h4>
        <div>
          <span>Euro</span>
          <span>EUR</span>
        </div>
        <div>
          <span>Turkish Liras</span>
          <span>TRY</span>
        </div>
        <div>
          <span>Saudi Arabian Riyal</span>
          <span>SAR</span>
        </div>
        <div>
          <span>U.S. Dollar</span>
          <span>USD</span>
        </div>
        <div>
          <span>Paund Sterling</span>
          <span>GBP</span>
        </div>
      </div>
    </div>
  );
};

export default Currency;
