import React from 'react'
import { Link } from "react-router-dom";
import "./Profile.css";
import UserDisplay from '../../components/Profile/UserDisplay/UserDisplay';

const Profile = () => {
  return (
    <div className="Profile">
      <UserDisplay/>
      <div className="ProfileLinks">
        <Link to="/closet">Closet</Link>
         <Link to="/boards">Boards</Link>
    </div>
    </div>
  )
}

export default Profile