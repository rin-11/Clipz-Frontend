import React, { useState, useEffect } from 'react';
import './InvItem.css';
import EditInv from '../EditInv/EditInv.jsx';

const InvItem = ({ data }) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const imageUrl = baseURL + `/inventory/${data.image}`;

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
    // Perform delete operation here
    console.log('Deleting item');
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
