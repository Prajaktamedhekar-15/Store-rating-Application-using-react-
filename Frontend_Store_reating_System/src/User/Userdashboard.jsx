import React from "react";


const Userdashboard = ({ user }) => {
  return (
    <div className="container-fluid p-4">
      <div className="mx-auto border bg-light text-center p-4 mt-3 shadow"
           style={{ maxWidth: "500px" }}>
        <h1>Welcome To Our Store</h1>
        <h2>{user.name}</h2>
      </div>
    </div>
  );
};


export default Userdashboard;
