import React from 'react'
import "./Explore.css";
import BoardsDisplay from '../../components/Boards/BoardsDisplay';
import TrendsDisplay from '../../components/TrendsDisplay/TrendsDisplay';


const Explore = () => {
  return (
    <div className="Explore">
      <TrendsDisplay/>
      <BoardsDisplay/>

    </div>
  )
}

export default Explore