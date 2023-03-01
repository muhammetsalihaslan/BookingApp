import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./helpcenter.css";

const HelpCenter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="h3">Help Center</h3>
        <div className="container2">
          <h3 className="h32">Welcome to the Help Center</h3>
          <p style={{ padding: "8px" }}>
            Sign in to contact Customer Service – we're available 24 hours a day
          </p>
          <div className="container3">
            <div>
              <FontAwesomeIcon icon={faMessage} />
              <p>Send us a message</p>
              <span style={{ fontSize: `13px` }}>
                Contact our agents about your booking, and we'll reply as soon
                as possible.
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>Call us</p>
              <span style={{ fontSize: `13px` }}>
                For anything urgent, you can call us 24/7 at a local or
                international phone number.
              </span>
            </div>
          </div>
          <button className="btn1">Sign in</button>
          <button className="btn2">Continue without an account</button>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
