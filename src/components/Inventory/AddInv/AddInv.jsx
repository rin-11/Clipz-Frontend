import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadImage, uploadInventory } from "../../../actions/UploadAction";

import './AddInv.css';


const AddInv = ({ onPreview }) => {
  const dispatch = useDispatch(); // dispatch function to allow actions

  // get user info
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.user?._id;


  // useRef hook to reference values later on
  const nameRef = useRef();
  const catRef = useRef();
  const imageRef = useRef();

  // create state variables set to null
  const [addInvItem, setAddInvItem] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

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
    const newInventory = {
      userId,
      name: nameRef.current.value,
      category: catRef.current.value,
    };

    // store images locally and call based on saved fileName and data 
    console.log(newInventory);
    const data = new FormData();
    const fileName = Date.now() + addInvItem.name;
    data.append("name", fileName);
    data.append("file", addInvItem);
    newInventory.image = fileName;

    console.log(newInventory); // new item object 
    dispatch(uploadImage(data)); // upload image action
    dispatch(uploadInventory(newInventory)); // upload inventory action


    resetAddInv();
  }; // reset form

  const resetAddInv = () => {
    setAddInvItem(null);
    setName('');
    setCategory('');
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
                ref={nameRef}
              />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                ref={catRef}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddInv;
