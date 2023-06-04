import React from 'react'
import './BoardsDisplay.css'
import { BoardsData } from '../../seedData/boardsData'
import Board from '../Boards/Board/Board'

const BoardsDisplay = () => {
    return (
        <div className="BoardsDisplay">
        <div className="Boards">
        {BoardsData.map((board, id)=>{
            return <Board data={board} id={id}/>
        })}
        </div>
    </div>
      )
    }

export default BoardsDisplay