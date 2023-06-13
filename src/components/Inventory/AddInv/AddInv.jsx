import React, { useState, useRef } from "react";
import './AddInv.css';


const AddInv = ({ onPreview }) => {
  // get user info
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.user?._id;

  // useRef hook to reference values later on
  const inputWords = useRef();
  const imageRef = useRef();

  // create state variables set to null
  const [addInvItem, setAddInvItem] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ownItem, setOwnItem] = useState(true);

// event handler function triggered when the user selects an image file
  const onAddInvChange = (event) => {
    // check if a file was selected & sets the addInvItem state to an object 
    if (event.target.files && event.target.files[0]) {
      let image = event.target.files[0];
      setAddInvItem(image);
    }
  };

  const handleAddInv = (event) => {
    event.preventDefault();
    // event handler function triggered when the user clicks the upload button creating object
    const newItem = {
      userId,
      name: inputWords.current.value,
      category: inputWords.current.value,
      ownItem
    };

    // store images locally and call based on saved fileName and data 
    console.log(newItem);
    const data = new FormData();
    const fileName = Date.now() + addInvItem.name;
    data.append("name", fileName);
    data.append("file", addInvItem);
    newItem.image = fileName;
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
            <img src={URL.createObjectURL(addInvItem)} alt="" />
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={inputWords}
              />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                ref={inputWords}
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
