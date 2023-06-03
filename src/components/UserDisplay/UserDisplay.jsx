import React from 'react'
import './UserDisplay.css'
import ProfilePhoto from '../../assets/propic.png'
import Edit from '../../assets/edit.png'
import Follow from '../../assets/search.png'

const UserDisplay = () => {
  return (
    <div className="User">
    <div className="UserInfo">
        <div className="Propic">
            {/* this will be an upload link to add pro pic */}
            <img src= {ProfilePhoto} alt="user profile photo"/>
        </div>
        <div className="ProfileName">
            <h2>Display Name</h2>
            <h3>@Username</h3>
            <div className="ProfileRow">
                {/* Add function to check if username matches logged in user name else display follow button */}
                
                <div className="editButton">
                <button className="editButton">
                <h5>Edit Profile</h5>
                    <img src={Edit} alt="edit user information" className="editIcon" />
                </button>
                </div> 
            </div> 
        </div> 
    </div>
        <div className="followButton">
            <button className="followButton">
                <img src={Follow} alt="Submit" className="FollowIcon"/>
                <h5>Send Friend Request</h5>
            </button>
        </div>
    </div>
  )
}

export default UserDisplay