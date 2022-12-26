import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">msaBooking</span>
        <div className="navItem">
          <button className="navButtonfx">List your property</button>
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
