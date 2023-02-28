import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const HelpCenter = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>Help Center</h3>
        <div>
          <h3>Welcome to the Help Center</h3>
          <p>
            Sign in to contact Customer Service – we're available 24 hours a day
          </p>
          <div>
            <div>
              <FontAwesomeIcon icon={faMessage} />
              <p>Send us a message</p>
              <span>
                Contact our agents about your booking, and we'll reply as soon
                as possible.
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>Call us</p>
              <span>
                For anything urgent, you can call us 24/7 at a local or
                international phone number.
              </span>
            </div>
            <button>Sign in</button>
          </div>
          <button>Continue without an account</button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
