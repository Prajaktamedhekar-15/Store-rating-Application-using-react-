

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../service/service.js";
import '../style/loginPage.css';

let Login = () => {
  let navigate = useNavigate();
  let [login, setLogin] = useState({ email: "", password: "" });

  let eventLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value});
  };

  let verifyLogin = async () => {
    let result = await loginUser(login.email, login.password);
    if (result.role === "admin") {
      navigate("/admin", { state: { user: result } });
    } else if (result.role === "user") {
      navigate("/guser", { state: { user: result } });
    } else if (result.role === "owner") {
      navigate("/owner", { state: { user: result } });
    } else {
      alert("Invalid Username & Password");
    }
  };

  return (
    <div className="login-container rounded shadow bg-light">
      <div className="login-overlay"></div>
      <div className="login-box">
        <center>
          <h1>Login</h1>
        </center>

        <div className="form">
          <div className="form-group mb-3">
            <label className="form-label">Enter the Username</label>
            <input
              type="text"
              name="email"
              id="email"
              value={login.email}
              className="form-control"
              placeholder="Enter the Username"
              onChange={eventLogin}
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Enter the Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={login.password}
              className="form-control"
              placeholder="Enter the password"
              onChange={eventLogin}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="button"
              value="Login"
              className="form-control btn btn-dark mt-3"
              onClick={verifyLogin}
            />
          </div>
        </div>

        <center>
          <span>
            Don’t have an account? <Link to="/Register">Register</Link>
          </span>
        </center>
      </div>
    </div>
  );
};

export default Login;
