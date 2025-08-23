import React from 'react';
import AdminDash from './adminDashbord';
import AddUser from './Adduser';    
import ViewUser from './viewUser';
import AddStore from './addStore';
import ViewStore from './viewStore';
import AdminSide from './adminSide';
import { Routes,Route,useLocation } from 'react-router-dom';
let Admin=()=>{
  const location = useLocation();
  const user = location.state?.user;
    return<>

       <div className="container-fluid p-0">
  <div className="row m-0">
    {/* Sidebar */}
    <div className="col-md-2 p-0">
      <AdminSide user={user} />
    </div>

    {/* Content */}
    <div className="col-md-10 p-2" style={{ backgroundColor: "#f1faee", minHeight: "100vh", borderRadius: "20px" }}>
      <Routes>
        <Route path="/" element={<AdminDash user={user} />} />
        <Route path="addUser" element={<AddUser user={user} />} />
        <Route path="viewUser" element={<ViewUser user={user} />} />
        <Route path="addStore" element={<AddStore user={user} />} />
        <Route path="viewStore" element={<ViewStore user={user} />} />
      </Routes>
    </div>
  </div>
</div>


    </>

}
export default Admin;