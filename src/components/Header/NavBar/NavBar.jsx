import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <Link to="/explore">Explore</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/inbox">Inbox</Link>
    </div>
  );
};

export default NavBar;
