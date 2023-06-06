import React, { useState } from 'react';
import './AddInv.css';

const AddInv = ({ onPreview }) => {
// create state variables set to null
  const [addInvItem, setAddInvItem] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ownItem, setOwnItem] = useState(true);

// event handler function triggered when the user selects an image file
  const onAddInvChange = (event) => {
    // check if a file was selected & sets the addInvItem state to an object 
    if (event.target.files && event.target.files[0]) {
      let item = event.target.files[0];
      setAddInvItem({
        item: URL.createObjectURL(item),
        imageUrl: null,
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
      imageUrl: addInvItem.imageUrl,
    };
    console.log(newItem);

    resetAddInv();
  }; // reset form

  const resetAddInv = () => {
    setAddInvItem(null);
    setName('');
    setCategory('');
    setOwnItem(true);
  };

  // Call the onPreview function from the parent component
  const handlePreview = () => {
    onPreview();
  };

  const handleAddInventoryClick = () => {
    document.getElementById('addInvInput').click();
  };

  return (
    <div className="AddInv">
      {!addInvItem && (
        <div className="uploadButton">
          <button className="new-item" onClick={handleAddInventoryClick }>
            Add Inventory
          </button>
          <input
            id="addInvInput"
            type="file"
            accept="image/*"
            onChange={onAddInvChange}
            style={{ display: 'none' }}
          />
        </div>
      )}
      {addInvItem && (
        <div className="previewItem">
          <div className="inputFields">
            <button className="upload" onClick={handleAddInv}>
              Upload to Closet
            </button>
            <button className="cancel" onClick={resetAddInv}>
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
