import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const authData = useSelector((state) => state.authData);
  const userId = authData?.authData?._id;

  return (
    <div className="NavBar">
      <Link to="/explore">Explore</Link>
      <Link to={`/profile/${userId}`}>Profile</Link>
      <Link to="/inbox">Inbox</Link>
    </div>
  );
};

export default NavBar;