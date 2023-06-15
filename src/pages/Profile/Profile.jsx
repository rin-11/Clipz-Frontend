import React from 'react'
import { Link } from "react-router-dom";
import "./Profile.css";
import UserDisplay from '../../components/UserDisplay/UserDisplay';
import FriendsDisplay from '../../components/FriendsDisplay/FriendsDisplay';
import InvDisplay from '../../components/Inventory/InvDisplay';
import UserBoards from '../../components/Boards/UserBoards'
import TrendsDisplay from '../../components/TrendsDisplay/TrendsDisplay';


const Profile = () => {
  return (
    <div className="Profile">
      <UserDisplay/>
      <FriendsDisplay/>
      <TrendsDisplay/>
      <InvDisplay/>
      <UserBoards/>  
    </div>
  )
}

export default Profile