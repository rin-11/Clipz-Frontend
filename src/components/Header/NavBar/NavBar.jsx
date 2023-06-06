import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // get the user ID stored locally in the user profile
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="NavBar">
      <Link to={`/explore/${user?.user._id}`}>Explore</Link>
      <Link to={`/profile/${user?.user._id}`}>Profile</Link>
      <Link to={`/inbox/${user?.user._id}`}>Inbox</Link>
    </div>
  );
};

export default NavBar;