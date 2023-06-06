import React from 'react'
import './UserBoards.css'
import { BoardsData } from '../../seedData/boardsData'
import Board from '../Boards/Board/Board'

const UserBoards = () => {
    return (
        <div className="UserBoardsDisplay">
        <div className="UserBoards">
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

export default UserBoards