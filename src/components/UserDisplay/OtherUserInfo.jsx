import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { followUser } from '../../api/UserRequest';
import './OtherUserInfo.css'
const OtherUserInfo = () => {
    const dispatch = useDispatch()
  const { id } = useParams(); // Get the user ID from the URL parameter
  const [userInfo, setUserInfo] = useState(null);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    // Fetch the user info from MongoDB using the ID
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`/search/profile/${id}`);
        const userData = response.data;

        if (userData) {
          setUserInfo(userData);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInfo();
  }, [id]);

  const handleFollow = () => {
    const currentUserId = user?.user?._id; 
    dispatch(followUser(id, { currentUserId }));
    console.log('Followed' + id);
  };

  return (
      <div className="OtherUserInfo">
      {userInfo ? (
        <div>
            <div className="OtherUserPropic">
            <img src={userInfo.profilePicture} alt="user profilephoto" />
            </div>
            <div className="OtherProfileName">
                <h2>{userInfo.displayName}</h2>
                <h3>{userInfo.username}</h3>
            </div>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
      <div className="followButton">
              <button className="followButton"onClick={handleFollow}>
                <h4>Follow</h4>
              </button>
          </div>
    </div>
  );
};

export default OtherUserInfo;
