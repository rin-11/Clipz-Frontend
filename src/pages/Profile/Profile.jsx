import React from 'react'
import { Link } from "react-router-dom";
import UserDisplay from '../../components/UserDisplay/UserDisplay';
import FriendsDisplay from '../../components/FriendsDisplay/FriendsDisplay';
import InvDisplay from '../../components/Inventory/InvDisplay';
import UserBoards from '../../components/Boards/UserBoards'


const Profile = () => {
  return (
    <div className="Profile">
      <UserDisplay/>
      <FriendsDisplay/>
      <InvDisplay/>
    </div>
  )
}

export default Profile