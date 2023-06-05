import React from 'react';
import './BoardsDisplay.css';
import { BoardsData } from '../../seedData/boardsData';
import Board from '../Boards/Board/Board';

const BoardsDisplay = () => {
  return (
    <div className="BoardsDisplay">
      <div className="Boards">
        {BoardsData.map((board, index) => (
          <Board key={index} data={board} />
        ))}
      </div>
    </div>
  );
};

export default BoardsDisplay;