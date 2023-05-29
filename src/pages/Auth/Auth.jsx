import React, { useState } from "react";
import "./Auth.css";

const UserAuth = () => {
    // handle register/login states
        // set register to false to user is first prompted to log in
    const [register, setRegister] = useState(false)
    // handle user input data (set inputs to null to start)
    const [userData, setUserData]= useState({email:"", username:"", displayname:"", password:"", confirmpassword:""})

    // check password and confirmpassword are the same value when user hits regsiser
    const [confirmPassword, setConfirmPassowrd] = useState(true)
 
      // handle user input changes when user hits submit
  const handleChange = (e)=> {
    setUserData({...userData, [e.target.name]: e.target.value})
  }


  return (
    <div className="UserAuth">

      <div className="Logo">
            {/* Insert Logo Image and Site Description Here */}
      </div>

      {/*  Register/Login Side  */}
      <div className="register-login">
      <form className="authForm">
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
          onChange = {handleChange}
        />
          <input
          type="text"
          placeholder="Display Name"
          className="userInput"
          name="displayname"
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
            onChange = {handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            className="userInput"
            name="password"
            placeholder="Password"
            onChange = {handleChange}
          />
          {/* only confirm password if register is true */}
         {register && <input
            type="password"
            className="userInput"
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange = {handleChange}
          />}
        </div>
        
        {/* Display for when password do not match and confirmPassword is set to false */}
        <span style={{ color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px", display: confirmPassword ? "none" : "block"}}>
            Passwords Do Not Match
          </span>

        <div>
            {/* onClick using previous value of setRegister to change when clicked to change from register to login forms */}
        <span style={{fontSize: '12px', cursor:"pointer"}} onClick={()=> setRegister((prev)=>!prev)}>
            {/* Display different texts based on register status */}
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