


import React, { useState } from 'react';
import { register } from '../service/service.js';
import '../style/addUser.css';

let AddUser = ({ user }) => {
  let [users, setUser] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    role: ''
  });

  let [errors, setErrors] = useState({});

  // handle input
  let registerUser = (e) => {
    setUser({
      ...users,
      [e.target.name]: e.target.value
    });
  };

  // validation function (NO regex)
  let validate = () => {
    let err = {};

    // Name: 20–60 chars
    if (!users.name || users.name.length < 2 || users.name.length > 60) {
      err.name = "Name must be between 2 and 60 characters.";
    }

    // Email basic check (must contain "@" and ".")
    if (
      !users.email ||
      !users.email.includes("@") ||
      !users.email.includes(".") ||
      users.email.startsWith("@") ||
      users.email.endsWith("@") ||
      users.email.startsWith(".") ||
      users.email.endsWith(".")
    ) {
      err.email = "Enter a valid email address.";
    }

    // Address: max 400 chars
    if (!users.address || users.address.length > 400) {
      err.address = "Address cannot exceed 400 characters.";
    }

    // Password: 8–16, must contain at least 1 uppercase + 1 special char
    if (!users.password || users.password.length < 8 || users.password.length > 16) {
      err.password = "Password must be 8–16 characters long.";
    } else {
      let hasUppercase = false;
      let hasSpecial = false;
      let specials = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

      for (let ch of users.password) {
        if (ch >= 'A' && ch <= 'Z') hasUppercase = true;
        if (specials.includes(ch)) hasSpecial = true;
      }

      if (!hasUppercase) {
        err.password = "Password must include at least one uppercase letter.";
      } else if (!hasSpecial) {
        err.password = "Password must include at least one special character.";
      }
    }

    // Role: required
    if (!users.role) {
      err.role = "Please select a role.";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // submit
  let registerCall = async () => {
    if (validate()) {
      let result = await register(
        users.name,
        users.email,
        users.password,
        users.address,
        users.role
      );
      alert(result);

      // reset
      setUser({
        name: '',
        email: '',
        password: '',
        address: '',
        role: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="adduser-container">
      <div className="adduser-overlay"></div>

      <div className="adduser-box">
        <h1>Add User</h1>

        <div className="form">
          <div className="form-group mb-3">
            <input type="text" name="name" value={users.name} className="form-control" placeholder="Enter Name" onChange={registerUser} />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          <div className="form-group mb-3">
            <input type="text" name="email" value={users.email} className="form-control" placeholder="Enter Email" onChange={registerUser}/>
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="form-group mb-3">
            <input type="text" name="address" value={users.address} className="form-control"  placeholder="Enter Address" onChange={registerUser}
            />
            {errors.address && <small className="text-danger">{errors.address}</small>}
          </div>

          <div className="form-group mb-3">
            <input  type="password"  name="password" value={users.password} className="form-control" placeholder="Enter Password" onChange={registerUser}/>
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          <div className="form-group mb-3">
            <select
              className="form-control"
              name="role"
              value={users.role}
              onChange={registerUser}
            >
              <option value="">Select Option</option>
              <option value="owner">Owner</option>
              <option value="user">User</option>
            </select>
            {errors.role && <small className="text-danger">{errors.role}</small>}
          </div>

          <div className="form-group mb-3 mt-4">
            <input type="button" className="form-control btn btn-dark" value="Register"  onClick={registerCall}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
