import React from 'react'
import './FriendsDisplay.css'

import { Followers } from '../../seedData/friendsData'
import { Followings } from '../../seedData/friendsData'

const FriendsDisplay = () => {
  // maps over each follower in the Friends array and returns a JSX block for each friend
  //  friend and id parameters are used to access the properties of each friend in the array
  return (
    <div className="Connect">
      <div className="followerslist">
        <h3>Followers</h3>
        {Followers.map((follower, id)=>{
              return(
              <div className="followers">
                    <div>
                    <img src={follower.img} alt="" className='followerImage'/>
                      <div className="displayname">
                        <span>{follower.displayname}</span>
                        <span>@{follower.username}</span>
                      </div>
                    </div>
              </div>
              )
            })}
        </div>
        <div className="followinglist">
        <h3>Following</h3>
          {Followings.map((following, id)=>{
                return(
                <div className="following">
                      <div>
                      <img src={following.img} alt="" className='followingImage'/>
                        <div className="displayname">
                          <span>{following.displayname}</span>
                          <span>@{following.username}</span>
                        </div>
                      </div>
                </div>
                )
              })}
        </div>
  </div>
 )
}


export default FriendsDisplay