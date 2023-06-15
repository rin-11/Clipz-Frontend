import React, { useState } from "react";
import "./Auth.css";
import { registerUser, loginUser } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserAuth = () => {
  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const resetForms = () => {
    setConfirmPassword(true);
    setData(initialState);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setConfirmPassword(true);
    e.preventDefault();
    let userData;
    if (register) {
      if (data.password === data.confirmpassword) {
        userData = await dispatch(registerUser(data));
        if (userData?.authData?.user)
          navigate(`/explore/${userData.authData.user._id}`);
      } else {
        setConfirmPassword(false);
      }
    } else {
      userData = await dispatch(loginUser(data));
      if (userData?.authData?.user)
        navigate(`/explore/${userData.authData.user._id}`);
    }
  };

  return (
    <div className="UserAuth">
      <div className="Register-Login">
        <form className="AuthForm" onSubmit={handleSubmit}>
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

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPassword ? "none" : "block",
            }}
          >
            Passwords Do Not Match
          </span>

          <div className="switch-auth">
            <span
              style={{ fontSize: "20px", textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                resetForms();
                setRegister((prev) => !prev);
              }}
            >
              {register ? "Already have an account? Click here to login" : "Don't have an account? Click here to register"}
            </span>
          </div>

          <button className="register-signup-btn" type="submit" disabled={loading}>
            {loading ? "Loading" : register ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
