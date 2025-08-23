import React, { useState, useEffect } from "react";
import { countUser, countStore } from "../service/service.js";
import "../style/adminDash.css"; // custom styles

let AdminDash = ({ user }) => {
  let [uCount, setUsercount] = useState(0);
  let [sCount, setStorecount] = useState(0);

  let totalUser = async () => {
    let count = await countUser();
    setUsercount(Number(count));
  };

  let totalStores = async () => {
    let count = await countStore();
    setStorecount(Number(count));
  };

  useEffect(() => {
    totalUser();
    totalStores();
  }, []);

  return (
    <>
      <center className="container-fluid mt-5 bg-secondary" style={{ width: "70%",borderRadius:"22px", padding:"2px" }}>
        <h1>Welcome  <br/>{user.name}</h1>
      </center>

      <div
        className="w-50 m-auto mt-5 d-flex justify-content-between border p-3"
        style={{ minHeight: "200px" }}
      >
        {/* Users Card */}
        <div className="custom-card card-users">
          <h3>Total Users</h3>
          <h3>{uCount}</h3>
        </div>

        {/* Stores Card */}
        <div className="custom-card card-stores">
          <h3>Total Stores</h3>
          <h3>{sCount}</h3>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
