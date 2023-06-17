import React, { useState, useEffect } from 'react';
import './InvItem.css';
import EditInv from '../EditInv/EditInv.jsx';
import { useDispatch, useSelector } from "react-redux";
import { deleteInventoryItem } from '../../../actions/InventoryAction'


const InvItem = ({ data }) => {
  const dispatch = useDispatch()
  const baseURL = process.env.REACT_APP_BASE_URL;
  const imageUrl = baseURL + `/inventory/${data.image}`;
  const invId = data._id;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(data.name);
  const [category, setCategory] = useState(data.category);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (newName, newCategory) => {
    setName(newName);
    setCategory(newCategory);
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteInventoryItem(invId))
    console.log('Deleting item' + invId);
  };

  return (
    <div className="InvItem">
      <div className="details">
        <img src={imageUrl} alt="InvItem" />
        {!isEditing ? (
          <>
            <span>
              <b>{name}</b>
            </span>
            <span>{category}</span>
          </>
        ) : (
          <EditInv
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
            initialName={name}
            initialCategory={category}
          />
        )}
      </div>
      <div className="editItemButton">
        {isEditing ? (
          <button onClick={handleDelete}>Delete</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default InvItem;