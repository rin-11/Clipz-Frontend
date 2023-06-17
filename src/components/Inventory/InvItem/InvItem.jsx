import React, { useState } from 'react';
import './InvItem.css';
import axios from "axios";

const InvItem = ({ data }) => {
  // Construct the image URL
  const baseURL= process.env.REACT_APP_BASE_URL 
  const imageUrl = baseURL + `/inventory/${data.image}`;

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(data.name);
  const [editedCategory, setEditedCategory] = useState(data.category);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const updatedItem = { ...data, name: editedName, category: editedCategory };
    try {
      await axios.put(`${baseURL}/inventory/${data._id}`, updatedItem);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/inventory/${data._id}`);
      // You can add additional logic here, such as updating the inventory state in Redux
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="InvItem">
      <img src={imageUrl} alt="InvItem" />
      {isEditing ? (
        <div className="edit-details">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="details">
          <span>
            <b>{data.name}</b>
          </span>
          <span> {data.category}</span>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvItem;
