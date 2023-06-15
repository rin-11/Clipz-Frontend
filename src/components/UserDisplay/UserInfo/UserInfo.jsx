import React, { useState, useEffect } from 'react';
import defaultProfilePicture from '../../../assets/propic.png';
import Edit from '../../../assets/edit.png';
import Logout from '../../../assets/search.png';
import './UserInfo.css';
import EditUser from '../EditUser/EditUser';
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from '../../../api/UserRequest';
import { logoutUser } from '../../../actions/AuthAction';
import { useNavigate } from 'react-router-dom'; // for routing to auth page 


const UserInfo = () => {
  // // initialize useNavigate & useDispatch
  const navigate = useNavigate(); 
  const dispatch = useDispatch()
  // Obtain the userId from the authData object
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.user?._id;  
  
  
  const [userData, setUserData] = useState(null); // stores the current display name & is initialized with  'Display Name' value -- still need to connect to MongoDB user info for storage
  const [isEditing, setIsEditing] = useState(false); // editing mode false to start until button pressed

  useEffect(() => {
    // Fetch user data and update state
    fetchUserData();
  }, []);

    const handleLogout = ()=> {
    dispatch(logoutUser()) // logout action from auth actions
    navigate('/auth');  // Redirect user to the /auth page
  }


  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      if (userId) {
        const response = await getUser(userId); // Use the correct userId
        setUserData(response.data);
      } else {
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  // Extracting necessary data from userData
  const displayName = userData?.displayName || 'Display Name';
  const profilePicture = userData?.profilePicture || defaultProfilePicture;
  const username = userData?.username || '@Username';

  const handleEditClick = () => { // function to set editing to true when edit profile button hit
    setIsEditing(true);
  };

  const handleSave = async (newDisplayName, newProfilePicture) => { // save updated profile pic and display name 
    try {
      const updatedData = {
        displayName: newDisplayName,
        profilePicture: newProfilePicture || userData.profilePicture,
      };
      const response = await updateUser(userId, updatedData);
      setUserData(response.data);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => { // no changes made and editing closed
    setIsEditing(false);
  };

  if (!userData) {
    return <div>User Not Found</div>;
  }

  return (
    <div className="UserInfo">
      <div className="Propic">
        <img src={profilePicture} alt="user profile" />
      </div>
      <div className="ProfileName">
        <h2>{isEditing ? <EditUser onSave={handleSave} onCancel={handleCancel} /> : displayName}</h2>
        <h3>{username}</h3>
        <div className="ProfileButtons">
          <div className="editButton">
            {!isEditing && (
              <button className="editButton" onClick={handleEditClick}>   
                <img src={Edit} alt="edit user information" className="editIcon" />
                <h5>Edit Profile</h5>
              </button>
            )}
          </div>
          <div className="logoutButton">
   
              <button className="logoutButton"onClick={handleLogout}>
                <img src={Logout} alt="Logout" className="logoutIcon" />
                <h4>Logout</h4>
              </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

