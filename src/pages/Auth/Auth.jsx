// import useState from react
import React, { useState } from "react";
import "./Auth.css";
// import auth functions
import { registerUser, loginUser } from '../../actions/AuthAction'
// import React Redux hooks
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const UserAuth = () => {
    const initialState = { // handle register/login states -- set inputs to null to start
        email:"", username:"",  password:"", confirmpassword:""
    };
    const loading = useSelector((state) => state.auth.loading);
    const navigate = useNavigate();
    // dipatch actions from Redux
    const dispatch = useDispatch();
    // set register to false to user is first prompted to log in
    const [register, setRegister] = useState(false);
    // data retreived from user forms
    const [data, setData] = useState(initialState);
    // Check password and confirmpassword are the same value when user hits regsiser
    const [confirmPassword, setConfirmPassword] = useState(true);
    // Reset input forms 
    const resetForms = () => {
        setConfirmPassword(true);
        setData(initialState);
    };
    // handle user input changes when user hits submit
    const handleChange = (e)=> { // update the userData state with the new values from inputs
        setData({...data, [e.target.name]: e.target.value})
    };
    // Form Submission --
    const handleSubmit = async (e) => {
      setConfirmPassword(true); // page will not redirect onSubmit
      e.preventDefault();
      let userData;
      if (register) { // check passwords
        if (data.password === data.confirmpassword) {
        // if passwords match --
          // dispatch the 'registerUser' action with form data & assing userData variable
          userData = await dispatch(registerUser(data));
          // check if the 'userData' object exists and if it has a 'user' property and nav to explore page
          if (userData?.user) navigate(`/explore/${userData.user._id}`);
        } else { // if passwords do not match
          setConfirmPassword(false);
        }
      } else { // If the user doesn't want to register --> dispatch loginUser action with data as the payload
        userData = await dispatch(loginUser(data));
        if (userData?.user) navigate(`/explore/${userData.user._id}`);
      }
    };

      return (
        <div className="UserAuth">
      
          <div className="Register-Login">
            {/* add onSubmit function for checking passwords match */}
            <form className="AuthForm" onSubmit={handleSubmit}>
              {/* if register is true, render register form otherwise render login  */}
              <h3>{register ? "Register" : "Sign In"}</h3>
      
              {register ? (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="userInput"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    className="userInput"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="userInput"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
              )}
      
              <div>
                <input
                  type="password"
                  className="userInput"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                />
                {/* only confirm password if register is true */}
                {register && (
                  <input
                    type="password"
                    className="userInput"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={data.confirmpassword}
                    onChange={handleChange}
                  />
                )}
              </div>
        
        {/* Display for when password do not match and confirmPassword is set to false */}
        <span style={{ color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px", display: confirmPassword ? "none" : "block"}}>
            Passwords Do Not Match
          </span>

        <div className="switch-auth">

          {/* onClick using previous value of setRegister to change when clicked to change from register to login forms */}
          <span style={{fontSize: '20px', textDecoration: "underline", cursor:"pointer"}} 
          onClick={() => {
              resetForms()
              setRegister((prev) => !prev)
              }}>

              {/* Display different text based on register status */}
                {register ? "Already have an account? Click here to login": "Don't have an account? Click here to register"}
          </span>
        </div>

        {/* if register is true button says "Sign Up" else says "Log In"*/}
        <button className="register-signup-btn" type="submit" disabled={loading}>
              {loading ? "Loading" : register ? "SignUp" : "Login"}
          </button>
      </form>
    </div>
    </div>
  );
};


export default UserAuth;