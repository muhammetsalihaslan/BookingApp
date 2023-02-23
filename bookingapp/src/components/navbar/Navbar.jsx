import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringL, setIsHoveringL] = useState(false);
  const [isHoveringQ, setIsHoveringQ] = useState(false);
  const [open, setOpen] = useState(false);
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
          >
            TRY
          </button>

          {isHoveringL && <span className="hide">Select your language</span>}
          <button
            className="tbtnL"
            onMouseOver={handleMouseOverL}
            onMouseOut={handleMouseOutL}
          >
            ENG
          </button>
          {isHoveringQ && <span className="hide">Costumer service help</span>}
          <button
            className="tbtnQ"
            onMouseOver={handleMouseOverQ}
            onMouseOut={handleMouseOutQ}
          >
            <FontAwesomeIcon className="que" icon={faCircleQuestion} />
          </button>
          {/* <span className="tspn">Contact Customer Service</span> */}
          <button className="navButtonfx">List your property</button>
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
