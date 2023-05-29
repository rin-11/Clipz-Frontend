import React, { useState } from "react";
import "./Auth.css";

const UserAuth = () => {
    // set register to false to user is first prompted to log in
  const [register, setRegister] = useState(false)

  return (
    <div className="UserAuth">

      <div className="Logo">
            {/* Insert Logo Image and Site Description Here */}
      </div>

      {/*  Register/Login Side  */}
      <div className="register-login">
      <form className="authForm">
        {/* if register is true, render register form otherwise render login  */}
        <h3>{register ? "Sign up":"Log in"}</h3>

 {/* only show display name input if register is true */}
         {register && 
          <div>
          <input
          type="text"
          placeholder="Display Name"
          className="userInput"
          name="displayname"
        />
        </div>
        }


        <div>
          <input
            type="text"
            className="userInput"
            name="email"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="text"
            className="userInput"
            name="password"
            placeholder="Password"
          />
          {/* only confirm password if register is true */}
         {register && <input
            type="text"
            className="userInput"
            name="confirmpassword"
            placeholder="Confirm Password"
          />}
        </div>

        <div>
            <span style={{fontSize: '12px'}}>
                {/* add links to log in or register */}
              {register ? "Already have an account? Log In Here": "Don't have an account? Register Here"}
              </span>
        </div>

        {/* if register is true button says "Sign Up" else says "Log In"*/}
        <button className="button infoButton" type="submit">
          {register ? "Sign Up": "Log In"}
          </button>

      </form>
    </div>
    </div>
  );
};


export default UserAuth;