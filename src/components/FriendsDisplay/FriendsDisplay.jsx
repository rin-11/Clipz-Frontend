import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import the Link component
import './FriendsDisplay.css';

const FriendsDisplay = () => {
  const user = useSelector((state) => state.authReducer.authData.user);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`/user/followers/${user._id}`);
        setFollowers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchFollowing = async () => {
      try {
        const response = await axios.get(`/user/following/${user._id}`);
        setFollowing(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFollowers();
    fetchFollowing();
  }, [user._id]);

  return (
    <div className="Connect">
      <div className="followerslist">
        <h3>Followers</h3>
        {followers.map((follower) => (
          <div className="followers" key={follower._id}>
            <Link to={`/profile/${follower._id}`}> {/* Link to the follower's profile page */}
              <div>
                <img src={follower.profilePicture} alt="" className="followerImage" />
                <div className="displayname">
                  <span>{follower.displayName}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="followinglist">
        <h3>Following</h3>
        {following.map((followedUser) => (
          <div className="following" key={followedUser._id}>
            <Link to={`/search/profile/${followedUser._id}`}> 
              <div>
                <img src={followedUser.profilePicture} alt="" className="followingImage" />
                <div className="displayname">
                  <span>{followedUser.displayName}</span>
                  <span>@{followedUser.username}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsDisplay;
