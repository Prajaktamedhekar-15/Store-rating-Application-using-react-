


// import React, { useState } from "react";
// import { register } from "../service/service.js";
// import "../style/register.css";

// let Register = () => {
//   let [user, setUser] = useState({
//             name: "",
//             email: "",
//             password: "",
//             address: "",
//             role: "",
//   });

//   let registerUser = (e) => {
//     setUser({...user,[e.target.name]: e.target.value
//     });
//   };

//   let registerData = async () => {
//     let result = await register(
//         user.name,
//         user.email,
//         user.password,
//         user.address,
//         user.role
//     );
//     alert(result);
//   };

//   return (
//     <div className="reg-container border">
//      <div className="reg-overlay"></div>
//       <div className="reg-box border">
//         <center>
//           <h1>Register</h1>
//         </center>

//         <div className="form">
//           <div className="form-group mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" name="name" value={user.name} id="name" className="form-control"  placeholder="Enter the Name" onChange={registerUser}/>
//           </div>
//           <div className="form-group mb-3">
//             <label  htmlFor="email" className="form-label">Email</label>
//             <input type="email" name="email" value={user.email} className="form-control" id="email"  placeholder="Enter the Email" onChange={registerUser} />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="add" className="form-label">Address</label>
//             <input type="text" name="address" value={user.address} className="form-control" id="add" placeholder="Enter the Address" onChange={registerUser} />
//           </div>
//           <div className="form-group mb-3">
//             <label id="pass" className="form-label">Password</label>
//             <input type="password" name="password" value={user.password} className="form-control" id="pass" placeholder="Enter the Password" onChange={registerUser}/>
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="role" className="form-label">Role</label>
//             <select className="form-control" name="role" id="role" value={user.role} onChange={registerUser}>
//                     <option value="">Select Option</option>
//                     <option value="owner">Owner</option>
//                     <option value="user">User</option>
//             </select>
//           </div>
//           <div className="form-group mb-3">
//             <input type="button" className="form-control btn btn-dark" value="Register"
//               onClick={registerData}
//             />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { register } from "../service/service.js";
import "../style/register.css"; // shared css

let Register = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role: "",
  });

  let [errors, setErrors] = useState({});

  let registerUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  let validateForm = () => {
    let newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!user.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }
    if (!user.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!user.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  let registerData = async () => {
    if (!validateForm()) return;

    let result = await register(
      user.name,
      user.email,
      user.password,
      user.address,
      user.role
    );
    alert(result);

    // reset after success
    setUser({
      name: "",
      email: "",
      password: "",
      address: "",
      role: "",
    });
  };

  return (
    <div className="reg-container border">
      <div className="reg-overlay"></div>
      <div className="reg-box border">
        <center>
          <h1>Register</h1>
        </center>

        <div className="form">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              id="name"
              className="form-control"
              placeholder="Enter the Name"
              onChange={registerUser}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              id="email"
              className="form-control"
              placeholder="Enter the Email"
              onChange={registerUser}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="add" className="form-label">Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              id="add"
              className="form-control"
              placeholder="Enter the Address"
              onChange={registerUser}
            />
            {errors.address && <small className="text-danger">{errors.address}</small>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="pass" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              id="pass"
              className="form-control"
              placeholder="Enter the Password"
              onChange={registerUser}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              className="form-control"
              name="role"
              id="role"
              value={user.role}
              onChange={registerUser}
            >
              <option value="">Select Option</option>
              <option value="owner">Owner</option>
              <option value="user">User</option>
            </select>
            {errors.role && <small className="text-danger">{errors.role}</small>}
          </div>

          <div className="form-group mb-3">
            <input
              type="button"
              className="form-control btn btn-dark"
              value="Register"
              onClick={registerData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
