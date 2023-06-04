import React from 'react'
import { Link } from "react-router-dom";
import "./Profile.css";
import UserDisplay from '../../components/UserDisplay/UserDisplay';
import FriendsDisplay from '../../components/FriendsDisplay/FriendsDisplay';
import TrendsDisplay from '../../components/TrendsDisplay/TrendsDisplay';
import InvDisplay from '../../components/Inventory/InvDisplay';
import BoardsDisplay from '../../components/Boards/BoardsDisplay';



const Profile = () => {
  return (
    <div className="Profile">
      <UserDisplay/>
      <FriendsDisplay/>
      <TrendsDisplay/>
      <InvDisplay/>
      <BoardsDisplay/>
    </div>
  )
}

export default Profile