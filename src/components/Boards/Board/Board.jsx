import React from 'react'
import './Board.css'

const Board = ({data}) => {
  return (
    <div className="Board">
    <img src={data.image} alt="Board" />
    <div className="details">
        <span><b>{data.boardName}</b></span>
        <span> {data.keywords}</span>
        {/* <span> {data.isPrivate}</span> */}
    </div>
</div>
  )
}

export default Board