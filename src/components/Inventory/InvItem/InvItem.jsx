import React from 'react';
import './InvItem.css';
import axios from "axios";

const InvItem = ({ data }) => {
  // Construct the image URL
  const baseURL= process.env.REACT_APP_BASE_URL 
  const imageUrl = baseURL + `/inventory/${data.image}`;

  return (
    <div className="InvItem">
      <img src={imageUrl} alt="InvItem" />
      <div className="details">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.category}</span>
      </div>
    </div>
  );
};

export default InvItem;
