import React, { useState, useEffect } from 'react';
import './InvItem.css';
import EditInv from '../EditInv/EditInv.jsx';
import { useDispatch, useSelector } from "react-redux";


const InvItem = ({ data }) => {
  const dispatch = useDispatch()
  const baseURL = process.env.REACT_APP_BASE_URL;
  const imageUrl = baseURL + `/inventory/${data.image}`;
  const invId = data._id;

  const [name, setName] = useState(data.name);
  const [category, setCategory] = useState(data.category);
  

  const handleSave = (newName, newCategory) => {
    setName(newName);
    setCategory(newCategory);
  };


  return (
    <div className="InvItem">
      <div className="details">
        <img src={imageUrl} alt="InvItem" />
      </div>
      <div className="editItemButtons">
          <button>Like</button>
      </div>
    </div>
  );
};

export default InvItem;