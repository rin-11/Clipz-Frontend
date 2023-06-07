import React, { useState } from 'react';

const EditUser = ({ onSave, onCancel }) => {
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'displayName') {
      setDisplayName(value);
    } else if (name === 'profilePicture') {
      setProfilePicture(files[0]);
    }
  };

  const handleSubmit = () => {
    onSave(displayName, profilePicture);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="EditUser">
      <div className="modalContainer">
        <div className="modalContent">
          <h2>Edit User Profile</h2>
          <form>
            <div className="formGroup">
              <label htmlFor="displayName">Display Name:</label>
              <input type="text" id="displayName" name="displayName" onChange={handleInputChange} />
            </div>
            <div className="formGroup">
              <label htmlFor="profilePicture">Profile Picture:</label>
              <input type="file" id="profilePicture" name="profilePicture" onChange={handleInputChange} />
            </div>
            <div className="buttonGroup">
              <button type="button" className="saveButton" onClick={handleSubmit}>
                Save
              </button>
              <button type="button" className="cancelButton" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
