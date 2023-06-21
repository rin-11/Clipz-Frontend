import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EditUser.css';
import { uploadImage } from '../../../actions/UploadAction';

const EditUser = ({ onSave, onCancel }) => { // onSave and onCancel are passed from UserInf (parent)
  
  // dispatch hook function to allow actions
  const dispatch = useDispatch();

  // get user info
  const { user } = useSelector((state) => state.authReducer.authData); // useSelector hook to access the authReducer's authData from the Redux state and extract the user object


  // hooks for React elements to directly interact with their DOM elements
  const nameRef = useRef();
  const catRef = useRef();
  const imageRef = useRef();

  // state variables and functions for setting user info
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);


  // Event Handlers:
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'displayName') {
      setDisplayName(value);
    }
  };
  const handlePropicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      setProfilePicture(image);
    }
  };
  const handleSubmit = async () => {
    if (profilePicture) {
      const formData = new FormData();
      const fileName = Date.now() + profilePicture.name;
      formData.append("name", fileName);
      formData.append("file", profilePicture);
      try {
        await dispatch(uploadImage(formData));
      } catch (error) {
        console.log(error);
      }
    }
    onSave(displayName, profilePicture);
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
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              ref={imageRef}
              onChange={handlePropicChange}
            />
            {profilePicture && (
              <img src={URL.createObjectURL(profilePicture)} alt="Selected Profile Picture" />
            )}
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
