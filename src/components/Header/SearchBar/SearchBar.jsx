import React, { useState } from 'react';
import './SearchBar.css';
import SearchButton from '../../../assets/search.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  // state variable (searchQuery) & function (setSearchQuery) to update that state
  const [searchQuery, setSearchQuery] = useState('');
  // useNavigate hook for search results
  const navigate = useNavigate();

  // Event handler function - GET request for search
  const handleButtonClick = async () => {
    try {
      // Make request to backend server to search the MongoDB
      const response = await axios.get(`/search/${searchQuery}`);
      const userData = response.data;
      if (userData.length === 0) { // if no ID matches
        console.log('User not found');
      } else {
        const userId = userData[0]._id; // if found define ID and take to profile page
        navigate(`/search/profile/${userId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // search bar input function
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Find Your #Style & @Friends Here"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="submitButton" onClick={handleButtonClick}>
        <img src={SearchButton} alt="Submit" className="submitIcon" />
      </button>
    </div>
  );
};

export default SearchBar;
