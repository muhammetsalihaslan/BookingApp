import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Currency from "../currency/Currency";
import { flag } from "../../data.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringL, setIsHoveringL] = useState(false);
  const [isHoveringQ, setIsHoveringQ] = useState(false);
  const [open, setOpen] = useState(false);
  const [enter, setEnter] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOverL = () => {
    setIsHoveringL(true);
  };
  const handleMouseOutL = () => {
    setIsHoveringL(false);
  };
  const handleMouseOverQ = () => {
    setIsHoveringQ(true);
  };
  const handleMouseOutQ = () => {
    setIsHoveringQ(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNoEnter = () => {
    setEnter(false);
  };

  const handleEnter = () => {
    setEnter(true);
  };

  const handleDiv = () => {
    setEnter(false);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate("/")}>
          msaBooking
        </span>
        <div className="navItem">
          {isHovering && <span className="hide">Select your currency</span>}
          <button
            className="tbtnC"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          >
            TRY
          </button>

          {isHoveringL && <span className="hide">Select your language</span>}
          <button
            className="tbtnL"
            onMouseOver={handleMouseOverL}
            onMouseOut={handleMouseOutL}
            onClick={handleEnter}
          >
            ENG
          </button>
          {isHoveringQ && <span className="hide">Costumer service help</span>}
          <button
            className="tbtnQ"
            onMouseOver={handleMouseOverQ}
            onMouseOut={handleMouseOutQ}
          >
            <FontAwesomeIcon
              className="que"
              icon={faCircleQuestion}
              onClick={() => navigate("/help")}
            />
          </button>
          {/* <span className="tspn">Contact Customer Service</span> */}
          <button className="navButtonfx">List your property</button>
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
      {open && (
        <>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="closeM"
            onClick={handleClose}
          />
          <Currency />
        </>
      )}
      {enter && (
        <div className="language">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="closeL"
            onClick={handleNoEnter}
          />
          <h2 className="has2">Select your Language</h2>
          <h4 style={{ marginLeft: "10px", marginTop: "10px" }}>
            Suggest For You
          </h4>
          <div className="slanguage">
            {flag.map((item) => (
              <div className="flagh" onClick={handleDiv}>
                <img src={item.img} className="imgL" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
