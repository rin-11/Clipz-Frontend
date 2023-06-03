import React, { useState } from 'react';
import './SearchBar.css';
import SearchButton from '../../../assets/search.png';
import axios from 'axios';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleButtonClick = async () => {
    try {
      // Make a request to your backend server to search the MongoDB
      const response = await axios.get(`/search/${searchQuery}`);
      // Handle the response data
      const userData = response.data;
      console.log('User data:', userData);

    } catch (error) {
      console.error(error);
    }
  };

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