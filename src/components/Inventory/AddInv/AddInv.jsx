import React, { useState, useRef } from 'react';
import './AddInv.css';

const AddInv = ({ onPreview }) => {
// create state variables set to null
  const [addInvItem, setAddInvItem] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ownItem, setOwnItem] = useState(true);

// useRef (React hook) used to create a reference for the file input element
  const addInvRef = useRef();

// event handler function triggered when the user selects an image file
  const onAddInvChange = (event) => {
    // checks if a file was selected & sets the addInvItem state to an object 
    if (event.target.files && event.target.files[0]) {
      let item = event.target.files[0];
      setAddInvItem({
        item: URL.createObjectURL(item),
        imageUrl: null, // Placeholder for the image URL
      });
    }
  };

  const handleAddInv = () => {
    // event handler function triggered when the user clicks the upload button creating object
    const newItem = {
      name,
      category,
      ownItem,
      // stored image URL
      image: addInvItem.imageUrl,
    };
    console.log(newItem);

    resetAddInv(); // reset form
  };

  const resetAddInv = () => {
    setAddInvItem(null);
    setName('');
    setCategory('');
    setOwnItem(true);
    addInvRef.current.value = '';
  };
  const handlePreview = () => {
    onPreview(); // Call the onPreview function from the parent component
  };

  return (
    <div className="AddInv">
      {!addInvItem && (
        <div className="uploadButton">
          <label htmlFor="addInvItem" className="new-item" onClick={handlePreview}>
            Add Inventory
            <input
              type="file"
              id="addInvItem"
              accept="image/*"
              onChange={onAddInvChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      )}
      {addInvItem && (
        <div className="previewItem">
          <div className="inputFields">
            <button className="upload" onClick={handleAddInv}>
              Upload to Closet
            </button>
            <button className="cancel" onClick={() => setAddInvItem(null)}>
              Cancel
            </button>
            <img src={addInvItem.item} alt="" />
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="ownItem">
            <label>
              Check the box if you already own this item:
              <input
                type="checkbox"
                checked={ownItem}
                onChange={() => setOwnItem(!ownItem)}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};



export default AddInv;