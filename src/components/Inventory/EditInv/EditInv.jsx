import React, { useState } from 'react';
import './EditInv.css';

const EditInv = ({ onSave, onCancel, initialName, initialCategory }) => {
  // state variables and functions for setting (changing)inventory info from initial
  const [name, setName] = useState(initialName);
  const [category, setCategory] = useState(initialCategory);

  // Event Handler for saving data change
  const handleSave = () => {
    onSave(name, category);
  };

  return (
    <div className="editInv">
      <div className="EditInvDisplay">
        <form>
          <div className="editItemNameForm">
            <label htmlFor="itemName">Name:</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="editCategoryForm">
            <label htmlFor="categoryName">Category:</label>
            <input
              type="text"
              id="categoryName"
              name="itemCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="editItemButtons">
            <button type="button" className="saveButton" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="cancelButton" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditInv;