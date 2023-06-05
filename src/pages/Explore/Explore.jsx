import React from 'react'
import "./Explore.css";
import BoardsDisplay from '../../components/Boards/BoardsDisplay';
import TrendsDisplay from '../../components/TrendsDisplay/TrendsDisplay';
import FriendsDisplay from '../../components/FriendsDisplay/FriendsDisplay';
import UserDisplay from '../../components/UserDisplay/UserDisplay';
const Explore = () => {
  return (
    <div className="Explore">
      <UserDisplay/>
      <TrendsDisplay/>
      <FriendsDisplay/>
      <BoardsDisplay/>

    </div>
  )
}

export default Explore