import React from 'react'
import "./Explore.css";
import FriendsDisplay from '../../components/FriendsDisplay/FriendsDisplay';
import TrendsDisplay from '../../components/TrendsDisplay/TrendsDisplay';


const Explore = () => {
  return (
    <div className="Explore">
      <TrendsDisplay/>
      <FriendsDisplay/>
    </div>
  )
}

export default Explore