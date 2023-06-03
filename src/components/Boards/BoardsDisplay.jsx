import React from 'react'
import './BoardsDisplay.css'
import { BoardsData } from '../../seedData/boardsData'
import Board from '../Boards/Board/Board'

const BoardsDisplay = () => {
    return (
        <div className="BoardsDisplay">
          <h2>Style Boards</h2>
        <div className="Boards">
        {BoardsData.map((board, id)=>{
            return <Board data={board} id={id}/>
        })}
        </div>
        <div className="createButton">
        <button class="new-board" role="button">New Board</button>
        </div>
    </div>
      )
    }

export default BoardsDisplay