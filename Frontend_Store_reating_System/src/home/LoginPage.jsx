// import React,{useState}from "react";
// import { Link ,useNavigate } from "react-router-dom";
// import {loginUser} from '../service/service.js';
// let Login = () => {

//     let navigate=useNavigate();
//   const bgStyle = {
//     backgroundImage: "url('loginbackimg.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: "92vh",
//     position: "relative",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: "hidden",

//   };

//   const overlayStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.4)", // adjust opacity here
//     zIndex: 1
//   };

//   const contentStyle = {
//     position: "relative",
//     zIndex: 2
//   };


//   let [login,setLogin]=useState({
//     email:'',
//     password:''
//   });

// let eventLogin=(e)=>{

// setLogin({
//   ...login,
//   [e.target.name]:e.target.value
// });
// }

// let verifyLogin=async()=>{
//     let result=await loginUser(login.email,login.password);
    


//     if(result.role==='admin'){
    
//         navigate("/admin",{ state: { user: result } });

//     }
//     else if(result.role==='user'){
//         navigate("/guser",{ state: { user: result } });
//     }
//     else if(result.role==='owner'){
//           navigate("/owner",{ state: { user: result } });
//     }
//     else{
//       alert("invalid userName & Password");
//     }


// }

//   return (
//     <>
      
//       <div style={bgStyle}>
//       <div style={overlayStyle}>


//         <div className="container bg-light  p-4 border rounded shadow-lg " style={{marginTop:'155px',maxWidth:'400px'}} >
//            <center>
//             <h1>Login</h1>
//           </center>

//           <div className="form">
//             <div className="form-group mb-3">
//               <label className="form-label">Enter the Username</label>
//               <input type="text" name="email" id="email" value={login.email} className="form-control border rounded-pill" placeholder="Enter the Username" onChange={(e)=>{eventLogin(e)}} />
//             </div>

//             <div className="form-group mb-3">
//               <label className="form-label">Enter the Password</label>
//               <input type="password" name="password" id="password" value={login.password} className="form-control  border rounded-pill" placeholder="Enter the password" onChange={(e)=>{eventLogin(e)}}/>
//             </div>

//             <div className="form-group mb-3">
//               <input type="button" value="Login" className="form-control btn btn-dark  mt-3 border rounded-pill" onClick={verifyLogin}/>
//               </div>
//           </div>

//           <center>
//             <span>
//               Don't have an account ? <Link to="/Register">Register</Link>
//             </span>
//           </center>
//         </div>
      
//        </div>
//    </div>
//     </>
//   );
// };

// export default Login;


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
