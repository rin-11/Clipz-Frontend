// import useState from react
import React, { useState } from "react";
import "./Auth.css";

// import auth functions
import { registerUser, loginUser } from '../../actions/AuthAction'

// import React Redux hooks
import { useDispatch, useSelector } from "react-redux";

const UserAuth = () => {
    // handle register/login states -- set inputs to null to start
    const initialState = {
        email:"", username:"",  password:"", confirmpassword:""
    };

    // dipatch actions from Redux
    const dispatch = useDispatch();

    // set register to false to user is first prompted to log in
    const [register, setRegister] = useState(false);

    // userData
    const [userData, setUserData] = useState(initialState);

    // Check password and confirmpassword are the same value when user hits regsiser
    const [confirmPassword, setConfirmPassword] = useState(true);

    // Reset input forms 
    const resetForms=()=>{
              // sets confirmPassword back to true
        setConfirmPassword(true);
        setUserData(initialState);
    };

    // handle user input changes when user hits submit
    const handleChange = (e)=> { // update the userData state with the new values from inputs
        setUserData({...userData, [e.target.name]: e.target.value})
    };

     // Form Submission --
     const handleSubmit = (e) => { 
        setConfirmPassword(true);
        e.preventDefault(); // page will not redirect onSubmit
        if (register) { // Check if the user wants to register --> if the password & confirm password are the same... 
          userData.password === userData.confirmpassword
            // If they are --> dispatch registerUser action with userData as the payload
            ? dispatch(registerUser(userData))
            // If they aren't --> sets confirmPassword to false 
            : setConfirmPassword(false); 
        } else {
    // If the user doesn't want to register --> dispatch loginUser action with userData as the payload
          dispatch(loginUser(userData));
        }
      };

  return (
    <div className="UserAuth">

      <div className="Register-Login">
      {/* add onSubmit function for checking passwords match */}
      <form className="AuthForm" onSubmit={handleSubmit}>
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
          <br></br>
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
        <span style={{fontSize: '12px', textDecoration: "underline", cursor:"pointer"}} 
        onClick={() => {
            resetForms()
            setRegister((prev) => !prev)
            }}>

            {/* Display different text based on register status */}
              {register ? "Already have an account? Click here to login": "Don't have an account? Click here to register"}
              </span>
        </div>

        {/* if register is true button says "Sign Up" else says "Log In"*/}
        <button className="register-signup-btn" type="submit">
          {register ? "Register": "Sign In"}
          </button>

      </form>
    </div>
    </div>
  );
};


export default UserAuth;