import React from 'react'

import './UserDisplay.css'
import ProfilePhoto from '../../../assets/propic.png'
import Edit from '../../../assets/edit.png'

const UserDisplay = () => {
  return (
    <div className="UserInfo">
        <div className="Propic">
            {/* this will be an upload link to add pro pic */}
            <img src= {ProfilePhoto} alt="user profile photo"/>
        </div>
        <div className="ProfileName">
            <h2>Display Name</h2>
            <div className="ProfileRow">
                <h4>@Username</h4>
                <div className="editButton">
                <button className="editButton">
                    <img src={Edit} alt="edit user information" className="editIcon" />
                </button>
                </div> 
            </div> 
            <div className="followCount">
                <span className="followers">Followers ###</span>
                <span className="following">Following ###</span>
            </div>
        </div>
    </div>
  )
}

export default UserDisplay