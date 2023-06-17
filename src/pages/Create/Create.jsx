import React from 'react'
import { Link } from "react-router-dom";
import "./Create.css";
import UserBoards from '../../components/Boards/UserBoards';
import UserDisplay from '../../components/UserDisplay/UserDisplay';
import CreateBoard from '../../components/Boards/CreateBoard/CreateBoard';

const Create = () => {
  return (
    <div className="Create">  
    <CreateBoard/>
    <UserDisplay/>
    <UserBoards/>

    </div>
  )
}

export default Create