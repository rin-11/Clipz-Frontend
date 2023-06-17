import React, { useState } from 'react';
import './EditUser.css';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../../actions/UploadAction';

const EditUser = ({ onSave, onCancel }) => {
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'displayName') {
      setDisplayName(value);
    } else if (name === 'profilePicture') {
      setProfilePicture(files[0]);
    }
  };

  const handleSubmit = async () => {
    if (profilePicture) {
      const formData = new FormData();
      formData.append('image', profilePicture);
      try {
        await dispatch(uploadImage(formData));
      } catch (error) {
        console.log(error);
      }
    }
    onSave(displayName, profilePicture ? profilePicture.name : null);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="EditUser">
      <div className="EditUserDisplay">
        <h2>Edit Profile</h2>
        <form>
          <div className="editDisplayNameForm">
            <label htmlFor="displayName">Enter Display Name:</label>
            <input type="text" id="displayName" name="displayName" onChange={handleInputChange} />
          </div>
          <div className="editProPicForm">
            <label htmlFor="profilePicture" className="file-upload">
              Upload Profile Photo
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleInputChange}
              style={{ display: 'none' }}
            />
          </div>
          <div className="editButtons">
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
  );
};

export default EditUser;
