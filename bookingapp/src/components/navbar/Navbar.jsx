import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">msaBooking</span>
        <div className="navItem">
          <button className="tbtn">TRY</button>
          <button className="tbtn">ENG</button>
          <button className="tbtn">
            <FontAwesomeIcon className="que" icon={faCircleQuestion} />
          </button>
          <button className="navButtonfx">List your property</button>
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
