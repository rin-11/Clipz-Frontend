import React from 'react'
import './FriendsDisplay.css'

import { Friends } from '../../seedData/friendsData'

const FriendsDisplay = () => {
  // maps over each follower in the Friends array and returns a JSX block for each friend
  //  friend and id parameters are used to access the properties of each friend in the array
  return (
    <div className="Connect">
    <h3>Friends List</h3>
    {Friends.map((friend, id)=>{
          return(
          <div className="friends">
                <div>
                <img src={friend.img} alt="" className='friendImage'/>
                  <div className="displayname">
                    <span>{friend.displayname}</span>
                    <span>@{friend.username}</span>
                  </div>
                </div>
          </div>
          )
        })}
  </div>
 )
}


export default FriendsDisplay