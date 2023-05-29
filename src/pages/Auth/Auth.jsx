

// import useState from react
import React, { useState } from "react";
import "./Auth.css";

// Use authReducer, authAction, and authRequest files for implementing auth functionality
      // authReducer file: contains a Redux reducer function that handles state updates related to authentication-- Defines the initial state for authentication, (logged in or logged out), user information (username, email).. reducer listens for specific action types dispatched by authAction and updates
      // authAction file: contains action functions that create/return actions related to user auth (logIn/register functions)
      // authRequest file: contains utility functions/API request logic specifically related to authentication. Axios library is used to make HTTP requests & handle responses

// import auth functions
import { registerUser, loginUser } from '../../actions/AuthAction'

import { useDispatch, useSelector } from "react-redux";

const UserAuth = () => {
    // handle register/login states -- set inputs to null to start
    const initialState = {
        email:"", username:"", displayname:"", password:"", confirmpassword:""
    };

    // dipatch
    const dispatch = useDispatch();

    // set register to false to user is first prompted to log in
    const [register, setRegister] = useState(false);

    // userData
    const [userData, setUserData] = useState(initialState);

    // Check password and confirmpassword are the same value when user hits regsiser
    const [confirmPassword, setConfirmPassword] = useState(true);

    // Reset input forms 
    const resetForms=()=>{
        setConfirmPassword(true);
        setUserData(initialState);
    };

    // handle user input changes when user hits submit
    const handleChange = (e)=> {
        setUserData({...userData, [e.target.name]: e.target.value})
    };

     // Form Submission
     const handleSubmit = (e) => {
        setConfirmPassword(true);
        e.preventDefault(); // page will not redirect onSubmit
        if (registerUser) { // if password and confirmpassword do not match
          userData.password === userData.confirmpassword
            ? dispatch(registerUser(userData))
            : setConfirmPassword(false); // change confirmPassword state
        } else {
          dispatch(loginUser(userData));
        }
      };

  return (
    <div className="UserAuth">

      <div className="Logo">
            {/* Insert Logo Image and Site Description Here */}
      </div>

      {/*  Register/Login Side  */}
      <div className="register-login">
      {/* add onSubmit function for checking passwords match */}
      <form className="authForm" onSubmit={handleSubmit}>
        {/* if register is true, render register form otherwise render login  */}
        <h3>{register ? "Register":"Sign In"}</h3>

 {/* only show display name input if register is true */}
         {register && 
          <div>
          <input
          type="text"
          placeholder="Username"
          className="userInput"
          name="username"
          value={userData.username}
          onChange = {handleChange}
        />
          <input
          type="text"
          placeholder="Display Name"
          className="userInput"
          name="displayname"
          value={userData.displayname}
          onChange = {handleChange}
        />
        </div>
        }


        <div>
          <input
            type="text"
            className="userInput"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange = {handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            className="userInput"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange = {handleChange}
          />
          {/* only confirm password if register is true */}
         {register && <input
            type="password"
            className="userInput"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={userData.confirmpassword}
            onChange = {handleChange}
          />}
        </div>
        
        {/* Display for when password do not match and confirmPassword is set to false */}
        <span style={{ color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px", display: confirmPassword ? "none" : "block"}}>
            Passwords Do Not Match
          </span>

        <div>

        {/* onClick using previous value of setRegister to change when clicked to change from register to login forms */}
        <span style={{fontSize: '12px', cursor:"pointer"}} 
        onClick={() => {
            resetForms()
            setRegister((prev) => !prev)
            }}>

            {/* Display different text based on register status */}
              {register ? "Already have an account? Click here to login": "Don't have an account? Click here to register"}
              </span>
        </div>

        {/* if register is true button says "Sign Up" else says "Log In"*/}
        <button className="button infoButton" type="submit">
          {register ? "Sign Up": "Sign In"}
          </button>

      </form>
    </div>
    </div>
  );
};


export default UserAuth;